import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { reader } from '@/lib/keystatic';
import { DocumentRenderer, DocumentRendererProps } from '@keystatic/core/renderer';
import { TerminalBlock } from '@/components/TerminalBlock';
import { WorkflowDiagram } from '@/components/WorkflowDiagram';
import { ArrowLeft, ArrowRight, CaretDownFill, CaretUpFill } from 'react-bootstrap-icons';
import TableOfContents from '@/components/TableOfContents';
import MobileTOC from '@/components/MobileTOC';

export async function generateStaticParams() {
  const slugs = await reader.collections.posts.list();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await reader.collections.posts.read(slug);

  if (!post) {
    notFound();
  }

  const { title, date, readTime } = post;
  const content = await post.content();
  
  // Fetch all posts to determine prev/next
  const allPosts = await reader.collections.posts.all();
  // Sort by date (assuming standard date string or add a sort field) - for now just using the list order
  // Ideally, you'd sort `allPosts` based on `entry.date` before finding index
  const sortedPosts = allPosts.sort((a, b) => new Date(b.entry.date).getTime() - new Date(a.entry.date).getTime());
  
  const index = sortedPosts.findIndex(p => p.slug === slug);
  const prevPost = index < sortedPosts.length - 1 ? sortedPosts[index + 1] : null;
  const nextPost = index > 0 ? sortedPosts[index - 1] : null;

  // Extract headings for TOC (Naive approach: manually parsing or using a remark plugin would be better, 
  // but for now we'll stick to manual if not available from Keystatic directly. 
  // Since Keystatic content is JSON, extracting headings serverside is possible but requires traversing the document tree)
  // For this implementation, we will skip auto-TOC generation or use a client component if needed.
  // However, the user asked to integrate the layout from example.tsx.
  // Let's implement the layout structure first.
  
  // NOTE: Auto-generating TOC from Keystatic document structure requires recursive parsing.
  // For simplicity and robustness in this turn, I will implement the layout structure. 
  // If TOC data isn't readily available, I will hide the TOC section or leave it empty/placeholder 
  // until a proper extraction utility is added. 
  
  // Let's try to extract basic H2s and H3s
  const tocItems: { label: string; href: string; level: number }[] = [];
  
  // Simple recursive function to find headings
  const getNodeText = (node: any): string => {
    if (typeof node?.text === 'string') return node.text;
    if (Array.isArray(node?.children)) return node.children.map(getNodeText).join('');
    return '';
  };

  const slugifyHeading = (text: string) =>
    text.toLowerCase().replace(/[^\w]+/g, '-').replace(/^-+|-+$/g, '');

  const extractHeadings = (node: any) => {
    if (node.type === 'heading' && (node.level === 2 || node.level === 3)) {
      const text = getNodeText(node);
      const slug = slugifyHeading(text);
      tocItems.push({ label: text, href: `#${slug}`, level: node.level });
    }
    if (node.children) {
      node.children.forEach(extractHeadings);
    }
  };
  
  // content() returns a promise that resolves to the document node tree
  const contentNode = await content; 
  if (Array.isArray(contentNode)) {
      contentNode.forEach(extractHeadings);
  } else {
      // It might be an object with children depending on Keystatic version/format
      // But usually it returns the structure directly.
      // Let's assume it's traversable.
      // Actually `await post.content()` returns the rich text structure.
      // We can inspect it.
      (contentNode as any[]).forEach(extractHeadings);
  }

  const hasToc = tocItems.length > 0;
  const headingIds = tocItems.map((item) => item.href.slice(1));
  let headingIndex = 0;

  const stateCodeColors: Record<string, string> = {
    matched: 'text-emerald-400',
    underpaid: 'text-amber-400',
    overpaid: 'text-sky-400',
    misdirected: 'text-rose-400',
    duplicate: 'text-violet-400',
  };

  const renderInlineCode = (children: React.ReactNode) => {
    const text =
      typeof children === 'string'
        ? children
        : getNodeText({ children: Array.isArray(children) ? children : [children] });

    if (stateCodeColors[text]) {
      return (
        <code className={`font-mono text-sm font-semibold ${stateCodeColors[text]} bg-zinc-900/80 px-1.5 py-0.5 rounded`}>
          {text}
        </code>
      );
    }

    const endpointMatch = text.match(/^(GET|POST|PUT|DELETE|PATCH)\s+(\/[^\s]+)$/);
    if (endpointMatch) {
      const [, method, path] = endpointMatch;
      return (
        <code className="font-mono text-sm text-zinc-300 bg-zinc-900/80 px-1.5 py-0.5 rounded">
          {method}{' '}
          <strong className="font-semibold text-[#a8e64c]">{path}</strong>
        </code>
      );
    }

    if (text.startsWith('/')) {
      return (
        <code className="font-mono text-sm bg-zinc-900/80 px-1.5 py-0.5 rounded">
          <strong className="font-semibold text-[#a8e64c]">{text}</strong>
        </code>
      );
    }

    return (
      <code className="font-mono text-sm text-zinc-300 bg-zinc-900/80 px-1.5 py-0.5 rounded">
        {children}
      </code>
    );
  };

  const renderers: DocumentRendererProps['renderers'] = {
    inline: {
        bold: ({ children }) => <strong>{children}</strong>,
        code: ({ children }) => renderInlineCode(children),
    },
    block: {
      paragraph: ({ children }: { children: React.ReactNode }) => <p className="text-zinc-400 mb-6 leading-relaxed">{children}</p>,
      heading: ({ level, children }: { level: number; children: React.ReactNode }) => {
        const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements;
        const className = level === 2 
          ? "text-4xl font-bold text-white mt-12 mb-6 font-figtree text-center" 
          : level === 3 
          ? "text-md font-bold text-white mt-8 mb-4" 
          : "text-xl font-bold text-white mt-6 mb-3";

        const id = level === 2 || level === 3 ? headingIds[headingIndex++] : undefined;
        
        return <HeadingTag id={id} className={`scroll-mt-28 ${className}`}>{children}</HeadingTag>;
      },
      image: ({ src, alt }) => (
        <div className="my-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
                src={src} 
                alt={alt} 
                className="w-full rounded-xl border border-zinc-800"
            />
            {alt && <p className="text-center text-zinc-500 text-sm mt-3">{alt}</p>}
        </div>
      ),
      list: ({ children, type }: { children: React.ReactNode; type: 'ordered' | 'unordered' }) => {
        const Tag = type === 'ordered' ? 'ol' : 'ul';
        const className = type === 'ordered' 
          ? 'list-decimal pl-5 mb-6 text-zinc-400 space-y-2 marker:text-zinc-400' 
          : 'list-disc pl-5 mb-6 text-zinc-400 space-y-2 marker:text-zinc-400';
        return (
          <Tag className={className}>
            {React.Children.map(children, child => (
              <li className="text-zinc-400 pl-1">{child}</li>
            ))}
          </Tag>
        );
      },
      table: ({ head, body }: { head?: { children: React.ReactNode }[]; body: { children: React.ReactNode }[][] }) => (
        <div className="my-8 overflow-x-auto rounded-xl border border-zinc-800 bg-[#0e0e11]">
          <table className="w-full min-w-[28rem] text-sm font-figtree">
            {head && head.length > 0 && (
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/60">
                  {head.map((cell, index) => (
                    <th
                      key={index}
                      className="px-4 py-3 text-left text-zinc-200 font-semibold tracking-wide"
                    >
                      {cell.children}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {body.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b border-zinc-800/70 last:border-0 hover:bg-zinc-900/30 transition-colors"
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`px-4 py-3 align-top ${cellIndex === 0 ? 'text-zinc-300' : 'text-zinc-400'}`}
                    >
                      {cell.children}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
  };

  const componentBlocks = {
    TerminalBlock: (props: { command: string; output?: string; title?: string }) => (
      <TerminalBlock 
        command={props.command} 
        output={props.output} 
        title={props.title} 
      />
    ),
    WorkflowDiagram: (props: { tools: any[]; layout?: 'hub' | 'sequence' }) => (
      <WorkflowDiagram tools={props.tools} layout={props.layout} />
    ),
  };

  return (
    <article className="w-full min-h-screen bg-[#09090b] text-white">
      <div className="max-w-5xl mx-auto pt-24 pb-12 px-6 md:px-0">
        
        <div className="md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,2.7fr)] md:gap-10">
          
          {/* Desktop TOC */}
          {hasToc && <TableOfContents items={tocItems} />}
          
           {/* If No TOC, keep the back link on the side or adjust layout? 
               The example.tsx hides the side column if no TOC. 
               But we usually want a back link. 
               Let's keep the sidebar for Back Link even if no TOC, or put it above content.
               The example code puts Back Link logic differently. 
               Let's stick to the example's grid layout but ensure Back Link is accessible.
           */}
           {!hasToc && (
             <div className="hidden md:block">
                <div className="sticky top-24">
                  <Link 
                    href="/blog"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to blog</span>
                  </Link>
                </div>
             </div>
           )}

          <div className={hasToc ? "md:col-span-1" : "md:col-span-2"}>
            {/* Mobile Back Link */}
             <div className="md:hidden mb-8">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to blog</span>
              </Link>
            </div>

            {/* Header */}
            <div className="mb-10">
              <div className="flex items-center gap-3 text-zinc-400 font-figtree mb-4 text-sm">
                <span>{date}</span>
                <span>•</span>
                <span>{readTime}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-figtree leading-tight mb-6">
                {title}
              </h1>

               <div className="flex items-center gap-4 border-b border-zinc-800 pb-12 mb-12">
                <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/404khai.jpeg" alt="Author" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-white font-medium">Khai</div>
                  <div className="text-zinc-500 text-sm">Software Engineer | ML | AI Agents | Flutter</div>
                </div>
              </div>
            </div>

            {/* Mobile TOC */}
            {hasToc && <MobileTOC items={tocItems} />}

            {/* Content */}
            <div className="prose prose-invert prose-zinc max-w-none font-figtree">
              <DocumentRenderer document={content} renderers={renderers} componentBlocks={componentBlocks} />
            </div>

            {/* Navigation */}
            <div className="mt-20 pt-10 border-t border-zinc-800 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prevPost ? (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="flex flex-col items-start justify-center rounded-2xl border border-zinc-900 bg-[#111111] px-6 py-4 hover:border-zinc-700 hover:bg-zinc-900/70 transition-colors"
                  >
                    <span className="text-zinc-500 text-xs mb-1 flex items-center gap-1">
                      <ArrowLeft/>
                      <span>Previous post</span>
                    </span>
                    <span className="text-zinc-100 font-figtree text-sm md:text-base leading-snug">
                      {prevPost.entry.title}
                    </span>
                  </Link>
                ) : (
                  <div className="flex flex-col items-start justify-center rounded-2xl border border-zinc-900 bg-[#111111] px-6 py-4 opacity-60 cursor-default">
                    <span className="text-zinc-500 text-xs mb-1 flex items-center gap-1">
                      <ArrowLeft/>
                      <span>Previous post</span>
                    </span>
                    <span className="text-zinc-100 font-figtree text-sm md:text-base leading-snug">
                      Coming soon
                    </span>
                  </div>
                )}

                {nextPost ? (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="flex flex-col items-start justify-center rounded-2xl border border-zinc-900 bg-[#111111] px-6 py-4 hover:border-zinc-700 hover:bg-zinc-900/70 transition-colors"
                  >
                    <span className="text-zinc-500 text-xs mb-1 flex items-center gap-1">
                      <span>Next post</span>
                      <ArrowRight/>
                    </span>
                    <span className="text-zinc-100 font-figtree text-sm md:text-base leading-snug">
                      {nextPost.entry.title}
                    </span>
                  </Link>
                ) : (
                  <div className="flex flex-col items-start justify-center rounded-2xl border border-zinc-900 bg-[#111111] px-6 py-4 opacity-60 cursor-default">
                    <span className="text-zinc-500 text-xs mb-1 flex items-center gap-1">
                      <span>Next post</span>
                      <ArrowRight/>
                    </span>
                    <span className="text-zinc-100 font-figtree text-sm md:text-base leading-snug">
                      Coming soon
                    </span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </article>
  );
}

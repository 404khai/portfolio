import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { reader } from '@/lib/keystatic';
import { DocumentRenderer, DocumentRendererProps } from '@keystatic/core/renderer';
import { TerminalBlock } from '@/components/TerminalBlock';
import { ArrowLeft } from 'react-bootstrap-icons';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await reader.collections.posts.read(slug);

  if (!post) {
    notFound();
  }

  const { title, date, readTime } = post;
  const content = await post.content();

  const renderers: DocumentRendererProps['renderers'] = {
    inline: {
        bold: ({ children }) => <strong>{children}</strong>,
    },
    block: {
      paragraph: ({ children }: { children: React.ReactNode }) => <p className="text-zinc-400 mb-6 leading-relaxed">{children}</p>,
      heading: ({ level, children }: { level: number; children: React.ReactNode }) => {
        const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements;
        const className = level === 2 
          ? "text-3xl font-bold text-white mt-12 mb-6" 
          : level === 3 
          ? "text-2xl font-bold text-white mt-8 mb-4" 
          : "text-xl font-bold text-white mt-6 mb-3";
        return <HeadingTag className={className}>{children}</HeadingTag>;
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
      )
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
  };

  return (
    <article className="min-h-screen bg-[#09090b] text-white">
      <div className="max-w-5xl mx-auto pt-24 pb-12 px-6 md:px-0">
        
        <div className="md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,2.7fr)] md:gap-10">
          {/* Sidebar / Back Link */}
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

          <div className="min-w-0">
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
            </div>

            {/* Content */}
            <div>
              <DocumentRenderer document={content} renderers={renderers} componentBlocks={componentBlocks} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

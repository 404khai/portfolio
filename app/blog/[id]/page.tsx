'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { TerminalBlock } from '@/components/TerminalBlock';
import { ArrowRight, ArrowLeft, CaretDownFill, CaretUpFill } from 'react-bootstrap-icons';

const BLOG_CONTENT: Record<string, any> = {
  "1": {
    title: 'Data Replication in Distributed Systems: From CAP Theorem to Multi-Region Architecture',
    date: 'November 29, 2025',
    readTime: '45 min read',
    content: (
      <>
        <p className="lead text-xl text-zinc-300 mb-8 leading-relaxed">
          Distributed systems are the backbone of modern software architecture. At the heart of these systems lies the challenge of data replication—ensuring that data is consistently and reliably copied across multiple nodes.
        </p>

        <h2 id="challenge-of-consistency" className="text-3xl font-bold text-white mt-12 mb-6">The Challenge of Consistency</h2>
        <p className="text-zinc-400 mb-6 leading-relaxed">
           When we talk about replication, we immediately run into the CAP theorem. You can't have it all. Consistency, Availability, Partition Tolerance—pick two (well, really, pick between C and A in the presence of P).
        </p>

        <div className="my-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
                src="/fangfirelabs.jpeg" 
                alt="Server Architecture" 
                className="w-full rounded-xl border border-zinc-800"
            />
            <p className="text-center text-zinc-500 text-sm mt-3">Figure 1: Visualizing data flow across region boundaries.</p>
        </div>

        <h2 id="implementing-raft-consensus" className="text-3xl font-bold text-white mt-12 mb-6">Implementing Raft Consensus</h2>
        <p className="text-zinc-400 mb-6 leading-relaxed">
            One of the most popular algorithms for managing a replicated log is Raft. It's designed to be understandable. Here is how you might verify the status of a Raft node in a production cluster.
        </p>

        <TerminalBlock 
            command="curl -X GET http://localhost:8080/raft/status" 
            output={`{
  "state": "Leader",
  "term": 42,
  "commit_index": 1024,
  "applied_index": 1024,
  "peers": ["10.0.0.2", "10.0.0.3"]
}`}
        />

        <p className="text-zinc-400 mb-6 leading-relaxed">
            The output confirms that our node is currently the <code>Leader</code> for term 42. All entries up to index 1024 have been committed and applied to the state machine.
        </p>

        <h2 id="multi-region-strategy" className="text-3xl font-bold text-white mt-12 mb-6">Multi-Region Strategy</h2>
        <p className="text-zinc-400 mb-6 leading-relaxed">
            Deploying across regions introduces latency. We need to be smart about how we route read vs. write requests. Using a geo-DNS strategy or an anycast IP can help route users to the nearest read replica, while writes might still need to travel to the primary region.
        </p>
      </>
    )
  },
  "2": {
      title: 'Redesigning the User Onboarding Flow: A Case Study',
      date: 'October 15, 2025',
      readTime: '12 min read',
      content: (
          <>
            <p className="lead text-xl text-zinc-300 mb-8 leading-relaxed">
                User onboarding is the most critical phase of the user journey. It's the first impression, and often the last if not done right.
            </p>
             <div className="my-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop" 
                    alt="Design System" 
                    className="w-full rounded-xl border border-zinc-800"
                />
            </div>
            <h2 id="the-problem" className="text-3xl font-bold text-white mt-12 mb-6">The Problem</h2>
            <p className="text-zinc-400 mb-6 leading-relaxed">
                We noticed a 40% drop-off at the "Profile Setup" screen. It was too asking for too much information upfront.
            </p>
          </>
      )
  }
};

const POST_ORDER = ["1", "2"];

const BLOG_TOC: Record<string, { label: string; href: string }[]> = {
  "1": [
    { label: "The Challenge of Consistency", href: "#challenge-of-consistency" },
    { label: "Implementing Raft Consensus", href: "#implementing-raft-consensus" },
    { label: "Multi-Region Strategy", href: "#multi-region-strategy" }
  ],
  "2": [
    { label: "The Problem", href: "#the-problem" }
  ]
};

export default function BlogPostPage() {
  const params = useParams();
  const id = params?.id as string;
  const post = BLOG_CONTENT[id];
  const tocItems = BLOG_TOC[id] ?? [];
  const hasToc = tocItems.length > 0;
  const index = POST_ORDER.indexOf(id);
  const prevId = index > 0 ? POST_ORDER[index - 1] : null;
  const nextId = index >= 0 && index < POST_ORDER.length - 1 ? POST_ORDER[index + 1] : null;
  const prevPost = prevId ? BLOG_CONTENT[prevId] : null;
  const nextPost = nextId ? BLOG_CONTENT[nextId] : null;
  const [isTocOpen, setIsTocOpen] = useState(true);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#09090b] text-white flex items-center justify-center">
        <div className="text-center">
            <h1 className="font-doto text-4xl mb-4">404</h1>
            <p className="text-zinc-400">Post not found.</p>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#09090b] text-white">
      <div className="max-w-5xl mx-auto pt-24 pb-12">
        
        <div className="md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,2.7fr)] md:gap-10">
          {hasToc && (
            <div className="hidden md:block">
              <div className="sticky top-24">
                <div className="border border-zinc-900 bg-[#0a0a0a]">
                  <div className="px-5 py-4 border-b border-zinc-900">
                    <span className="text-zinc-300 text-xl font-calistoga">Table of Contents</span>
                  </div>
                  <nav className="px-5 py-4 space-y-3">
                    {tocItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block text-zinc-400 text-sm md:text-base hover:text-white transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          )}

          <div className={hasToc ? "md:col-span-1" : "md:col-span-2"}>
              <div className="flex items-center gap-3 text-zinc-500 font-mono text-sm mb-6">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h1 className="font-figtree text-4xl font-bold leading-tight tracking-tight text-white mb-8">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 border-b border-zinc-800 pb-12 mb-12">
                <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/404khai.jpeg" alt="Author" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-white font-medium">Khai</div>
                  <div className="text-zinc-500 text-sm">Creative Systems Engineer</div>
                </div>
              </div>

            {hasToc && (
              <div className="mb-10 md:hidden">
                <div className="border border-zinc-900 bg-[#0a0a0a]">
                  <button
                    type="button"
                    onClick={() => setIsTocOpen(!isTocOpen)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left mb-3"
                  >
                    <span className="text-zinc-300 text-xl font-calistoga">Table of Contents</span>
                    <span className="text-zinc-500 text-xs">
                      {isTocOpen ? <CaretDownFill/> : <CaretUpFill className="rotate-180"/>}
                    </span>
                  </button>
                  {isTocOpen && (
                    <div className="px-5 pb-5 space-y-3">
                      {tocItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="block text-zinc-400 text-sm md:text-base hover:text-white transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="prose prose-invert prose-zinc max-w-none font-figtree">
              {post.content}
            </div>

            <div className="mt-20 pt-10 border-t border-zinc-800 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prevPost && prevId ? (
                  <Link
                    href={`/blog/${prevId}`}
                    className="flex flex-col items-start justify-center rounded-2xl border border-zinc-900 bg-[#111111] px-6 py-4 hover:border-zinc-700 hover:bg-zinc-900/70 transition-colors"
                  >
                    <span className="text-zinc-500 text-xs mb-1 flex items-center gap-1">
                      <ArrowLeft/>
                      <span>Previous post</span>
                    </span>
                    <span className="text-zinc-100 font-figtree text-sm md:text-base leading-snug">
                      {prevPost.title}
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

                {nextPost && nextId ? (
                  <Link
                    href={`/blog/${nextId}`}
                    className="flex flex-col items-start justify-center rounded-2xl border border-zinc-900 bg-[#111111] px-6 py-4 hover:border-zinc-700 hover:bg-zinc-900/70 transition-colors"
                  >
                    <span className="text-zinc-500 text-xs mb-1 flex items-center gap-1">
                      <span>Next post</span>
                      <ArrowRight/>
                    </span>
                    <span className="text-zinc-100 font-figtree text-sm md:text-base leading-snug">
                      {nextPost.title}
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

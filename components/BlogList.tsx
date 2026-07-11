'use client';

import React, { useState } from 'react';
import { BlogCard } from '@/components/BlogCard';
import { PaletteFill, Controller } from 'react-bootstrap-icons';

const TABS = ['SWE', 'Design case studies', 'Game dev'] as const;

type BlogTab = (typeof TABS)[number];

interface BlogPost {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  tags: readonly string[];
}

const EMPTY_STATES: Record<
  Exclude<BlogTab, 'SWE'>,
  { icon: React.ReactNode; title: string; description: string }
> = {
  'Design case studies': {
    icon: <PaletteFill className="w-10 h-10 text-zinc-600" />,
    title: 'No design case studies yet',
    description: 'UI and product design write-ups will show up here when they are published.',
  },
  'Game dev': {
    icon: <Controller className="w-10 h-10 text-zinc-600" />,
    title: 'No game dev posts yet',
    description: 'Dev logs and game development notes will show up here when they are published.',
  },
};

function BlogEmptyState({ tab }: { tab: Exclude<BlogTab, 'SWE'> }) {
  const state = EMPTY_STATES[tab];

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/40">
        {state.icon}
      </div>
      <div className="flex flex-col gap-2 max-w-sm">
        <h2 className="font-figtree text-xl text-zinc-300">{state.title}</h2>
        <p className="font-figtree text-zinc-500 text-sm leading-relaxed">{state.description}</p>
      </div>
    </div>
  );
}

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [activeTab, setActiveTab] = useState<BlogTab>('SWE');

  const filteredPosts = posts.filter((post) => post.category === activeTab);
  const isEmptyCategoryTab = activeTab !== 'SWE' && filteredPosts.length === 0;

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-8 md:p-16 flex flex-col items-center">
      <div className="max-w-4xl w-full flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="font-unbounded text-6xl md:text-8xl font-bold tracking-tight text-white">
            Blog
          </h1>
          <p className="font-figtree text-zinc-400 text-xl md:text-2xl max-w-2xl">
            My thoughts & dev-logs on software engineering, AI, UI Design, and Game Development.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 border-b border-zinc-800 pb-4">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-figtree text-lg font-medium px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-zinc-100 text-black'
                  : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8">
          {isEmptyCategoryTab ? (
            <BlogEmptyState tab={activeTab} />
          ) : filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                date={post.date}
                readTime={post.readTime}
                title={post.title}
                description={post.description}
                tags={[...post.tags]}
              />
            ))
          ) : (
            <div className="text-zinc-500 font-figtree text-lg py-12 text-center border border-dashed border-zinc-800 rounded-lg">
              No posts found for {activeTab}.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

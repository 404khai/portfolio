'use client';

import React, { useMemo, useState } from 'react';
import { BlogCard } from '@/components/BlogCard';
import { PaletteFill, Controller, CpuFill, SortDown, SortUp } from 'react-bootstrap-icons';

const TABS = ['All', 'SWE', 'ML/AI', 'Design case studies', 'Game dev'] as const;

type BlogTab = (typeof TABS)[number];
type SortOrder = 'desc' | 'asc';

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
  Exclude<BlogTab, 'All' | 'SWE'>,
  { icon: React.ReactNode; title: string; description: string }
> = {
  'ML/AI': {
    icon: <CpuFill className="w-10 h-10 text-zinc-600" />,
    title: 'No ML/AI posts yet',
    description: 'Machine learning and AI write-ups will show up here when they are published.',
  },
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

function BlogEmptyState({ tab }: { tab: Exclude<BlogTab, 'All' | 'SWE'> }) {
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
  const [activeTab, setActiveTab] = useState<BlogTab>('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const sortedPosts = useMemo(() => {
    const filtered =
      activeTab === 'All' ? posts : posts.filter((post) => post.category === activeTab);

    return [...filtered].sort((a, b) => {
      const diff = new Date(a.date).getTime() - new Date(b.date).getTime();
      return sortOrder === 'desc' ? -diff : diff;
    });
  }, [activeTab, posts, sortOrder]);

  const isEmptyCategoryTab =
    activeTab !== 'All' &&
    activeTab !== 'SWE' &&
    sortedPosts.length === 0;

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

        <div className="flex flex-col gap-4 border-b border-zinc-800 pb-4">
          <div className="flex flex-wrap gap-4">
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

          <div className="flex items-center gap-2">
            <span className="font-figtree text-sm text-zinc-500">Sort by date:</span>
            <button
              type="button"
              onClick={() => setSortOrder('desc')}
              className={`inline-flex items-center gap-1.5 font-figtree text-sm px-3 py-1.5 rounded-md transition-colors ${
                sortOrder === 'desc'
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900'
              }`}
            >
              <SortDown className="w-3.5 h-3.5" />
              Newest first
            </button>
            <button
              type="button"
              onClick={() => setSortOrder('asc')}
              className={`inline-flex items-center gap-1.5 font-figtree text-sm px-3 py-1.5 rounded-md transition-colors ${
                sortOrder === 'asc'
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900'
              }`}
            >
              <SortUp className="w-3.5 h-3.5" />
              Oldest first
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {isEmptyCategoryTab ? (
            <BlogEmptyState tab={activeTab} />
          ) : sortedPosts.length > 0 ? (
            sortedPosts.map((post) => (
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

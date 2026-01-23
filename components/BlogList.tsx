'use client';

import React, { useState } from 'react';
import { BlogCard } from '@/components/BlogCard';

const TABS = ['SWE', 'Design case studies', 'Game dev'];

interface BlogPost {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  tags: readonly string[];
}

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [activeTab, setActiveTab] = useState('SWE');

  const filteredPosts = posts.filter(post => post.category === activeTab);

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-8 md:p-16 flex flex-col items-center">
      <div className="max-w-4xl w-full flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="font-irish-grover text-6xl md:text-8xl font-bold tracking-tight text-white">
            Blog
          </h1>
          <p className="font-figtree text-zinc-400 text-xl md:text-2xl max-w-2xl">
            My thoughts & dev-logs on software engineering, AI, UI Design, and Game Development.
          </p>
        </div>

        {/* Tabs */}
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

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-8">
          {filteredPosts.length > 0 ? (
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

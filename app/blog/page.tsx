'use client';

import React, { useState } from 'react';
import { BlogCard } from '@/components/BlogCard';

const BLOG_POSTS = [
  {
    id: 1,
    category: 'SWE',
    date: 'November 29, 2025',
    readTime: '45 min read',
    title: 'Data Replication in Distributed Systems: From CAP Theorem to Multi-Region Architecture',
    description: 'A comprehensive deep-dive into data replication strategies for distributed systems. Explore the CAP theorem, advanced consistency models (linearizability, serializability, snapshot isolation), replication topologies (Raft, Paxos), WAL internals, hybrid logical clocks, read repair & anti-entropy, chaos engineering, and production-ready patterns for building highly available, globally distributed applications.',
    tags: ['Distributed Systems', 'Data Replication', 'CAP Theorem', 'Architecture', 'Databases', 'System Design']
  },
  {
    id: 2,
    category: 'Design case studies',
    date: 'October 15, 2025',
    readTime: '12 min read',
    title: 'Redesigning the User Onboarding Flow: A Case Study',
    description: 'How we improved user retention by 25% through a simplified, gamified onboarding process. Analyzing user drop-off points and implementing progressive disclosure.',
    tags: ['UX Design', 'Case Study', 'Onboarding', 'Mobile']
  },
  {
    id: 3,
    category: 'Game dev',
    date: 'September 01, 2025',
    readTime: '20 min read',
    title: 'Implementing Efficient A* Pathfinding in Unity',
    description: 'A step-by-step guide to implementing A* pathfinding algorithm in Unity. Optimizing for large open worlds using navigation meshes and heuristic tuning.',
    tags: ['Unity', 'C#', 'Algorithms', 'Game AI']
  },
  {
    id: 4,
    category: 'SWE',
    date: 'August 20, 2025',
    readTime: '15 min read',
    title: 'Understanding React Server Components',
    description: 'Deep dive into the architecture of React Server Components. How they differ from SSR and CSR, and how to leverage them for better performance.',
    tags: ['React', 'Next.js', 'Web Development', 'Frontend']
  },
  {
    id: 5,
    category: 'Game dev',
    date: 'July 10, 2025',
    readTime: '30 min read',
    title: 'Shader Programming 101: Writing Your First Fragment Shader',
    description: 'Introduction to GLSL and writing custom shaders. Creating a dynamic water effect from scratch.',
    tags: ['Shaders', 'GLSL', 'Graphics Programming', 'Game Dev']
  }
];

const TABS = ['SWE', 'Design case studies', 'Game dev'];

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState('SWE');

  const filteredPosts = BLOG_POSTS.filter(post => post.category === activeTab);

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-8 md:p-16 flex flex-col items-center">
      <div className="max-w-4xl w-full flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="font-doto text-6xl md:text-8xl font-bold tracking-tight text-white">
            Blog
          </h1>
          <p className="font-figtree text-zinc-400 text-xl md:text-2xl max-w-2xl">
            Thoughts on software engineering, AI, Web3, and building great products.
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
                date={post.date}
                readTime={post.readTime}
                title={post.title}
                description={post.description}
                tags={post.tags}
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

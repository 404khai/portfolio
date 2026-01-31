'use client';

import React, { useState } from 'react';
import { ProjectListItem } from '@/components/ProjectListItem';


export type ProjectCategory =
  | 'All'
  | 'AI'
  | 'Mobile Apps'
  | 'Frontend'
  | 'Fullstack'
  | 'Backend / APIs'
  | 'EdTech'
  | 'Games'
  | 'SaaS';

export type ProjectMeta = {
  slug: string;
  title: string;
  description: string;
  logo: string;
  category: ProjectCategory;
};

export const PROJECTS: ProjectMeta[] = [
  {
    slug: 'keihatsu',
    title: 'Keihatsu',
    description: 'A social manwha reader app with a vibrant community',
    logo: '/keihatsu.png',
    category: 'Mobile Apps',
  },
  {
    slug: 'hirecraft',
    title: 'HireCraft',
    description: 'Domestic Service Marketplace.',
    logo: '/hirecraft.jpeg',
    category: 'Fullstack',
  },
  {
    slug: 'oroshi',
    title: 'Oroshi',
    description: 'App design for a concept sushi brand.',
    logo: '/oroshi.png',
    category: 'Mobile Apps',
  },
  {
    slug: 'supanote',
    title: 'Supanote',
    description: 'Concept AI note and task organizer.',
    logo: '/supanote.png',
    category: 'Frontend',
  },
  {
    slug: 'krea-ai',
    title: 'Krea AI',
    description: 'Clone of KreaAI website',
    logo: '/krea.png',
    category: 'Frontend',
  },
  {
    slug: 'mail-api',
    title: 'Mail Integration API',
    description: 'Mail integration API using Mailchimp and GetResponse.',
    logo: '/mail.png',
    category: 'Backend / APIs',
  },
  {
    slug: 'wallet-service',
    title: 'Wallet Service',
    description: 'Wallet service for managing user wallets, deposits & transactions using Paystack.',
    logo: '/wallet.jpg',
    category: 'Backend / APIs',
  },
];


export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('All');

  const TABS: ProjectCategory[] = [
  'All',
  'AI',
  'Mobile Apps',
  'Frontend',
  'Backend / APIs',
  'Fullstack',
  'EdTech',
  'Games',
  'SaaS'
  ];

  const filteredProjects =
    activeTab === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeTab);

  return (
    <div className="min-h-screen bg-[#09090b] text-white px-4 py-10 md:px-8 md:py-16 flex flex-col items-center">
      <div className="w-full max-w-4xl flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="font-irish-grover text-6xl md:text-8xl font-bold tracking-tight text-white">
            Projects
          </h1>
          <p className="font-figtree text-zinc-400 text-xl md:text-2xl max-w-2xl">
            A selection of highlighted projects showcasing my work and expertise.
          </p>
        </div>

        <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar border-b border-zinc-800 w-full -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`font-figtree text-sm md:text-base font-medium px-3 md:px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-zinc-100 text-black'
                  : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectListItem
                key={project.slug}
                title={project.title}
                description={project.description}
                logo={project.logo}
                href={`/projects/${project.slug}`}
              />
            ))
          ) : (
            <div className="text-zinc-500 font-figtree text-sm md:text-lg py-10 text-center border border-dashed border-zinc-800 rounded-lg">
              No projects found for {activeTab}.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

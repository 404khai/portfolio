'use client';

import React, { useState } from 'react';
import { ProjectListItem } from '@/components/ProjectListItem';

const EllumLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
);

const WalPressLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-400"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/></svg>
);

const GradificLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

const FormDropLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-500"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg>
);

const PathWatchLogo = () => (
    <span className="font-mono text-zinc-400 font-bold">N/A</span>
);

const NotDatabaseLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-zinc-400"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
);

export type ProjectCategory =
  | 'All'
  | 'AI platforms'
  | 'Web3 / dApps'
  | 'EdTech'
  | 'Mobile Apps'
  | 'Games'
  | 'SaaS tools'
  | 'DevTools';

export type ProjectMeta = {
  slug: string;
  title: string;
  description: string;
  logo: React.ReactNode;
  category: ProjectCategory;
};

export const PROJECTS: ProjectMeta[] = [
  {
    slug: 'ellum-ai',
    title: 'Ellum Ai',
    description: 'End-to-End AI Platform Revolution. Intelligent automation for business operations.',
    logo: <EllumLogo />,
    category: 'AI platforms',
  },
  {
    slug: 'walpress',
    title: 'WalPress',
    description: 'Decentralized site-builder for creators. Censorship-resistant websites on the blockchain.',
    logo: <WalPressLogo />,
    category: 'Web3 / dApps',
  },
  {
    slug: 'gradific',
    title: 'Gradific',
    description: 'AI-driven grading and classroom management for modern education.',
    logo: <GradificLogo />,
    category: 'EdTech',
  },
  {
    slug: 'formdrop',
    title: 'FormDrop',
    description: 'Super simple headless form backend.',
    logo: <FormDropLogo />,
    category: 'SaaS tools',
  },
  {
    slug: 'pathwatch',
    title: 'PathWatch',
    description: 'API observability and monitoring tool.',
    logo: <PathWatchLogo />,
    category: 'DevTools',
  },
  {
    slug: 'notdatabase',
    title: 'NotDatabase',
    description: 'Type-safe document database for TypeScript.',
    logo: <NotDatabaseLogo />,
    category: 'DevTools',
  },
];


export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('All');

  const TABS: ProjectCategory[] = [
    'All',
    'AI platforms',
    'Web3 / dApps',
    'EdTech',
    'SaaS tools',
    'DevTools',
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

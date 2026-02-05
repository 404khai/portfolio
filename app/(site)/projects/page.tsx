'use client';

import React, { useState } from 'react';
import { Funnel, X, ChevronDown } from 'react-bootstrap-icons';
import { ProjectListItem, ProjectStatus } from '@/components/ProjectListItem';


export type ProjectCategory =
  | 'All'
  | 'AI'
  | 'Mobile Apps'
  | 'Frontend'
  | 'Fullstack'
  | 'Backend / APIs'
  | 'Designs'
  | 'Games'
  | 'SaaS';

export type ProjectMeta = {
  slug: string;
  title: string;
  description: string;
  logo: string;
  categories: ProjectCategory[];
  status?: ProjectStatus[];
};

export const PROJECTS: ProjectMeta[] = [
  {
    slug: 'keihatsu',
    title: 'Keihatsu',
    description: 'A social manwha reader app with a vibrant community',
    logo: '/keihatsu.png',
    categories: ['Mobile Apps'],
    status: ['construction', 'coming-soon'],
  },
  {
    slug: 'farmintel',
    title: 'FarmIntel',
    description: 'Agricultural intelligence system for farmers and agro-enterprises',
    logo: '/farmintel.png',
    categories: ['AI', 'Fullstack'],
    status: ['completed', 'not-live'],
  },
  {
    slug: 'hirecraft',
    title: 'HireCraft',
    description: 'Domestic Service Marketplace.',
    logo: '/hirecraft.jpeg',
    categories: ['Fullstack'],
    status: ['completed' ,'not-live'],
  },
  {
    slug: 'atlas',
    title: 'Atlas',
    description: 'Agentic 2D Game Developer.',
    logo: '/atlas.png',
    categories: ['Games'],
    status: ['coming-soon'],
  },
  {
    slug: 'Revixor',
    title: 'Revixor',
    description: 'AI-driven learning and exam practice for West Africa.',
    logo: '/revixor.png',
    categories: ['AI'],
    status: ['live', 'users'],
  },
  {
    slug: 'oroshi',
    title: 'Oroshi',
    description: 'App design for a concept sushi brand.',
    logo: '/oroshi.png',
    categories: ['Mobile Apps'],
    status: ['completed', 'not-live'],
  },
  {
    slug: 'supabricx',
    title: 'Supabricx',
    description: 'Build end-to-end backend services via intelligent prompts.',
    logo: '/supabricx.png',
    categories: ['AI'],
    status: ['coming-soon'],
  },
  {
    slug: 'supanote',
    title: 'Supanote',
    description: 'Concept AI note and task organizer.',
    logo: '/supanote.png',
    categories: ['Frontend'],
    status: ['completed', 'live'],
  },
  {
    slug: 'krea-ai',
    title: 'Krea AI',
    description: 'Clone of KreaAI website',
    logo: '/krea.png',
    categories: ['Frontend'],
    status: ['completed', 'live'],
  },
  {
    slug: 'mail-api',
    title: 'ESP Integration API',
    description: 'Mail integration API using Mailchimp and GetResponse.',
    logo: '/mail.png',
    categories: ['Backend / APIs'],
    status: ['completed', 'not-live'],
  },
  {
    slug: 'wallet-service',
    title: 'Wallet Service',
    description: 'Wallet service for managing user wallets, deposits & transactions using Paystack.',
    logo: '/wallet.jpg',
    categories: ['Backend / APIs'],
    status: ['completed', 'not-live'],
  },
  {
    slug: 'notification-service',
    title: 'Notification Service',
    description: 'Microservice notification system that sends emails and push notifications.',
    logo: '/bell.png',
    categories: ['Backend / APIs'],
    status: ['completed', 'not-live'],
  },
];


export default function ProjectsPage() {
  const [selectedCategories, setSelectedCategories] = useState<ProjectCategory[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const TABS: ProjectCategory[] = [
  'All',
  'AI',
  'Mobile Apps',
  'Frontend',
  'Backend / APIs',
  'Fullstack',
  'Designs',
  'Games',
  'SaaS'
  ];

  const toggleCategory = (category: ProjectCategory) => {
    if (category === 'All') {
      setSelectedCategories([]);
      return;
    }

    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const filteredProjects =
    selectedCategories.length === 0
      ? PROJECTS
      : PROJECTS.filter((project) =>
          project.categories.some((cat) => selectedCategories.includes(cat))
        );

  return (
    <div className="w-full min-h-screen bg-[#09090b] text-white px-4 py-10 md:px-8 md:py-16 flex flex-col items-center pb-20">
      <div className="w-full max-w-4xl flex flex-col gap-10">

    
    
        <div className="flex flex-col gap-4">
          <h1 className="font-irish-grover text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white">
            Projects
          </h1>
          <p className="font-figtree text-zinc-400 text-lg md:text-2xl max-w-2xl">
            A selection of highlighted projects showcasing my work and expertise.
          </p>
        </div>

        {/* Mobile Filter (< 500px) */}
        <div className="flex flex-col gap-2 min-[765px]:hidden w-full relative z-30">
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-zinc-300 font-figtree transition-colors hover:bg-zinc-900"
            >
                <div className="flex items-center gap-2">
                    <Funnel className="w-4 h-4" />
                    <span className="text-sm font-medium">Filter Projects</span>
                    {selectedCategories.length > 0 && (
                        <span className="flex items-center justify-center w-5 h-5 text-[10px] font-bold text-black bg-zinc-100 rounded-full">
                            {selectedCategories.length}
                        </span>
                    )}
                </div>
                {isDropdownOpen ? <X className="w-5 h-5" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-[#09090b] border border-zinc-800 rounded-xl shadow-2xl flex flex-wrap gap-2 animate-in fade-in zoom-in-95 duration-200">
                    {TABS.map((tab) => {
                         const isActive = tab === 'All'
                            ? selectedCategories.length === 0
                            : selectedCategories.includes(tab);
                         return (
                             <button
                                key={tab}
                                onClick={() => toggleCategory(tab)}
                                className={`text-xs font-medium px-3 py-2 rounded-lg transition-all border ${
                                    isActive
                                        ? 'bg-zinc-100 text-black border-zinc-100'
                                        : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                                }`}
                             >
                                {tab}
                             </button>
                         )
                    })}
                </div>
            )}
        </div>

        {/* Desktop/Tablet Filter (> 500px) */}
        <div className="hidden min-[500px]:flex overflow-x-auto pb-4 gap-2 md:gap-3 no-scrollbar border-b border-zinc-800 -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap">
          {TABS.map((tab) => {
            const isActive =
              tab === 'All'
                ? selectedCategories.length === 0
                : selectedCategories.includes(tab);

            return (
              <button
                key={tab}
                type="button"
                onClick={() => toggleCategory(tab)}
                className={`font-figtree text-sm md:text-base font-medium px-3 md:px-4 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? 'bg-zinc-100 text-black'
                    : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900'
                }`}
              >
                {tab}
              </button>
            );
          })}
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
                status={project.status}
              />
            ))
          ) : (
            <div className="text-zinc-500 font-figtree text-sm md:text-lg py-10 text-center border border-dashed border-zinc-800 rounded-lg">
              No projects found for selected categories.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

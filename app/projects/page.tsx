'use client';

import React from 'react';
import { ProjectListItem } from '@/components/ProjectListItem';

// Logos
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


export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white p-8 md:p-16 flex flex-col items-center">
      <div className="max-w-3xl w-full flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="font-irish-grover text-6xl md:text-8xl font-bold tracking-tight text-white">
            Projects
          </h1>
          <p className="font-figtree text-zinc-400 text-xl md:text-2xl max-w-2xl">
            A selection of highlighted projects showcasing my work and expertise.
          </p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-4">
            <ProjectListItem 
                title="Ellum Ai"
                description="End-to-End AI Platform Revolution. Intelligent automation for business operations."
                logo={<EllumLogo />}
            />
            <ProjectListItem 
                title="WalPress"
                description="Decentralized site-builder for creators. Censorship-resistant websites on the blockchain."
                logo={<WalPressLogo />}
            />
            <ProjectListItem 
                title="Gradific"
                description="AI-driven grading and classroom management for modern education."
                logo={<GradificLogo />}
            />
             <ProjectListItem 
                title="FormDrop"
                description="Super simple headless form backend."
                logo={<FormDropLogo />}
            />
             <ProjectListItem 
                title="PathWatch"
                description="API observability and monitoring tool."
                logo={<PathWatchLogo />}
            />
             <ProjectListItem 
                title="NotDatabase"
                description="Type-safe document database for TypeScript."
                logo={<NotDatabaseLogo />}
            />
        </div>

      </div>
    </div>
  );
}

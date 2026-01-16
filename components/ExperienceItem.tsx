'use client';

import React, { useState } from 'react';

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  type: string; // e.g. "Remote | Full-time"
  logo: string;
  contributions: string[];
  skills: string[];
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  role,
  period,
  type,
  logo,
  contributions,
  skills,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`w-full border border-[#27272a] border-dashed bg-[#09090b] overflow-hidden transition-all duration-300 ${isOpen ? 'bg-zinc-900/10' : 'hover:bg-zinc-900/20'}`}
    >
      {/* Header - Always Visible */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-6 md:p-8 cursor-pointer flex flex-col md:flex-row gap-6 md:items-center justify-between group"
      >
        <div className="flex items-start gap-4 md:items-center">
            {/* Logo Box */}
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-zinc-800 rounded-lg border border-zinc-700 group-hover:border-zinc-500 transition-colors overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo} alt={company} className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col gap-1">
                <h3 className="font-irish-grover text-2xl text-white tracking-wide group-hover:text-zinc-200 transition-colors">
                    {company}
                </h3>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                     <span className="font-calistoga text-zinc-500 font-semibold text-lg">
                        {role}
                     </span>
                     <span className="hidden md:block w-1 h-1 bg-zinc-600 rounded-full"></span>
                     <span className="font-figtree text-zinc-500 text-sm font-medium">
                        {type}
                     </span>
                     <span className="hidden md:block w-1 h-1 bg-zinc-600 rounded-full"></span>
                     <span className="font-figtree text-zinc-500 text-sm font-medium">
                        {period}
                     </span>
                </div>
                {/* Mobile only meta info line */}
                <div className="md:hidden flex items-center gap-2 mt-1">
                     <span className="font-figtree text-zinc-500 text-sm font-medium">
                        {type}
                     </span>
                     <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                     <span className="font-figtree text-zinc-500 text-sm font-medium">
                        {period}
                     </span>
                </div>
            </div>
        </div>

        {/* Chevron Icon */}
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 group-hover:text-white">
                <path d="m6 9 6 6 6-6"/>
            </svg>
        </div>
      </div>

      {/* Expandable Content */}
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 md:p-8 pt-0 border-t border-dashed border-[#27272a]/50">
            {/* Contributions */}
            <ul className="flex flex-col gap-3 mb-6">
                {contributions.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-zinc-400 font-figtree leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-600 flex-shrink-0" />
                        {point}
                    </li>
                ))}
            </ul>

            {/* Skills Badges */}
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span 
                        key={index}
                        className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-full border border-zinc-700/50 hover:bg-zinc-800 transition-colors"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

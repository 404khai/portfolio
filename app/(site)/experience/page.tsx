'use client';

import React from 'react';
import { ExperienceItem } from '@/components/ExperienceItem';
import { EXPERIENCE } from '@/lib/experience';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white p-8 md:p-16 flex flex-col items-center">
      <div className="max-w-4xl w-full flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="font-unbounded text-6xl md:text-8xl font-bold tracking-tight text-white">
            Experience
          </h1>
          <p className="font-figtree text-zinc-400 text-xl md:text-2xl max-w-2xl">
            A timeline of my professional journey and key contributions.
          </p>
        </div>

        {/* Experience List */}
        <div className="flex flex-col gap-0 border-t border-[#27272a] border-dashed min-w-0 w-full">
            {EXPERIENCE.map((entry) => (
              <ExperienceItem
                key={`${entry.company}-${entry.period}`}
                company={entry.company}
                role={entry.role}
                type={entry.type}
                period={entry.period}
                logo={entry.logo}
                contributions={entry.contributions}
                skills={entry.skills}
              />
            ))}
        </div>

      </div>
    </div>
  );
}

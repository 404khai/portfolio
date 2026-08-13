import React from 'react';
import type { ExperienceEntry } from '@/lib/experience';

interface ExperienceRowProps {
  entry: ExperienceEntry;
}

export function ExperienceRow({ entry }: ExperienceRowProps) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-[9rem_1fr] gap-2 md:gap-10 py-8 border-b border-[#27272a]/80">
      <div className="flex flex-col gap-1 md:pt-0.5">
        <time className="font-figtree text-xs text-zinc-600 tracking-wide">
          {entry.period}
        </time>
        <span className="font-figtree text-xs text-zinc-600">{entry.type}</span>
      </div>

      <div className="flex flex-col gap-3 min-w-0">
        <div className="flex flex-col gap-0.5">
          <h3 className="font-figtree text-lg text-white tracking-wide">
            {entry.company}
          </h3>
          <p className="font-figtree text-sm text-zinc-500">{entry.role}</p>
        </div>

        <ul className="flex flex-col gap-2">
          {entry.contributions.map((point) => (
            <li
              key={point}
              className="font-figtree text-sm text-zinc-400 leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-zinc-600"
            >
              {point}
            </li>
          ))}
        </ul>

        <p className="font-figtree text-xs text-zinc-600 leading-relaxed">
          {entry.skills.join(' · ')}
        </p>
      </div>
    </article>
  );
}

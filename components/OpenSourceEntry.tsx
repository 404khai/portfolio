import React from 'react';
import type { OpenSourceContribution } from '@/lib/open-source';

interface OpenSourceEntryProps {
  entry: OpenSourceContribution;
}

export function OpenSourceEntry({ entry }: OpenSourceEntryProps) {
  return (
    <article className="py-6 border-b border-[#27272a]/80">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
        <h3 className="font-figtree text-lg text-white tracking-wide">
          {entry.name}
        </h3>
        <a
          href={entry.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-figtree text-xs text-zinc-600 hover:text-[#a8e64c] transition-colors duration-200"
        >
          {entry.siteUrl.replace(/^https?:\/\//, '')}
        </a>
      </div>
      <p className="font-figtree text-sm text-zinc-500 mb-3 leading-relaxed">
        {entry.description}
      </p>
      <ul className="flex flex-col gap-2">
        {entry.contributions.map((item) => (
          <li
            key={item.prUrl}
            className="relative flex flex-col gap-1 pl-5 before:absolute before:left-0 before:top-0 before:font-figtree before:text-zinc-600 before:content-['•'] sm:flex-row sm:items-baseline sm:gap-3"
          >
            <span className="font-figtree text-sm text-zinc-400 leading-relaxed sm:flex-1">
              {item.title}
            </span>
            <a
              href={item.prUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-figtree text-xs text-zinc-600 hover:text-[#a8e64c] transition-colors duration-200 shrink-0"
            >
              View PR →
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}

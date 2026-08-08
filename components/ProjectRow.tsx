import React from 'react';
import Link from 'next/link';
import type { ProjectMeta } from '@/lib/projects';

interface ProjectRowProps {
  project: ProjectMeta;
}

export function ProjectRow({ project }: ProjectRowProps) {
  const tech = project.stack.length > 0
    ? project.stack.join(' · ')
    : project.categories.filter((c) => c !== 'All').join(' · ');

  return (
    <article className="group grid grid-cols-1 gap-4 py-8 border-b border-[#27272a]/80 transition-colors hover:border-zinc-600">
      <div className="flex flex-col gap-2 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <Link
            href={`/projects/${project.slug}`}
            className="font-figtree text-lg text-white hover:text-[#a8e64c] transition-colors duration-200"
          >
            {project.title}
          </Link>
          {tech && (
            <span className="font-figtree text-xs text-zinc-600 sm:text-right shrink-0">
              {tech}
            </span>
          )}
        </div>
        <p className="font-figtree text-sm text-zinc-500 leading-relaxed">
          {project.description}
        </p>
        <ul className="flex flex-col gap-1.5 pl-4 list-disc marker:text-zinc-700">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="font-figtree text-sm text-zinc-400 leading-relaxed">
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-figtree text-xs text-zinc-600">
        <Link
          href={`/projects/${project.slug}`}
          className="text-zinc-400 hover:text-[#a8e64c] transition-colors duration-200"
        >
          Case study →
        </Link>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#a8e64c] transition-colors duration-200"
          >
            GitHub ↗
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#a8e64c] transition-colors duration-200"
          >
            Live ↗
          </a>
        )}
      </div>
    </article>
  );
}

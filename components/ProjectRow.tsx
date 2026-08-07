import React from 'react';
import Link from 'next/link';
import type { ProjectMeta } from '@/lib/projects';

interface ProjectRowProps {
  project: ProjectMeta;
}

export function ProjectRow({ project }: ProjectRowProps) {
  const tech = project.categories.filter((c) => c !== 'All').join(' · ');

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-1 sm:gap-8 py-6 border-b border-[#27272a]/80 transition-colors hover:border-zinc-600"
    >
      <div className="flex flex-col gap-1.5 min-w-0">
        <h3 className="font-figtree text-base sm:text-lg text-white group-hover:text-[#a8e64c] transition-colors duration-200">
          {project.title}
        </h3>
        <p className="font-figtree text-sm text-zinc-500 leading-relaxed">
          {project.description}
        </p>
      </div>
      {tech && (
        <span className="font-figtree text-xs text-zinc-600 sm:text-right sm:pt-1 shrink-0">
          {tech}
        </span>
      )}
    </Link>
  );
}

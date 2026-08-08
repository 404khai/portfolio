import React from 'react';
import Link from 'next/link';
import type { ProjectMeta } from '@/lib/projects';

interface ProjectRowProps {
  project: ProjectMeta;
}

const GithubIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.292 9.395 7.868 10.918.575.105.785-.25.785-.557 0-.274-.01-1.002-.015-1.967-3.201.695-3.878-1.543-3.878-1.543-.523-1.33-1.277-1.685-1.277-1.685-1.044-.714.079-.699.079-.699 1.154.081 1.761 1.185 1.761 1.185 1.027 1.76 2.694 1.252 3.35.957.104-.744.402-1.252.731-1.54-2.555-.291-5.238-1.277-5.238-5.683 0-1.255.448-2.28 1.183-3.083-.119-.29-.513-1.462.112-3.049 0 0 .965-.309 3.163 1.178a10.94 10.94 0 0 1 2.88-.388c.976.005 1.96.132 2.88.388 2.197-1.487 3.161-1.178 3.161-1.178.627 1.587.233 2.759.114 3.049.737.803 1.182 1.828 1.182 3.083 0 4.419-2.688 5.389-5.252 5.675.413.355.78 1.056.78 2.129 0 1.538-.014 2.777-.014 3.157 0 .31.208.668.79.555C20.212 21.39 23.5 17.084 23.5 12c0-6.352-5.148-11.5-11.5-11.5Z" />
  </svg>
);

const GlobeIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z" />
  </svg>
);

export function ProjectRow({ project }: ProjectRowProps) {
  return (
    <article className="group relative border-b border-[#27272a]/80 py-6 transition-colors hover:border-zinc-600">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title} project`}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 flex items-center justify-between gap-5 pointer-events-none">
        <div className="flex min-w-0 flex-col gap-3">
          <h3 className="font-figtree text-lg text-white transition-colors duration-200 group-hover:text-[#a8e64c]">
            {project.title}
          </h3>
          <ul className="flex flex-wrap gap-2" aria-label={`${project.title} stack`}>
            {project.stack.map((technology) => (
              <li
                key={technology}
                className="border border-[#27272a] px-2 py-1 font-figtree text-[11px] text-zinc-500 transition-colors group-hover:border-zinc-600 group-hover:text-zinc-400"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-20 flex shrink-0 items-center gap-3 text-zinc-500 pointer-events-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="transition-colors hover:text-[#a8e64c]"
            >
              <GithubIcon />
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live site`}
              className="transition-colors hover:text-[#a8e64c]"
            >
              <GlobeIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

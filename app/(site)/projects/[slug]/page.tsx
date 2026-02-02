'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { PROJECTS, ProjectMeta } from '../page';

type ProjectDetail = ProjectMeta & {
  longDescription: string;
  skills: string[];
  githubUrl?: string;
  liveUrl?: string;
  images: string[];
};

const PROJECT_DETAILS: ProjectDetail[] = [
  {
    ...PROJECTS.find((p) => p.slug === 'keihatsu')!,
    longDescription:
      'Keihatsu is an opensource, social manwha reader app with a vibrant community of readers that provide a platform for manwha, manga and manhua fans to connect over their favorite series, while supporting offline downloads.',
    skills: ['TypeScript', 'Nest.js', 'Flutter', 'Dart', 'System Design'],
    githubUrl: 'https://github.com/grvt8/Keihatsu.git',
    liveUrl: 'http://keihatsu.vercel.app',
    images: [
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    ...PROJECTS.find((p) => p.slug === 'farmintel')!,
    longDescription:
      'FarmIntel is an agricultural intelligence system designed to help farmers and agro-enterprises make smarter data-driven decisions and optimize farming operations. It comes with ML pest and plant disease detection, as well as real-time weather and crop yield predictions, AI recommendations for optimal farming practices, and a community of farmers and agro-enterprises to share knowledge and best practices.',
    skills: ['React', 'TypeScript', 'Python', 'FastAPI', 'ML', 'Model Training', 'PostgreSql'],
    githubUrl: 'https://github.com/404khai/FarmIntel-API',
    liveUrl: 'https://farmintel-ai.vercel.app',
    images: [
      '/farmintel1.png',
      '/farmintel2.png',
      '/farmintel3.png',
      '/farmintel4.png',
      '/farmintel5.png'
    ],
  },
  {
    ...PROJECTS.find((p) => p.slug === 'hirecraft')!,
    longDescription:
      'HireCraft is a Springboot powered domestic service marketplace which provides a platform connecting service providers (e.g.plumbers, painters) to employers.',
    skills: ['Java', 'Springboot', 'Typescript', 'Smart Contracts'],
    githubUrl: 'https://github.com/404khai/HireCraft-SpringBoot',
    liveUrl: 'https://hirecraft.vercel.app',
    images: [
      '/hirecraft1.png',
      '/hirecraft2.png',
      '/hirecraft3.png',
      '/hirecraft4.png'
    ],
  },
  {
    ...PROJECTS.find((p) => p.slug === 'oroshi')!,
    longDescription:
      'Oroshi is a concept mobile app for a japanese sushi franchise.',
    skills: ['React Native', 'TypeScript', 'Expo'],
    githubUrl: 'https://github.com/404khai/oroshi',
    liveUrl: '#',
    images: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    ...PROJECTS.find((p) => p.slug === 'supanote')!,
    longDescription:
      'SupaNote is a note & task organization app for startup founders and teams with a focus on simplicity and ease of use. It allows founders to organize their thoughts, track their to-dos, and get smart suggestions in one unified workspace.',
    skills: ['React', 'TypeScript', 'JavaScript', 'CSS'],
    githubUrl: 'https://github.com/404khai/supanote',
    liveUrl: 'https://supanote-space.vercel.app',
    images: [
      '/supanote1.png',
      '/supanote2.png',
      '/supanote3.png',
      '/supanote4.png'
    ],
  },
  {
    ...PROJECTS.find((p) => p.slug === 'krea-ai')!,
    longDescription:
      'Krea-AI is a clone of the previous landing page of the official Krea AI website built entirely from an image provided. Krea AI is a powerful AI suite for creatives, that enables users to generate, enhance and edit images, videos or 3D meshes with AI ',
    skills: ['TypeScript', 'Next.js', 'TailwindCSS'],
    githubUrl: 'https://github.com/404khai/Krea-AI-Clone',
    liveUrl: 'https://krea-ai-web-clone.vercel.app',
    images: [
      '/krea-ai1.png',
      '/krea-ai2.png',
      '/krea-ai3.png'
    ],
  },
  {
    ...PROJECTS.find((p) => p.slug === 'mail-api')!,
    longDescription:
      'Mail Integration API using MailChimp and GetResponse for marketing leads and conversion campaign emails.',
    skills: ['TypeScript', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/404khai/mail-integration-api',
    liveUrl: '#',
    images: [
      '/mail-api1.png',
      '/mail-api2.png',
      '/mail-api3.png',
      '/mail-api4.png'
    ],
  },
  {
    ...PROJECTS.find((p) => p.slug === 'wallet-service')!,
    longDescription:
      'Wallet Service System using FastAPI, Paystack and PostgreSql for managing user wallets, deposits and transactions.',
    skills: ['Python', 'FastAPI', 'PostgreSql'],
    githubUrl: 'https://github.com/404khai/wallet-service-api',
    liveUrl: '#',
    images: [
      '/wallet-api1.png',
      '/wallet-api2.png',
      '/wallet-api3.png'
    ],
  },
];

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4"
  >
    <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.292 9.395 7.868 10.918.575.105.785-.25.785-.557 0-.274-.01-1.002-.015-1.967-3.201.695-3.878-1.543-3.878-1.543-.523-1.33-1.277-1.685-1.277-1.685-1.044-.714.079-.699.079-.699 1.154.081 1.761 1.185 1.761 1.185 1.027 1.76 2.694 1.252 3.35.957.104-.744.402-1.252.731-1.54-2.555-.291-5.238-1.277-5.238-5.683 0-1.255.448-2.28 1.183-3.083-.119-.29-.513-1.462.112-3.049 0 0 .965-.309 3.163 1.178a10.94 10.94 0 0 1 2.88-.388c.976.005 1.96.132 2.88.388 2.197-1.487 3.161-1.178 3.161-1.178.627 1.587.233 2.759.114 3.049.737.803 1.182 1.828 1.182 3.083 0 4.419-2.688 5.389-5.252 5.675.413.355.78 1.056.78 2.129 0 1.538-.014 2.777-.014 3.157 0 .31.208.668.79.555C20.212 21.39 23.5 17.084 23.5 12c0-6.352-5.148-11.5-11.5-11.5Z" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z" />
  </svg>
);

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const project = PROJECT_DETAILS.find((p) => p.slug === slug);

  const [activeIndex, setActiveIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#09090b] text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="font-doto text-sm text-zinc-500">Project not found</p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-900"
          >
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const images = project.images;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white px-4 py-10 md:px-8 md:py-16 flex flex-col items-center">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <Link
            href="/projects"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 px-3 py-1 text-xs font-mono text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
          >
            <span>←</span>
            <span>Back to projects</span>
          </Link>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img
                 src={project.logo}
                 alt={`${project.title} logo`}
                 className="h-full w-full object-cover"
               />
            </div>
            <h1 className="font-irish-grover text-4xl md:text-6xl font-bold tracking-tight text-white">
              {project.title}
            </h1>
          </div>
          <p className="font-figtree text-zinc-400 text-base md:text-lg max-w-3xl">
            {project.longDescription}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.3fr)] items-start">
          <div className="flex flex-col gap-3">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-black">
              <div className="aspect-video w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images[activeIndex]}
                  alt={`${project.title} screenshot ${activeIndex + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-zinc-200 hover:bg-black"
                >
                  <span className="sr-only">Previous image</span>
                  <span>←</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-zinc-200 hover:bg-black"
                >
                  <span className="sr-only">Next image</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`h-1 flex-1 rounded-full ${
                    index === activeIndex ? 'bg-zinc-200' : 'bg-zinc-700'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">

            <div className="flex flex-col gap-10">
              <div>
                <h2 className="font-calistoga text-xs text-zinc-400 uppercase tracking-[0.2em]">
                  Links
                </h2>
                <div className="mt-2 flex flex-wrap gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-[#050509] px-3 py-2 text-xs font-figtree text-zinc-200 hover:border-zinc-400"
                    >
                      <GithubIcon />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-[#050509] px-3 py-2 text-xs font-figtree text-zinc-200 hover:border-zinc-400"
                    >
                      <GlobeIcon />
                      <span>Live site</span>
                    </a>
                  )}
                </div>
              </div>

              <div>
                <h2 className="font-calistoga text-xs text-zinc-400 uppercase tracking-[0.2em]">
                  Skills used
                </h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-zinc-700 bg-[#050509] px-3 py-1 text-xs font-figtree text-zinc-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


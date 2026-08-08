import React from 'react';
import { FileEarmarkArrowDownFill } from 'react-bootstrap-icons';
import { reader } from '@/lib/keystatic';
import { PROJECTS } from '@/lib/projects';
import { EXPERIENCE } from '@/lib/experience';
import { OPEN_SOURCE } from '@/lib/open-source';
import { Section, ExternalLink, InlineLink } from '@/components/Section';
import { ProjectRow } from '@/components/ProjectRow';
import { ExperienceRow } from '@/components/ExperienceRow';
import { WritingRow } from '@/components/WritingRow';
import { OpenSourceEntry } from '@/components/OpenSourceEntry';
import { HackathonEntry } from '@/components/HackathonEntry';
import { HACKATHONS } from '@/lib/hackathon';
import { SkillsSection } from '@/app/(site)/skills/page';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/404khai', handle: '404khai' },
  { label: 'X', href: 'https://x.com/404kha1', handle: '@404kha1' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@404khai', handle: '404khai' },
  { label: 'YouTube', href: 'https://www.youtube.com/@404khai', handle: '@404khai' },
  { label: 'Email', href: 'mailto:404khai@gmail.com', handle: '404khai@gmail.com' },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
}

export default async function Home() {
  const posts = await reader.collections.posts.all();
  const formattedPosts = posts
    .map((post) => ({
      slug: post.slug,
      title: post.entry.title,
      date: formatDate(post.entry.date),
      readTime: post.entry.readTime,
      description: post.entry.description,
      sortDate: post.entry.date,
    }))
    .sort((a, b) => new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime());

  return (
    <main className="w-full max-w-2xl px-5 sm:px-6 md:px-8 py-12 md:py-20 lg:py-24">
      {/* Introduction */}
      <header id="intro" className="scroll-mt-24 flex flex-col gap-8 md:gap-10 pb-16 md:pb-20">
        <div className="flex flex-col gap-4">
          <p className="font-doto text-xs text-zinc-600 uppercase tracking-[0.2em]">
            Software Engineer
          </p>
          <h1 className="font-unbounded text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
            Khai
          </h1>
          <p className="font-figtree text-base sm:text-lg text-zinc-400 leading-relaxed max-w-lg">
            Building ML pipelines, distributed systems, AI agents, developer tools,
            mobile apps, and 2D platformer games.
          </p>
        </div>

        <ul className="flex flex-col gap-3 font-figtree text-sm sm:text-base text-zinc-400 leading-relaxed">
          <li>
            <span className="text-[#a8e64c] font-unbounded">Software Engineer</span>{' '}
            intrigued by agentic harnesses, AI infra, operating systems, game
            development, animation, and interactive UI.
          </li>
          <li>
            <span className="text-white">4+ years</span> working on ML pipelines,
            transformers, distributed systems, AI agents, LLM inference, backend
            systems, and mobile apps.
          </li>
          <li>
            Probably trying new frameworks, or dabbling in{' '}
            <span className="text-white">C++</span>, <span className="text-white">Go</span>,
            and <span className="text-white">Rust</span>.
          </li>
        </ul>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {SOCIAL_LINKS.map((link) => (
            <ExternalLink key={link.label} href={link.href}>
              {link.label}
            </ExternalLink>
          ))}
          <span className="text-zinc-800 hidden sm:inline">·</span>
          <a
            href="/Oghenefega_Omajene_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-figtree text-sm text-zinc-500 hover:text-[#a8e64c] transition-colors duration-200 group"
          >
            <FileEarmarkArrowDownFill className="w-3.5 h-3.5" />
            CV
          </a>
        </div>
      </header>

      {/* About */}
      <Section id="about" label="About" title="About">
        <div className="flex flex-col gap-6 font-figtree text-sm sm:text-base text-zinc-400 leading-relaxed">
          <p>
            I&apos;m a software engineer with 4+ years of experience building ML
            pipelines, transformers, distributed systems, AI agents, LLM inference,
            developer tools, scalable backend systems, mobile apps, and 2D platformer
            games using Python, TypeScript, Dart, Java, C++, Rust, and Golang.
          </p>
          <p>
            Currently exploring ADEs, agentic harnesses, ML pipelines, systems
            engineering, developer tools, AI agents, and workflows. Interests include
            hackathons, open-source, micro-robotics, game development, agentic AI, and
            operating systems.
          </p>
          {/* <div className="pt-2 border-t border-[#27272a]/40">
            <p className="font-doto text-xs text-zinc-600 uppercase tracking-[0.15em] mb-3">
              Hackathons
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <span className="text-zinc-300">Nomba × DevCareer Hackathon 2026: </span>
                Developer-first virtual account infrastructure layer for downstream
                product teams.
              </li>
              <li>
                <span className="text-zinc-300">DSN × BCT Hackathon 3.0: </span>
                Agentic LLM system for behavioral user modeling and personalized
                recommendation.
              </li>
            </ul>
          </div> */}
        </div>
      </Section>

      {/* Hackathons */}
      <Section id="hackathons" label="Hackathons" title="Solo Hackathons"> 
        <div> 
          {HACKATHONS.map((entry) => ( <HackathonEntry key={entry.name} entry={entry} /> ))} 
        </div> 
      </Section> 

      {/* Skills */}
      <Section id="skills" label="Toolkit" title="Skills">
        <SkillsSection />
      </Section>

      {/* Open Source */}
      <Section id="open-source" label="Open Source" title="Contributions">
        <div>
          {OPEN_SOURCE.map((entry) => (
            <OpenSourceEntry key={entry.name} entry={entry} />
          ))}
        </div>
      </Section>

      {/* Work / Projects */}
      <Section id="work" label="Work" title="Projects">
        <div>
          {PROJECTS.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
        <p className="font-figtree text-xs text-zinc-600 pt-2">
          Each project opens its full page with context and accomplishments.
        </p>
      </Section>

      {/* Experience */}
      <Section id="experience" label="Work XP" title="Experience">
        <div>
          {EXPERIENCE.map((entry) => (
            <ExperienceRow key={`${entry.company}-${entry.period}`} entry={entry} />
          ))}
        </div>
      </Section>

      {/* Writing */}
      {formattedPosts.length > 0 && (
        <Section id="blog" label="Blog" title="Articles">
          <div>
            {formattedPosts.map((post) => (
              <WritingRow
                key={post.slug}
                slug={post.slug}
                title={post.title}
                date={post.date}
                readTime={post.readTime}
                description={post.description}
              />
            ))}
          </div>
          <p className="font-figtree text-xs text-zinc-600">
            <InlineLink href="/blog">View all posts →</InlineLink>
          </p>
        </Section>
      )}

      {/* Footer */}
      <footer className="pt-16 md:pt-20 border-t border-[#27272a]/60">
        <div className="flex flex-col gap-6">
          <p className="font-figtree text-sm text-zinc-500 leading-relaxed">
            Let&apos;s get straight to the point. Always building, always learning.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {SOCIAL_LINKS.map((link) => (
              <ExternalLink key={link.label} href={link.href}>
                {link.label}
              </ExternalLink>
            ))}
          </div>
          <p className="font-doto text-xs text-zinc-700 tracking-wider">
            © {new Date().getFullYear()} 404KHAI
          </p>
        </div>
      </footer>
    </main>
  );
}

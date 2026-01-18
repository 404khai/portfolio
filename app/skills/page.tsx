'use client';

import React from 'react';

type Skill = {
  name: string;
  iconLabel: string;
  iconBg: string;
};

type SkillSection = {
  title: string;
  description: string;
  skills: Skill[];
};

const sections: SkillSection[] = [
  {
    title: '<Programming Languages />',
    description: 'Core languages I rely on to write maintainable, performant, and scalable code.',
    skills: [
      { name: 'JavaScript', iconLabel: 'JS', iconBg: 'bg-[#f7df1e] text-black' },
      { name: 'TypeScript', iconLabel: 'TS', iconBg: 'bg-[#3178c6]' },
      { name: 'Python', iconLabel: 'Py', iconBg: 'bg-[#3776ab]' },
      { name: 'Go (Golang)', iconLabel: 'Go', iconBg: 'bg-[#00add8] text-black' },
    ],
  },
  {
    title: '<Libraries & Frameworks />',
    description: 'Frameworks and libraries that speed up development and provide structure.',
    skills: [
      { name: 'CSS3', iconLabel: 'CSS', iconBg: 'bg-[#264de4]' },
      { name: 'React.js', iconLabel: 'R', iconBg: 'bg-[#20232a] text-[#61dafb]' },
      { name: 'Next.js', iconLabel: 'NX', iconBg: 'bg-black' },
      { name: 'NestJS', iconLabel: 'N', iconBg: 'bg-[#e0234e]' },
      { name: 'NextAuth.js', iconLabel: 'NA', iconBg: 'bg-[#111827]' },
      { name: 'Better Auth', iconLabel: 'BA', iconBg: 'bg-emerald-700' },
      { name: 'Express.js', iconLabel: 'EX', iconBg: 'bg-zinc-900' },
      { name: 'Prisma', iconLabel: 'P', iconBg: 'bg-[#0c344b]' },
      { name: 'Django', iconLabel: 'dj', iconBg: 'bg-[#092e20]' },
      { name: 'Tailwind CSS', iconLabel: 'TW', iconBg: 'bg-[#0f172a]' },
      { name: 'TanStack Query', iconLabel: 'TSQ', iconBg: 'bg-[#f97316]' },
      { name: 'SASS', iconLabel: 'Sa', iconBg: 'bg-[#cc6699]' },
      { name: 'FastAPI', iconLabel: 'FA', iconBg: 'bg-[#05998b]' },
      { name: 'GSAP', iconLabel: 'G', iconBg: 'bg-[#1a1f1c]' },
      { name: 'Firebase', iconLabel: 'Fb', iconBg: 'bg-[#ffca28] text-black' },
    ],
  },
  {
    title: '<AI & Machine Learning />',
    description: 'Techniques and tools to build intelligent, data-driven applications.',
    skills: [
      { name: 'Vercel AI SDK', iconLabel: 'VA', iconBg: 'bg-black' },
      { name: 'Mastra AI', iconLabel: 'Ma', iconBg: 'bg-[#0f172a]' },
      { name: 'Machine Learning', iconLabel: 'ML', iconBg: 'bg-indigo-700' },
      { name: 'Deep Learning', iconLabel: 'DL', iconBg: 'bg-purple-700' },
      { name: 'OpenCV', iconLabel: 'CV', iconBg: 'bg-[#0b3d91]' },
      { name: 'OpenAI API', iconLabel: 'AI', iconBg: 'bg-[#0f172a]' },
    ],
  },
  {
    title: '<Databases & Data Tools />',
    description:
      'SQL, NoSQL, caching, and ORM tools for robust, high-performance data management.',
    skills: [
      { name: 'PostgreSQL', iconLabel: 'PG', iconBg: 'bg-[#336791]' },
      { name: 'MySQL', iconLabel: 'My', iconBg: 'bg-[#00758f]' },
      { name: 'MongoDB', iconLabel: 'Mg', iconBg: 'bg-[#001e2b]' },
      { name: 'Redis', iconLabel: 'Rd', iconBg: 'bg-[#d82c20]' },
      { name: 'Drizzle ORM', iconLabel: 'Dr', iconBg: 'bg-emerald-800' },
      { name: 'NeonDB', iconLabel: 'Ne', iconBg: 'bg-[#0f172a]' },
      { name: 'DataGrip', iconLabel: 'DG', iconBg: 'bg-[#21d789] text-black' },
    ],
  },
  {
    title: '<DevOps & Cloud />',
    description:
      'Infrastructure as code, CI/CD, and cloud platforms to deploy and scale applications reliably.',
    skills: [
      { name: 'Node.js', iconLabel: 'Nd', iconBg: 'bg-[#303030]' },
      { name: 'tRPC', iconLabel: 'tR', iconBg: 'bg-[#0f172a]' },
      { name: 'Git', iconLabel: 'Git', iconBg: 'bg-[#f1502f]' },
      { name: 'Docker', iconLabel: 'Dk', iconBg: 'bg-[#0db7ed]' },
      { name: 'Kubernetes', iconLabel: 'K8s', iconBg: 'bg-[#326ce5]' },
      { name: 'Terraform', iconLabel: 'Tf', iconBg: 'bg-[#563d7c]' },
      { name: 'Apache Kafka', iconLabel: 'Kf', iconBg: 'bg-[#231f20]' },
      { name: 'RESTful APIs', iconLabel: 'API', iconBg: 'bg-zinc-900' },
      { name: 'JWT', iconLabel: 'JWT', iconBg: 'bg-[#1a202c]' },
      { name: 'Webpack', iconLabel: 'Wp', iconBg: 'bg-[#1c78c0]' },
      { name: 'Google Cloud Platform', iconLabel: 'GCP', iconBg: 'bg-[#1a73e8]' },
      { name: 'AWS', iconLabel: 'AWS', iconBg: 'bg-[#ff9900] text-black' },
      { name: 'Vercel', iconLabel: 'V', iconBg: 'bg-black' },
      { name: 'GitHub Actions', iconLabel: 'GH', iconBg: 'bg-[#0d1117]' },
    ],
  },
  {
    title: '<IDEs & Creative Tools />',
    description:
      'The editors, IDEs, and design tools that fuel daily productivity and creativity.',
    skills: [
      { name: 'Cursor', iconLabel: 'Cu', iconBg: 'bg-[#111827]' },
      { name: 'VS Code', iconLabel: 'VS', iconBg: 'bg-[#007acc]' },
      { name: 'JetBrains', iconLabel: 'JB', iconBg: 'bg-[#000000]' },
      { name: 'Figma', iconLabel: 'Fg', iconBg: 'bg-[#1e1e1e]' },
    ],
  },
];

const SkillBadge: React.FC<Skill> = ({ name, iconLabel, iconBg }) => {
  return (
    <div className="inline-flex items-center gap-3 rounded-xl border border-zinc-800 bg-[#050509] px-3 py-2 shadow-sm">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-md text-[10px] font-semibold ${iconBg}`}
      >
        {iconLabel}
      </div>
      <span className="font-figtree text-sm text-zinc-200">{name}</span>
    </div>
  );
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white p-8 md:p-16 flex flex-col items-center">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="font-irish-grover text-6xl md:text-8xl font-bold tracking-tight text-white">
            Skills
          </h1>
          <p className="font-figtree text-zinc-400 text-xl md:text-2xl max-w-2xl">
            The tools, languages, and platforms I use to build reliable, expressive systems.
          </p>
        </div>

        <div className="w-full border border-dashed border-[#27272a] bg-[#050509] p-6 md:p-8 flex flex-col gap-10">
          {sections.map((section, index) => (
            <section
              key={section.title}
              className={index === 0 ? '' : 'pt-8 border-t border-dashed border-[#27272a]'}
            >
              <div className="flex flex-col gap-2 mb-4">
                <h2 className="font-doto text-lg md:text-xl text-zinc-100">
                  {section.title}
                </h2>
                <p className="font-figtree text-sm md:text-base text-zinc-400">
                  {section.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {section.skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    iconLabel={skill.iconLabel}
                    iconBg={skill.iconBg}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}


'use client';

import React, { ReactNode } from 'react';

type Skill = {
  name: string;
  icon?: ReactNode;
};

type SkillSection = {
  title: string;
  description: string;
  skills: Skill[];
};

const JavascriptIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    role="img"
    viewBox="0 0 24 24"
    className="h-5 w-5 text-yellow-400"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
  </svg>
);

const sections: SkillSection[] = [
  {
    title: '<Programming Languages />',
    description: 'Core languages I rely on to write maintainable, performant, and scalable code.',
    skills: [
      { name: 'JavaScript', icon: <JavascriptIcon /> },
      { name: 'TypeScript', icon: <JavascriptIcon /> },
      { name: 'Python', icon: <JavascriptIcon /> },
      { name: 'Go (Golang)', icon: <JavascriptIcon /> },
    ],
  },
  {
    title: '<Libraries & Frameworks />',
    description: 'Frameworks and libraries that speed up development and provide structure.',
    skills: [
      { name: 'CSS3', icon: <JavascriptIcon /> },
      { name: 'React.js', icon: <JavascriptIcon /> },
      { name: 'Next.js', icon: <JavascriptIcon /> },
      { name: 'NestJS', icon: <JavascriptIcon /> },
      { name: 'NextAuth.js', icon: <JavascriptIcon /> },
      { name: 'Better Auth', icon: <JavascriptIcon /> },
      { name: 'Express.js', icon: <JavascriptIcon /> },
      { name: 'Prisma', icon: <JavascriptIcon /> },
      { name: 'Django', icon: <JavascriptIcon /> },
      { name: 'Tailwind CSS', icon: <JavascriptIcon /> },
      { name: 'TanStack Query', icon: <JavascriptIcon /> },
      { name: 'SASS', icon: <JavascriptIcon /> },
      { name: 'FastAPI', icon: <JavascriptIcon /> },
      { name: 'GSAP', icon: <JavascriptIcon /> },
      { name: 'Firebase', icon: <JavascriptIcon /> },
    ],
  },
  {
    title: '<AI & Machine Learning />',
    description: 'Techniques and tools to build intelligent, data-driven applications.',
    skills: [
      { name: 'Vercel AI SDK', icon: <JavascriptIcon /> },
      { name: 'Mastra AI', icon: <JavascriptIcon /> },
      { name: 'Machine Learning', icon: <JavascriptIcon /> },
      { name: 'Deep Learning', icon: <JavascriptIcon /> },
      { name: 'OpenCV', icon: <JavascriptIcon /> },
      { name: 'OpenAI API', icon: <JavascriptIcon /> },
    ],
  },
  {
    title: '<Databases & Data Tools />',
    description:
      'SQL, NoSQL, caching, and ORM tools for robust, high-performance data management.',
    skills: [
      { name: 'PostgreSQL', icon: <JavascriptIcon /> },
      { name: 'MySQL', icon: <JavascriptIcon /> },
      { name: 'MongoDB', icon: <JavascriptIcon /> },
      { name: 'Redis', icon: <JavascriptIcon /> },
      { name: 'Drizzle ORM', icon: <JavascriptIcon /> },
      { name: 'NeonDB', icon: <JavascriptIcon /> },
      { name: 'DataGrip', icon: <JavascriptIcon /> },
    ],
  },
  {
    title: '<DevOps & Cloud />',
    description:
      'Infrastructure as code, CI/CD, and cloud platforms to deploy and scale applications reliably.',
    skills: [
      { name: 'Node.js', icon: <JavascriptIcon /> },
      { name: 'tRPC', icon: <JavascriptIcon /> },
      { name: 'Git', icon: <JavascriptIcon /> },
      { name: 'Docker', icon: <JavascriptIcon /> },
      { name: 'Kubernetes', icon: <JavascriptIcon /> },
      { name: 'Terraform', icon: <JavascriptIcon /> },
      { name: 'Apache Kafka', icon: <JavascriptIcon /> },
      { name: 'RESTful APIs', icon: <JavascriptIcon /> },
      { name: 'JWT', icon: <JavascriptIcon /> },
      { name: 'Webpack', icon: <JavascriptIcon /> },
      { name: 'Google Cloud Platform', icon: <JavascriptIcon /> },
      { name: 'AWS', icon: <JavascriptIcon /> },
      { name: 'Vercel', icon: <JavascriptIcon /> },
      { name: 'GitHub Actions', icon: <JavascriptIcon /> },
    ],
  },
  {
    title: '<IDEs & Creative Tools />',
    description:
      'The editors, IDEs, and design tools that fuel daily productivity and creativity.',
    skills: [
      { name: 'Cursor', icon: <JavascriptIcon /> },
      { name: 'VS Code', icon: <JavascriptIcon /> },
      { name: 'JetBrains', icon: <JavascriptIcon /> },
      { name: 'Figma', icon: <JavascriptIcon /> },
    ],
  },
];

const SkillBadge: React.FC<Skill> = ({ name, icon }) => {
  return (
    <div className="inline-flex items-center gap-3 rounded-xl border border-zinc-800 bg-[#050509] px-3 py-2 shadow-sm">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#111827]">
        {icon ?? <JavascriptIcon />}
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
                <h2 className="font-calistoga text-lg md:text-xl text-zinc-100">
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
                    icon={skill.icon}
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

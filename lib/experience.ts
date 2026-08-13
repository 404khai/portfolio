export type ExperienceEntry = {
  company: string;
  role: string;
  type: string;
  period: string;
  logo: string;
  contributions: string[];
  skills: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'JhinxPay',
    role: 'App Developer',
    type: 'Remote',
    period: 'Mar 2026 – May 2026',
    logo: '/jhinxpay.png',
    contributions: [
      'Built and optimized screens perfectly replicating static mockups increasing user retention by 30%',
      'Improved project structure for easy reproductibility improving dev onboarding by 50%',
      'Implemented end-to-end APIs for giftcards, gamepoints, wallets and transactions',
    ],
    skills: ['Flutter', 'Dart'],
  },
  {
    company: 'GRVT8 Labs',
    role: 'Founder',
    type: 'Remote',
    period: 'Aug 2025 – present',
    logo: '/grvt8.jpg',
    contributions: [
      'Designed and developed Keihatsu, a cross-platform social manwha, webtoon & manga reader app.',
    ],
    skills: ['System Design', 'Swift', 'Typescript', 'Nest.js', 'Dart', 'Flutter'],
  },
  {
    company: 'HNG Tech',
    role: 'Software Engineer Intern',
    type: 'Remote',
    period: 'Oct 2025 – Dec 2025',
    logo: '/hng.jpeg',
    contributions: [
      'Architected a distributed notification microservice (Redis Streams pub/sub, idempotent delivery), spearheading a 3-engineer pod, reducing notification latency by 40% (p95 <300ms).',
      'Contributed to Legal WatchDog, an AI-powered regulatory intelligence platform for enterprises that reduces manual compliance efforts by 50%.',
      'Integrated two A2A-compliant AI agents (a riddle agent and a real-time news update agent) into Telex.im',
      'Created an AI agent slack bot that helped interns for task deliverables summarization.',
      'Developed RESTful API projects with Django and FastAPI implementing NLP search.',
      'Built a document analyzer using OpenRouter\'s LLM APIs with chunking and embedding similarity search, achieving 92% summarization accuracy',
      'Drove CI/CD adoption (GitHub Actions + Docker), tripling deployment frequency and eliminating staging environment drift.',
    ],
    skills: [
      'Team Leadership & Management',
      'Prompt Engineering',
      'Collaboration',
      'AI Agents',
      'Mastra',
      'Python',
      'Nest.js',
      'Microservices',
      'Distributed Systems',
      'TypeScript',
      'Docker',
      'Minio',
      'Redis',
    ],
  },
  {
    company: 'SnapiLabs',
    role: 'Software Developer Intern',
    type: 'Remote',
    period: 'Aug 2024 – Nov 2024',
    logo: '/snapilabs.jpeg',
    contributions: [
      "Built SupaNote's AI workspace landing page with virtualized scrolling and debounced search, achieving 98+ Lighthouse score and 40% lower bounce rate.",
      "Rebuilt Krea AI's UI from static mockups using component composition, delivering pixel perfect responsive implementation 2 weeks ahead of schedule.",
      'Implemented a mobile-first design system in Tailwind CSS with atomic CSS architecture, accelerating feature development velocity by 30%.',
    ],
    skills: ['Next.js', 'Tailwind CSS', 'Javascript'],
  },
];

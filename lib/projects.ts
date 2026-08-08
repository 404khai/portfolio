export type ProjectCategory =
  | 'All'
  | 'AI / ML'
  | 'Mobile Apps'
  | 'Frontend'
  | 'Fullstack'
  | 'Backend / APIs'
  | 'Games'
  | 'Other';

export type ProjectStatus =
  | 'live'
  | 'construction'
  | 'users'
  | 'coming-soon'
  | 'not-live'
  | 'completed';

export type ProjectMeta = {
  slug: string;
  title: string;
  description: string;
  logo: string;
  categories: ProjectCategory[];
  status?: ProjectStatus[];
  highlights: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const PROJECTS: ProjectMeta[] = [
  {
    slug: 'odyssey',
    title: 'Odyssey',
    description:
      'A decoder-only transformer exploring long-horizon reasoning and autonomous software engineering.',
    logo: '/odyssey.jpeg',
    categories: ['AI / ML'],
    status: ['construction', 'not-live'],
    highlights: [
      'Designed around long-horizon reasoning and software architecture tasks.',
      'Explores how language models can plan and execute multi-step engineering work.',
    ],
    stack: ['Rust', 'Python', 'TypeScript', 'PostgreSQL'],
    githubUrl: 'https://github.com/404khai/odyssey',
  },
  {
    slug: 'phalanx',
    title: 'Phalanx',
    description: 'A high-performance Rust runtime for modern LLM inference workloads.',
    logo: '/phalanx.jpg',
    categories: ['AI / ML'],
    status: ['construction', 'not-live'],
    highlights: [
      'Builds a systems-level foundation for efficient model inference.',
      'Investigates quantization and runtime trade-offs for practical deployment.',
    ],
    stack: ['Rust', 'Python', 'Inference', 'Quantization'],
    githubUrl: 'https://github.com/404khai/phalanx',
  },
  {
    slug: 'keihatsu',
    title: 'Keihatsu',
    description: 'A cross-platform social manhwa reader for discovering and discussing series.',
    logo: '/keihatsu.png',
    categories: ['Mobile Apps'],
    status: ['completed', 'not-live', 'users'],
    highlights: [
      'Designed a reader-first experience for manga, manhwa, and manhua communities.',
      'Added offline downloads and social features around shared reading interests.',
    ],
    stack: ['TypeScript', 'Nest.js', 'SwiftUI', 'Flutter'],
    githubUrl: 'https://github.com/grvt8/Keihatsu.git',
    liveUrl: 'http://keihatsu.vercel.app',
  },
  {
    slug: 'finomaly',
    title: 'Finomaly',
    description: 'A real-time financial anomaly detection pipeline for high-volume event streams.',
    logo: '/finomaly.png',
    categories: ['AI / ML', 'Backend / APIs'],
    status: ['completed', 'not-live'],
    highlights: [
      'Combined an Autoencoder and GraphSAGE model for transaction anomaly detection.',
      'Served inference through a Kafka, Redis, and FastAPI pipeline.',
    ],
    stack: ['Python', 'FastAPI', 'PyTorch', 'Kafka', 'Redis'],
    githubUrl: 'https://github.com/404khai/finomaly',
  },
  {
    slug: 'rails',
    title: 'Rails',
    description: 'Developer-first virtual account infrastructure built on the Nomba API.',
    logo: '/rails.jpeg',
    categories: ['Backend / APIs'],
    status: ['completed', 'live'],
    highlights: [
      'Provisioned per-customer virtual accounts and reconciled inbound transfers.',
      'Exposed a clean webhook API with queue-backed processing for downstream teams.',
    ],
    stack: ['TypeScript', 'Fastify', 'BullMQ', 'Redis', 'Nomba API'],
    githubUrl: 'https://github.com/404khai/rails',
    liveUrl: 'https://rails-92q5.onrender.com/docs',
  },
  {
    slug: 'openframe',
    title: 'OpenFrame',
    description: 'An open-source desktop video editor for fast, social-first creative workflows.',
    logo: '/openframe.png',
    categories: ['Other'],
    status: ['coming-soon', 'construction'],
    highlights: [
      'Explores a faster, simpler editing workflow for modern creator formats.',
      'Uses a native desktop stack to keep editing responsive and approachable.',
    ],
    stack: ['Rust', 'Tauri', 'TypeScript', 'Astro'],
    githubUrl: 'https://github.com/404khai/openframe',
    liveUrl: 'https://openframe-app.vercel.app',
  },
  {
    slug: 'farmintel',
    title: 'FarmIntel',
    description: 'An agricultural intelligence system for data-informed farming decisions.',
    logo: '/farmintel.png',
    categories: ['AI / ML', 'Fullstack'],
    status: ['completed', 'not-live'],
    highlights: [
      'Added pest and plant-disease detection with weather and crop-yield predictions.',
      'Combined AI recommendations with a community for farmers and agro-enterprises.',
    ],
    stack: ['React', 'TypeScript', 'Python', 'FastAPI', 'ML'],
    githubUrl: 'https://github.com/404khai/FarmIntel-API',
    liveUrl: 'https://farmintel-ai.vercel.app',
  },
  {
    slug: 'hirecraft',
    title: 'HireCraft',
    description: 'A domestic-service marketplace connecting providers with employers.',
    logo: '/hirecraft.jpeg',
    categories: ['Fullstack'],
    status: ['completed', 'not-live'],
    highlights: [
      'Modeled a marketplace workflow for discovering and hiring local service providers.',
      'Built the API and responsive client across a Java and React stack.',
    ],
    stack: ['Java', 'Spring Boot', 'TypeScript', 'React'],
    githubUrl: 'https://github.com/404khai/HireCraft-SpringBoot',
    liveUrl: 'https://hirecraft.vercel.app',
  },
  {
    slug: 'laptopharbor',
    title: 'Laptop Harbor',
    description: 'A mobile marketplace for laptops and related accessories.',
    logo: '/laptopharbor.jpg',
    categories: ['Mobile Apps'],
    status: ['completed', 'live', 'users'],
    highlights: [
      'Built a mobile-first browsing and purchasing experience for hardware products.',
      'Connected product, account, and commerce flows with Firebase services.',
    ],
    stack: ['Flutter', 'Dart', 'Firebase'],
    githubUrl: 'https://github.com/404khai/LaptopHarbor',
  },
  {
    slug: 'oroshi',
    title: 'Oroshi',
    description: 'A mobile ordering experience for a concept Japanese sushi brand.',
    logo: '/oroshi.png',
    categories: ['Mobile Apps'],
    status: ['completed', 'not-live'],
    highlights: [
      'Translated a brand concept into a focused mobile ordering flow.',
      'Built the interface with reusable React Native and Expo components.',
    ],
    stack: ['React Native', 'TypeScript', 'Expo'],
    githubUrl: 'https://github.com/404khai/oroshi',
  },
  {
    slug: 'supanote',
    title: 'Supanote',
    description: 'An AI-assisted workspace for organizing notes and tasks.',
    logo: '/supanote.png',
    categories: ['Frontend'],
    status: ['completed', 'live'],
    highlights: [
      'Unified notes, tasks, and smart suggestions in a founder-friendly workspace.',
      'Focused on simple information architecture and fast everyday interactions.',
    ],
    stack: ['React', 'TypeScript', 'CSS'],
    githubUrl: 'https://github.com/404khai/supanote',
    liveUrl: 'https://supanote-space.vercel.app',
  },
  {
    slug: 'krea-ai',
    title: 'Krea AI',
    description: 'A responsive reconstruction of Krea AI’s creative-tool landing page.',
    logo: '/krea.png',
    categories: ['Frontend'],
    status: ['completed', 'live'],
    highlights: [
      'Recreated a visual interface from static reference material with responsive behavior.',
      'Composed the page from reusable sections and a lightweight Tailwind system.',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/404khai/Krea-AI-Clone',
    liveUrl: 'https://krea-ai-web-clone.vercel.app',
  },
  {
    slug: 'mail-api',
    title: 'ESP Integration API',
    description: 'A mail integration API for Mailchimp and GetResponse campaigns.',
    logo: '/mail.png',
    categories: ['Backend / APIs'],
    status: ['completed', 'not-live'],
    highlights: [
      'Unified lead and campaign-email flows behind a single service API.',
      'Connected two external email providers without leaking provider details upstream.',
    ],
    stack: ['TypeScript', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/404khai/mail-integration-api',
  },
  {
    slug: 'wallet-service',
    title: 'Wallet Service',
    description:
      'A wallet service for deposits, balances, and transactions through Paystack.',
    logo: '/wallet.jpg',
    categories: ['Backend / APIs'],
    status: ['completed', 'not-live'],
    highlights: [
      'Modeled wallet balances and transaction flows around Paystack payments.',
      'Provided a focused API surface for deposits and account-level money movement.',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Paystack'],
    githubUrl: 'https://github.com/404khai/wallet-service-api',
  },
  {
    slug: 'notification-service',
    title: 'Notification Service',
    description:
      'A queue-backed notification system for asynchronous email and push delivery.',
    logo: '/bell.png',
    categories: ['Backend / APIs'],
    status: ['completed', 'not-live'],
    highlights: [
      'Separated notification delivery from request paths using message queues.',
      'Designed for reliable asynchronous email and push notification processing.',
    ],
    stack: ['Python', 'TypeScript', 'Redis', 'FastAPI', 'Nest.js'],
    githubUrl: 'https://github.com/404khai/hng13-stage4-notification-system',
  },
];

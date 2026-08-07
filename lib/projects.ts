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
};

export const PROJECTS: ProjectMeta[] = [
  {
    slug: 'odyssey',
    title: 'Odyssey',
    description:
      'A decoder-only transformer specializing in long-horizon reasoning, software architecture, and autonomous software engineering.',
    logo: '/odyssey.jpeg',
    categories: ['AI / ML'],
    status: ['construction', 'not-live'],
  },
  {
    slug: 'phalanx',
    title: 'Phalanx',
    description: 'A high-performance Rust runtime for modern LLM inference.',
    logo: '/phalanx.jpg',
    categories: ['AI / ML'],
    status: ['construction', 'not-live'],
  },
  {
    slug: 'keihatsu',
    title: 'Keihatsu',
    description: 'The cross-platform social manwha reader app',
    logo: '/keihatsu.png',
    categories: ['Mobile Apps'],
    status: ['completed', 'not-live', 'users'],
  },
  {
    slug: 'finomaly',
    title: 'Finomaly',
    description: 'Real-time financial anomaly detection system',
    logo: '/finomaly.png',
    categories: ['AI / ML', 'Backend / APIs'],
    status: ['completed', 'not-live'],
  },
  {
    slug: 'rails',
    title: 'Rails',
    description: 'Developer-first virtual account infrastructure layer built on the Nomba API',
    logo: '/rails.jpeg',
    categories: ['Backend / APIs'],
    status: ['completed', 'live'],
  },
  {
    slug: 'openframe',
    title: 'OpenFrame',
    description: 'The opensource creative editing platform',
    logo: '/openframe.png',
    categories: ['Other'],
    status: ['coming-soon', 'construction'],
  },
  {
    slug: 'farmintel',
    title: 'FarmIntel',
    description: 'Agricultural intelligence system for farmers and agro-enterprises',
    logo: '/farmintel.png',
    categories: ['AI / ML', 'Fullstack'],
    status: ['completed', 'not-live'],
  },
  {
    slug: 'hirecraft',
    title: 'HireCraft',
    description: 'Domestic service marketplace.',
    logo: '/hirecraft.jpeg',
    categories: ['Fullstack'],
    status: ['completed', 'not-live'],
  },
  {
    slug: 'laptopharbor',
    title: 'Laptop Harbor',
    description: 'Marketplace for laptops & related accessories.',
    logo: '/laptopharbor.jpg',
    categories: ['Mobile Apps'],
    status: ['completed', 'live', 'users'],
  },
  {
    slug: 'oroshi',
    title: 'Oroshi',
    description: 'App design for a concept sushi brand.',
    logo: '/oroshi.png',
    categories: ['Mobile Apps'],
    status: ['completed', 'not-live'],
  },
  {
    slug: 'supanote',
    title: 'Supanote',
    description: 'Concept AI note and task organizer.',
    logo: '/supanote.png',
    categories: ['Frontend'],
    status: ['completed', 'live'],
  },
  {
    slug: 'krea-ai',
    title: 'Krea AI',
    description: 'Clone of KreaAI website',
    logo: '/krea.png',
    categories: ['Frontend'],
    status: ['completed', 'live'],
  },
  {
    slug: 'mail-api',
    title: 'ESP Integration API',
    description: 'Mail integration API using Mailchimp and GetResponse.',
    logo: '/mail.png',
    categories: ['Backend / APIs'],
    status: ['completed', 'not-live'],
  },
  {
    slug: 'wallet-service',
    title: 'Wallet Service',
    description:
      'Wallet service for managing user wallets, deposits & transactions using Paystack.',
    logo: '/wallet.jpg',
    categories: ['Backend / APIs'],
    status: ['completed', 'not-live'],
  },
  {
    slug: 'notification-service',
    title: 'Notification Service',
    description:
      'Microservices notification system for sending emails and push notifications asynchronously.',
    logo: '/bell.png',
    categories: ['Backend / APIs'],
    status: ['completed', 'not-live'],
  },
];

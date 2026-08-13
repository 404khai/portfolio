export type OpenSourceContribution = {
  name: string;
  description: string;
  siteUrl: string;
  contributions: {
    title: string;
    prUrl: string;
  }[];
};

export const OPEN_SOURCE: OpenSourceContribution[] = [
  {
    name: 'Tellstone',
    description:
      'High-performance in-memory database and drop-in replacement for Redis.',
    siteUrl: 'https://tellstone.io',
    contributions: [
      {
        title: 'Automatic TLS certificate rotation for binary and RESP listeners',
        prUrl: 'https://github.com/Saxy/Tellstone/pull/21',
      },
      {
        title: 'STARTTLS connection upgrades for RESP',
        prUrl: 'https://github.com/Saxy/Tellstone/pull/24',
      },
    ],
  },
  {
    name: 'Navii',
    description: 'Drop-in deterministic mascot avatars.',
    siteUrl: 'https://navii.dev',
    contributions: [
      {
        title: 'Official Flutter SDK (`usenavii`) with SVG parity to @usenavii/core',
        prUrl: 'https://github.com/uxderrick/navii/pull/5',
      },
    ],
  },
  {
    name: 'Zero',
    description:
      'The terminal coding agent that answers to you, your model, your machine, your rules.',
    siteUrl: 'https://zero.gitlawb.com',
    contributions: [
      {
        title: 'AI/ML API OpenAI-compatible provider preset',
        prUrl: 'https://github.com/Gitlawb/zero/pull/621',
      },
    ],
  },
  {
    name: 'OutRay',
    description:
      'Open-source ngrok alternative for exposing local development servers via secure tunnels.',
    siteUrl: 'https://outray.dev',
    contributions: [
      {
        title: 'Centralized CLI flag parsing into shared helpers',
        prUrl: 'https://github.com/outray-tunnel/outray/pull/35',
      },
    ],
  },
];

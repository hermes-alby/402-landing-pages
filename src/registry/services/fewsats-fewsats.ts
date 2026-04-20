import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'fewsats-fewsats',
  providerKey: 'fewsats',
  name: "Fewsats",
  endpointUrl: "https://fewsats.com/",
  category: "Crypto / Payments",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative Fewsats endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'Fewsats'.",
    "Endpoint URL: https://fewsats.com/",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Payment infrastructure for AI agents. Enables autonomous agents to pay and get paid using L402.",
  ],
} satisfies ServiceRegistryEntry;

export default service;

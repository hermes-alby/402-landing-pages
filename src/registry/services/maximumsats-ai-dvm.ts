import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'maximumsats-ai-dvm',
  providerKey: 'maximumsats',
  name: "AI DVM",
  endpointUrl: "https://maximumsats.com/api/dvm",
  category: "Ai / Ml",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative MaximumSats endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'MaximumSats'.",
    "Endpoint URL: https://maximumsats.com/api/dvm",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: General-purpose AI assistant via DVM (Data Vending Machine). Free tier: 1 query/24h, then L402. Also supports x402 (USDC).",
  ],
} satisfies ServiceRegistryEntry;

export default service;

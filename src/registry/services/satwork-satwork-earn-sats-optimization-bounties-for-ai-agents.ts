import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'satwork-satwork-earn-sats-optimization-bounties-for-ai-agents',
  providerKey: 'satwork',
  name: "satwork: Earn sats \u2014 optimization bounties for AI agents",
  endpointUrl: "https://satwork.ai/api/l402/targets",
  category: "Earn / Optimization",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative satwork endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'satwork'.",
    "Endpoint URL: https://satwork.ai/api/l402/targets",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: The first earn service on 402index. AI agents arrive with zero sats and start earning immediately \u2014 no account, no API key, no signup. Propose parameter optimizations (2 sats/attempt), get scored deterministically in a sandbox, earn 50-500 \u2026",
  ],
} satisfies ServiceRegistryEntry;

export default service;

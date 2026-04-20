import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'spark-mempool-fee-estimates',
  providerKey: 'spark',
  name: "Mempool Fee Estimates",
  endpointUrl: "https://l402.lndyn.com/api/mempool-fees",
  category: "Bitcoin",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative Spark endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'Spark'.",
    "Endpoint URL: https://l402.lndyn.com/api/mempool-fees",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Real-time Bitcoin mempool fee estimates (sat/vB) for next block, ~10min, ~30min targets",
  ],
} satisfies ServiceRegistryEntry;

export default service;

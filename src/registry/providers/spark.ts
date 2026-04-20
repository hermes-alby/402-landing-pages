import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'spark',
  name: "Spark",
  websiteUrl: "https://l402.lndyn.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Spark looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'Mempool Fee Estimates'.",
  endpointCandidates: ["mempool-fees", "nostr-trending", "quote"],
  notes: [
    "402index snapshot on 2026-04-20: 3 indexed L402 services; top categories: bitcoin, social; average reliability 87.9.",
    "Representative candidate endpoint: https://l402.lndyn.com/api/mempool-fees",
    "Main website candidate: https://l402.lndyn.com (title: Spark L402 API)",
    "Source mix: self-registered\u00d73.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, l402, lightning.",
    "Representative service summary: Real-time Bitcoin mempool fee estimates (sat/vB) for next block, ~10min, ~30min targets",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

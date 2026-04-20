import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'fewsats',
  name: "Fewsats",
  websiteUrl: "https://fewsats.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Fewsats looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'Fewsats'.",
  endpointCandidates: ["fewsats"],
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: crypto; average reliability 100.0.",
    "Representative candidate endpoint: https://fewsats.com/",
    "Main website candidate: https://fewsats.com.",
    "Source mix: l402apps\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Representative service summary: Payment infrastructure for AI agents. Enables autonomous agents to pay and get paid using L402.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

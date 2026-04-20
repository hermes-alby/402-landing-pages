import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'open-agents',
  name: "Open Agents",
  websiteUrl: "https://openagents.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Open Agents looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'Open Agents'.",
  endpointCandidates: ["open-agents"],
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: tools; average reliability 95.0.",
    "Representative candidate endpoint: https://openagents.com/",
    "Main website candidate: https://openagents.com (title: openagents.com)",
    "Source mix: satring\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Representative service summary: An open platform for AI agents, built in public from scratch.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

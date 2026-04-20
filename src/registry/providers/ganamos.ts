import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'ganamos',
  name: "Ganamos",
  websiteUrl: "https://ganamos.earth",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Ganamos looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'Ganamos: Create Job'.",
  endpointCandidates: ["posts", "fixes"],
  notes: [
    "402index snapshot on 2026-04-20: 3 indexed L402 services; top categories: tools, bitcoin; average reliability 93.3.",
    "Representative candidate endpoint: https://www.ganamos.earth/api/posts",
    "Main website candidate: https://ganamos.earth (title: Ganamos! Bitcoin-Powered Job Marketplace)",
    "Source mix: discovery\u00d72, l402apps\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, l402, lightning.",
    "Representative service summary: Post a Bitcoin-funded bounty job. Costs reward amount + 10 sat API fee via L402 Lightning payment. Returns post_id and status URL.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

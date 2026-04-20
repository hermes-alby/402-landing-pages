import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'golem-gateway',
  name: "golem-gateway",
  websiteUrl: "https://atlas.tail33dea9.ts.net",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'rejected',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "golem-gateway is not a good landing-page candidate right now because the provider identity or host quality still looks too weak.",
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: ai; average reliability 30.0.",
    "Representative candidate endpoint: https://atlas.tail33dea9.ts.net/",
    "Main website candidate: https://atlas.tail33dea9.ts.net.",
    "Source mix: self-registered\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Representative service summary: Ollama \u2014 qwen2.5:3b",
    "Current rejection is based on weak provider/host credibility, not on 402index health alone.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

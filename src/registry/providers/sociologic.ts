import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'sociologic',
  name: "SocioLogic",
  websiteUrl: "https://rng.sociologic.ai",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "SocioLogic looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'rng.sociologic.ai/random'.",
  endpointCandidates: ["random", "uuid"],
  notes: [
    "402index snapshot on 2026-04-20: 2 indexed L402 services; top categories: ai; average reliability 94.7.",
    "Representative candidate endpoint: https://rng.sociologic.ai/random",
    "Main website candidate: https://rng.sociologic.ai.",
    "Source mix: satring\u00d72.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Representative service summary: Added by scraper. Domain owners can authenticate for free to edit information.",
    "Representative endpoint details still rely on low-confidence scraper metadata and need direct validation before activation.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

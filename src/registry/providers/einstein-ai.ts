import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'einstein-ai',
  name: "Einstein AI",
  websiteUrl: "https://emc2ai.io",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Einstein AI looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'emc2ai.io/x402/bitquery/arbitragescanner'.",
  endpointCandidates: ["arbitragescanner", "bscalpha", "dexcapital"],
  notes: [
    "402index snapshot on 2026-04-20: 25 indexed L402 services; top categories: ai; average reliability 94.9.",
    "Representative candidate endpoint: https://emc2ai.io/x402/bitquery/arbitragescanner",
    "Main website candidate: https://emc2ai.io (title: Einstein-Client)",
    "Source mix: satring\u00d725.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Representative service summary: Added by scraper. Domain owners can authenticate for free to edit information.",
    "Representative endpoint details still rely on low-confidence scraper metadata and need direct validation before activation.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

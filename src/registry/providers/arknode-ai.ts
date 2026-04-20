import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'arknode-ai',
  name: "arknode.ai",
  websiteUrl: "https://arknode.ai",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'duplicate',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "arknode.ai appears to be an alias or duplicate listing for an already-tracked provider and was added to avoid re-review.",
  duplicateOf: 'the-ark-ai',
  notes: [
    "402index snapshot on 2026-04-20: 3 indexed L402 services; top categories: tools; average reliability 28.3.",
    "Representative candidate endpoint: https://arknode.ai/api",
    "Main website candidate: https://arknode.ai (title: The Ark AI \u2014 Chat with AI, Pay with Lightning \u26a1)",
    "Source mix: satring\u00d73.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: terms, contact, lightning.",
    "Representative service summary: Added by scraper. Domain owners can authenticate for free to edit information.",
    "Mapped as duplicate of provider key 'the-ark-ai'.",
    "Representative endpoint details still rely on low-confidence scraper metadata and need direct validation before activation.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

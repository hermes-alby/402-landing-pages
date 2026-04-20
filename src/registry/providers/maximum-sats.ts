import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'maximum-sats',
  name: "Maximum Sats",
  websiteUrl: "https://maximumsats.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'duplicate',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Maximum Sats appears to be an alias or duplicate listing for an already-tracked provider and was added to avoid re-review.",
  duplicateOf: 'maximumsats',
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: identity; average reliability 95.0.",
    "Representative candidate endpoint: https://maximumsats.com/",
    "Main website candidate: https://maximumsats.com (title: Developer Tools for the Lightning Network | Maximum Sats)",
    "Source mix: l402apps\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: pricing, terms, github, l402, lightning.",
    "Representative service summary: Bitcoin tools and APIs powered by Lightning Network. AI, Web of Trust scoring, Nostr summaries. Pay per request via L402.",
    "Mapped as duplicate of provider key 'maximumsats'.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'api-lightningenable-com',
  name: "api.lightningenable.com",
  websiteUrl: "https://lightningenable.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'duplicate',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "api.lightningenable.com appears to be an alias or duplicate listing for an already-tracked provider and was added to avoid re-review.",
  duplicateOf: 'lightning-enable',
  notes: [
    "402index snapshot on 2026-04-20: 6 indexed L402 services; top categories: tools; average reliability 85.6.",
    "Representative candidate endpoint: https://app.opennode.com/",
    "Main website candidate: https://lightningenable.com (title: Lightning Enable - Lightning Payments for AI Agents - Refined Element)",
    "Source mix: satring\u00d76.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, pricing, terms, contact, github, mcp, l402, lightning.",
    "Representative service summary: [Prerequisites] 1. **OpenNode Account**: Sign up at",
    "Mapped as duplicate of provider key 'lightning-enable'.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

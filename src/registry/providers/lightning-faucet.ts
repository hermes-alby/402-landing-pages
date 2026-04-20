import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'lightning-faucet',
  name: "Lightning Faucet",
  websiteUrl: "https://lightningfaucet.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Lightning Faucet looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'Lightning Faucet: Profanity Filter'.",
  endpointCandidates: ["profanity-filter", "llm-prompt", "invoice-decode"],
  notes: [
    "402index snapshot on 2026-04-20: 25 indexed L402 services; top categories: uncategorized, tools, real-time-data; average reliability 88.7.",
    "Representative candidate endpoint: https://lightningfaucet.com/api/l402/profanity_filter",
    "Main website candidate: https://lightningfaucet.com (title: Lightning Faucet - Free Bitcoin on Lightning Network)",
    "Source mix: satring\u00d72, satring,l402apps\u00d721, l402apps\u00d72.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, terms, contact, l402, lightning.",
    "Representative service summary: Content moderation API. Detect and filter profanity in text. Returns flagged words and clean version. 10 sats per request.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

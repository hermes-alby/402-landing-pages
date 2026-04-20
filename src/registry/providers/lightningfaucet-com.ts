import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'lightningfaucet-com',
  name: "lightningfaucet.com",
  websiteUrl: "https://lightningfaucet.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'duplicate',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "lightningfaucet.com appears to be an alias or duplicate listing for an already-tracked provider and was added to avoid re-review.",
  duplicateOf: 'lightning-faucet',
  notes: [
    "402index snapshot on 2026-04-20: 10 indexed L402 services; top categories: bitcoin, ai, tools; average reliability 90.3.",
    "Representative candidate endpoint: https://lightningfaucet.com/api/l402/profanity-filter",
    "Main website candidate: https://lightningfaucet.com (title: Lightning Faucet - Free Bitcoin on Lightning Network)",
    "Source mix: l402apps\u00d710.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, terms, contact, l402, lightning.",
    "Representative service summary: Lightning Faucet Profanity Filter (detect, 10 sats)",
    "Mapped as duplicate of provider key 'lightning-faucet'.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

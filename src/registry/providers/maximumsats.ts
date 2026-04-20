import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'maximumsats',
  name: "MaximumSats",
  websiteUrl: "https://maximumsats.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "MaximumSats looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'AI DVM'.",
  endpointCandidates: ["dvm", "nostr-id-inspect", "wot-report"],
  notes: [
    "402index snapshot on 2026-04-20: 50 indexed L402 services; top categories: bitcoin, nostr, lightning; average reliability 45.9.",
    "Representative candidate endpoint: https://maximumsats.com/api/dvm",
    "Main website candidate: https://maximumsats.com (title: Developer Tools for the Lightning Network | Maximum Sats)",
    "Source mix: discovery\u00d750.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: pricing, terms, github, l402, lightning.",
    "Representative service summary: General-purpose AI assistant via DVM (Data Vending Machine). Free tier: 1 query/24h, then L402. Also supports x402 (USDC).",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

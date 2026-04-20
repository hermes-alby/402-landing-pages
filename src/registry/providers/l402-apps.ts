import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'l402-apps',
  name: "L402 Apps",
  websiteUrl: "https://l402apps.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "L402 Apps looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'L402 Apps: Lightning Lottery'.",
  endpointCandidates: ["enter", "api-submissions", "apis"],
  notes: [
    "402index snapshot on 2026-04-20: 6 indexed L402 services; top categories: tools, bitcoin, uncategorized; average reliability 90.0.",
    "Representative candidate endpoint: https://www.l402apps.com/api/lottery/enter",
    "Main website candidate: https://l402apps.com (title: L402 Apps)",
    "Source mix: l402apps\u00d76.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, pricing, l402, lightning.",
    "Representative service summary: Enter the 24h Lightning Lottery. More sats = higher winning probability. Provide a Lightning Address or node pubkey for payout.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

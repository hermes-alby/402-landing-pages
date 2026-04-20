import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'wot-scoring-api',
  name: "WoT Scoring API",
  websiteUrl: "https://wot.klabo.world",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'rejected',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "WoT Scoring API is not a good landing-page candidate right now because the provider identity or host quality still looks too weak.",
  notes: [
    "402index snapshot on 2026-04-20: 50 indexed L402 services; top categories: identity, real-time-data, uncategorized; average reliability 35.0.",
    "Representative candidate endpoint: https://wot.klabo.world/score?pubkey=test",
    "Main website candidate: https://wot.klabo.world.",
    "Source mix: satring\u00d746, l402apps\u00d74.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Representative service summary: Returns normalized PageRank trust score (0-100), composite score from external NIP-85 providers, follower count, engagement metrics, topics, active hours, and reports. Accepts hex pubkeys or NIP-19 npub format.",
    "Current rejection is based on weak provider/host credibility, not on 402index health alone.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

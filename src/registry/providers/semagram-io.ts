import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'semagram-io',
  name: "semagram.io",
  websiteUrl: "https://semagram.io",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "semagram.io looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'semagram.io: Semantic search API for Telegram. Search across 1M channels, 150K chats, and 100K bots using hybrid search (embedding similarity + BM25 keyword matches).'.",
  endpointCandidates: ["search"],
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: ai; average reliability 100.0.",
    "Representative candidate endpoint: https://semagram.io/api/agent/search",
    "Main website candidate: https://semagram.io (title: Semagram)",
    "Source mix: l402apps\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: contact.",
    "Representative service summary: Semantic search API for Telegram. Search across 1M channels, 150K chats, and 100K bots using hybrid search (embedding similarity + BM25 keyword matches).",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

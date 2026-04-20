import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: '402index',
  name: "402index",
  websiteUrl: "https://402index.io",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "402index looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is '402index Services API'.",
  endpointCandidates: ["services", "export-csv"],
  notes: [
    "402index snapshot on 2026-04-20: 2 indexed L402 services; top categories: tools; average reliability 90.0.",
    "Representative candidate endpoint: https://402index.io/api/v1/services?l402=require",
    "Main website candidate: https://402index.io (title: 402 Index)",
    "Source mix: self-registered\u00d72.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, mcp, l402, lightning.",
    "Representative service summary: JSON API for querying indexed L402 and x402 paid API endpoints. Supports filtering by protocol, category, health status, and text search. Free tier with L402 upgrade for higher rate limits.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'x402scan',
  name: "x402scan",
  websiteUrl: "https://x402scan.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "x402scan looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'www.x402scan.com/api/x402/facilitators'.",
  endpointCandidates: ["facilitators", "stats", "merchants"],
  notes: [
    "402index snapshot on 2026-04-20: 6 indexed L402 services; top categories: real-time-data; average reliability 100.0.",
    "Representative candidate endpoint: https://www.x402scan.com/api/x402/facilitators",
    "Main website candidate: https://x402scan.com (title: x402scan | x402 Ecosystem Explorer)",
    "Source mix: satring\u00d76.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Representative service summary: Added by scraper. Domain owners can authenticate for free to edit information.",
    "Representative endpoint details still rely on low-confidence scraper metadata and need direct validation before activation.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

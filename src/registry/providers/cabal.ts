import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'cabal',
  name: "Cabal",
  websiteUrl: "https://getcabal.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Cabal looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'Cabal: getcabal.com API'.",
  endpointCandidates: ["connectors", "to-company", "to-person"],
  notes: [
    "402index snapshot on 2026-04-20: 5 indexed L402 services; top categories: uncategorized; average reliability 95.0.",
    "Representative candidate endpoint: https://getcabal.com/api/agent_api/v1/connectors",
    "Main website candidate: https://getcabal.com (title: Cabal \u2014 AI-Powered Relationship Intelligence)",
    "Source mix: l402apps\u00d75.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, pricing, github, mcp.",
    "Representative service summary: Get list of advisors and connectors in your network who can make introductions",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

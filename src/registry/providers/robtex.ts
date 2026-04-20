import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'robtex',
  name: "Robtex",
  websiteUrl: "https://robtex.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Robtex looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'x402.robtex.com/api/v1/as_info'.",
  endpointCandidates: ["as-info", "as-prefixes", "asquery"],
  notes: [
    "402index snapshot on 2026-04-20: 57 indexed L402 services; top categories: tools, real-time-data, uncategorized; average reliability 100.0.",
    "Representative candidate endpoint: https://x402.robtex.com/api/v1/as_info",
    "Main website candidate: https://robtex.com (title: Robtex - Free DNS Lookup & Network Intelligence)",
    "Source mix: satring\u00d757.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: terms, contact, mcp, lightning.",
    "Representative service summary: Added by scraper. Domain owners can authenticate for free to edit information.",
    "Representative endpoint details still rely on low-confidence scraper metadata and need direct validation before activation.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'stabletravel-dev',
  name: "stabletravel.dev",
  websiteUrl: "https://stabletravel.dev",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "stabletravel.dev looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'stabletravel.dev/api/reference/airline-routes'.",
  endpointCandidates: ["airline-routes"],
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: tools; average reliability 95.0.",
    "Representative candidate endpoint: https://stabletravel.dev/api/reference/airline-routes",
    "Main website candidate: https://stabletravel.dev (title: StableTravel)",
    "Source mix: satring\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, terms.",
    "Representative service summary: Added by scraper. Domain owners can authenticate for free to edit information.",
    "Representative endpoint details still rely on low-confidence scraper metadata and need direct validation before activation.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

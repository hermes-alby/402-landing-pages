import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'stableupload',
  name: "StableUpload",
  websiteUrl: "https://stableupload.dev",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "StableUpload looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'stableupload.dev/api/site'.",
  endpointCandidates: ["site", "activate", "domain"],
  notes: [
    "402index snapshot on 2026-04-20: 8 indexed L402 services; top categories: storage, crypto; average reliability 93.1.",
    "Representative candidate endpoint: https://stableupload.dev/api/site",
    "Main website candidate: https://stableupload.dev (title: StableUpload)",
    "Source mix: satring\u00d78.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, terms.",
    "Representative service summary: Added by scraper. Domain owners can authenticate for free to edit information.",
    "Representative endpoint details still rely on low-confidence scraper metadata and need direct validation before activation.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

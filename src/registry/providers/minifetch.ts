import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'minifetch',
  name: "Minifetch",
  websiteUrl: "https://minifetch.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Minifetch looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'minifetch.com/api/v1/x402/extract/url-content'.",
  endpointCandidates: ["url-content", "url-links", "url-metadata"],
  notes: [
    "402index snapshot on 2026-04-20: 4 indexed L402 services; top categories: real-time-data; average reliability 95.0.",
    "Representative candidate endpoint: https://minifetch.com/api/v1/x402/extract/url-content",
    "Main website candidate: https://minifetch.com (title: Minifetch.com: Fetch & extract metadata and data from web pages. For SEO research and AI projects.)",
    "Source mix: satring\u00d74.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, terms, contact, github.",
    "Representative service summary: Added by scraper. Domain owners can authenticate for free to edit information.",
    "Representative endpoint details still rely on low-confidence scraper metadata and need direct validation before activation.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'moltalyzer',
  name: "Moltalyzer",
  websiteUrl: "https://moltalyzer.xyz",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Moltalyzer looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'api.moltalyzer.xyz/api/github/digests'.",
  endpointCandidates: ["digests", "latest", "repos"],
  notes: [
    "402index snapshot on 2026-04-20: 10 indexed L402 services; top categories: ai; average reliability 93.0.",
    "Representative candidate endpoint: https://api.moltalyzer.xyz/api/github/digests",
    "Main website candidate: https://moltalyzer.xyz (title: Moltalyzer - Viral Advisor &amp; Intelligence API for AI Agents)",
    "Source mix: satring\u00d710.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, pricing, terms, github, mcp.",
    "Representative service summary: Added by scraper. Domain owners can authenticate for free to edit information.",
    "Representative endpoint details still rely on low-confidence scraper metadata and need direct validation before activation.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

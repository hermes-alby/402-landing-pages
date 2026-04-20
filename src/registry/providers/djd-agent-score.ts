import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'djd-agent-score',
  name: "DJD Agent Score",
  websiteUrl: "https://djdagentscore.dev",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "DJD Agent Score looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'djdagentscore.dev/v1/certification/apply'.",
  endpointCandidates: ["apply", "timeline"],
  notes: [
    "402index snapshot on 2026-04-20: 2 indexed L402 services; top categories: ai; average reliability 95.0.",
    "Representative candidate endpoint: https://djdagentscore.dev/v1/certification/apply",
    "Main website candidate: https://djdagentscore.dev (title: DJD Agent Score \u2014 Wallet Risk API for Paid Agent Workflows)",
    "Source mix: satring\u00d72.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, pricing, terms, contact, github, mcp.",
    "Representative service summary: Added by scraper. Domain owners can authenticate for free to edit information.",
    "Representative endpoint details still rely on low-confidence scraper metadata and need direct validation before activation.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

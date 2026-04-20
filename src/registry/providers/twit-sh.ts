import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'twit-sh',
  name: "twit.sh",
  websiteUrl: "https://twit.sh",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "twit.sh looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'x402.twit.sh/articles/by/id'.",
  endpointCandidates: ["id", "members"],
  notes: [
    "402index snapshot on 2026-04-20: 21 indexed L402 services; top categories: ai; average reliability 100.0.",
    "Representative candidate endpoint: https://x402.twit.sh/articles/by/id",
    "Main website candidate: https://twit.sh (title: twit.sh \u2014 Plug AI agents into X)",
    "Source mix: satring\u00d721.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Representative service summary: Added by scraper. Domain owners can authenticate for free to edit information.",
    "Representative endpoint details still rely on low-confidence scraper metadata and need direct validation before activation.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

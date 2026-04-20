import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'satring',
  name: "Satring",
  websiteUrl: "https://satring.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Satring looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'Satring Directory API'.",
  endpointCandidates: ["services", "search", "services-bulk"],
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: real-time-data; average reliability 85.0.",
    "Representative candidate endpoint: https://satring.com/api/v1/services",
    "Main website candidate: https://satring.com (title: Stats | Curated Paid API Directory for AI Agents)",
    "Source mix: satring,l402apps\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, contact, github, mcp, l402, lightning.",
    "Representative service summary: L402 + x402 paid API directory. GET for paginated listing with category/protocol filters, detail by slug, and search. POST to submit new services (1000 sats / $0.50 USDC). PATCH to edit with token.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

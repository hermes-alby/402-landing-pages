import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'x402engine',
  name: "x402engine",
  websiteUrl: "https://x402-gateway-production.up.railway.app",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "x402engine looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'x402-gateway-production.up.railway.app/api/crypto/price'.",
  endpointCandidates: ["price"],
  notes: [
    "402index snapshot on 2026-04-20: 2 indexed L402 services; top categories: ai; average reliability 94.7.",
    "Representative candidate endpoint: https://x402-gateway-production.up.railway.app/api/crypto/price",
    "Main website candidate: https://x402-gateway-production.up.railway.app (title: x402engine \u2014 Pay-per-call APIs for AI Agents)",
    "Source mix: satring\u00d72.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, pricing, mcp.",
    "Representative service summary: Added by scraper. Domain owners can authenticate for free to edit information.",
    "Representative endpoint details still rely on low-confidence scraper metadata and need direct validation before activation.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

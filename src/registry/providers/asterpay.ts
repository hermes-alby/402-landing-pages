import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'asterpay',
  name: "AsterPay",
  websiteUrl: "https://asterpay.io",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "AsterPay looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'x402.asterpay.io/v1/agent/discovery'.",
  endpointCandidates: ["discovery", "sentiment", "prices"],
  notes: [
    "402index snapshot on 2026-04-20: 4 indexed L402 services; top categories: ai; average reliability 91.2.",
    "Representative candidate endpoint: https://x402.asterpay.io/v1/agent/discovery",
    "Main website candidate: https://asterpay.io (title: AsterPay \u2014 Fiat settlement for AI agent commerce | x402 + MPP \u00b7 SEPA Instant)",
    "Source mix: satring\u00d74.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, pricing, terms, contact, github, mcp.",
    "Representative service summary: Added by scraper. Domain owners can authenticate for free to edit information.",
    "Representative endpoint details still rely on low-confidence scraper metadata and need direct validation before activation.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

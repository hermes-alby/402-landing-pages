import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'unhuman-store',
  name: "unhuman.store",
  websiteUrl: "https://unhuman.shopping",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "unhuman.store looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'unhuman shopping'.",
  endpointCandidates: ["order"],
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: commerce; average reliability 74.3.",
    "Representative candidate endpoint: https://unhuman.shopping/api/order",
    "Main website candidate: https://unhuman.shopping (title: unhuman shopping)",
    "Source mix: self-registered\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: pricing, contact, l402, lightning.",
    "Representative service summary: Buy products from Amazon via API, paid with Bitcoin Lightning. Search the catalog for free, then place orders with L402 payment. Supports order tracking, cancellation, and gift orders.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'unhuman-store-unhuman-shopping',
  providerKey: 'unhuman-store',
  name: "unhuman shopping",
  endpointUrl: "https://unhuman.shopping/api/order",
  category: "Commerce / Shopping",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative unhuman.store endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'unhuman.store'.",
    "Endpoint URL: https://unhuman.shopping/api/order",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Buy products from Amazon via API, paid with Bitcoin Lightning. Search the catalog for free, then place orders with L402 payment. Supports order tracking, cancellation, and gift orders.",
  ],
} satisfies ServiceRegistryEntry;

export default service;

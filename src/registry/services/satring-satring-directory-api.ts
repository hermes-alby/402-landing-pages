import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'satring-satring-directory-api',
  providerKey: 'satring',
  name: "Satring Directory API",
  endpointUrl: "https://satring.com/api/v1/services",
  category: "Tools / Search",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative satring endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'Satring'.",
    "Endpoint URL: https://satring.com/api/v1/services",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: L402 + x402 paid API directory. GET for paginated listing with category/protocol filters, detail by slug, and search. POST to submit new services (1000 sats / $0.50 USDC). PATCH to edit with token.",
  ],
} satisfies ServiceRegistryEntry;

export default service;

import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'moltalyzer-api-moltalyzer-xyz-api-github-digests',
  providerKey: 'moltalyzer',
  name: "api.moltalyzer.xyz/api/github/digests",
  endpointUrl: "https://api.moltalyzer.xyz/api/github/digests",
  category: "Ai / Ml",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative Moltalyzer endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'Moltalyzer'.",
    "Endpoint URL: https://api.moltalyzer.xyz/api/github/digests",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Added by scraper. Domain owners can authenticate for free to edit information.",
    "Representative endpoint details still rely on low-confidence scraper metadata and need direct validation before activation.",
  ],
} satisfies ServiceRegistryEntry;

export default service;

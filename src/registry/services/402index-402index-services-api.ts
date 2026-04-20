import type { ServiceRegistryEntry } from '../types';

const service = {
  key: '402index-402index-services-api',
  providerKey: '402index',
  name: "402index Services API",
  endpointUrl: "https://402index.io/api/v1/services?l402=require",
  category: "Tools / Directory",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative 402index endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider '402index'.",
    "Endpoint URL: https://402index.io/api/v1/services?l402=require",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: JSON API for querying indexed L402 and x402 paid API endpoints. Supports filtering by protocol, category, health status, and text search. Free tier with L402 upgrade for higher rate limits.",
  ],
} satisfies ServiceRegistryEntry;

export default service;

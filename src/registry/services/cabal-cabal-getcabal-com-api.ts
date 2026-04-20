import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'cabal-cabal-getcabal-com-api',
  providerKey: 'cabal',
  name: "Cabal: getcabal.com API",
  endpointUrl: "https://getcabal.com/api/agent_api/v1/connectors",
  category: "Uncategorized",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative Cabal endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'Cabal'.",
    "Endpoint URL: https://getcabal.com/api/agent_api/v1/connectors",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Get list of advisors and connectors in your network who can make introductions",
  ],
} satisfies ServiceRegistryEntry;

export default service;

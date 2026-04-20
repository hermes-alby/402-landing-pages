import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'hyperdope-lightning-fee-oracle',
  providerKey: 'hyperdope',
  name: "Lightning Fee Oracle",
  endpointUrl: "https://l402.services/ln/fees",
  category: "Data",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative Hyperdope endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'Hyperdope'.",
    "Endpoint URL: https://l402.services/ln/fees",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Fee oracle \u2014 network-wide fee distribution percentiles, daily fee change trends, volatility metrics. Optional ?pubkey= for per-node detail, ?days= for window",
  ],
} satisfies ServiceRegistryEntry;

export default service;

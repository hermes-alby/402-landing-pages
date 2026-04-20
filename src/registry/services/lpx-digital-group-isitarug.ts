import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'lpx-digital-group-isitarug',
  providerKey: 'lpx-digital-group',
  name: "IsItARug",
  endpointUrl: "https://isitarug.com/",
  category: "Ai / Ml",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative LPX Digital Group endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'LPX Digital Group'.",
    "Endpoint URL: https://isitarug.com/",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Solana token safety scanner. Paste any token address, get an instant AI-powered rug pull risk analysis. Pay 10 sats per scan via Lightning. No signup required.",
  ],
} satisfies ServiceRegistryEntry;

export default service;

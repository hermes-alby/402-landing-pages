import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'l402-apps-l402-apps-lightning-lottery',
  providerKey: 'l402-apps',
  name: "L402 Apps: Lightning Lottery",
  endpointUrl: "https://www.l402apps.com/api/lottery/enter",
  category: "Bitcoin",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative L402 Apps endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'L402 Apps'.",
    "Endpoint URL: https://www.l402apps.com/api/lottery/enter",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Enter the 24h Lightning Lottery. More sats = higher winning probability. Provide a Lightning Address or node pubkey for payout.",
  ],
} satisfies ServiceRegistryEntry;

export default service;

import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'lightning-faucet-lightning-faucet-profanity-filter',
  providerKey: 'lightning-faucet',
  name: "Lightning Faucet: Profanity Filter",
  endpointUrl: "https://lightningfaucet.com/api/l402/profanity_filter",
  category: "Tools",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative Lightning Faucet endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'Lightning Faucet'.",
    "Endpoint URL: https://lightningfaucet.com/api/l402/profanity_filter",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Content moderation API. Detect and filter profanity in text. Returns flagged words and clean version. 10 sats per request.",
  ],
} satisfies ServiceRegistryEntry;

export default service;

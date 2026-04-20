import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'a-little-bit-of-money-a-little-bit-of-money',
  providerKey: 'a-little-bit-of-money',
  name: "A little bit of money",
  endpointUrl: "https://alittlebitofmoney.com/",
  category: "Ai / Ml",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative A-LITTLE-BIT-OF-MONEY endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'A-LITTLE-BIT-OF-MONEY'.",
    "Endpoint URL: https://alittlebitofmoney.com/",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Lightning-paid proxy to AI APIs. Chat completions, image generation, embeddings, audio, video. No account, no API key \u2014 pay per request in sats.",
  ],
} satisfies ServiceRegistryEntry;

export default service;

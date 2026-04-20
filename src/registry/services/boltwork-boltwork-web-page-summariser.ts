import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'boltwork-boltwork-web-page-summariser',
  providerKey: 'boltwork',
  name: "Boltwork Web Page Summariser",
  endpointUrl: "https://parsebit-lnd.fly.dev/extract/webpage",
  category: "Ai / Text",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative Boltwork endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'Boltwork'.",
    "Endpoint URL: https://parsebit-lnd.fly.dev/extract/webpage",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Submit any web page URL and receive a structured AI summary including title, key points, topics, and sentiment. Powered by Claude. Pay 100 sats per request via Bitcoin Lightning L402.",
  ],
} satisfies ServiceRegistryEntry;

export default service;

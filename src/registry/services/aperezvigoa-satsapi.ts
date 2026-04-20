import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'aperezvigoa-satsapi',
  providerKey: 'aperezvigoa',
  name: "SatsAPI",
  endpointUrl: "https://satsapi.dev/",
  category: "Ai / Ml",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative Aperezvigoa endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'Aperezvigoa'.",
    "Endpoint URL: https://satsapi.dev/",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Bitcoin market intelligence API with L402 pay-per-call auth. \r\n8 endpoints: price/RSI/MACD, mempool fees, on-chain metrics, \r\nderivatives, AI news sentiment, 9-factor BUY/SELL/HOLD signal \r\nand full market summary. Designed for developers a\u2026",
  ],
} satisfies ServiceRegistryEntry;

export default service;

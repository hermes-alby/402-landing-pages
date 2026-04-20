import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'aperezvigoa',
  name: "Aperezvigoa",
  websiteUrl: "https://satsapi.dev",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Aperezvigoa looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'SatsAPI'.",
  endpointCandidates: ["satsapi"],
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: ai; average reliability 85.0.",
    "Representative candidate endpoint: https://satsapi.dev/",
    "Main website candidate: https://satsapi.dev.",
    "Source mix: satring\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Representative service summary: Bitcoin market intelligence API with L402 pay-per-call auth. \r\n8 endpoints: price/RSI/MACD, mempool fees, on-chain metrics, \r\nderivatives, AI news sentiment, 9-factor BUY/SELL/HOLD signal \r\nand full market summary. Designed for developers a\u2026",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

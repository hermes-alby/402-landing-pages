import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'a-little-bit-of-money',
  name: "A-LITTLE-BIT-OF-MONEY",
  websiteUrl: "https://alittlebitofmoney.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "A-LITTLE-BIT-OF-MONEY looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'A little bit of money'.",
  endpointCandidates: ["a-little-bit-of-money"],
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: ai; average reliability 78.6.",
    "Representative candidate endpoint: https://alittlebitofmoney.com/",
    "Main website candidate: https://alittlebitofmoney.com (title: 402ai.net | Lightning-Native AI Gateway and Task Marketplace)",
    "Source mix: satring\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, pricing, terms, l402, lightning.",
    "Representative service summary: Lightning-paid proxy to AI APIs. Chat completions, image generation, embeddings, audio, video. No account, no API key \u2014 pay per request in sats.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

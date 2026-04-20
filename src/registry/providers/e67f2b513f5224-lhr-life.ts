import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'e67f2b513f5224-lhr-life',
  name: "e67f2b513f5224.lhr.life",
  websiteUrl: "https://e67f2b513f5224.lhr.life",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'rejected',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "e67f2b513f5224.lhr.life is not a good landing-page candidate right now because the provider identity or host quality still looks too weak.",
  notes: [
    "402index snapshot on 2026-04-20: 3 indexed L402 services; top categories: ai; average reliability 30.0.",
    "Representative candidate endpoint: https://e67f2b513f5224.lhr.life/analyze",
    "Main website candidate: https://e67f2b513f5224.lhr.life.",
    "Source mix: l402apps\u00d73.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Representative service summary: Gary AI Text Analysis - AI-powered text analysis and NLP service. Pay 5 sats per request. Returns word count, sentiment, reading level, and more.",
    "Current rejection is based on weak provider/host credibility, not on 402index health alone.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

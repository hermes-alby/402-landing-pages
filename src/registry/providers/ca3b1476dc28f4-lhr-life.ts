import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'ca3b1476dc28f4-lhr-life',
  name: "ca3b1476dc28f4.lhr.life",
  websiteUrl: "https://ca3b1476dc28f4.lhr.life",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'rejected',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "ca3b1476dc28f4.lhr.life is not a good landing-page candidate right now because the provider identity or host quality still looks too weak.",
  notes: [
    "402index snapshot on 2026-04-20: 3 indexed L402 services; top categories: uncategorized; average reliability 30.0.",
    "Representative candidate endpoint: https://ca3b1476dc28f4.lhr.life/encode",
    "Main website candidate: https://ca3b1476dc28f4.lhr.life.",
    "Source mix: l402apps\u00d73.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Representative service summary: L402-protected encode utility service - 5 sats per request",
    "Current rejection is based on weak provider/host credibility, not on 402index health alone.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

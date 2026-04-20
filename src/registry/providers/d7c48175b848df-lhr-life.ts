import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'd7c48175b848df-lhr-life',
  name: "d7c48175b848df.lhr.life",
  websiteUrl: "https://d7c48175b848df.lhr.life",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'rejected',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "d7c48175b848df.lhr.life is not a good landing-page candidate right now because the provider identity or host quality still looks too weak.",
  notes: [
    "402index snapshot on 2026-04-20: 2 indexed L402 services; top categories: uncategorized; average reliability 30.0.",
    "Representative candidate endpoint: https://d7c48175b848df.lhr.life/password",
    "Main website candidate: https://d7c48175b848df.lhr.life.",
    "Source mix: l402apps\u00d72.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Representative service summary: L402 password utility",
    "Current rejection is based on weak provider/host credibility, not on 402index health alone.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'lpx-digital-group',
  name: "LPX Digital Group",
  websiteUrl: "https://isitarug.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "LPX Digital Group looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'IsItARug'.",
  endpointCandidates: ["isitarug"],
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: ai; average reliability 80.0.",
    "Representative candidate endpoint: https://isitarug.com/",
    "Main website candidate: https://isitarug.com (title: Is It A Rug? \u2014 Solana Token Scanner)",
    "Source mix: satring\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, lightning.",
    "Representative service summary: Solana token safety scanner. Paste any token address, get an instant AI-powered rug pull risk analysis. Pay 10 sats per scan via Lightning. No signup required.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

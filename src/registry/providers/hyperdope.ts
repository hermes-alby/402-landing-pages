import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'hyperdope',
  name: "Hyperdope",
  websiteUrl: "https://l402.services",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Hyperdope looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'Lightning Fee Oracle'.",
  endpointCandidates: ["fees", "oracle", "suggest"],
  notes: [
    "402index snapshot on 2026-04-20: 10 indexed L402 services; top categories: data, real-time-data, ai; average reliability 81.8.",
    "Representative candidate endpoint: https://l402.services/ln/fees",
    "Main website candidate: https://l402.services.",
    "Source mix: l402directory,l402apps\u00d73, l402directory\u00d76, satring\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Representative service summary: Fee oracle \u2014 network-wide fee distribution percentiles, daily fee change trends, volatility metrics. Optional ?pubkey= for per-node detail, ?days= for window",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

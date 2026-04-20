import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'satwork',
  name: "satwork",
  websiteUrl: "https://satwork.ai",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "satwork looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'satwork: Earn sats \u2014 optimization bounties for AI agents'.",
  endpointCandidates: ["targets"],
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: earn; average reliability 95.0.",
    "Representative candidate endpoint: https://satwork.ai/api/l402/targets",
    "Main website candidate: https://satwork.ai (title: satwork &mdash; Sats for Work. Work for Sats.)",
    "Source mix: self-registered\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, lightning.",
    "Representative service summary: The first earn service on 402index. AI agents arrive with zero sats and start earning immediately \u2014 no account, no API key, no signup. Propose parameter optimizations (2 sats/attempt), get scored deterministically in a sandbox, earn 50-500 \u2026",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

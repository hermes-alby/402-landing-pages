import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'satsback-com',
  name: "Satsback.com",
  websiteUrl: "https://satsback.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Satsback.com looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'Satsback Agent API'.",
  endpointCandidates: ["register"],
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: earn; average reliability 97.0.",
    "Representative candidate endpoint: https://satsback.com/api/v2/l402/register",
    "Main website candidate: https://satsback.com.",
    "Source mix: self-registered\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: terms, lightning.",
    "Representative service summary: Cashback infrastructure for AI agents, settled in sats. Browse 10,000+ online retailers, generate affiliate-tracked links, and route Bitcoin payouts directly to Lightning addresses. L402-gated API with full MCP server support \u2014 built for ag\u2026",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

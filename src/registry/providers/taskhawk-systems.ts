import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'taskhawk-systems',
  name: "TaskHawk Systems",
  websiteUrl: "https://governance.taskhawktech.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "TaskHawk Systems looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'Kevros Governance Verify'.",
  endpointCandidates: ["verify", "attest"],
  notes: [
    "402index snapshot on 2026-04-20: 6 indexed L402 services; top categories: ai, media; average reliability 90.0.",
    "Representative candidate endpoint: https://governance.taskhawktech.com/governance/verify",
    "Main website candidate: https://governance.taskhawktech.com.",
    "Source mix: satring,l402apps\u00d75, self-registered\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Representative service summary: Runtime intelligence action verification with signed ALLOW/CLAMP/DENY decision",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'taskhawk-systems-kevros-governance-verify',
  providerKey: 'taskhawk-systems',
  name: "Kevros Governance Verify",
  endpointUrl: "https://governance.taskhawktech.com/governance/verify",
  category: "Ai / Ml",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative TaskHawk Systems endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'TaskHawk Systems'.",
    "Endpoint URL: https://governance.taskhawktech.com/governance/verify",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Runtime intelligence action verification with signed ALLOW/CLAMP/DENY decision",
  ],
} satisfies ServiceRegistryEntry;

export default service;

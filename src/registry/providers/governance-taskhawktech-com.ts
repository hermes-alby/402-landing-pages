import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'governance-taskhawktech-com',
  name: "governance.taskhawktech.com",
  websiteUrl: "https://governance.taskhawktech.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'duplicate',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "governance.taskhawktech.com appears to be an alias or duplicate listing for an already-tracked provider and was added to avoid re-review.",
  duplicateOf: 'taskhawk-systems',
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: tools; average reliability 90.0.",
    "Representative candidate endpoint: https://governance.taskhawktech.com/governance/batch",
    "Main website candidate: https://governance.taskhawktech.com.",
    "Source mix: self-registered,l402apps\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Representative service summary: Batch governance operations - multiple verify/attest/bind in one call. lnget compatible.",
    "Mapped as duplicate of provider key 'taskhawk-systems'.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

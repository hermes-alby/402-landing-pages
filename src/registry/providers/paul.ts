import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'paul',
  name: "Paul",
  websiteUrl: "https://certvera.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Paul looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'CertVera Update Notifications'.",
  endpointCandidates: ["l402"],
  notes: [
    "402index snapshot on 2026-04-20: 5 indexed L402 services; top categories: identity; average reliability 80.0.",
    "Representative candidate endpoint: https://certvera.com/api/l402?action=l402_timestamp_update",
    "Main website candidate: https://certvera.com (title: CertVera - Blockchain Document Certification)",
    "Source mix: satring\u00d75.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, pricing, terms, contact, l402, lightning.",
    "Representative service summary: Update webhook and email notification settings on an existing Bitcoin timestamp. POST {action: l402_timestamp_update, timestamp_id: <id>, webhook_url: <url>, notification_email: <email>} to certvera.com/api/l402. 10 sats via L402. Modify no\u2026",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

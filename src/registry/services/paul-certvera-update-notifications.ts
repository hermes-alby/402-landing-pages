import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'paul-certvera-update-notifications',
  providerKey: 'paul',
  name: "CertVera Update Notifications",
  endpointUrl: "https://certvera.com/api/l402?action=l402_timestamp_update",
  category: "Identity",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative Paul endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'Paul'.",
    "Endpoint URL: https://certvera.com/api/l402?action=l402_timestamp_update",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Update webhook and email notification settings on an existing Bitcoin timestamp. POST {action: l402_timestamp_update, timestamp_id: <id>, webhook_url: <url>, notification_email: <email>} to certvera.com/api/l402. 10 sats via L402. Modify no\u2026",
  ],
} satisfies ServiceRegistryEntry;

export default service;

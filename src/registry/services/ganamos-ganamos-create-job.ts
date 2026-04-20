import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'ganamos-ganamos-create-job',
  providerKey: 'ganamos',
  name: "Ganamos: Create Job",
  endpointUrl: "https://www.ganamos.earth/api/posts",
  category: "Tools / Marketplace",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative Ganamos endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'Ganamos'.",
    "Endpoint URL: https://www.ganamos.earth/api/posts",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Post a Bitcoin-funded bounty job. Costs reward amount + 10 sat API fee via L402 Lightning payment. Returns post_id and status URL.",
  ],
} satisfies ServiceRegistryEntry;

export default service;

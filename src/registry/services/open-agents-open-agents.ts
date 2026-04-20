import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'open-agents-open-agents',
  providerKey: 'open-agents',
  name: "Open Agents",
  endpointUrl: "https://openagents.com/",
  category: "Tools",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative Open Agents endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'Open Agents'.",
    "Endpoint URL: https://openagents.com/",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: An open platform for AI agents, built in public from scratch.",
  ],
} satisfies ServiceRegistryEntry;

export default service;

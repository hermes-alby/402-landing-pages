import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'satsback-com-satsback-agent-api',
  providerKey: 'satsback-com',
  name: "Satsback Agent API",
  endpointUrl: "https://satsback.com/api/v2/l402/register",
  category: "Earn / Cashback",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative Satsback.com endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'Satsback.com'.",
    "Endpoint URL: https://satsback.com/api/v2/l402/register",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Cashback infrastructure for AI agents, settled in sats. Browse 10,000+ online retailers, generate affiliate-tracked links, and route Bitcoin payouts directly to Lightning addresses. L402-gated API with full MCP server support \u2014 built for ag\u2026",
  ],
} satisfies ServiceRegistryEntry;

export default service;

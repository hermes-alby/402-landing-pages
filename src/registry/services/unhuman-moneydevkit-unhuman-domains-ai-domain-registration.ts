import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'unhuman-moneydevkit-unhuman-domains-ai-domain-registration',
  providerKey: 'unhuman-moneydevkit',
  name: "Unhuman Domains \u2014 AI Domain Registration",
  endpointUrl: "https://unhuman.domains/api/domains/example.dev/register",
  category: "Tools",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative Unhuman (moneydevkit) endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'Unhuman (moneydevkit)'.",
    "Endpoint URL: https://unhuman.domains/api/domains/example.dev/register",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Domain registrar built for AI agents. Search, register, and manage domains via API. Pay with Bitcoin Lightning. Supports com, net, org, io, dev, app, xyz, co, ai TLDs.",
  ],
} satisfies ServiceRegistryEntry;

export default service;

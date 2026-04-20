import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'unhuman-moneydevkit',
  name: "Unhuman (moneydevkit)",
  websiteUrl: "https://unhuman.coffee",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Unhuman (moneydevkit) looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'Unhuman Domains \u2014 AI Domain Registration'.",
  endpointCandidates: ["register", "order", "generate"],
  notes: [
    "402index snapshot on 2026-04-20: 3 indexed L402 services; top categories: payments, media, tools; average reliability 79.3.",
    "Representative candidate endpoint: https://unhuman.domains/api/domains/example.dev/register",
    "Main website candidate: https://unhuman.coffee (title: Unhuman Coffee)",
    "Source mix: self-registered\u00d73.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, l402, lightning.",
    "Representative service summary: Domain registrar built for AI agents. Search, register, and manage domains via API. Pay with Bitcoin Lightning. Supports com, net, org, io, dev, app, xyz, co, ai TLDs.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

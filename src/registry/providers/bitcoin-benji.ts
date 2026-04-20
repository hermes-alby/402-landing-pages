import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'bitcoin-benji',
  name: "Bitcoin Benji",
  websiteUrl: "https://bitcoinbenji.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Bitcoin Benji looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'Bitcoin Benji API \u2014 Mempool Intelligence + AI Utilities'.",
  endpointCandidates: ["bitcoin-benji-api-mempool-intelligence-ai-utilities", "whales", "agent"],
  notes: [
    "402index snapshot on 2026-04-20: 17 indexed L402 services; top categories: ai, bitcoin; average reliability 90.0.",
    "Representative candidate endpoint: https://ovz5i27at6cjnfz2mhenkhsxqgwjh4rpkyju5ctr6xgju2hdklsfbpqd.onion/",
    "Main website candidate: https://bitcoinbenji.com (title: Bitcoin Benji API - Lightning-Native Machine Intelligence)",
    "Source mix: self-registered\u00d716, satring\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: contact, l402, lightning.",
    "Representative service summary: 16 paid L402 endpoints: Bitcoin mempool intelligence (fee estimates, whale alerts, mempool state, block data) + 11 AI utility APIs (summarize, sentiment, translate, grammar, code-review, extract, scrape, agent, classify, rewrite, explain). \u2026",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

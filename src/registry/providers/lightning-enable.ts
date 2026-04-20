import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'lightning-enable',
  name: "Lightning Enable",
  websiteUrl: "https://lightningenable.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Lightning Enable looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'Agent Commerce Store'.",
  endpointCandidates: ["agent-commerce-store", "reputation", "ping"],
  notes: [
    "402index snapshot on 2026-04-20: 40 indexed L402 services; top categories: data, guides, commerce; average reliability 89.1.",
    "Representative candidate endpoint: https://agent-commerce.store/",
    "Main website candidate: https://lightningenable.com (title: Lightning Enable - Lightning Payments for AI Agents - Refined Element)",
    "Source mix: self-registered\u00d737, discovery\u00d71, satring\u00d72.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, pricing, terms, contact, github, mcp, l402, lightning.",
    "Representative service summary: 13 L402-gated API endpoints for AI agents. SEC filings, PubMed, weather, census, FRED economics, currency exchange, Wikipedia, arXiv, OpenAlex, OpenFDA. 1-10 sats per call. No API keys. Payment is authentication.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

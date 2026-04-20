import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'lightning-enable-agent-commerce-store',
  providerKey: 'lightning-enable',
  name: "Agent Commerce Store",
  endpointUrl: "https://agent-commerce.store/",
  category: "Ai / Ml",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative Lightning Enable endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'Lightning Enable'.",
    "Endpoint URL: https://agent-commerce.store/",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: 13 L402-gated API endpoints for AI agents. SEC filings, PubMed, weather, census, FRED economics, currency exchange, Wikipedia, arXiv, OpenAlex, OpenFDA. 1-10 sats per call. No API keys. Payment is authentication.",
  ],
} satisfies ServiceRegistryEntry;

export default service;

import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'rob-agent-web-search',
  providerKey: 'rob',
  name: "agent web search",
  endpointUrl: "https://botlab.dev/api/web-search",
  category: "Ai / Ml",
  reviewStatus: 'deferred',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative rob endpoint tracked in the service registry, but this provider is still lower priority for activation.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'rob'.",
    "Endpoint URL: https://botlab.dev/api/web-search",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: AI-powered web search. Returns a synthesized, cited answer from Brave Search results using Gemini 3 Flash \u2014 not just links. Supports GET and POST, responds with structured JSON. No API keys or accounts needed.\nTiers: [100 sats: 2,500 tokens\u2026",
  ],
} satisfies ServiceRegistryEntry;

export default service;

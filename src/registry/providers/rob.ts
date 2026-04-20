import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'rob',
  name: "rob",
  websiteUrl: "https://botlab.dev",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'deferred',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "rob appears real enough to keep on the radar, but it is not yet one of the highest-priority providers for landing-page work.",
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: ai; average reliability 80.0.",
    "Representative candidate endpoint: https://botlab.dev/api/web-search",
    "Main website candidate: https://botlab.dev (title: botlab.dev | Custom AI/LLM Bots, Agents, Swarms, Automation)",
    "Source mix: satring\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: contact, github, l402, lightning.",
    "Representative service summary: AI-powered web search. Returns a synthesized, cited answer from Brave Search results using Gemini 3 Flash \u2014 not just links. Supports GET and POST, responds with structured JSON. No API keys or accounts needed.\nTiers: [100 sats: 2,500 tokens\u2026",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

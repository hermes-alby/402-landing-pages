import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'the-ark-ai',
  name: "The Ark AI",
  websiteUrl: "https://arknode.ai",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "The Ark AI looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'The Ark AI: Multi-Tool L402 Gateway'.",
  endpointCandidates: ["task"],
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: ai; average reliability 20.0.",
    "Representative candidate endpoint: https://arknode.ai/l402/task",
    "Main website candidate: https://arknode.ai (title: The Ark AI \u2014 Chat with AI, Pay with Lightning \u26a1)",
    "Source mix: discovery\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: terms, contact, lightning.",
    "Representative service summary: 110+ developer tools accessible via L402 micropayments. Code review, bug finder, SQL optimizer, unit test generator, Dockerfile generator, CI/CD pipeline, data cleaning, API docs, security scanning, legal drafts, and more. POST with {\"task\"\u2026",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

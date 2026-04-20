import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'the-ark',
  name: "The Ark",
  websiteUrl: "https://arknode.ai",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'duplicate',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "The Ark appears to be an alias or duplicate listing for an already-tracked provider and was added to avoid re-review.",
  duplicateOf: 'the-ark-ai',
  notes: [
    "402index snapshot on 2026-04-20: 3 indexed L402 services; top categories: ai; average reliability 28.3.",
    "Representative candidate endpoint: https://arknode.ai/task",
    "Main website candidate: https://arknode.ai (title: The Ark AI \u2014 Chat with AI, Pay with Lightning \u26a1)",
    "Source mix: satring\u00d73.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: terms, contact, lightning.",
    "Representative service summary: 120+ AI services paid with Bitcoin Lightning. Code gen, image generation, voice synthesis, research, translation, legal drafting, medical summaries, SEO analysis, content writing, DevOps automation, data analysis \u2014 all pay-per-task via L402\u2026",
    "Mapped as duplicate of provider key 'the-ark-ai'.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

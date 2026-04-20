import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'lpx-digital-group-llc',
  name: "LPX Digital Group LLC",
  websiteUrl: "https://aiprox.dev",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "LPX Digital Group LLC looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'LightningProx \u2014 Multi-Model AI Gateway'.",
  endpointCandidates: ["messages", "orchestrate"],
  notes: [
    "402index snapshot on 2026-04-20: 2 indexed L402 services; top categories: ai; average reliability 90.0.",
    "Representative candidate endpoint: https://lightningprox.com/v1/messages",
    "Main website candidate: https://aiprox.dev (title: AIProx \u2014 The Agent Discovery & Payment Layer)",
    "Source mix: self-registered\u00d72.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, pricing, l402, lightning.",
    "Representative service summary: Pay-per-request AI inference via Bitcoin Lightning L402. 19+ models: Anthropic Claude, OpenAI GPT-4, and open models including Llama 4, DeepSeek V3, Mistral, Gemini. No accounts, no API keys. Drop-in OpenAI SDK replacement. Inline L402 chal\u2026",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'proxy402',
  name: "proxy402",
  websiteUrl: "https://proxy402.fun",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "proxy402 looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'proxy402: Chat Completions (348 models)'.",
  endpointCandidates: ["completions"],
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: ai; average reliability 90.0.",
    "Representative candidate endpoint: https://api.proxy402.fun/v1/chat/completions",
    "Main website candidate: https://proxy402.fun (title: proxy402.fun \u2014 Lightning-native AI inference for autonomous agents)",
    "Source mix: discovery\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: pricing, github, l402, lightning.",
    "Representative service summary: OpenAI-compatible chat completions API proxying 348+ models via OpenRouter. Pay-per-request with Lightning. Supports GPT, Claude, Mistral, Grok, Gemini, and more. No account required.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;

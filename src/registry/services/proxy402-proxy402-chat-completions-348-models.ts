import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'proxy402-proxy402-chat-completions-348-models',
  providerKey: 'proxy402',
  name: "proxy402: Chat Completions (348 models)",
  endpointUrl: "https://api.proxy402.fun/v1/chat/completions",
  category: "Ai / Ml",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative proxy402 endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'proxy402'.",
    "Endpoint URL: https://api.proxy402.fun/v1/chat/completions",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: OpenAI-compatible chat completions API proxying 348+ models via OpenRouter. Pay-per-request with Lightning. Supports GPT, Claude, Mistral, Grok, Gemini, and more. No account required.",
  ],
} satisfies ServiceRegistryEntry;

export default service;

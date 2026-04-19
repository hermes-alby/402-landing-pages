import { createServiceDefinition } from '../service-factory';
import { buildCostDetail, createSatsRateRangePrice } from '../pricing';
import type { ServiceDefinition } from '../types';

const pricing = createSatsRateRangePrice({
  satsMin: 1,
  satsMax: 10,
  unitAmount: 1000,
  unitLabel: 'characters',
  note: 'depending on model and route',
});

const service = createServiceDefinition({
  key: 'sats4ai-generate-text',
  providerKey: 'sats4ai',
  name: 'generate-text',
  endpointUrl: 'https://sats4ai.com/api/l402/generate-text',
  resultLabel: 'Generate text with per-character Lightning pricing and no API key',
  category: 'Text generation',
  supportStatus: 'coming-soon',
  lastCheckedAt: '2026-04-19',
  pricing,
  exampleOutput: {
    kind: 'table',
    title: 'What this endpoint is built for',
    caption:
      'Sats4AI exposes generate-text as a chat-style paid endpoint for agents that need text generation without account setup or subscription management.',
    columns: ['Capability', 'Details'],
    rows: [
      ['Input shape', 'Chat-style JSON with role/content messages'],
      ['Optional context', 'fileContext text and imageData for richer prompts'],
      ['Payment model', 'Per-character pricing after a Lightning invoice challenge'],
    ],
    details: [
      'Provider: Sats4AI',
      'Service: Generate Text',
      'Endpoint: /api/l402/generate-text',
      buildCostDetail(pricing),
      'Checked: live schema confirmed on 2026-04-19',
    ],
    briefingTitle: 'Why this page is live before paid activation',
    briefingParagraphs: [
      'The endpoint is publicly documented and reachable today, so it is a good candidate to explain the user value before we run a paid activation test.',
      'Until a real paid run is captured, this service stays on the coming-soon path instead of the install path.',
    ],
  },
  examplePromptHeading: 'Example prompt',
  examplePrompt:
    'Generate a concise release note summary from wallet-release-2026-04-20.md using Sats4AI with the Alby payments skill. Use a friendly, technical tone and include 3 bullet points.',
  variantTitle: ({ agentName, providerName }) => `Generate text with ${agentName} using ${providerName}`,
  variantDescription: ({ agentName, providerName, priceLabel }) =>
    `Enable ${agentName} to generate drafts, summaries, and chat-style text with ${providerName} using ${priceLabel} instead of prepaid API plans.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Give ${agentName} access to ${providerName} ${serviceName} so it can produce paid text output on demand without waiting for account creation, seat management, or monthly billing setup.`,
  heroBulletHighlights: () => [
    'Works with chat-style JSON input that fits naturally into agent workflows.',
    'Per-character pricing can make short drafting and summarization tasks cheap to run.',
  ],
  whyItWorks: ({ agentName, providerName }) => [
    `${agentName} can ask for text output exactly when it needs it instead of forcing a human to switch tools or copy prompts into a separate UI.`,
    `${providerName} exposes a direct paid endpoint that keeps access lightweight for one-off drafts, summaries, and rewrite steps.`,
    'This can slot into research, support, documentation, and publishing flows where short-form text generation is a helper rather than the whole product.',
  ],
  useCases: () => [
    'Draft summaries from internal notes or changelogs',
    'Rewrite rough text into cleaner customer-facing copy',
    'Generate first-pass research takeaways before a human review',
  ],
  faqResultDescription: () =>
    'Sats4AI Generate Text is designed to return generated text from chat-style requests, with pricing that scales to the amount of text and model path used.',
}) satisfies ServiceDefinition;

export default service;

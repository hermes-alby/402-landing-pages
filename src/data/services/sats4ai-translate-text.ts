import { createServiceDefinition } from '../service-factory';
import { buildCostDetail, createSatsRatePrice } from '../pricing';
import type { ServiceDefinition } from '../types';

const pricing = createSatsRatePrice({ sats: 1, unitAmount: 1000, unitLabel: 'characters', note: '+ routing fees' });

const service = createServiceDefinition({
  key: 'sats4ai-translate-text',
  providerKey: 'sats4ai',
  name: 'translate-text',
  endpointUrl: 'https://sats4ai.com/api/l402/translate-text',
  resultLabel: 'Translate text across 119 languages with a real paid API call',
  category: 'Translation',
  supportStatus: 'supported',
  lastCheckedAt: '2026-04-19',
  pricing,
  exampleOutput: {
    kind: 'table',
    title: 'Example output',
    caption:
      'Real paid test result from the first Sats4AI provider activation run, showing the exact translated output returned by the API after a successful L402 payment.',
    columns: ['Input', 'Target language', 'Output'],
    rows: [
      [
        'Hello world from Bitcoin. This is a manual provider activation test for the 402 landing pages project.',
        'Spanish',
        'Hola mundo desde Bitcoin. Este es un test de activación manual del proveedor para el proyecto de 402 páginas de aterrizaje.',
      ],
    ],
    details: [
      'Provider: Sats4AI',
      'Service: Translate Text',
      'Endpoint: /api/l402/translate-text',
      buildCostDetail(pricing),
      'Observed paid test: 1 sat translation + 1 sat routing fee',
      'Coverage: 119 languages',
    ],
    briefingTitle: 'What the paid test showed',
    briefingParagraphs: [
      'The paid test completed successfully with a real L402 payment and returned a clean Spanish translation immediately.',
      'This is a strong first activation endpoint because it is cheap, synchronous, and easy for a user to understand at a glance.',
    ],
  },
  examplePromptHeading: 'Example prompt',
  examplePrompt:
    'Translate hello-world-activation-note-2026-04-20.txt to Spanish using Sats4AI with the Alby payments skill.',
  variantTitle: ({ agentName, providerName }) => `Translate text with ${agentName} using ${providerName}`,
  variantDescription: ({ agentName, providerName, priceLabel }) =>
    `Enable ${agentName} to translate text across 119 languages with ${providerName} for ${priceLabel}, with no account, no API key, and no human needed after setup.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Give ${agentName} access to ${providerName} ${serviceName} so it can turn source text into translated output on demand without stopping for signup, billing setup, or manual copy-paste work.`,
  heroBulletHighlights: () => [
    'Supports 119 languages with auto-detected source language.',
    'Low per-character pricing keeps routine translation cheap inside larger autonomous workflows.',
  ],
  whyItWorks: ({ agentName, providerName }) => [
    `${agentName} can translate short text immediately instead of stalling on account creation or switching to a separate SaaS dashboard.`,
    `${providerName} keeps the request shape simple enough that a low-cost paid translation can fit naturally inside research, support, and publishing workflows.`,
    'The successful paid test shows that one real L402 request can produce useful multilingual output with minimal operational overhead.',
  ],
  useCases: () => [
    'Translate support replies or product copy into another language',
    'Localize research notes or summaries before sharing them with a global audience',
    'Add multilingual translation as a cheap helper step inside a broader agent workflow',
  ],
  faqResultDescription: () =>
    'Sats4AI Translate Text returns structured translation results with the translated text, detected source language, and requested target language, making it easy to slot into multilingual agent workflows.',
}) satisfies ServiceDefinition;

export default service;

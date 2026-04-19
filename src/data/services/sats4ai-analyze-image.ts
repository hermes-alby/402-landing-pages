import { createServiceDefinition } from '../service-factory';
import { buildCostDetail, createSatsFixedPrice } from '../pricing';
import type { ServiceDefinition } from '../types';

const pricing = createSatsFixedPrice(21, 'per image analysis');

const service = createServiceDefinition({
  key: 'sats4ai-analyze-image',
  providerKey: 'sats4ai',
  name: 'analyze-image',
  endpointUrl: 'https://sats4ai.com/api/l402/analyze-image',
  resultLabel: 'Analyze images with a paid vision endpoint instead of waiting for a human pass',
  category: 'Vision analysis',
  supportStatus: 'coming-soon',
  lastCheckedAt: '2026-04-19',
  pricing,
  exampleOutput: {
    kind: 'table',
    title: 'What this endpoint is built for',
    caption:
      'Sats4AI exposes analyze-image as a vision endpoint that takes image data plus a question or instruction and returns a paid analysis result.',
    columns: ['Capability', 'Details'],
    rows: [
      ['Input shape', 'Base64 image data URI plus a natural-language prompt'],
      ['Model path', 'Vision model route optimized for analysis tasks'],
      ['Typical result', 'Structured image understanding or direct visual Q&A output'],
    ],
    details: [
      'Provider: Sats4AI',
      'Service: Analyze Image',
      'Endpoint: /api/l402/analyze-image',
      buildCostDetail(pricing),
      'Checked: live schema confirmed on 2026-04-19',
    ],
    briefingTitle: 'Why this is useful',
    briefingParagraphs: [
      'A lot of agent work still gets blocked by screenshots, product images, receipts, and diagrams that need visual interpretation before the workflow can continue.',
      'This landing page stays on the coming-soon path until we run a real paid image-analysis request and capture the result.',
    ],
  },
  examplePromptHeading: 'Example prompt',
  examplePrompt:
    'Analyze dashboard-checkout-2026-04-20.png using Sats4AI with the Alby payments skill, then tell me what the page is for, what the main CTA is, and whether any error state is visible.',
  variantTitle: ({ agentName, providerName }) => `Analyze images with ${agentName} using ${providerName}`,
  variantDescription: ({ agentName, providerName, priceLabel }) =>
    `Enable ${agentName} to inspect screenshots, diagrams, and photos with ${providerName} for ${priceLabel} instead of waiting for manual visual review each time.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Give ${agentName} access to ${providerName} ${serviceName} so it can answer visual questions from screenshots and uploaded images without switching into a separate hosted workspace.`,
  heroBulletHighlights: () => [
    'Takes image data plus a natural-language question or instruction.',
    'Useful for screenshots, diagrams, product images, and visual QA tasks.',
  ],
  whyItWorks: ({ agentName, providerName }) => [
    `${agentName} can keep a workflow moving when the missing context is inside an image rather than plain text.`,
    `${providerName} packages vision analysis as a direct paid endpoint, which is a cleaner fit than provisioning another dashboard or seat-based vision tool.`,
    'That can make debugging, research, support, and content-review loops faster when screenshots are part of the job.',
  ],
  useCases: () => [
    'Inspect screenshots during debugging or QA',
    'Answer questions about product images or diagrams',
    'Summarize visual context before handing work to a human reviewer',
  ],
  faqResultDescription: () =>
    'Sats4AI Analyze Image is designed to return vision analysis from an image plus prompt, so agents can answer visual questions with a direct paid API call.',
}) satisfies ServiceDefinition;

export default service;

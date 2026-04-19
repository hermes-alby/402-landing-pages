import { createServiceDefinition } from '../service-factory';
import { buildCostDetail, createSatsFixedPrice } from '../pricing';
import type { ServiceDefinition } from '../types';

const pricing = createSatsFixedPrice(6, 'per quote search');

const service = createServiceDefinition({
  copyFamily: 'podcast-search',
  key: 'pull-that-up-jamie-search-quotes',
  providerKey: 'pull-that-up-jamie',
  name: 'search-quotes',
  endpointUrl: 'https://www.pullthatupjamie.ai/api/search-quotes',
  resultLabel: 'Find exact spoken podcast moments with timestamps and clip links',
  category: 'Podcast search',
  supportStatus: 'supported',
  lastCheckedAt: '2026-04-19',
  pricing,
  exampleOutput: {
    kind: 'table',
    title: 'Example output',
    caption:
      'Example quote-level output showing the kind of response an agent can get from one paid search across podcast transcripts.',
    columns: ['Episode', 'Quote', 'Timestamp'],
    rows: [
      ['The Tim Ferriss Show', 'Bitcoin will reshape global payments faster than most banks expect.', '00:14:22'],
      ['Bankless', 'Lightning changes the economics of internet-native money.', '00:48:05'],
      ['What Bitcoin Did', 'The real breakthrough is making money programmable and useful in apps.', '01:02:11'],
    ],
    details: ['Provider: Pull That Up Jamie', 'Service: Search Quotes', 'Endpoint: /api/search-quotes', buildCostDetail(pricing)],
  },
  examplePrompt:
    'Search podcast transcripts for quotes about Lightning changing internet payments, then return the exact quote text, episode title, clip link, and timestamp using Pull That Up Jamie with the Alby payments skill.',
  variantTitle: ({ agentName, providerName, serviceName }) => `Search podcasts with ${agentName} using ${providerName} ${serviceName}`,
  variantDescription: ({ agentName, providerName, serviceName, priceLabel }) =>
    `Enable ${agentName} to search inside podcast audio with ${providerName}. Pull exact spoken quotes, timestamps, clip links, and episode context for ${priceLabel}.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Give ${agentName} access to ${providerName} ${serviceName} so it can find the exact moment a person, product, or topic was mentioned in a podcast and hand back the clip, episode, and surrounding context.`,
  heroBulletHighlights: () => [
    'Useful for research, fact-checking, sourcing, and editorial workflows.',
    'Returns quote-level results with timestamps and clip links instead of vague summaries.',
  ],
  whyItWorks: ({ agentName, providerName }) => [
    `${agentName} can move from a vague topic to exact source material without asking a human to listen through long episodes manually.`,
    `${providerName} turns audio search into a precise paid request instead of a subscription-heavy workflow.`,
    'This is especially useful when an agent needs citations, clip links, or direct quotes before continuing the task.',
  ],
  useCases: () => [
    'Find exact podcast quotes to support a research memo or article',
    'Pull timestamped source material before drafting a summary',
    'Search long-form audio for a product, topic, or person on demand',
  ],
  faqResultDescription: ({ providerName, serviceName }) =>
    `${providerName} ${serviceName} returns exact spoken podcast moments with timestamps, quote text, clip URLs, and links back to the original episode so agents can go deeper without manual audio review.`,
}) satisfies ServiceDefinition;

export default service;

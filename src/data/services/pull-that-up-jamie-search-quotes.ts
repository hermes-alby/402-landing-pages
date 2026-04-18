import { buildGenericLandingFaq } from '../faqs';
import type { ServiceDefinition } from '../types';

const service = {
  key: 'pull-that-up-jamie-search-quotes',
  providerKey: 'pull-that-up-jamie',
  name: 'search-quotes',
  endpointUrl: 'https://www.pullthatupjamie.ai/api/search-quotes',
  resultLabel: 'Find exact spoken podcast moments with timestamps and clip links',
  category: 'Podcast search',
  priceLabel: '6 sats',
  paymentLabel: 'No sign-up. No email. No subscription. Pay per use. No human needed.',
  exampleOutput: {
    kind: 'table',
    title: 'Example output',
    caption:
      'Example quote-search result based on the blog post test query for “LNCURL”, showing the kind of timestamped hit your agent can pull from inside a podcast transcript.',
    illustrationSrc: `${import.meta.env.BASE_URL}services/pull-that-up-jamie-search-quotes/blog.jpg`,
    illustrationAlt: 'Blog image for Pull That Up Jamie showing a futuristic network of microphones and audio waveforms',
    columns: ['Episode', 'Creator', 'Moment'],
    rows: [
      ['Roundtable_018 - Everything is Fake and Gay', 'Bitcoin Audible', 'Host spells out “l n c u r l dot l o l” in the clip result'],
      ['shareUrl', 'Pull That Up Jamie', 'Opens a clip player at the exact spoken moment'],
      ['listenLink', 'Original episode', 'Links straight to the full episode page and transcript'],
    ],
    details: ['Provider: Pull That Up Jamie', 'Service: search-quotes', 'Endpoint: /api/search-quotes', 'Cost: 6 sats'],
  },
  examplePromptHeading: 'Example query',
  examplePrompt: 'Search podcast quotes for: LNCURL',
  variantTitle: ({ agentName, providerName }) => `Search podcasts with ${agentName} using ${providerName}`,
  variantDescription: ({ agentName, providerName }) =>
    `Enable ${agentName} to search inside podcast audio with ${providerName}. Pull exact spoken quotes, timestamps, clip links, and episode context for just 6 sats.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Give ${agentName} access to ${providerName} ${serviceName} so it can find the exact moment a person, product, or topic was mentioned in a podcast and hand back the clip, episode, and surrounding context.`,
  heroBullets: ({ paymentLabel }) => [
    paymentLabel,
    'Returns timestamped spoken moments, not just show-level metadata.',
    'Useful when ordinary web search cannot reach what was said inside audio.',
  ],
  whyItWorksTitle: ({ agentName }) => `Why this works for ${agentName}`,
  whyItWorks: ({ agentName, providerName }) => [
    `${agentName} can search across spoken podcast content without making a human scrub through podcast apps manually.`,
    `${providerName} returns structured results with clip URLs, episode links, and enough metadata to keep researching automatically.`,
    'A single low-cost paid query can unlock the quote, the clip, the episode, and the transcript chain in one flow.',
  ],
  useCases: () => [
    'Find exact podcast mentions of a person, company, or product',
    'Pull timestamped quotes into research summaries or reports',
    'Track when a topic starts showing up in long-form audio before it spreads elsewhere',
  ],
  faq: ({ providerName, serviceName }) =>
    buildGenericLandingFaq({
      providerName,
      resultDescription: `${providerName} ${serviceName} returns exact spoken podcast moments with timestamps, quote text, clip URLs, and links back to the original episode so agents can go deeper without manual audio review.`,
    }),
} satisfies ServiceDefinition;

export default service;

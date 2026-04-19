import { createServiceDefinition } from '../service-factory';
import type { ServiceDefinition } from '../types';

const service = createServiceDefinition({
  copyFamily: 'live-search',
  key: 'cascade-tweet-search',
  providerKey: 'cascade',
  name: 'Tweet search',
  endpointUrl: 'https://twitter.surf.cascade.fyi/tweets/search',
  resultLabel: 'Search and summarize live Twitter results on demand',
  category: 'Social search',
  supportStatus: 'coming-soon',
  lastCheckedAt: '2026-04-19',
  priceLabel: '$0.04',
  exampleOutput: {
    kind: 'table',
    title: 'Example output',
    caption:
      'Example result from querying recent Bitcoin tweets. This shows the kind of output and pricing the service can return today.',
    columns: ['Author', 'Tweet', 'Likes'],
    rows: [
      ['@BitcoinPulseX', 'Satoshi-era whale dumps 3,500 BTC ($260M) after 15 years', '2,018'],
      ['@BitcoinMagazine', 'Bitcoin pumps above $77,000!', '1,211'],
      ['@Vivek4real_', 'Eric Trump: "Bitcoin is going to hit $1 million"', '723'],
      ['@pete_rizzo_', 'Charles Schwab actively buying/selling Bitcoin, crypto trading live within weeks', '307'],
      ['@TrendingBitcoin', 'Research: BTC could hit $1M by 2027, $5M by 2031', '168'],
    ],
    details: ['Provider: Cascade', 'Service: Tweet search', 'Query example: bitcoin since:2026-04-16', 'Cost: $0.04'],
  },
  variantTitle: ({ agentName, providerName, serviceName }) => `Search Twitter with ${agentName} using ${providerName} ${serviceName}`,
  variantDescription: ({ agentName, providerName, serviceName }) =>
    `Enable ${agentName} to search live Twitter results with ${providerName} ${serviceName}. No sign-up, no email, no subscription, and no human needed to keep the workflow moving.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `${providerName} ${serviceName} gives ${agentName} live social search for research, trend checks, and current-events context without forcing another account-creation detour.`,
  heroBulletHighlights: () => [
    'Useful for live research, trend checks, and pulling recent social context into an agent workflow.',
    'Get fresh Twitter results on demand instead of relying on stale summaries.',
  ],
  whyItWorks: ({ agentName }) => [
    `${agentName} becomes more useful when it can access fresh social context instead of relying only on static pages.`,
    'Tweet search fits research, monitoring, and summarization workflows naturally.',
    'This avoids the workflow break where the user has to create an account or manually fetch data.',
  ],
  useCases: () => [
    'Track breaking Bitcoin stories from live tweets',
    'Pull top social posts into research summaries',
    'Scan recent sentiment around a company, token, or topic',
  ],
  faqResultDescription: ({ providerName, serviceName }) =>
    `${providerName} ${serviceName} can return live social search results that agents can use for research, summaries, trend checks, and monitoring workflows.`,
}) satisfies ServiceDefinition;

export default service;

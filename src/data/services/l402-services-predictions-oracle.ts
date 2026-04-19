import { createServiceDefinition } from '../service-factory';
import { buildCostDetail, createSatsFixedPrice } from '../pricing';
import type { ServiceDefinition } from '../types';

const pricing = createSatsFixedPrice(250, 'per briefing');

const service = createServiceDefinition({
  copyFamily: 'research-intelligence',
  key: 'l402-services-predictions-oracle',
  providerKey: 'l402-services',
  name: 'predictions oracle',
  endpointUrl: 'https://l402.services/predictions/oracle',
  resultLabel: 'Turn live prediction-market data into a written intelligence briefing',
  category: 'Research intelligence',
  supportStatus: 'supported',
  lastCheckedAt: '2026-04-19',
  pricing,
  exampleOutput: {
    kind: 'table',
    title: 'Example output',
    caption:
      'Example structured signal output based on the oracle response in the blog post, where one paid request returns both a written briefing and market-level signals.',
    columns: ['Signal', 'Value', 'Why it matters'],
    rows: [
      ['Probability shift', '+21.3pp', 'A large one-day move can signal breaking news before headlines catch up'],
      ['24h volume', '$1.8M', 'High volume makes the signal more credible than a thinly traded blip'],
      ['Outcome', 'Israel x Hezbollah ceasefire by June 30', 'The market is aggressively repricing this event in real time'],
    ],
    details: ['Provider: L402 Services', 'Service: predictions oracle', 'Endpoint: /predictions/oracle', buildCostDetail(pricing)],
    briefingTitle: 'Example briefing',
    briefingParagraphs: [
      'The dominant signal today is the Iran conflict cluster, which is generating extraordinary volume and dramatic probability shifts simultaneously. The “US x Iran ceasefire by April 15” outcome moved +85pp in a single day to 99.65%, with nearly $40M in 24h volume.',
      'The Israel-Hezbollah ceasefire market is today’s most interesting live signal. The “June 30” outcome jumped +21pp in a single day to 87.6% on $1.8M volume, making it the kind of move an agent can treat as a lead for deeper research.',
    ],
  },
  examplePrompt: 'Fetch the latest predictions oracle briefing and surface the strongest momentum, high-confidence, and volume-spike signals.',
  variantTitle: ({ agentName, providerName, serviceName }) => `Get prediction-market briefings with ${agentName} using ${providerName} ${serviceName}`,
  variantDescription: ({ agentName, providerName, serviceName, priceLabel }) =>
    `Enable ${agentName} to buy a structured intelligence briefing from ${providerName} ${serviceName} for ${priceLabel}, with no account, no API key, and no human needed.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Give ${agentName} access to ${providerName} ${serviceName} so it can turn live prediction-market activity into a readable briefing with momentum, confidence, volume, and shift signals in a single paid request.`,
  heroBulletHighlights: () => [
    'Returns both prose analysis and structured market signals your agent can investigate further.',
    'Useful for editorial planning, research prioritization, and daily situational awareness.',
  ],
  whyItWorks: ({ agentName, providerName }) => [
    `${agentName} can start the day with a concise intelligence briefing instead of manually monitoring thousands of markets.`,
    `${providerName} packages fast-moving market data into signal buckets that are much easier for an agent to rank and act on.`,
    'A single paid call can reveal what the market currently treats as momentum, high confidence, or unusual volume.',
  ],
  useCases: () => [
    'Generate a daily geopolitical or macro briefing before deeper research starts',
    'Prioritize what a research agent should investigate next based on live probability shifts',
    'Inject real-time situational awareness into editorial, research, or monitoring workflows',
  ],
  faqResultDescription: ({ providerName, serviceName }) =>
    `${providerName} ${serviceName} returns a written briefing plus structured signal arrays such as momentum, high-confidence outcomes, volume spikes, and probability shifts drawn from live prediction-market data.`,
}) satisfies ServiceDefinition;

export default service;

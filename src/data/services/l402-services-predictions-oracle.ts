import { buildGenericLandingFaq } from '../faqs';
import type { ServiceDefinition } from '../types';

const service = {
  key: 'l402-services-predictions-oracle',
  providerKey: 'l402-services',
  name: 'predictions oracle',
  endpointUrl: 'https://l402.services/predictions/oracle',
  resultLabel: 'Turn live prediction-market data into a written intelligence briefing',
  category: 'Research intelligence',
  priceLabel: '250 sats (~$0.07)',
  paymentLabel: 'No sign-up. No email. No subscription. Pay per use. No human needed.',
  exampleOutput: {
    kind: 'table',
    title: 'Example output',
    caption:
      'Example structured signal output based on the oracle response in the blog post, where one paid request returns both a written briefing and market-level signals.',
    illustrationSrc: `${import.meta.env.BASE_URL}services/l402-services-predictions-oracle/blog.jpg`,
    illustrationAlt: 'Blog image for the predictions oracle showing a glowing digital eye with lightning and circuit lines',
    columns: ['Signal', 'Value', 'Why it matters'],
    rows: [
      ['Probability shift', '+21.3pp', 'A large one-day move can signal breaking news before headlines catch up'],
      ['24h volume', '$1.8M', 'High volume makes the signal more credible than a thinly traded blip'],
      ['Outcome', 'Israel x Hezbollah ceasefire by June 30', 'The market is aggressively repricing this event in real time'],
    ],
    details: ['Provider: L402 Services', 'Service: predictions oracle', 'Endpoint: /predictions/oracle', 'Cost: 250 sats (~$0.07)'],
    briefingTitle: 'Example briefing',
    briefingParagraphs: [
      'The dominant signal today is the Iran conflict cluster, which is generating extraordinary volume and dramatic probability shifts simultaneously. The “US x Iran ceasefire by April 15” outcome moved +85pp in a single day to 99.65%, with nearly $40M in 24h volume.',
      'The Israel-Hezbollah ceasefire market is today’s most interesting live signal. The “June 30” outcome jumped +21pp in a single day to 87.6% on $1.8M volume, making it the kind of move an agent can treat as a lead for deeper research.',
    ],
  },
  examplePromptHeading: 'Example request',
  examplePrompt: 'Fetch the latest predictions oracle briefing and surface the strongest momentum, high-confidence, and volume-spike signals.',
  variantTitle: ({ agentName, providerName, serviceName }) => `Get prediction-market briefings with ${agentName} using ${providerName} ${serviceName}`,
  variantDescription: ({ agentName, providerName, serviceName }) =>
    `Enable ${agentName} to buy a structured intelligence briefing from ${providerName} ${serviceName} for 250 sats, with no account, no API key, and no human needed.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Give ${agentName} access to ${providerName} ${serviceName} so it can turn live prediction-market activity into a readable briefing with momentum, confidence, volume, and shift signals in a single paid request.`,
  heroBullets: ({ paymentLabel }) => [
    paymentLabel,
    'Returns both prose analysis and structured market signals your agent can investigate further.',
    'Useful for editorial planning, research prioritization, and daily situational awareness.',
  ],
  whyItWorksTitle: ({ agentName }) => `Why this works for ${agentName}`,
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
  faq: ({ providerName, serviceName }) =>
    buildGenericLandingFaq({
      providerName,
      resultDescription: `${providerName} ${serviceName} returns a written briefing plus structured signal arrays such as momentum, high-confidence outcomes, volume spikes, and probability shifts drawn from live prediction-market data.`,
    }),
} satisfies ServiceDefinition;

export default service;

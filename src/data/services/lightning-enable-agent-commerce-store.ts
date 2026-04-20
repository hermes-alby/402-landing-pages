import { createServiceDefinition } from '../service-factory';
import { buildCostDetail, createSatsRateRangePrice } from '../pricing';
import type { ServiceDefinition } from '../types';

const pricing = createSatsRateRangePrice({
  satsMin: 1,
  satsMax: 10,
  unitAmount: 1,
  unitLabel: 'request',
  note: 'depending on which marketplace API you use',
});

const service = createServiceDefinition({
  key: 'lightning-enable-agent-commerce-store',
  providerKey: 'lightning-enable',
  name: 'Agent Commerce Store',
  endpointUrl: 'https://agent-commerce.store/',
  resultLabel: 'Browse and choose Lightning-priced APIs for agents without opening separate vendor accounts',
  category: 'Agent commerce',
  supportStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  pricing,
  exampleOutput: {
    kind: 'table',
    title: 'What this marketplace exposes today',
    caption:
      'Lightning Enable positions Agent Commerce Store as an agent-first API marketplace with multiple L402-priced categories that can be discovered before we run a paid validation pass.',
    columns: ['Collection', 'Examples', 'Typical price'],
    rows: [
      ['Research and filings', 'SEC filings, PubMed, arXiv, OpenAlex', '1–10 sats'],
      ['Data and economics', 'FRED, exchange rates, census data, weather', '1–10 sats'],
      ['Agent workflow', 'Browse APIs without API keys or account setup', 'Marketplace pricing by endpoint'],
    ],
    details: [
      'Provider: Lightning Enable',
      'Service: Agent Commerce Store',
      'Endpoint: https://agent-commerce.store/',
      buildCostDetail(pricing),
      'Checked: product page and marketplace page reviewed on 2026-04-20',
    ],
    briefingTitle: 'Why this page can exist before paid testing',
    briefingParagraphs: [
      'The provider, docs, and marketplace are publicly visible already, so the landing page can explain the user value honestly even before we validate one paid request end to end.',
      'Until a paid test is captured, this stays on the coming-soon path rather than claiming supported-now status.',
    ],
  },
  examplePrompt:
    'Find a low-cost API in Agent Commerce Store for U.S. macroeconomic data, compare two options, and recommend which one an autonomous research agent should buy first using Lightning Enable with the Alby payments skill.',
  variantTitle: ({ agentName, providerName }) => `Browse Lightning-priced agent APIs with ${agentName} using ${providerName}`,
  variantDescription: ({ agentName, providerName, priceLabel }) =>
    `Enable ${agentName} to discover usable paid APIs through ${providerName} for ${priceLabel} instead of juggling separate keys, sign-ups, and SaaS dashboards.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Give ${agentName} access to ${providerName} ${serviceName} so it can browse and choose APIs that are already packaged for Lightning-native agent use without forcing a human through vendor onboarding first.`,
  heroBulletHighlights: () => [
    'Useful when an agent needs a practical API marketplace instead of another list of docs links.',
    'Keeps the story focused on discovery, pricing, and immediate agent usability before we validate a paid call.',
  ],
  whyItWorks: ({ agentName, providerName }) => [
    `${agentName} becomes more useful when it can discover paid APIs in one place instead of sending a human off to compare separate vendors manually.`,
    `${providerName} is built around the idea that payment is authentication, so the marketplace can stay much lighter than key-heavy API catalogs.`,
    'This is a good first landing page because it explains the ecosystem value clearly even before we select and validate one specific downstream endpoint.',
  ],
  useCases: () => [
    'Find a paid data API an agent can start using without separate account creation',
    'Compare low-cost research and utility APIs before deeper integration work',
    'Give an agent a single place to discover Lightning-priced services worth testing next',
  ],
  faqResultDescription: ({ providerName, serviceName }) =>
    `${providerName} ${serviceName} is designed to expose an agent-first catalog of Lightning-priced APIs across research, data, and utility categories so agents can discover what to buy next without vendor-by-vendor onboarding.`,
}) satisfies ServiceDefinition;

export default service;

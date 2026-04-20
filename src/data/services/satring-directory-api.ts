import { createServiceDefinition } from '../service-factory';
import { buildCostDetail, createSatsRateRangePrice } from '../pricing';
import type { ServiceDefinition } from '../types';

const pricing = createSatsRateRangePrice({
  satsMin: 1,
  satsMax: 1000,
  unitAmount: 1,
  unitLabel: 'request',
  note: 'depending on read, search, or write route',
});

const service = createServiceDefinition({
  copyFamily: 'live-search',
  key: 'satring-directory-api',
  providerKey: 'satring',
  name: 'Directory API',
  endpointUrl: 'https://satring.com/api/v1/services',
  resultLabel: 'Search and inspect paid API listings from a Lightning-native directory',
  category: 'Directory search',
  supportStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  pricing,
  exampleOutput: {
    kind: 'table',
    title: 'What the directory can help an agent do',
    caption:
      'Satring already exposes a live directory API and related docs. This page can describe the practical discovery workflow before we run a paid validation pass on one route.',
    columns: ['Route', 'What it does', 'Why it matters'],
    rows: [
      ['GET /api/v1/services', 'List services with category and protocol metadata', 'Lets an agent browse the paid API landscape from one endpoint'],
      ['GET /api/v1/search', 'Search names and descriptions', 'Useful when an agent needs a capability match instead of a known provider'],
      ['POST /api/v1/services', 'Submit a new listing', 'Shows the API also supports write actions, not just read-only discovery'],
    ],
    details: [
      'Provider: Satring',
      'Service: Directory API',
      'Endpoint: /api/v1/services',
      buildCostDetail(pricing),
      'Checked: site, docs, and live API route reviewed on 2026-04-20',
    ],
    briefingTitle: 'Why this page comes before paid validation',
    briefingParagraphs: [
      'The directory, docs, and branding are already public, so the landing page can explain the value of paid API discovery honestly before we validate a specific paid route end to end.',
      'This service stays on the coming-soon path until we confirm a real paid workflow and choose which route should graduate first.',
    ],
  },
  examplePrompt:
    'Search the Satring Directory API for Lightning-paid research services, group them by category, and return the three most relevant options for a monitoring agent using Satring with the Alby payments skill.',
  variantTitle: ({ agentName, providerName }) => `Search paid API listings with ${agentName} using ${providerName}`,
  variantDescription: ({ agentName, providerName, priceLabel }) =>
    `Enable ${agentName} to browse and search paid API listings through ${providerName} for ${priceLabel}, without building a one-off discovery workflow from scratch.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Give ${agentName} access to ${providerName} ${serviceName} so it can discover relevant paid APIs, compare options, and decide what to buy next from a directory built for agents.`,
  heroBulletHighlights: () => [
    'Good fit for agent discovery workflows where the problem is choosing a service, not just calling one.',
    'Keeps the public story honest by focusing on search and discovery value before supported-now status is earned.',
  ],
  whyItWorks: ({ agentName, providerName }) => [
    `${agentName} becomes more useful when it can discover which paid services exist before asking a human to hunt through directories manually.`,
    `${providerName} already exposes searchable metadata and docs, which makes it a natural candidate for a discovery-oriented landing page.`,
    'That creates useful content now while preserving a later validation step for whichever route we want to support first.',
  ],
  useCases: () => [
    'Search for paid APIs by category before choosing an implementation path',
    'Compare Lightning-native service options for research, data, or workflow automation',
    'Build agent discovery flows around a directory instead of a static hardcoded list',
  ],
  faqResultDescription: ({ providerName, serviceName }) =>
    `${providerName} ${serviceName} is designed to return directory listings, searchable service metadata, and related discovery information so agents can choose which paid API to use next.`,
}) satisfies ServiceDefinition;

export default service;

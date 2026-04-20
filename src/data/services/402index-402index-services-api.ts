import { createServiceDefinition } from '../service-factory';
import { buildCostDetail, createSatsFixedPrice } from '../pricing';
import type { ServiceDefinition } from '../types';

const pricing = createSatsFixedPrice(500, 'per higher-rate access window', 'free tier available');

const service = createServiceDefinition({
  copyFamily: 'live-search',
  key: '402index-402index-services-api',
  providerKey: '402index',
  name: 'Services API',
  endpointUrl: 'https://402index.io/api/v1/services?l402=require',
  resultLabel: 'Search and filter a paid API directory built for agent discovery workflows',
  category: 'Directory search',
  supportStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  pricing,
  exampleOutput: {
    kind: 'table',
    title: 'What the live docs show this API can do',
    caption:
      'The 402index API docs and live endpoint show a searchable paid API directory with filters for protocol, category, health, source, price, and compatibility details.',
    columns: ['Route', 'What it does', 'Why it matters'],
    rows: [
      ['GET /api/v1/services', 'List services with filters, sorting, and pagination', 'Lets an agent search the directory for usable paid APIs instead of browsing manually'],
      ['GET /api/v1/services/:id', 'Fetch full service details plus related protocol listings', 'Useful when an agent wants richer service context before deciding what to call next'],
      ['GET /api/v1/export.csv', 'Export the directory as CSV with L402 payment', 'Shows the API supports richer bulk discovery workflows beyond a simple web UI'],
    ],
    details: [
      'Provider: 402index',
      'Service: Services API',
      'Endpoint: /api/v1/services?l402=require',
      buildCostDetail(pricing),
      'Checked: homepage, API docs, and live L402 challenge reviewed on 2026-04-20',
      'Observed live directory entry: 500 sats for the L402 Services API entry in 402index',
      'Observed live API response: JSON 402 / Payment Required with Lightning invoice and a 24-hour access duration after free-tier limit enforcement',
    ],
    briefingTitle: 'Why this page is live before paid activation',
    briefingParagraphs: [
      'The homepage and API docs are public and specific enough to describe the product honestly before we run a paid activation test on the L402-protected route.',
      'This page stays on the coming-soon path until we confirm the paid flow and decide which discovery or export route should graduate first.',
    ],
  },
  examplePrompt:
    'Use 402index Services API to find healthy L402 directory or research endpoints, sort them by reliability, and return the three best options for an agent workflow using 402index with the Alby payments skill.',
  variantTitle: ({ agentName, providerName }) => `Search paid API listings with ${agentName} using ${providerName}`,
  variantDescription: ({ agentName, providerName, priceLabel }) =>
    `Enable ${agentName} to search and filter paid API listings through ${providerName} for ${priceLabel}, without building a one-off discovery workflow from scratch.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Give ${agentName} access to ${providerName} ${serviceName} so it can compare protocols, health, price signals, and directory metadata before deciding which paid API to use next.`,
  heroBulletHighlights: () => [
    'The live docs expose practical filters like protocol, category, health, source, pricing, and lnget compatibility.',
    'A real L402 challenge is already visible on the endpoint, which makes this a strong candidate for later paid-flow validation.',
  ],
  whyItWorks: ({ agentName, providerName }) => [
    `${agentName} becomes more useful when it can discover paid APIs programmatically instead of waiting for a human to search multiple directories by hand.`,
    `${providerName} already exposes both a public docs page and a structured API, which makes the discovery workflow easy to explain honestly before full activation support is earned.`,
    'That gives this landing page immediate user value now while preserving a later paid-validation step for the routes we eventually mark as supported.',
  ],
  useCases: () => [
    'Search for L402 or x402 APIs by protocol before picking an integration path',
    'Filter directory results by health or price signals before spending money on the wrong endpoint',
    'Export paid API listings for offline analysis or workflow planning once the paid route is validated',
  ],
  faqResultDescription: ({ providerName, serviceName }) =>
    `${providerName} ${serviceName} is designed to return paid API listings, filterable directory metadata, and related service details so agents can decide what to buy or call next.`,
}) satisfies ServiceDefinition;

export default service;

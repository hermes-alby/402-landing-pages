import { createServiceDefinition } from '../service-factory';
import { buildCostDetail, createSatsFixedPrice } from '../pricing';
import type { ServiceDefinition } from '../types';

const pricing = createSatsFixedPrice(25, 'per fee-oracle query');

const service = createServiceDefinition({
  key: 'hyperdope-lightning-fee-oracle',
  providerKey: 'hyperdope',
  name: 'Lightning Fee Oracle',
  endpointUrl: 'https://l402.services/ln/fees',
  resultLabel: 'Query Lightning fee distributions and change trends through an L402-gated oracle',
  category: 'Lightning data',
  supportStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  pricing,
  exampleOutput: {
    kind: 'table',
    title: 'What the live endpoint already exposes',
    caption:
      'The Hyperdope fee endpoint returns a real 402 challenge with preview metadata describing channel fee distributions, historical fee changes, volatility metrics, and optional per-node analysis.',
    columns: ['Field', 'Observed live value'],
    rows: [
      ['Price', '25 sats'],
      ['Token expiry', '300 seconds'],
      ['Observed preview', '63 days available, latest diff date, graph channel counts, fee distribution summary'],
    ],
    details: [
      'Provider: Hyperdope',
      'Service: Lightning Fee Oracle',
      'Endpoint: /ln/fees',
      buildCostDetail(pricing),
      'Checked: live service catalog and live 402 challenge reviewed on 2026-04-20',
      'Observed challenge payload includes macaroon, invoice, token format guidance, preview data, and consumption notes',
    ],
    briefingTitle: 'Why this page is live before paid activation',
    briefingParagraphs: [
      'The root service catalog is already machine-readable and the fee endpoint returns a detailed L402 challenge, so the landing page can explain the workflow honestly before we run a paid validation pass.',
      'This page stays on the coming-soon path until we execute a real paid query and capture the returned fee-oracle payload as an activation artifact.',
    ],
  },
  examplePrompt:
    'Query Hyperdope Lightning Fee Oracle and summarize current Lightning fee distribution percentiles, trend direction, and any notable volatility signals using Hyperdope with the Alby payments skill.',
  variantTitle: ({ agentName, providerName }) => `Check Lightning fee conditions with ${agentName} using ${providerName}`,
  variantDescription: ({ agentName, providerName, priceLabel }) =>
    `Enable ${agentName} to query Lightning fee conditions through ${providerName} for ${priceLabel}, without wiring a custom fee-analysis data pipeline first.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Give ${agentName} access to ${providerName} ${serviceName} so it can inspect Lightning fee distributions, trend changes, and volatility signals before deciding how or when to route a Lightning-native workflow.`,
  heroBulletHighlights: () => [
    'The live challenge already reveals useful preview metadata, which makes the page concrete even before paid activation is complete.',
    'Strong fit for agents that need network conditions, routing context, or fee-aware Lightning decision support.',
  ],
  whyItWorks: ({ agentName, providerName }) => [
    `${agentName} can make better Lightning-side decisions when it can query live fee conditions instead of relying on stale assumptions or manual dashboards.`,
    `${providerName} already exposes the fee-oracle path as a clear L402 endpoint with explicit price and token-expiry details, which makes it easy to explain honestly on a landing page.`,
    'That gives this page immediate value for Bitcoin-native operators while keeping the supported-now label gated behind a real paid validation run.',
  ],
  useCases: () => [
    'Check Lightning fee percentiles before choosing a timing-sensitive agent action',
    'Compare fee trend changes over time before routing or forecasting Lightning costs',
    'Feed fee-oracle signals into a broader Bitcoin or Lightning monitoring workflow',
  ],
  faqResultDescription: ({ providerName, serviceName }) =>
    `${providerName} ${serviceName} is designed to return Lightning fee distribution percentiles, trend information, volatility metrics, and optional per-node fee details through an L402-gated API.`,
}) satisfies ServiceDefinition;

export default service;

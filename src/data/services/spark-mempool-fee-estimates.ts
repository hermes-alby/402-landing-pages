import { createServiceDefinition } from '../service-factory';
import { buildCostDetail, createSatsFixedPrice } from '../pricing';
import type { ServiceDefinition } from '../types';

const pricing = createSatsFixedPrice(1, 'per mempool-fee query');

const service = createServiceDefinition({
  key: 'spark-mempool-fee-estimates',
  providerKey: 'spark',
  name: 'Mempool Fee Estimates',
  endpointUrl: 'https://l402.lndyn.com/api/mempool-fees',
  resultLabel: 'Fetch Bitcoin mempool fee estimates through a tiny L402-gated endpoint',
  category: 'Bitcoin',
  supportStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  pricing,
  exampleOutput: {
    kind: 'table',
    title: 'What the live service already exposes',
    caption:
      'The Spark homepage lists mempool-fees as a real-time Bitcoin endpoint for next-block, ~10 minute, and ~30 minute fee targets, and the endpoint returns a real 402 challenge for 1 sat.',
    columns: ['Observed item', 'Value'],
    rows: [
      ['Homepage-listed price', '1 sat'],
      ['Live endpoint message', 'Payment of 1 sats required for service: mempool-fees'],
      ['Extra challenge detail', 'Token, invoice, payment hash, and Nostr attestation hint'],
    ],
    details: [
      'Provider: Spark',
      'Service: Mempool Fee Estimates',
      'Endpoint: /api/mempool-fees',
      buildCostDetail(pricing),
      'Checked: live homepage and live 402 challenge reviewed on 2026-04-20',
      'Observed attestation hint: include X-Nostr-Pubkey to receive a NIP-30085 settlement attestation',
    ],
    briefingTitle: 'Why this page is live before paid activation',
    briefingParagraphs: [
      'Spark publishes a clear service catalog and a live 402 challenge, so the page can describe the workflow honestly before we run the paid request end to end.',
      'This page stays on the coming-soon path until we execute a real paid query and capture the returned fee-estimate payload as an activation artifact.',
    ],
  },
  examplePrompt:
    'Query Spark Mempool Fee Estimates and summarize the next-block, ~10 minute, and ~30 minute fee targets before deciding when to send a Bitcoin transaction using Spark with the Alby payments skill.',
  variantTitle: ({ agentName, providerName }) => `Check Bitcoin mempool fees with ${agentName} using ${providerName}`,
  variantDescription: ({ agentName, providerName, priceLabel }) =>
    `Enable ${agentName} to check Bitcoin mempool fees through ${providerName} for ${priceLabel}, without building a separate mempool polling workflow first.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Give ${agentName} access to ${providerName} ${serviceName} so it can inspect live fee targets before recommending when or how to send a Bitcoin transaction.`,
  heroBulletHighlights: () => [
    'Extremely cheap endpoint for fee-aware workflows: Spark lists it at 1 sat per query.',
    'Strong fit for agents that need to decide whether a transaction should go now, wait for a cheaper block, or target a slower confirmation window.',
  ],
  whyItWorks: ({ agentName, providerName }) => [
    `${agentName} can make better Bitcoin transaction decisions when it can check live mempool fee targets instead of relying on static heuristics.`,
    `${providerName} already publishes the endpoint, price, and L402 payment flow clearly on the homepage, which makes the value proposition easy to explain honestly on a landing page.`,
    'That creates immediate user value for Bitcoin-native workflows while keeping the supported-now label gated behind a real paid validation run.',
  ],
  useCases: () => [
    'Check next-block fee targets before broadcasting a Bitcoin transaction',
    'Compare fast and slower confirmation windows before deciding whether to wait',
    'Feed live mempool fee estimates into a wallet, treasury, or automation workflow',
  ],
  faqResultDescription: ({ providerName, serviceName }) =>
    `${providerName} ${serviceName} is designed to return real-time Bitcoin mempool fee targets for immediate, short-delay, and medium-delay confirmation windows.`,
}) satisfies ServiceDefinition;

export default service;

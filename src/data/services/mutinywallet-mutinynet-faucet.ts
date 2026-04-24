import { createServiceDefinition } from '../service-factory';
import { buildCostDetail, createSatsFixedPrice } from '../pricing';
import type { ServiceDefinition } from '../types';

const pricing = createSatsFixedPrice(50, 'per faucet request');

const service = createServiceDefinition({
  key: 'mutinywallet-mutinynet-faucet',
  providerKey: 'mutinywallet',
  name: 'Mutinynet Faucet',
  endpointUrl: 'https://faucet.mutinynet.com/api/l402',
  resultLabel: 'Get testnet sats from a Lightning-gated faucet for Mutinynet workflows',
  category: 'Bitcoin',
  supportStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  pricing,
  exampleOutput: {
    kind: 'table',
    title: 'What you get from the faucet flow',
    caption:
      'Request Mutinynet testnet sats through a Lightning-gated faucet so an agent can keep a Bitcoin test workflow moving without a browser detour or manual faucet hunt.',
    columns: ['What you get', 'Details'],
    rows: [
      ['No account required', 'Pay with Lightning faucet flow on the site'],
      ['API access', '402 challenge with invoice and token at /api/l402'],
      ['Price', '50 sats per faucet request'],
    ],
    details: [
      'Provider: MutinyWallet',
      'Service: Mutinynet Faucet',
      'Endpoint: /api/l402',
      buildCostDetail(pricing),
      'No account required',
      'Lightning invoice and token challenge',
      'The faucet page also links refund details, faucet node details, federation data, and Cashu mint context for the wider Mutinynet stack',
    ],
    briefingTitle: 'Keep Bitcoin test workflows moving',
    briefingParagraphs: [
      'Get testnet sats without leaving an agent workflow for a browser faucet detour.',
      'When a Mutinynet test needs funds before the next wallet or node step can run, paying once for a faucet request is simpler than signing up for another tool.',
    ],
  },
  examplePrompt:
    'Use Mutinynet Faucet to request testnet sats for a Mutinynet wallet integration test, then summarize the next setup steps using MutinyWallet with the Alby payments skill.',
  variantTitle: ({ agentName, providerName }) => `Get Mutinynet testnet sats with ${agentName} using ${providerName}`,
  variantDescription: ({ agentName, providerName, priceLabel }) =>
    `Enable ${agentName} to unlock Mutinynet testnet sats through ${providerName} for ${priceLabel}, without stopping for a browser-only faucet flow.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Give ${agentName} access to ${providerName} ${serviceName} so it can fund a Mutinynet test workflow through a Lightning-gated faucet instead of waiting for manual setup or account creation.`,
  heroBulletHighlights: () => [
    'Perfect for Bitcoin development and testing workflows that need testnet sats before the next step can run.',
    'No account required. Pay with Lightning and keep a Mutinynet test flow moving.',
  ],
  whyItWorks: ({ agentName, providerName }) => [
    `${agentName} can keep a Bitcoin integration workflow moving when it can request Mutinynet sats inside the same flow instead of sending a human off to find a faucet manually.`,
    `${providerName} exposes a pay-with-Lightning faucet instead of a browser-only giveaway flow, which makes funding a test environment easier to automate.`,
    'At 50 sats per request, the cost is easy to understand when you just need test funds to unblock the next wallet, node, or app step.',
  ],
  useCases: () => [
    'Fund a Mutinynet integration test before running wallet or node automation',
    'Get testnet sats into an agent workflow without a manual browser faucet step',
    'Bootstrap a Lightning-native Bitcoin test flow that needs funds before proceeding',
  ],
  faqResultDescription: ({ providerName, serviceName }) =>
    `${providerName} ${serviceName} is designed to return access to Mutinynet testnet sats through a Lightning-gated faucet flow.`,
}) satisfies ServiceDefinition;

export default service;

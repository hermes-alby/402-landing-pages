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
    title: 'What the live faucet flow already shows',
    caption:
      'The Mutinynet site openly advertises pay-with-Lightning access, and the faucet API returns a real 402 JSON challenge with invoice and token so agents can unlock testnet sats without a web account.',
    columns: ['Observed item', 'Value'],
    rows: [
      ['Homepage CTA', 'Pay with Lightning — no account needed'],
      ['Live endpoint challenge', '402 JSON with invoice + token'],
      ['Directory-listed price', '50 sats'],
    ],
    details: [
      'Provider: MutinyWallet',
      'Service: Mutinynet Faucet',
      'Endpoint: /api/l402',
      buildCostDetail(pricing),
      'Checked: live homepage and live 402 challenge reviewed on 2026-04-20',
      'Observed site also exposes refund details, faucet node details, federation data, and Cashu mint context for the broader Mutinynet ecosystem',
    ],
    briefingTitle: 'Why this page is live before paid activation',
    briefingParagraphs: [
      'The homepage already explains the pay-with-Lightning flow clearly and the API returns a live 402 challenge, so the landing page can describe the faucet honestly before we run the paid request end to end.',
      'This page stays on the coming-soon path until we execute a real paid faucet request and capture the returned faucet result as an activation artifact.',
    ],
  },
  examplePrompt:
    'Use Mutinynet Faucet to request testnet sats for a Bitcoin integration test, then summarize the steps needed to continue the workflow using MutinyWallet with the Alby payments skill.',
  variantTitle: ({ agentName, providerName }) => `Get Mutinynet testnet sats with ${agentName} using ${providerName}`,
  variantDescription: ({ agentName, providerName, priceLabel }) =>
    `Enable ${agentName} to unlock Mutinynet testnet sats through ${providerName} for ${priceLabel}, without stopping for a browser-only faucet flow.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Give ${agentName} access to ${providerName} ${serviceName} so it can fund a Mutinynet test workflow through a Lightning-gated faucet instead of waiting for manual setup or account creation.`,
  heroBulletHighlights: () => [
    'Strong fit for Bitcoin development and testing workflows where an agent needs testnet sats before it can continue.',
    'The live site is explicit that no account is required, which makes the value proposition unusually clear for a coming-soon page.',
  ],
  whyItWorks: ({ agentName, providerName }) => [
    `${agentName} can keep a Bitcoin integration workflow moving when it can get Mutinynet sats programmatically instead of asking a human to hunt for a faucet manually.`,
    `${providerName} already exposes both a clear pay-with-Lightning site flow and a real 402 API response, which makes the faucet easy to explain honestly before paid activation is complete.`,
    'That makes this a strong practical landing page for agent-native Bitcoin testing workflows even before the endpoint graduates to supported-now status.',
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

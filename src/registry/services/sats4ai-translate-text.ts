import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'sats4ai-translate-text',
  providerKey: 'sats4ai',
  name: 'translate-text',
  endpointUrl: 'https://sats4ai.com/api/l402/translate-text',
  category: 'Translation',
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'live',
  landingPageStatus: 'supported',
  lastCheckedAt: '2026-04-19',
  summary: 'Paid-tested Sats4AI translation endpoint with a successful live L402 request and multilingual landing pages already enabled.',
  notes: [
    'Successful paid activation test completed on 2026-04-19.',
    'Real observed cost: 1 sat translation + 1 sat routing fee.',
  ],
} satisfies ServiceRegistryEntry;

export default service;

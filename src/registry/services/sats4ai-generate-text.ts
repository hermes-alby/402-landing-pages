import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'sats4ai-generate-text',
  providerKey: 'sats4ai',
  name: 'generate-text',
  endpointUrl: 'https://sats4ai.com/api/l402/generate-text',
  category: 'Text generation',
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'schema-checked',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-19',
  summary: 'Schema was checked directly from the live Sats4AI endpoint, but no paid activation run has been recorded yet.',
  notes: [
    'GET schema confirmed the endpoint exists and documents chat-style JSON input.',
    'Still needs a real paid request before switching the landing page to supported.',
  ],
} satisfies ServiceRegistryEntry;

export default service;

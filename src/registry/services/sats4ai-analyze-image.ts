import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'sats4ai-analyze-image',
  providerKey: 'sats4ai',
  name: 'analyze-image',
  endpointUrl: 'https://sats4ai.com/api/l402/analyze-image',
  category: 'Vision analysis',
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'schema-checked',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-19',
  summary: 'Schema was checked directly from the live Sats4AI endpoint, but no paid image-analysis request has been recorded yet.',
  notes: [
    'GET schema confirmed image + prompt JSON input.',
    'Still needs a real paid request before switching the landing page to supported.',
  ],
} satisfies ServiceRegistryEntry;

export default service;

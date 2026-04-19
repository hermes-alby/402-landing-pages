import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'payperq-gpt-image-1-5',
  providerKey: 'payperq',
  name: 'GPT Image 1.5',
  endpointUrl: 'https://api.ppq.ai/v1/images/generations/gpt-image-1.5',
  category: 'Image generation',
  reviewStatus: 'approved',
  reviewSource: 'legacy-manual',
  activationStatus: 'live',
  landingPageStatus: 'supported',
  lastCheckedAt: '2026-04-19',
  summary: 'Existing live image-generation landing page kept as a legacy-approved service entry.',
  notes: ['Backfilled from the current landing-page catalog.'],
} satisfies ServiceRegistryEntry;

export default service;

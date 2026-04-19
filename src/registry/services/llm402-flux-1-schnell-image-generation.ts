import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'llm402-flux-1-schnell-image-generation',
  providerKey: 'llm402',
  name: 'FLUX.1-schnell image generation',
  endpointUrl: 'https://llm402.ai/v1/images/generations',
  category: 'Image generation',
  reviewStatus: 'approved',
  reviewSource: 'legacy-manual',
  activationStatus: 'live',
  landingPageStatus: 'supported',
  lastCheckedAt: '2026-04-19',
  summary: 'Existing llm402 image-generation landing page kept as a legacy-approved service entry.',
  notes: ['Backfilled from the current landing-page catalog.'],
} satisfies ServiceRegistryEntry;

export default service;

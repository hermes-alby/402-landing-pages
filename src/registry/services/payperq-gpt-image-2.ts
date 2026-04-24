import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'payperq-gpt-image-2',
  providerKey: 'payperq',
  name: 'ChatGPT Images 2.0',
  endpointUrl: 'https://api.ppq.ai/v1/images/generations/gpt-image-2',
  category: 'Image generation',
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'schema-checked',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-24',
  summary: 'PPQ models API lists ChatGPT Images 2.0 with low, medium, and high quality tiers plus optional image-input controls, making it a strong next image-generation landing page candidate.',
  notes: [
    'Reviewed directly from ppq.ai homepage, pricing/docs surface, and live https://api.ppq.ai/v1/models?type=image metadata.',
    'No paid activation artifact captured yet, so the landing page stays on the coming-soon path.',
    'Medium-quality price observed at $0.069 per image in the live model metadata on 2026-04-24.',
  ],
} satisfies ServiceRegistryEntry;

export default service;

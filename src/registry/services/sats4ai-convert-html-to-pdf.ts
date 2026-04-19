import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'sats4ai-convert-html-to-pdf',
  providerKey: 'sats4ai',
  name: 'convert-html-to-pdf',
  endpointUrl: 'https://sats4ai.com/api/l402/convert-html-to-pdf',
  category: 'Document conversion',
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'schema-checked',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-19',
  summary: 'Schema was checked directly from the live Sats4AI endpoint, but no paid HTML-to-PDF conversion test has been recorded yet.',
  notes: [
    'GET schema confirmed support for HTML and Markdown input.',
    'Still needs a real paid request before switching the landing page to supported.',
  ],
} satisfies ServiceRegistryEntry;

export default service;

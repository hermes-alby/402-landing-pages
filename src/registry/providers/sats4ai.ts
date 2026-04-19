import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'sats4ai',
  name: 'Sats4AI',
  websiteUrl: 'https://sats4ai.com',
  protocols: ['L402', 'MPP'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'live',
  summary:
    'Promising but early provider discovered on 402index and validated manually with a real paid translation test despite poor 402index health signals.',
  endpointCandidates: ['translate-text', 'generate-text', 'convert-html-to-pdf'],
  notes: [
    'translate-text completed a successful paid activation test on 2026-04-19.',
    '402index currently reports weak health, but direct L402 challenge + paid retry succeeded.',
    'Public docs, MCP docs, llms.txt, and /.well-known/l402-services are available.',
  ],
} satisfies ProviderRegistryEntry;

export default provider;

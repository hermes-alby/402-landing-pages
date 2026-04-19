import type { Provider } from '../types';

const provider = {
  key: 'sats4ai',
  name: 'Sats4AI',
  logoSrc: `${import.meta.env.BASE_URL}providers/sats4ai.png`,
  websiteUrl: 'https://sats4ai.com',
  lastCheckedAt: '2026-04-19',
  supportStatus: 'supported',
} satisfies Provider;

export default provider;

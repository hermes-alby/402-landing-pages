import type { Provider } from '../types';

const provider = {
  key: 'lightning-enable',
  name: 'Lightning Enable',
  logoSrc: `${import.meta.env.BASE_URL}providers/lightning-enable.svg`,
  websiteUrl: 'https://lightningenable.com',
  lastCheckedAt: '2026-04-20',
  supportStatus: 'coming-soon',
} satisfies Provider;

export default provider;

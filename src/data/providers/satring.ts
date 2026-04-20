import type { Provider } from '../types';

const provider = {
  key: 'satring',
  name: 'Satring',
  logoSrc: `${import.meta.env.BASE_URL}providers/satring.png`,
  websiteUrl: 'https://satring.com',
  lastCheckedAt: '2026-04-20',
  supportStatus: 'coming-soon',
} satisfies Provider;

export default provider;

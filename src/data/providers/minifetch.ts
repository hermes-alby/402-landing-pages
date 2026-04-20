import type { Provider } from '../types';

const provider = {
  key: 'minifetch',
  name: 'Minifetch',
  logoSrc: `${import.meta.env.BASE_URL}providers/minifetch.png`,
  websiteUrl: 'https://minifetch.com',
  lastCheckedAt: '2026-04-20',
  supportStatus: 'coming-soon',
} satisfies Provider;

export default provider;

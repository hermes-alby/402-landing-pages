import type { Provider } from '../types';

const provider = {
  key: 'ganamos',
  name: 'Ganamos',
  logoSrc: `${import.meta.env.BASE_URL}providers/ganamos.png`,
  websiteUrl: 'https://ganamos.earth',
  lastCheckedAt: '2026-04-20',
  supportStatus: 'coming-soon',
} satisfies Provider;

export default provider;

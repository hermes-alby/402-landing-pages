import type { Provider } from '../types';

const provider = {
  key: 'cascade',
  name: 'Cascade',
  logoSrc: `${import.meta.env.BASE_URL}providers/cascade.png`,
  websiteUrl: 'https://cascade.fyi',
  lastCheckedAt: '2026-04-19',
  supportStatus: 'coming-soon',
} satisfies Provider;

export default provider;

import type { Provider } from '../types';

const provider = {
  key: 'hyperdope',
  name: 'Hyperdope',
  logoSrc: `${import.meta.env.BASE_URL}providers/hyperdope.svg`,
  websiteUrl: 'https://l402.services',
  lastCheckedAt: '2026-04-20',
  supportStatus: 'coming-soon',
} satisfies Provider;

export default provider;

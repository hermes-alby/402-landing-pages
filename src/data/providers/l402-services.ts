import type { Provider } from '../types';

const provider = {
  key: 'l402-services',
  name: 'L402 Services',
  logoSrc: `${import.meta.env.BASE_URL}providers/l402-services.png`,
  websiteUrl: 'https://l402.services',
  lastCheckedAt: '2026-04-19',
  supportStatus: 'supported',
} satisfies Provider;

export default provider;

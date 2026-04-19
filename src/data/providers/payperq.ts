import type { Provider } from '../types';

const provider = {
  key: 'payperq',
  name: 'PayPerQ',
  logoSrc: `${import.meta.env.BASE_URL}providers/payperq.png`,
  websiteUrl: 'https://ppq.ai',
  lastCheckedAt: '2026-04-19',
  supportStatus: 'supported',
} satisfies Provider;

export default provider;

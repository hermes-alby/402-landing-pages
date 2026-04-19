import type { Provider } from '../types';

const provider = {
  key: 'pull-that-up-jamie',
  name: 'Pull That Up Jamie',
  logoSrc: `${import.meta.env.BASE_URL}providers/pull-that-up-jamie.png`,
  websiteUrl: 'https://www.pullthatupjamie.ai',
  lastCheckedAt: '2026-04-19',
  supportStatus: 'supported',
} satisfies Provider;

export default provider;

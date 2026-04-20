import type { Provider } from '../types';

const provider = {
  key: 'spark',
  name: 'Spark',
  logoSrc: `${import.meta.env.BASE_URL}providers/spark.svg`,
  websiteUrl: 'https://l402.lndyn.com',
  lastCheckedAt: '2026-04-20',
  supportStatus: 'coming-soon',
} satisfies Provider;

export default provider;

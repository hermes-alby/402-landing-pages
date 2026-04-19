import type { Provider } from '../types';

const provider = {
  key: 'llm402',
  name: 'llm402.ai',
  logoSrc: `${import.meta.env.BASE_URL}providers/llm402.png`,
  websiteUrl: 'https://llm402.ai',
  lastCheckedAt: '2026-04-19',
  supportStatus: 'supported',
} satisfies Provider;

export default provider;

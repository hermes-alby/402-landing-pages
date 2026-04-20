import type { Provider } from '../types';

const provider = {
  key: 'mutinywallet',
  name: 'MutinyWallet',
  logoSrc: `${import.meta.env.BASE_URL}providers/mutinywallet.svg`,
  websiteUrl: 'https://faucet.mutinynet.com',
  lastCheckedAt: '2026-04-20',
  supportStatus: 'coming-soon',
} satisfies Provider;

export default provider;

import type { Provider } from './types';

export const providers: Provider[] = [
  {
    key: 'payperq',
    name: 'PayPerQ',
    websiteUrl: 'https://ppq.ai',
    supportStatus: 'supported',
    sectionTitle: 'PayPerQ',
    sectionDescription: 'Endpoints your agent can use today with the Alby Payments Skill.',
  },
  {
    key: 'cascade',
    name: 'Cascade',
    websiteUrl: 'https://cascade.fyi',
    supportStatus: 'coming-soon',
    sectionTitle: 'Cascade',
    sectionDescription: 'Social and research endpoints that fit the same pay-per-use flow once support lands.',
  },
];

export const providersByKey = Object.fromEntries(providers.map((provider) => [provider.key, provider])) as Record<string, Provider>;

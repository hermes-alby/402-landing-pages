import type { Provider } from '../types';

const providerModules = import.meta.glob('./*.ts', { eager: true }) as Record<string, { default?: Provider }>;

export const providers: Provider[] = Object.entries(providerModules)
  .filter(([path]) => path !== './index.ts')
  .map(([, module]) => module.default)
  .filter((provider): provider is Provider => Boolean(provider))
  .sort((a, b) => a.key.localeCompare(b.key));

export const providersByKey = Object.fromEntries(providers.map((provider) => [provider.key, provider])) as Record<string, Provider>;

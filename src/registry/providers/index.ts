import type { ProviderRegistryEntry } from '../types';

const providerModules = import.meta.glob('./*.ts', { eager: true }) as Record<string, { default?: ProviderRegistryEntry }>;

export const providerRegistryEntries: ProviderRegistryEntry[] = Object.entries(providerModules)
  .filter(([path]) => path !== './index.ts')
  .map(([, module]) => module.default)
  .filter((provider): provider is ProviderRegistryEntry => Boolean(provider))
  .sort((a, b) => a.key.localeCompare(b.key));

export const providerRegistryByKey = Object.fromEntries(
  providerRegistryEntries.map((provider) => [provider.key, provider]),
) as Record<string, ProviderRegistryEntry>;

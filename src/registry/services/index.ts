import type { ServiceRegistryEntry } from '../types';

const serviceModules = import.meta.glob('./*.ts', { eager: true }) as Record<string, { default?: ServiceRegistryEntry }>;

export const serviceRegistryEntries: ServiceRegistryEntry[] = Object.entries(serviceModules)
  .filter(([path]) => path !== './index.ts')
  .map(([, module]) => module.default)
  .filter((service): service is ServiceRegistryEntry => Boolean(service))
  .sort((a, b) => a.key.localeCompare(b.key));

export const serviceRegistryByKey = Object.fromEntries(
  serviceRegistryEntries.map((service) => [service.key, service]),
) as Record<string, ServiceRegistryEntry>;

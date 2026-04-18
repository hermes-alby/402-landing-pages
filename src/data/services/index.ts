import type { ServiceDefinition } from '../types';

const serviceModules = import.meta.glob('./*.ts', { eager: true }) as Record<string, { default?: ServiceDefinition }>;

export const serviceDefinitions: ServiceDefinition[] = Object.entries(serviceModules)
  .filter(([path]) => path !== './index.ts')
  .map(([, module]) => module.default)
  .filter((service): service is ServiceDefinition => Boolean(service))
  .sort((a, b) => a.key.localeCompare(b.key));

export const servicesByKey = Object.fromEntries(serviceDefinitions.map((service) => [service.key, service])) as Record<string, ServiceDefinition>;

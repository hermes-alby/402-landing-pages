import type { ServiceDefinition } from '../types';
import { cascadeTweetSearch } from './cascade-tweet-search';
import { payperqGptImage15 } from './payperq-gpt-image-1-5';

export const serviceDefinitions: ServiceDefinition[] = [payperqGptImage15, cascadeTweetSearch];

export const servicesByKey = Object.fromEntries(serviceDefinitions.map((service) => [service.key, service])) as Record<string, ServiceDefinition>;

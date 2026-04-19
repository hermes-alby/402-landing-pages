import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
const registryDir = path.join(root, 'src/registry/services');
const registryIndexPath = path.join(root, 'src/registry/services/index.ts');
const registryTypesPath = path.join(root, 'src/registry/types.ts');
const dataTypesPath = path.join(root, 'src/data/types.ts');

assert.equal(fs.existsSync(registryDir), true, 'expected service registry directory at src/registry/services');
assert.equal(fs.existsSync(registryIndexPath), true, 'expected service registry index at src/registry/services/index.ts');

const registryTypes = fs.readFileSync(registryTypesPath, 'utf8');
const dataTypes = fs.readFileSync(dataTypesPath, 'utf8');
assert.ok(registryTypes.includes('export type ServiceRegistryEntry = {'), 'expected service registry type to exist');
assert.ok(registryTypes.includes('landingPageStatus: RegistrySupportStatus;'), 'expected service registry entries to track landing-page support status');
assert.ok(dataTypes.includes('lastCheckedAt: string;'), 'expected data types to track last-checked dates');
assert.ok(dataTypes.includes('supportStatus: SupportStatus;'), 'expected service data to track support status');

const serviceFiles = fs.readdirSync(registryDir).filter((file) => file.endsWith('.ts') && file !== 'index.ts');
for (const serviceKey of [
  'payperq-gpt-image-1-5',
  'cascade-tweet-search',
  'l402-services-predictions-oracle',
  'llm402-flux-1-schnell-image-generation',
  'llm402-gpt-5-image-generation',
  'pull-that-up-jamie-search-quotes',
  'sats4ai-translate-text',
  'sats4ai-generate-text',
  'sats4ai-convert-html-to-pdf',
  'sats4ai-analyze-image',
]) {
  assert.ok(serviceFiles.includes(`${serviceKey}.ts`), `expected service registry entry for ${serviceKey}`);
}

const translateRegistry = fs.readFileSync(path.join(registryDir, 'sats4ai-translate-text.ts'), 'utf8');
assert.ok(translateRegistry.includes("activationStatus: 'live'"), 'expected sats4ai translate-text to be marked live in the service registry');
assert.ok(translateRegistry.includes("landingPageStatus: 'supported'"), 'expected sats4ai translate-text to be marked supported in the service registry');

const generateRegistry = fs.readFileSync(path.join(registryDir, 'sats4ai-generate-text.ts'), 'utf8');
assert.ok(generateRegistry.includes("activationStatus: 'schema-checked'"), 'expected sats4ai generate-text to be marked schema-checked');
assert.ok(generateRegistry.includes("landingPageStatus: 'coming-soon'"), 'expected sats4ai generate-text to stay coming-soon');

console.log('service registry looks good');

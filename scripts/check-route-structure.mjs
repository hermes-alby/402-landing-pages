import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
const servicesPath = path.join(root, 'src/data/services.ts');
const services = fs.readFileSync(servicesPath, 'utf8');

const exists = (rel) => fs.existsSync(path.join(root, rel));

assert.equal(exists('src/pages/coming-soon/[agent].astro'), true, 'expected one shared agent-aware coming-soon route at src/pages/coming-soon/[agent].astro');
assert.equal(exists('src/pages/coming-soon/twitter-cascade/[agent].astro'), false, 'expected service-specific coming-soon route to be removed');
assert.equal(exists('src/pages/install/[agent].astro'), true, 'expected one install page per agent at src/pages/install/[agent].astro');
assert.equal(exists('src/pages/install.astro'), false, 'expected shared install page to be removed');
assert.equal(services.includes('coming-soon/twitter-cascade/${agentSlug}/'), false, 'expected CTA targets to stop using per-service coming-soon pages');
assert.equal(services.includes('coming-soon/${agentSlug}/'), true, 'expected CTA targets to use the single agent-aware coming-soon page');
assert.equal(services.includes('install/${agentSlug}/'), true, 'expected install CTA targets to use agent-specific install pages');

console.log('route structure looks good');

import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
const registryDir = path.join(root, 'src/registry/providers');
const registryIndexPath = path.join(root, 'src/registry/providers/index.ts');
const registryTypesPath = path.join(root, 'src/registry/types.ts');

assert.equal(fs.existsSync(registryDir), true, 'expected provider registry directory at src/registry/providers');
assert.equal(fs.existsSync(registryIndexPath), true, 'expected provider registry index at src/registry/providers/index.ts');
assert.equal(fs.existsSync(registryTypesPath), true, 'expected provider registry types at src/registry/types.ts');

const providerFiles = fs.readdirSync(registryDir).filter((file) => file.endsWith('.ts') && file !== 'index.ts');
for (const providerKey of ['payperq', 'cascade', 'l402-services', 'llm402', 'pull-that-up-jamie', 'sats4ai']) {
  assert.ok(providerFiles.includes(`${providerKey}.ts`), `expected provider registry entry for ${providerKey}`);
}

const sats4aiSource = fs.readFileSync(path.join(registryDir, 'sats4ai.ts'), 'utf8');
assert.ok(sats4aiSource.includes("reviewStatus: 'approved-for-trial'"), 'expected Sats4AI to be recorded as approved-for-trial');
assert.ok(sats4aiSource.includes('translate-text'), 'expected Sats4AI registry entry to mention translate-text as an activation candidate');

const payperqSource = fs.readFileSync(path.join(registryDir, 'payperq.ts'), 'utf8');
assert.ok(payperqSource.includes('legacy-manual'), 'expected existing live providers to be backfilled as legacy-manual entries');

console.log('provider registry looks good');

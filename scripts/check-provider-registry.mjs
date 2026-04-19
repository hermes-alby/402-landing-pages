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

const typesSource = fs.readFileSync(registryTypesPath, 'utf8');
assert.ok(typesSource.includes('lastCheckedAt: string;'), 'expected provider registry types to include lastCheckedAt');

const providerFiles = fs.readdirSync(registryDir).filter((file) => file.endsWith('.ts') && file !== 'index.ts');
for (const providerKey of ['payperq', 'cascade', 'l402-services', 'llm402', 'pull-that-up-jamie', 'sats4ai']) {
  assert.ok(providerFiles.includes(`${providerKey}.ts`), `expected provider registry entry for ${providerKey}`);
}

const sats4aiSource = fs.readFileSync(path.join(registryDir, 'sats4ai.ts'), 'utf8');
assert.ok(sats4aiSource.includes("reviewStatus: 'approved-for-trial'"), 'expected Sats4AI to be recorded as approved-for-trial');
assert.ok(sats4aiSource.includes("lastCheckedAt: '2026-04-19'"), 'expected Sats4AI provider registry entry to record the last-checked date');
assert.ok(sats4aiSource.includes('generate-text'), 'expected Sats4AI registry entry to mention generate-text as an activation candidate');
assert.ok(sats4aiSource.includes('convert-html-to-pdf'), 'expected Sats4AI registry entry to mention convert-html-to-pdf as an activation candidate');

const payperqSource = fs.readFileSync(path.join(registryDir, 'payperq.ts'), 'utf8');
assert.ok(payperqSource.includes('legacy-manual'), 'expected existing live providers to be backfilled as legacy-manual entries');
assert.ok(payperqSource.includes("lastCheckedAt: '2026-04-19'"), 'expected backfilled providers to record a last-checked date');

console.log('provider registry looks good');

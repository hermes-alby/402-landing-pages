import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
const servicesDir = path.join(root, 'src/data/services');
const helperPath = path.join(root, 'src/data/service-factory.ts');
const categoryDefaultsPath = path.join(root, 'src/data/service-category-defaults.ts');

const serviceFiles = fs
  .readdirSync(servicesDir)
  .filter((file) => file.endsWith('.ts') && file !== 'index.ts');

assert.equal(fs.existsSync(helperPath), true, 'expected src/data/service-factory.ts to centralize repeated service defaults');
assert.equal(
  fs.existsSync(categoryDefaultsPath),
  true,
  'expected src/data/service-category-defaults.ts to centralize category-level copy defaults',
);

const helperSource = fs.readFileSync(helperPath, 'utf8');
assert.ok(
  helperSource.includes('createServiceDefinition'),
  'expected service factory to export createServiceDefinition',
);
assert.ok(
  helperSource.includes('defaultPaymentLabel'),
  'expected service factory to define a shared default payment label',
);

for (const file of serviceFiles) {
  const source = fs.readFileSync(path.join(servicesDir, file), 'utf8');

  assert.ok(
    source.includes('createServiceDefinition('),
    `expected ${file} to use createServiceDefinition(...)`,
  );
  assert.equal(
    source.includes('paymentLabel:'),
    false,
    `expected ${file} to stop hardcoding paymentLabel`,
  );
  assert.equal(
    source.includes('whyItWorksTitle:'),
    false,
    `expected ${file} to inherit the default whyItWorksTitle instead of repeating it`,
  );
}

console.log('data normalization looks good');

import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
const serviceSource = fs.readFileSync(path.join(root, 'src/data/services/sats4ai-translate-text.ts'), 'utf8');
const providerSource = fs.readFileSync(path.join(root, 'src/data/providers/sats4ai.ts'), 'utf8');
const builtHomepage = fs.readFileSync(path.join(root, 'dist/index.html'), 'utf8');
const builtLandingPage = fs.readFileSync(
  path.join(root, 'dist/agents/hermes/sats4ai-translate-text/index.html'),
  'utf8',
);

assert.ok(serviceSource.includes("key: 'sats4ai-translate-text'"), 'expected Sats4AI translation service definition to exist');
assert.ok(serviceSource.includes('119 languages'), 'expected service copy to mention 119 languages');
assert.ok(serviceSource.includes('1 sat per 1000 characters') || serviceSource.includes('1,000 characters per sat'), 'expected service copy to mention translation pricing');
assert.ok(providerSource.includes("key: 'sats4ai'"), 'expected Sats4AI provider file to exist');
assert.ok(providerSource.includes("supportStatus: 'supported'"), 'expected Sats4AI provider to be treated as supported after the successful paid test');
assert.ok(builtHomepage.includes('Sats4AI'), 'expected homepage to include Sats4AI');
assert.ok(builtLandingPage.includes('119 languages'), 'expected built Sats4AI landing page to mention 119 languages');
assert.ok(builtLandingPage.includes('Hola mundo desde Bitcoin'), 'expected built Sats4AI landing page to include the captured translated output');
assert.ok(builtLandingPage.includes('Install the Alby Payments Skill'), 'expected built Sats4AI landing page to keep the install CTA');

console.log('sats4ai translation landing page looks good');

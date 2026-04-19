import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
const indexSource = fs.readFileSync(path.join(root, 'src/pages/index.astro'), 'utf8');
const buildVariantsSource = fs.readFileSync(path.join(root, 'src/data/build-variants.ts'), 'utf8');
const pricingSource = fs.readFileSync(path.join(root, 'src/data/pricing.ts'), 'utf8');
const generatedPriceSource = fs.readFileSync(path.join(root, 'src/data/generated/btc-usd.ts'), 'utf8');
const builtHomepage = fs.readFileSync(path.join(root, 'dist/index.html'), 'utf8');
const builtSats4AiPage = fs.readFileSync(path.join(root, 'dist/agents/hermes/sats4ai-generate-text/index.html'), 'utf8');

assert.ok(buildVariantsSource.includes('formatServiceDisplayName'), 'expected service display names to be normalized in build variants');
assert.ok(pricingSource.includes('formatPriceLabel'), 'expected centralized price formatting helper');
assert.ok(generatedPriceSource.includes('btcUsdSpot'), 'expected build-time generated BTC price module');
assert.ok(!builtHomepage.includes('>generate-text<'), 'expected homepage to avoid raw technical service slugs');
assert.ok(builtHomepage.includes('Generate Text'), 'expected homepage to show title-cased service names');
assert.ok(!builtSats4AiPage.includes('Example request'), 'expected landing pages to stop using Example request');
assert.ok(!builtSats4AiPage.includes('Example query'), 'expected landing pages to stop using Example query');
assert.ok(builtSats4AiPage.includes('Example prompt'), 'expected landing pages to use Example prompt consistently');
assert.ok(builtSats4AiPage.includes('$'), 'expected landing pages to show USD pricing');
assert.ok(indexSource.includes('Learn more'), 'expected homepage card CTA to remain Learn more');

console.log('copy and pricing look good');

import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();

const supportedPage = fs.readFileSync(path.join(root, 'dist/agents/hermes/sats4ai-translate-text/index.html'), 'utf8');
const generateTextPage = fs.readFileSync(path.join(root, 'dist/agents/hermes/sats4ai-generate-text/index.html'), 'utf8');
const pdfPage = fs.readFileSync(path.join(root, 'dist/agents/hermes/sats4ai-convert-html-to-pdf/index.html'), 'utf8');
const imagePage = fs.readFileSync(path.join(root, 'dist/agents/hermes/sats4ai-analyze-image/index.html'), 'utf8');
const buildVariantsSource = fs.readFileSync(path.join(root, 'src/data/build-variants.ts'), 'utf8');

assert.ok(buildVariantsSource.includes('const supportStatus = service.supportStatus;'), 'expected landing-page build variants to use service-level support status');
assert.ok(supportedPage.includes('/install/hermes/'), 'expected paid-tested Sats4AI translation to point at install');
assert.ok(generateTextPage.includes('/coming-soon/hermes/'), 'expected untested Sats4AI generate-text to point at coming-soon');
assert.ok(pdfPage.includes('/coming-soon/hermes/'), 'expected untested Sats4AI convert-html-to-pdf to point at coming-soon');
assert.ok(imagePage.includes('/coming-soon/hermes/'), 'expected untested Sats4AI analyze-image to point at coming-soon');

console.log('sats4ai service support statuses look good');

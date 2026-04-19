import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
const indexSource = fs.readFileSync(path.join(root, 'src/pages/index.astro'), 'utf8');
const builtHomepage = fs.readFileSync(path.join(root, 'dist/index.html'), 'utf8');

assert.ok(
  indexSource.includes('homepageVariants'),
  'expected homepage to render a single randomized homepageVariants list instead of provider sections',
);
assert.ok(
  !indexSource.includes('providerSections.map'),
  'expected homepage to stop rendering grouped provider sections',
);
assert.ok(
  !builtHomepage.includes('Coming soon'),
  'expected homepage to hide "Coming soon" messaging',
);
for (const agentName of ['OpenClaw', 'Claude', 'Codex', 'Hermes']) {
  assert.ok(
    !builtHomepage.includes(`Explore ${agentName}`),
    `expected homepage CTA copy to stop using "Explore ${agentName}"`,
  );
}
assert.ok(
  builtHomepage.includes('Learn more'),
  'expected homepage CTA copy to include "Learn more"',
);

console.log('homepage looks good');

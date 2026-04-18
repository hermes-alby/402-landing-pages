import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();

function readBuiltPage(relPath) {
  return fs.readFileSync(path.join(root, relPath), 'utf8');
}

const customSkillPrompt = 'Install this skill as a custom skill: &lt;https://getalby.com/payments/SKILL.md&gt;';

const expectations = [
  {
    agent: 'openclaw',
    expected: customSkillPrompt,
  },
  {
    agent: 'hermes',
    expected: customSkillPrompt,
  },
  {
    agent: 'claude',
    expected: 'npx skills add getAlby/payments-skill',
  },
  {
    agent: 'codex',
    expected: 'npx skills add getAlby/payments-skill',
  },
];

for (const { agent, expected } of expectations) {
  const html = readBuiltPage(`dist/install/${agent}/index.html`);
  assert.ok(
    html.includes(expected),
    `expected install page for ${agent} to include: ${expected}`,
  );

  if (agent === 'openclaw' || agent === 'hermes') {
    assert.ok(
      html.includes(customSkillPrompt),
      `expected install page for ${agent} to include the custom skill prompt`,
    );
  }
}

console.log('install commands look good');

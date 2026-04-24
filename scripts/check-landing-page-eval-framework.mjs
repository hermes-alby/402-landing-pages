import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
const rubricPath = path.join(root, 'evals', 'rubric.json');
const promptPath = path.join(root, 'evals', 'prompt.md');
const examplesRoot = path.join(root, 'evals', 'examples');

const rubric = JSON.parse(fs.readFileSync(rubricPath, 'utf8'));

assert.equal(typeof rubric.version, 'number', 'rubric.version must be a number');
assert.equal(typeof rubric.defaultThreshold, 'number', 'rubric.defaultThreshold must be a number');
assert.ok(Array.isArray(rubric.criteria) && rubric.criteria.length > 0, 'rubric.criteria must contain at least one criterion');

const ids = new Set();
let totalWeight = 0;
for (const criterion of rubric.criteria) {
  assert.equal(typeof criterion.id, 'string', 'criterion.id must be a string');
  assert.ok(!ids.has(criterion.id), `duplicate criterion id: ${criterion.id}`);
  ids.add(criterion.id);
  assert.equal(typeof criterion.label, 'string', `criterion ${criterion.id} must have a label`);
  assert.equal(typeof criterion.weight, 'number', `criterion ${criterion.id} must have a numeric weight`);
  assert.equal(typeof criterion.guidance, 'string', `criterion ${criterion.id} must have guidance text`);
  totalWeight += criterion.weight;
}
assert.equal(totalWeight, 100, `rubric weights must add up to 100, got ${totalWeight}`);

for (const key of ['hardFailPatterns', 'softNegativePatterns', 'redFlagGuidance', 'requiredHeadings', 'legacyPromptHeadings']) {
  assert.ok(Array.isArray(rubric[key]), `rubric.${key} must be an array`);
}

const prompt = fs.readFileSync(promptPath, 'utf8').trim();
assert.ok(prompt.length > 200, 'eval prompt should exist and be non-trivial');

const loadExampleFiles = (dirName) => {
  const dir = path.join(examplesRoot, dirName);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith('.json'))
    .map((name) => path.join(dir, name));
};

const exampleFiles = [...loadExampleFiles('good'), ...loadExampleFiles('bad')];
for (const file of exampleFiles) {
  const record = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (const key of ['slug', 'agent', 'title', 'excerpt', 'source', 'recordedAt']) {
    assert.equal(typeof record[key], 'string', `${path.relative(root, file)} is missing string field ${key}`);
  }
  assert.ok(Array.isArray(record.notes), `${path.relative(root, file)} must define notes[]`);
  assert.ok(Array.isArray(record.criterionTags), `${path.relative(root, file)} must define criterionTags[]`);
}

console.log(`eval framework is valid: ${exampleFiles.length} reviewed examples, ${rubric.criteria.length} criteria, threshold ${rubric.defaultThreshold}`);

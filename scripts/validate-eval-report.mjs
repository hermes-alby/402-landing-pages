import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
const rubric = JSON.parse(fs.readFileSync(path.join(root, 'evals', 'rubric.json'), 'utf8'));
const allowedVerdicts = new Set(['pass', 'review', 'fail']);
const allowedSeverities = new Set(['high', 'medium', 'low']);
const allowedPriorities = new Set(['high', 'medium', 'low']);
const allowedTargets = new Set(['hero', 'summary', 'bullet', 'table', 'details', 'briefing', 'use-cases', 'faq', 'metadata', 'other']);

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node scripts/validate-eval-report.mjs <report.json> <report.md>');
  process.exit(1);
}

const [jsonArg, mdArg] = args;
const jsonPath = path.resolve(root, jsonArg);
const mdPath = path.resolve(root, mdArg);

const report = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const markdown = fs.readFileSync(mdPath, 'utf8');

for (const key of ['slug', 'agent', 'overallSummary']) {
  assert.equal(typeof report[key], 'string', `${key} must be a string`);
}
for (const key of ['threshold', 'totalScore']) {
  assert.equal(typeof report[key], 'number', `${key} must be a number`);
}
assert.equal(typeof report.passed, 'boolean', 'passed must be a boolean');
assert.ok(allowedVerdicts.has(report.verdict), 'verdict must be pass|review|fail');

for (const key of ['sourceFacts', 'judge']) {
  assert.equal(typeof report[key], 'object', `${key} must be an object`);
}
for (const key of ['providerName', 'serviceName', 'endpointUrl', 'supportStatus', 'resultLabel']) {
  assert.equal(typeof report.sourceFacts[key], 'string', `sourceFacts.${key} must be a string`);
}
for (const key of ['executor', 'method']) {
  assert.equal(typeof report.judge[key], 'string', `judge.${key} must be a string`);
}
assert.equal(typeof report.judge.rubricVersion, 'number', 'judge.rubricVersion must be a number');
assert.equal(typeof report.judge.promptPath, 'string', 'judge.promptPath must be a string');
assert.equal(report.judge.rubricVersion, rubric.version, 'judge.rubricVersion must match rubric.version');

assert.ok(Array.isArray(report.criteria), 'criteria must be an array');
assert.equal(report.criteria.length, rubric.criteria.length, 'criteria length must match rubric');

const rubricById = new Map(rubric.criteria.map((criterion) => [criterion.id, criterion]));
let computedScore = 0;
for (const criterion of report.criteria) {
  assert.equal(typeof criterion.id, 'string', 'criterion.id must be a string');
  const rubricCriterion = rubricById.get(criterion.id);
  assert.ok(rubricCriterion, `unknown criterion id: ${criterion.id}`);
  assert.equal(criterion.label, rubricCriterion.label, `criterion ${criterion.id} label mismatch`);
  assert.equal(typeof criterion.score, 'number', `criterion ${criterion.id} score must be a number`);
  assert.equal(criterion.maxScore, rubricCriterion.weight, `criterion ${criterion.id} maxScore must match rubric weight`);
  assert.ok(criterion.score >= 0 && criterion.score <= criterion.maxScore, `criterion ${criterion.id} score out of range`);
  assert.equal(typeof criterion.summary, 'string', `criterion ${criterion.id} summary must be a string`);
  assert.ok(Array.isArray(criterion.evidence), `criterion ${criterion.id} evidence must be an array`);
  assert.ok(Array.isArray(criterion.issues), `criterion ${criterion.id} issues must be an array`);
  computedScore += criterion.score;
}
assert.equal(report.totalScore, computedScore, 'totalScore must equal the sum of criterion scores');
assert.equal(report.passed, report.totalScore >= report.threshold, 'passed must reflect totalScore >= threshold');

for (const key of ['strengths', 'redFlags', 'recommendedEdits', 'needsHumanExamples']) {
  assert.ok(Array.isArray(report[key]), `${key} must be an array`);
}

for (const item of report.redFlags) {
  assert.ok(allowedSeverities.has(item.severity), 'red flag severity must be high|medium|low');
  for (const key of ['quote', 'reason', 'suggestion']) {
    assert.equal(typeof item[key], 'string', `red flag ${key} must be a string`);
  }
}
for (const item of report.recommendedEdits) {
  assert.ok(allowedPriorities.has(item.priority), 'recommended edit priority must be high|medium|low');
  assert.ok(allowedTargets.has(item.target), 'recommended edit target invalid');
  for (const key of ['quote', 'problem', 'suggestion']) {
    assert.equal(typeof item[key], 'string', `recommended edit ${key} must be a string`);
  }
}

assert.ok(markdown.startsWith(`# Landing page eval: ${report.agent} / ${report.slug}`), 'markdown title must match slug/agent');
for (const section of ['## Overall summary', '## Source facts', '## Criteria', '## Red flags', '## Recommended edits', '## Strengths', '## Needs more human examples']) {
  assert.ok(markdown.includes(section), `markdown missing section: ${section}`);
}

console.log(`eval report is structurally valid: ${path.relative(root, jsonPath)} + ${path.relative(root, mdPath)}`);

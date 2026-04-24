import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const decodeHtml = (value) =>
  value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');

const stripHtml = (html) =>
  decodeHtml(
    html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gis, ' ')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gis, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim(),
  );

const extractTag = (html, regex) => {
  const match = html.match(regex);
  return match ? decodeHtml(match[1].trim()) : null;
};

const readIfExists = (filePath) => {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return fs.readFileSync(filePath, 'utf8');
};

const extractSingleQuotedField = (source, fieldName) => {
  const match = source.match(new RegExp(`${fieldName}:\\s*'([^']+)'`));
  return match ? match[1] : null;
};

const titleCaseServiceName = (value) => {
  const displayTokenMap = {
    ai: 'AI',
    api: 'API',
    gpt: 'GPT',
    html: 'HTML',
    pdf: 'PDF',
    flux: 'FLUX',
  };

  return value
    .split(/\s+/)
    .flatMap((part) => part.split('-'))
    .filter(Boolean)
    .map((token) => {
      const lower = token.toLowerCase();
      if (displayTokenMap[lower]) return displayTokenMap[lower];
      if (token !== token.toLowerCase()) return token;
      return token.charAt(0).toUpperCase() + token.slice(1);
    })
    .join(' ');
};

const countOccurrences = (text, needle) => {
  if (!needle) return 0;
  const matches = text.match(new RegExp(needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'));
  return matches ? matches.length : 0;
};

const findPhraseHits = (text, phrases) =>
  phrases.filter((phrase) => text.toLowerCase().includes(phrase.toLowerCase()));

const parseArgs = (argv) => {
  const result = { slug: null, agent: 'hermes', threshold: null };
  const positional = [];

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--slug') {
      result.slug = argv[index + 1] ?? null;
      index += 1;
      continue;
    }
    if (token === '--agent') {
      result.agent = argv[index + 1] ?? result.agent;
      index += 1;
      continue;
    }
    if (token === '--threshold') {
      result.threshold = Number(argv[index + 1]);
      index += 1;
      continue;
    }
    positional.push(token);
  }

  if (!result.slug && positional[0]) result.slug = positional[0];
  if (positional[1]) result.agent = positional[1];

  return result;
};

const { slug, agent, threshold } = parseArgs(process.argv.slice(2));
if (!slug) {
  console.error('Usage: node scripts/eval-landing-page.mjs --slug <service-slug> [--agent hermes] [--threshold 70]');
  process.exit(1);
}

const rubric = JSON.parse(fs.readFileSync(path.join(root, 'evals', 'rubric.json'), 'utf8'));
const scoreThreshold = Number.isFinite(threshold) ? threshold : rubric.defaultThreshold;
const htmlPath = path.join(root, 'dist', 'agents', agent, slug, 'index.html');
const html = readIfExists(htmlPath);
if (!html) {
  console.error(`Built page not found: ${path.relative(root, htmlPath)}. Run npm run build first.`);
  process.exit(1);
}

const serviceSourcePath = path.join(root, 'src', 'data', 'services', `${slug}.ts`);
const serviceSource = readIfExists(serviceSourcePath);
if (!serviceSource) {
  console.error(`Service source not found: ${path.relative(root, serviceSourcePath)}`);
  process.exit(1);
}

const providerKey = extractSingleQuotedField(serviceSource, 'providerKey');
if (!providerKey) {
  console.error(`Could not extract providerKey from ${path.relative(root, serviceSourcePath)}`);
  process.exit(1);
}

const providerSourcePath = path.join(root, 'src', 'data', 'providers', `${providerKey}.ts`);
const providerSource = readIfExists(providerSourcePath);
if (!providerSource) {
  console.error(`Provider source not found: ${path.relative(root, providerSourcePath)}`);
  process.exit(1);
}

const serviceNameRaw = extractSingleQuotedField(serviceSource, 'name') ?? slug;
const serviceName = titleCaseServiceName(serviceNameRaw);
const providerName = extractSingleQuotedField(providerSource, 'name') ?? providerKey;
const endpointUrl = extractSingleQuotedField(serviceSource, 'endpointUrl');
const endpointPath = endpointUrl ? new URL(endpointUrl).pathname : null;
const serviceSupportStatus = extractSingleQuotedField(serviceSource, 'supportStatus') ?? 'coming-soon';
const resultLabel = extractSingleQuotedField(serviceSource, 'resultLabel');
const bodyText = stripHtml(html);
const bodyTextLower = bodyText.toLowerCase();

const title = extractTag(html, /<title>([^<]+)<\/title>/i);
const metaDescription = extractTag(html, /<meta\s+name="description"\s+content="([^"]+)"/i);
const canonical = extractTag(html, /<link\s+rel="canonical"\s+href="([^"]+)"/i);
const robots = extractTag(html, /<meta\s+name="robots"\s+content="([^"]+)"/i);
const h1 = extractTag(html, /<h1[^>]*>(.*?)<\/h1>/i);

const pageHasExamplePrompt = bodyText.includes('Example prompt');
const sourceHasExamplePrompt = /examplePrompt:\s*/.test(serviceSource);
const pageHasUseCases = bodyText.includes('Use cases');
const pageHasFaq = bodyText.includes('FAQ');
const legacyHeadingHits = findPhraseHits(bodyText, rubric.legacyPromptHeadings);
const forbiddenHits = findPhraseHits(bodyText, rubric.forbiddenPhrases);
const warningHits = findPhraseHits(bodyText, rubric.warningPhrases);
const unsupportedSupportHits = serviceSupportStatus === 'coming-soon' ? findPhraseHits(bodyText, rubric.unsupportedSupportPhrases) : [];

const providerMentions = countOccurrences(bodyText, providerName);
const serviceMentions = countOccurrences(bodyText, serviceName);
const endpointEvidence = endpointPath ? bodyText.includes(endpointPath) || bodyText.includes(endpointUrl) : false;
const pricingEvidence = /\$\d|\bsats?\b|cost/i.test(bodyText);
const resultLabelEvidence = resultLabel
  ? resultLabel
      .split(/\s+/)
      .filter((token) => token.length > 4)
      .slice(0, 4)
      .some((token) => bodyTextLower.includes(token.toLowerCase()))
  : false;

const criteria = [];

const pushCriterion = (id, label, weight, checks) => {
  const passedCount = checks.filter((check) => check.passed).length;
  const score = Math.round((passedCount / checks.length) * weight * 100) / 100;
  criteria.push({ id, label, weight, score, maxScore: weight, checks });
};

pushCriterion('metadata', 'Metadata and page structure', 20, [
  { label: 'Title exists', passed: Boolean(title), details: title ?? 'Missing <title>' },
  { label: 'Meta description exists', passed: Boolean(metaDescription), details: metaDescription ?? 'Missing meta description' },
  { label: 'Canonical exists', passed: Boolean(canonical), details: canonical ?? 'Missing canonical URL' },
  { label: 'Robots exists', passed: Boolean(robots), details: robots ?? 'Missing robots directive' },
  { label: 'H1 exists', passed: Boolean(h1), details: h1 ?? 'Missing H1' },
]);

pushCriterion('grounding', 'Grounding in observed provider/service facts', 35, [
  { label: 'Provider mentioned at least twice', passed: providerMentions >= 2, details: `mentions=${providerMentions}` },
  { label: 'Service name mentioned at least twice', passed: serviceMentions >= 2, details: `mentions=${serviceMentions}` },
  { label: 'Endpoint or route evidence appears on page', passed: endpointEvidence, details: endpointPath ?? 'No endpoint path found in source' },
  { label: 'Pricing evidence appears on page', passed: pricingEvidence, details: pricingEvidence ? 'Found cost/price text' : 'No cost evidence found' },
  { label: 'Result label evidence appears on page', passed: resultLabelEvidence, details: resultLabel ?? 'No resultLabel found in source' },
]);

pushCriterion('honesty', 'Honesty and support-state alignment', 25, [
  { label: 'No forbidden phrases', passed: forbiddenHits.length === 0, details: forbiddenHits.length ? forbiddenHits.join(', ') : 'None' },
  { label: 'No unsupported-support phrasing for coming-soon services', passed: unsupportedSupportHits.length === 0, details: unsupportedSupportHits.length ? unsupportedSupportHits.join(', ') : 'None' },
  { label: 'No warning-fluff phrases', passed: warningHits.length === 0, details: warningHits.length ? warningHits.join(', ') : 'None' },
]);

pushCriterion('style', 'Landing-page style consistency', 20, [
  { label: 'Example prompt heading is used when source has example prompt', passed: !sourceHasExamplePrompt || pageHasExamplePrompt, details: sourceHasExamplePrompt ? (pageHasExamplePrompt ? 'Found Example prompt heading' : 'Source defines examplePrompt but page heading is missing') : 'No example prompt in source' },
  { label: 'Legacy prompt headings are absent', passed: legacyHeadingHits.length === 0, details: legacyHeadingHits.length ? legacyHeadingHits.join(', ') : 'None' },
  { label: 'Use cases section exists', passed: pageHasUseCases, details: pageHasUseCases ? 'Found Use cases section' : 'Missing Use cases section' },
  { label: 'FAQ section exists', passed: pageHasFaq, details: pageHasFaq ? 'Found FAQ section' : 'Missing FAQ section' },
]);

const totalScore = Math.round(criteria.reduce((sum, item) => sum + item.score, 0) * 100) / 100;
const failingChecks = criteria.flatMap((criterion) =>
  criterion.checks.filter((check) => !check.passed).map((check) => ({ criterion: criterion.id, label: check.label, details: check.details })),
);

const examples = ['good', 'bad'].flatMap((label) => {
  const dir = path.join(root, 'evals', 'examples', label);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith('.json'))
    .map((name) => ({ label, path: path.join(dir, name), value: JSON.parse(fs.readFileSync(path.join(dir, name), 'utf8')) }))
    .filter((record) => record.value.slug === slug || record.value.criterionTags?.some((tag) => failingChecks.some((item) => item.criterion === tag)));
});

const report = {
  slug,
  agent,
  threshold: scoreThreshold,
  passed: totalScore >= scoreThreshold,
  totalScore,
  sourceFacts: {
    providerKey,
    providerName,
    serviceName,
    endpointUrl,
    serviceSupportStatus,
    resultLabel,
  },
  pageSignals: {
    title,
    metaDescription,
    canonical,
    robots,
    h1,
  },
  metrics: {
    providerMentions,
    serviceMentions,
    endpointEvidence,
    pricingEvidence,
    resultLabelEvidence,
    forbiddenHits,
    warningHits,
    unsupportedSupportHits,
    legacyHeadingHits,
  },
  criteria,
  failingChecks,
  relatedExamples: examples.map((entry) => ({
    label: entry.label,
    file: path.relative(root, entry.path),
    title: entry.value.title,
    criterionTags: entry.value.criterionTags,
    notes: entry.value.notes,
  })),
};

const reportsDir = path.join(root, 'evals', 'reports');
fs.mkdirSync(reportsDir, { recursive: true });
const baseName = `${agent}--${slug}`;
const jsonPath = path.join(reportsDir, `${baseName}.json`);
const mdPath = path.join(reportsDir, `${baseName}.md`);
fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);

const markdown = [
  `# Landing page eval: ${agent} / ${slug}`,
  '',
  `- Score: **${totalScore}/${100}**`,
  `- Threshold: **${scoreThreshold}**`,
  `- Status: **${totalScore >= scoreThreshold ? 'PASS' : 'REVIEW'}**`,
  '',
  '## Source facts',
  '',
  `- Provider: ${providerName}`,
  `- Service: ${serviceName}`,
  `- Endpoint: ${endpointUrl ?? 'unknown'}`,
  `- Support status: ${serviceSupportStatus}`,
  `- Result label: ${resultLabel ?? 'unknown'}`,
  '',
  '## Criteria',
  '',
  ...criteria.flatMap((criterion) => [
    `### ${criterion.label} — ${criterion.score}/${criterion.maxScore}`,
    '',
    ...criterion.checks.map((check) => `- [${check.passed ? 'x' : ' '}] ${check.label} — ${check.details}`),
    '',
  ]),
  '## Failing checks',
  '',
  ...(failingChecks.length
    ? failingChecks.map((item) => `- **${item.criterion}**: ${item.label} — ${item.details}`)
    : ['- None']),
  '',
  '## Related reviewed examples',
  '',
  ...(report.relatedExamples.length
    ? report.relatedExamples.map((example) => `- ${example.label.toUpperCase()}: ${example.title} (${example.file})`)
    : ['- None yet. Add reviewed excerpts under `evals/examples/good/` or `evals/examples/bad/`.']),
  '',
];

fs.writeFileSync(mdPath, `${markdown.join('\n')}\n`);

console.log(`Evaluated ${agent}/${slug}: ${totalScore}/100 (${totalScore >= scoreThreshold ? 'PASS' : 'REVIEW'})`);
console.log(`JSON report: ${path.relative(root, jsonPath)}`);
console.log(`Markdown report: ${path.relative(root, mdPath)}`);

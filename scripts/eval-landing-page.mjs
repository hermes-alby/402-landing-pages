import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

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

const extractJson = (text) => {
  const trimmed = text.trim();
  if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
    return trimmed;
  }

  const fenced = trimmed.match(/```json\s*([\s\S]*?)```/i) ?? trimmed.match(/```\s*([\s\S]*?)```/i);
  if (fenced) {
    return fenced[1].trim();
  }

  const firstBrace = trimmed.indexOf('{');
  const lastBrace = trimmed.lastIndexOf('}');
  if (firstBrace >= 0 && lastBrace > firstBrace) {
    return trimmed.slice(firstBrace, lastBrace + 1);
  }

  throw new Error('Could not extract JSON from model response');
};

const loadExamples = (slug) => {
  const examplesRoot = path.join(root, 'evals', 'examples');
  return ['good', 'bad'].flatMap((label) => {
    const dir = path.join(examplesRoot, label);
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir)
      .filter((name) => name.endsWith('.json'))
      .map((name) => ({ label, path: path.join(dir, name), value: JSON.parse(fs.readFileSync(path.join(dir, name), 'utf8')) }))
      .filter((entry) => entry.value.slug === slug || entry.value.slug === '*')
      .map((entry) => ({
        label,
        title: entry.value.title,
        excerpt: entry.value.excerpt,
        notes: entry.value.notes,
        criterionTags: entry.value.criterionTags,
        file: path.relative(root, entry.path),
      }));
  });
};

const buildPayload = ({ slug, agent, threshold, rubric, examples, html, serviceSource, providerSource }) => {
  const providerKey = extractSingleQuotedField(serviceSource, 'providerKey');
  if (!providerKey) {
    throw new Error(`Could not extract providerKey from service source for ${slug}`);
  }

  const serviceNameRaw = extractSingleQuotedField(serviceSource, 'name') ?? slug;
  const serviceName = titleCaseServiceName(serviceNameRaw);
  const providerName = extractSingleQuotedField(providerSource, 'name') ?? providerKey;
  const endpointUrl = extractSingleQuotedField(serviceSource, 'endpointUrl');
  const supportStatus = extractSingleQuotedField(serviceSource, 'supportStatus') ?? 'coming-soon';
  const resultLabel = extractSingleQuotedField(serviceSource, 'resultLabel');
  const title = extractTag(html, /<title>([^<]+)<\/title>/i);
  const metaDescription = extractTag(html, /<meta\s+name="description"\s+content="([^"]+)"/i);
  const canonical = extractTag(html, /<link\s+rel="canonical"\s+href="([^"]+)"/i);
  const robots = extractTag(html, /<meta\s+name="robots"\s+content="([^"]+)"/i);
  const h1 = extractTag(html, /<h1[^>]*>(.*?)<\/h1>/i);

  return {
    task: 'Evaluate the public quality of one landing page using the rubric and examples. Be strict.',
    slug,
    agent,
    threshold,
    rubric,
    examples,
    sourceFacts: {
      providerKey,
      providerName,
      serviceName,
      endpointUrl,
      supportStatus,
      resultLabel,
    },
    pageSignals: {
      title,
      metaDescription,
      canonical,
      robots,
      h1,
    },
    serviceSource,
    providerSource,
    pageText: stripHtml(html),
    htmlSnippet: html.slice(0, 30000),
  };
};

const createClientConfig = () => {
  const apiKey = process.env.LANDING_PAGE_EVAL_API_KEY || process.env.OPENAI_API_KEY || process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error(
      'Missing API key. Set LANDING_PAGE_EVAL_API_KEY, OPENAI_API_KEY, or OPENROUTER_API_KEY to run the LLM-based evaluator.',
    );
  }

  const defaultBaseUrl = process.env.OPENROUTER_API_KEY && !process.env.LANDING_PAGE_EVAL_BASE_URL && !process.env.OPENAI_API_KEY
    ? 'https://openrouter.ai/api/v1'
    : 'https://api.openai.com/v1';

  return {
    apiKey,
    baseUrl: (process.env.LANDING_PAGE_EVAL_BASE_URL || process.env.OPENAI_BASE_URL || defaultBaseUrl).replace(/\/$/, ''),
    model: process.env.LANDING_PAGE_EVAL_MODEL || process.env.OPENAI_MODEL || (process.env.OPENROUTER_API_KEY ? 'openai/gpt-4.1-mini' : 'gpt-4.1-mini'),
  };
};

const callJudge = async ({ prompt, payload, threshold }) => {
  const client = createClientConfig();

  const headers = {
    'content-type': 'application/json',
    authorization: `Bearer ${client.apiKey}`,
  };

  if (client.baseUrl.includes('openrouter.ai')) {
    headers['HTTP-Referer'] = 'https://github.com/hermes-alby/402-landing-pages';
    headers['X-Title'] = '402 landing pages eval';
  }

  const response = await fetch(`${client.baseUrl}/chat/completions`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      model: client.model,
      temperature: 0.2,
      response_format: { type: 'json_object' },
      messages: [
        {
          role: 'system',
          content: prompt,
        },
        {
          role: 'user',
          content: JSON.stringify({ threshold, payload }, null, 2),
        },
      ],
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`LLM eval request failed (${response.status}): ${body}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error('LLM eval response did not include message content');
  }

  return JSON.parse(extractJson(content));
};

const normaliseReport = ({ raw, payload, threshold }) => {
  const criteria = payload.rubric.criteria.map((criterion) => {
    const matched = Array.isArray(raw.criteria)
      ? raw.criteria.find((item) => item.id === criterion.id)
      : null;

    return {
      id: criterion.id,
      label: criterion.label,
      score: matched?.score ?? 0,
      maxScore: criterion.weight,
      summary: matched?.summary ?? '',
      evidence: Array.isArray(matched?.evidence) ? matched.evidence : [],
      issues: Array.isArray(matched?.issues) ? matched.issues : [],
    };
  });

  const totalScore = criteria.reduce((sum, criterion) => sum + criterion.score, 0);
  const verdict = raw.verdict ?? (totalScore >= threshold ? 'pass' : totalScore >= threshold - 15 ? 'review' : 'fail');

  return {
    slug: payload.slug,
    agent: payload.agent,
    threshold,
    passed: totalScore >= threshold,
    verdict,
    totalScore,
    sourceFacts: payload.sourceFacts,
    pageSignals: payload.pageSignals,
    criteria,
    overallSummary: raw.overallSummary ?? '',
    strengths: Array.isArray(raw.strengths) ? raw.strengths : [],
    redFlags: Array.isArray(raw.redFlags) ? raw.redFlags : [],
    recommendedEdits: Array.isArray(raw.recommendedEdits) ? raw.recommendedEdits : [],
    needsHumanExamples: Array.isArray(raw.needsHumanExamples) ? raw.needsHumanExamples : [],
    relatedExamples: payload.examples,
    modelMetadata: {
      providerBaseUrl: process.env.LANDING_PAGE_EVAL_BASE_URL || process.env.OPENAI_BASE_URL || null,
      model: process.env.LANDING_PAGE_EVAL_MODEL || process.env.OPENAI_MODEL || null,
      llmBased: true,
    },
  };
};

const buildMarkdownReport = (report) => {
  const lines = [
    `# Landing page eval: ${report.agent} / ${report.slug}`,
    '',
    `- Score: **${report.totalScore}/100**`,
    `- Threshold: **${report.threshold}**`,
    `- Verdict: **${String(report.verdict).toUpperCase()}**`,
    `- LLM-based eval: **yes**`,
    '',
    '## Overall summary',
    '',
    report.overallSummary || 'No overall summary returned.',
    '',
    '## Source facts',
    '',
    `- Provider: ${report.sourceFacts.providerName}`,
    `- Service: ${report.sourceFacts.serviceName}`,
    `- Endpoint: ${report.sourceFacts.endpointUrl ?? 'unknown'}`,
    `- Support status: ${report.sourceFacts.supportStatus}`,
    `- Result label: ${report.sourceFacts.resultLabel ?? 'unknown'}`,
    '',
    '## Criteria',
    '',
  ];

  for (const criterion of report.criteria) {
    lines.push(`### ${criterion.label} — ${criterion.score}/${criterion.maxScore}`);
    lines.push('');
    if (criterion.summary) lines.push(criterion.summary, '');
    if (criterion.evidence.length) {
      lines.push('Evidence:');
      for (const item of criterion.evidence) lines.push(`- ${item}`);
      lines.push('');
    }
    if (criterion.issues.length) {
      lines.push('Issues:');
      for (const item of criterion.issues) lines.push(`- ${item}`);
      lines.push('');
    }
  }

  lines.push('## Red flags', '');
  if (report.redFlags.length) {
    for (const item of report.redFlags) {
      lines.push(`- **${item.severity ?? 'unknown'}** — \`${item.quote ?? ''}\``);
      lines.push(`  - Reason: ${item.reason ?? ''}`);
      lines.push(`  - Suggestion: ${item.suggestion ?? ''}`);
    }
  } else {
    lines.push('- None');
  }

  lines.push('', '## Recommended edits', '');
  if (report.recommendedEdits.length) {
    for (const item of report.recommendedEdits) {
      lines.push(`- **${item.priority ?? 'unknown'}** / ${item.target ?? 'other'} — \`${item.quote ?? ''}\``);
      lines.push(`  - Problem: ${item.problem ?? ''}`);
      lines.push(`  - Suggestion: ${item.suggestion ?? ''}`);
    }
  } else {
    lines.push('- None');
  }

  lines.push('', '## Strengths', '');
  if (report.strengths.length) {
    for (const item of report.strengths) lines.push(`- ${item}`);
  } else {
    lines.push('- None noted');
  }

  lines.push('', '## Related reviewed examples', '');
  if (report.relatedExamples.length) {
    for (const item of report.relatedExamples) {
      lines.push(`- ${item.label.toUpperCase()}: ${item.title} (${item.file})`);
    }
  } else {
    lines.push('- None yet');
  }

  lines.push('', '## Needs more human examples', '');
  if (report.needsHumanExamples.length) {
    for (const item of report.needsHumanExamples) lines.push(`- ${item}`);
  } else {
    lines.push('- None');
  }

  return `${lines.join('\n')}\n`;
};

const main = async () => {
  const { slug, agent, threshold } = parseArgs(process.argv.slice(2));
  if (!slug) {
    console.error('Usage: node scripts/eval-landing-page.mjs --slug <service-slug> [--agent hermes] [--threshold 75]');
    process.exit(1);
  }

  const rubric = JSON.parse(fs.readFileSync(path.join(root, 'evals', 'rubric.json'), 'utf8'));
  const prompt = fs.readFileSync(path.join(root, 'evals', 'prompt.md'), 'utf8');
  const scoreThreshold = Number.isFinite(threshold) ? threshold : rubric.defaultThreshold;
  const htmlPath = path.join(root, 'dist', 'agents', agent, slug, 'index.html');
  const html = readIfExists(htmlPath);
  if (!html) {
    throw new Error(`Built page not found: ${path.relative(root, htmlPath)}. Run npm run build first.`);
  }

  const serviceSourcePath = path.join(root, 'src', 'data', 'services', `${slug}.ts`);
  const serviceSource = readIfExists(serviceSourcePath);
  if (!serviceSource) {
    throw new Error(`Service source not found: ${path.relative(root, serviceSourcePath)}`);
  }

  const providerKey = extractSingleQuotedField(serviceSource, 'providerKey');
  if (!providerKey) {
    throw new Error(`Could not extract providerKey from ${path.relative(root, serviceSourcePath)}`);
  }
  const providerSourcePath = path.join(root, 'src', 'data', 'providers', `${providerKey}.ts`);
  const providerSource = readIfExists(providerSourcePath);
  if (!providerSource) {
    throw new Error(`Provider source not found: ${path.relative(root, providerSourcePath)}`);
  }

  const examples = loadExamples(slug);
  const payload = buildPayload({ slug, agent, threshold: scoreThreshold, rubric, examples, html, serviceSource, providerSource });
  const raw = await callJudge({ prompt, payload, threshold: scoreThreshold });
  const report = normaliseReport({ raw, payload, threshold: scoreThreshold });

  const reportsDir = path.join(root, 'evals', 'reports');
  fs.mkdirSync(reportsDir, { recursive: true });
  const baseName = `${agent}--${slug}`;
  const jsonPath = path.join(reportsDir, `${baseName}.json`);
  const mdPath = path.join(reportsDir, `${baseName}.md`);
  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);
  fs.writeFileSync(mdPath, buildMarkdownReport(report));

  console.log(`Evaluated ${agent}/${slug}: ${report.totalScore}/100 (${String(report.verdict).toUpperCase()})`);
  console.log(`JSON report: ${path.relative(root, jsonPath)}`);
  console.log(`Markdown report: ${path.relative(root, mdPath)}`);
};

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});

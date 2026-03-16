/**
 * One-time extractor: pulls structured cert data from trailblazeprep codebase
 * and writes it to ../Salesforce Blog/tbprep-data.json for use in the
 * generate-all-cert-pages.ts pipeline.
 *
 * Run from this directory: npx tsx extract-for-blogger.ts
 */

import { EXAM_WEIGHTAGE } from './src/lib/exam-weightage-data';
import { EXAM_PREP_CONTENT, getExamPrepContent } from './src/lib/exam-prep-content-data';
import * as fs from 'fs';
import * as path from 'path';

const OUT_FILE = path.join(__dirname, '../Salesforce Blog/tbprep-data.json');
const PAGES_DIR = path.join(__dirname, 'src/app/certifications');

// ── Extract sample questions from a page.tsx file ──────────────────────────────
function extractSampleQuestions(slug: string): any[] | null {
  const pagePath = path.join(PAGES_DIR, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) return null;

  const src = fs.readFileSync(pagePath, 'utf-8');
  const start = src.indexOf('const sampleQuestions = [');
  if (start === -1) return null;

  // Find matching closing bracket
  let depth = 0;
  let i = src.indexOf('[', start);
  const begin = i;
  while (i < src.length) {
    if (src[i] === '[') depth++;
    else if (src[i] === ']') { depth--; if (depth === 0) break; }
    i++;
  }

  const raw = src.slice(begin, i + 1);
  try {
    // eslint-disable-next-line no-new-func
    return new Function(`return ${raw}`)();
  } catch {
    return null;
  }
}

// ── Extract exam details from CertificationCard props ─────────────────────────
function extractExamDetails(slug: string): Record<string, string> | null {
  const pagePath = path.join(PAGES_DIR, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) return null;

  const src = fs.readFileSync(pagePath, 'utf-8');
  const m = src.match(/examDetails=\{\{([^}]+)\}\}/);
  if (!m) return null;

  try {
    const obj: Record<string, string> = {};
    // questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100'
    const qm = m[1].match(/questions:\s*(['"]?)([^'"},]+)\1/);
    const pm = m[1].match(/passingScore:\s*['"]([^'"]+)['"]/);
    const dm = m[1].match(/duration:\s*['"]([^'"]+)['"]/);
    const cm = m[1].match(/cost:\s*['"]([^'"]+)['"]/);
    if (qm) obj.questions = qm[2].trim();
    if (pm) obj.passingScore = pm[1].trim();
    if (dm) obj.duration = dm[1].trim();
    if (cm) obj.cost = cm[1].trim();
    return Object.keys(obj).length > 0 ? obj : null;
  } catch {
    return null;
  }
}

// ── Build output JSON ──────────────────────────────────────────────────────────
const output: Record<string, any> = {};

const allSlugs = new Set([
  ...Object.keys(EXAM_WEIGHTAGE),
  ...Object.keys(EXAM_PREP_CONTENT),
]);

for (const slug of allSlugs) {
  const prep = getExamPrepContent(slug);
  const domains = (EXAM_WEIGHTAGE[slug] || []).map((s) => ({
    name: s.name,
    pct: s.percentage,
  }));
  const questions = extractSampleQuestions(slug);
  const examDetails = extractExamDetails(slug);

  output[slug] = {
    domains,
    tips: prep.examTips,
    prerequisites: prep.prerequisites,
    focusAreas: prep.focusAreas || [],
    studyStrategy: prep.studyStrategy,
    questions: questions?.slice(0, 10) ?? null, // up to 10 questions
    examDetails: examDetails ?? null,
  };
}

fs.writeFileSync(OUT_FILE, JSON.stringify(output, null, 2));
console.log(`✅ Exported ${Object.keys(output).length} certs → ${OUT_FILE}`);

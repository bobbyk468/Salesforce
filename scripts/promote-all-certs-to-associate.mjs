#!/usr/bin/env node
/**
 * Extracts AssociateSpikeBody from cert-bodies/*.tsx (skips bespoke files in SKIP_FILES, pages without scenario-tips).
 * Writes JSON under promoted-associate/, removes TSX when done, regenerates legacy loader + promoted-index.
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, unlinkSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const BODIES = join(ROOT, 'src/components/certifications/cert-bodies')
const OUT_DIR = join(ROOT, 'src/lib/cert-page-spike/promoted-associate')
const SPIKE = join(ROOT, 'src/lib/cert-page-spike')

const SKIP_FILES = new Set([])

function stripJsxComments(s) {
  return s.replace(/\/\*[\s\S]*?\*\//g, '')
}

function extractBraceBlock(src, startIdx) {
  let depth = 0
  let i = startIdx
  if (src[i] !== '[' && src[i] !== '{') return null
  const open = src[i]
  const close = open === '[' ? ']' : '}'
  for (; i < src.length; i++) {
    const ch = src[i]
    if (ch === open) depth++
    else if (ch === close) {
      depth--
      if (depth === 0) return src.slice(startIdx, i + 1)
    }
  }
  return null
}

function findConstArray(src, name) {
  const needle = `const ${name} = `
  const i = src.indexOf(needle)
  if (i === -1) return null
  const start = i + needle.length
  const ws = src.slice(start).match(/^\s*/)
  const j = start + (ws ? ws[0].length : 0)
  return extractBraceBlock(src, j)
}

function evalQuestionsLiteral(block) {
  return Function(`"use strict"; return (${block})`)()
}

function sliceBetweenMarkers(src, startNeedle, endNeedle) {
  const a = src.indexOf(startNeedle)
  if (a === -1) return null
  const b = src.indexOf(endNeedle, a + startNeedle.length)
  if (b === -1) return null
  return src.slice(a, b)
}

function decodeHtmlEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
}

function stripTags(html) {
  return decodeHtmlEntities(html.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim()
}

function jsxIntroToSegments(inner) {
  const segments = []
  let pos = 0
  const re = /<Link href="([^"]+)"[^>]*>([\s\S]*?)<\/Link>/g
  let m
  while ((m = re.exec(inner)) !== null) {
    if (m.index > pos) {
      const text = stripTags(inner.slice(pos, m.index))
        .replace(/\{\s*'\s*'\s*\}/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
      if (text) segments.push({ type: 'text', text })
    }
    segments.push({ type: 'link', href: m[1], label: stripTags(m[2]) })
    pos = m.index + m[0].length
  }
  if (pos < inner.length) {
    const text = stripTags(inner.slice(pos))
      .replace(/\{\s*'\s*'\s*\}/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
    if (text) segments.push({ type: 'text', text })
  }
  return segments
}

function parseRichBlocks(sectionSrc) {
  const blocks = []
  const re =
    /<p className="font-semibold text-gray-900[^"]*">([\s\S]*?)<\/p>\s*<p>([\s\S]*?)<\/p>/g
  let m
  while ((m = re.exec(sectionSrc)) !== null) {
    blocks.push({
      heading: stripTags(m[1]),
      body: stripTags(m[2]),
    })
  }
  return blocks
}

/** Matches multi-line or single-line self-closing CertificationCard. */
function parseCertificationCard(src) {
  const m = src.match(/<CertificationCard\s+([\s\S]*?)\n\s*\/>/)
  if (!m) return null
  const cardSlice = m[0]

  const codeM =
    cardSlice.match(/code="([^"]+)"/) ||
    cardSlice.match(/code=\{"([^"]+)"\}/) ||
    cardSlice.match(/code=\{`([^`]+)`\}/)
  if (!codeM) return null
  const code = codeM[1]

  const descM = cardSlice.match(/description="((?:\\.|[^"\\])*)"/)
  const description = descM ? descM[1].replace(/\\"/g, '"').replace(/\\n/g, '\n') : null
  if (!description) return null

  const edBlock = cardSlice.match(/examDetails=\{\{([\s\S]*?)\}\}/)
  if (!edBlock) return null
  const ed = edBlock[1]
  const qm = ed.match(/questions:\s*(\d+|'[^']*'|"[^"]*")/)
  const pm = ed.match(/passingScore:\s*['"]([^'"]*)['"]/)
  const dm = ed.match(/duration:\s*['"]([^'"]*)['"]/)
  const cm = ed.match(/cost:\s*['"]([^'"]*)['"]/)
  if (!qm || !pm || !dm || !cm) return null
  let questions = qm[1].trim()
  if (/^\d+$/.test(questions)) questions = parseInt(questions, 10)
  else questions = questions.replace(/^['"]|['"]$/g, '')

  const topicsM = cardSlice.match(/topics=\{\[([\s\S]*?)\]\s*\}/)
  if (!topicsM) return null
  const topics = []
  for (const tm of topicsM[1].matchAll(/'([^']*)'|"([^"]*)"/g)) {
    const t = tm[1] || tm[2]
    if (t) topics.push(t)
  }
  if (topics.length === 0) return null

  return {
    code,
    description,
    examDetails: {
      questions,
      passingScore: pm[1],
      duration: dm[1],
      cost: cm[1],
    },
    topics,
  }
}

function parseToc(src) {
  const m = src.match(/<CertTableOfContents\s*sections=\{\[([\s\S]*?)\]\s*\}/m)
  if (!m) return null
  const inner = m[1]
  const sections = []
  for (const sm of inner.matchAll(/\{\s*id:\s*'([^']+)',\s*title:\s*'([^']+)'\s*\}/g)) {
    sections.push({ id: sm[1], title: sm[2] })
  }
  return sections.length ? sections : null
}

function parseNextCerts(src) {
  const idx = src.indexOf('aria-labelledby="next-certs-heading"')
  if (idx === -1) return undefined
  const slice = src.slice(idx, idx + 4500)
  const h2m = slice.match(/<h2[^>]*>([^<]+)<\/h2>/)
  const pm = slice.match(/<p className="text-sm text-gray-700 mb-2">([\s\S]*?)<\/p>/)
  if (!h2m || !pm) return undefined
  const links = []
  for (const lm of slice.matchAll(
    /<Link href="([^"]+)"[^>]*className="[^"]*"[^>]*>([\s\S]*?)<\/Link>/g,
  )) {
    links.push({ href: lm[1], label: stripTags(lm[2]) })
  }
  if (links.length === 0) return undefined
  return {
    heading: stripTags(h2m[1]),
    intro: stripTags(pm[1]),
    links,
  }
}

function parsePracticeSuffix(src) {
  const m = src.match(
    /getPracticeQuestionsIntro\(\s*sampleQuestions\.length\s*,\s*("(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`)\s*\)/,
  )
  if (!m) return undefined
  const s = m[1]
  if (s.startsWith('"')) {
    try {
      return JSON.parse(s)
    } catch {
      return undefined
    }
  }
  if (s.startsWith('`')) return s.slice(1, -1).replace(/\\`/g, '`')
  return undefined
}

function ensureHeatmapToc(sections) {
  const has = sections.some((s) => s.id === 'difficulty-heatmap')
  if (has) return sections
  const pq = sections.findIndex((s) => s.id === 'practice-questions')
  if (pq === -1) return [...sections]
  const next = [...sections]
  next.splice(pq, 0, { id: 'difficulty-heatmap', title: 'Difficulty Heatmap' })
  return next
}

function slugToImportName(slug) {
  return slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/-/g, '')
}

function regeneratePromotedIndex() {
  const jsonFiles = readdirSync(OUT_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace(/\.json$/, ''))
    .sort()

  const lines = [
    '/** Auto-generated by scripts/promote-all-certs-to-associate.mjs */',
    "import type { AssociateSpikeBody } from '../types'",
    ...jsonFiles.map((s) => `import ${slugToImportName(s)}Json from './${s}.json'`),
    '',
    'function asBody<T>(x: T): AssociateSpikeBody {',
    "  return x as unknown as AssociateSpikeBody",
    '}',
    '',
    '/** Slugs with JSON bodies (associate template via registry). */',
    'export const PROMOTED_ASSOCIATE_SLUGS = [',
    ...jsonFiles.map((s) => `  '${s}',`),
    '] as const',
    '',
    'export type PromotedAssociateSlug = (typeof PROMOTED_ASSOCIATE_SLUGS)[number]',
    '',
    'export const promotedAssociateCertBodies: Record<PromotedAssociateSlug, AssociateSpikeBody> = {',
    ...jsonFiles.map((s) => `  '${s}': asBody(${slugToImportName(s)}Json),`),
    '}',
    '',
  ]
  writeFileSync(join(OUT_DIR, 'promoted-index.ts'), lines.join('\n'), 'utf8')
}

function regenerateLegacyLoader(remaining) {
  const slugListTs = remaining.map((s) => `  '${s}',`).join('\n')
  writeFileSync(
    join(SPIKE, 'legacy-cert-slugs.generated.ts'),
    `/** Auto-generated by scripts/promote-all-certs-to-associate.mjs */\nexport const LEGACY_CERT_SLUGS = [\n${slugListTs}\n] as const\n\nexport type LegacyCertSlug = (typeof LEGACY_CERT_SLUGS)[number]\n`,
    'utf8',
  )
  const cases = remaining
    .map(
      (s) =>
        `    case '${s}':\n      return (await import('@/components/certifications/cert-bodies/${s}')).default`,
    )
    .join('\n')
  writeFileSync(
    join(SPIKE, 'load-legacy-cert-body.ts'),
    `/** Auto-generated by scripts/promote-all-certs-to-associate.mjs */
import type { ComponentType } from 'react'

export type LegacyCertPageBody = ComponentType

export async function loadLegacyCertBody(slug: string): Promise<LegacyCertPageBody | null> {
  switch (slug) {
${cases}
    default:
      return null
  }
}
`,
    'utf8',
  )
}

function extractOne(path, fname) {
  const slug = fname.replace(/\.tsx$/, '')
  if (existsSync(join(OUT_DIR, `${slug}.json`)) && !existsSync(path)) {
    return { slug, skip: true, reason: 'already promoted (json exists)' }
  }

  const raw = readFileSync(path, 'utf8')
  const src = stripJsxComments(raw)

  if (SKIP_FILES.has(fname)) {
    return { slug, skip: true, reason: 'SKIP_FILES' }
  }
  if (src.includes('details className="group"')) {
    return { slug, skip: true, reason: 'collapsible details' }
  }

  const slugM = src.match(/const slug = '([^']+)'/)
  if (!slugM || slugM[1] !== slug) {
    return { slug, skip: true, reason: 'slug mismatch' }
  }

  const qBlock = findConstArray(src, 'sampleQuestions')
  if (!qBlock) return { slug, skip: true, reason: 'no sampleQuestions' }

  let sampleQuestions
  try {
    sampleQuestions = evalQuestionsLiteral(qBlock)
  } catch (e) {
    return { slug, skip: true, reason: `eval questions: ${e.message}` }
  }

  const card = parseCertificationCard(src)
  if (!card) return { slug, skip: true, reason: 'certificationCard parse' }

  const idxKC = src.indexOf('id="key-concepts"')
  const idxST = src.indexOf('id="scenario-tips"', idxKC + 1)
  const idxHM = src.indexOf('<DifficultyHeatmap', idxKC + 1)
  if (idxKC === -1 || idxHM === -1) return { slug, skip: true, reason: 'no key-concepts or heatmap' }

  const hasScenario = idxST !== -1 && idxST < idxHM
  const keySlice = hasScenario
    ? src.slice(idxKC, idxST)
    : src.slice(idxKC, idxHM)

  const keyH2 = keySlice.match(
    /<h2 className="text-2xl font-bold text-gray-900 mb-4">([^<]+)<\/h2>/,
  )
  if (!keyH2) return { slug, skip: true, reason: 'no key h2' }
  const keyBlocks = parseRichBlocks(keySlice)
  if (keyBlocks.length === 0) return { slug, skip: true, reason: 'no key blocks' }

  let scenarioTips
  if (hasScenario) {
    const scenSlice = src.slice(idxST, idxHM)
    const scenH2 = scenSlice.match(
      /<h2 className="text-2xl font-bold text-gray-900 mb-4">([^<]+)<\/h2>/,
    )
    const scenIntro = scenSlice.match(
      /<p className="text-sm text-gray-600 mb-5">\s*([\s\S]*?)<\/p>/,
    )
    if (!scenH2 || !scenIntro) return { slug, skip: true, reason: 'scenario header/intro' }
    const scenBlocks = parseRichBlocks(scenSlice)
    if (scenBlocks.length === 0) return { slug, skip: true, reason: 'no scenario blocks' }
    scenarioTips = {
      h2: stripTags(scenH2[1]),
      intro: stripTags(scenIntro[1]),
      blocks: scenBlocks,
    }
  } else {
    scenarioTips = {
      h2: 'How to Pass',
      intro:
        'This practice page is built for timed multiple-choice rehearsal. Use the heatmap below to find weak sections, then revisit the key concepts above and repeat full question sets until you are consistently above the passing threshold.',
      blocks: [
        {
          heading: 'Simulate real exam pacing',
          body: 'Answer practice questions in a single sitting without reference material to build the stamina and decision speed needed for the full exam window.',
        },
        {
          heading: 'Review every explanation',
          body: 'Read why each wrong option is incorrect — the real exam reuses the same underlying concepts in new phrasing.',
        },
      ],
    }
  }

  let toc = parseToc(src)
  if (!toc) {
    toc = [
      { id: 'exam-prep', title: 'Exam Prep Content' },
      { id: 'key-concepts', title: 'Key Concepts' },
      { id: 'scenario-tips', title: 'How to Pass' },
      { id: 'difficulty-heatmap', title: 'Difficulty Heatmap' },
      { id: 'practice-questions', title: 'Practice Questions' },
      { id: 'more-questions', title: 'Get More Questions' },
      { id: 'related-certs', title: 'Related Certifications' },
      { id: 'faq', title: 'Exam FAQs' },
    ]
  }
  toc = ensureHeatmapToc(toc)

  let introLead
  if (!src.includes('<CertIntroParagraph slug={slug} />')) {
    const introM = src.match(
      /<CertPageSeo[^/]+\/>\s*<p className="text-sm text-gray-600 mb-6">\s*([\s\S]*?)<\/p>/m,
    )
    if (introM) {
      introLead = jsxIntroToSegments(introM[1])
      if (introLead.length === 0) introLead = undefined
    }
  }

  const nextCertsAfter = parseNextCerts(src)
  const practiceQuestionsIntroSuffix = parsePracticeSuffix(src)

  const body = {
    template: 'associate',
    ...(introLead ? { introLead } : {}),
    ...(practiceQuestionsIntroSuffix ? { practiceQuestionsIntroSuffix } : {}),
    certificationCard: card,
    keyConcepts: {
      h2: stripTags(keyH2[1]),
      blocks: keyBlocks,
    },
    scenarioTips,
    ...(nextCertsAfter ? { nextCertsAfter } : {}),
    tocSections: toc,
    sampleQuestions,
  }

  return { slug, body }
}

mkdirSync(OUT_DIR, { recursive: true })

const files = readdirSync(BODIES).filter((f) => f.endsWith('.tsx')).sort()
const skipped = []

for (const fname of files) {
  const path = join(BODIES, fname)
  const slug = fname.replace(/\.tsx$/, '')
  const r = extractOne(path, fname)
  if (r.skip) {
    skipped.push(r)
    continue
  }
  writeFileSync(join(OUT_DIR, `${r.slug}.json`), JSON.stringify(r.body, null, 2), 'utf8')
  unlinkSync(path)
  console.log('promoted', r.slug)
}

regeneratePromotedIndex()

const remaining = readdirSync(BODIES)
  .filter((f) => f.endsWith('.tsx'))
  .map((f) => f.replace(/\.tsx$/, ''))
  .sort()
regenerateLegacyLoader(remaining)

const jsonCount = readdirSync(OUT_DIR).filter((f) => f.endsWith('.json')).length
console.log('\nJSON associate bodies:', jsonCount, 'Legacy TSX:', remaining.length, 'Skipped:', skipped.length)
for (const s of skipped) {
  if (!s.reason?.includes('already promoted')) {
    console.log('  skip', s.slug, '-', s.reason)
  }
}

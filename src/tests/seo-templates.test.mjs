import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'
import test from 'node:test'

const projectRoot = process.cwd()
const buildRoot = path.join(projectRoot, '.next/server/app')
const origin = 'https://www.trailblazeprep.com'
const require = createRequire(path.join(projectRoot, 'package.json'))
const { parseDocument, DomUtils } = require('htmlparser2')
const { selectAll } = require('css-select')
const ts = require('typescript')

function loadExamCodeCatalog() {
  const sourcePath = path.join(projectRoot, 'src/lib/certification-exam-codes.ts')
  const source = fs.readFileSync(sourcePath, 'utf8')
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText
  const loaded = { exports: {} }
  new Function('exports', 'module', compiled)(loaded.exports, loaded)
  return loaded.exports
}

const { SLUG_TO_EXAM_CODE, getRecognizedExamCode } = loadExamCodeCatalog()

const roleSlugs = [
  'associate',
  'administrator',
  'developer',
  'consultant',
  'marketing',
  'architect',
  'accredited-professional',
  'sales',
  'designer',
  'tableau',
  'claude',
]

function loadBuiltPage(route) {
  assert.ok(
    fs.existsSync(buildRoot),
    'Missing .next/server/app; run `npm run build` before this rendered SEO test.',
  )
  const htmlPath = path.join(buildRoot, route === '/' ? 'index.html' : `${route.slice(1)}.html`)
  assert.ok(fs.existsSync(htmlPath), `Missing built HTML for ${route}; rebuild before testing.`)
  const document = parseDocument(fs.readFileSync(htmlPath, 'utf8'), { decodeEntities: true })
  const nodes = (selector) => selectAll(selector, document)
  const schemas = nodes('script[type="application/ld+json"]').map((node) => JSON.parse(DomUtils.textContent(node)))
  return { nodes, schemas }
}

function visibleText(node) {
  return DomUtils.textContent(node).replace(/\s+/g, ' ').trim()
}

function assertCanonical(page, route) {
  const canonicalLinks = page.nodes('link[rel="canonical"]')
  assert.equal(canonicalLinks.length, 1, `${route} should have one canonical`)
  assert.equal(canonicalLinks[0].attribs.href, `${origin}${route === '/' ? '' : route}`, `${route} canonical URL`)
}

test('built homepage contains crawlable links to all role hubs', () => {
  const page = loadBuiltPage('/')
  assertCanonical(page, '/')
  const hrefs = page.nodes('a[href]').map((node) => node.attribs.href)
  for (const slug of roleSlugs) {
    assert.ok(hrefs.includes(`/certifications/role/${slug}`), `homepage role link: ${slug}`)
  }
})

test('exam-code catalog accepts every established alias and rejects descriptive pseudo-codes', () => {
  assert.equal(Object.keys(SLUG_TO_EXAM_CODE).length, 16)
  for (const [slug, code] of Object.entries(SLUG_TO_EXAM_CODE)) {
    assert.equal(getRecognizedExamCode(slug), code, `${slug} should resolve to ${code}`)
  }
  for (const slug of ['technical-architect-evaluation', 'technical-architect-review-board', 'unknown-exam']) {
    assert.equal(getRecognizedExamCode(slug), undefined, `${slug} must not be represented as an exam-code alias`)
  }
})

function loadStudyGuideMap() {
  const source = fs.readFileSync(path.join(projectRoot, 'src/lib/cert-seo-data.ts'), 'utf8')
  const block = source.match(/export const SLUG_TO_STUDY_GUIDE:\s*Record<[^>]+>\s*=\s*\{([\s\S]*?)\n\}/)
  assert.ok(block, 'Could not find the canonical study-guide route map')
  return Object.fromEntries([...block[1].matchAll(/(?:'([^']+)'|([A-Za-z0-9-]+)):\s*'([^']+)'/g)]
    .map((match) => [match[1] ?? match[2], match[3]]))
}

test('each built role hub ItemList matches its visible directory links in order', () => {
  for (const slug of roleSlugs) {
    const route = `/certifications/role/${slug}`
    const page = loadBuiltPage(route)
    assertCanonical(page, route)

    const lists = page.schemas.filter(
      (schema) => schema['@type'] === 'ItemList' && /certification resources$/.test(schema.name),
    )
    assert.equal(lists.length, 1, `${route} should have one certification ItemList`)

    const visibleLinks = page.nodes('a.card-hover')
    const expected = visibleLinks.map((node, index) => ({
      position: index + 1,
      name: visibleText(node),
      url: new URL(node.attribs.href, origin).href,
    }))
    const actual = lists[0].itemListElement.map(({ position, name, url }) => ({ position, name, url }))
    assert.deepEqual(actual, expected, `${route} ItemList should match visible link labels, URLs, and order`)
  }
})

test('every canonical certification page has a readable, appropriately prefixed title and self canonical', () => {
  const certDirectory = path.join(buildRoot, 'certifications')
  assert.ok(fs.existsSync(certDirectory), 'Missing built certification pages; run `npm run build` first.')
  const files = fs.readdirSync(certDirectory).filter((file) => file.endsWith('.html'))
  const canonicalPages = []

  for (const file of files) {
    const slug = file.slice(0, -'.html'.length)
    const route = `/certifications/${slug}`
    const page = loadBuiltPage(route)
    const canonical = page.nodes('link[rel="canonical"]')
    assert.equal(canonical.length, 1, `${route} should have one canonical`)
    if (canonical[0].attribs.href !== `${origin}${route}`) continue

    const robots = page.nodes('meta[name="robots"]')[0]?.attribs.content ?? ''
    if (/noindex/i.test(robots)) continue
    const title = visibleText(page.nodes('head title')[0])
    assert.ok(title, `${route} title must not be blank`)
    assert.ok(title.length <= 60, `${route} title exceeds 60 characters: ${title}`)
    assert.ok(!/(?:…|\.{3})/.test(title), `${route} title must not be visibly truncated: ${title}`)

    const examCode = getRecognizedExamCode(slug)
    if (examCode) {
      assert.ok(title.startsWith(`${examCode} `), `${route} title should start with ${examCode}: ${title}`)
    } else {
      assert.ok(!/^Free\b/i.test(title), `${route} title should lead with a credential name: ${title}`)
    }
    const statusTitle = ['ai-associate', 'education-cloud-consultant'].includes(slug) || slug.startsWith('claude-certified-')
    if (!statusTitle) {
      assert.match(title, /Practice Exam(?: \d{4})$/, `${route} title should retain practice intent: ${title}`)
    }
    const slugWords = slug.split('-').filter((word) => word.length >= 4)
    const adminAlias = slug === 'cpq-administrator' && /\badmin\b/i.test(title)
    assert.ok(adminAlias || slugWords.some((word) => title.toLowerCase().includes(word)), `${route} title should name its credential: ${title}`)
    canonicalPages.push({ route, slug, page, title })
  }

  assert.ok(canonicalPages.length >= 85, `Expected the canonical catalog, found ${canonicalPages.length} pages`)
  console.log(`Validated ${canonicalPages.length} canonical certification pages.`)
  assert.equal(new Set(canonicalPages.map(({ title }) => title.toLowerCase())).size, canonicalPages.length,
    'Canonical certification page titles should be unique')
  return canonicalPages
})

test('all published study guides have clear titles, self canonicals, and reciprocal certification links', (t) => {
  const certDirectory = path.join(buildRoot, 'certifications')
  assert.ok(fs.existsSync(certDirectory), 'Missing built certification pages; run `npm run build` first.')
  const certFiles = fs.readdirSync(certDirectory).filter((file) => file.endsWith('.html'))
  const guideMap = loadStudyGuideMap()
  const guideFiles = fs.readdirSync(buildRoot).filter((file) => file.endsWith('-study-guide.html'))
  assert.equal(guideFiles.length, Object.keys(guideMap).length, 'Built guides should match the published guide map')
  const seenTitles = new Set()
  for (const [slug, route] of Object.entries(guideMap)) {
    const guide = loadBuiltPage(route)
    assertCanonical(guide, route)
    const title = visibleText(guide.nodes('head title')[0])
    if (slug === 'ai-associate') {
      assert.match(title, /Historical Learning Guide/, `${route} should retain its historical status wording`)
    } else {
      assert.ok(title.includes('Study Guide'), `${route} title should retain “Study Guide”: ${title}`)
    }
    assert.ok(title.length <= 60, `${route} title exceeds 60 characters: ${title}`)
    assert.ok(!/(?:…|\.{3})/.test(title), `${route} title must not be visibly truncated: ${title}`)
    assert.ok(!/^Free\b/i.test(title), `${route} title should lead with a credential name or code: ${title}`)
    assert.ok(!seenTitles.has(title.toLowerCase()), `Duplicate study-guide title: ${title}`)
    seenTitles.add(title.toLowerCase())

    const certRoute = `/certifications/${slug}`
    const cert = loadBuiltPage(certRoute)
    assertCanonical(cert, certRoute)
    assert.ok(cert.nodes('a[href]').some((node) => node.attribs.href === route || node.attribs.href.startsWith(`${route}#`)),
      `${certRoute} should link to its mapped guide ${route}`)
    assert.ok(guide.nodes('a[href]').some((node) => node.attribs.href === certRoute || node.attribs.href.startsWith(`${certRoute}#`)),
      `${route} should link back to its mapped certification page ${certRoute}`)
    const examCode = getRecognizedExamCode(slug)
    if (examCode) {
      assert.ok(title.startsWith(`${examCode} `), `${route} title should lead with ${examCode}: ${title}`)
    }
  }
  t.diagnostic(`Validated ${guideFiles.length} built study guides against ${Object.keys(guideMap).length} mapped certification pairs.`)
})

test('initial practice questions and Quiz JSON-LD agree across the canonical certification catalog', () => {
  const certDirectory = path.join(buildRoot, 'certifications')
  assert.ok(fs.existsSync(certDirectory), 'Missing built certification pages; run `npm run build` first.')
  const files = fs.readdirSync(certDirectory).filter((file) => file.endsWith('.html'))
  let questionPages = 0
  let questionCount = 0

  for (const file of files) {
    const slug = file.slice(0, -'.html'.length)
    const route = `/certifications/${slug}`
    const page = loadBuiltPage(route)
    const canonical = page.nodes('link[rel="canonical"]')[0]?.attribs.href
    const robots = page.nodes('meta[name="robots"]')[0]?.attribs.content ?? ''
    if (canonical !== `${origin}${route}` || /noindex/i.test(robots)) continue

    const quiz = page.schemas.find((schema) => schema['@type'] === 'Quiz')
    if (!quiz) continue
    const prompts = page.nodes('#practice-questions p.whitespace-pre-wrap')
      .filter((node) => node.attribs.class.includes('text-gray-800'))
      .map((node) => DomUtils.textContent(node))
    const choices = page.nodes('#practice-questions .question-option > span > span:last-child')
      .map((node) => DomUtils.textContent(node))
    assert.ok(prompts.length > 0, `${route} Quiz schema should have visible initial questions`)
    assert.deepEqual(prompts, quiz.hasPart.map((question) => question.text), `${route} visible prompts should match Quiz JSON-LD`)

    let schemaChoiceCount = 0
    for (const question of quiz.hasPart) {
      const accepted = question.acceptedAnswer === undefined
        ? []
        : Array.isArray(question.acceptedAnswer) ? question.acceptedAnswer : [question.acceptedAnswer]
      const answers = [...accepted, ...(question.suggestedAnswer ?? [])]
      for (const answer of answers) {
        assert.ok(choices.includes(answer.text), `${route} schema answer must be visible in the initial question options`)
      }
      schemaChoiceCount += answers.length
    }
    assert.equal(choices.length, schemaChoiceCount, `${route} visible option count should match Quiz JSON-LD`)
    questionPages += 1
    questionCount += prompts.length
  }

  assert.ok(questionPages >= 85, `Expected 85+ canonical pages with visible questions; found ${questionPages}`)
  assert.ok(questionCount > 0, 'No initial practice questions were verified')
  console.log(`Verified ${questionCount} initial prompts across ${questionPages} canonical pages.`)
})

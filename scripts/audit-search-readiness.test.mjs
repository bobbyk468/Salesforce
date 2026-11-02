import test from 'node:test'
import assert from 'node:assert/strict'
import { addDuplicateFindings, canonicalTarget, classifyPage, fetchManual, networkFailure, parseHtml } from './audit-search-readiness.mjs'

test('reports language, viewport, ambiguous anchors, and image accessibility', () => {
  const parsed = parseHtml(`<html lang="en"><head><meta name="viewport" content="width=device-width, initial-scale=1"></head>
    <body><div id="section"></div><div id="section"></div><img src="/missing-alt.png"><img src="/decorative.png" alt=""></body></html>`,
    'https://www.trailblazeprep.com/test')
  assert.equal(parsed.language, 'en')
  assert.match(parsed.viewport, /device-width/)
  assert.deepEqual(parsed.duplicateIds, ['section'])
  assert.deepEqual(parsed.imagesWithoutAlt, ['/missing-alt.png'])
  const result = classifyPage({ url: 'https://www.trailblazeprep.com/test', status: 200, ...parsed })
  assert(result.warnings.some(issue => issue.includes('Duplicate element IDs')))
  assert(result.warnings.some(issue => issue.includes('missing alt')))
  const missing = classifyPage({ url: 'https://www.trailblazeprep.com/test', status: 200, ...parsed, language: '', viewport: '' })
  assert(missing.failures.includes('Missing document language'))
  assert(missing.failures.includes('Missing responsive viewport'))
})

test('extracts head metadata, robots, link fragments, IDs, and Article JSON-LD', () => {
  const html = `<!doctype html><html><head>
    <title>Administrator Certification Guide</title>
    <meta name="description" content="A practical guide to the administrator certification exam and study plan.">
    <link rel="canonical" href="https://www.trailblazeprep.com/certifications/administrator">
    <meta name="googlebot" content="index,follow">
    <script type="application/ld+json">{"@type":"Article","mainEntityOfPage":{"@id":"https://www.trailblazeprep.com/certifications/administrator"}}</script>
  </head><body><h1>Administrator</h1><a href='/certifications/admin#overview'>Internal</a><div id='overview'></div>
  <a href="/certifications/other#faq%20answers">Encoded anchor</a><div id="faq answers"></div>
  <a href="https://external.example/path">External</a></body></html>`
  const parsed = parseHtml(html, 'https://www.trailblazeprep.com/certifications/administrator', {})
  assert.equal(parsed.title, 'Administrator Certification Guide')
  assert.match(parsed.description, /practical guide/)
  assert.equal(parsed.canonicalCount, 1)
  assert.equal(parsed.h1s.length, 1)
  assert.equal(parsed.noindex, false)
  assert.deepEqual(parsed.jsonLdErrors, [])
  assert.equal(parsed.jsonLd[0].mainEntityOfPage['@id'], parsed.canonical)
  assert.deepEqual(parsed.internalLinks.map((link) => link.fragment), ['#overview', '#faq%20answers'])
  assert(parsed.ids.includes('faq answers'))
})

test('flags noindex from either meta or response header and records invalid JSON-LD', () => {
  const parsed = parseHtml(`<html><head><title>Test page</title><meta name='robots' content='index, NOINDEX'>
    <script type='application/ld+json'>{not valid json}</script></head><body><h1>One</h1></body></html>`,
  'https://www.trailblazeprep.com/test', { 'x-robots-tag': 'noindex, nofollow' })
  assert.equal(parsed.noindex, true)
  assert.equal(parsed.jsonLdErrors.length, 1)
  const classified = classifyPage({
    url: 'https://www.trailblazeprep.com/test', status: 200, title: parsed.title,
    description: '', descriptionCount: 0, canonical: '', canonicalCount: 0,
    h1s: parsed.h1s, noindex: parsed.noindex, jsonLdErrors: parsed.jsonLdErrors, jsonLd: [],
    titleCount: 1,
  }, 'https://www.trailblazeprep.com')
  assert(classified.failures.some((issue) => issue.includes('noindex')))
  assert(classified.failures.some((issue) => issue.includes('Invalid JSON-LD')))
  assert(classified.failures.some((issue) => issue.includes('Missing meta description')))
})

test('does not treat an SVG title as a second document title', () => {
  const parsed = parseHtml(`<html><head><title>Page title</title></head><body><svg><title>Chart description</title></svg></body></html>`,
    'https://www.trailblazeprep.com/test')
  assert.equal(parsed.titleCount, 1)
  assert.equal(parsed.title, 'Page title')
})

test('Article mainEntityOfPage must resolve to the page canonical', () => {
  const parsed = parseHtml(`<html><head><title>Test page certification guide</title>
    <meta name="description" content="A long enough description for a meaningful test fixture here.">
    <link rel="canonical" href="https://www.trailblazeprep.com/test">
    <script type="application/ld+json">{"@type":"Article","mainEntityOfPage":"https://www.trailblazeprep.com/other"}</script>
    </head><body><h1>Test</h1></body></html>`, 'https://www.trailblazeprep.com/test')
  const result = classifyPage({
    url: 'https://www.trailblazeprep.com/test', status: 200, ...parsed,
  }, 'https://www.trailblazeprep.com')
  assert(result.failures.some((issue) => issue.includes('mainEntityOfPage')))
})

test('HTTP failures and redirects are critical; key-value fragments are not missing anchors', () => {
  const parsed = parseHtml(`<a href='#overview'>Contents</a><a href='/contact#exam=ADM-201'>Exam form</a><a href='/contact#missing'>Anchor</a><a href='https://www.trailblazeprep.com/contact'>Production absolute</a>`,
    'https://www.trailblazeprep.com/certifications/administrator')
  assert.deepEqual(parsed.internalLinks.map((link) => link.fragment), ['#overview', '', '#missing', ''])
  const result = classifyPage({
    url: 'https://www.trailblazeprep.com/old', status: 301, location: '/new', title: '', description: '',
    canonical: '', canonicalCount: 0, titleCount: 0, descriptionCount: 0, h1s: [], noindex: false,
    jsonLdErrors: [], jsonLd: [],
  }, 'https://www.trailblazeprep.com')
  assert(result.failures.some((issue) => issue.includes('HTTP status 301')))
})

test('local fetch targets keep production canonicals and production links map to local paths', () => {
  assert.equal(canonicalTarget('http://localhost:3000/certifications/a', 'https://www.trailblazeprep.com'),
    'https://www.trailblazeprep.com/certifications/a')
  const parsed = parseHtml(`<a href='https://www.trailblazeprep.com/contact#contact'>Contact</a>`,
    'http://localhost:3000/certifications/a')
  assert.equal(parsed.internalLinks[0].url, 'http://localhost:3000/contact')
  assert.equal(parsed.internalLinks[0].fragment, '#contact')
})

test('fetch network errors remain explicit hard-failure evidence', async () => {
  await assert.rejects(fetchManual('https://example.invalid/', async () => { throw new Error('offline fixture') }), /offline fixture/)
  assert.equal(networkFailure(new Error('offline fixture')), 'Network error: offline fixture')
})

test('duplicate titles/descriptions are grouped by trimmed, case-insensitive content', () => {
  const pages = [
    { url: '/one', title: ' Same title ', description: 'Same description' },
    { url: '/two', title: 'same TITLE', description: ' same description ' },
    { url: '/three', title: 'Unique title', description: '' },
  ]
  assert.equal(addDuplicateFindings(pages, 'title').length, 1)
  assert.equal(addDuplicateFindings(pages, 'title')[0].urls.length, 2)
  assert.equal(addDuplicateFindings(pages, 'description').length, 1)
})

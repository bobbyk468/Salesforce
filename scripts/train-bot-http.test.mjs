import test from 'node:test'
import assert from 'node:assert/strict'
import { chunkText, extractPage, validateBase, validateURL } from './train-bot-http.mjs'

test('extracts the page title and semantic content while preserving lifecycle and review notices', () => {
  const page = extractPage(`<!doctype html><html><head><title>Fallback title</title></head><body>
    <header>Header noise</header><nav>Nav noise</nav>
    <main><h1>Administrator &amp; AI</h1>
      <p>This certification lifecycle notice remains visible and is important for current learners.</p>
      <h2>Unverified: review this exam update</h2>
      <p>This claim is unverified until official sources confirm the latest exam requirements.</p>
      <ul><li>Published item one stays in the extracted content.</li></ul>
      <dl><dt>Lifecycle</dt><dd>Retired exams are shown for historical reference only.</dd></dl>
      <div aria-hidden="true"><p>Hidden noise that must not appear in training.</p></div>
      <div class="no-print"><p>Print-only noise that must not appear in training.</p></div>
    </main><aside>Aside noise</aside><footer>Footer noise</footer>
    <script>script noise</script><style>style noise</style></body></html>`)
  assert.equal(page.title, 'Administrator & AI')
  assert.match(page.text, /certification lifecycle notice remains visible/)
  assert.match(page.text, /Unverified: review this exam update/)
  assert.match(page.text, /Retired exams are shown/)
  for (const excluded of ['Header noise', 'Nav noise', 'Hidden noise', 'Print-only noise', 'Aside noise', 'Footer noise', 'script noise', 'style noise']) {
    assert.doesNotMatch(page.text, new RegExp(excluded))
  }
})

test('uses the head title when no H1 exists and decodes entities', () => {
  assert.deepEqual(extractPage('<html><head><title>Fallback &amp; title</title></head><body><main><p>A &amp; B are entities.</p></main></body></html>'), {
    title: 'Fallback & title', text: 'A & B are entities.', pageNotice: '',
  })
})

test('chunks at paragraph boundaries using the existing 25-word minimum and 350-word maximum', () => {
  const p1 = Array.from({ length: 170 }, (_, i) => `alpha${i}`).join(' ')
  const p2 = Array.from({ length: 170 }, (_, i) => `beta${i}`).join(' ')
  const p3 = Array.from({ length: 30 }, (_, i) => `gamma${i}`).join(' ')
  const chunks = chunkText(`${p1}\n\n${p2}\n\n${p3}`)
  assert.equal(chunks.length, 2)
  assert.equal(chunks[0], `${p1}\n\n${p2}`)
  assert.equal(chunks[1], p3)
  assert.deepEqual(chunkText(Array.from({ length: 24 }, (_, i) => `word${i}`).join(' ')), [])
})

test('accepts only canonical HTTPS public URLs and excludes service/OG paths', () => {
  assert.equal(validateURL('https://www.trailblazeprep.com/adm-201').pathname, '/adm-201')
  for (const url of [
    'http://www.trailblazeprep.com/page',
    'https://trailblazeprep.com/page',
    'https://evil.example/page',
    'https://www.trailblazeprep.com/api/chat',
    'https://www.trailblazeprep.com/_next/image',
    'https://www.trailblazeprep.com/og?title=bad',
    'https://user@www.trailblazeprep.com/page',
  ]) assert.throws(() => validateURL(url))
})

test('restricts --base to production or local HTTP(S) origins', () => {
  assert.equal(validateBase('https://www.trailblazeprep.com'), 'https://www.trailblazeprep.com')
  assert.equal(validateBase('http://localhost:3000'), 'http://localhost:3000')
  assert.equal(validateBase('https://127.0.0.1:8443'), 'https://127.0.0.1:8443')
  for (const base of ['https://evil.example', 'ftp://localhost', 'http://localhost/path', 'http://[::1]:3000']) {
    assert.throws(() => validateBase(base))
  }
})

test('preserves credential-status asides while removing sidebar noise', () => {
  const page = extractPage('<html><head><title>Historical guide</title></head><body><main><h1>AI Associate</h1><aside aria-label="Credential status: Retired"><p>Retired February 2026. This is historical learning content, not an active exam.</p></aside><aside><p>Sidebar noise must not train the bot.</p></aside><p>Useful learning content belongs in the knowledge base.</p></main></body></html>')
  assert.match(page.pageNotice, /Retired February 2026/)
  assert.match(page.text, /historical learning content/)
  assert.doesNotMatch(page.text, /Sidebar noise/)
})

test('uses a document-head title, not an SVG title, when H1 is absent', () => {
  const page = extractPage('<html><head><title>Document title</title></head><body><main><svg><title>Icon title</title></svg><p>Useful learning content with a clear document title.</p></main></body></html>')
  assert.equal(page.title, 'Document title')
})

test('keeps block boundaries in notices and lists without inserting spaces inside inline text', () => {
  const page = extractPage(`<html><head><title>Credential update</title></head><body><main>
    <h1>Credential update</h1>
    <aside aria-label="Credential status: Retired"><h2>Retired February 2026</h2><p><a>Salesforce</a><a>exam</a> details are not verified yet.</p></aside>
    <h2>Current learning material</h2><p><a>Platform</a><a>Foundations</a> study information remains available.</p>
    <ul><li><a>One</a><a>Two</a> remain adjacent inline words.</li><li>Another learning item has a clear boundary.</li></ul>
  </main></body></html>`)
  assert.equal(page.pageNotice, 'Retired February 2026\n\nSalesforceexam details are not verified yet.')
  assert.match(page.text, /Retired February 2026\n\nSalesforceexam details/)
  assert.match(page.text, /PlatformFoundations study information/)
  assert.match(page.text, /OneTwo remain adjacent inline words\.\n\nAnother learning item/)
})

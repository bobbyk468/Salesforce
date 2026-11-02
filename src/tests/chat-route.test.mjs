import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import vm from 'node:vm'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const ts = require('typescript')
const source = await readFile(new URL('../app/api/chat/route.ts', import.meta.url), 'utf8')
const contactSource = await readFile(new URL('../app/api/contact/route.ts', import.meta.url), 'utf8')
const boundedJsonSource = await readFile(new URL('../lib/read-bounded-json.ts', import.meta.url), 'utf8')
function compile(sourceText) {
  return ts.transpileModule(sourceText, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText
}
const compiled = compile(source)
const compiledContact = compile(contactSource)
const compiledBoundedJson = compile(boundedJsonSource)

const fixture = { chunks: [
  { id: 1, title: 'Administrator exam format', url: '/administrator', source: 'trailblazeprep', content: 'The administrator exam format has multiple-choice questions and timed sections.', pageNotice: 'Fixture lifecycle notice: verify current availability with the issuer.' },
  { id: 2, title: 'Platform Developer I study guide', url: '/developer', source: 'trailblazeprep', content: 'The Platform Developer I study guide covers Apex and Lightning components.' },
] }

function createRoute({ fetchImpl = async () => { throw new Error('Unexpected network request') }, runtimeSecret } = {}) {
  const logs = []
  const module = { exports: {} }
  vm.runInNewContext(compiled, {
    module,
    exports: module.exports,
    require: (specifier) => {
      if (specifier === 'next/server') return { NextResponse: { json: (body, options = {}) => Response.json(body, options) } }
      if (specifier.endsWith('knowledge-base.json')) return { __esModule: true, default: fixture }
      if (specifier === '@/lib/runtime-secrets') return { getRuntimeSecret: async () => runtimeSecret }
      if (specifier === '@/lib/read-bounded-json') return loadBoundedJson()
      throw new Error(`Unexpected import: ${specifier}`)
    },
    fetch: fetchImpl,
    console: { log: (...args) => logs.push(args), error: (...args) => logs.push(args) },
    Date,
    Map,
    Set,
    Math,
    JSON,
    Object,
    Array,
    String,
    TextEncoder,
    ReadableStream,
    Response,
  })
  return { POST: module.exports.POST, logs }
}

function loadBoundedJson() {
  const helperModule = { exports: {} }
  vm.runInNewContext(compiledBoundedJson, { module: helperModule, exports: helperModule.exports, TextDecoder, Uint8Array, JSON })
  return helperModule.exports
}

function createContactRoute({ fetchImpl = async () => new Response('{}', { status: 200 }) } = {}) {
  const logs = []
  const module = { exports: {} }
  vm.runInNewContext(compiledContact, {
    module,
    exports: module.exports,
    require: (specifier) => {
      if (specifier === 'next/server') return { NextResponse: { json: (body, options = {}) => Response.json(body, options) } }
      if (specifier === '@/lib/constants') return { CONTACT_EMAIL: 'contact@example.test' }
      if (specifier === '@/lib/read-bounded-json') return loadBoundedJson()
      throw new Error(`Unexpected import: ${specifier}`)
    },
    fetch: fetchImpl,
    process: { env: { RESEND_API_KEY: 'fixture-only-key' } },
    console: { log: (...args) => logs.push(args), error: (...args) => logs.push(args) },
    Date, Map, Set, Math, JSON, Object, Array, String, TextDecoder, Uint8Array, Response,
  })
  return { POST: module.exports.POST, logs }
}

function request(body, headers = {}) {
  return new Request('https://example.test/api/chat', {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...headers },
    body,
  })
}

test('rejects malformed JSON, invalid shapes, and invalid messages without fetching', async () => {
  const { POST } = createRoute()
  const invalid = [
    ['{', 400], ['null', 400], ['[]', 400], ['"text"', 400], ['{}', 400],
    ['{"message":null}', 400], ['{"message":4}', 400], ['{"message":"   "}', 400],
    [JSON.stringify({ message: 'x'.repeat(2001) }), 413],
  ]
  for (const [body, expectedStatus] of invalid) {
    const response = await POST(request(body, { 'cf-connecting-ip': crypto.randomUUID() }))
    assert.equal(response.status, expectedStatus, body.slice(0, 30))
  }
})

test('returns deterministic website-only SSE for an out-of-corpus question without network', async () => {
  const { POST } = createRoute()
  const response = await POST(request(JSON.stringify({ message: 'What is the Mars rover launch schedule?' }), { 'cf-connecting-ip': 'out-of-corpus' }))
  assert.equal(response.status, 200)
  assert.match(response.headers.get('content-type'), /text\/event-stream/)
  const text = await response.text()
  assert.match(text, /not covered in the current study guides/)
  assert.match(text, /\[DONE\]/)
})

test('Cloudflare IP takes precedence over rotating forwarded headers for rate limiting', async () => {
  const { POST } = createRoute()
  let response
  for (let i = 0; i < 21; i++) {
    response = await POST(request(JSON.stringify({ message: 'What is Mars mission schedule?' }), {
      'cf-connecting-ip': '198.51.100.42', 'x-forwarded-for': `203.0.113.${i + 1}`,
    }))
    if (i < 20) assert.equal(response.status, 200)
  }
  assert.equal(response.status, 429)
})

test('upstream error bodies are not logged; only status and generic failure are retained', async () => {
  const secretError = 'PRIVATE_UPSTREAM_RESPONSE_BODY'
  const { POST, logs } = createRoute({
    runtimeSecret: 'fixture-key',
    fetchImpl: async () => new Response(secretError, { status: 502 }),
  })
  const response = await POST(request(JSON.stringify({ message: 'administrator exam format' }), { 'cf-connecting-ip': 'upstream-failure' }))
  assert.equal(response.status, 503)
  assert.doesNotMatch(JSON.stringify(logs), new RegExp(secretError))
  assert.match(JSON.stringify(logs), /502/)
})

test('bounded JSON helper handles streamed bodies without Content-Length and multibyte UTF-8', async () => {
  const { readBoundedJson } = loadBoundedJson()
  const payload = JSON.stringify({ message: 'café 🌱' })
  const bytes = new TextEncoder().encode(payload)
  const split = bytes.indexOf(0xf0) + 2
  const streamedRequest = {
    headers: new Headers(),
    body: new ReadableStream({
      start(controller) {
        controller.enqueue(bytes.slice(0, split))
        controller.enqueue(bytes.slice(split))
        controller.close()
      },
    }),
  }
  const result = await readBoundedJson(streamedRequest)
  assert.deepEqual(JSON.parse(JSON.stringify(result)), { ok: true, body: { message: 'café 🌱' } })
})

test('bounded JSON helper rejects malformed JSON and cancels a stream when actual bytes exceed limit', async () => {
  const { readBoundedJson } = loadBoundedJson()
  const malformed = await readBoundedJson({ headers: new Headers(), body: new ReadableStream({
    start(controller) { controller.enqueue(new TextEncoder().encode('{')); controller.close() },
  }) })
  assert.equal(malformed.ok, false)
  assert.equal(malformed.status, 400)

  let cancelled = false
  const oversized = await readBoundedJson({ headers: new Headers(), body: new ReadableStream({
    start(controller) { controller.enqueue(new Uint8Array(65537)) },
    cancel() { cancelled = true },
  }) })
  assert.equal(oversized.ok, false)
  assert.equal(oversized.status, 413)
  assert.equal(cancelled, true)
})

test('bounded JSON helper rejects a known oversized Content-Length before reading', async () => {
  const { readBoundedJson } = loadBoundedJson()
  let read = false
  const result = await readBoundedJson({
    headers: new Headers({ 'content-length': '65537' }),
    body: new ReadableStream({ pull() { read = true } }),
  })
  assert.equal(result.ok, false)
  assert.equal(result.status, 413)
  assert.equal(read, false)
})

test('contact route sends escaped Resend HTML and never exposes delivery error details', async () => {
  let payload
  const { POST, logs } = createContactRoute({ fetchImpl: async (_url, options) => {
    payload = JSON.parse(options.body)
    return new Response('{}', { status: 200 })
  } })
  const form = { username: '<img src=x>', email: 'student@example.test', examName: 'ADM & AI', content: '<script>alert("x")</script>' }
  const sent = await POST(request(JSON.stringify(form), { 'cf-connecting-ip': 'contact-success' }))
  assert.equal(sent.status, 200)
  assert.match(payload.html, /&lt;img src=x&gt;/)
  assert.match(payload.html, /ADM &amp; AI/)
  assert.match(payload.html, /&lt;script&gt;alert\(&quot;x&quot;\)&lt;\/script&gt;/)

  const privateDetail = 'PRIVATE_RESEND_ERROR_BODY student@example.test'
  const failing = createContactRoute({ fetchImpl: async () => new Response(JSON.stringify({ message: privateDetail }), { status: 400 }) })
  const failed = await failing.POST(request(JSON.stringify(form), { 'cf-connecting-ip': 'contact-failure' }))
  assert.equal(failed.status, 500)
  assert.doesNotMatch(await failed.text(), /PRIVATE_RESEND_ERROR_BODY/)
  assert.doesNotMatch(JSON.stringify(failing.logs), /PRIVATE_RESEND_ERROR_BODY|student@example\.test/)
  assert.deepEqual(logs, [])
})

test('retains page lifecycle notices in the model context for every retrieved chunk', async () => {
  let payload
  const { POST } = createRoute({
    runtimeSecret: 'fixture-key',
    fetchImpl: async (_url, options) => {
      payload = JSON.parse(options.body)
      return new Response('data: [DONE]\n\n', { status: 200 })
    },
  })
  const response = await POST(request(JSON.stringify({ message: 'administrator exam format' })))
  assert.equal(response.status, 200)
  assert.match(payload.messages[1].content, /Page notice: Fixture lifecycle notice/)
})

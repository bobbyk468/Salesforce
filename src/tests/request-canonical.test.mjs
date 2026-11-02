import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import vm from 'node:vm'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const ts = require('typescript')
const middlewareSource = await readFile(new URL('../middleware.ts', import.meta.url), 'utf8')
const compiled = ts.transpileModule(middlewareSource, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText

const middlewareModule = { exports: {} }
const nextResponse = {
  redirect: (url, status) => ({ kind: 'redirect', url: new URL(url), status, headers: new Headers() }),
  next: () => ({ kind: 'next', headers: new Headers() }),
}
vm.runInNewContext(compiled, {
  module: middlewareModule,
  exports: middlewareModule.exports,
  require: (specifier) => {
    assert.equal(specifier, 'next/server')
    return { NextResponse: nextResponse }
  },
  URL,
  Headers,
})

function invokeMiddleware(input) {
  const originalUrl = new URL(input)
  const request = {
    nextUrl: {
      ...originalUrl,
      clone: () => new URL(originalUrl),
      get hostname() { return originalUrl.hostname },
      get protocol() { return originalUrl.protocol },
      get pathname() { return originalUrl.pathname },
      get searchParams() { return originalUrl.searchParams },
    },
  }
  return middlewareModule.exports.middleware(request)
}

test('redirects HTTP www to HTTPS www, preserving path and query', () => {
  const response = invokeMiddleware('http://www.trailblazeprep.com/contact?exam=adm-201')
  assert.equal(response.kind, 'redirect')
  assert.equal(response.status, 308)
  assert.equal(response.url.href, 'https://www.trailblazeprep.com/contact?exam=adm-201')
})

test('redirects HTTPS apex to HTTPS www and clears the port', () => {
  const response = invokeMiddleware('https://trailblazeprep.com:8443/path?x=1')
  assert.equal(response.kind, 'redirect')
  assert.equal(response.status, 308)
  assert.equal(response.url.href, 'https://www.trailblazeprep.com/path?x=1')
})

test('passes HTTPS www without redirect', () => {
  assert.equal(invokeMiddleware('https://www.trailblazeprep.com/path').kind, 'next')
})

test('leaves localhost and HTTP preview hosts unchanged', () => {
  assert.equal(invokeMiddleware('http://localhost:3000/contact').kind, 'next')
  assert.equal(invokeMiddleware('http://preview.example.workers.dev/contact').kind, 'next')
})

test('query-param contact response remains noindex, follow', () => {
  const response = invokeMiddleware('https://www.trailblazeprep.com/contact?exam=adm-201')
  assert.equal(response.kind, 'next')
  assert.equal(response.headers.get('X-Robots-Tag'), 'noindex, follow')
})

test('ordinary contact response has no robots header', () => {
  const response = invokeMiddleware('https://www.trailblazeprep.com/contact')
  assert.equal(response.kind, 'next')
  assert.equal(response.headers.has('X-Robots-Tag'), false)
})

test('redirects asset paths too', () => {
  const response = invokeMiddleware('http://trailblazeprep.com/_next/static/app.js?v=2')
  assert.equal(response.kind, 'redirect')
  assert.equal(response.status, 308)
  assert.equal(response.url.href, 'https://www.trailblazeprep.com/_next/static/app.js?v=2')
})

test('matcher covers all paths', async () => {
  assert.match(middlewareSource, /matcher:\s*\[['"]\/:path\*['"]\]/)
})

test('HSTS is one year without includeSubDomains or preload', async () => {
  const configSource = await readFile(new URL('../../next.config.js', import.meta.url), 'utf8')
  assert.match(configSource, /key:\s*['"]Strict-Transport-Security['"],\s*value:\s*['"]max-age=31536000['"]\s*}/)
  assert.doesNotMatch(configSource, /max-age=31536000[^'"\n]*(?:includeSubDomains|preload)/i)
})

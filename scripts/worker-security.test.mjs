import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const projectRoot = new URL('../', import.meta.url)
const workerSource = await readFile(new URL('worker.mjs', projectRoot), 'utf8')
const wrangler = JSON.parse(await readFile(new URL('wrangler.jsonc', projectRoot), 'utf8'))

function loadWorker(response) {
  const fakeModuleUrl = `data:text/javascript;base64,${Buffer.from(
    'export default { async fetch(request, env, ctx) { globalThis.__openNextCalls++; return globalThis.__fakeResponse } }',
  ).toString('base64')}`

  const rewritten = workerSource
    .replace("import openNextWorker from './.open-next/worker.js'", `import openNextWorker from '${fakeModuleUrl}'`)
    .replace("export * from './.open-next/worker.js'", '')
  const moduleUrl = `data:text/javascript;base64,${Buffer.from(rewritten).toString('base64')}`
  globalThis.__fakeResponse = response
  globalThis.__openNextCalls = 0
  return import(moduleUrl).then((workerModule) => ({
    worker: workerModule.default,
    callCount: () => globalThis.__openNextCalls,
    cleanup: () => {
      delete globalThis.__fakeResponse
      delete globalThis.__openNextCalls
    },
  }))
}

test('production HTTP asset requests redirect to canonical HTTPS preserving path and query', async () => {
  const { worker, cleanup } = await loadWorker(new Response('unused'))
  try {
    const response = await worker.fetch(new Request('http://www.trailblazeprep.com/assets/app.css?v=7'))
    assert.equal(response.status, 308)
    assert.equal(response.headers.get('Location'), 'https://www.trailblazeprep.com/assets/app.css?v=7')
  } finally {
    cleanup()
  }
})

test('production apex requests redirect to canonical HTTPS www', async () => {
  const { worker, cleanup } = await loadWorker(new Response('unused'))
  try {
    const response = await worker.fetch(new Request('https://trailblazeprep.com/path?q=1'))
    assert.equal(response.status, 308)
    assert.equal(response.headers.get('Location'), 'https://www.trailblazeprep.com/path?q=1')
  } finally {
    cleanup()
  }
})

test('HTTPS production responses preserve status, body, and cache headers while adding HSTS', async () => {
  const response = new Response('asset bytes', {
    status: 206,
    headers: { 'Cache-Control': 'public, max-age=3600', 'Content-Range': 'bytes 0-10/11' },
  })
  const { worker, cleanup } = await loadWorker(response)
  try {
    const secured = await worker.fetch(new Request('https://www.trailblazeprep.com/file.bin'))
    assert.equal(secured.status, 206)
    assert.equal(await secured.text(), 'asset bytes')
    assert.equal(secured.headers.get('Cache-Control'), 'public, max-age=3600')
    assert.equal(secured.headers.get('Content-Range'), 'bytes 0-10/11')
    assert.equal(secured.headers.get('Strict-Transport-Security'), 'max-age=31536000')
  } finally {
    cleanup()
  }
})

test('Worker preview and local requests pass through unchanged', async (t) => {
  for (const url of ['https://preview.example.workers.dev/file', 'http://localhost:3000/file']) {
    await t.test(url, async () => {
      const response = new Response('preview', { status: 201, headers: { 'X-Existing': 'yes' } })
      const { worker, cleanup, callCount } = await loadWorker(response)
      try {
        const returned = await worker.fetch(new Request(url))
        assert.equal(returned, response)
        assert.equal(returned.status, 201)
        assert.equal(returned.headers.get('X-Existing'), 'yes')
        assert.equal(returned.headers.has('Strict-Transport-Security'), false)
        assert.equal(callCount(), 1)
      } finally {
        cleanup()
      }
    })
  }
})

test('production 404 is preserved and receives HSTS', async () => {
  const response = new Response('not found', { status: 404, headers: { 'Cache-Control': 'no-store' } })
  const { worker, cleanup } = await loadWorker(response)
  try {
    const returned = await worker.fetch(new Request('https://www.trailblazeprep.com/missing'))
    assert.equal(returned.status, 404)
    assert.equal(await returned.text(), 'not found')
    assert.equal(returned.headers.get('Cache-Control'), 'no-store')
    assert.equal(returned.headers.get('Strict-Transport-Security'), 'max-age=31536000')
  } finally {
    cleanup()
  }
})

test('Wrangler routes asset requests through worker.mjs', () => {
  assert.equal(wrangler.main, 'worker.mjs')
  assert.equal(wrangler.assets.run_worker_first, true)
})

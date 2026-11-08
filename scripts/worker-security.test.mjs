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
  assert.equal(wrangler.version_metadata.binding, 'WORKER_VERSION')
})

test('canonical production HTML is cached by Worker version and served with an explicit hit header', async () => {
  const entries = new Map()
  globalThis.caches = {
    default: {
      async match(request) {
        return entries.get(request.url)?.clone()
      },
      async put(request, response) {
        entries.set(request.url, response.clone())
      },
    },
  }

  const origin = new Response('<!doctype html><title>Trailblaze Prep</title>', {
    headers: {
      'Cache-Control': 'public, s-maxage=31536000',
      'Content-Type': 'text/html; charset=utf-8',
    },
  })
  const { worker, cleanup, callCount } = await loadWorker(origin)
  const env = { WORKER_VERSION: { id: 'deploy-a' } }

  try {
    const first = await worker.fetch(new Request('https://www.trailblazeprep.com/'), env)
    assert.equal(first.headers.get('X-Trailblaze-Edge-Cache'), 'MISS')
    assert.equal(await first.text(), '<!doctype html><title>Trailblaze Prep</title>')

    const second = await worker.fetch(new Request('https://www.trailblazeprep.com/'), env)
    assert.equal(second.headers.get('X-Trailblaze-Edge-Cache'), 'HIT')
    assert.equal(second.headers.get('Strict-Transport-Security'), 'max-age=31536000')
    assert.equal(await second.text(), '<!doctype html><title>Trailblaze Prep</title>')
    assert.equal(callCount(), 1)
  } finally {
    cleanup()
    delete globalThis.caches
  }
})

test('HEAD warms the GET HTML object and a new Worker version cannot reuse it', async () => {
  const entries = new Map()
  globalThis.caches = {
    default: {
      async match(request) {
        return entries.get(request.url)?.clone()
      },
      async put(request, response) {
        entries.set(request.url, response.clone())
      },
    },
  }

  const origin = new Response('<!doctype html><title>Trailblaze Prep</title>', {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
  const { worker, cleanup, callCount } = await loadWorker(origin)
  const request = () => new Request('https://www.trailblazeprep.com/', { method: 'HEAD' })

  try {
    const first = await worker.fetch(request(), { WORKER_VERSION: { id: 'deploy-a' } })
    assert.equal(first.headers.get('X-Trailblaze-Edge-Cache'), 'MISS')
    assert.equal(await first.text(), '')

    const second = await worker.fetch(request(), { WORKER_VERSION: { id: 'deploy-a' } })
    assert.equal(second.headers.get('X-Trailblaze-Edge-Cache'), 'HIT')
    assert.equal(callCount(), 1)

    globalThis.__fakeResponse = new Response('<!doctype html><title>Next deploy</title>', {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    })
    const nextDeploy = await worker.fetch(request(), { WORKER_VERSION: { id: 'deploy-b' } })
    assert.equal(nextDeploy.headers.get('X-Trailblaze-Edge-Cache'), 'MISS')
    assert.equal(callCount(), 2)
  } finally {
    cleanup()
    delete globalThis.caches
  }
})

test('API, OG and RSC requests bypass the HTML edge cache', async (t) => {
  for (const request of [
    new Request('https://www.trailblazeprep.com/api/chat'),
    new Request('https://www.trailblazeprep.com/og/certification'),
    new Request('https://www.trailblazeprep.com/', { headers: { RSC: '1' } }),
  ]) {
    await t.test(request.url, async () => {
      const response = new Response('uncached', { headers: { 'Content-Type': 'text/html' } })
      const { worker, cleanup, callCount } = await loadWorker(response)
      try {
        const returned = await worker.fetch(request, { WORKER_VERSION: { id: 'deploy-a' } })
        assert.equal(returned.headers.has('X-Trailblaze-Edge-Cache'), false)
        assert.equal(callCount(), 1)
      } finally {
        cleanup()
      }
    })
  }
})

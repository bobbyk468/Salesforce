import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const scriptPath = fileURLToPath(new URL('./validate-seo-lengths.mjs', import.meta.url))

function withFixture(run) {
  const cwd = mkdtempSync(join(tmpdir(), 'seo-lengths-'))
  try {
    run(cwd)
  } finally {
    rmSync(cwd, { recursive: true, force: true })
  }
}

function runValidator(cwd) {
  return spawnSync(process.execPath, [scriptPath], { cwd, encoding: 'utf8' })
}

function writeHtml(cwd, html) {
  const appDir = join(cwd, '.next', 'server', 'app')
  mkdirSync(appDir, { recursive: true })
  writeFileSync(join(appDir, 'page.html'), html.includes('<html') ? html : `<html><head>${html}</head></html>`)
}

test('fails with a clear message when the build directory is missing', () => {
  withFixture((cwd) => {
    const result = runValidator(cwd)
    assert.equal(result.status, 1)
    assert.match(result.stderr, /No production build found/)
  })
})

test('fails when the build directory contains no HTML pages', () => {
  withFixture((cwd) => {
    mkdirSync(join(cwd, '.next', 'server', 'app'), { recursive: true })
    const result = runValidator(cwd)
    assert.equal(result.status, 1)
    assert.match(result.stderr, /No HTML pages found/)
  })
})

test('passes valid title and description metadata', () => {
  withFixture((cwd) => {
    writeHtml(cwd, `<html><head><title>${'T'.repeat(50)}</title><meta name="description" content="${'D'.repeat(100)}"></head></html>`)
    const result = runValidator(cwd)
    assert.equal(result.status, 0, result.stderr)
    assert.match(result.stdout, /Checked 1 pages\. Violations: 0/)
    assert.match(result.stdout, /All titles and descriptions match route-specific ranges/)
  })
})

test('allows the longer planned description on the homepage only', () => {
  withFixture((cwd) => {
    const appDir = join(cwd, '.next', 'server', 'app')
    mkdirSync(appDir, { recursive: true })
    const html = `<html><head><title>${'T'.repeat(50)}</title><meta name="description" content="${'D'.repeat(155)}"></head></html>`
    writeFileSync(join(appDir, 'index.html'), html)
    assert.equal(runValidator(cwd).status, 0)
    writeFileSync(join(appDir, 'page.html'), html)
    assert.match(runValidator(cwd).stderr, /DESC TOO LONG \(155 chars\) on \/page/)
  })
})

test('fails and reports metadata that exceeds the length limits', () => {
  withFixture((cwd) => {
    const longTitle = 'T'.repeat(61)
    const longDescription = 'D'.repeat(131)
    writeHtml(cwd, `<html><head><title>${longTitle}</title><meta name="description" content="${longDescription}"></head></html>`)
    const result = runValidator(cwd)
    assert.equal(result.status, 1)
    assert.match(result.stderr, /TITLE TOO LONG \(61 chars\)/)
    assert.match(result.stderr, /DESC TOO LONG \(131 chars\)/)
    assert.match(result.stdout, /Checked 1 pages\. Violations: 2/)
  })
})


test('rejects metadata below the chosen minimum lengths', () => {
  withFixture((cwd) => {
    writeHtml(cwd, `<title>${'T'.repeat(49)}</title><meta name="description" content="${'D'.repeat(99)}">`)
    const result = runValidator(cwd)
    assert.equal(result.status, 1)
    assert.match(result.stderr, /TITLE TOO SHORT \(49 chars\)/)
    assert.match(result.stderr, /DESC TOO SHORT \(99 chars\)/)
  })
})

test('counts decoded HTML characters and accepts upper boundaries', () => {
  withFixture((cwd) => {
    writeHtml(cwd, `<title>${'T'.repeat(59)}&amp;</title><meta content='${'D'.repeat(129)}&amp;' name='description'>`)
    const result = runValidator(cwd)
    assert.equal(result.status, 0, result.stderr)
  })
})

test('does not mistake an SVG accessibility title for a document title', () => {
  withFixture((cwd) => {
    writeHtml(cwd, `<html><head><meta name="description" content="${'D'.repeat(100)}"></head><body><svg><title>${'T'.repeat(50)}</title></svg></body></html>`)
    const result = runValidator(cwd)
    assert.equal(result.status, 1)
    assert.match(result.stderr, /MISSING TITLE/)
  })
})

test('allows the wider description budget on certification pages only', () => {
  withFixture((cwd) => {
    const appDir = join(cwd, '.next', 'server', 'app', 'certifications')
    mkdirSync(appDir, { recursive: true })
    const head = (title, description) =>
      `<html><head><title>${title}</title><meta name="description" content="${description}"></head></html>`
    // 30-character title and 150-character description: under the 50 floor and
    // over the 130 description cap the content routes keep, inside the 20-60 /
    // 160 a certification page gets.
    writeFileSync(join(appDir, 'developer-1.html'), head('T'.repeat(30), 'D'.repeat(150)))
    const result = runValidator(cwd)
    assert.equal(result.status, 0, result.stdout + result.stderr)
    assert.match(result.stdout, /Violations: 0/)
  })
})

test('still rejects an over-long title on a certification page', () => {
  withFixture((cwd) => {
    const appDir = join(cwd, '.next', 'server', 'app', 'certifications')
    mkdirSync(appDir, { recursive: true })
    writeFileSync(
      join(appDir, 'developer-1.html'),
      `<html><head><title>${'T'.repeat(61)}</title><meta name="description" content="${'D'.repeat(150)}"></head></html>`,
    )
    const result = runValidator(cwd)
    assert.equal(result.status, 1)
    assert.match(result.stdout + result.stderr, /TITLE TOO LONG/)
  })
})

test('keeps the narrower budget on a role hub, which is not a certification page', () => {
  withFixture((cwd) => {
    const appDir = join(cwd, '.next', 'server', 'app', 'certifications', 'role')
    mkdirSync(appDir, { recursive: true })
    writeFileSync(
      join(appDir, 'developer.html'),
      `<html><head><title>${'T'.repeat(75)}</title><meta name="description" content="${'D'.repeat(120)}"></head></html>`,
    )
    const result = runValidator(cwd)
    assert.equal(result.status, 1)
    assert.match(result.stdout + result.stderr, /TITLE TOO LONG/)
  })
})

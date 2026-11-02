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
  writeFileSync(join(appDir, 'page.html'), html)
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
    writeHtml(cwd, '<html><head><title>Platform Administrator</title><meta name="description" content="Prepare for your Salesforce certification exam."></head></html>')
    const result = runValidator(cwd)
    assert.equal(result.status, 0, result.stderr)
    assert.match(result.stdout, /Checked 1 pages\. Violations: 0/)
    assert.match(result.stdout, /All titles ≤60 chars and descriptions ≤160 chars/)
  })
})

test('fails and reports metadata that exceeds the length limits', () => {
  withFixture((cwd) => {
    const longTitle = 'T'.repeat(61)
    const longDescription = 'D'.repeat(161)
    writeHtml(cwd, `<html><head><title>${longTitle}</title><meta name="description" content="${longDescription}"></head></html>`)
    const result = runValidator(cwd)
    assert.equal(result.status, 1)
    assert.match(result.stderr, /TITLE TOO LONG \(61 chars\)/)
    assert.match(result.stderr, /DESC TOO LONG \(161 chars\)/)
    assert.match(result.stdout, /Checked 1 pages\. Violations: 2/)
  })
})

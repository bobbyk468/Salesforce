import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { test } from 'node:test'
import { selectSourceFile, safeOutputPath, verifyBlob } from './fetch-git-question-source.mjs'

test('fetch only canonical JSON banks and selection notes, not duplicate CSV/XLSX or binaries', () => {
  const blob = (path) => ({ type: 'blob', path })
  for (const path of ['Extracted/Exam/Set_questions.json', 'Exam/readme.TXT', 'README.md', 'Exam/update.txt']) {
    assert.equal(selectSourceFile(blob(path)), true, path)
  }
  for (const path of ['Extracted/Exam/Set_questions.csv', 'Exam/bank.pdf', 'Reports/log.txt', 'Pipeline/requirements.txt']) {
    assert.equal(selectSourceFile(blob(path)), false, path)
  }
  assert.equal(selectSourceFile({ type: 'tree', path: 'Exam/readme.txt' }), false)
})

test('snapshot paths cannot escape output root', () => {
  assert.equal(safeOutputPath('/tmp/example', 'Exam/Read First/questions.json'), '/tmp/example/Exam/Read First/questions.json')
  for (const path of ['../secret', '/absolute', 'Exam/../../secret', 'Exam//file']) {
    assert.throws(() => safeOutputPath('/tmp/example', path))
  }
})

test('download must exactly match pinned Git blob including whitespace', () => {
  const bytes = Buffer.from('if (a < b) {\n  return "two  spaces";\n}\n')
  const sha = createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex')
  assert.doesNotThrow(() => verifyBlob(bytes, sha))
  assert.throws(() => verifyBlob(Buffer.from(bytes.toString().replace('two  spaces', 'two spaces')), sha))
})

import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const args = process.argv.slice(2)
const sourceIndex = args.indexOf('--source')
assert.ok(sourceIndex >= 0 && args[sourceIndex + 1], 'Provide --source SNAPSHOT_DIRECTORY')
const sourceRoot = resolve(args[sourceIndex + 1])
const directory = resolve(root, 'src/lib/question-banks/imported')
const banks = JSON.parse(readFileSync(resolve(directory, 'banks.json')))
const manifest = JSON.parse(readFileSync(resolve(directory, 'manifest.json')))
const cache = new Map()
let sourceFiles = 0
for (const [path, expected] of Object.entries(manifest.sourceHashes)) {
  const bytes = readFileSync(resolve(sourceRoot, path))
  assert.equal(createHash('sha256').update(bytes).digest('hex'), expected, path)
  sourceFiles++
}
let questions = 0
let multiAnswer = 0
for (const [slug, selected] of Object.entries(banks)) {
  for (const question of selected) {
    const path = question.bankPath ?? question.source.bankPath
    assert.ok(path && !path.split('/').includes('..'), 'Missing or unsafe source bank path')
    if (!cache.has(path)) cache.set(path, JSON.parse(readFileSync(resolve(sourceRoot, 'Extracted', path))))
    const source = cache.get(path).questions.find((row) =>
      row.text === question.question && (row.sourcePath || row.source) === question.source.path &&
      String(row.sourceQuestionNum ?? row.id ?? row.questionNum) === question.source.questionId)
    assert.ok(source, `${slug}: source question not found: ${question.source.questionId}`)
    assert.equal(question.question, source.text)
    assert.deepEqual(question.options, Object.values(source.options).filter((option) => option.trim()))
    assert.deepEqual(question.correctAnswers, source.correctAnswers.map((letter) => 'ABCDEF'.indexOf(letter)).sort((a, b) => a - b))
    assert.equal(question.source.answerEvidence, source.answerSource)
    assert.equal(question.source.commit, manifest.commit)
    questions++
    if (question.correctAnswers.length > 1) multiAnswer++
  }
}
const result = { commit: manifest.commit, sourceFiles, pageBanks: Object.keys(banks).length,
  questions, multiAnswer, failures: 0,
  evidenceLevel: 'Exact imported prompt, options and answer-key equality to pinned extracted JSON; not independent PDF or semantic verification.' }
const outputIndex = args.indexOf('--output')
if (outputIndex >= 0) writeFileSync(resolve(args[outputIndex + 1]), JSON.stringify(result, null, 2) + '\n')
console.log(JSON.stringify(result, null, 2))

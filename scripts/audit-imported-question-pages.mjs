import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'
import { parseDocument, DomUtils } from 'htmlparser2'
import { selectAll } from 'css-select'

const args = process.argv.slice(2)
const base = new URL(args[args.indexOf('--base') + 1] || 'http://localhost:3800')
assert.ok(['localhost', '127.0.0.1'].includes(base.hostname), 'This audit expects the updated local website')
const banks = JSON.parse(readFileSync(new URL('../src/lib/question-banks/imported/banks.json', import.meta.url)))
const rows = []
for (const [slug, questions] of Object.entries(banks)) {
  const response = await fetch(new URL(`/certifications/${slug}`, base))
  assert.equal(response.status, 200, slug)
  const doc = parseDocument(await response.text(), { decodeEntities: true })
  const quizzes = selectAll('script[type="application/ld+json"]', doc)
    .map((node) => JSON.parse(DomUtils.textContent(node))).filter((data) => data['@type'] === 'Quiz')
  assert.equal(quizzes.length, 1, slug)
  const visible = questions.slice(0, 5)
  assert.equal(quizzes[0].hasPart.length, visible.length, slug)
  const prompts = selectAll('#practice-questions p.whitespace-pre-wrap', doc).map(DomUtils.textContent)
  const options = selectAll('#practice-questions .question-option > span > span:last-child', doc).map(DomUtils.textContent)
  assert.deepEqual(prompts, visible.map((question) => question.question), `${slug}: displayed prompts`)
  assert.deepEqual(options, visible.flatMap((question) => question.options), `${slug}: displayed choices`)
  for (const [index, question] of visible.entries()) {
    const schema = quizzes[0].hasPart[index]
    assert.equal(schema.text, question.question)
    const answers = Array.isArray(schema.acceptedAnswer) ? schema.acceptedAnswer : [schema.acceptedAnswer]
    assert.deepEqual(answers.map((answer) => answer.text), question.correctAnswers.map((answer) => question.options[answer]))
    assert.deepEqual(schema.suggestedAnswer.map((answer) => answer.text), question.options.filter((_, option) => !question.correctAnswers.includes(option)))
  }
  rows.push({ slug, status: 200, visibleQuestions: visible.length, fullSetQuestions: questions.length, failures: 0 })
}
const result = { base: base.origin, pages: rows.length, failures: 0, rows,
  evidenceLevel: 'HTTP server-rendered prompts, options and visible Quiz answer keys match imported banks; interactive behavior checked separately.' }
const outputIndex = args.indexOf('--output')
if (outputIndex >= 0) writeFileSync(args[outputIndex + 1], JSON.stringify(result, null, 2) + '\n')
console.log(`Verified ${rows.length} updated local exam pages with exact visible question/choice/Quiz parity`)

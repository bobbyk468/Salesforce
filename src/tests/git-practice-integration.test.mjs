import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import vm from 'node:vm'
import ts from 'typescript'

const read = (path) => readFileSync(new URL(`../../${path}`, import.meta.url), 'utf8')
const banks = JSON.parse(read('src/lib/question-banks/imported/banks.json'))
const counts = JSON.parse(read('src/lib/question-banks/imported/counts.json'))
const manifest = JSON.parse(read('src/lib/question-banks/imported/manifest.json'))

function load(path, imports = {}) {
  const module = { exports: {} }
  const code = ts.transpileModule(read(path), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  }).outputText
  vm.runInNewContext(code, {
    module, exports: module.exports,
    require: (name) => {
      assert.ok(name in imports, `Unexpected import ${name}`)
      return imports[name]
    },
  })
  return module.exports
}

test('all exams use authored fallback questions while imported-bank rights are unconfirmed', () => {
  const { getPracticeQuestionsForExam, hasImportedPracticeQuestions } = load('src/lib/git-practice-questions.ts')
  const fallback = [{ question: 'Legacy fallback', options: ['A', 'B'], correctAnswer: 0 }]
  for (const [slug, questions] of Object.entries(banks)) {
    assert.equal(getPracticeQuestionsForExam(slug, fallback), fallback)
    assert.equal(hasImportedPracticeQuestions(slug), false)
    assert.equal(counts[slug], questions.length)
  }
  assert.equal(getPracticeQuestionsForExam('unmatched-exam', fallback), fallback)
  assert.equal(hasImportedPracticeQuestions('unmatched-exam'), false)
  assert.deepEqual(Object.keys(counts).sort(), Object.keys(banks).sort())
})

test('all page renderers use the same resolved bank for visible questions and Quiz schema', () => {
  for (const name of ['Developer1CertBody', 'CertificationBodyTemplate']) {
    const source = read(`src/components/certifications/${name}.tsx`)
    assert.match(source, /getInitialPracticeQuestions\(getPracticeQuestionsForExam\(slug,/)
    assert.match(source, /questions=\{initialQuestions\}/)
    assert.match(source, /getVisiblePracticeQuestions\(initialQuestions\)/)
    assert.match(source, /serializeJsonLd/)
  }
  const admin = read('src/components/certifications/AdministratorCertBody.tsx')
  assert.match(admin, /getPracticeQuestionsForExam\(slug, administratorSampleQuestions\)/)
  assert.match(admin, /\[\.\.\.authoredQuestions, \.\.\.ADMINISTRATOR_EXTRA_QUESTIONS\]/)
  assert.match(admin, /getVisiblePracticeQuestions\(initialQuestions\)/)
  assert.match(admin, /questions=\{initialQuestions\}/)
  assert.doesNotMatch(admin, /extraQuestionsKey/)
})

test('every published bank has exactly equal per-set counts and honors Read First exclusivity', () => {
  for (const exam of manifest.exams.filter((item) => item.selectedCount > 0)) {
    const quotas = Object.values(exam.selectedBySource)
    assert.equal(new Set(quotas).size, 1, `${exam.slug}: unequal set quotas`)
    assert.equal(quotas.reduce((sum, count) => sum + count, 0), banks[exam.slug].length)
    assert.ok(banks[exam.slug].length >= manifest.requestedCount)
    if (exam.selectionRule === 'read_first_only') {
      for (const question of banks[exam.slug]) assert.match(question.bankPath, /\/read first[^/]*\//i)
    }
  }
})

test('imported banks have valid complete answer sets and traceable sources without invented explanations', () => {
  assert.ok(Object.keys(banks).length >= 20)
  let multi = 0
  for (const [slug, questions] of Object.entries(banks)) {
    assert.ok(questions.length > 0, slug)
    const identities = new Set()
    for (const q of questions) {
      assert.ok(q.question.trim(), slug)
      assert.ok(q.options.length >= 2 && q.options.every((option) => option.trim()), slug)
      assert.ok(q.correctAnswers.length > 0, slug)
      assert.equal(new Set(q.correctAnswers).size, q.correctAnswers.length)
      assert.ok(q.correctAnswers.every((index) => Number.isInteger(index) && index >= 0 && index < q.options.length))
      if (q.correctAnswers.length > 1) multi++
      else if (q.correctAnswer !== undefined) assert.equal(q.correctAnswer, q.correctAnswers[0])
      assert.equal(q.source.repository, 'bobbyk468/SF-Questions')
      assert.match(q.source.commit, /^[a-f0-9]{40}$/)
      assert.ok(q.source.path && q.source.questionId && q.source.answerEvidence)
      assert.equal(q.explanation, undefined)
      assert.equal(q.whyWrong, undefined)
      const identity = JSON.stringify([q.question, q.options])
      assert.equal(identities.has(identity), false, `${slug}: duplicate prompt/options`)
      identities.add(identity)
    }
  }
  assert.ok(multi > 0, 'Multi-answer questions must not be reduced to single answers')
})

test('inline Quiz serialization retains literal code without permitting script termination', () => {
  const { serializeJsonLd } = load('src/lib/serialize-json-ld.ts')
  const value = { question: 'if (a < b) {\n  return "two  spaces";\n}\n</script><script>alert(1)</script>' }
  const json = serializeJsonLd(value)
  assert.doesNotMatch(json, /</)
  assert.deepEqual(JSON.parse(json), value)
})

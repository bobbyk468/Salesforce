import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import vm from 'node:vm'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const require = createRequire(import.meta.url)
const ts = require('typescript')
const pageDates = require('../../public/page-dates.json')
const root = fileURLToPath(new URL('../../', import.meta.url))
const read = (path) => readFileSync(join(root, path), 'utf8')

function compile(source, fileName, jsx = ts.JsxEmit.Preserve) {
  const output = ts.transpileModule(source, {
    fileName,
    reportDiagnostics: true,
    compilerOptions: {
      jsx,
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.CommonJS,
    },
  })
  const errors = (output.diagnostics ?? []).filter((item) => item.category === ts.DiagnosticCategory.Error)
  assert.deepEqual(errors.map((item) => ts.flattenDiagnosticMessageText(item.messageText, '\n')), [])
  return output.outputText
}

function createCardHarness() {
  const hooks = []
  let cursor = 0
  const node = (type, props) => ({ type, props: props ?? {} })
  const react = {
    memo: (component) => component,
    useState(initial) {
      const index = cursor++
      if (!(index in hooks)) hooks[index] = initial
      return [hooks[index], (value) => { hooks[index] = typeof value === 'function' ? value(hooks[index]) : value }]
    },
  }
  const source = read('src/components/QuestionCard.tsx')
  const compiled = compile(source, 'QuestionCard.tsx', ts.JsxEmit.ReactJSX)
  const componentModule = { exports: {} }
  vm.runInNewContext(compiled, {
    module: componentModule,
    exports: componentModule.exports,
    require: (specifier) => {
      if (specifier === 'react') return react
      if (specifier === 'react/jsx-runtime') return { jsx: node, jsxs: node }
      if (specifier === 'lucide-react') return { CheckCircle: 'check-icon', XCircle: 'x-icon' }
      throw new Error(`Unexpected import: ${specifier}`)
    },
  })
  const render = (props) => {
    cursor = 0
    return componentModule.exports.default(props)
  }
  return { render }
}

function walk(node, predicate, found = []) {
  if (Array.isArray(node)) node.forEach((child) => walk(child, predicate, found))
  else if (node && typeof node === 'object') {
    if (predicate(node)) found.push(node)
    walk(node.props?.children, predicate, found)
  }
  return found
}

function textContent(node) {
  if (Array.isArray(node)) return node.map(textContent).join('')
  if (node === null || node === undefined || typeof node === 'boolean') return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  return textContent(node.props?.children)
}

function buttonWithText(tree, label) {
  const button = walk(tree, (node) => node.type === 'button' && textContent(node).includes(label))[0]
  assert.ok(button, `button containing ${label} exists`)
  return button
}

function optionButtons(tree) {
  return walk(tree, (node) => node.type === 'button' && typeof node.props['aria-pressed'] === 'boolean')
}

function clickOption(harness, props, index) {
  let tree = harness.render(props)
  const button = optionButtons(tree)[index]
  assert.ok(button, `option ${index} exists`)
  button.props.onClick()
  return harness.render(props)
}

test('legacy single-answer callers remain supported with answer reveal and reset', () => {
  const harness = createCardHarness()
  const props = { questionNumber: 1, question: 'Legacy item', options: ['Wrong', 'Right'], correctAnswer: 1 }
  let tree = clickOption(harness, props, 1)
  assert.equal(optionButtons(tree)[1].props['aria-pressed'], true)
  buttonWithText(tree, 'Check Answer').props.onClick()
  tree = harness.render(props)
  assert.match(textContent(tree), /Correct answer: B\. Right/)
  buttonWithText(tree, 'Try Again').props.onClick()
  tree = harness.render(props)
  assert.equal(optionButtons(tree).some((button) => button.props['aria-pressed']), false)
  assert.equal(walk(tree, (node) => node.props?.role === 'status').length, 0)
})

test('multi-select uses toggle controls, exact-set grading, accessible count, reveal labels, and reset', () => {
  const harness = createCardHarness()
  const props = { questionNumber: 2, question: 'Choose all', options: ['A', 'B', 'C'], correctAnswers: [0, 2] }
  let tree = clickOption(harness, props, 0)
  assert.match(textContent(tree), /Select 2 answers\. 1 selected/)
  assert.equal(buttonWithText(tree, 'Check Answers').props.disabled, true)
  tree = clickOption(harness, props, 1)
  assert.equal(buttonWithText(tree, 'Check Answers').props.disabled, false)
  optionButtons(tree)[2].props.onClick()
  tree = harness.render(props)
  assert.match(textContent(tree), /2 selected/)
  assert.equal(optionButtons(tree)[2].props['aria-pressed'], false)
  optionButtons(tree)[0].props.onClick()
  tree = harness.render(props)
  assert.match(textContent(tree), /1 selected/)
  optionButtons(tree)[2].props.onClick()
  tree = harness.render(props)
  buttonWithText(tree, 'Check Answers').props.onClick()
  tree = harness.render(props)
  assert.match(textContent(tree), /Not quite\. Correct answers: A\. A; C\. C/)
  buttonWithText(tree, 'Try Again').props.onClick()
  tree = harness.render(props)
  tree = clickOption(harness, props, 0)
  tree = clickOption(harness, props, 2)
  buttonWithText(tree, 'Check Answers').props.onClick()
  tree = harness.render(props)
  assert.match(textContent(tree), /Correct\. Correct answers: A\. A; C\. C/)
  assert.equal(walk(tree, (node) => node.props?.role === 'group' && node.props['aria-label'] === 'Select 2 answers').length, 1)
})

test('imported one-answer arrays keep ordinary single-select behavior', () => {
  const harness = createCardHarness()
  const props = { questionNumber: 5, question: 'One answer from imported bank', options: ['No', 'Yes'], correctAnswers: [1] }
  let tree = clickOption(harness, props, 0)
  tree = clickOption(harness, props, 1)
  assert.equal(optionButtons(tree)[0].props['aria-pressed'], false)
  assert.equal(optionButtons(tree)[1].props['aria-pressed'], true)
  buttonWithText(tree, 'Check Answer').props.onClick()
  tree = harness.render(props)
  assert.match(textContent(tree), /Correct answer: B\. Yes/)
})

test('source notice preserves provenance/evidence and does not synthesize an explanation', () => {
  const harness = createCardHarness()
  const props = {
    questionNumber: 3,
    question: 'Imported question',
    options: ['A', 'B'],
    correctAnswers: [1],
    source: { repository: 'SF-Questions', commit: 'abc123', path: 'Cloud/quiz.json', questionId: 'Q-42', answerEvidence: 'The source marked B.' },
  }
  let tree = clickOption(harness, props, 1)
  buttonWithText(tree, 'Check Answer').props.onClick()
  tree = harness.render(props)
  const revealed = textContent(tree)
  assert.match(revealed, /Source-provided answer; not independently verified/)
  assert.match(revealed, /SF-Questions@abc123 — Cloud\/quiz\.json \(question Q-42\)/)
  assert.match(revealed, /Source-provided answer evidence: The source marked B\./)
  assert.doesNotMatch(revealed, /Review the official exam outline/)
})

test('long and preformatted text keeps whitespace and wraps across prompt, options, and explanation', () => {
  const harness = createCardHarness()
  const prompt = 'Keep\n  this line\tand-' + 'x'.repeat(180)
  const option = '  option\n' + 'y'.repeat(180)
  const explanation = 'why\n  answer ' + 'z'.repeat(180)
  const props = { questionNumber: 4, question: prompt, options: [option], correctAnswer: 0, explanation }
  let tree = harness.render(props)
  assert.ok(walk(tree, (node) => node.type === 'p' && node.props.className?.includes('whitespace-pre-wrap')).length >= 1)
  assert.match(textContent(tree), /Keep\n  this line\tand-/)
  tree = clickOption(harness, props, 0)
  buttonWithText(tree, 'Check Answer').props.onClick()
  tree = harness.render(props)
  assert.ok(walk(tree, (node) => node.type === 'span' && node.props.className?.includes('[overflow-wrap:anywhere]')).length >= 1)
  assert.match(textContent(tree), /why\n  answer /)
  assert.ok(walk(tree, (node) => typeof node.props?.className === 'string' && node.props.className.includes('[overflow-wrap:anywhere]')).length >= 3)
})

test('quiz JSON-LD includes every correct option and excludes them from distractors', () => {
  const source = read('src/lib/schema-data.ts')
  const compiled = compile(source, 'schema-data.ts', ts.JsxEmit.Preserve)
  const schemaModule = { exports: {} }
  vm.runInNewContext(compiled, {
    module: schemaModule,
    exports: schemaModule.exports,
    process,
    // schema-data reads the generated page-dates map for Article dates.
    require: (specifier) => {
      if (specifier.endsWith('page-dates.json')) return pageDates
      throw new Error(`Unexpected import: ${specifier}`)
    },
  })
  const questions = [
    { question: 'Single', options: ['wrong', 'right'], correctAnswer: 1 },
    { question: 'Multiple', options: ['one', 'two', 'three', 'four'], correctAnswers: [1, 3] },
  ]
  const parts = JSON.parse(JSON.stringify(schemaModule.exports.getQuizJsonLd('Fixture', questions).hasPart))
  assert.deepEqual(parts[0].acceptedAnswer, { '@type': 'Answer', text: 'right' })
  assert.deepEqual(parts[0].suggestedAnswer, [{ '@type': 'Answer', text: 'wrong' }])
  assert.deepEqual(parts[1].acceptedAnswer.map((answer) => answer.text), ['two', 'four'])
  assert.deepEqual(parts[1].suggestedAnswer.map((answer) => answer.text), ['one', 'three'])
})

test('practice section forwards imported answer arrays and provenance to visible cards', () => {
  const jsx = (type, props) => ({ type, props: props ?? {} })
  const source = read('src/components/PracticeQuestionsSection.tsx')
  const compiled = compile(source, 'PracticeQuestionsSection.tsx', ts.JsxEmit.ReactJSX)
  const componentModule = { exports: {} }
  vm.runInNewContext(compiled, {
    module: componentModule,
    exports: componentModule.exports,
    require: (specifier) => {
      if (specifier === 'react') return { useMemo: (factory) => factory(), useState: (initial) => [initial, () => {}] }
      if (specifier === 'react/jsx-runtime') return { jsx, jsxs: jsx }
      if (specifier === '@/components/QuestionCard') return { __esModule: true, default: 'QuestionCard' }
      if (specifier === '@/lib/practice-question-lite') return { INITIAL_PRACTICE_QUESTION_COUNT: 5 }
      throw new Error(`Unexpected import: ${specifier}`)
    },
  })
  const provenance = { repository: 'SF-Questions', commit: 'deadbeef', path: 'source.pdf', questionId: 'item-9' }
  const question = { question: 'Imported', options: ['A', 'B'], correctAnswers: [0, 1], source: provenance }
  const tree = componentModule.exports.default({ heading: 'Practice', questions: [question] })
  const card = walk(tree, (node) => node.type === 'QuestionCard')[0]
  assert.ok(card)
  assert.deepEqual(Array.from(card.props.correctAnswers), [0, 1])
  assert.deepEqual(JSON.parse(JSON.stringify(card.props.source)), provenance)
})

import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import vm from 'node:vm'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const ts = require('typescript')
const react = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const source = await readFile(new URL('../components/ExpertInsightCallout.tsx', import.meta.url), 'utf8')
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.React },
}).outputText
const componentModule = { exports: {} }

vm.runInNewContext(compiled, {
  module: componentModule,
  exports: componentModule.exports,
  React: react,
  require: (specifier) => {
    if (specifier === 'react') return react
    if (specifier === 'lucide-react') return { BookOpen: (props) => react.createElement('svg', props) }
    throw new Error(`Unexpected import: ${specifier}`)
  },
})

test('renders an editorial study-planning note without attribution and preserves its text', () => {
  const insight = 'Review the topic weights before choosing what to study next.'
  const markup = renderToStaticMarkup(react.createElement(componentModule.exports.default, { insight }))

  assert.match(markup, /Study planning note/)
  assert.match(markup, new RegExp(insight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
  assert.match(markup, /<div[^>]*aria-hidden="true"><svg/)
  assert.doesNotMatch(markup, /<img|Krishna Mohan|Expert Insight/)
})

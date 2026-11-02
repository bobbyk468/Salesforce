import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('../../', import.meta.url))
const read = (path) => readFileSync(join(ROOT, path), 'utf8')
const officialWeights = [
  ['Data Modeling/Database Design', 25],
  ['Master Data Management', 5],
  ['Salesforce Data Management', 25],
  ['Data Governance', 10],
  ['Large Data Volume Considerations', 20],
  ['Data Migration', 15],
]

test('Data Architect promoted card uses the current official exam logistics', () => {
  const card = JSON.parse(read('src/lib/cert-page-spike/promoted-associate/data-architect.json'))
  assert.deepEqual(card.certificationCard.examDetails, {
    questions: 60,
    passingScore: '58%',
    duration: '105 min',
    cost: '$400',
  })
  assert.ok(card.examDifficulty.bullets.some((item) => /up to five unscored questions/.test(item)))
  assert.ok(card.examDifficulty.bullets.some((item) => /retake fee: US\$200/.test(item)))
  assert.ok(card.examDifficulty.bullets.some((item) => /Prerequisite: none/.test(item)))
})

test('shared Data Architect logistics, exam weightage, and prerequisite FAQ match the official guide', () => {
  const seo = read('src/lib/cert-seo-data.ts')
  assert.match(seo, /'data-architect': \{ questions: 60, passingScore: '58%', duration: '105 min' \}/)
  assert.match(seo, /'data-architect': '\$400'/)

  const weightages = read('src/lib/exam-weightage-data.ts')
  const block = weightages.match(/'data-architect': \[([\s\S]*?)\n  \],/)
  assert.ok(block, 'Data Architect weightage entry is missing')
  const actualWeights = [...block[1].matchAll(/\{ name: '([^']+)', percentage: (\d+) \}/g)]
    .map(([, name, weight]) => [name, Number(weight)])
  assert.deepEqual(actualWeights, officialWeights)
  assert.equal(actualWeights.reduce((total, [, weight]) => total + weight, 0), 100)

  const faqBlock = seo.match(/'data-architect': \[([\s\S]*?)\n  \],\n  'technical-architect':/)
  assert.ok(faqBlock, 'Data Architect FAQ entry is missing')
  assert.match(faqBlock[1], /lists no prerequisite/i)
  assert.doesNotMatch(faqBlock[1], /need both Application Architect and System Architect/i)

  const prerequisites = read('src/lib/cert-prerequisites.ts')
  const prerequisiteBlock = prerequisites.match(/'data-architect': \{([\s\S]*?)\n  \},/)
  assert.ok(prerequisiteBlock, 'Data Architect prerequisite display entry is missing')
  assert.match(prerequisiteBlock[1], /recommendedPrerequisite: 'app-builder'/)
  assert.doesNotMatch(prerequisiteBlock[1], /requiredPrerequisite:|system-architect/)
  assert.match(prerequisiteBlock[1], /no prerequisite certification is required/)
})

test('related study and tips pages avoid unverified current-release exam alignment', () => {
  const study = read('src/app/data-architect-study-guide/page.tsx')
  const tips = read('src/app/data-architect-exam-tips/page.tsx')
  assert.match(study, /const pageTitle = `ARC-801 Platform Data Architect Study Guide \[\$\{RELEASE_YEAR\}\]`/)
  assert.match(study, /Salesforce Platform Data Architect Study Guide \(\{RELEASE_YEAR\}\)/)
  assert.match(tips, /const pageTitle = `Salesforce Data Architect Exam Tips \(\$\{RELEASE_YEAR\}\)`/)
  assert.doesNotMatch(tips, /RELEASE_CURRENT|Summer ['’]?26/)
  assert.doesNotMatch(study, /RELEASE_CURRENT|Summer ['’]?26/)
})

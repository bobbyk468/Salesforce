import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('../../', import.meta.url))
const read = (path) => readFileSync(join(ROOT, path), 'utf8')

const expectedWeights = [
  ['Managing Resources', 16],
  ['Managing Work Orders', 23],
  ['Managing Scheduling and Optimization', 28],
  ['Configuring Mobility', 10],
  ['Managing Inventory', 8],
  ['Managing Assets', 5],
  ['Configuring Maintenance Plans', 5],
  ['Permissions and Sharing', 5],
]

test('Field Service shared facts match the current Salesforce exam guide', () => {
  const seo = read('src/lib/cert-seo-data.ts')
  assert.match(seo, /'field-service': \{ questions: 60, passingScore: '63%', duration: '105 min' \}/)
  assert.match(seo, /'field-service': 'https:\/\/help\.salesforce\.com\/s\/articleView\?id=005298947&language=en_US&type=1'/)
  const faq = seo.match(/'field-service': \[([\s\S]*?)\n  \],\n  'data-360-consultant':/)
  assert.ok(faq, 'Field Service FAQ entry is missing')
  assert.match(faq[1], /Salesforce Certified Platform Administrator/)
  assert.match(faq[1], /Salesforce Certified Agentforce Service Consultant/)

  const weights = read('src/lib/exam-weightage-data.ts')
  const block = weights.match(/'field-service': \[([\s\S]*?)\n  \],/)
  assert.ok(block, 'Field Service weightage entry is missing')
  const actual = [...block[1].matchAll(/\{ name: '([^']+)', percentage: (\d+) \}/g)]
    .map(([, name, weight]) => [name, Number(weight)])
  assert.deepEqual(actual, expectedWeights)
  assert.equal(actual.reduce((sum, [, weight]) => sum + weight, 0), 100)

  const prerequisites = read('src/lib/cert-prerequisites.ts')
  const prerequisite = prerequisites.match(/'field-service': \{([\s\S]*?)\n  \},/)
  assert.ok(prerequisite, 'Field Service prerequisite entry is missing')
  assert.match(prerequisite[1], /requiredPrerequisites: \['administrator', 'service-cloud'\]/)
  assert.match(prerequisites, /prereq\?\.requiredPrerequisites\?\.length/)
  assert.match(prerequisites, /cert\.requiredPrerequisites\?\.includes\(slug\)/)
  assert.match(prerequisites, /export function getRequiredPrerequisites\(slug: string\): string\[\]/)

  const alert = read('src/components/PrerequisiteAlert.tsx')
  assert.match(alert, /requiredCerts\.map\(\(requiredCert\)/)
  assert.match(alert, /complete all of these certifications/)
  const intro = read('src/components/CertIntroParagraph.tsx')
  assert.match(intro, /requiredPrereqs\.map\(\(requiredSlug, index\)/)
  assert.match(intro, /Before attempting this exam, complete both required certifications/)
})

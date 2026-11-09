import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8')
const agentGuide = 'https://help.salesforce.com/s/articleView?id=005298924&language=en_US&type=1'
const muleGuide = 'https://help.salesforce.com/s/articleView?id=005298959&language=en_US&type=1'
const pages = [
  'components/certifications/merged/agentforce-specialist-study-guide.tsx',
  'components/certifications/merged/agentforce-specialist-exam-tips.tsx',
  'components/certifications/merged/mulesoft-developer-i-study-guide.tsx',
  'components/certifications/merged/mulesoft-developer-i-exam-tips.tsx',
]
const sources = Object.fromEntries(pages.map((path) => [path, read(path)]))

test('Agentforce pages use current guide logistics, six official weights, and cite Salesforce', () => {
  for (const path of pages.slice(0, 2)) {
    assert.ok(sources[path].includes(agentGuide), `${path} links the official guide`)
    assert.match(sources[path], /72%/)
    assert.doesNotMatch(sources[path], /73%|63%|40 multiple-choice|70-minute/)
  }
  for (const title of ['Prompt Engineering', 'Data 360 Fundamentals', 'AI Agents', 'Testing, Deployment, and Maintenance', 'Governance and Observability', 'Multi-Agent Orchestration']) {
    assert.ok(sources[pages[0]].includes(title), `study guide includes ${title}`)
    assert.ok(sources[pages[1]].includes(title), `exam tips include ${title}`)
  }
})

test('MuleSoft pages state guide alignment/logistics, list all 12 published domains, and cite Salesforce', () => {
  for (const path of pages.slice(2)) {
    assert.ok(sources[path].includes(muleGuide), `${path} links the official guide`)
    assert.match(sources[path], /70%/)
    assert.match(sources[path], /Spring 24/)
    assert.doesNotMatch(sources[path], /MCIA-Level-1|~70%|78%\+|30%\).*22%/)
  }
  for (const title of ['Creating Application Networks', 'Designing APIs', 'Accessing and Modifying Mule Events', 'Structuring Mule Applications', 'Building API Implementation Interfaces', 'Using Connectors', 'Processing Records', 'Transforming Data', 'Routing Events', 'Handling Errors', 'Debugging and Troubleshooting Mule Applications', 'Deploying and Managing APIs and Integrations']) {
    assert.ok(sources[pages[2]].includes(title), `study guide includes ${title}`)
    assert.ok(sources[pages[3]].includes(title), `exam tips include ${title}`)
  }
})

test('Agentforce pages avoid universal agent masking claims and unsupported first-try/pass-frequency claims', () => {
  for (const path of pages.slice(0, 2)) {
    const source = sources[path]
    assert.match(source, /pattern-based and field-based data masking is disabled for agents/)
    assert.doesNotMatch(source, /consistently fail|first attempt|passers from retakers|mask(?:s|ing) (?:all )?(?:PII|sensitive data) before/i)
  }
})

test('parent-integrated shared objective and logistics records contain corrected P2 values', () => {
  const logistics = read('lib/cert-seo-data.ts')
  const weights = read('lib/exam-weightage-data.ts')
  const expected = {
    'agentforce-specialist': {
      score: '72%', duration: '105 min',
      domains: [['Prompt Engineering', 20], ['Data 360 Fundamentals', 20], ['AI Agents', 35], ['Testing, Deployment, and Maintenance', 10], ['Governance and Observability', 10], ['Multi-Agent Orchestration', 5]],
    },
    'mulesoft-developer-i': {
      score: '70%', duration: '120 min',
      domains: [['Creating Application Networks', 7], ['Designing APIs', 8], ['Accessing and Modifying Mule Events', 10], ['Structuring Mule Applications', 10], ['Building API Implementation Interfaces', 7], ['Using Connectors', 10], ['Processing Records', 10], ['Transforming Data', 10], ['Routing Events', 8], ['Handling Errors', 8], ['Debugging and Troubleshooting Mule Applications', 5], ['Deploying and Managing APIs and Integrations', 7]],
    },
  }
  for (const [slug, facts] of Object.entries(expected)) {
    const entry = logistics.match(new RegExp(`'${slug}': \\{ questions: (\\d+), passingScore: '([^']+)', duration: '([^']+)' \\}`))
    assert.ok(entry, `Missing exact ${slug} logistics entry`)
    assert.deepEqual(entry.slice(1), ['60', facts.score, facts.duration])
    const card = JSON.parse(read(`lib/cert-page-spike/promoted-associate/${slug}.json`)).certificationCard
    assert.deepEqual(card.examDetails, { questions: '60 multiple-choice + up to 5 unscored', passingScore: facts.score, duration: facts.duration, cost: '$200' })
    const block = weights.match(new RegExp(`'${slug}': \\[([\\s\\S]*?)\\n  \\],`))
    assert.ok(block, `Missing ${slug} objective block`)
    const domains = [...block[1].matchAll(/\{ name: '([^']+)', percentage: (\d+) \}/g)].map(([, name, percentage]) => [name, Number(percentage)])
    assert.deepEqual(domains, facts.domains)
    assert.equal(domains.reduce((total, [, percentage]) => total + percentage, 0), 100)
  }
})

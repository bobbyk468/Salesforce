import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('../../', import.meta.url))
const read = (path) => readFileSync(join(ROOT, path), 'utf8')
const slugs = ['email-specialist', 'pardot-specialist']
const cardPath = (slug) => `src/lib/cert-page-spike/promoted-associate/${slug}.json`
const officialDomains = {
  'email-specialist': [
    ['Email Marketing Best Practices', 10],
    ['Content Creation and Delivery', 24],
    ['Marketing Automation', 26],
    ['Subscriber and Data Management', 26],
    ['Insights and Analytics', 14],
  ],
  'pardot-specialist': [
    ['Visitors and Prospects', 8],
    ['Administration', 11],
    ['Account Engagement Forms, Form Handlers and Landing Pages', 20],
    ['Lead Management', 24],
    ['Email Marketing', 20],
    ['Engagement Studio', 17],
  ],
}
const officialLogistics = {
  'email-specialist': { questions: 60, passingScore: '67%', duration: '90 min', cost: '$200' },
  'pardot-specialist': { questions: 60, passingScore: '72%', duration: '90 min', cost: '$200' },
}

function getSharedWeights(source, slug) {
  const block = source.match(new RegExp(`  '${slug}': \\[([\\s\\S]*?)\\n  \\],`))
  assert.ok(block, `missing ${slug} shared exam-weightage slice`)
  return [...block[1].matchAll(/\{ name: '([^']+)', percentage: (\d+) \}/g)]
    .map(([, name, weight]) => [name, Number(weight)])
}

test('marketing certification cards expose current official names and visible exam logistics', () => {
  for (const slug of slugs) {
    const body = JSON.parse(read(cardPath(slug)))
    const details = body.certificationCard.examDetails
    assert.deepEqual(details, officialLogistics[slug])
    assert.match(body.certificationCard.code, /Marketing Cloud (?:Engagement|Account Engagement) Specialist/)
    assert.ok(body.examDifficulty.bullets.some((item) => /up to five unscored questions/.test(item)))
    assert.equal(Object.hasOwn(details, 'retakeFee'), false, 'retake fee is not an exposed card field')
  }
})

test('shared logistics slices match official question count, passing score, and duration', () => {
  const source = read('src/lib/cert-seo-data.ts')
  for (const slug of slugs) {
    const match = source.match(new RegExp(`'${slug}': \\{ questions: (\\d+), passingScore: '([^']+)', duration: '([^']+)' \\}`))
    assert.ok(match, `missing ${slug} shared exam logistics`)
    assert.deepEqual({ questions: Number(match[1]), passingScore: match[2], duration: match[3] }, {
      questions: officialLogistics[slug].questions,
      passingScore: officialLogistics[slug].passingScore,
      duration: officialLogistics[slug].duration,
    })
  }
})

test('shared exam-weightage slices match official domains and each totals 100 percent', () => {
  const source = read('src/lib/exam-weightage-data.ts')
  for (const slug of slugs) {
    const weights = getSharedWeights(source, slug)
    assert.deepEqual(weights, officialDomains[slug])
    assert.equal(weights.reduce((total, [, value]) => total + value, 0), 100)
    const body = JSON.parse(read(cardPath(slug)))
    assert.deepEqual(body.certificationCard.topics, weights.map(([name, weight]) => `${name} (${weight}%)`))
  }
})

test('first five Email Specialist questions include the bounded factual corrections', () => {
  const questions = JSON.parse(read(cardPath('email-specialist'))).sampleQuestions.slice(0, 5)
  assert.match(questions[0].question, /scripting language/)
  assert.match(questions[0].explanation, /AMPscript/)
  assert.match(questions[2].explanation, /engagement data/i)
  assert.match(questions[2].explanation, /data is insufficient/i)
  assert.match(questions[3].explanation, /does not establish inbox placement/i)
  assert.match(questions[4].question, /stores subscriber status/)
  assert.match(questions[4].explanation, /record remains in the list/i)
})

test('first five Account Engagement questions avoid scheduled-rule implication', () => {
  const questions = JSON.parse(read(cardPath('pardot-specialist'))).sampleQuestions.slice(0, 5)
  assert.match(questions[0].explanation, /identified by email address/i)
  assert.match(questions[1].explanation, /engagement activities/i)
  assert.match(questions[2].explanation, /Scoring measures how interested/i)
  assert.match(questions[3].explanation, /existing external forms/i)
  assert.match(questions[4].explanation, /continually check updated prospects/i)
  assert.match(questions[4].explanation, /Repeat Rule/i)
  assert.doesNotMatch(questions[4].explanation, /on a schedule/i)
})

test('the four marketing guide and tips pages expose current logistics in visible and FAQ content', () => {
  const pageFiles = {
    'email-specialist': [
      'src/app/email-specialist-study-guide/page.tsx',
      'src/app/email-specialist-exam-tips/page.tsx',
    ],
    'pardot-specialist': [
      'src/app/pardot-specialist-study-guide/page.tsx',
      'src/app/pardot-specialist-exam-tips/page.tsx',
    ],
  }
  for (const slug of slugs) {
    const sources = pageFiles[slug].map(read)
    const joined = sources.join('\n')
    const { passingScore } = officialLogistics[slug]
    assert.match(joined, new RegExp(`'90 min'|90-minute time limit|90 minutes`))
    assert.ok(joined.includes(passingScore), `${slug} pages should show ${passingScore}`)
    assert.match(joined, /up to five (?:unscored|unscored questions)/i)
    assert.match(joined, /No (?:formal )?prerequisite is required|no prerequisite/i)
    assert.match(joined, /RELEASE_YEAR/)
    assert.doesNotMatch(joined, /RELEASE_CURRENT|Summer ['’]26|105 min|105 minutes|65%|~65%|77%\+|75%\+/)
    assert.match(sources[0], /faqItems=\{faqItems\}/, 'study guide FAQ is used by structured data')
    assert.match(sources[1], /faqItems=\{faqItems\}/, 'tips FAQ is used by structured data')
  }
})

test('guide and tips pages present official domain weights and no fabricated readiness benchmark', () => {
  for (const slug of slugs) {
    const [guide, tips] = (slug === 'email-specialist'
      ? ['src/app/email-specialist-study-guide/page.tsx', 'src/app/email-specialist-exam-tips/page.tsx']
      : ['src/app/pardot-specialist-study-guide/page.tsx', 'src/app/pardot-specialist-exam-tips/page.tsx']
    ).map(read)
    for (const [domain, weight] of officialDomains[slug]) {
      assert.ok(guide.includes(`name: '${domain}', weight: ${weight}`), `${slug} study guide missing ${domain} ${weight}%`)
      assert.ok(tips.includes(`${domain}</span>`) || tips.includes(`${domain} `) || tips.includes(`${domain} is weighted`), `${slug} tips should mention ${domain}`)
      assert.ok(tips.includes(`${weight}%`), `${slug} tips should mention official ${weight}% weight`)
    }
    assert.doesNotMatch(`${guide}\n${tips}`, /Aim for <strong>\d+%\+|\d+%\+ on \d+ timed full mocks|guarantees? (?:you are )?ready/i)
  }
})

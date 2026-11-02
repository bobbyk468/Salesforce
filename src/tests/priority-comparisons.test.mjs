import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const pages = {
  education: await readFile(new URL('../app/education-cloud-vs-nonprofit-cloud-consultant/page.tsx', import.meta.url), 'utf8'),
  fieldService: await readFile(new URL('../app/field-service-vs-service-cloud-consultant/page.tsx', import.meta.url), 'utf8'),
}

test('comparison metadata uses calendar year and concise descriptions', () => {
  for (const source of Object.values(pages)) {
    assert.match(source, /import \{ RELEASE_YEAR \} from '@\/lib\/release-data'/)
    assert.doesNotMatch(source, /RELEASE_CURRENT/)
    const title = source.match(/const pageTitle = `([^`]+)`/)?.[1]?.replace('${RELEASE_YEAR}', '2026')
    const description = source.match(/const pageDescription = `([^`]+)`/)?.[1]
    assert.ok(title && title.length <= 60, `title length: ${title?.length}`)
    assert.ok(description && description.length <= 160, `description length: ${description?.length}`)
    assert.match(source, /<ContentPageSchemas[^>]+faqItems=\{faqItems\}/)
  }
})

test('Education comparison presents exam closure and avoids unsupported exam or career claims', () => {
  const source = pages.education
  assert.match(source, /registration has closed/i)
  assert.match(source, /retirement for February 1, 2027/i)
  assert.match(source, /005298934/)
  assert.match(source, /EDA and NPSP are not supported together/i)
  assert.doesNotMatch(source, /(?:\{\s*area:\s*'Fee'|\{\s*area:\s*'Questions'|\{\s*area:\s*'Passing score'|Avg Salary|Most successful candidates|strongly recommend(?:ed)? as a prerequisite|\$\d+|~\d+%)/i)
  assert.doesNotMatch(source, /WhichFirstBlock/)
})

test('Field Service comparison avoids universal ordering and separates workflow components', () => {
  const source = pages.fieldService
  assert.match(source, /core features, a managed package, and a mobile app/i)
  assert.match(source, /add the managed package and mobile app as needed/i)
  assert.match(source, /supports cases as well as work orders/i)
  assert.match(source, /learning example|Learning example/)
  assert.match(source, /not a claim about exam frequency/i)
  assert.doesNotMatch(source, /Avg Salary|Job demand|Most successful|take after Service Cloud|FSL managed package required|~\d+%|\$\d+/i)
})

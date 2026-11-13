// scripts/verify-admin-seo.mjs
// Verifies the ADM-201 / Plat-Admn-201 consolidation and SEO overhaul on
// /certifications/administrator against the ACTUAL implementation in this
// repo (not the illustrative snippets in the original spec).
//
// Usage: start the production server (npm run build && npm run start -- -p 3000)
// then run: node scripts/verify-admin-seo.mjs

const BASE_URL = process.env.VERIFY_BASE_URL || 'http://localhost:3000'
let failures = 0

function assertCheck(condition, label, detail = '') {
  if (condition) {
    console.log(`[PASS] ${label}`)
  } else {
    failures++
    console.error(`[FAIL] ${label}${detail ? ' -> ' + detail : ''}`)
  }
}

async function verifyRedirects() {
  for (const oldSlug of ['/adm-201-study-guide', '/adm-201-exam-tips']) {
    const res = await fetch(`${BASE_URL}${oldSlug}`, { redirect: 'manual' })
    const loc = res.headers.get('location') || ''
    assertCheck(
      (res.status === 301 || res.status === 308) && loc.endsWith('/certifications/administrator'),
      `Permanent redirect on ${oldSlug}`,
      `Got status=${res.status}, location=${loc}`
    )
  }
}

async function verifySitemap() {
  const res = await fetch(`${BASE_URL}/sitemap.xml`)
  const xml = await res.text()
  assertCheck(
    res.status === 200 && xml.includes('https://www.trailblazeprep.com/certifications/administrator'),
    'sitemap.xml includes canonical /certifications/administrator'
  )
  assertCheck(
    !xml.includes('/adm-201-study-guide') && !xml.includes('/adm-201-exam-tips'),
    'sitemap.xml excludes redirected /adm-201-study-guide and /adm-201-exam-tips'
  )
}

async function verifyAdminPage() {
  const res = await fetch(`${BASE_URL}/certifications/administrator`)
  const html = await res.text()

  assertCheck(res.status === 200, 'GET /certifications/administrator returns HTTP 200')

  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
  const actualTitle = titleMatch ? titleMatch[1].trim() : ''
  assertCheck(
    actualTitle === 'Platform Administrator (Plat-Admn-201 / ADM-201) Study Guide',
    'Exact <title> tag on /certifications/administrator',
    `Found: "${actualTitle}"`
  )

  const descMatch =
    html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i) ||
    html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i)
  const actualDesc = descMatch ? descMatch[1] : ''
  assertCheck(
    actualDesc.includes('Plat-Admn-201') && actualDesc.includes('ADM-201') && actualDesc.includes('Agentforce'),
    "<meta name='description'> rendered in <head> with required tokens",
    `Found: "${actualDesc}"`
  )

  assertCheck(
    html.includes('rel="canonical"') && html.includes('href="https://www.trailblazeprep.com/certifications/administrator"'),
    "<link rel='canonical'> rendered in <head>"
  )

  assertCheck(!/<meta[^>]+name=["']keywords["']/i.test(html), "Zero <meta name='keywords'> tag present")

  const ldMatches = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
  assertCheck(ldMatches.length > 0, 'JSON-LD schema script tag(s) present')
  const allLdText = ldMatches.map((m) => m[1]).join('\n')

  for (const alias of [
    'Platform Administrator',
    'Salesforce Platform Administrator',
    'Salesforce Certified Administrator',
    'Salesforce Administrator Certification',
    'Salesforce Admin Certification',
    'ADM-201',
    'ADM 201',
    'Plat-Admn-201',
    'CRT-101',
  ]) {
    assertCheck(allLdText.includes(`"${alias}"`), `JSON-LD schema includes alternateName/identifier "${alias}"`)
  }
  assertCheck(allLdText.includes('EducationalOccupationalCredential'), 'JSON-LD includes EducationalOccupationalCredential type')

  const headings = [...html.matchAll(/<h([1-3])[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => ({
    level: `h${m[1]}`,
    text: m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(),
  }))

  const h1s = headings.filter((h) => h.level === 'h1')
  assertCheck(
    h1s.length === 1 && h1s[0].text.includes('Salesforce Certified Platform Administrator') && h1s[0].text.includes('Plat-Admn-201 / ADM-201'),
    'Single H1 with official title and both exam codes',
    `Found ${h1s.length} H1(s): ${JSON.stringify(h1s)}`
  )

  const dumpsInHeadings = headings.filter((h) => /Platform Administrator Dumps/i.test(h.text))
  assertCheck(
    dumpsInHeadings.length === 0,
    "Zero H1/H2/H3 headings contain 'Platform Administrator Dumps'",
    `Found: ${JSON.stringify(dumpsInHeadings)}`
  )

  assertCheck(
    headings.some((h) => h.text.includes('Official Exam Code of Conduct: Practice Questions vs. Unofficial Exam Dumps')),
    'Updated Code of Conduct H2 heading present'
  )

  for (const forbidden of [
    'together are ~40%',
    'Spend 40% of study time',
    'Lowest-weight section: Chatter',
  ]) {
    assertCheck(!html.includes(forbidden), `Zero occurrences of stale/contradictory string: "${forbidden}"`)
  }

  for (const requiredConcept of [
    '62% of the exam',
    'Muting Permission Set',
    'Freeze',
    'Shared Activities',
    'System email only',
    'AgentExchange',
    'Cross Filter',
    'Reporting Snapshot',
    'Migrate to Flow',
    'Conversation Preview',
    'Einstein Trust Layer',
  ]) {
    assertCheck(html.includes(requiredConcept), `Official blueprint concept present in SSR HTML: "${requiredConcept}"`)
  }

  // The question bank was trimmed to 20 total questions (11 sample + 9 extra)
  // on 2026-11-13 to keep the page focused rather than exhaustive.
  // React's SSR output inserts `<!-- -->` hydration boundary comments between
  // the adjacent "Question ", {questionNumber}, ": " JSX text expressions, so
  // match loosely instead of a literal "Question 1:" substring.
  for (let q = 1; q <= 20; q++) {
    const pattern = new RegExp(`Question\\s*(?:<!--\\s*-->)?\\s*${q}\\s*(?:<!--\\s*-->)?\\s*:`)
    assertCheck(pattern.test(html), `SSR Question ${q} rendered in initial HTML`)
  }

  assertCheck(
    !html.includes('href="/adm-201-study-guide"') && !html.includes('href="/adm-201-exam-tips"'),
    'Zero links on /certifications/administrator point to /adm-201-study-guide or /adm-201-exam-tips'
  )
}

async function verifyHomepageFooterAndRoleHub() {
  for (const path of ['/', '/certifications/role/administrator', '/how-to-become-salesforce-administrator']) {
    const res = await fetch(`${BASE_URL}${path}`)
    const html = await res.text()
    assertCheck(res.status === 200, `GET ${path} returns HTTP 200`)
    assertCheck(
      !html.includes('href="/adm-201-study-guide"') && !html.includes('href="/adm-201-exam-tips"'),
      `Zero links on ${path} point to redirected /adm-201-study-guide or /adm-201-exam-tips`
    )
  }

  const homeHtml = await (await fetch(`${BASE_URL}/`)).text()
  assertCheck(
    homeHtml.includes('Start Free Platform Administrator (ADM-201) Practice Test'),
    'Homepage bottom CTA includes updated anchor text'
  )

  const roleHtml = await (await fetch(`${BASE_URL}/certifications/role/administrator`)).text()
  assertCheck(
    roleHtml.includes('Platform Administrator (Plat-Admn-201 / ADM-201) Study Guide'),
    'Administrator role hub includes updated study-guide anchor text'
  )
}

;(async () => {
  try {
    await verifyRedirects()
    await verifySitemap()
    await verifyAdminPage()
    await verifyHomepageFooterAndRoleHub()
    console.log('\n==========================================')
    if (failures === 0) {
      console.log('PASSED: All verification checks succeeded (0 failures).')
      process.exit(0)
    } else {
      console.error(`FAILED: ${failures} verification check(s) failed.`)
      process.exit(1)
    }
  } catch (err) {
    console.error('Verification script execution error:', err)
    process.exit(1)
  }
})()

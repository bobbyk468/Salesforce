// scripts/verify-sitewide-audit.mjs
// Usage: PORT=3100 npm run start, then
//   PORT=3100 node scripts/verify-sitewide-audit.mjs
// VERIFY_BASE_URL or argv[2] override PORT.
const BASE_URL =
  process.env.VERIFY_BASE_URL ||
  process.argv[2] ||
  `http://localhost:${process.env.PORT || 3100}`;

/**
 * Fetches a path, following permanent redirects.
 *
 * A few credentials are reachable at an older slug that 301s to the canonical
 * one (/certifications/data-cloud-consultant -> /certifications/data-360-consultant).
 * Those redirects are deliberate: one indexable URL per credential. The audit
 * follows them and asserts the content on the canonical page, and reports the
 * URL it ended up on, rather than asking the site to serve both.
 */
async function fetchPage(path) {
  const res = await fetch(`${BASE_URL}${path}`, { redirect: 'follow' });
  const html = await res.text();
  const resolved = new URL(res.url).pathname;
  return { path, resolved, redirected: resolved !== path, status: res.status, html };
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const SAMPLE_CERTS = [
  { path: '/certifications/administrator', full: 'salesforce certified platform administrator', short: 'platform administrator', codes: ['adm-201', 'plat-admn-201'] },
  { path: '/certifications/developer-1', full: 'salesforce certified platform developer i', short: 'platform developer i', codes: ['pd1', 'plat-dev-201'] },
  { path: '/certifications/app-builder', full: 'salesforce certified platform app builder', short: 'platform app builder', codes: ['dev-402', 'plat-admn-202'] },
  { path: '/certifications/agentforce-specialist', full: 'salesforce certified agentforce specialist', short: 'agentforce specialist', codes: ['ai-201'] },
  { path: '/certifications/data-cloud-consultant', full: 'salesforce certified data 360 consultant', short: 'data 360 consultant', codes: ['data-con-101'] },
  { path: '/certifications/platform-foundations', full: 'salesforce certified platform foundations', short: 'platform foundations', codes: ['plat-101'] },
  { path: '/certifications/data-architect', full: 'salesforce certified platform data architect', short: 'platform data architect', codes: ['plat-arch-201'] },
  { path: '/certifications/b2c-commerce-architect', full: 'salesforce certified b2c commerce architect', short: 'b2c commerce architect', codes: ['arch-303'] },
  { path: '/certifications/tableau-data-analyst', full: 'tableau certified data analyst', short: 'tableau data analyst', codes: ['analytics-da-201'] },
];

async function run() {
  let failures = 0;
  const assert = (cond, msg) => {
    if (!cond) { console.error(`FAIL: ${msg}`); failures++; }
    else { console.log(`PASS: ${msg}`); }
  };

  console.log(`\nRunning Site-Wide Audit Verification against ${BASE_URL}...\n`);

  for (const cert of SAMPLE_CERTS) {
    const page = await fetchPage(cert.path);
    assert(
      page.status === 200,
      page.redirected
        ? `${cert.path} resolves to ${page.resolved} with HTTP 200`
        : `${cert.path} returns HTTP 200`,
    );
    const title = (page.html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '').trim();
    assert(title.length <= 60 && !/Study Guide|Study Notes|Questions/i.test(title), `${cert.path} <title> is <= 60 chars with no filler words ("${title}")`);
    const text = stripTags(page.html).toLowerCase();
    const required = [
      cert.full, `${cert.full} dumps`, `${cert.full} questions`,
      `${cert.short} dumps`, `${cert.short} questions`,
      ...cert.codes.flatMap((c) => [`${c} dumps`, `${c} questions`]),
    ];
    for (const phrase of required) {
      assert(text.includes(phrase), `${cert.path} contains exact phrase: "${phrase}"`);
    }
    assert(!text.includes('seles map'), `${cert.path} has no garbled OCR text ("seles map")`);
    assert(!text.includes('not been independently verified'), `${cert.path} has no unverified repository disclaimer`);
    assert(!/sample questions\s+\./i.test(text), `${cert.path} has no space-before-period typo`);
    const tocIds = [...page.html.matchAll(/href="#([a-z0-9-_]+)"/gi)].map((m) => m[1]);
    for (const id of new Set(tocIds)) {
      if (id === 'main-content') continue;
      assert(new RegExp(`id=["']${id}["']`, 'i').test(page.html), `${cert.path} TOC link #${id} has matching id="${id}" in DOM`);
    }
  }

  const report = await fetchPage('/salesforce-certification-report-2026');
  assert(report.status === 200, `/salesforce-certification-report-2026 returns HTTP 200`);
  const reportText = stripTags(report.html);
  assert(!reportText.includes('600,078,583,258') && !/\$[0-9]{3},[0-9]{3},[0-9]{3}/.test(reportText),
    `/salesforce-certification-report-2026 fixed string-concatenation fee bug`);

  const sitemap = await fetchPage('/html-sitemap');
  assert(sitemap.status === 200, `/html-sitemap returns HTTP 200`);
  const certLinksOnSitemap = [...sitemap.html.matchAll(/href=["']\/certifications\/[a-z0-9-]+["']/gi)];
  assert(certLinksOnSitemap.length >= 90, `/html-sitemap links to individual certification pages (found ${certLinksOnSitemap.length})`);

  const roleHubs = [
    '/certifications/role/administrator', '/certifications/role/developer', '/certifications/role/consultant',
    '/certifications/role/architect', '/certifications/role/accredited-professional', '/certifications/role/designer',
  ];
  for (const hubPath of roleHubs) {
    const hub = await fetchPage(hubPath);
    assert(hub.status === 200, `${hubPath} returns HTTP 200`);
    const hubText = stripTags(hub.html);
    assert(!hubText.includes('Google searchers usually want a next step'), `${hubPath} removed leaked meta-SEO copy`);
    assert(!hubText.includes('If two certifications look similar. Use'), `${hubPath} fixed broken sentence fragment`);
    assert(!hubText.includes('Start here if this credential matches your current product, role, or project work.'),
      `${hubPath} replaced generic placeholder decision card copy`);
  }

  const editorial = await fetchPage('/editorial-policy');
  assert(!stripTags(editorial.html).includes('Search Console data shows CTR weakness'),
    `/editorial-policy removed internal Search Console CTR bullet`);
  const retake = await fetchPage('/salesforce-exam-retake-policy');
  assert(!stripTags(retake.html).includes('Feb 2026s'), `/salesforce-exam-retake-policy fixed typo`);

  console.log(`\n========================================`);
  if (failures > 0) {
    console.error(`Site-wide verification failed with ${failures} issue(s).`);
    process.exit(1);
  } else {
    console.log(`All site-wide audit verification checks passed!`);
  }
}

run().catch((err) => { console.error(err); process.exit(1); });

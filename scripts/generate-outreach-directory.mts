/**
 * Generates docs/outreach/github-pages-repo/index.html from the real data.
 *
 * Hand-maintaining a list of 87 certifications is how a directory ends up
 * linking to slugs that no longer exist, which is exactly the thing that gets
 * an outreach asset ignored. Run this after any change to the grid:
 *
 *   npm run outreach:directory
 */
import { writeFileSync } from 'node:fs'
import { getCertificationGrid } from '../src/lib/certification-grid-data'
import { EXAM_WEIGHTAGE } from '../src/lib/exam-weightage-data'
import { getCredentialStatus } from '../src/lib/credential-status'

const SITE = 'https://www.trailblazeprep.com'
const NON_SALESFORCE = new Set(['claude'])
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const grid = getCertificationGrid().filter((c) => !NON_SALESFORCE.has(c.slug))
const total = grid.reduce((n, c) => n + c.certs.length, 0)
const withWeightage = Object.keys(EXAM_WEIGHTAGE).filter((s) => !s.endsWith('-practice-test') && !s.startsWith('claude-')).length

const sections = grid
  .map((cat) => {
    const rows = cat.certs
      .map((cert) => {
        const status = getCredentialStatus(cert.slug)
        const note = status ? ` <span class="st">${esc(String(status.kind).replace(/-/g, ' '))}</span>` : ''
        const w = EXAM_WEIGHTAGE[cert.slug]
        const weight = w?.length
          ? `<details><summary>${w.length} sections</summary><ul class="w">${w
              .map((s: { name: string; percentage: number }) => `<li>${esc(s.name)} &mdash; ${s.percentage}%</li>`)
              .join('')}</ul></details>`
          : '<span class="muted">not published</span>'
        return `      <tr>
        <td><a href="${SITE}${cert.href}">${esc(cert.name)} practice questions</a>${note}</td>
        <td>${esc(cert.cost ?? '—')}</td>
        <td>${esc(cert.duration ?? '—')}</td>
        <td>${esc(cert.questions ?? '—')}</td>
        <td>${esc(cert.passingScore ?? '—')}</td>
        <td>${weight}</td>
      </tr>`
      })
      .join('\n')

    return `  <h2 id="${cat.slug}">${esc(cat.name)} <span class="count">${cat.certs.length}</span></h2>
  <p><a href="${SITE}/certifications/role/${cat.slug}">All ${esc(cat.name)} certifications on Trailblaze Prep</a></p>
  <table>
    <thead><tr><th>Certification</th><th>Fee</th><th>Time</th><th>Qs</th><th>Pass</th><th>Section weightage</th></tr></thead>
    <tbody>
${rows}
    </tbody>
  </table>`
  })
  .join('\n\n')

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>2026 Open Salesforce Certification Directory &amp; Section Weightage Reference</title>
<meta name="description" content="Every current Salesforce certification with exam fee, duration, question count, pass mark and official section weightings. Open data, CC BY 4.0.">
<link rel="canonical" href="${SITE}/salesforce-certification-report-2026">
<style>
  :root { --ink:#111827; --muted:#6b7280; --line:#e5e7eb; --accent:#0176d3; --bg:#fff; --card:#f9fafb; }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) { --ink:#f3f4f6; --muted:#9ca3af; --line:#374151; --accent:#5aa9e6; --bg:#0b1220; --card:#111a2b; }
  }
  * { box-sizing:border-box }
  body { margin:0; background:var(--bg); color:var(--ink); font:16px/1.65 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; }
  .wrap { max-width:64rem; margin:0 auto; padding:3rem 16px; }
  h1 { font-size:1.9rem; line-height:1.25; margin:0 0 .5rem; }
  h2 { font-size:1.25rem; margin:2.75rem 0 .35rem; padding-top:.75rem; border-top:1px solid var(--line); }
  .count { font-size:.8rem; color:var(--muted); font-weight:400; }
  p { color:var(--muted); margin:.4rem 0 1rem; }
  a { color:var(--accent); }
  table { border-collapse:collapse; width:100%; font-size:.88rem; }
  th,td { text-align:left; padding:.5rem .6rem .5rem 0; border-bottom:1px solid var(--line); vertical-align:top; }
  th { font-size:.78rem; text-transform:uppercase; letter-spacing:.04em; color:var(--muted); }
  .st { font-size:.72rem; color:#b45309; border:1px solid currentColor; border-radius:.3rem; padding:0 .3rem; white-space:nowrap; }
  .muted { color:var(--muted); font-size:.85rem; }
  .w { margin:.4rem 0 .2rem 1rem; padding:0; font-size:.82rem; color:var(--muted); }
  summary { cursor:pointer; color:var(--accent); font-size:.85rem; }
  nav.toc { background:var(--card); border:1px solid var(--line); border-radius:.6rem; padding:1rem; margin:1.5rem 0; }
  nav.toc ul { display:flex; flex-wrap:wrap; gap:.5rem 1rem; list-style:none; margin:0; padding:0; font-size:.9rem; }
  .row { display:flex; flex-wrap:wrap; gap:.75rem; margin:1.5rem 0; }
  .btn { display:inline-block; padding:.65rem 1.05rem; border-radius:.55rem; background:var(--accent); color:#fff; text-decoration:none; font-weight:600; font-size:.9rem; }
  .btn.alt { background:transparent; color:var(--accent); border:1px solid var(--line); }
  footer { margin-top:3rem; padding-top:1.5rem; border-top:1px solid var(--line); font-size:.85rem; color:var(--muted); }
</style>
</head>
<body>
<div class="wrap">
  <h1>2026 Open Salesforce Certification Directory &amp; Section Weightage Reference</h1>
  <p>All <strong>${total} current Salesforce certifications</strong> across ${grid.length} role tracks, with exam fee,
  duration, scored question count, pass mark and the official section weightings for ${withWeightage} of them.
  Maintained by <a href="${SITE}/">Trailblaze Prep &mdash; free Salesforce certification practice questions</a>.</p>

  <div class="row">
    <a class="btn" href="${SITE}/">Free practice questions &amp; study guides</a>
    <a class="btn alt" href="${SITE}/salesforce-certification-report-2026">2026 Benchmark Report</a>
    <a class="btn alt" href="${SITE}/tools/score-calculator">Exam score calculator</a>
    <a class="btn alt" href="${SITE}/datasets/salesforce-certifications-2026.csv">Dataset (CSV)</a>
  </div>

  <p><strong>An empty cell means Salesforce does not publish that figure</strong> &mdash; it is not a zero.
  Pass marks in particular appear on none of the official certification pages; the ones here come from
  exam guides and should be treated as secondary.</p>

  <nav class="toc" aria-label="Role tracks">
    <ul>
${grid.map((c) => `      <li><a href="#${c.slug}">${esc(c.name)} (${c.certs.length})</a></li>`).join('\n')}
    </ul>
  </nav>

${sections}

  <footer>
    Data: <a href="${SITE}/datasets/salesforce-certifications-2026.json">JSON</a> &middot;
    <a href="${SITE}/datasets/salesforce-certifications-2026.csv">CSV</a> &middot;
    <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.
    Compiled by <a href="${SITE}/">Trailblaze Prep</a> from each credential's own Salesforce page.
    Independent; not affiliated with Salesforce. Salesforce, Trailblazer and Trailhead are trademarks of
    salesforce.com, inc. Generated ${new Date().toISOString().slice(0, 10)}.
  </footer>
</div>
</body>
</html>
`

writeFileSync('docs/outreach/github-pages-repo/index.html', html)
console.log(`index.html: ${total} certifications, ${grid.length} tracks, ${withWeightage} with weightage`)

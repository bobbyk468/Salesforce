# Handoff: the 8-task sitewide spec

**Commit:** `d2891bde` — *seo: alias strip, catalog filter, and 12 factual corrections*
**Branch:** `Summer26` · **Deployed and confirmed on production:** 16 November 2026
**Previous handoff:** `docs/GEMINI-VERIFICATION-2026-11-16.md` (the 95-cert naming registry work)

---

## 1. Read this first: the audit was run against the build, not against the spec

Every claim in the 8 tasks was checked against a local production build before
anything was changed. **The majority were already fixed in the deployed code.**
This is the third consecutive review in which a stale crawl has been the main
source of findings; `docs/GEMINI-REAUDIT-2026-11-14.md` records the same
pattern.

Of roughly 45 discrete claims, **12 were real**. The rest are tabulated in §4 so
they are not reported a fourth time.

---

## 2. What was real, and what was done about it

### 2.1 Factual corrections

Each was checked against the canonical source in the repo
(`SLUG_TO_EXAM_LOGISTICS`, `cert-alias-registry`), never against the spec's own
numbers.

| Page | Was | Now | Canonical source |
|---|---|---|---|
| `/app-builder-vs-developer-i` | Platform Developer I passing score **65%** | **68%** | `SLUG_TO_EXAM_LOGISTICS['developer-1']` |
| `/salesforce-certification-difficulty` | Tableau Data Analyst **$250 / 55Q / 75%** | **$200 / 60Q / 65%** | `SLUG_TO_EXAM_LOGISTICS` + `cert-seo-data` fee map |
| `/salesforce-certification-salary` | one `colSpan={3}` cell ran `$180,000–$250,000+` across Entry, Mid and Senior for CTA | `N/A (requires 5+ yrs)` / `$160,000–$190,000` / `$180,000–$250,000+` | — |
| `/salesforce-exam-retake-policy` | *"Foundations exams have a retake fee of **no retake fee**"* | *"Foundations exams carry no retake fee"* | `RETAKE_POLICY.foundationsRetakeFee` is a noun phrase; the sentence slotted it after *"a retake fee of"* |
| `/architect-certification-path` | roadmap caption described System Architect **then** Application Architect | *"two parallel peer credentials … which both feed CTA"* | — |
| `/become-cta` | Platform Foundations and Platform Administrator badged **Required** | **Recommended Foundation**, and out of the required count | Neither composite architect credential lists either among its four exams |
| `/team` | *"We cover **90+** credentials"* | *"all 95 Salesforce, Tableau, MuleSoft, and Slack certifications"*, read from `getTotalCertCount()` | — |
| `/certifications`, `/become-cta`, `/how-to-become-salesforce-consultant` | retired name **Data Cloud Consultant** on card surfaces | **Data 360 Consultant**, with the former name kept visible for search | `cert-alias-registry['data-360-consultant'].bare` |

Two notes on the above:

- The Tableau Data Analyst card got **all three** figures wrong, and the same
  page's own *"What Makes a Salesforce Exam Difficult?"* section already stated
  65%. The page contradicted itself. Its note also claimed the credential had
  *"the highest passing score here"*, which was written for the wrong 75%
  figure; it now describes what the exam actually assumes.
- The `data-cloud-vs-*` comparison pages **keep** "Data Cloud Consultant". That
  query is the reason those pages exist, and renaming them would cost the
  cluster they target. Only navigational card surfaces were changed.

### 2.2 Catalogue and navigation

**Level badges — the spec named 5 cards; there were 32.**
`SLUG_TO_DIFFICULTY` covered 63 of 95 credentials, so 32 cards rendered with no
level badge at all. All 32 now carry a rating, following the same convention as
the existing entries (Foundations/Associate → easy, role or product specialist →
medium, architect → hard). The four Claude credentials have no published
question count or pass mark, so their rating comes from the stage in the
credential's own name rather than from invented logistics.

`CertificationGrid` now reads `getCertDifficulty(slug)` rather than indexing
`SLUG_TO_DIFFICULTY` directly, so a newly added certification can never render a
blank badge again. All five credentials the spec named match what it asked for:
Marketing Cloud Next Consultant, Agentforce Life Sciences Consultant and Public
Sector Solutions Consultant are Mid-level; Tableau Architect is Advanced;
Tableau Next Consultant is Mid-level.

**`/html-sitemap`** linked the two noindex practice-test aliases. The role hubs
and the header already filter them through `NOINDEX_ALIAS_HREFS`; the sitemap now
does too, leaving exactly 95 certification links.

**`CertificationCatalogFilter`** (new, on `/`) filters all 95 cards in real time
by name, exam code or role track, with a live count and a clear control. It
hides and shows the **server-rendered** cards in place rather than holding its
own copy of the catalogue. Two reasons: all 95 cards stay in the SSR HTML for
crawlers that do not run JavaScript, and the catalogue is not shipped twice.
With JavaScript off the controls never render and nothing is hidden.

### 2.3 Readability

**The alias strip (Task 2)** — `getCertNamingLeadParts` replaces
`getCertNamingLeadText`. The 75-word paragraph is now two sentences plus a
labelled `<dl>` of pills: *Official credential*, *Current exam code*, *Legacy /
alternate codes*, *Also searched as*. Every string that was in the paragraph is
still in SSR text, so all seven search-intent clusters are covered exactly as
before — `verify-all-95-certs-seo.mjs` passes with 0 failures, including its
per-page assertion that every exam code appears somewhere in the page HTML.

Credentials with no verified code render no *Current exam code* row at all,
which keeps the rule agreed in the previous round: no generic `(AP)` and no
self-referential name in place of a code.

**The score calculator** result sat below the section inputs, off-screen on a
phone while you were still typing into them. A slim fixed bar now repeats the
weighted score and the gap to the pass mark on small screens only, clearing any
sticky CTA via the `--sticky-cta-h` variable that component already publishes.

---

## 3. Two items deliberately not done, and why

These conflict with constraints the codebase already documents. Both are
reversible on request.

**`/certifications` got a lookup, not the 95-card grid.** That page is a
directory of the eleven role hubs; the cards live on the homepage. Rendering the
full catalogue there would publish a near-duplicate of the homepage on a second
indexable URL, which on an SEO-driven site is a real cost.
`CertificationQuickFind` gives the same find-by-code behaviour — searchable by
`Plat-Admn-201`, `ADM-201`, `DEV-402`, `PD1`, `AI-201`, `Plat-Arch-201` — without
it, and the server-rendered role tiles remain the no-JavaScript path.

**The "Jump to role track" bar was not converted to a horizontal swipe strip,
and no per-track mobile collapse was added.** Two existing constraints:

- The bar is a fixed-column grid *specifically because* flex-wrap made its row
  count depend on how wide the labels rendered, so a font swap changed the bar's
  height and pushed every track below it down. The comment in
  `CertificationGrid.tsx` records this.
- That same file carries an explicit requirement that every track stay normally
  rendered, because headless audit tools skip `content-visibility` subtrees. A
  collapse that hides cards by default would be worse, not better, for exactly
  the audits this work is measured by.

Also worth noting: the 12-pill *"Choose your role"* bar the spec describes no
longer exists. It was collapsed into a single Certifications menu in earlier
work; what remains is the mobile drawer's accordion, which is appropriate for a
drawer.

---

## 4. Claims that were already fixed — please do not re-report

All verified absent or already correct against the deployed build on
16 November 2026.

### Task 1 (certification pages)

| Claim | Finding |
|---|---|
| Legacy stacked supplement blocks, 2–4 contradictory weightage breakdowns, 3 FAQ sections | One weightage block and one FAQ heading per page. The apparent "2 FAQs" is the heading plus its table-of-contents link |
| `developer-2` quick facts say `$400` | Renders `$200`, retake `$100` |
| `developer-2` recommends Platform Developer II to itself | Absent |
| `business-analyst` 7-section and 4-section legacy weight blocks, duplicate Q15 | Absent |
| `strategy-designer` conflicting weight blocks, `70% discount retake voucher / Kryterion` | Absent; "Kryterion" appears nowhere on the page |
| `application-architect` `Advanced Administrator ($200)`, `63%` pass, "all four pillars 25%", false Data/Sharing overlap | Absent. The one "Heroku Architect" string is a related-certification link, not a System Architect prerequisite claim |
| `data-architect` "All four domains are 25%", "Prerequisites: Application Architect, System Architect", duplicate heatmap | Absent |
| `mulesoft-platform-architect` "About 67% to pass" | Absent; `67%` appears nowhere on the page |
| `tableau-consultant` `$250` summary badge | Absent |
| `slack-administrator` duplicated sentence | Two occurrences, one in the intro lead and one in a FAQ answer — different contexts, not a repeat |
| Truncated `Key takeaway: Database.` / `Test.` | The string `Key takeaway:` does not exist anywhere on the site |
| `Show 5 more questions` / `Show 10 more questions` | No truncation on any of the 95 pages |
| Consecutive duplicate headings | The verifier asserts this per page and passes. The 4× `Exam Hard?` count is the `lg:hidden` mobile `<summary>`, the desktop `<h2>`, and the two RSC flight-payload copies |

### Task 3 (role hubs)

| Claim | Finding |
|---|---|
| Duplicate 9th item on `/role/administrator`, 7th on `/role/marketing` | The "Practice Test" strings are the global navigation strip, present on every page |
| `/` meta description says "all 91" | Already "all 95" |
| `/role/architect` FAQ #1 wrong, Heroku Architect under System Architect, `(ARC-801)` | Already correct, including the "seven unique exams rather than eight" note. `ARC-801` appears nowhere |
| `/role/associate` recommends retired AI Associate first | Already leads with Platform Foundations (Plat-101) and labels AI Associate "Retired Feb 2026 – Historical Guide" |
| Placeholder "Most candidates in this role" cards on AP / designer / tableau hubs | All three already have persona-specific decision cards; the placeholder string is absent |

### Tasks 4, 5, 7, 8

| Claim | Finding |
|---|---|
| 136 legacy `*-exam-tips` / `*-study-guide` links on `/html-sitemap` | Zero |
| `/salesforce-exam-retake-policy` card/FAQ vs key-facts contradiction, Webassessor/Kryterion, `retired Feb 2026s` typo | Already reconciled on Trailhead Academy / Pearson VUE. None of those strings present |
| `/app-builder-vs-developer-i` duplicate "Take … First If" section | Two headings, but they are the intended pair (App Builder / Platform Developer I), not a duplicate |
| `/contact` four unclickable bullet questions | Already full question-and-answer items |
| `/privacy` `Last updated: 10/29/2026` | Already `Last updated: 7 November 2026` |
| Duplicate secondary header strip rendering twice | One occurrence |
| `<pre><code>` and 3-column tables lacking overflow containment | Every `<pre>` already has `overflow-x-auto`; a scan of all `.tsx` found one table without a wrapper, and it is `sr-only` |
| Task 8 — titles within budget | 0 violations across 178 pages, before and after |

---

## 5. Verification output

### Local production build, `PORT=3100`

```
### npm run build
exit=0
✓ Compiled successfully in 2.2s

### npm run validate:seo:lengths
Checked 178 pages. Violations: 0
All titles and descriptions match route-specific ranges. ✓

### VERIFY_BASE_URL=http://localhost:3100 node scripts/verify-all-95-certs-seo.mjs
Checks passed: 6681 | Checks failed: 0
SUCCESS: All 95 certification pages, homepage cards, role hubs, exam logistics
pages, and permanent redirects passed with 0 failures!

### VERIFY_BASE_URL=http://localhost:3100 node scripts/verify-sitewide-audit.mjs
All site-wide audit verification checks passed!

### VERIFY_BASE_URL=http://localhost:3100 node scripts/verify-95-certs-accuracy-and-uniqueness.mjs
Audited 95 certification pages: 95/95 passed cleanly.
All 95 certification pages passed mapping, uniqueness, and accuracy checks!

### npm run test:search
ℹ pass 91
ℹ fail 0

### npm run test:questions
ℹ pass 20
ℹ fail 0
```

### The spec's own ad-hoc assertion script

```
PASS: http://localhost:3100/html-sitemap
PASS: http://localhost:3100/certifications
PASS: http://localhost:3100/certifications/developer-2
PASS: http://localhost:3100/certifications/business-analyst
PASS: http://localhost:3100/certifications/strategy-designer
PASS: http://localhost:3100/certifications/application-architect
PASS: http://localhost:3100/certifications/data-architect
PASS: http://localhost:3100/certifications/role/architect
PASS: http://localhost:3100/certifications/role/associate
PASS: http://localhost:3100/certifications/role/accredited-professional
PASS: http://localhost:3100/certifications/role/tableau
PASS: http://localhost:3100/salesforce-exam-retake-policy
```

### Production, `https://www.trailblazeprep.com`

```
### verify-sitewide-audit (production)
All site-wide audit verification checks passed!
exit=0

### verify-95-certs-accuracy-and-uniqueness (production)
Audited 95 certification pages: 95/95 passed cleanly.
exit=0
```

Plus a 34-check pass over every individual change above, run against the live
site — all 34 OK, including: 95 cards in the SSR DOM, every card carrying a
level badge, the five named badges correct, the catalog filter and quick-find
present, the alias strip rendering with all four labels while `developer-2`
still carries `Plat-Dev-301`, `PD2`, `PDII` and `Platform Developer 2`, and the
html-sitemap listing exactly 95 certification slugs with no practice-test alias.

### Edge cache

`cf-cache-status: HIT` on `/`, `/certifications`, `/team`,
`/certifications/administrator`, `/certifications/developer-2` and
`/html-sitemap` — all serving the post-deploy content, so the edge has
refreshed and nothing is stale.

---

## 6. Still open from the previous round

`AP-222` stays permanently out of the registry, and `public-sector-solutions-ap`
keeps `examCodes: []`, per your sign-off. The transition notice pointing active
candidates at `/certifications/public-sector-solutions-consultant`
(`PubSec-Con-201`) shipped in `a96b9c48`.

Credentials still held without a code, pending an issuer-verified URL:
`App-Arch`, `Sys-Arch`, `CTA-Eval`, `CTA-Board`, `CCAO-F`, `CCDV-F`, `CCAR-F`,
`CCAR-P`, `CRT-101`, `CRT-403`, `DEV-450`, `MC-101-BC`, `MCD - Level 1`,
`CRMA-Con-201`, `MCAE-Con-201`. If you can supply working
`trailheadacademy.salesforce.com/certificate/...` URLs for any of them, they can
be added the same way the ten in `046dcdf3` were.

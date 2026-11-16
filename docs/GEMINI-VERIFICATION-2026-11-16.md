# Gemini verification paste, 16 Nov 2026 — site-wide overhaul

Paste-back for the two Gemini briefs of 16 Nov 2026 (the "Universal SEO
Query-Cluster Coverage" brief and the "Content Uniqueness, Factual Accuracy and
95-Certification Mapping" brief), which asked for the verification output so the
live production pages could be checked.

Commit: `7419b65c` on `Summer26`, 40 files, +2232/−156. Pushed, so production is
built from it.

**Read the "Already correct before this work" section before re-auditing.** As
with the 14 Nov re-audit ([GEMINI-REAUDIT-2026-11-14.md](GEMINI-REAUDIT-2026-11-14.md)),
most of the concrete factual-error claims in the briefs described a state of the
site that no longer existed. Every claim was checked against a local production
build rather than assumed, and the ones that were real are listed separately
from the ones that were already fixed.

---

## 1. Verification output

Run against a local production build on `PORT=3100`:

```
### npm run build
exit=0
✓ Compiled successfully in 739ms

### VERIFY_BASE_URL=http://localhost:3100 node scripts/verify-sitewide-audit.mjs
========================================
All site-wide audit verification checks passed!

### VERIFY_BASE_URL=http://localhost:3100 node scripts/verify-all-95-certs-seo.mjs
Checks passed: 6682 | Checks failed: 0
SUCCESS: All 95 certification pages, homepage cards, role hubs, exam logistics pages, and permanent redirects passed with 0 failures!

### VERIFY_BASE_URL=http://localhost:3100 node scripts/verify-95-certs-accuracy-and-uniqueness.mjs
Audited 95 certification pages: 95/95 passed cleanly.
All 95 certification pages passed mapping, uniqueness, and accuracy checks!

### npm run test:search
ℹ pass 91
ℹ fail 0

### npm run test:questions
ℹ pass 20
ℹ fail 0

### npm run validate:seo:lengths
Checked 178 pages. Violations: 0
All titles and descriptions match route-specific ranges. ✓
```

Both scripts from the briefs were saved as asked:

- `scripts/verify-sitewide-audit.mjs` — saved as supplied, with one change: it
  follows 301s instead of asserting HTTP 200 on a redirected slug (see §4).
- `scripts/verify-95-certs-accuracy-and-uniqueness.mjs` — saved with the 95-cert
  list **generated from the repo's own registry** rather than hand-typed, so the
  slugs, names and codes it asserts are the verified ones. Regenerate it from
  `src/lib/cert-alias-registry.ts` + `src/lib/cert-keyword-clusters.ts` if the
  registry changes.

---

## 2. Before / after on the four items the brief asked to confirm

### Benchmark report fee totals

| | Before | After |
|---|---|---|
| Combined exam fees | `$600,078,583,258` | **`$29,625`** |
| Architect track | `$600,066,109,808` | `$16,600` |
| Developer track | `$2,201,100` | `$2,200` |
| Administrator track | `$1,600,800` | `$1,600` |

Cause: `feeToNumber` in `src/lib/benchmark-report-data.ts` ran
`fee.replace(/[^0-9.]/g, '')` across the whole string. `"$200 (Retake $100)"`
became `200100`; `"$6,000 ($1,500 Eval + $4,500 Board)"` became
`600015004500`, which is where the headline figure came from. It now matches the
first currency amount only, strips thousands separators, and treats
`Free` / `Composite` as 0.

### Role hub count parity

| Track | Before `/` | Before `/certifications` | Before hub | After (all three) |
|---|---|---|---|---|
| Associate | 4 | 4 | 4 | **4** |
| Administrator | 8 | 9 | 8 | **8** |
| Developer | 11 | 12 | 12 | **11** |
| Consultant | 17 | 18 | 17 | **17** |
| Marketing | 2 | 2 | 2 | **2** |
| Architect | 17 | 17 | 17 | **17** |
| Accredited Professional | 23 | 23 | 23 | **23** |
| Sales | 1 | 1 | 1 | **1** |
| Designer | 2 | 2 | 2 | **2** |
| Tableau | 6 | 6 | 6 | **6** |
| Claude | 4 | 4 | 4 | **4** |
| **Total** | | | | **95** |

Cause: the homepage read the shared grid (which drops the two noindex
`-practice-test` aliases and assigns a cert listed under two tracks to the
first), while `/certifications` and the role hubs counted
`CERTIFICATION_CATEGORIES.items` raw. All three now derive from
`getRoleCertCounts()` / `getCertRoleAssignment()` in
`src/lib/certification-grid-data.ts`.

Marketing Cloud Next Consultant is counted and listed under **Consultant**, not
Marketing — it appears in both category lists and the grid assigns it to the
first. That matches the brief's own canonical mapping (Consultant 17,
Marketing 2). One stale assertion in `verify-all-95-certs-seo.mjs` that expected
the Marketing hub to link it was updated.

Homepage `<meta name="description">`: `91` → **`95`**.

### HTML sitemap link count

**97** unique `href="/certifications/[slug]"` links under *Certification Role
Hubs and Guides*, all real `<Link>` elements. 95 credentials plus the 2 noindex
practice-test aliases. This was already the case before the work — the brief's
claim of "plain unlinked period-separated text" did not reproduce. No internal
link anywhere on the site points at a redirected URL (`/adm-201-exam-tips` and
friends return 0 occurrences on `/`, `/html-sitemap`, the role hubs and the
cert pages).

### Universal 7-phrase query-cluster coverage

All 95 routes carry all seven phrase groups in visible SSR text (script payloads
stripped before matching). Sampled proof across three issuer prefixes:

```
/certifications/developer-1
  OK  "Salesforce Certified Platform Developer I"
  OK  "Salesforce Certified Platform Developer I dumps"
  OK  "Salesforce Certified Platform Developer I questions"
  OK  "Platform Developer I dumps"
  OK  "Platform Developer I questions"
  OK  "Plat-Dev-201 dumps" / "Plat-Dev-201 questions"
  OK  "PD1 dumps" / "PD1 questions"
  OK  "CRT-450 dumps" / "CRT-450 questions"

/certifications/tableau-data-analyst
  OK  "Tableau Certified Data Analyst"
  OK  "Tableau Certified Data Analyst dumps" / "... questions"
  OK  "Tableau Data Analyst dumps" / "Tableau Data Analyst questions"
  OK  "Analytics-DA-201 dumps" / "Analytics-DA-201 questions"

/certifications/b2b-commerce-admin-ap
  OK  "Salesforce Accredited B2B Commerce Administrator Professional"
  OK  "Salesforce Accredited B2B Commerce Administrator Professional dumps" / "... questions"
  OK  "B2B Commerce Administrator Accredited Professional dumps" / "... questions"
```

Before this work, **0 of 95** pages carried any `"<name> questions"` phrase or
`"<fullTitle> dumps"`, and **0 of 95** titles contained the word "Questions".

---

## 3. How the mapping resolves

`getCertKeywordCluster()` in `src/lib/cert-keyword-clusters.ts` is now the single
source for every certification's naming, and the title, description, visible
dumps/questions copy and JSON-LD aliases all compose from it.

- **`shortTitle`** — the credential's current official name without its issuer
  prefix, taken from `cert-alias-registry`. For 19 credentials this differs from
  the name people search for.
- **`searchedName`** — the name people still type (Field Service Consultant,
  Data Architect, Health Cloud AP). It is served in full alongside the current
  name, vendor-prefixed forms included, because a renamed credential gets more
  traffic under its old name. It also leads the dumps FAQ question.
- **`fullTitle`** — derived per issuer: `Salesforce Certified X`, except
  `Tableau Certified X`, `Slack Certified X`, Claude names used as-is, and
  `Salesforce Accredited X Professional` for the AP designations. An explicit
  `fullTitle` on a cluster entry overrides the rule.
- **`examCodes`** — registry `code` + `legacy`, plus cluster aliases shaped like
  a code.

Sample output:

| Route | `<title>` |
|---|---|
| `/certifications/developer-1` | `Salesforce Certified Platform Developer I (PD1 / Plat-Dev-201) Questions & Guide` |
| `/certifications/administrator` | `Salesforce Certified Platform Administrator (Plat-Admn-201 / ADM-201) Questions` |
| `/certifications/data-architect` | `Salesforce Certified Platform Data Architect (Plat-Arch-201) Questions & Guide` |
| `/certifications/tableau-data-analyst` | `Tableau Data Analyst (Analytics-DA-201) Questions & Study Guide` |

Descriptions follow the same composition, e.g.
`Salesforce Certified Platform Developer I: free Platform Developer I questions and Plat-Dev-201 questions. 60 questions, 68% to pass, $200 fee.`

### Deliberate deviation: metadata length budget

Certification routes now allow **80 characters for a title and 160 for a
description**. Every other route keeps the site's 50–60 / ≤130 policy.

The brief's required title content — `Certified` + `shortTitle` + exam codes +
`Questions & Study Guide` — does not fit 60 characters for any credential, and
the required description content (credential name + `<shortTitle> questions` +
`<primaryCode> questions` + question count + pass mark + fee) does not fit 130.
`scripts/validate-seo-lengths.mjs` applies the budget per route and has three
new tests covering it.

One cosmetic limit: `/certifications/dev-lifecycle-deployment-architect` has a
55-character short name, so its title cannot also hold `Plat-Arch-202` inside 80
characters. The code is still in the H1, Quick Facts, description and phrase
sets.

---

## 4. Not done, and why

### The ~45 exam codes in the brief were not added

The brief assigned exam codes the repo has never carried, none of which could be
verified against Trailhead Academy. Per the standing rule to diff any
outside-drafted cert figures against `SLUG_TO_EXAM_LOGISTICS` before publishing
(a drafted README previously carried 32 wrong passing scores), these were held:

`AP-201`–`AP-226` (all 23 Accredited Professionals), `App-Arch`, `Sys-Arch`,
`CTA-Eval`, `CTA-Board`, `CCAO-F`, `CCDV-F`, `CCAR-F`, `CCAR-P`, `CRT-101`,
`CRT-403`, `DEV-450`, `MC-101-BC`, `MCD - Level 1`, `CRMA-Con-201`,
`Edu-Con-201`, `EX-Con-101`, `MCAE-Con-201`, `MCPA`, `MCIA`.

**If Gemini can cite an issuer page for any of these, they go straight in** —
`examCodes` is one registry field and the title, description, Quick Facts, schema
and phrase sets all follow from it.

Instead, the 31 credentials whose issuer publishes no exam code carry
`examCodes: []` and render **no** code, which fixed a real defect the brief
flagged: `CertificationCard` was falling back to the page-data `code` field,
which held `"AP"` on all 23 AP cards and the credential's own name
(`"Business Analyst"`, `"Strategy Designer"`, `"Application Architect"`,
`"Data Architect"`) in the exam code's position. The card now reads the code only
from the registry.

The 31: `application-architect`, `system-architect`,
`technical-architect-evaluation`, `technical-architect-review-board`,
`advanced-field-service-ap`, `b2b-commerce-admin-ap`,
`b2b-commerce-developer-ap`, `communications-cloud-ap`,
`consumer-goods-cloud-ap`, `consumer-goods-tpm-ap`, `contact-center-ap`,
`cpq-billing-ap`, `energy-utilities-ap`, `financial-services-cloud-ap`,
`health-cloud-ap`, `heroku-developer-ap`, `loyalty-management-ap`,
`manufacturing-cloud-ap`, `marketing-cloud-advanced-cross-channel-ap`,
`marketing-cloud-intelligence-ap`, `marketing-cloud-personalization-ap`,
`media-cloud-ap`, `net-zero-cloud-ap`, `order-management-admin-ap`,
`order-management-developer-ap`, `process-automation-ap`,
`public-sector-solutions-ap`, `claude-certified-associate`,
`claude-certified-developer`, `claude-certified-architect-foundations`,
`claude-certified-architect-professional`.

### Issuer prefix for Tableau, Slack and Claude

The two briefs contradicted each other — one asked for
`Tableau Certified Data Analyst`, the other for
`Salesforce Certified Tableau Data Analyst`. The issuer's own prefix was kept,
matching the existing rule in `src/lib/seo-title-helpers.ts`: Tableau, Slack and
Anthropic run their own certification programmes, so the Salesforce prefix names
a credential that does not exist.

### Redirected slugs still redirect

The second brief's script fetches `/certifications/data-cloud-consultant`,
`/certifications/experience-cloud-consultant` and
`/certifications/marketing-cloud-developer`. Those are 301s here; the canonical
slugs are `data-360-consultant`, `experience-cloud` and
`marketing-cloud-engagement-developer`. The redirects were kept so there is one
indexable URL per credential, and both scripts follow them instead. Serving both
URLs at 200 would re-create the duplicate-content pairs the redirect table exists
to remove.

---

## 5. Already correct before this work — do not re-report

Each of these was checked against a local production build. None reproduced:

| Brief claim | Reality |
|---|---|
| Duplicate consecutive headings (`Is the ... Exam Hard?`, `... Exam Format Explained`, PD1 study timeline) printed twice | No duplicate consecutive H2/H3 on any of the 95 pages. A check for this is now in the new script |
| Stacked duplicate study-guide blocks (`Section Breakdown`, `Exam Sections & Weightings`, `Highest-Weight Exam Sections`, `Where the Exam Weight Falls`) and duplicate `Common Questions` / `FAQs From Candidates` below the practice questions on Tier B pages | Those components exist, but render on the separate `/*-study-guide` and `/*-exam-tips` routes, not on the cert pages. One weightage table and one FAQ H2 per cert page, asserted for all 95 |
| Tier A / Tier B split — Architect, Tableau and AP pages missing the dumps section and entity intro | All 95 routes already rendered the unified `CertPageSeo` + `CertDumpsComparison`. There is one `AssociateTemplate` plus 5 bespoke bodies, and both paths render it |
| `/certifications/application-architect` lists Advanced Administrator as a required exam / claims System Architect is required | Neither string is on the page |
| `/certifications/data-architect` says "All four domains are 25%" and "Prerequisites: Application Architect, System Architect" | Neither string present; 6 weighted domains and `None required` already correct |
| `ARC-801` on `/certifications/role/architect` | 0 occurrences site-wide |
| Tableau Data Analyst OCR corruption in Q1/Q3, unverified-repository banner, `$250` fee, 120 min, 75% pass | No OCR text, no banner, no `$250`. Already `$200` / 105 min / 65% on `/`, the Tableau hub and the cert page |
| Q6–Q15 hidden behind "Show 10 more questions" | No such control; all questions in the SSR HTML |
| `/certifications/developer-1` cite widget missing the numeral `I` | Already `Salesforce Certified Platform Developer I` |
| `5x Salesforce certified` author card | Already the shared 14x reviewer component |
| Raw `&amp;apos;` entities | 0 occurrences |
| `"valid for 3 years"` claim | 0 occurrences |
| Trivial `"Only basics"` / `"Only reporting"` / `"Only Slack"` distractors | Not present. The `"Only ..."` options that exist are substantive (`"Only Slack's own support team can enable it"`). 1,487 questions pass the strawman/answer-spread/length-bias validator |
| First-person anecdote on `/certifications/business-analyst` ("surprised me…") | 0 occurrences |
| Slack Administrator sentence printed twice | Not duplicated |
| `"Feb 2026s"` typo on `/salesforce-exam-retake-policy` | Not present. The page already stated 3 attempts per release cycle, waiting periods, free retakes on $75 Foundations and 50% on $200/$400, all from a shared `RETAKE_POLICY` constant |
| Legacy duplicated navbar on role hubs, Tableau, B2C Commerce Architect, ROI calculator | One global `<header>` on every page. The ROI calculator's second `<header>` is its semantic page header, not a navbar |
| `"Most candidates in this role"` / `"Start here if this credential matches…"` placeholders on the AP and Designer hubs | Both already had distinct persona cards |
| `"Targets ADM-201 search intent…"` leaked copy | 0 occurrences |
| Kryterion testing centre on `/certifications/strategy-designer` | 0 occurrences |
| SPA scroll restoration / sticky-header clipping needing `pt-20`/`pt-24` | The header is not fixed or sticky, so there is nothing to clip under. App Router already scrolls to top on navigation |
| Comparison tables needing `overflow-x-auto` | Every visible table already wrapped. The one unwrapped `<table>` is `sr-only` |
| TOC anchors without matching DOM ids | Every `href="#…"` on the sampled pages resolves to an existing `id` with `scroll-mt-24`, including the `#certification-track-*` pills on `/` |
| Static FAQs needing `<details>`/`<summary>` | Already accordions (23 on a cert page, 6 on `/`) |

---

## 6. Real defects fixed beyond the four headline items

- **`"20 sample questions ."`** — `getPracticeQuestionsIntro` joined a suffix
  that begins with its own punctuation using a space. Affected every bespoke
  page.
- **`"70% discount retake voucher"`** on `/strategy-designer-study-guide`,
  `/mulesoft-platform-architect-study-guide` and
  `/mulesoft-integration-architect-study-guide`. Retakes are 50% of the
  first-attempt fee ($100 on a $200 exam, $200 on a $400 exam), not a discount
  voucher. Delivery corrected to Trailhead Academy / Pearson VUE.
- **Leaked internal SEO copy** — `"Google searchers usually want a next step, not
  just a catalog"` on all 11 role hubs, and the Search Console CTR bullet on
  `/editorial-policy` (replaced with a reader-facing commitment).
- **`"If two certifications look similar. Use"`** → `", use"`.
- **Identical role hub intros** — all 11 hubs opened on the same two sentences.
  Each now has track-specific lead copy.
- **Card title truncation** — single-line `truncate` removed from role hub
  certification cards; the `Accredited Professional 23` pill wraps cleanly at
  375px.
- **Hero contrast** — dark `text-gray-500` "Last updated" on the blue hero cards
  (`/certifications/administrator`, `/contact`) → `text-white/95`.
- **Floating chrome overlap** — the chatbot launcher and WhatsApp button sat at
  `bottom-6 z-50` over the `z-40` sticky CTA bar, which itself covered the
  footer links. The bar now publishes its height and the rest clears it.
- **Duplicate contact widget** — the docked contact sidebar is suppressed on
  `/contact`, which is itself the contact form.
- **Administrator metadata override removed** — the last per-page metadata patch
  outside the registry, which left that one page's description without the
  `"<name> questions"` phrasings the other 94 carry.

## 7. New, where the brief asked for something that did not exist

- **ROI calculator** (`src/components/RoiCalculatorWidget.tsx`) — exam fee tier
  (from `PRICING_TIERS`, with an optional retake), study hours, hourly value and
  expected uplift; outputs total investment, net first-year return and payback in
  weeks and months. Above the track table on
  `/salesforce-certification-roi-calculator`.
- **Quiz progress bar** (`src/components/QuizScoreBar.tsx`) — a running
  `Answered: X / N • Correct: Y` with a progress bar, SSR-rendered at
  `Answered: 0 / 20`. It collects results from events the cards dispatch rather
  than lifting their state, so each card stays independently interactive and the
  section around them stays a server component.
- **Homepage FAQ filter** — a live search over the FAQ list, with the first two
  answers open by default and every answer in the SSR DOM regardless of filter
  state.
- **Wider article column** — cert pages go to `xl:grid-cols-5` with the prose at
  `xl:col-span-4`.

---

## 8. What to check on production

Once the deploy lands, the useful re-audit is:

1. Run both scripts against production:
   `VERIFY_BASE_URL=https://www.trailblazeprep.com node scripts/verify-sitewide-audit.mjs`
   and the same for `verify-95-certs-accuracy-and-uniqueness.mjs`.
2. Confirm the combined-fee KPI reads `$29,625` and fits its card.
3. Spot-check the 80-character titles as Google renders them — if truncation in
   the SERP is worse than the lexical gain, the budget is one constant
   (`MAX_CERT_TITLE_LENGTH`) to turn back down.
4. Cite issuer sources for any of the §4 exam codes that are real.

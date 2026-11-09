# Trailblaze Prep — Site Architecture, November 2026 Consolidation, and Request for Review

**Site:** https://www.trailblazeprep.com
**Prepared:** 9 November 2026
**Branch:** `Summer26` (commits `af2cf212`, `10f6915e`, `c8385e69`, `4ab492a2`)
**Status:** commits `af2cf212` through `4ab492a2` are live in production (verified: the
production sitemap serves 171 URLs and the merged routes 301 correctly). The
readiness-target fix in 3.5 is committed but not yet deployed.

This document is written for an external SEO reviewer. Part 1 describes what the
site is and how it is built. Part 2 describes what it looked like before this
work. Part 3 is what changed and why. Part 4 is the evidence. Part 5 lists the
open problems we know about and have deliberately not fixed. Part 6 is what we
are asking you to advise on.

A note on method, because it matters for how you should read the rest: an
earlier round of advice on this site contained specific claims about live page
content and SERP positions that turned out not to be true of the site. Every
factual claim in this document was verified against the repository or against
rendered HTML from a production build, and we say which. Where we are
uncertain, we say so. We would ask for the same in return: if a recommendation
rests on an observation about our pages, please say which URL and what you saw.

---

## Part 1 — What the site is and how it is built

### 1.1 Purpose

Trailblaze Prep is an independent study resource for Salesforce certifications.
It is not affiliated with Salesforce. Every page carries an "independent study
resource" disclosure and directs the reader to the official exam guide before
booking. Revenue model is not advertising-led; the practice questions are free
and require no sign-up.

### 1.2 Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16.4.4, App Router, React Server Components |
| React | 18.3 (Next 16 warns this is deprecated; upgrade to 19 is outstanding) |
| Language | TypeScript 5.4, `strict: true` |
| Styling | Tailwind CSS 4.3 |
| Hosting | Cloudflare Workers via OpenNext (`npm run cf:deploy`) |
| Deploys | Manual. There is no CI deploy pipeline. |
| Rendering | Almost entirely static. 184 pages are prerendered at build time; only the score-calculator embed is dynamic. |

Rendering matters for one of the questions we ask later: pages are static HTML
served from the edge, so page weight is a transfer and parse cost, not a
server-time cost.

### 1.3 Content architecture

The site is data-driven rather than hand-authored per page. Roughly 5,300 lines
of TypeScript hold the facts, and a small number of templates render them:

| File | Role |
| --- | --- |
| `src/lib/cert-seo-data.ts` (2,735 lines) | Titles, descriptions, FAQ sets, exam logistics (question count, passing score, duration), fees, salary data, per-slug overrides |
| `src/lib/exam-weightage-data.ts` (776 lines) | Official section weightings per credential, with dated verification comments citing the Salesforce exam guide article ID |
| `src/lib/certifications-data.ts` (689 lines) | The credential catalogue and its role categories |
| `src/lib/exam-prep-content-data.ts` (1,109 lines) | Exam prep copy per credential |
| `src/lib/schema-data.ts` | Twelve JSON-LD builders (see 1.5) |
| `src/lib/release-data.ts` | `RELEASE_CURRENT`, currently `Summer '26` |

Certification pages render through `CertificationBodyTemplate`, which dispatches
to one of four layouts (`admin`, `pd1`, `app-builder`, `associate`). The
dispatch is exhaustiveness-checked by TypeScript.

### 1.4 URL inventory (current, post-change)

171 indexable URLs:

| Pattern | Count |
| --- | --- |
| `/certifications/<slug>` — credential hubs | 91 |
| `/<a>-vs-<b>` — comparison pages | 27 |
| `/salesforce-*` — topic and commercial pages (cost, salary, difficulty, validity, voucher, retake policy, passing score…) | 15 |
| `/certifications/role/<slug>` — role hubs (admin, developer, consultant, architect, marketing, sales, designer, associate, AP, Tableau, Claude) | 11 |
| `/how-to-*` guides | 6 |
| Certification path pages | 6 |
| Editorial and utility (`/about`, `/team`, `/editorial-policy`, `/privacy`, `/terms`, `/contact`, `/html-sitemap`, `/certifications`, `/certification-comparison`, `/become-cta`, `/which-salesforce-certification-first`, `/is-salesforce-certification-worth-it`, `/pardot-certification`) | 13 |
| Homepage | 1 |
| `/tools/score-calculator` | 1 |

### 1.5 Structured data

Twelve JSON-LD builders exist. A credential hub currently emits, verified on
`/certifications/business-analyst` from a production build:

`WebSite`, `WebPage`, `Organization`, `BreadcrumbList`, `Person` (author),
`LearningResource`, `Quiz` (the practice questions), `FAQPage` with 15
`Question`/`Answer` pairs, `Thing`, `ContactPoint`, `SearchAction`, `EntryPoint`.

Exactly one `FAQPage` per page.

### 1.6 Editorial and E-E-A-T posture

A single named author, Krishna Mohan, who holds 14 Salesforce certifications,
is credited site-wide. `/team` lists those 14. `/editorial-policy` and `/about`
describe the review process. Every credential page carries a last-updated date
and an "independent study resource" disclosure.

### 1.7 Performance posture

Previous work on this site established, by measurement rather than assumption:
all internal links use a wrapper with prefetch disabled; CLS is 0 on both form
factors; raw HTML size was measured and judged a non-issue because the
gzipped payload is small. Those findings predate this change and one of them is
now worth re-testing — see 5.3.

---

## Part 2 — What the site looked like before this change

### 2.1 The URL multiplication

The site had **307 indexable URLs** for roughly 91 credentials, because most
credentials were split across three competing pages:

| Pattern | Count |
| --- | --- |
| `/certifications/<slug>` — the hub, with interactive practice questions | 102 |
| `/<name>-study-guide` — standalone study guide | 50 |
| `/<name>-exam-tips` — standalone exam tips | 86 |
| `/<a>-vs-<b>` — comparisons | 27 |

The three pages per credential overlapped heavily. For ADM-201, all three
carried exam format, fees, section weightings, readiness benchmarks and
scenario-strategy advice. The study guide had a 6-week plan; the exam tips page
had a conflicting 4-week plan for the same exam.

### 2.2 Factual self-contradiction

This was the more serious problem, and it was systemic rather than isolated.

**Section weightings.** Salesforce refreshed the Platform Administrator outline
on 15 December 2025. `EXAM_WEIGHTAGE.administrator` still held the pre-refresh
set (Configuration 20%, Object Manager 17%, Workflow 14%, Sales 11%, Service
9%, Productivity 4%). The *correct* post-refresh set already existed in the same
file under the `administrator-practice-test` key, with a dated comment recording
verification against the official guide. The stale numbers were additionally
hardcoded as prose in four more places, and the exam tips page carried a *third*,
even older set (Object Manager 20%, Sales 14%).

**Passing scores.** Across the credentials that had both a study guide and an
exam tips page, **32 pairs disagreed with each other** on the passing score, and
with the value the site publishes in its own exam-logistics data and schema.
App Builder appeared as both 63% and 73%. Service Cloud as 65% and 78%. Business
Analyst as 65% and 72%.

**Readiness benchmarks.** The "aim for N% on mocks before booking" figure varied
arbitrarily. App Builder alone carried 75%, 76%, 80% and 83% across its pages.

Because these pages were separate URLs, a reader usually saw only one figure. The
contradiction was real but not visible on any single page.

### 2.3 A rendering defect on every credential page

`renderIntroSegments` concatenated an array of text and link segments with no
separator, and the segment data carried no leading or trailing spaces. Every
page built from that data rendered run-on text:

> "New to Salesforce? Our**Salesforce Administrator**exam prep is the recommended
> first step… See our**certification path**to understand where Business Analyst
> fits."

### 2.4 Imported question bank

A bank of 456 questions imported from a GitHub repository (`bobbyk468/SF-Questions`)
exists in `src/lib/question-banks/imported/banks.json`. It contained PDF
extraction artifacts — hard line wraps mid-sentence in 388 strings, and one
garbled distractor reading "test cases anu suipe ana choose".

**Important and frequently misread:** this bank is **not served**.
`hasImportedPracticeQuestions()` returns `false` unconditionally and
`getPracticeQuestionsForExam()` returns the site's own authored questions, gated
behind a code comment recording that the bank has no confirmed publication
rights. We verified against served HTML that no imported question and no
"imported from the SF-Questions repository" banner appears on any credential
page. The only place that phrase appears is one FAQ answer on the homepage.

---

## Part 3 — What changed

Four commits, all on `Summer26`.

### 3.1 `af2cf212` — ADM-201 pilot merge

Corrected the ADM-201 weightings site-wide against the official exam guide
(`help.salesforce.com/s/articleView?id=005298966`), verified on 9 November 2026:
Data and Analytics Management 17%, Configuration and Setup 15%, Object Manager
and Lightning App Builder 15%, Automation 15%, Sales and Marketing 10%, Service
and Support 10%, Productivity and Collaboration 10%, Agentforce 8%. Also
corrected the question count (60 scored, not 65) and standardised the readiness
target.

Merged `/adm-201-study-guide` and `/adm-201-exam-tips` into
`/certifications/administrator` with 301s. The surviving page's `<title>` became
`Salesforce Platform Administrator (ADM-201) Study Guide` so it carries the
current official name and the legacy exam code, which are searched differently.

### 3.2 `10f6915e` — two real defects

Fixed the intro-segment spacing bug described in 2.3. Cleaned the 388 PDF
artifacts and the garbled distractor out of the imported bank. Answer keys
untouched.

### 3.3 `c8385e69` — site-wide consolidation

All 136 remaining standalone pages merged into their hubs. **307 URLs → 171.**

*Mapping.* Each source route was matched to its hub by the `const slug` the page
itself declared, not inferred from the URL. This was essential: many differ
(`/pd1-study-guide` → `developer-1`, `/service-cloud-consultant-study-guide` →
`service-cloud`, `/crm-analytics-study-guide` → an entirely different slug). A
naive wildcard rule of the form `/:slug-study-guide → /certifications/:slug`
would have sent **12 live URLs to 404s**. 134 of 136 pages declared a slug; the
two AI Associate pages were mapped by hand.

*Content.* Every page body — 33,194 lines — moved verbatim into
`src/components/certifications/merged/`, rendered on the hub by
`MergedCertContent` through per-slug lazy imports so each hub only loads its own.
Only page chrome was stripped, because the hub already supplies it: the metadata
export, the JSON-LD components, the `<header>` carrying the page's own H1, and
the duplicated author byline, pricing card and crosslinks.

*Contradictions resolved before redirecting.* Merging two pages onto one URL
would have put the conflicting figures from 2.2 side by side, making the problem
visible where it had been hidden. So:

- 50 passing-score figures across 32 hubs were aligned to the value the site
  publishes in its own exam-logistics data and schema.
- 126 readiness targets across 51 hubs were derived from each exam's passing
  score (passing score + 10, rounded up to the nearest 5, floor 75, cap 90).

*Redirects and links.* 158 redirects, zero chains — nine pre-existing redirects
pointed at pages that were themselves being merged and were collapsed to point
straight at the hub. 67 internal link groups rewired across 50 files. 65 links
that would have pointed at the page they sat on became on-page anchors or plain
text. 50 duplicate rows removed from the HTML sitemap. `urls.json` and
`page-dates.json` trimmed to the surviving 171.

### 3.5 Readiness targets, finished properly

The pass described in 3.3 only rewrote the *ported* components. Checking the
deployed site afterwards showed `/certifications/app-builder` still displaying
75%+, 76%, 80%+ and 85%+ at once, because three hub-side sources had their own
figures: `CertReadinessSummary` set the target from a difficulty band rather
than the exam, the shared `FullQuestionBankCta` hardcoded 75%+ on every
credential page, and `exam-prep-content-data.ts` used 80%+ as the fallback for
any credential without bespoke copy. Per-credential data files and six FAQ
answers carried their own numbers as well.

The figure is now computed in one place, `getMockExamTarget(slug)` in
`cert-seo-data.ts`, from the credential's own passing score. Components call it
rather than stating a number, generic copy that applies to every credential no
longer names a figure at all, and where an issuer publishes no numeric passing
score the copy describes readiness without inventing one.

Verified by crawling all 171 pages of a production build: **0 pages display
more than one readiness target.** Before this pass, 29 did.

### 3.4 `4ab492a2` — de-duplication

Merging left overlapping sections adjacent on the same page. Detection ran
against **rendered HTML**, not source, because source-level similarity is
meaningless for data-driven sections: an FAQ block is literally
`{faqItems.map(...)}`, so two entirely different FAQ sets score as identical
text. We learned that the hard way and discarded the first measurement.

48 sections removed, 55,271 characters, keeping the hub's own version wherever
one existed:

- ported weightage lists repeating the hub's weightage table under another
  heading ("Section Breakdown", "Weightings by Section", "How the Exam Is
  Weighted", "Published Exam Objective Weights")
- duplicate next-step CTAs ("Where to Go Next", "Your Next Certification Step",
  "Start X Prep", "Keep Studying")
- one duplicate readiness benchmark

Five candidates were deliberately kept because the similarity score was wrong
about them: the "3 Concepts That Fail Most X Candidates" sections share
vocabulary with the FAQ blocks but are distinctive content.

Near-duplicate rendered section pairs across all 86 merged hubs: **59 → 11.**
The 11 are the five deliberate keeps plus six where the weightage table scores
against a related-certification card listing the same topic names.

---

## Part 4 — Verification

Everything below was run against a production build, not the dev server.

| Check | Result |
| --- | --- |
| `npm run build` | Compiles clean, TypeScript strict passes, 184 static pages |
| `npm run test:search` | 81 Node tests plus three Python suites, all pass |
| Sitemap URLs | 171 of 171 return 200 |
| Internal links | 188 distinct targets crawled across every page, 0 broken |
| Redirect destinations | 86 of 86 return 200 |
| Redirect chains | 0 |
| H1 per hub | Exactly 1, sampled across 9 hubs |
| `FAQPage` per hub | Exactly 1 |
| Readiness target per page | Exactly 1, crawled across all 171 pages |

Three tests referenced the moved pages. They were repointed at the new component
paths rather than deleted. Two assertions covered page chrome that no longer
exists (an H1 and a schema prop) and were rewritten, with comments stating why.

---

## Part 5 — Open problems we have not fixed

We would rather list these than have you discover them.

### 5.1 The `/about` originality claim is false as written

`/about` states: "All content on this site is **original and unique**, written
for Trailblaze Prep. We do not copy or scrape from other sites or study guides."
A homepage FAQ answer simultaneously states that some question sets are imported
from the SF-Questions repository with unverified answers.

The imported bank is not served (see 2.4), so the accurate resolution is to
correct the homepage FAQ rather than to delete a disclosure. We have not done it
because it is a public claim about the business and the owner should word it.

### 5.2 The imported bank has no publication rights

`src/lib/git-practice-questions.ts` carries a comment recording that the bank
has no confirmed publication rights, which is why it is gated off. This is a
licensing question, not an SEO question, and it is unresolved. Our view is that
the bank should be deleted rather than left dormant in the repository.

### 5.3 Page weight roughly doubled on merged hubs

Measured on a production server. A hub that received no merged content is 205 KB
raw / 37 KB gzipped. Merged hubs are now 322 KB raw at the median and 444 KB at
the largest (`/certifications/developer-1`), 64–78 KB gzipped.

Context: the site's own technical SEO validator uses a 200 KB raw threshold, and
that threshold was already failing site-wide before this change — the homepage
is 699 KB raw and was untouched by the merge. We have not re-run Core Web Vitals
since the merge.

### 5.4 Ported FAQ copy is no longer in structured data

Each hub emits one `FAQPage` with 15 questions from its own data. The roughly 20
additional questions that came across from the merged pages render visibly but
carry no markup. One `FAQPage` per page is what Google asks for, so we judged
this acceptable, but it is a reduction in marked-up Q&A versus before.

### 5.5 The hub table of contents does not link to the ported sections

The sidebar ToC is a fixed list per template. The newly merged sections have no
entries in it.

### 5.6 Twenty footer self-links

`TOP_CERTIFICATIONS` and the footer link list render site-wide, so each hub
self-links in them. Mostly pre-existing. Fixing it properly needs `usePathname`,
which would push a client component into the global footer on every page.

### 5.7 The Claude credential pages

Four pages under `/certifications/claude-certified-*` plus a role hub, all
reachable from the global navigation. They publish a $175 fee, 65 questions, a
720/1000 passing score and a $200k median salary for a credential whose own
on-page banner states that issuer details are unverified. We consider this a
live trust problem and have not touched it.

For the record: an earlier review attributed specific domain weightings to these
pages (Enterprise Architecture 25%, and so on). Those strings do not exist in
the codebase and `getExamWeightage` returns null for Claude slugs. The fee,
question count, passing score and salary figures, however, are real.

### 5.8 Passing scores are internally consistent but not all externally verified

The 50 passing scores aligned in 3.3 were aligned to the site's own
exam-logistics data. That value was correct for ADM-201 when checked against
Salesforce on 9 November 2026. The other 31 have not been individually
re-verified against official guides.

### 5.9 Scaled-content exposure remains

Consolidation removed 136 URLs, but 27 comparison pages and 11 role hubs remain,
and roughly 23 of the surviving credential hubs are Accredited Professional
credentials with thin source material. We did not prune any of these.

---

## Part 6 — What we would like your view on

1. **Was the surviving-URL choice right?** We kept `/certifications/<slug>` as
   canonical and redirected the study guide and exam tips into it, on the
   reasoning that the hub holds the interactive practice questions and is the
   structural canonical for the credential. We did not have query-level Search
   Console data in front of us when we chose. If the data shows the standalone
   study guides carried the impressions for "X study guide" queries, is it worth
   reversing direction now, or is a second migration worse than an imperfect
   first one?

2. **Dual-naming at scale.** Several credentials were renamed by Salesforce
   (Administrator → Platform Administrator, Pardot → Marketing Cloud Account
   Engagement, Data Cloud → Data 360, Tableau CRM → CRM Analytics). We applied
   dual-naming to the ADM-201 title only. Should it be applied to every renamed
   credential, and does the 60-character title budget make that a losing trade
   against keeping "Free Practice Exam" in the title?

3. **Page weight versus consolidation depth.** 5.3 is the direct cost of doing
   what consolidation requires. Is 64–78 KB gzipped a real ranking or Core Web
   Vitals risk for static edge-served pages, or are we worrying about the wrong
   number? If it is real, would you cut content further or defer sections behind
   disclosure elements?

4. **Thin-page pruning.** Which of the remaining 27 comparison pages, 11 role
   hubs and 23 Accredited Professional hubs would you prune, noindex, or merge?
   What is the signal you would use to decide, given we can measure impressions
   per URL?

5. **Recovery expectations.** Given 136 URLs just 301'd on one deploy, what
   should we expect in Search Console over the next 4–8 weeks, and what pattern
   would tell us the consolidation helped versus hurt? We want to agree the
   success criteria *before* we read the data.

6. **Sequencing.** Of the open problems in Part 5, which would you do first?
   Our instinct is 5.7 (Claude pages) and 5.1 (the originality claim) ahead of
   anything else, because they are trust problems rather than structural ones,
   and they are cheap. We would like to know if you disagree.

### What we are not asking for

Redirect code. The mapping in this repository was derived from each page's own
declared slug and verified by crawling every destination; a pattern-based rule
would have broken 12 URLs. If you believe a mapping is wrong, please name the
source URL and the destination you would expect.

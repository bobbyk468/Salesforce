# Indexing and content plan — 4 November 2026

Property: `https://www.trailblazeprep.com/`
Evidence: authenticated Search Console (pulled 3 November 2026), GSC performance
exports for the 3- and 6-month windows, and direct measurement of the local
production build.

This document records what is established, what is inferred, and what is
proposed. Figures that come from a GSC export are labelled; everything else was
measured directly against the build or the live site.

---

## 1. What is established

### Indexing

| Measure | Value |
|---|---|
| Indexed | 192 |
| Not indexed | 241 |
| "Crawled - currently not indexed" | 187 |
| Duplicate without user-selected canonical | 23 |
| Discovered - currently not indexed | 19 |
| Page with redirect | 7 |
| Excluded by noindex / 404 | 2 / 2 |

GSC page-indexing report, last updated 23 October.

More of the site is excluded than included.

### The 187 crawled-not-indexed URLs

Pulled in full. They split in two:

| | Count | Share |
|---|---|---|
| `/og?t=...` Open Graph image endpoint | **111** | 59% |
| Real pages | **76** | 41% |

The 111 were never pages. Each distinct share-image title produced its own
crawlable URL. Fixed on 3 November with `X-Robots-Tag: noindex` on `/og`
(commit `1e849293`), deliberately *not* a `robots.txt` Disallow, because
Facebook, X and LinkedIn honour robots.txt and would then stop fetching the
share image, breaking social previews.

The 76 real pages:

| Type | Count |
|---|---|
| Exam tips | 36 |
| Certification pages | 19 |
| Study guides | 16 |
| Comparisons | 3 |
| Other | 2 |

### Performance

Weekly, organic web search, from the 6-month GSC export:

| Week beginning | Clicks | Impressions | Avg position |
|---|---|---|---|
| 7 Sep | **306** | 13,118 | **13.6** |
| 28 Sep | 216 | 7,327 | 14.3 |
| 12 Oct | 123 | 8,225 | 21.8 |
| 26 Oct | **88** | **4,594** | **23.4** |

Clicks −71%, impressions −65%, average position roughly ten places worse. The
decline had not stopped as of 31 October.

Same-query weighted position moved only 17.28 → 17.64 across the weeks either
side of 30 September.

### Ruled out

- **Manual action** — none. This is algorithmic.
- **Security issues** — none.
- **Core Web Vitals** — "not enough usage data" for both mobile and desktop, so
  performance is not a ranking factor here and there is no INP to measure.
- **Technical SEO** — all 307 sitemap URLs return 200 and self-canonicalise,
  none are noindex; non-www 301s to www, HSTS present, robots.txt valid,
  404s return 404. Verified page by page, not sampled.
- **Internal link starvation** — median inbound internal links are 6 for
  indexed pages and 5 for not-indexed; every page is 2 clicks from the
  homepage. Link priority does not explain the difference.

---

## 2. What the exam-tips pages actually earn

From the 6-month GSC export:

| | Pages | Clicks | Impressions |
|---|---|---|---|
| Exam tips — indexed | 48 | **37** | 2,094 |
| Exam tips — not indexed | 32 | 5 | 341 |
| Study guides | 48 | 54 | 6,199 |

**All 87 exam-tips pages together produced 42 clicks in six months.** They are
28% of the site and under 1% of its clicks. Study guides earn three times the
impressions from fewer pages.

This is the decisive number. The question is not whether Google is being unfair
to these pages; it is whether 87 pages earning 42 clicks deserve to exist as
separate URLs.

---

## 3. Inference, stated as such

The following is reasoning, not measurement.

A site-wide ranking slide that begins before a spam update, continues after it,
leaves same-query position nearly unchanged, and coincides with more pages
excluded than indexed, is most consistent with **a site-level quality
assessment**: Google matching the site to fewer queries rather than demoting it
on the queries it already ranked for.

Until 3 November the site carried content that fits that pattern: 1,262 of
1,332 practice questions shared one answer letter, 335 options were strawman
dismissals, 150 questions had no reasoning at all, and exam facts were invented
on five credential pages. All of that is now rewritten, but Google has not yet
recrawled and reassessed most of it.

One correction to an earlier reading of mine: GSC's "first detected 31 January
2026" marks when the *category* became non-zero, not when these particular URLs
entered it. Individual pages may well have dropped into it during September or
October. The January date does not prove the condition is old.

---

## 4. Proposal

### 4.1 Consolidate the exam-tips pages

47 of the 87 have an exact matching study guide. For those:

1. Move anything genuinely specific from the tips page into a section of the
   study guide. Discard what is template filler.
2. 301 the tips URL to the study guide.
3. Remove the tips route and its sitemap entry.

Net effect: 47 weak URLs removed, 47 study guides strengthened, indexed
footprint reduced to pages that earn their place.

The 40 with no matching study guide need a separate decision, and most are
Accredited Professional credentials with negligible demand:

- **Keep and strengthen** where there is measurable demand. The only candidates
  are `contact-center-ap-exam-tips` (251 impressions), `health-cloud-ap-exam-tips`
  (181, 6 clicks) and `technical-architect-review-board-exam-tips` (47, 2 clicks).
- **Prune or noindex** the rest. 30 of the 40 recorded fewer than 25 impressions
  in six months and 11 recorded zero or one click.

### 4.2 Resolve the 23 duplicate-canonical pages

Not yet investigated. These should be identified and either canonicalised
deliberately or consolidated before any further content work.

### 4.3 Do not rewrite prose for its own sake

Measured across all 309 pages of the current build:

| Signal | Value |
|---|---|
| Em-dashes rendered | **0** |
| Sentence length | mean 16.8, stdev 11.2 (healthy variance) |
| AI-vocabulary tells, whole site | 69 occurrences across 309 pages |
| Practice questions failing the quality gate | **0 of 922** |

The prose reads as human-written and the measurements support that. The
remaining AI-vocabulary instances are minor: "unlock" ×33, "seamless" ×8,
"leverage" ×7, "deep dive" ×5. Worth a pass, not a project.

The real repetition is structural, not stylistic: **81 editorial sentences
appear on 85–91 pages each**, rendered from shared components — for example
"Use Practice, Not Dumps. Original practice questions build skill without
risking your credential." That is duplicated editorial content on nearly every
certification page, and it is a stronger thin-content signal than any word
choice.

---

## 5. Regression to fix first

Commit `19951bf1` ("seo: align sitewide metadata and mobile layout", 4 November)
reverted the meta-description work from `a4e9f38b`.

| | After `a4e9f38b` | Now |
|---|---|---|
| Cert descriptions deferring to the issuer | 0 | **81 of 93** |
| Mean description length | 152.7 | **121.2** |
| Descriptions under 120 chars | 0 | **42** |

Descriptions again read "check the issuer's current guide", spending the only
sentence a searcher sees on sending them elsewhere, and the verified exam
logistics (question count, passing score, duration) are gone from them.

The same commit **improved** titles beyond the earlier work — mean 53.7, none
under 50 characters, none over 60 — so it should not be reverted wholesale.
Only the description generator needs restoring, rebuilt on
`SLUG_TO_EXAM_LOGISTICS` so the figures cannot contradict the page body.

Note for whoever restores it: 12 of the 86 entries in `ctrDescriptionOverrides`
contradict the verified logistics on passing score (App Builder claims 65%
against a verified 63%; Business Analyst 65% against 72%). Do not re-enable
that map directly.

---

## 6. Order of work

1. Restore the generated meta descriptions (§5). Smallest change, undoes a
   same-week regression.
2. Identify and resolve the 23 duplicate-canonical pages (§4.2).
3. Consolidate the 47 paired exam-tips pages (§4.1).
4. Decide prune-or-keep for the 40 unpaired exam-tips pages (§4.1).
5. Reduce the shared editorial boilerplate on certification pages (§4.3).
6. Minor AI-vocabulary pass (§4.3). Lowest value.

Off-page remains untouched and is the ceiling on position: it cannot be changed
in this repository.

---

## 7. What would change this plan

- **Fresh GSC data after recrawl.** Everything above predates Google reassessing
  the rewritten questions. If indexed count rises without any of this work, the
  content rewrite was sufficient on its own.
- **Query-intent evidence.** If "[cert] exam tips" and "[cert] study guide"
  return visibly different SERPs, differentiating beats consolidating. Nothing
  gathered so far tests this.
- **A manual action appearing.** None today; that would change everything.

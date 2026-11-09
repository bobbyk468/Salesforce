# Trailblaze Prep — Round 3: Your Cache Finding Was Right, and the Guard Is Built

**Site:** https://www.trailblazeprep.com
**Prepared:** 9 November 2026
**Branch:** `Summer26`, commit `041f5e6d`
**Status:** committed and verified locally; deploy pending.

---

## Part 1 — I owe you a correction

In Round 2 I wrote that your claim about `/certifications/app-builder` — the
"5x Salesforce certified" byline and the "4.2K+ passed this month" badge — was
false, and I implied you had fabricated it. **You had not, and I was wrong to
say so.**

Your explanation was that your browsing tool reads Google's cached snapshot
rather than our origin, and that app-builder's snapshot was still dated 24
August 2026 while our other hubs had been crawled on 3–4 November. That is
checkable, and I checked it:

```
git log -S "4.2K+" --all                      → 5 commits
git log -S "12+ years in data engineering"    → 3 commits
git log -S "5× Salesforce Certified"          → 2 commits
```

Every string you quoted existed on that page in earlier builds. You were
reading the site accurately; you were reading an older version of it. My
verification (fetching the live origin) and yours (Google's cache) were both
correct about different snapshots, and I jumped to the least charitable
explanation. Noted and corrected.

**The operational finding matters more than the apology.** If Googlebot last
fetched `/certifications/app-builder` on 24 August, that page has been ranked on
ten-week-old HTML throughout this entire consolidation. It goes to the top of
the recrawl queue, above even the hubs that served the SF-Questions bank.

---

## Part 2 — Your four new filler classes: all four confirmed, all four fixed

You were right that my `~65%` sweep was too narrow. It grepped one literal.

| Class | What I found | Status |
| --- | --- | --- |
| **Tilde pass marks beyond `~65%`** | `~58%`, `~62%`, `~63%`, `~67%`, `~68%`, `~70%`, `~72%`, `~73%` across comparison tables, merged components and spike data | Fixed |
| **Pre-refresh weightings in `/how-to-*`** | ADM-201 shown as 7 sections, 20/20/16, "65 questions"; PD1 as 23/38/25/14 against the official 27/28/25/20 | Fixed |
| **HTML entities in string literals** | 30 cases rendering as literal `&amp;` and `&apos;` | Fixed |
| **Retired AI Associate pitched as active** | Not only the two pages you named, but also `/salesforce-free-certification`, `/which-salesforce-certification-first` and the role hubs | Fixed |

Your diagnosis of the entity bug was slightly off in mechanism — JSX text nodes
decode `&amp;` correctly, which is why the project's own convention uses it, so
the bug is specific to string literals rather than general to JSX. The fix is
what you said it was.

---

## Part 3 — The guard, and what it found on its first run

Your closing point was the most valuable thing in either of your reviews: that
one-off greps clean today's snapshot and the facts rot back at the next
blueprint refresh. I built the test.

`src/tests/exam-fact-consistency.test.mjs`, wired into `npm run test:search`,
fails the build on four conditions:

1. A file named after exactly one credential states a passing score that
   disagrees with `cert-seo-data.ts`.
2. A tilde estimate is used as a pass mark anywhere (retake discounts excluded).
3. An HTML entity sits inside a string literal.
4. A retired credential is recommended as a starting point.

I scoped it to single-credential files rather than your suggested blanket ban on
any hardcoded `\d+%`, because comparison pages legitimately contain figures that
are not pass marks — "~40% shared knowledge base", "~50% retake discount" — and a
rule that cries wolf gets disabled.

**On its first run it found 22 contradictions nobody had reported**, including:

| Credential | Page said | Data layer |
| --- | --- | --- |
| Financial Services Cloud AP | 65% | **56%** |
| Heroku Architect | 63% | **72%** |
| Sales Foundations | 62% | **70%** |
| MuleSoft Catalyst Consultant | 63% | **70%** |
| Sharing and Visibility Architect | 67% | **58%** |
| OmniStudio Developer | 65% | **72%** |

That is the real argument for the guard. Two rounds of human review, two rounds
of targeted greps, and 22 contradictions were still sitting there. The test
found them in 900ms and will keep finding them.

86 tests pass. Build clean.

---

## Part 4 — The usability audit, separately

A third-party usability audit came back while this was in progress. Almost
everything passes: viewport correct, images dimensioned, no Flash, no iframes,
favicon present, no plaintext email, device rendering fine. PSI mobile LCP 1.5s,
desktop 0.4s, CLS 0 on both, TBT 0.04s.

Two flags, and I am acting on neither in code:

**"Avoid multiple page redirects" (0.6s mobile).** Measured: the canonical URL
`https://www.trailblazeprep.com/` is **0 hops**. Only `http://trailblazeprep.com`
takes 2 (http→https, then apex→www), and every merged URL takes exactly 1, which
is correct. The two-hop path is a Cloudflare edge configuration — "Always Use
HTTPS" firing before the apex→www rule — not application code. Collapsing it
means one Single Redirect rule matching the apex on either scheme straight to
`https://www`, with Always Use HTTPS disabled for that hostname. That is a
dashboard change and it affects only visitors who type the bare apex.

**"Render-blocking resources" (15.83KB CSS, 0.16s).** This was measured and
decided against on 8 November, before either of your reviews. Inlining the
stylesheet clears the flag but takes the homepage from 51,467 to 98,258 bytes
gzipped — +46.8KB on every page, against a 14.8KB sheet cached sitewide. Google's
own measurement of the shipped configuration is PSI mobile 95, desktop 99, CLS 0.
We are not trading that for a binary heuristic.

**Core Web Vitals "insufficient real-world data"** is a traffic-volume
consequence, not a defect. It resolves when the CrUX threshold is met.

---

## Part 5 — What I want from you this round

1. **Was scoping the guard to single-credential files the right call**, or is
   there a formulation of your blanket rule that stays quiet on legitimate
   percentages? If you can describe one precisely I will implement it.

2. **What else should the guard assert?** It now covers pass marks, tilde
   estimates, entities and retired credentials. Section weightings are the
   obvious gap — I have not worked out how to check those against
   `exam-weightage-data.ts` without a reliable way to attribute a percentage in
   prose to a named section. If you have a formulation, I will build it.

3. **Given your cache finding, how should I sequence recrawl requests?** I have
   roughly 91 hubs and a quota. Ranking by impressions seems obvious but
   app-builder was stale for ten weeks while higher-traffic pages were fresh, so
   crawl staleness and traffic are clearly not the same ordering. Is there a way
   to detect staleness at scale without opening every page?

4. **The pruning question is still open and still blocked** on 90-day Search
   Console exports. Your decision matrix from Round 1 is what I intend to apply.

5. **Same ground rules.** They worked this round: your cache caveat is exactly
   the kind of provenance note that would have saved us both a cycle last time.

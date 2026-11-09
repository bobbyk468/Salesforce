# Trailblaze Prep — Round 4: The Spec, Executed, and Why This Should Be the Last Round

**Site:** https://www.trailblazeprep.com
**Prepared:** 9 November 2026
**Deployed:** Workers version `76bf43fa`, commits `0240e8f1` and `6c3573f6`
**Status:** everything below is live and verified by crawling the pages, not by
running the tests.

---

## Part 1 — Scorecard on the single-shot spec

Six findings. I verified each against the live site before touching anything,
and verified the two policy claims against Salesforce's own help articles
before rewriting any copy.

| # | Finding | Verdict |
| --- | --- | --- |
| 1 | Passing-score guide claims Salesforce does not publish scores and uses scaled scoring | **Correct.** Both claims were live. |
| 2 | Retake policy and cost guide contradict each other and Salesforce | **Correct**, and your facts matched the official article exactly. |
| 3 | Validity and maintenance guides claim three maintenance modules a year | **Correct.** It is one. |
| 4 | Architect path carries wrong pass marks; three pages define the composites differently | **Correct**, and worse than described — see below. |
| 5 | AP pass marks are inconsistent between rounds | **Correct, and my Round 2 claim was the error.** See Part 2. |
| 6 | "5x Salesforce certified" author block on four routes | **Not in the branch.** Stale cache, as you suspected. |

Two notes on accuracy:

**Your policy facts were right and I checked them properly.** Salesforce's
retake article (005298880) says "Within each release cycle, you have 3 chances",
24 hours after a first failure and 14 days after a second. The maintenance
article (005298841) says one badge per year. I would not have rewritten two
pages on your say-so alone, and I did not have to.

**Your IAM Architect figure was wrong.** You gave 67%; the verified value is
65%. I used the data layer. This is the third round where a finding of yours was
real but a number attached to it was not, so the pattern is worth naming: your
diagnosis of *which page is wrong* has been reliable, and your *specific
figures* have not. I now treat the former as a lead and the latter as something
to look up.

---

## Part 2 — You were right about AP pass marks, and I was the one who was wrong

In Round 2 I wrote: "Salesforce publishes no passing score for the Accredited
Professional credentials." That was too absolute and I should not have written
it as a blanket statement.

The actual split, audited today across all 23 AP credentials in the logistics
map:

- **12 have a published numeric pass mark**, and every one carries a dated
  verification comment citing a specific `help.salesforce.com` article ID —
  Communications Cloud 56%, Financial Services Cloud 56%, Energy and Utilities
  60%, Consumer Goods 64%, Contact Center 66%, Media Cloud 66%, Consumer Goods
  TPM 66%, B2B Commerce Developer 68%, Heroku Developer 68%, Loyalty Management
  69%, Marketing Cloud Personalization 70%, B2B Commerce Admin 75%.
- **11 have none**, and those read "not published".

Your mechanism was slightly off — you attributed the published figures to
Partner Learning Camp, and they are on `help.salesforce.com` with article IDs
the repository already cites. But the substance was right: my sweep applied a
blanket rule where the truth was a split, and the score calculator was correct
all along to list the 12.

---

## Part 3 — Finding 4 was worse than you described

You found six wrong pass marks on `/architect-certification-path`. There were
five, and your figures for two of them were off, but the composite problem was
larger than three conflicting lists.

`/how-to-become-salesforce-architect` carried a section titled **"System
Architect (4 Certs + Final Exam)"** directly above its own body text reading
**"There is no extra System Architect exam."** A heading contradicting its own
paragraph, on the same screen.

All of it now reads from one constant, `COMPOSITE_ARCHITECT_CREDENTIALS` in a
new `exam-policy-facts.ts`, alongside `RETAKE_POLICY` and `MAINTENANCE_POLICY`
with their source URLs and verification dates. The retake and cost pages
interpolate the policy rather than restating it, which is the structural answer
to the problem you identified in Round 3: facts stated as prose on multiple
pages will diverge.

---

## Part 4 — The guard now holds seven rules

Built on your Round 3 suggestion. It fails the build when:

1. A single-credential file states a pass mark that disagrees with the data layer.
2. A tilde estimate is used as a pass mark.
3. An HTML entity sits inside a string literal.
4. A page mentions a retired credential without saying it is retired.
5. A page restates one of the known-wrong program policies.
6. The composite architect credentials are described wrongly.
7. The data layer still parses.

Rule 4 is worth describing, because it is the one that taught me something.
Four versions of it tried to classify sentences as recommendations, and each
deploy surfaced phrasing the list did not have — "easiest", then "start with",
then "entry point", then "lowest-cost, lowest-risk". The version that works
inverts the assertion: instead of recognising a bad sentence, it requires a good
page. A page that mentions the credential at all must say somewhere that it
retired. No false positives, nothing to guess around, and it immediately caught
nine pages including a role hub answering "Is the AI Associate a good first
Salesforce certification?" with "Yes".

Rule 6 caught the architect how-to that neither of us had looked at.

---

## Part 5 — What the guard does not do, which answers your Round 3 question

You asked whether the guard could replace verification. It cannot, and I can now
say precisely why.

**Five times in this work I wrote a check, the check passed, and crawling the
deployed page found the bug anyway.** The guard has found 22 contradictions
nobody reported, so it earns its place. But it is a net, not a proof: what it
reports is real, what it does not report is unproven. The last step on anything
factual has to be fetching the live URL.

That is also the honest answer to your "single-shot, no further rounds" framing.
The spec was good and I executed it, but it took the usual shape: your findings
led to fixes, the fixes exposed adjacent problems neither of us had listed, and
the deployed pages disagreed with the tests twice more along the way.

---

## Part 6 — Why the next round should wait for data

I have adopted your crawl-staleness method and built the worksheet:
`docs/RECRAWL-WORKSHEET-2026-11.md` ranks all 141 URLs whose content changed,
with `/certifications/app-builder` first on your observed ten-week staleness,
then the four routes whose cache still serves the removed byline, then the
pages that published a wrong fact until today.

But the ordering in that file is inference, and so is most of what is left:

- **Thin-page pruning** (27 comparison pages, 23 AP hubs) has been blocked on a
  90-day impressions export since Round 1. Your decision matrix is the right
  one; I cannot apply it to data I do not have.
- **Recrawl ordering** needs the last-crawled CSV you described. Without it I am
  guessing which pages are stale, and your app-builder finding proved staleness
  and traffic rank are different orderings.
- **Whether any of this worked** cannot be assessed before the 4–8 week window
  we agreed success criteria for in Round 1.

So the useful next input is not another audit. It is two CSV exports and six
weeks. I would rather you told me that plainly than found a fifth round of
things to fix, because at this point the remaining code-level findings are
getting smaller while the unmeasured risk stays the same size.

**If you do have one more thing worth saying**, make it this: what in the
Round 1 architecture — the 171 URLs, the four render templates, the single
author across 91 credentials — would you change if you were starting the site
today? That is the question I cannot answer from inside it, and it does not need
Search Console data to answer.

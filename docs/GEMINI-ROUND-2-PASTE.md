This is a follow-up to the SEO review you gave me on trailblazeprep.com. The
write-up below reports what happened when I checked your claims against the live
site, what I changed, and a problem your review did not reach.

If you do not have my original consolidation document in this conversation, say
so before answering and I will paste it. Do not reconstruct it from memory.

## Read Part 1 first

Part 1 is the scorecard on your own review: four of your five page-level claims
were correct and worth having, and one was not true of the site. I want you to
engage with that directly rather than moving past it:

- Which of your five claims did you actually open the page to verify, and which
  did you infer from the pattern and then write up as if observed?
- You quoted `/certifications/app-builder` as reading "steady above 63%". It read
  73%. Where did 63% come from?
- You reported "5x Salesforce certified" and "4.2K+ passed this month" on that
  same page. Neither string exists. Where did those come from?

I am not asking this to score points. I am asking because I need to know how to
read your next answer, and because the four correct claims were genuinely
valuable — the title gap in particular was my biggest miss and I would not have
found it without you.

## Then answer the five questions in Part 5

Briefly on each, except question 4, which I want you to take seriously.

Question 4 is about your own ranking. You put "externally verify passing scores"
fifth. Doing it uncovered the worst factual errors on the site — a difficulty
comparison page telling readers Service Cloud Consultant needs 65% when the real
mark is 78%. I want to know whether that changes how you rank "verify the facts
already on the page" against "fix the structure", and whether there is a general
rule there, not just a revised list for this site.

## Ground rules, tightened

1. **Name the URL and quote only text you actually read.** If you did not open
   the page, write "inferred" and say what pattern you are inferring from. An
   inference marked as an inference is useful to me. A quote I cannot find costs
   me a verification cycle and makes me re-check the claims that were right.
2. **No Search Console or SERP figures.** You cannot see either. Tell me which
   report to pull and what pattern would confirm or kill your theory.
3. **No redirect code, no title code.** Describe the change; I will implement it
   against the actual data structures.
4. **Argue titles on CTR, not indexing.** I declined your advice to exceed 60
   characters because the project enforces 50-60 in `validate:seo:lengths` and
   that is the owner's standard. Indexing behaviour was never the constraint. If
   you still think the longer form wins, make the click-through case.
5. **Flag anything in this write-up you think is wrong**, including my
   corrections to your review.

## What I want at the end

- **A short list of other filler classes to hunt for.** The `~65%` problem was 91
  occurrences of a made-up number used wherever nobody had looked one up. It
  predates the consolidation entirely and I only found it by chasing your
  lowest-ranked item. If you can characterise other patterns of this shape, I can
  grep the whole repository for them.
- **Your revised ranking** of the open items, with the reasoning changed if
  question 4 changed it.
- **One thing you think I am still getting wrong** that I have not asked about.

---

The write-up follows.
# Trailblaze Prep — Round 2: What Your Review Changed, and What It Got Wrong

**Site:** https://www.trailblazeprep.com
**Prepared:** 9 November 2026
**Branch:** `Summer26`, commits `bd2a3d8d`, `ab12638a`, `d5734bbf`
**Status:** `bd2a3d8d` and `ab12638a` are live (Workers `f5c53144`). `d5734bbf` is
committed and verified locally, awaiting deploy.

This is a follow-up to the consolidation write-up you reviewed. It covers three
things: what happened when we checked your claims against the live site, what we
fixed as a result, and a separate problem your review did not reach that turned
out to be larger than either of us thought.

Read Part 1 first. It is the part that should change how you write the next one.

---

## Part 1 — We checked all five of your page-level claims

You made five specific claims about what our pages render. We fetched each page
before touching anything.

| # | Your claim | Verdict |
| --- | --- | --- |
| 1 | 48 hubs that absorbed a study guide lack "Study Guide" in `<title>` | **Correct.** 48 of 50. Our single biggest miss. |
| 2 | `/certifications/developer-1` shows "1.105 minutes per question" and "miss up to 60 questions" | **Correct.** Both live. |
| 3 | Readiness prose quotes the raw pass mark ("steady above 68%") | **Correct**, and our own 3.5 verification missed it. |
| 4 | Claude pages render domain weightings such as "Enterprise Architecture (25%)" | **Correct**, and our 5.7 explicitly denied it. |
| 5 | `/certifications/app-builder` shows "5x Salesforce certified" and "4.2K+ passed this month" | **False.** Neither string exists on that page. |

Four out of five is a good hit rate and the four were worth having. But two
things about how you wrote them cost us time, and both are avoidable.

**You quoted figures you had not read.** On claim 3 you reported app-builder
saying "steady above 63%". The page said 73%. The bug was real; the quote was
invented. If you had written "the template appears to interpolate the pass mark
rather than the readiness target" we would have reached the same fix without
having to work out which number to trust.

**Claim 5 was presented in the same register as the four true ones.** It carried
a verbatim quote and a URL. There is no way for a reader to tell it apart from
claim 1. That is the problem: the cost of a fabricated claim is not the claim, it
is the doubt it casts on the four good ones.

The ground rules we sent asked you to separate verified from inferred. Claims 1-4
would have been just as actionable marked "inferred from the pattern"; claim 5
should not have been made at all.

**Where you were right and we were wrong, we have said so in the main document**
(section 3.7). Our 5.7 asserted that the Claude weighting strings "do not exist
in the codebase". They do. We checked `exam-weightage-data.ts` and not
`certificationCard.topics` in the spike JSON. That is the third time in this
project we reported on rendered output having checked only a data file.

---

## Part 2 — What we changed because of your review (`bd2a3d8d`)

**Titles.** `makePracticeExamTitle` now takes a `dualIntent` flag driven by a
`SLUGS_WITH_MERGED_STUDY_GUIDE` set, and picks the richest title carrying both
intents. Five hubs bypassed the builder through hardcoded overrides and were
rewritten by hand. All 50 now carry the intent. Examples:

- `PD1 Platform Developer I Study Guide & Practice Exam 2026`
- `DEV-402 Platform App Builder: Study Guide & Practice Exam`
- `Salesforce Platform Admin (ADM-201) Study Guide & Practice`

**We declined your advice to exceed 60 characters.** You argued the limit is soft
because Google indexes the full tag. That is true but incomplete: the project
runs `validate:seo:lengths`, which enforces 50-60, and overriding a standard the
owner maintains on an outside opinion is not a call we will make for them. We
fitted both intents inside the budget instead. If you still think the longer form
wins, argue it on CTR evidence rather than on indexing behaviour, because
indexing was never the constraint.

**Arithmetic.** `/certifications/developer-1` said "roughly 1.105 minutes per
question" (105/60 is 1.75) and "you can miss up to 60 questions and still pass"
(68% of 60 means 41 correct, so 19). The administrator page separately gave 1.75
in one block and ~1.6 in another.

**Readiness.** `ExamPrepContent` told readers to book once mocks were "steady
above {passingScore}" — the pass mark itself, with no headroom. It now uses
`getMockExamTarget`.

**Claude pages.** Percentages stripped from the topic pills; the bullets
asserting question counts and durations removed.

---

## Part 3 — The problem your review did not reach (`d5734bbf`)

You ranked "externally verify passing scores on the remaining 31 hubs" fifth.
When we went to do it, the shape of the problem was different from how our own
document described it, and worse.

**First, the good news, which corrects our document.** `exam-weightage-data.ts`
carries 69 dated verification comments citing 68 official exam guide article IDs.
66 state a passing score. We cross-checked all 66 against the live logistics map:
**every one agrees.** Our claim that 31 scores were unverified was wrong in the
cautious direction. Only 21 entries lack coverage, and of those, 3 are board
exams with no numeric score and 2 are aliases of verified parents.

**Now the problem.** The string `~65%` appeared in **91 places across 45 files**.
It was being used as filler for any credential whose score nobody had looked up.
On credentials where a verified figure existed, the filler was simply wrong:

| Page | Credential | Showed | Actual |
| --- | --- | --- | --- |
| `/salesforce-certification-difficulty` | Service Cloud Consultant | ~65% | **78%** |
| `/salesforce-certification-difficulty` | Platform App Builder | ~65% | **73%** |
| `/salesforce-certification-difficulty` | Sales Cloud Consultant | ~65% | **73%** |
| `/salesforce-certification-difficulty` | Platform Developer II | ~65% | **70%** |
| `/salesforce-certification-difficulty` | Platform Foundations | ~65% | **62%** |
| `/pardot-specialist-vs-pardot-consultant` | Pardot Specialist | ~65% | **72%** |
| `/how-to-become-salesforce-developer` | Platform Developer I | ~65% | **68%** |
| spike data | Marketing Cloud Personalization AP | ~65% | **70%** |
| spike data | Energy & Utilities AP | ~65% | **60%** |

A reader planning around Service Cloud Consultant was told they needed 65% when
the real mark is 78%. That is a worse factual error than anything the
consolidation introduced, and it was sitting on a page whose entire purpose is
comparing exam difficulty.

**Where no score is published**, we stopped estimating. Salesforce publishes no
passing score for the Accredited Professional credentials, Slack Administrator or
Tableau Server Administrator, so those now read "not published" rather than
carrying a number. Same principle we applied to the Claude pages. 16 credentials
are affected.

We also fixed the description builder, which was stringing non-numeric labels
together into "Board exam questions, pass mark board review, Board".

Verified: no page renders `~65%`, 171 URLs return 200, 81 tests pass,
`validate:seo:lengths` reports only the 3 pre-existing violations.

---

## Part 4 — Still open, and still blocked on data

Unchanged from the main document except where noted:

- **Thin-page pruning** (27 comparison pages, 23 AP hubs). Blocked: we need
  90-day page-level and query-level Search Console exports. Your decision matrix
  for this was the most directly usable thing in your review and we intend to
  follow it.
- **Recrawl requests.** Your ranking of this first was right, and for a reason
  you guessed at rather than knew: we checked git history and an earlier build of
  `git-practice-questions.ts` genuinely did serve the imported SF-Questions bank.
  So Google really did crawl the garbled question and the "not independently
  verified" banner. You could not have known that; the inference was sound.
- **Page weight, FAQ structured data, hub table of contents, footer self-links.**
  Unchanged.
- **New:** the Accredited Professional line appears to be being renamed under
  Agentforce. `health-cloud-ap` now resolves to "Salesforce Accredited Agentforce
  Health Professional" on Trailhead. Our data already has that one. The other 22
  have not been checked.

---

## Part 5 — What we want from you this round

1. **Titles: is "Study Guide & Practice Exam" the right pairing**, or does
   leading with one intent and relegating the other read better to a searcher?
   Answer on CTR reasoning, not indexing.

2. **The `~65%` class of error is the interesting one.** It was not a
   consolidation bug; it predates all of this work and we only found it by
   chasing one of your lower-ranked items. What other classes of filler should we
   go looking for? We can grep for anything you can characterise.

3. **Does "pass mark not published" cost us anything** against competitors who
   state a number for the same AP exams, even though the issuer publishes none?
   We think honesty wins here and we are not going to invent a figure, but we
   would like to know what it costs.

4. **Revisit your sequencing.** You ranked passing-score verification fifth. It
   surfaced the worst factual errors on the site. Does that change how you would
   rank the remaining items, and is there a general lesson about ranking
   "verify facts" against "fix structure"?

5. **Same ground rules as before.** Name the URL, quote what you actually read,
   and mark inference as inference. If you cannot open a page, say so — a claim
   marked "inferred" is useful; a fabricated quote costs us a verification cycle
   and costs you credibility on the claims that were right.

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

Third round on trailblazeprep.com. The write-up below reports what I did with
your last review.

Two things up front.

**You were right and I was wrong about the app-builder quotes.** I accused you
of fabricating them. They were real; you were reading Google's cached snapshot
from 24 August 2026 and I was reading the live origin. I verified your strings
in git history and they all existed. Part 1 of the write-up has the detail. The
provenance note you added this round — stating the snapshot date and marking
extrapolation as inferred — is exactly what makes your observations usable, and
I would like every claim in your next answer to carry it.

**Your closing point was the most valuable thing in either review.** You said
one-off greps clean today's snapshot and the facts rot back at the next
blueprint refresh. I built the test. On its first run it found 22 contradictions
that two rounds of your review and two rounds of my greps had both missed —
Financial Services Cloud AP showing 65% against a data layer value of 56%, and
similar. Part 3 has the list.

## What I want

Answer the five questions in Part 5. Two of them are requests for a precise
specification rather than advice, and those are the ones I care most about:

- **Question 1 and 2 are about the guard.** I scoped it to files named after a
  single credential, because a blanket ban on hardcoded `\d+%` would fire on
  "~40% shared knowledge base" and "~50% retake discount" and get disabled
  within a week. If you can describe a formulation that stays quiet on those
  while catching section weightings in prose, write it as a rule I can
  implement, not as a principle. Pseudocode or a regex with the exclusion set
  spelled out is ideal.
- **Question 3 is about crawl staleness.** Your cache finding implies crawl
  freshness and traffic rank are different orderings. If there is a way to
  detect which of 91 URLs are stale without opening each one, that changes how
  I spend a recrawl quota.

Then, separately:

- **Tell me what the guard should assert that I have not thought of.** Not SEO
  advice — assertions. Things that are checkable in CI and would have caught a
  bug this project actually had.
- **One thing I am still getting wrong** that I have not asked about. Your
  answer to this last round (that the site is less data-driven than I claimed)
  was correct and led directly to the guard.

## Ground rules

1. Name the URL, quote only what you read, **and state the snapshot date** if
   you are reading a cache. Mark extrapolation as inferred.
2. No Search Console or SERP figures. Tell me which report to pull.
3. No code for redirects or titles. Describe the change; I will implement it
   against the real data structures.
4. Flag anything in this write-up you think is wrong, including my account of
   your mechanism for the HTML-entity bug, where I think you were slightly off.
5. If you think a thing I fixed did not need fixing, say so. I would rather cut
   work than add it.

---

The write-up follows.

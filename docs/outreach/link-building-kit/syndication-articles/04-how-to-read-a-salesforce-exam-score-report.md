---
title: "How to read a Salesforce exam score report (and work out the score it doesn't give you)"
canonical_url: "https://www.trailblazeprep.com/tools/score-calculator"
tags: salesforce, certification, career
---

Salesforce's exam result report has an unusual gap in it. It tells you a
percentage for every section of the exam. It tells you whether you passed. It
never tells you your overall score.

If you passed, that is a curiosity. If you failed, it is the difference
between rebooking next week and rebooking next quarter — and you cannot get
at it from the report, because the sections are not equally weighted.

## Why averaging the sections is wrong

Here is a worked example — invented scores, but the seven-section shape and
the weightings of a real admin-level exam.

| Section | Your score | Share of exam |
| --- | --- | --- |
| Configuration and Setup | 72% | 20% |
| Object Manager and Lightning App Builder | 80% | 20% |
| Sales and Marketing Applications | 68% | 12% |
| Service and Support Applications | 55% | 13% |
| Productivity and Collaboration | 90% | 7% |
| Data and Analytics Management | 60% | 14% |
| Workflow/Process Automation | 65% | 14% |

The plain average of those seven percentages is 70.0%. The weighted score —
each section multiplied by its share of the exam — is 69.5%. On a 65% pass
mark both of those pass, so it doesn't matter. On a 68% pass mark, the
average says comfortable and the weighted figure says you scraped it, and if
one of the 20% sections had been your weak one instead of the 13% section,
the two numbers would disagree by several points in the other direction.

The weighting is the whole point. A section worth 20% of the exam moves your
result four times as much as one worth 5%. Which means the section to fix
before a retake is not your lowest percentage — it is the lowest percentage
with the biggest weight behind it.

## Doing it by hand

Multiply each section percentage by its weight, add them up, divide by the
total weight you used:

```
(72×20 + 80×20 + 68×12 + 55×13 + 90×7 + 60×14 + 65×14) / 100 = 69.5
```

The one trap: if you only have some of your sections, divide by the weight
you actually supplied, not by 100. Otherwise every missing section counts as
a zero and the number comes out catastrophically low.

## Or don't do it by hand

I built a [Salesforce exam score calculator](https://www.trailblazeprep.com/tools/score-calculator)
that holds the official section weightings and pass mark for every exam where
both are available, works out the weighted score, tells you how far you were
from the pass mark, and names your weakest section.

It covers only the exams where we hold both the published weightings and a
pass mark. The rest are left out rather than estimated — people use this to
decide whether to rebook, and a confidently wrong number there is worse than
no number.

It's free, there's no sign-up, and it's embeddable if you want it on your own
site or in a community post.

## Two honest caveats

**It is close, not exact.** Salesforce does not publish how it rounds section
percentages, nor how the unscored trial questions — up to five on most exams,
which consume your time but not your marks — are handled. Expect small
differences.

**The pass mark is the weakest number in the whole thing.** Salesforce no
longer publishes pass marks on its certification pages at all: I checked all
87 current credentials and found it on none of them. The pass marks here come
from exam guides and should be treated as secondary. That finding is written
up, with the full data, in the
[2026 Salesforce Certification Benchmark Report](https://www.trailblazeprep.com/salesforce-certification-report-2026).

---

*I maintain Trailblaze Prep, a free independent Salesforce certification prep
site. Not affiliated with Salesforce.*

---
title: "The math Salesforce leaves out of your exam score report"
canonical_url: "https://www.trailblazeprep.com/tools/score-calculator"
tags: salesforce, certification, career, math
---

Salesforce's exam result report has an unusual gap in it. It gives you a
percentage for every section. It tells you whether you passed. It never gives
you your overall score.

If you passed, that is a curiosity. If you failed, it is the difference
between rebooking next week and rebooking next quarter — and you cannot get at
it from the report, because the sections are not equally weighted.

*By [Trailblaze Prep — Free Salesforce Certification Practice Questions](https://www.trailblazeprep.com/),
which publishes section weightings and free practice questions for every
current Salesforce certification.*

## Why averaging the sections gives the wrong answer

The real section weightings for the Salesforce Certified Platform
Administrator exam (ADM-201) as of Summer '26 — 60 scored questions, 105
minutes, 68% to pass:

| Section | Share of exam |
| --- | --- |
| Configuration and Setup | 20% |
| Object Manager and Lightning App Builder | 17% |
| Data and Analytics Management | 17% |
| Workflow and Process Automation | 14% |
| Sales and Marketing Applications | 11% |
| Service and Support Applications | 9% |
| Agentforce (new in Summer '26) | 8% |
| Productivity and Collaboration | 4% |

Those are not close to equal. Configuration and Setup is worth five times
Productivity and Collaboration. So suppose a report comes back like this:

| Section | Your score | Weight |
| --- | --- | --- |
| Configuration and Setup | 60% | 20% |
| Object Manager and Lightning App Builder | 75% | 17% |
| Data and Analytics Management | 70% | 17% |
| Workflow and Process Automation | 65% | 14% |
| Sales and Marketing Applications | 80% | 11% |
| Service and Support Applications | 85% | 9% |
| Agentforce | 50% | 8% |
| Productivity and Collaboration | 100% | 4% |

The plain average of those eight numbers is **73.1%**, comfortably over the
68% pass mark. The weighted score is:

```
(60×20 + 75×17 + 70×17 + 65×14 + 80×11 + 85×9 + 50×8 + 100×4) / 100
= (1200 + 1275 + 1190 + 910 + 880 + 765 + 400 + 400) / 100
= 7020 / 100
= 70.2%
```

Still a pass, but three points lower — and the gap opens up precisely when
your weak sections are your heavy ones. Swap the Configuration and Setup score
with the Productivity and Collaboration score and the plain average does not
move at all, while the weighted score falls to **66.8%**: a fail. The average
cannot see the difference. That is the whole problem with it.

## The retake implication

The section to fix before a retake is not your lowest percentage. It is the
one where *points gained × weight* is largest.

In the table above, Agentforce at 50% looks like the disaster. It is worth 8%.
Dragging it from 50% to 80% — thirty points, a lot of study — buys you
`30 × 0.08 = 2.4` points of overall score. Dragging Configuration and Setup
from 60% to 75% — fifteen points, half the work — buys `15 × 0.20 = 3.0`.

Weight your revision by the weightings. It is the highest-leverage thing you
can do between a fail and a retake, and almost nobody does it, because the
result report does not show you the weightings either.

## Doing it in code

```js
/**
 * Weighted overall score from per-section percentages.
 * Normalises by the weight supplied, so a partially filled
 * report still returns a meaningful number.
 */
function weightedScore(sections, entered) {
  let weighted = 0
  let usedWeight = 0
  for (const { name, percentage } of sections) {
    const value = entered[name]
    if (value == null || !Number.isFinite(value)) continue
    weighted += (value * percentage) / 100
    usedWeight += percentage
  }
  return usedWeight === 0 ? null : (weighted / usedWeight) * 100
}
```

The normalisation on the last line is the part people get wrong by hand. If
you only have five of the eight sections, divide by the weight you actually
supplied — not by 100 — or every missing section silently counts as a zero and
the result comes out catastrophically low.

## Or don't do it by hand

The [Salesforce exam score calculator](https://www.trailblazeprep.com/tools/score-calculator)
holds the published section weightings and pass mark for **50 exams**, does
the arithmetic, shows how far you were from the pass mark, and names your
weakest section. Free, no sign-up, and embeddable if you want it inside your
own study guide.

It covers 50 and not all 87 because an exam is included only when both the
official section weightings and a published pass mark exist. The rest are left
out rather than estimated — people use this to decide whether to rebook, and a
confidently wrong number is worse than no number.

## Two honest caveats

**It is close, not exact.** Salesforce does not publish how it rounds section
percentages, nor how the unscored trial questions — up to five on most exams,
which consume your time but not your marks — are handled.

**The pass mark is the weakest figure in the calculation.** Salesforce no
longer publishes pass marks on its certification pages: across all 87 current
credentials the figure appears on none of them. Ours come from exam guides and
should be treated as secondary. That finding, with the full data, is in the
[2026 Salesforce Certification Benchmark Report](https://www.trailblazeprep.com/salesforce-certification-report-2026).

## Where to go next

- [Platform Administrator (ADM-201) practice questions](https://www.trailblazeprep.com/certifications/administrator)
- [Platform App Builder practice questions](https://www.trailblazeprep.com/certifications/app-builder)
- [Business Analyst practice questions](https://www.trailblazeprep.com/certifications/business-analyst)
- [Agentforce Specialist practice questions](https://www.trailblazeprep.com/certifications/agentforce-specialist)
- [Data 360 Consultant practice questions](https://www.trailblazeprep.com/certifications/data-360-consultant)

---

*[Trailblaze Prep](https://www.trailblazeprep.com/) is a free, independent
Salesforce certification prep resource — practice questions and study guides
for every current credential, no sign-up and no paywall. Not affiliated with
Salesforce.*

---
title: "Salesforce doesn't give you your exam score. Here's how to work it out."
canonical_url: "https://www.trailblazeprep.com/tools/score-calculator"
tags: salesforce, certification, career, math
---

Salesforce tells you a percentage for each section of the exam. It tells you pass or fail. It never tells you your actual score.

Pass, and you don't care. Fail, and it's the only thing you want to know. Were you one question short, or twenty? Because that decides whether you rebook next week or spend a month studying first.

You can work it out. Most people get it wrong, because they average the sections.

*From [Trailblaze Prep](https://www.trailblazeprep.com/), free practice questions and study guides for every Salesforce certification.*

## The sections aren't equal

Here's what ADM-201 is actually made of in Summer '26. Sixty scored questions, 105 minutes, 68% to pass.

| Section | Share of exam |
| --- | --- |
| Configuration and Setup | 20% |
| Object Manager and Lightning App Builder | 17% |
| Data and Analytics Management | 17% |
| Workflow and Process Automation | 14% |
| Sales and Marketing Applications | 11% |
| Service and Support Applications | 9% |
| Agentforce (new this release) | 8% |
| Productivity and Collaboration | 4% |

Configuration and Setup is worth five times what Productivity and Collaboration is worth. So averaging the eight numbers treats a 20% section and a 4% section as the same thing. They aren't.

## What that does to a real result

Say your report comes back like this.

| Section | Your score | Weight |
| --- | --- | --- |
| Configuration and Setup | 45% | 20% |
| Object Manager and Lightning App Builder | 50% | 17% |
| Data and Analytics Management | 55% | 17% |
| Workflow and Process Automation | 60% | 14% |
| Sales and Marketing Applications | 90% | 11% |
| Service and Support Applications | 95% | 9% |
| Agentforce | 100% | 8% |
| Productivity and Collaboration | 100% | 4% |

Average those eight numbers and you get **74.4%**. Six points clear of the pass mark. Looks fine.

Now weight them:

```
(45×20 + 50×17 + 55×17 + 60×14 + 90×11 + 95×9 + 100×8 + 100×4) / 100
= (900 + 850 + 935 + 840 + 990 + 855 + 800 + 400) / 100
= 6570 / 100
= 65.7%
```

**65.7%.** That's a fail, and it isn't close. The average was out by nearly nine points, in the wrong direction, because every strong score landed on a small section and every weak one landed on a big one.

That's the whole problem with averaging. It can't see where your marks fell.

## This changes what you study for the retake

The obvious move after a fail is to attack your worst section. In the table above that's Configuration and Setup at 45%, so that one happens to be right. It usually isn't.

What you want is the section where *points gained × weight* is biggest.

Take Agentforce at 50% on some other attempt. It's worth 8%. Drag it from 50 to 80, which is thirty points and a lot of reading, and you buy yourself 2.4 points of overall score. Drag Configuration and Setup from 60 to 75 instead. Half the work, and it's worth 3.0.

Study the heavy sections. Almost nobody does, because the result report doesn't show you the weights either.

## If you want to code it

```js
// Weighted score from per-section percentages.
// Divides by the weight you actually filled in, so a
// partial report still gives a usable number.
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

That last line is where people trip up by hand. If you've only got five of the eight sections, divide by the weight you entered, not by 100. Divide by 100 and the three missing sections silently count as zeros, and your score comes out terrifying for no reason.

## Or just use the calculator

The [Salesforce exam score calculator](https://www.trailblazeprep.com/tools/score-calculator) holds the published weightings and pass mark for **50 exams**. Type in your sections, it does the arithmetic and tells you how far off you were. Free, no sign-up, and you can embed it if you want it in your own study notes.

Fifty, not all 87, because an exam only goes in when both the official weightings and a published pass mark exist. The rest are left out rather than guessed. People use this to decide whether to rebook. A made-up number would be worse than no number.

## Two things I'd rather say up front

It's close, not exact. Salesforce doesn't publish how it rounds the section percentages, or what it does with the unscored trial questions that sit in most exams and eat your time without earning marks.

And the pass mark is the shakiest number in the whole calculation. Salesforce has stopped publishing pass marks on its certification pages. I checked all 87 and found it on none of them. The ones we hold come from exam guides, so treat them as a guide and not gospel. I wrote that up with the full data in the [2026 Certification Benchmark Report](https://www.trailblazeprep.com/salesforce-certification-report-2026).

## Practice questions

- [Platform Administrator (ADM-201)](https://www.trailblazeprep.com/certifications/administrator)
- [Platform App Builder](https://www.trailblazeprep.com/certifications/app-builder)
- [Business Analyst](https://www.trailblazeprep.com/certifications/business-analyst)
- [Agentforce Specialist](https://www.trailblazeprep.com/certifications/agentforce-specialist)
- [Data 360 Consultant](https://www.trailblazeprep.com/certifications/data-360-consultant)

*[Trailblaze Prep](https://www.trailblazeprep.com/) is free and independent. No sign-up, no paywall. Not affiliated with Salesforce.*

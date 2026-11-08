---
title: "Salesforce has quietly stopped publishing pass marks for its certifications"
canonical_url: "https://www.trailblazeprep.com/salesforce-certification-report-2026"
tags: salesforce, certification, opendata, career
---

I went looking for the pass mark for a Salesforce certification, the way
anyone does a week before an exam. I did not find it. Then I checked another.
Then I checked all of them.

Across the 87 current Salesforce certifications, the pass mark is published
on **none** of the certification pages. Not hidden in a footnote, not behind
a sign-in — simply not there any more. The pages carry the fee, usually the
question count, usually the duration. The one number that tells you whether
you passed is gone.

## What is actually published

I built a dataset of all 87 credentials across the 10 role tracks to see how
bad the gaps are. The answer is: the gaps are specific, not general.

- **87 of 87** have a published exam fee.
- **60 of 87** have what I would call a complete published format — question
  count, pass mark and duration all available somewhere.
- **67** have published section weightings.
- **77** have a certification page I could fetch and confirm returns 200.

So this is not a site in disrepair. Fees are maintained carefully, because
fees are a transaction. The pass mark is the figure that has drifted out of
the public pages and into the per-exam guide PDFs, which are not linked from
every credential and are not consistently updated.

## Why this matters more than it sounds

The pass mark is not trivia. Salesforce reports your result as a percentage
*per section* and then, overall, as the word "pass" or "fail" — never an
overall percentage. So after a fail you have eight section percentages and no
way to know whether you were two points short or twenty. Whether you rebook
next week or next quarter depends entirely on which it was, and the number
you need to work that out is the pass mark.

Combine the two and you get a genuinely odd situation: Salesforce does not
tell you your score, and it increasingly does not tell you the score you
needed either.

## What I did about it

Two things, both free, both reusable.

The dataset is published as JSON and CSV under CC BY 4.0, with one rule I
want to be explicit about: **an empty cell means Salesforce does not publish
that figure. It is not a zero, and it is not an estimate.** It would have
been easy to fill the gaps with plausible numbers — 65% is a safe guess for
most exams — and the dataset would have looked more complete and been worth
much less. Where our pass marks come from exam guides rather than
certification pages, that is stated.

- JSON: `https://www.trailblazeprep.com/datasets/salesforce-certifications-2026.json`
- CSV: `https://www.trailblazeprep.com/datasets/salesforce-certifications-2026.csv`

Both send `access-control-allow-origin: *`, so you can pull them straight
into a notebook:

```python
import pandas as pd
df = pd.read_csv("https://www.trailblazeprep.com/datasets/salesforce-certifications-2026.csv",
                 comment="#")
df["passing_score"].isna().sum()   # how many gaps there still are
```

And a calculator that takes the section percentages from your result email
and gives you the overall figure, weighted by each section's published share
of the exam, against the pass mark we hold for that exam. It is the number
the result report leaves out.

## One methodological note

Every official URL in the dataset was fetched and confirmed rather than
derived from the credential's name. That mattered: name-derived URLs were
wrong often enough to mis-map credentials, and the check also turned up two
figures of our own that were incorrect (Tableau Architect's question count,
and Tableau Server Administrator's question count and duration). Both are
fixed. If you find a third, the correction process is an issue with the
Salesforce URL showing the right value.

---

*Full method, per-track totals and the rename tracker:
[2026 Salesforce Certification Benchmark Report](https://www.trailblazeprep.com/salesforce-certification-report-2026).
I maintain Trailblaze Prep, an independent, free Salesforce certification
prep site — no sign-up, no paywall. Not affiliated with Salesforce.*

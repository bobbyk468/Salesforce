# Awesome-list PRs: verified targets, drafts, and the honest odds

**Checked 2026-11-08. Read the viability section before spending time here —
most of what the first draft of this file recommended turned out to be dead.**

## Viability: this channel is much weaker than it looks

The rule in the original version of this file was right: *last commit inside
12 months, and merged PRs from people who are not the owner.* Applying it to
every candidate kills nearly all of them.

| Repository | Stars | Last push | Outside PRs merged | Verdict |
| --- | --- | --- | --- | --- |
| `mailtoharshit/awesome-salesforce` | 810 | **2023-07-20** | — | Stale 3+ years. The only real Salesforce list. |
| `caesar0301/awesome-public-datasets` | 80k | 2026-11-07 | **none since 2021**, 167 open | Pushes are automation, not merges. |
| `jdorfman/awesome-json-datasets` | 3.6k | 2026-03-01 | — | **Archived.** Cannot accept PRs. |
| `NajiElKotob/Awesome-Datasets` | 36 | 2026-09-12 | **zero ever** | Owner-only repo. |
| `ahammadmejbah/Awesome-Datasets-Hub` | 150 | 2026-06-20 | **zero ever** | Owner-only repo. |
| `datasets/core-datasets` | 59 | 2024-10-25 | last 2018 | Dead to contributions. |
| `S4GConsulting/awesome-s4g` | 10 | 2022-04-21 | — | Dead, and tiny. |

There is **no actively maintained, high-authority awesome list — Salesforce or
dataset — that merges outside contributions.** The search for active
alternatives turned up nothing above 150 stars.

So: submit, because a drafted PR costs nothing more to open, but **do not
treat this as a channel that will deliver links.** The syndicated articles and
direct outreach to the sites that already link to us (PlanetCert DS 49,
CertificationPlanner DS 47) are worth far more per hour.

## Pre-flight, already done

- Not a duplicate: `trailblazeprep` appears nowhere in the README.
- No prior PR from us on that repo.
- Every URL returns **200 with zero redirects**: `/`, `/certifications`,
  `/tools/score-calculator`, `/salesforce-certification-report-2026`.

## The rules that list actually enforces

From its `contributing.md`, verbatim constraints:

- Format exactly: `[package](link) - Description.`
- **Additions go at the bottom of the relevant category.**
- One pull request per suggestion.
- Start the description with a capital, end with a full stop.
- **Do not use the word "Salesforce" in the description** — it is implied.
- Keep descriptions short, simple, descriptive. Check spelling and grammar.
- No trailing whitespace.
- PR title must be useful; body links the resource and says why.

---

## PR 1 — practice questions and study guides (submit this one first)

**Section:** `### Learning Salesforce Platform` — not the Certification
Program section. Learning is where Focus on Force sits, which is the closest
analogue on the list (courses, study guides, practice exams). Certification
Program holds only official Salesforce links and uses different formatting.

**Placement:** immediately after the Focus on Force line, which is currently
the last entry in that category.

**Line to add, exactly:**

```markdown
* [Trailblaze Prep](https://www.trailblazeprep.com/) - Free practice questions, study guides and published section weightings for every current certification, with no sign-up.
```

Checked against their rules: capital start, full stop end, no "Salesforce" in
the description, one entry, bottom of category, no trailing whitespace.

**PR title:**

```
Add Trailblaze Prep to Learning Salesforce Platform
```

**PR body:**

> Adds [Trailblaze Prep](https://www.trailblazeprep.com/) to the Learning
> Salesforce Platform section, below Focus on Force.
>
> It is free practice questions and study guides for all 87 current
> certifications, with the published section weightings for 67 of them and an
> [exam score calculator](https://www.trailblazeprep.com/tools/score-calculator)
> that works out a weighted overall score from the per-section percentages the
> result email gives you. No sign-up and no paywall on any of it.
>
> Why it fits here: the section already lists paid and free study resources,
> and this is the free end of that range. It is exam-style material aligned to
> the published outlines, not real exam content.
>
> Disclosure: I maintain the site. Happy to reword or drop this if it is not a
> fit for the list.

---

## PR 2 — the open dataset (hold until PR 1 is answered)

**Do not open this the same day as PR 1.** Two PRs from one person on one day,
to a list that has not merged anything since 2023, reads as a campaign. Wait
for PR 1 to be merged or closed.

**Section:** `### Learning Salesforce Platform`, below the PR 1 entry.

**Line to add, exactly:**

```markdown
* [2026 Certification Benchmark Report](https://www.trailblazeprep.com/salesforce-certification-report-2026) - Exam fees, question counts, durations and section weightings for 87 credentials, as open JSON and CSV under CC BY 4.0.
```

**PR title:**

```
Add open certification dataset to Learning Salesforce Platform
```

**PR body:**

> Adds the [2026 Certification Benchmark Report](https://www.trailblazeprep.com/salesforce-certification-report-2026)
> and its open dataset.
>
> Exam fee, duration, scored question count, pass mark, prerequisites and
> official page for all 87 current credentials across the 10 role tracks,
> published as [JSON](https://www.trailblazeprep.com/datasets/salesforce-certifications-2026.json)
> and [CSV](https://www.trailblazeprep.com/datasets/salesforce-certifications-2026.csv)
> under CC BY 4.0, CORS-open and with no key. Mirrored at
> [github.com/bobbyk468/salesforce-certification-dataset](https://github.com/bobbyk468/salesforce-certification-dataset).
>
> One thing worth knowing from compiling it: the pass mark is no longer
> published on any of the 87 official certification pages. The dataset marks
> unpublished figures as empty rather than filling them with estimates, and
> says where each figure came from.
>
> Disclosure: I maintain the site. Happy to reword or drop this if it is not a
> fit for the list.

---

## How to open them

Fork, branch, edit the README by hand, push, open the PR:

```bash
gh repo fork mailtoharshit/awesome-salesforce --clone --remote=false -- --depth=1
```

Then edit the single line into `README.md` under `### Learning Salesforce
Platform`, below Focus on Force, and:

```bash
cd awesome-salesforce && git switch -c add-trailblaze-prep && git add README.md && git commit -m "Add Trailblaze Prep to Learning Salesforce Platform" && git push -u origin add-trailblaze-prep && gh pr create --repo mailtoharshit/awesome-salesforce --title "Add Trailblaze Prep to Learning Salesforce Platform" --body-file ../pr1-body.md
```

Do not bump the thread afterwards. If it is not reviewed in a month, leave it.

## After a merge

Record the merged URL in `docs/HANDOFF-*.md` and check it appears in Search
Console's Links report. An entry that never shows up there is usually a list
whose README renders `nofollow`, or one Google has stopped crawling — worth
knowing before targeting a sibling list.

# Awesome-list PRs: targets, checklist, and copy

The site has 6 linking root domains. Curated "awesome" lists are the cheapest
legitimate way to add a few more: they are editorially reviewed, so a link
from one is a real editorial link, and the review is a public PR thread
rather than an email nobody answers.

They are also the easiest place to get rejected for sloppiness. Every list
below has rejected entries for the same three reasons: a commercial pitch
instead of a resource, a broken or redirecting URL, and an entry added to the
wrong section. The checklist exists to avoid those.

## What we are submitting

Two things, never the home page:

1. **The dataset** — `https://www.trailblazeprep.com/salesforce-certification-report-2026`
   with its CC BY 4.0 JSON and CSV. This is what belongs on a data or
   "resources" list. It is the only asset here that is genuinely reusable by
   the person reading the list.
2. **The free practice questions index** — `https://www.trailblazeprep.com/certifications`
   for lists with a learning or certification section. No sign-up and no
   paywall, which is the thing those lists actually screen for.

Never submit `/tools/score-calculator` to a list unless the list has a tools
section. It reads as promotional in a resources section.

## Targets

| Repository | Section to target | Notes |
| --- | --- | --- |
| `mailtoharshit/awesome-salesforce` | Learning / Certifications | The largest Salesforce list. Read `CONTRIBUTING.md`: entries are one line, alphabetised. |
| `sfdx-hardis` / `trailheadapps` community lists | Resources | Narrower scope; only submit if the list already carries study material. |
| `sindresorhus/awesome` | Not a target | Only accepts lists, not individual resources. Do not submit. |
| `awesome-opendata` style data lists | Datasets | Submit the dataset URL, with the licence named. CC BY 4.0 is the entry requirement for most of them. |
| `jnv/lists` and similar meta-lists | Data | Same as above. |
| Salesforce Ben / Salesforce Weekly resource roundups | Not a PR | Email pitch, not a PR. Use `syndication-articles/` instead. |

Check each repository is still maintained before spending time on it: last
commit inside 12 months, and merged PRs from people who are not the owner.
An abandoned list is a wasted afternoon and, if it is unmaintained enough,
a link Google discounts anyway.

## Checklist, per PR

- [ ] Read `CONTRIBUTING.md` and the existing entries. Match their format
      exactly — some want `[Name](url) - Description.`, some want no full
      stop, some want the description under 80 characters.
- [ ] One entry per PR. A PR adding two links gets both rejected when the
      maintainer dislikes one.
- [ ] Put the entry in the right section, alphabetised if the section is.
- [ ] Open the URL you are submitting and confirm it returns 200 with no
      redirect. `https://www.trailblazeprep.com/...` — with `www`, with
      `https`, no trailing slash.
- [ ] Describe the resource, not the brand. "Exam fees, question counts and
      section weightings for every Salesforce certification, as CC BY 4.0
      JSON and CSV" passes review. "The best Salesforce certification prep
      site" does not.
- [ ] Say the licence in the description if the entry is the dataset. It is
      the single thing most likely to get a data-list entry accepted.
- [ ] No tracking parameters, no UTM tags. Maintainers strip or reject them.
- [ ] Disclose the affiliation in the PR body, in one line. Maintainers find
      out anyway, and an undisclosed self-submission is how you get banned
      from a list rather than rejected from one.
- [ ] Do not bump the thread. If it is not reviewed in a month, leave it.

## PR body template

> Adds the Trailblaze Prep Salesforce certification dataset to the Data
> section.
>
> It is exam fee, scored question count, duration, prerequisites and section
> weightings for every current Salesforce certification, published as JSON
> and CSV under CC BY 4.0, with the source page documenting which figures
> Salesforce does not publish rather than filling them in with estimates.
>
> Disclosure: I maintain the site. Happy to adjust the wording or drop it if
> it is not a fit for the list.

## After a merge

Record the merged URL in `docs/HANDOFF-*.md` under open items, and check it
appears in Search Console's Links report. A merged entry that never shows up
there is usually a list whose `README.md` is `nofollow` on render, or one
Google has stopped crawling — worth knowing before targeting a sibling list.

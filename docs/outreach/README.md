# Link-building kit

The site's problem is not on-page SEO — that is done — it is that six root
domains link to it. Everything in this folder exists to change that number,
and nothing in it is a shortcut: no paid links, no guest-post farms, no
directory blasts. Those are what the previous audit flagged as the inbound
profile's quality problem in the first place.

The strategy is one asset and three ways of putting it in front of people:

| Folder / file | What it is | Where the link comes from |
| --- | --- | --- |
| `github-pages-repo/` | A standalone repo publishing the CC BY 4.0 dataset **and** a full 87-certification directory with section weightings, as a GitHub Pages site. | Anyone reusing the data must attribute it; data lists and awesome-lists accept licensed datasets. |
| `articles/` | Five finished articles, each built on real exam data from our own codebase. | Dev.to, Medium, Hashnode, LinkedIn and Salesforce community forums, each with a canonical link back. |
| `awesome-salesforce-prs.md` | Verified target audit, plus two ready-to-paste PR drafts. | Editorially reviewed list entries &mdash; but see the warning below. |

## Every asset links to the www root

SEOptimer report 7 showed 308 directory links pointing at `trailblazeprep.com`
(non-www) and **zero** at `https://www.trailblazeprep.com/`, which is the
canonical home page. The apex 308-redirects to www, so that equity is not
lost — but the report grades the canonical root on its own direct links, and
on that measure the home page has none.

So every asset here links to `https://www.trailblazeprep.com/` **with the
www and the trailing slash**, in the intro or outro, alongside four to eight
deep `/certifications/<slug>` links. Not one or the other: both. If you write
a new asset for this folder, keep that rule.

## Regenerating the directory

`github-pages-repo/index.html` is generated, not hand-written:

```bash
npm run outreach:directory
```

Re-run it after any change to the certification grid. Hand-maintaining 87
links is how a directory ends up pointing at slugs that no longer exist, which
is exactly what gets an outreach asset ignored.

## Order of work

1. **Publish the dataset repo first.** The articles and the list entries all
   point at it, and a list PR that links to a repo with no commits reads as
   a placeholder.
2. **Then the awesome-list PRs** &mdash; but expect little. Checked on
   2026-11-08, every candidate list is dead to outside contributions: the one
   real Salesforce list has not been pushed since July 2023, the big dataset
   lists have merged nothing from outside since 2021 or are archived, and no
   active alternative above 150 stars exists. The drafts are written and cost
   nothing more to open, so open them; just do not plan around them. The
   evidence table is in `awesome-salesforce-prs.md`.
3. **Then syndicate, one article a week.** Four articles published on the
   same day to the same four platforms looks like exactly what it is.

## Rules that are not negotiable

- **Canonical back to us.** Every syndicated copy carries
  `rel="canonical"` to the Trailblaze Prep original where the platform
  supports it (Dev.to `canonical_url`, Medium's import tool, Hashnode's
  canonical field). Where it does not — LinkedIn articles, forum posts — the
  copy is shortened to an excerpt with a link, not reproduced whole.
- **Disclose the affiliation.** In the article bio, in the PR body, in the
  forum post. Every time.
- **No fabricated numbers.** Every figure in these articles comes from
  `src/lib/benchmark-report-data.ts`, which computes from the same data the
  certification pages render. If a figure here disagrees with the live
  report, the report is right and this folder is stale — regenerate it.
- **Nothing that is only a pitch.** Each article has to be worth reading by
  someone who never visits the site. That is the only thing that makes any
  of this work.

## Measuring it

Search Console → Links → Top linking sites. Baseline at the time of writing:
**6 linking domains, 12 links**. Check monthly. Syndicated copies on Dev.to
and Medium typically show up within two weeks; merged list entries can take
two months.

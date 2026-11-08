# Publishing this repo

Everything in this folder is the repo, ready to push: `README.md`, `LICENSE`,
`index.html`, and dated snapshots of the two datasets. `SETUP.md` is the only
file that does **not** get copied.

`index.html` is generated. Regenerate it before publishing so it matches the
live grid, and never edit it by hand:

```bash
npm run outreach:directory
```

## Publish

From the repository root. Creates a public repo under the authenticated
GitHub account, pushes, sets the topics, and turns on GitHub Pages:

```bash
cd docs/outreach/github-pages-repo && rm -f SETUP.md && git init -b main && git add -A && git commit -m "2026 Salesforce certification dataset and directory (CC BY 4.0)" && gh repo create salesforce-certification-dataset --public --source=. --remote=origin --push --description "Exam fee, question count, duration and prerequisites for all 87 Salesforce certifications. JSON + CSV, CC BY 4.0." && gh api -X PUT "repos/{owner}/salesforce-certification-dataset/topics" -f names[]=salesforce -f names[]=certification -f names[]=dataset -f names[]=open-data -f names[]=csv -f names[]=json -f names[]=cc-by && gh api -X POST "repos/{owner}/salesforce-certification-dataset/pages" -f "source[branch]=main" -f "source[path]=/" && git checkout SETUP.md
```

That `rm -f SETUP.md` / `git checkout SETUP.md` pair keeps this file out of the
published repo while leaving it in the site repo. It also leaves a nested
`.git` directory inside `docs/outreach/github-pages-repo/` — delete it
afterwards (`rm -rf docs/outreach/github-pages-repo/.git`) or the site repo
will treat the folder as a submodule.

If you would rather not nest a repo inside this one, copy the folder somewhere
else first and run the same commands there.

## Afterwards

- The site lands at `https://<account>.github.io/salesforce-certification-dataset/`.
  Check it renders, and that `index.html`'s canonical link still points at
  `https://www.trailblazeprep.com/salesforce-certification-report-2026` so the
  Pages copy does not compete with the report in search.
- **Only then** start the PRs in `../awesome-salesforce-prs.md`. A list PR
  pointing at a repo with no commits reads as a placeholder.

## A note on the account

The kit originally assumed a Trailblaze Prep organisation. There is no org on
this GitHub account, so the repo will sit under the personal account. That is
workable but slightly weaker for awesome-list submissions, where maintainers
do glance at the owner. Creating a free org and transferring the repo later
works — GitHub redirects the old URL — but do it *before* submitting to lists,
not after, so the links in those PRs never change.

## Refreshing the snapshots

```bash
curl -so salesforce-certifications-2026.json \
  https://www.trailblazeprep.com/datasets/salesforce-certifications-2026.json
curl -so salesforce-certifications-2026.csv \
  https://www.trailblazeprep.com/datasets/salesforce-certifications-2026.csv
```

Commit with the date in the message. Re-run `npm run outreach:directory` at
the same time, or the directory and the datasets drift apart.

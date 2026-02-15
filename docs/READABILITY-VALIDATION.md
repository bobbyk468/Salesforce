# Readability Validation (All Pages)

We fix **"Readability difficulty found"** by keeping sentences short, using simpler words, and adding lists/subheadings. This doc describes how we **validate** readability so it doesn’t regress.

## Score scale (Flesch-Kincaid Reading Ease)

| Score    | Level           |
|----------|-----------------|
| 90–100   | Very easy       |
| 80–90    | Easy            |
| 70–80    | Fairly easy     |
| 60–70    | Standard        |
| 50–60    | Fairly difficult|
| 30–50    | Difficult       |
| 0–30     | Very difficult  |

**Target:** Every page scores **≥ 38** (validation; avoids "Very difficult" 0–30). Aim for **≥ 50** (no “Difficult” or “Very difficult”).

## What we did to improve readability

- **CertPageIntro:** Short sentences, “What you get here” list, simpler words (e.g. “credential” not “recognized credential”).
- **Home, About, Contact, Terms, Privacy:** Shorter paragraphs and FAQ answers; more lists.
- **Role pages:** Extra short paragraph; “Home” link.
- **Exam-prep content:** `studyStrategy` and `whyItMatters` split into shorter sentences; DEFAULT_PREP and key certs (administrator, sales-cloud, developer-1) simplified.
- **ExamPrepContent component:** Renders study strategy and “Why it matters” as one sentence per paragraph.

## How to run the validator

The script fetches **every URL from the sitemap**, extracts visible text, and computes Flesch-Kincaid Reading Ease. It **fails** if any page scores below the minimum (default 38).

```bash
# Validate all pages on production (uses sitemap)
npm run validate:readability

# Custom base URL
node scripts/validate-readability.mjs --base=https://www.trailblazeprep.com

# Stricter pass threshold (e.g. require 50+ to avoid "Difficult")
node scripts/validate-readability.mjs --min-score=50

# Quick check on first 20 URLs
node scripts/validate-readability.mjs --sample=20
```

**Environment:** `BASE_URL` can be set instead of `--base=` (e.g. in CI).

## Preventing regression

1. **Before/after deploy:** Run `npm run validate:readability`. If it exits with code 1, fix the listed URLs (shorten sentences, simpler words, or add subheadings).
2. **Optional CI:** Add a step that runs `npm run validate:readability` (and optionally `npm run validate:seo`) and fails the build on non-zero exit.
3. **New content:** Keep the same style: short sentences (aim for &lt; 20 words), common words, and lists where it helps. Re-run the validator after adding new pages.

## Run both Technical SEO and Readability

```bash
npm run validate:all
```

This runs compression + text-to-HTML + readability on all sitemap URLs so you don’t get the same issues again.

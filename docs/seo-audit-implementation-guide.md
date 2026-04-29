# SEO Audit Implementation Guide
**Based on trailblazeprep.com audit — April 2026**
**Result: 0 violations across 301 pages after all fixes**

This document covers every check performed, what was found, and exactly how it was fixed so you can replicate the process on any Next.js site.

---

## Step 1: Understand Your Site Structure

Before auditing, map out your page types. This project had:

| Page Type | Count | URL Pattern |
|---|---|---|
| Certification hub pages | 87 | `/certifications/[slug]` |
| Exam tips pages | 80+ | `/[cert]-exam-tips` |
| Study guide pages | 52 | `/[cert]-study-guide` |
| Comparison pages | 30+ | `/[cert-a]-vs-[cert-b]` |
| Role/path pages | ~15 | `/certifications/role/[slug]`, `/[role]-certification-path` |
| Commercial pages | ~20 | `/salesforce-certification-cost`, `/contact`, etc. |

Knowing your page types tells you which fixes are bulk (template-based) vs per-page.

---

## Step 2: Add a Build-Time SEO Length Validator

This is the most important tool. Create `scripts/validate-seo-lengths.mjs`:

```js
#!/usr/bin/env node
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

const BUILD_DIR = join(process.cwd(), '.next/server/app')
const TITLE_MAX = 60
const DESC_MAX = 160

function* walkHtml(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) yield* walkHtml(full)
    else if (entry.name.endsWith('.html')) yield full
  }
}

function decodeHtmlEntities(str) {
  return str
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'").replace(/&#x2026;/g, '…')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
}

function extractTitle(html) {
  const m = html.match(/<title[^>]*>([^<]*)<\/title>/)
  return m ? decodeHtmlEntities(m[1].trim()) : null
}

function extractDescription(html) {
  const m = html.match(/<meta\s+name="description"\s+content="([^"]*)"/)
    ?? html.match(/<meta\s+content="([^"]*)"\s+name="description"/)
  return m ? decodeHtmlEntities(m[1].trim()) : null
}

let violations = 0, checked = 0

for (const file of walkHtml(BUILD_DIR)) {
  const html = readFileSync(file, 'utf8')
  const relPath = file.replace(BUILD_DIR, '').replace(/\/page\.html$/, '') || '/'
  const title = extractTitle(html)
  const desc = extractDescription(html)
  checked++

  if (title && title.length > TITLE_MAX) {
    console.error(`TITLE TOO LONG (${title.length} chars) on ${relPath}:\n  "${title}"`)
    violations++
  }
  if (desc && desc.length > DESC_MAX) {
    console.error(`DESC TOO LONG (${desc.length} chars) on ${relPath}:\n  "${desc}"`)
    violations++
  }
  if (!title) { console.warn(`MISSING TITLE on ${relPath}`); violations++ }
  if (!desc) { console.warn(`MISSING DESC on ${relPath}`); violations++ }
}

console.log(`\nChecked ${checked} pages. Violations: ${violations}`)
if (violations > 0) process.exit(1)
else console.log('All titles ≤60 chars and descriptions ≤160 chars. ✓')
```

Add to `package.json`:
```json
"validate:seo:lengths": "node scripts/validate-seo-lengths.mjs",
"validate:all": "npm run build && node scripts/validate-seo-lengths.mjs"
```

**Run after every build:**
```bash
npm run build && node scripts/validate-seo-lengths.mjs
```

> **Important:** The validator must decode HTML entities before measuring. `(Spring '26)` in a title encodes to `(Spring &#x27;26)` in raw HTML — 5 chars instead of 1. Without decoding, you get false positives. The `decodeHtmlEntities()` function above handles this.

---

## Step 3: Generate a SERP Preview for All Pages

Before fixing anything, export what Google actually sees. Run this after `npm run build`:

```js
// scripts/serp-preview.mjs
import { readFileSync, readdirSync, writeFileSync } from 'fs'
import { join } from 'path'

const BUILD_DIR = join(process.cwd(), '.next/server/app')

function decodeHtml(str) {
  return str
    .replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'").replace(/&#x2026;/g, '…')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
}
function* walkHtml(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const f = join(dir, e.name)
    if (e.isDirectory()) yield* walkHtml(f)
    else if (e.name.endsWith('.html')) yield f
  }
}
const extract = (html, rx) => { const m = html.match(rx); return m ? decodeHtml(m[1].trim()) : '' }

const pages = [], seen = new Set()
for (const file of walkHtml(BUILD_DIR)) {
  const html = readFileSync(file, 'utf8')
  const url = extract(html, /<link[^>]+rel="canonical"[^>]+href="([^"]*)"/) ||
              file.replace(BUILD_DIR, '').replace(/\/page\.html$/, '')
  if (seen.has(url) || url.includes('_not-found')) continue
  seen.add(url)
  const title = extract(html, /<title[^>]*>([^<]*)<\/title>/)
  const desc = extract(html, /<meta\s+name="description"\s+content="([^"]*)"/)
  pages.push({ url, title, desc })
}

pages.sort((a, b) => a.url.localeCompare(b.url))
const tsv = ['URL\tTitle\tTitle Length\tDescription\tDesc Length',
  ...pages.map(p => [p.url, p.title, p.title.length, p.desc, p.desc.length].join('\t'))
].join('\n')
writeFileSync('docs/serp-preview.tsv', tsv)
console.log(`Written ${pages.length} pages to docs/serp-preview.tsv`)
```

Open the `.tsv` file in Google Sheets (File → Import, tab-separated). You can then sort by title length to spot everything over 60, or scan descriptions visually.

---

## Step 4: Fix Title Length Violations

### 4a. Titles generated by a shared function

If you have a function that generates titles for many pages (like `buildStudyGuideTitle`), fix the formula first — one change fixes all pages.

**Common mistake — ugly truncation:**
```ts
// BAD: Produces "CRM Analytics & Einstein Discovery Consultant Study Guide &…"
const base = `${certName} Study Guide & Prep Roadmap [${YEAR}]`
return base.length <= 60 ? base : base.slice(0, 59) + '…'
```

**Fix: shorten the suffix, add overrides for long names:**
```ts
export function buildStudyGuideTitle(slug: string): string {
  // Override for cert names that exceed 60 chars even with short suffix
  const overrides: Record<string, string> = {
    'long-cert-name-slug': `Short Name Study Guide [${YEAR}]`,
    // add one for each cert whose full name > ~35 chars
  }
  if (overrides[slug]) return overrides[slug]

  const short = getShortName(slug) // your name-shortening function
  const base = `${short} Study Guide [${YEAR}]`  // shorter suffix = fewer truncations
  return base.length <= 60 ? base : base.slice(0, 59) + '…'
}
```

**How to find which slugs need overrides:**
```bash
# After build, find all study-guide pages with title violations
node scripts/validate-seo-lengths.mjs 2>&1 | grep "TITLE TOO LONG" | grep "study-guide"
```

### 4b. Titles hardcoded in individual page files

For one-off pages (comparison pages, how-to guides, path pages), find and shorten each title directly:

```bash
# Find pages with titles over 60 chars
node scripts/validate-seo-lengths.mjs 2>&1 | grep "TITLE TOO LONG" | grep -v "study-guide"
```

Common shortening patterns:
| Too long | Shortened |
|---|---|
| `"Salesforce Consultant Certification Path (Spring '26): Which Order?"` (67) | `"Salesforce Consultant Cert Path (Spring '26): Which Order?"` (58) |
| `"Marketing Cloud Engagement Admin vs Developer: Which Cert to Take?"` (66) | `"MC Engagement Admin vs Developer: Which Cert to Take?"` (53) |
| `"How to Register for a Salesforce Certification Exam (Spring '26)"` (64) | `"How to Register for a Salesforce Cert Exam (Spring '26)"` (56) |
| `"Which Salesforce Certification Should I Get First? (Spring '26)"` (63) | `"Which Salesforce Cert to Get First? (Spring '26)"` (48) |

Abbreviation rules:
- `Certification` → `Cert`
- `Administrator` → `Admin`
- `Marketing Cloud Engagement` → `MC Engagement`
- Remove `"& Prep Roadmap"`, `"Complete Guide"`, `"Study Guide"` from already-long titles
- Shorten `"Which Cert to Take?"` → `"Which Cert First?"`

---

## Step 5: Fix Description Length Violations

### 5a. Template-based descriptions (most common)

If you have a shared description template like:
```ts
`Free ${certName} practice exam: 60 questions, ~65% passing. $200 fee. Spring '26 study guide with exam tips & detailed explanations included.`
```

This will be **over 160 chars** for any cert name longer than ~13 characters. The long suffix `"with exam tips & detailed explanations included."` (47 chars) is wasted — cut it.

**Find and replace across the entire file:**
```bash
# In your cert-seo-data.ts or equivalent
# Replace the long suffix with a short CTA hook
sed -i '' 's/ study guide with exam tips & detailed explanations included\./ — no sign-up./g' src/lib/cert-seo-data.ts
```

Result for `"Advanced Administrator"` (22 chars):
- Before: 167 chars ❌
- After: 120 chars ✓

### 5b. Per-page descriptions

For one-off pages, the validator will tell you exactly which ones are over 160:
```bash
node scripts/validate-seo-lengths.mjs 2>&1 | grep "DESC TOO LONG"
```

Fix each one directly in its page file. Aim for 120–155 chars — leave a small buffer for future year changes (`Spring '26` → `Summer '26` adds chars).

---

## Step 6: Ahrefs SEO Checks

### 6a. Schema validation — use correct @type

Google's Rich Results Test rejects non-standard schema. Common mistake:

```ts
// BAD: "Table" is not a valid schema.org @type for this use case
return {
  '@context': 'https://schema.org',
  '@type': 'Table',
  mainEntity: { '@type': 'ItemList', ... }
}

// GOOD: Use ItemList directly
return {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Exam Topic Weightage',
  itemListElement: sections.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.name,
    description: `${s.percentage}%`,
  })),
}
```

Validate any schema at: https://search.google.com/test/rich-results

### 6b. Duplicate content — noindex practice/duplicate pages

If you have duplicate pages (e.g., a practice-test page whose canonical points to the main cert page), add `noindex` to prevent GSC "Duplicate without user-selected canonical" warnings:

```ts
// In your dynamic route generateMetadata
const NOINDEX_SLUGS = ['administrator-practice-test', 'email-specialist-practice-test']

export async function generateMetadata({ params }) {
  if (NOINDEX_SLUGS.includes(params.slug)) {
    return { ...getPageMetadata(params.slug), robots: { index: false, follow: true } }
  }
  // ... normal metadata
}
```

Also exclude these from your sitemap:
```ts
const excludedPaths = new Set(['/certifications/administrator-practice-test'])
const certUrls = items.filter(item => !excludedPaths.has(item.href))
```

### 6c. Sitemap — use filesystem auto-discovery

Never maintain a manual list of URLs in `sitemap.ts`. Use `readdirSync` to auto-discover:

```ts
import { readdirSync } from 'fs'
import { join } from 'path'

const appDir = join(process.cwd(), 'src/app')
const allDirs = readdirSync(appDir, { withFileTypes: true }).filter(d => d.isDirectory())

// Auto-discover all exam-tips pages
const examTipsUrls = allDirs
  .filter(d => d.name.endsWith('-exam-tips'))
  .map(d => ({
    url: `${baseUrl}/${d.name}`,
    lastModified: new Date(RELEASE_DATE),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

// Auto-discover all study-guide pages
const studyGuideUrls = allDirs
  .filter(d => d.name.endsWith('-study-guide'))
  .map(d => ({
    url: `${baseUrl}/${d.name}`,
    lastModified: new Date(RELEASE_DATE),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
```

New pages are automatically included. No more orphaned pages missing from the sitemap.

### 6d. robots.ts — defensive www fallback

If your canonical domain is `www.example.com`, protect against a misconfigured env var:

```ts
const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.example.com'
// Auto-correct apex domain → www so a wrong env var doesn't break crawling
const baseUrl = rawUrl.replace(/^(https?:\/\/)(?!www\.)example\.com/, '$1www.example.com')
if (rawUrl !== baseUrl) {
  console.warn('[robots] NEXT_PUBLIC_SITE_URL uses apex — auto-corrected to www.')
}
```

### 6e. Internal linking depth — hub-and-spoke

Pages with few inlinks get buried. Add explicit related-page overrides for your deepest pages:

```ts
// In your getRelatedPages() function
const relatedOverrides: Record<string, string[]> = {
  // Parent page → niche child pages
  'service-cloud': ['contact-center-ap', 'order-management-admin-ap'],
  'field-service': ['advanced-field-service-ap', 'service-cloud'],
  // Niche page → parent + siblings (bidirectional)
  'contact-center-ap': ['service-cloud', 'advanced-field-service-ap'],
  'advanced-field-service-ap': ['field-service', 'contact-center-ap'],
}
```

This gives low-traffic niche pages inlinks from high-traffic parent pages, helping Google discover and rank them.

---

## Step 7: GSC-Driven CTR Fixes

After running the technical fixes, analyze Google Search Console data:

### 7a. Find high-impression, low-CTR pages

In GSC → Performance → Pages, sort by Impressions descending. Flag any page where:
- Impressions > 500 AND CTR < 1% AND Position < 20 → title/description is failing

### 7b. Find page-1 pages with 0 clicks

In GSC, filter Position < 10. Any page with impressions but 0 clicks has a title that either:
- Gets truncated mid-word (check validator output)
- Doesn't match the user's search intent
- Looks like spam or is too generic

**Example fix found in this audit:**
`crm-analytics-study-guide` was at position 8.9 with 306 impressions and **0 clicks**. The title was being cut to `"CRM Analytics & Einstein Discovery Consultant Study Guide &…"` — the `&…` at the end looked broken. Fixed to `"CRM Analytics Study Guide [Spring '26]"`.

### 7c. Spam queries inflating impression counts

In GSC → Queries, look for queries that are competitor URLs or gibberish with many impressions and 0 clicks. These are not fixable via code — just filter them out in GSC when reporting true CTR.

### 7d. Stale Ahrefs canonical reports

Ahrefs crawls on a schedule (weekly/monthly). If you fixed canonical issues recently, the Ahrefs report will still show old data. Always verify the **current built HTML** before treating an Ahrefs finding as actionable:

```bash
# Check actual canonical in built HTML
grep 'rel="canonical"' .next/server/app/your-page.html
```

---

## Step 8: H1 Tags for Top Pages

Generic H1s (`"Platform Developer I Certification"`) don't differentiate from competitors. For your top pages by impressions, write keyword-rich H1s that include the exam code and year:

```ts
export function getCertH1Text(slug: string): string {
  if (slug === 'developer-1') {
    return `Salesforce PD1 Certification: Free Practice Exam & Study Guide (${YEAR})`
  }
  if (slug === 'administrator') {
    return `Salesforce Certified Platform Administrator (ADM-201) Study Guide & Free Practice Questions (${YEAR})`
  }
  // ... add for each top page
  return `${primaryName} – Complete ${YEAR} Guide`  // fallback
}
```

Prioritize by GSC impressions — fix the top 10 pages first, they deliver the most CTR improvement per hour of work.

---

## Step 9: AP / Niche Page Unique Descriptions

If you have many similar niche pages (accredited professional certs, topic sub-pages, etc.) that reuse the same template description, each needs a unique one or Google treats them as duplicate content.

**Pattern to follow:**
```ts
// BAD — identical across 14 pages
'contact-center-ap': `Free Contact Center AP practice exam. Spring '26.`

// GOOD — unique, covers specific topics
'contact-center-ap': `Contact Center AP exam prep: covers Service Cloud Voice, CTI, omni-channel routing & agent experience. 60 Qs, ~65% pass, 90 min. $150 fee. ${YEAR} guide.`
'process-automation-ap': `Process Automation AP exam prep: covers Flow Builder, approval processes, automation rules & invocable actions. 60 Qs, ~65% pass, 90 min. $150 fee. ${YEAR} guide.`
```

---

## Step 10: Verify Everything Passes

```bash
npm run build && node scripts/validate-seo-lengths.mjs
```

Expected output:
```
Checked 301 pages. Violations: 0
All titles ≤60 chars and descriptions ≤160 chars. ✓
```

---

## Quick Checklist

- [ ] `scripts/validate-seo-lengths.mjs` added and wired into `package.json`
- [ ] Build runs clean: `npm run build`
- [ ] Validator passes: 0 violations
- [ ] Study guide / shared title functions use `clampTitle` AND clean format (no ugly mid-word truncation)
- [ ] Template descriptions ≤ 160 chars including the release year string
- [ ] Niche/AP pages each have unique descriptions
- [ ] Exam weightage schema uses `ItemList`, not `Table`
- [ ] Practice-test / duplicate pages have `robots: { index: false, follow: true }`
- [ ] Duplicate pages excluded from sitemap
- [ ] Sitemap uses filesystem auto-discovery (no manual URL lists)
- [ ] `robots.ts` has www fallback for misconfigured env vars
- [ ] Top 10 pages by GSC impressions have keyword-rich H1s
- [ ] Hub-and-spoke internal linking covers your deepest pages
- [ ] SERP preview exported (`serp-preview.tsv`) and reviewed

---

## Tools Used

| Tool | Purpose |
|---|---|
| `scripts/validate-seo-lengths.mjs` | Build-time check: titles ≤60, descriptions ≤160 |
| `scripts/serp-preview.mjs` (or inline script) | Export all 300 SERP snippets to TSV for review |
| Google Search Console → Performance → Pages | Find high-impression, low-CTR pages |
| Google Search Console → Performance → Queries | Find queries driving impressions to wrong pages |
| Ahrefs Site Audit → Non-canonical pages | Find pages with wrong canonical tags |
| Ahrefs Site Audit → Pages with 4xx outlinks | Find broken internal links |
| Google Rich Results Test | Validate structured data / schema |

# Technical SEO Validation (All Pages)

This doc describes how we fix and **validate** the Technical SEO audit items (including PageSpeed HTML size) so they stay fixed across **all pages** (not just a sample of 100).

## 1. Low Text-to-HTML Ratio

**What we did**
- Reduced initial HTML on heavy pages (e.g. certification-path loads path data client-side).
- Added short body text on thin pages (certifications index, role pages) so visible text increases without much extra markup.
- Kept content in lists and short paragraphs to improve ratio.

**Validation**
- Run the script against the live site (or a preview). It fetches **every URL from the sitemap** and computes text length vs HTML length.
- **Pass:** ratio ≥ 8%. **Warn:** 4–8%. **Fail:** &lt; 4% (script exit code 1).

```bash
npm run validate:seo
# Or against a specific base URL:
node scripts/validate-technical-seo.mjs --base=https://www.trailblazeprep.com
# Sample only 20 URLs (faster):
node scripts/validate-technical-seo.mjs --sample=20
```

If any page fails, add a sentence or two of body text or reduce wrapper markup on that page.

---

## 2. Uncompressed Page

**What we did**
- `next.config.js`: `compress: true` so Next.js serves gzip for all routes when using `next start`.
- On Vercel (or similar), the host compresses at the edge (Brotli/gzip). No extra config needed.

**Validation**
- The same script checks the `Content-Encoding` response header for each URL.
- **Pass:** response has `gzip` or `br`. **Fail:** no encoding (or missing header).

```bash
npm run validate:seo
```

If compression fails on production, ensure (1) you are using a production build and (2) the host (e.g. Vercel) has compression enabled (it usually does by default).

---

## 3. Unminified JavaScript and CSS Files

**What we did**
- Next.js production build (`next build`) minifies JS and CSS by default.
- `next.config.js`: `productionBrowserSourceMaps: false` so we don’t ship source maps.

**Validation**
- **Local (after build):** The script checks `.next/static/chunks/*.js` and ensures chunks look minified (few lines, small line count).
- **Production:** We don’t re-check minification from the validator; production assets come from `next build`, which is always minified.

```bash
npm run build
npm run validate:seo:local
# Or: node scripts/validate-technical-seo.mjs (after build) to also run minification check
```

If an audit still flags “unminified,” confirm the audit is run against a **production** deployment (not dev). Dev builds are not minified.

---

## 4. HTML Document Size (PageSpeed)

**What we did**
- **Home:** Replaced the large "Explore by role" certifications grid (9 cards × 4 certs each) with a compact "Browse by role" list (9 role links + View all certifications). Full grid remains on `/certifications`.
- **Cert pages:** Practice questions and (on administrator) CTA/dump-comparison sections are rendered **client-only** (`dynamic(..., { ssr: false })`) so they are not in the initial HTML. This keeps document size under the PageSpeed thresholds.
- **Administrator:** Moved "Get Full Question Bank," "Practice vs Dumps," and "Platform Admin vs Other" into a client-only component; trimmed ADM-201 section subtopics.

**Validation**
- The same script measures **uncompressed** HTML size (response body length) for every sitemap URL.
- **Pass:** &lt; 100 KB. **Warn:** 100–200 KB (needs improvement). **Fail:** ≥ 200 KB (script exit code 1).

```bash
npm run validate:seo
```

To validate a **local** build (sitemap URLs are rewritten to the base URL):
```bash
npm run build && npm run start
# In another terminal:
node scripts/validate-technical-seo.mjs --base=http://localhost:3000
```

If any page fails (≥ 200 KB), reduce initial HTML: move heavy blocks to client-only components, shorten inline data, or trim below-the-fold content.

---

## Running validation for all pages

1. **Deploy** the site (e.g. to Vercel) so the sitemap is live.
2. Run:
   ```bash
   BASE_URL=https://www.trailblazeprep.com npm run validate:seo
   ```
   or:
   ```bash
   node scripts/validate-technical-seo.mjs --base=https://www.trailblazeprep.com
   ```
3. The script fetches the sitemap, parses all `<loc>` URLs (rewriting them to the `--base` origin when provided), and checks each one for compression, text-to-HTML ratio, and **HTML document size**. That covers **every page** in the sitemap (100+ URLs).
4. Fix any reported failures; then re-run until the script exits with code 0.

---

## Preventing regression

- **CI (optional):** Add a step that runs `npm run validate:seo` against the production or preview URL after deploy. Fail the build if the script exits non-zero.
- **Before release:** Run `npm run validate:seo` manually against production or your staging URL.
- **New pages:** Add new routes to the sitemap (`src/app/sitemap.ts`). The validator uses the sitemap, so new pages are included automatically.

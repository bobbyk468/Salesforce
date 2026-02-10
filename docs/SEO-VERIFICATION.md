# SEO Verification Checklist

All **89 certification pages** use the same SEO setup: unique title & meta description, H1, intro, FAQ/Breadcrumb/Course schema, related certifications, practice-question explanations, **Winter '26 release compatibility**, and Open Graph tags. Verification is done via **View Page Source** and **clicking "Check Answer"**.

## Already implemented (verify via View Source / Check Answer)

| Item | Location | How to verify |
|------|----------|----------------|
| Meta description | `getCertMetadata(slug)` | View Source → search `name="description"` |
| Open Graph (og:title, og:description, og:url) | Same metadata | View Source → search `og:title` |
| FAQPage schema | CertPageSeo | View Source → search `"@type":"FAQPage"` |
| BreadcrumbList schema | CertPageSeo | View Source → search `"@type":"BreadcrumbList"` |
| Course schema | CertPageSeo | View Source → search `"@type":"Course"` |
| Practice answer + "Why this is correct" | QuestionCard | Click **Check Answer** on any question |
| Winter '26 release + What's new | CertPageIntro (all pages) | Scroll to "Release compatible: Winter '26" in intro block |

---

## 1. Meta descriptions

**Where it’s set:** `src/lib/cert-seo-data.ts` → `getCertMetadata(slug)` returns `description: descForMeta`.  
**How Next.js uses it:** The App Router renders `<meta name="description" content="...">` in the document `<head>`.

**How to verify:**
1. Open a certification page (e.g. `/certifications/administrator` or `/certifications/sales-cloud`).
2. **View Page Source** (right‑click → “View Page Source”, or Ctrl/Cmd+U).
3. Search for `meta name="description"` or `name="description"`.
4. You should see something like:
   - **Administrator:** `content="Pass the Salesforce Administrator (ADM-201) exam with section-wise weightage, 500+ practice questions, and detailed study tips. Master all exam topics."`
   - **Sales Cloud:** `content="Prepare for Sales Cloud Consultant certification with practice questions, exam weightage breakdown, solution design strategies, and expert study tips."`

If you only “Inspect” the page, the meta tag may be collapsed under `<head>`; **View Source** shows the full HTML.

---

## 2. Open Graph tags

**Where it’s set:** Same `getCertMetadata(slug)` returns `openGraph: { title, description, type: 'article', url }`.  
**How Next.js uses it:** Renders `<meta property="og:title">`, `<meta property="og:description">`, `<meta property="og:type">`, `<meta property="og:url">` in `<head>`.

**How to verify:**
1. View Page Source on any cert page.
2. Search for `og:title` or `property="og:`.
3. You should see `og:title`, `og:description`, `og:type`, and `og:url` with the correct values for that page.

---

## 3. Structured data (FAQ, Breadcrumb, Course)

**Where it’s set:** `src/components/CertPageSeo.tsx` outputs three `<script type="application/ld+json">` blocks at the top of the page body:
- **BreadcrumbList** – from `getCertBreadcrumbJsonLd(slug, certTitle, roleSlug, roleName)`
- **FAQPage** – from `getCertFaqJsonLd(slug, certTitle)` (2–3 questions/answers per cert)
- **Course** – courseJsonLd (cert as a Course with provider and CourseInstance)

**How to verify:**
1. View Page Source on a cert page (e.g. `/certifications/administrator`).
2. Search for `"@type":"FAQPage"` – you should see a JSON-LD block with `mainEntity` array of Question/Answer pairs.
3. Search for `"@type":"BreadcrumbList"` – you should see `itemListElement` with Home → Certifications → [Role] → Cert name.
4. Search for `"@type":"Course"` – you should see the cert as a Course with provider “Salesforce Cert”.

Google reads JSON-LD in the **body**; it does not need to be in `<head>`.

---

## 4. Practice question explanations

**Where it’s set:** `src/components/QuestionCard.tsx`. After the user clicks **“Check Answer”**, the component shows:
- **Correct answer: [letter]. [option text]** (e.g. “Correct answer: B. Lead Assignment Rules”)
- **Why this is correct:** [explanation paragraph]

**How to verify:**
1. Open any certification page with sample questions (e.g. `/certifications/administrator` or `/certifications/sales-cloud`).
2. Scroll to **“Sample Practice Questions”**.
3. Select an answer (A, B, C, or D) and click **“Check Answer”**.
4. Below the button you should see a green-tinted box with:
   - “Correct answer: X. [full option text]”
   - “Why this is correct:” followed by 2–3 sentences explaining the answer.

If you don’t click “Check Answer”, the explanation block is intentionally hidden until the user has chosen an answer.

---

## 5. Sitemap and robots

- **Sitemap:** `src/app/sitemap.ts` generates the sitemap. Live URL: `https://yourdomain.com/sitemap.xml` (or `http://localhost:3000/sitemap.xml` in dev).
- **robots.txt:** `src/app/robots.ts` allows indexing of important pages. Live URL: `https://yourdomain.com/robots.txt`.

Submit your production sitemap URL in **Google Search Console** (Sitemaps section).

---

## Summary

| Element                 | Location in code              | How to verify                          |
|-------------------------|-------------------------------|----------------------------------------|
| Meta description        | `getCertMetadata()` in cert-seo-data.ts | View Source → search `name="description"` |
| Open Graph              | Same `getCertMetadata()`      | View Source → search `og:title`        |
| FAQPage schema         | `CertPageSeo.tsx`             | View Source → search `"@type":"FAQPage"` |
| BreadcrumbList schema  | `CertPageSeo.tsx`             | View Source → search `"@type":"BreadcrumbList"` |
| Course schema          | `CertPageSeo.tsx`             | View Source → search `"@type":"Course"` |
| Practice explanations  | `QuestionCard.tsx`            | Click “Check Answer” on any question   |

All of the above are already implemented; this doc is for verification only.

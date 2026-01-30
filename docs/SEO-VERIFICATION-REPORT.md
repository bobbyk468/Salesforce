# SEO Verification: trailblazeprep.com

This document maps the external SEO analysis report to the codebase. **All listed items are already implemented**; Next.js generates the corresponding `<meta>` tags and JSON-LD from the metadata exports. To verify on the live site, use **View Page Source** (not Inspect) or check the **Elements** panel for `<head>` content.

---

## ✅ Meta description

- **Status**: Implemented  
- **Where**:  
  - **Root**: `src/app/layout.tsx` → `metadata.description`  
  - **Certification pages**: `src/lib/cert-seo-data.ts` → `getCertMetadata()` → `description`  
  - **Other pages**: Each page’s `metadata` export (e.g. `src/app/certifications/page.tsx`, `src/app/about/page.tsx`)  
- **Output**: `<meta name="description" content="...">`  
- **Verify**: View source on any URL and search for `name="description"`.

---

## ✅ Open Graph tags

- **Status**: Implemented  
- **Where**:  
  - **Root/default**: `src/app/layout.tsx` → `metadata.openGraph` (title, description, type, url, siteName, images with width/height/alt)  
  - **Certification pages**: `src/lib/cert-seo-data.ts` → `getCertMetadata()` → `openGraph` (includes url, publishedTime, modifiedTime, images)  
  - **Homepage**: `src/app/page.tsx` → `metadata.openGraph.url`  
  - **Certifications index**: `src/app/certifications/page.tsx` → `openGraph`  
  - **Role pages**: `src/app/certifications/role/[slug]/page.tsx` → `openGraph`  
- **Output**: `<meta property="og:title">`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`, etc.  
- **Verify**: View source and search for `property="og:`.

---

## ✅ Twitter Card tags

- **Status**: Implemented  
- **Where**:  
  - **Root**: `src/app/layout.tsx` → `metadata.twitter` (card, title, description, images)  
  - **Certification pages**: `src/lib/cert-seo-data.ts` → `getCertMetadata()` → `twitter`  
  - **Certifications index & role pages**: Same files as Open Graph  
- **Output**: `<meta name="twitter:card">`, `twitter:title`, `twitter:description`, `twitter:image`  
- **Verify**: View source and search for `name="twitter:`.

---

## ✅ Schema.org structured data (JSON-LD)

- **Organization**: `src/app/layout.tsx` → `organizationJsonLd` in `<body>` (name, url, description, logo, contactPoint).  
- **WebSite** (homepage): `src/app/page.tsx` → `webSiteJsonLd` (name, url, publisher, potentialAction SearchAction).  
- **FAQPage**:  
  - Homepage: `src/app/page.tsx` → `faqJsonLd`  
  - Certification pages: `src/components/CertPageSeo.tsx` → `getCertFaqJsonLd()`  
- **BreadcrumbList**: Certification pages → `getCertBreadcrumbJsonLd()` in `CertPageSeo.tsx`; homepage/other pages use `getBreadcrumbListJsonLd` from `src/lib/schema-data.ts`.  
- **Course**: Certification pages → `CertPageSeo.tsx` → `courseJsonLd` (name, description, provider, hasCourseInstance).  
- **WebPage**: Certification pages → `getCertWebPageJsonLd()`; other pages use `getWebPageJsonLd()` from `src/lib/schema-data.ts`.  

**Output**: `<script type="application/ld+json">` blocks in the page.  
**Verify**: View source and search for `application/ld+json`.

---

## ✅ Canonical tag

- **Status**: Implemented  
- **Where**:  
  - **Root base URL**: `src/app/layout.tsx` → `metadata.metadataBase` (used for resolving relative URLs).  
  - **Homepage**: `src/app/page.tsx` → `metadata.alternates.canonical` = `siteUrl`.  
  - **Certification pages**: `src/lib/cert-seo-data.ts` → `getCertMetadata()` → `alternates.canonical` = `${baseUrl}/certifications/${slug}`.  
  - **Certifications index**: `src/app/certifications/page.tsx` → `alternates.canonical`.  
  - **Role pages**: `src/app/certifications/role/[slug]/page.tsx` → `alternates.canonical`.  
- **Output**: `<link rel="canonical" href="...">`  
- **Verify**: View source and search for `rel="canonical"`.

---

## ✅ robots.txt

- **Status**: Implemented  
- **Where**: `src/app/robots.ts`  
- **Content**: Allow `/`, disallow `/api/`, sitemap `${baseUrl}/sitemap.xml`.  
- **URL**: `https://www.trailblazeprep.com/robots.txt` (or your canonical domain).  
- **Verify**: Open the URL in a browser.

---

## ✅ Sitemap (XML)

- **Status**: Implemented  
- **Where**: `src/app/sitemap.ts`  
- **Content**: Home, /certifications, /certification-path, /become-cta, /about, /contact, /terms, /privacy, all role URLs, all certification URLs (from `CERTIFICATION_CATEGORIES`).  
- **URL**: `https://www.trailblazeprep.com/sitemap.xml`  
- **Verify**: Open the URL in a browser.

---

## ✅ Alt text / accessibility

- **Status**: Implemented where applicable  
- **Where**:  
  - **OG image**: `metadata.openGraph.images[].alt` in layout and cert-seo-data.  
  - **Icons**: `CertificationCard.tsx` and `Header.tsx` use `aria-label` on icons/links (e.g. “Certification badge icon”, “Trailblaze Prep Home”, “Toggle menu”).  
- **Note**: Logo in the header is an icon component, not an `<img>`; the link has `aria-label="Trailblaze Prep Home"`.  
- **Verify**: Inspect logo and key UI elements for `aria-label` or `alt`.

---

## ✅ Title tag

- **Status**: Implemented  
- **Where**:  
  - **Root**: `src/app/layout.tsx` → `metadata.title` (default + template `%s | Trailblaze Prep`).  
  - **Certification pages**: `getCertMetadata()` → `title` (absolute, under 60 chars).  
  - **Other pages**: Per-page `metadata.title` (absolute where needed to avoid duplicate “| Trailblaze Prep”).  
- **Output**: `<title>...</title>`  
- **Verify**: View source or browser tab title.

---

## Recommended next steps (operational)

1. **Confirm canonical domain**: Set `NEXT_PUBLIC_SITE_URL` in Vercel to your preferred canonical URL (e.g. `https://www.trailblazeprep.com` or `https://trailblazeprep.com`) and ensure redirects match.  
2. **Submit sitemap**: In Google Search Console and Bing Webmaster Tools, submit `https://www.trailblazeprep.com/sitemap.xml` (or your canonical domain).  
3. **Lighthouse/PageSpeed**: Run Lighthouse in Chrome DevTools (or PageSpeed Insights) for performance and SEO scores.  
4. **Social previews**: Use Facebook Sharing Debugger and Twitter Card Validator with your live URLs to confirm OG/Twitter tags.

---

*Last updated: January 2025*

# Next.js 14 App Router – `metadata.description` Not Rendering `<meta name="description">` in `<head>`

## Problem Summary

I'm using **Next.js App Router (14.x)** and trying to output a **custom meta description** for a specific page:

- ✅ Using App Router (not Pages Router)
- ✅ Not using `next/head` (which is Pages Router)
- ✅ Using the **Metadata API** (`export const metadata`)
- ✅ `<title>` tag is rendering correctly and matches my code
- ❌ `<meta name="description">` **does NOT appear in page source** - Google keeps auto-generating snippets

I need help understanding **why `metadata.description` is not resulting in a `<meta name="description">` tag in the `<head>`**, and what I might be missing.

---

## Environment

- **Next.js**: 14.2.x (App Router)
- **React**: 18.3.x
- **Deployment**: Vercel (GitHub repo: `bobbyk468/Salesforce`, branch: `Winter'26`)
- **Site**: Salesforce certification prep site (`trailblazeprep.com`)
- **Problem page**: `/certifications/administrator` (Salesforce Platform Administrator / ADM-201 exam guide page)

---

## Root Layout (`src/app/layout.tsx`)

I'm using the App Router with a normal root layout that exports `metadata`:

```typescript
// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactSidebar from '@/components/ContactSidebar'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { SITE_NAME, SOCIAL_LINKS } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'] })
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

export const viewport: Viewport = {
  themeColor: '#0176D3',
}

const defaultTitle = `Salesforce Certification Practice Questions & Study Guides | ${SITE_NAME}`
const defaultDescription =
  'Prepare for Salesforce certifications with practice questions, exam weightage, and study guides. Browse by role—Admin, Developer, Consultant, Architect. Start free.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  keywords:
    'Salesforce certification, Salesforce practice questions, Salesforce exam weightage, ADM-201, Platform Administrator, Sales Cloud, Service Cloud, Marketing Cloud, Salesforce study guide',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: SITE_NAME,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Trailblaze Prep - Salesforce certification practice questions and study guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'AYiD5uBX-IrXU2ct31djzowDhOENDWAtm8NBBn0P01o',
  },
  other: {
    'article:published_time': '2025-01-01T00:00:00Z',
    'article:modified_time': '2025-01-30T00:00:00Z',
    'msvalidate.01': 'C988188920AE8258DD5A37CE98DE4B96', // Bing Webmaster Tools
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Trailblaze Prep',
    url: siteUrl,
    description:
      'Independent Salesforce certification preparation resource: practice questions, section-wise exam weightage, and study guides for Admin, Developer, Consultant, Architect, and more.',
    logo: `${siteUrl}/logo.png`,
    sameAs: SOCIAL_LINKS.filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'km.krishnamohan25@gmail.com',
    },
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow flex">
            <div className="flex-1 min-w-0">{children}</div>
            <div className="hidden lg:block border-l border-gray-100 bg-gradient-to-b from-gray-50/80 to-white min-h-[60vh]">
              <div className="p-6 pl-4 sticky top-24">
                <ContactSidebar />
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
```

**Important**: No manual `<head>` tag here - I'm letting Next.js manage the `<head>` entirely via the Metadata API.

---

## Administrator Page (`src/app/certifications/administrator/page.tsx`)

This is the **problem page**. I've simplified the metadata to a **static export** (no `generateMetadata`), following Next.js docs:

```typescript
// src/app/certifications/administrator/page.tsx
import CertificationCard from '@/components/CertificationCard'
import QuestionCard from '@/components/QuestionCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamFeesSection from '@/components/ExamFeesSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import {
  getCertMetadata,
  getCertH1Text,
  getCertExamWeightageHeading,
  getCertPracticeQuestionsHeading,
  slugToDisplayName,
} from '@/lib/cert-seo-data'
import { getExamWeightage } from '@/lib/exam-weightage-data'
import type { Metadata } from 'next'

const slug = 'administrator'

// NOTE: using STATIC metadata export (no generateMetadata)
const baseMetadata = getCertMetadata(slug)

export const metadata: Metadata = {
  ...baseMetadata,
  description:
    'Salesforce Platform Administrator (ADM-201) exam guide 2026. $200 exam fee, 60 questions, 65% passing score, free practice questions and study plan.',
  openGraph: {
    ...baseMetadata.openGraph,
    description:
      'Salesforce Platform Administrator (ADM-201) exam guide 2026. $200 exam fee, 60 questions, 65% passing score, free practice questions and study plan.',
  },
  twitter: {
    ...baseMetadata.twitter,
    description:
      'Salesforce Platform Administrator (ADM-201) exam guide 2026. $200 exam fee, 60 questions, 65% passing score, free practice questions and study plan.',
  },
}

// ... normal React component for the page ...
```

And `getCertMetadata` in `src/lib/cert-seo-data.ts` also sets `description` internally:

```typescript
export function getCertMetadata(slug: string): Metadata {
  const titleForMeta = getCertMetaTitle(slug)
  const descForMeta = getCertMetaDescription(slug)
  const canonicalUrl = `${baseUrl}/certifications/${slug}`

  return {
    title: { absolute: titleForMeta },
    description: descForMeta,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: titleForMeta,
      description: descForMeta,
      type: 'article',
      url: canonicalUrl,
      publishedTime: '2025-01-01T00:00:00Z',
      modifiedTime: '2026-01-01T00:00:00Z',
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${primaryName} - Practice Questions & Study Guide`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titleForMeta,
      description: descForMeta,
      images: [`${baseUrl}/og-image.png`],
    },
    // ... other fields
  }
}
```

So for this page, the canonical description value is:

```
"Salesforce Platform Administrator (ADM-201) exam guide 2026. $200 exam fee, 60 questions, 65% passing score, free practice questions and study plan."
```

---

## What Actually Renders (Live Page Source)

On the **live deployed page** (`/certifications/administrator`):

In **page source (Ctrl+U / Cmd+U)** I see:

```html
<title>Salesforce Platform Administrator (ADM-201) Exam Guide 2026 | $200 | Trailblaze Prep</title>
<!-- canonical is correct and self-referencing -->
<link rel="canonical" href="https://www.trailblazeprep.com/certifications/administrator">
<!-- robots, viewport, charset, etc. are present -->
```

But **there is NO**:

```html
<meta name="description" ...>
```

anywhere in the `<head>`.

**Key observations:**

- ✅ The `<title>` exactly matches `titleForMeta` - so the metadata API is clearly working for titles
- ✅ Canonical is correct
- ❌ **Only the `<meta name="description">` is missing**, even though `metadata.description` is set both from `getCertMetadata` and overridden explicitly in the page's `metadata` export
- ✅ No `next/head` usage anywhere in App Router
- ✅ No custom `_document.tsx` (using App Router only)

---

## What I've Already Tried (In Code)

1. **Static `metadata` vs `generateMetadata`**
   - Tried `export const metadata = getCertMetadata(slug)` → description missing
   - Tried `export async function generateMetadata(): Promise<Metadata>` that returns explicit `description` → still missing
   - Now using **static `metadata: Metadata` export** with explicit `description` (no `generateMetadata` in the file)

2. **Removing manual `<head>`**
   - Initially had a `<head>` in `layout.tsx` (for preconnect links)
   - Removed manual `<head>` and let Next.js manage head entirely
   - Verified no `head.tsx` (App Router) or `next/head`

3. **Explicit overrides**
   - Explicitly set `description` on:
     - `metadata.description`
     - `metadata.openGraph.description`
     - `metadata.twitter.description`
   - Confirmed no runtime errors or TypeScript issues

4. **Deployment & Cache**
   - Multiple full rebuilds on Vercel
   - Cleared cache / hard refresh / waited >15 minutes between deploy and test
   - Live `<title>` updates correctly after each change (so new deploys are definitely active)

---

## What I'm Asking You to Help With

Given all of the above:

1. **Why would `metadata.description` (set either via static `metadata` or `generateMetadata`) not result in a `<meta name="description">` tag in the `<head>` on a Next.js 14 App Router page, while `<title>` and `canonical` from the same metadata object work correctly?**

2. **Is there any known caveat or bug** in Next.js 14.2 / App Router where:
   - certain metadata combinations
   - or specific OpenGraph / Twitter fields  
   can cause the `<meta name="description">` tag to be omitted?

3. **Is there any configuration in `layout.tsx` or elsewhere (e.g., `metadataBase`, default `description` in root layout) that would prevent route-level `metadata.description` from being emitted?**
   - In my case, root layout sets a default `description`, and the page sets its own `description`.

4. Can you provide a **minimal working example** (App Router, Next 14) that:
   - Uses `export const metadata: Metadata = { ... }` on a nested route
   - Renders a custom `<meta name="description">` in `<head>` visible in page source
   - Similar to my env, so I can compare and spot differences

5. If my current approach is conceptually correct, **what would you change in my code** (specifically in `layout.tsx` and `administrator/page.tsx`) to guarantee the `<meta name="description">` tag appears?

---

## Additional Context

- **GitHub Repo**: `bobbyk468/Salesforce` (branch: `Winter'26`)
- **Live Page**: `https://www.trailblazeprep.com/certifications/administrator`
- **Build Platform**: Vercel (auto-deploy from GitHub)

If you need, I can also share the **exact HTML `<head>`** of the live page and/or a link to the GitHub repo. At this point, I'm mainly trying to understand if I'm missing a subtle requirement of the Metadata API, or if I've hit a framework limitation/bug.

---

## What I'm Willing to Change

You can assume I'm comfortable changing the layout structure or metadata shape as long as we keep:

- ✅ App Router (not Pages Router)
- ✅ Dynamic title from `getCertMetaTitle`
- ✅ Custom description string as above
- ✅ No client-side hacks (needs to be SSR so Google can see it)

What are we missing, and how would you correct it?

---

**You can answer in terms of code edits** to `layout.tsx` and `src/app/certifications/administrator/page.tsx`, plus any gotchas about the Metadata API.

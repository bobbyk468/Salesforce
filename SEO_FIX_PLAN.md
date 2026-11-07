Trailblaze Prep (trailblazeprep.com) — Autonomous Coding Agent SEO Implementation Plan

1. Mission & Context for the Coding Agent

You are working on Trailblaze Prep (https://www.trailblazeprep.com), a Next.js (App Router) + React + Cloudflare web application providing study guides and free practice questions for all 91 Salesforce certifications.

Objective

Execute a comprehensive technical and on-page SEO overhaul so trailblazeprep.com ranks on Page 1–2 of Google Search for every Salesforce certification query (e.g., "Salesforce [Certification Name] practice test", "Salesforce [Certification Name] study guide", "Salesforce [Certification Name] exam questions"), while resolving all valid technical issues identified in our SEOptimer audit and Google Search Console index inspection.

Strict Guardrails (DO NOT VIOLATE)

DO NOT add LocalBusiness JSON-LD schema, physical street addresses, or phone numbers. Trailblaze Prep is a global online education platform. Keep entity schema strictly as Organization / EducationalOrganization.

DO NOT install Facebook Pixel or third-party marketing trackers. They add render-blocking JavaScript and hurt Core Web Vitals.

NEVER hide indexable SEO content behind client-only useState mounts. All 91 certification cards on hub pages and all sample practice questions/answers on certification detail pages MUST be present in the initial Server-Side Rendered (SSR) HTML so Googlebot and AI crawlers can index them without executing JavaScript clicks.

Standardize on https://www.trailblazeprep.com (with https:// and www.) across every canonical tag, robots.txt, sitemap.xml, llms.txt, and JSON-LD @id reference.

2. Phase 1: Fix HTML/JSX Text Concatenation & Navbar Snippets

Problem Diagnosis

Missing Whitespace Around Inline <Link> Tags: Google's live index shows concatenated words like "OurSalesforce Administratorexam" and "See ourcertification pathto understand" on pages such as /certifications/business-analyst because JSX <Link> elements lack leading/trailing spaces.

Duplicated & Concatenated Navbar Text in SERP Snippets: Google snippets start with "Skip to main content. All CertificationsCert PathBecome a CTAContact Us. All CertificationsCert PathBecome a CTAContact Us." because desktop and mobile navigation links render adjacent <a> tags without textual delimiters or proper semantic structure, and both menus are output in the initial DOM.

Agent Action Steps

Audit & Fix Inline Link Whitespace Across All .tsx / .jsx Files:

Run a search across src/ or app/ and components/ for inline <Link and <a tags inside prose paragraphs.

Ensure explicit whitespace ({" "} or a literal space on the same line) exists before and after every inline <Link> or <a> tag when preceded or followed by text characters.

Bad JSX:

<p>
  Our<Link href="/certifications/administrator">Salesforce Administrator</Link>exam prep is the recommended first step. See our<Link href="/certification-path">certification path</Link>to understand...
</p>


Good JSX:

<p>
  Our{" "}
  <Link href="/certifications/administrator">Salesforce Administrator</Link>{" "}
  exam prep is the recommended first step. See our{" "}
  <Link href="/certification-path">certification path</Link>{" "}
  to understand...
</p>


Fix Header / Navbar DOM Structure:

Wrap navigation items inside a semantic <nav aria-label="Main Navigation"><ul><li>...</li></ul></nav> structure so screen readers and search engine crawlers treat each link as a distinct list item rather than a concatenated string (All CertificationsCert Path...).

Do not duplicate the entire <nav> link list twice in the SSR DOM for desktop and mobile. Either:

Use a single semantic <ul> styled responsively via Tailwind CSS classes for both desktop and mobile viewports, OR

Conditionally mount the mobile drawer links on client toggle (isOpen && <MobileMenu />) so crawlers only parse the navigation links once.

Ensure the main page content is wrapped in <main id="main-content"> so Google prioritizes <main> body copy over <header> navigation links when generating SERP snippets.

3. Phase 2: Fix Heading Hierarchy (H1 -> H2 -> H3), Keyword Consistency & Thin Hub Content

Problem Diagnosis

Flat Heading Structure: The homepage / currently outputs 95 <h2> tags and zero <h3>–<h6> tags because every certification card title is an <h2>.

Keyword Inconsistency: Target keywords (practice questions, study guide, certifications, pass mark, exam fee) are split across <title>, <meta name="description">, and <h1> rather than aligned across all three.

Thin Content & Boilerplate Dilution (507 Words): Repeated card field labels (Pass mark, Time 70 min, Prerequisites None required) dominate the keyword frequency table while total prose word count is only 507 words.

Agent Action Steps

Align <title>, <meta name="description">, and <h1> on / (and /certifications):

<title> (50–60 chars):
Salesforce Certifications List: Free Practice Tests & Guides

<meta name="description"> (135–158 chars):
Complete 2026 list of all 91 Salesforce certifications with free practice questions, study guides, pass marks, exam fees, and prerequisites.

<h1>:
Complete List of Salesforce Certifications: Free Practice Questions & Study Guides

Enforce Strict H1 -> H2 -> H3 Hierarchy on the Hub Page:

<h1> (Count: 1): Main page title.

<h2> (Count: ~12–15): Use <h2> exclusively for major Role Category sections and primary page sections:

<h2>Salesforce Associate & Entry-Level Certifications</h2>

<h2>Salesforce Administrator Certifications</h2>

<h2>Salesforce Developer Certifications</h2>

<h2>Salesforce Consultant Certifications</h2>

<h2>Salesforce Architect Certifications</h2>

<h2>Salesforce Marketing, Sales & Designer Certifications</h2>

<h2>Tableau, MuleSoft, Slack & Accredited Professional Certifications</h2>

<h2>How to Prepare for Your Salesforce Certification Exam: Study Guide & Tips</h2>

<h2>Frequently Asked Questions About Salesforce Certifications</h2>

<h3> (Count: ~95–105):

Change all 91 individual certification card titles from <h2> to <h3> (e.g., <h3>Salesforce Platform Foundations</h3>).

Change all individual FAQ question headings inside the FAQ section to <h3>.

Render All 91 Certifications in SSR HTML & Add Editorial Depth:

Ensure all 91 certification cards are rendered in the initial server HTML grouped under their respective Role <h2> sections.

If the UI includes category filter pills (Associate, Administrator, Developer, etc.), implement the filter by toggling CSS classes (hidden / block) or scrolling to the category section rather than removing non-active category cards from the SSR HTML tree.

Inside each certification card, include a concise 1 sentence exam description (15–25 words) describing who the exam is for, and add a dedicated 400–600 word "Salesforce Certification Preparation Guide & Exam Overview" editorial section above the FAQ section. This brings indexable prose on / from 507 words to 1,500+ words and ensures target keywords (practice questions, study guide, Salesforce certification) outweigh UI labels.

4. Phase 3: Stop Outbound PageRank Leak (84 Dofollow Links) & Build Internal Link Silos

Problem Diagnosis

84 Dofollow Outbound Links on Hub Page: Every certification card on / links to the external official Salesforce page (Official page) as a dofollow link (External Links: Follow = 84, External Links: Nofollow = 0), bleeding PageRank out of the site.

Weak Deep-Page Authority: Almost all external backlinks point to /, leaving individual /certifications/[slug] pages with low Page Strength.

Agent Action Steps

Remove External Issuer Links from Summary Cards & Add rel="nofollow" Sitewide:

On the hub page (/) certification cards, remove the outbound "Official page" link so 100% of card clicks flow into your internal /certifications/[slug] pages.

On individual /certifications/[slug] detail pages (and anywhere else on the site that links to salesforce.com, trailhead.salesforce.com, or third-party domains), add rel="nofollow noopener noreferrer" target="_blank" to every external <a> tag.

Optimize Internal Card Anchor Text:

Instead of generic identical anchors (Practice questions and Study guide repeated 91 times), include visually clean or screen-reader contextualized anchor text on each card:

<Link
  href={`/certifications/${cert.slug}`}
  className="..."
>
  {cert.name} Practice Questions & Study Guide
</Link>


Add a <RelatedCertifications /> Internal Linking Silo Component on /certifications/[slug]:

On every /certifications/[slug]/page.tsx, render an SSR internal linking module at the bottom of the study guide containing:

Prerequisite Certifications: Direct <Link> to prerequisite exam pages (if applicable).

Same-Track Certifications: 4–6 sibling certifications in the same role category (e.g., all Architect or all Consultant exams).

Next Recommended Step: Link to the logical next certification plus contextual links to /certification-path and /salesforce-certification-validity.

5. Phase 4: Upgrade /certifications/[slug] Template to Rank Page 1–2 for All 91 Exams

Goal

Make every /certifications/[slug] page the most comprehensive, fast-loading, and structured resource on the web for its specific exam.

Agent Action Steps

Dynamic Metadata Formula (generateMetadata in app/certifications/[slug]/page.tsx):

title:
${cert.name} Practice Test & Study Guide (2026) | Trailblaze Prep
(If over 60 chars, fallback to: ${cert.name} Practice Questions & Study Guide (2026))

description:
Free Salesforce ${cert.name} practice questions and 2026 study guide. Pass mark: ${cert.passMark}, ${cert.questions} questions, ${cert.time} min, $${cert.fee} fee, and exam weightage.

alternates.canonical:
https://www.trailblazeprep.com/certifications/${cert.slug}

Semantic Quick-Facts HTML <table> (Featured Snippet Target):

Above the fold under the <h1>, include a clean semantic <table> summarizing:

Official Exam Name & Code

Number of Questions (40 / 60 + unscored questions note)

Time Allotted (70 min / 105 min)

Passing Score (62% / 65% / 68%)

Exam Fee ($75 / $200 / $400) & Retake Fee

Prerequisite Certifications

Recommended Experience & Latest Release Version (Winter '26 / Spring '26 / Summer '26)

SSR-Rendered Sample Practice Questions Using Native <details> / <summary>:

Ensure all sample practice questions (10–15 realistic scenario questions per certification) are rendered in the initial SSR HTML under <h2>Free ${cert.name} Practice Questions & Answers</h2>.

Use <h3>Question 1: [Topic Area]</h3> for each question stem, render the multiple-choice options in a semantic <ol type="A">, and place the correct answer and detailed explanation inside a native <details><summary>Show Correct Answer & Explanation</summary>...</details> block (or an interactive component that keeps the explanation text mounted in the SSR DOM).

Why: Googlebot indexes text inside <details> natively without requiring client-side JS state mutations, allowing every certification page to rank for long-tail question searches while preserving a quiz-like UX for students.

Exam Outline & Section-by-Section Study Guide (<h2> + <h3>):

Under <h2>${cert.name} Exam Outline & Topic Weightage</h2>, render every official exam section as an <h3> (e.g., <h3>1. Collaboration with Stakeholders (23%)</h3>) followed by bulleted technical study notes covering key Salesforce objects, automation tools, security/sharing rules, and common exam traps.

E-E-A-T Authority Block & Rich JSON-LD Schema (Course, FAQPage, BreadcrumbList):

Add a visible "Reviewed by Certified Salesforce Professionals" trust badge/byline component on both the homepage and certification pages listing the editorial team's verified Salesforce certifications (Salesforce Certified Administrator, Platform Developer II, Application Architect, etc.) and last-reviewed date (November 2026).

Inject structured data via <script type="application/ld+json"> on every /certifications/[slug] page containing:

BreadcrumbList (Home -> Certifications -> [Role Category] -> [Cert Name])

Course / LearningResource with educationalCredentialAwarded, provider (Organization -> Trailblaze Prep), and hasCourseInstance

FAQPage matching the certification's specific FAQs (Pass mark, cost, retake policy, difficulty, prerequisite).

6. Phase 5: Performance, JS Bundle Size (1.08 MB -> <250 KB), Redirects & Email Privacy

Problem Diagnosis

1.504s Server Response Time (TTFB) & Multi-Hop Redirect Delay (1.05s Mobile Penalty): Requests to trailblazeprep.com redirect across multiple hops (http:// -> https:// -> https://www.).

1.08 MB Uncompressed JS Payload & Render-Blocking CSS: Large static certification/question datasets are being pulled into "use client" bundles.

Plain-Text Email Privacy Warning: SEOptimer detected raw plain-text email addresses in the static HTML.

Agent Action Steps

Keep Certification & Question Datasets Strictly Server-Side:

Audit every file with "use client" at the top.

Never import the full 91-certification data array or full practice question banks inside a "use client" file. Import data inside Server Components (page.tsx) and pass only minimal serializable props down to small interactive islands (like a filter bar, search input, or contact form).

Standardize Canonical Domain (https://www.trailblazeprep.com) in Code & Config:

Update robots.txt (or app/robots.ts), sitemap.xml (or app/sitemap.ts), and public/llms.txt so every URL uses https://www.trailblazeprep.com (never http://trailblazeprep.com or non-www https://trailblazeprep.com).

Check next.config.mjs / middleware.ts to ensure Next.js is not creating an extra redirect hop that conflicts with Cloudflare's edge redirect.

Eliminate Render-Blocking Resources & Optimize Caching:

Ensure GoogleFonts use next/font/google with display: 'swap'.

Load Google Analytics using @next/third-parties/google or <Script strategy="afterInteractive"> so analytics scripts never block initial paint.

Add or update public/_headers (for Cloudflare Pages/Workers) to cache static assets and edge responses efficiently:

/_next/static/*
  Cache-Control: public, max-age=31536000, immutable


Replace Plain-Text Emails with a Client-Decoded <ProtectedEmail /> Component:

Search the entire codebase for @trailblazeprep.com or mailto: (grep -rn "mailto:" src/ app/ components/).

Replace every plain-text email in the HTML/JSX with a lightweight client component that reconstructs the email address inside useEffect after hydration (or routes users to the Contact form), ensuring zero plain-text email addresses appear in the raw SSR HTML source scanned by scrapers and SEOptimer.

Example <ProtectedEmail /> implementation:

"use client";
import { useEffect, useState } from "react";

interface ProtectedEmailProps {
  user: string;
  domain: string;
  className?: string;
}

export function ProtectedEmail({ user, domain, className }: ProtectedEmailProps) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(`${user}@${domain}`);
  }, [user, domain]);

  if (!email) {
    return <span className={className}>[Contact via Form]</span>;
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
}


7. Phase 6: Verification Checklist (Run Before Completing Task)

After implementing Phases 1–5, run the following verification checks and report the results:

Build Verification:

Run npm run build and ensure all static/SSR routes compile with zero TypeScript or ESLint errors.

Heading Hierarchy Check on Built Homepage HTML:

Inspect the rendered HTML of /:

Verify exactly 1 <h1> tag exists.

Verify <h2> count is between 8 and 16 (role categories and main sections only, down from 95).

Verify <h3> count is 91+ (all individual certification card titles and FAQ items).

External Link nofollow Check:

Verify that 0 external links (href="http..." pointing outside trailblazeprep.com) exist without rel="nofollow noopener noreferrer".

Inline <Link> Spacing Check:

Confirm no instances of [a-zA-Z]<Link or </Link>[a-zA-Z] exist in any .tsx file without an intervening space.

Plain-Text Email Check:

Run grep -rn "@trailblazeprep.com" against the generated .next/server/app HTML output to confirm zero plain-text email strings appear in the raw server HTML.
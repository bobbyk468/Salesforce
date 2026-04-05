# Performance Action Plan (Field Data First)

This document intentionally **does not use PSI/Lighthouse scores** as a success metric. Lighthouse is useful for debugging, but it is **lab data** and can swing significantly run-to-run. For SEO and real UX, optimize against **Core Web Vitals (field data)** and production traces.

## Executive summary

- **Strengths**: The site is already architected for speed (Next.js App Router, heavy SSG, minimal UI chrome). Most pages can be “fast enough” if we protect the critical rendering path and keep client JS lean.
- **Primary performance risk**: A small set of pages regress on **mobile** when they accumulate heavier DOM/content and/or trigger more main-thread work. This shows up in user experience as slow “first readable content” and delayed interactivity.
- **High ROI fixes**: Keep the critical path pure (no non-essential JS before content), reduce mobile paint work, and avoid shipping large client components unless the user needs them.

## What we measure instead of PSI

### Primary (SEO/UX) metrics
- **LCP (Largest Contentful Paint)**: Target \(p75\) **≤ 2.5s**
- **INP (Interaction to Next Paint)**: Target \(p75\) **≤ 200ms**
- **CLS (Cumulative Layout Shift)**: Target \(p75\) **≤ 0.1**

### Where to read them
- **Google Search Console → Core Web Vitals** (real users)
- **CrUX / Chrome UX Report** (real users; URL-grouped)
- Optional: **Vercel Analytics / Speed Insights** (if enabled) for deployment-to-deployment regression tracking

## Current architecture levers (code-level)

These are the knobs that materially affect field performance.

### 1) Keep non-critical JS off the critical path

- **GA loading strategy**: `src/components/GoogleAnalytics.tsx` is the primary hook for third-party JS.
  - Keep analytics **interaction-gated** (after first user interaction) with a conservative idle fallback.
  - Treat analytics as “nice-to-have”; content must render before it.

### 2) Keep mobile paint work cheap

- **Global background effects**: `src/app/globals.css`
  - Avoid heavy fixed backgrounds and large overlays on small devices.
  - Prefer simple backgrounds on mobile, and move decorative layers to ≥768px.

### 3) Defer client-only UI that is not needed for first render

- **Deferred components already present**: `src/app/layout.tsx`
  - `StickyContentCta`, desktop sidebar slot, and GA are dynamically imported with `ssr: false`.
  - Maintain this pattern for any future interactive widgets (calculators, search, etc.).

### 4) Keep security headers from blocking performance

- CSP and headers are set in `next.config.js`. Ensure any tightening does not inadvertently block required asset domains or force extra redirects.

## Prioritized backlog (P0 / P1 / P2)

### P0 — Protect Core Web Vitals (regression prevention)

- **Client JS budget policy**
  - No new client components in global layout unless strictly necessary.
  - Any third-party script must be interaction-gated or loaded on idle.
- **CLS guardrails**
  - Any dynamically mounted widget must reserve space (skeleton with fixed min-height).
- **A11y guardrails**
  - Avoid link colors that can fail contrast on tinted backgrounds; prefer `text-salesforce-dark` for small text.

### P0 — Global performance wins (applies everywhere)

- **Reduce critical CSS weight**
  - Keep `globals.css` minimal. Avoid wide-scope component-layer utilities that are rarely used.
  - Prefer utility classes in JSX for one-off styling over global CSS that ships to every page.
- **Reduce main-thread work**
  - Avoid client-side computation for large datasets on page load (precompute at build time where possible).
  - Ensure any “heatmap”/data visualization is SSR-friendly or delayed until idle.

### P1 — Template-level improvements (common page types)

- **Long-form pages (study guides, exam tips)**
  - Consider `content-visibility: auto` for large below-the-fold sections (careful: test for layout/SEO).
  - Break huge lists/tables into collapsible `<details>` blocks when UX allows.
  - Treat interactive practice questions as optional “engagement” content; load them **after the user asks** (or at least after idle) to protect **INP** on low-end devices.
- **Certification hub pages (`/certifications/[slug]`)**
  - Ensure critical content is text-first, images are optimized, and no client-only components block first content.

### P2 — Deeper work (requires more engineering)

- **CSS strategy**
  - Evaluate moving rarely-used styles out of global CSS into route-level CSS modules (only loaded where needed).
- **Bundle strategy**
  - Audit and prune dependencies that expand shared chunks.
  - Consider splitting the heaviest client widgets behind explicit interaction.

## Measurement protocol (manual + field-first)

### 1) Field data first
- Use **Search Console CWV** weekly.
- Track p75 for **LCP/INP/CLS** per template group (cert hubs vs study guides vs exam tips).

### 2) Manual spot checks (debugging only)
- Use Chrome DevTools Performance panel (mobile throttling) to identify:
  - Long tasks (main thread)
  - Layout shifts (CLS sources)
  - Largest element candidate (LCP)
- Use a “median-of-5” approach if you must compare lab runs.

## Definition of Done (for performance)

- No template group has **CWV “Poor”** URLs in Search Console.
- p75 meets targets:
  - **LCP ≤ 2.5s**
  - **INP ≤ 200ms**
  - **CLS ≤ 0.1**
- No regressions in A11y/BP/SEO from existing guardrails.

## Deep-dive: likely hot spots (shared patterns)

These are recurring patterns that can hurt **field performance** on “heavier” pages, even if most pages remain fast.

### 1) Practice questions UI (client-only)

- **Where**: `src/components/PracticeQuestionsSection.tsx` and `src/components/QuestionCard.tsx`
- **Why it can hurt**:
  - Ships interactive UI JS (`'use client'`) and creates more work during/after hydration.
  - On slower phones, this can degrade **INP** and create long tasks if loaded too early.
- **Mitigation pattern**:
  - Keep the section deferred (already SSR-disabled on many pages), and prefer an explicit “Load practice questions” button or delayed import after idle.

### 2) Long-form content rendering

- **Where**: study-guide and exam-tips templates (large DOM)
- **Why it can hurt**:
  - Large DOM increases style/layout cost and can amplify small layout shifts.
- **Mitigation pattern**:
  - Split large below-the-fold blocks into `<details>` or apply `content-visibility: auto` to truly-below-fold sections (verify with DevTools and Search Console CWV).

### 3) Background/visual effects on mobile

- **Where**: `src/app/globals.css`
- **Why it can hurt**:
  - Decorative fixed layers can increase paint work and reduce responsiveness.
- **Mitigation pattern**:
  - Keep mobile backgrounds simple; move decorative effects to larger viewports (already implemented).


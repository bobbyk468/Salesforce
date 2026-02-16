# Performance: Mobile vs Desktop

This doc ensures **desktop optimizations never regress mobile** and provides a validation checklist.

## Baseline scores (do not merge if either drops)

| Form factor | Performance | LCP   | CLS   | TBT   |
|-------------|-------------|-------|-------|-------|
| **Mobile**  | ≥ 96        | < 2.5s| 0     | ≤ 50ms|
| **Desktop** | ≥ 97        | < 0.5s| < 0.01| ≤ 60ms|

**Current achieved (Feb 2026):** Mobile and Desktop often hit 99–100, but single runs can show 96–100 (mobile) or 76–100 (desktop) with no code change. Use the **standardization** steps below before treating a drop as a regression.

---

## Score variance and how to standardize

Lighthouse scores **vary run-to-run** due to network jitter, TTFB, third-party (GTM) timing, and emulation. A single run of 96 mobile or 76 desktop does **not** mean the site regressed.

**Standardization (before concluding regression):**

1. **Run at least 3 times** – Same URL, same form factor (Mobile then Desktop). Note the **median** (or middle) score. Use that as the “result” for that form factor.
2. **Same test conditions** – Use PageSpeed Insights (or DevTools Lighthouse) with the same settings: e.g. “Slow 4G” for mobile, “Desktop” for desktop. Avoid mixing different tools or throttling profiles.
3. **Baseline = range, not a single number** – We consider **Mobile ≥ 96** and **Desktop ≥ 97** as meeting the bar. If **multiple** runs (e.g. 3/3) show below that, then investigate. If one run is 76 and the next is 100, that’s variance, not a code bug.
4. **Optional: CI or nightly runs** – Run Lighthouse in CI (e.g. on merge to main) or nightly with a **threshold** (e.g. fail only if median of 3 runs is below 95 mobile or 95 desktop). That gives a stable baseline over time.

**Why scores jump:** Network latency, cache state, GTM load order, and Chrome’s emulation can shift Performance by 5–25 points between runs. Standardizing on “median of 3 runs” and a range (≥96 / ≥97) reduces false alarms.

### Recent optimizations (Feb 2026)

- **Table DOM:** Syllabus checklist table on administrator page flattened: removed inner `<span>` in “Key subtopics” cells; `font-medium text-gray-700` applied on `<td>` to reduce DOM depth (Lighthouse “Optimize DOM size”).
- **Forced reflow:** Layout reads (e.g. `getBoundingClientRect`, `offsetTop`, `scrollIntoView`) deferred from same-frame writes: `CertSearch` scrollIntoView in `requestAnimationFrame`; `StickyMobileCta` and `CertTableOfContents` defer `setState` / `scrollTo` to next frame to avoid read-then-write thrashing (Desktop “Forced reflow” ~34 ms). TOC scroll handler throttled with rAF and passive listener.

### Remaining known issues (accepted / low priority)

- **Legacy JavaScript (~12 KiB):** Polyfills (Array.flat, Object.hasOwn, String.trimStart, etc.) live in Next.js/runtime chunks (2117, main, polyfills). `tsconfig` has `target: "ES2022"` and `.browserslistrc` has `not dead` and `not ie 11`; Next.js may still inject these for its runtime. Full removal would require experimental or custom webpack config.
- **Render blocking (mobile):** Main CSS (~10.9 KiB); est. savings 450 ms in some runs. Critical CSS inlined for header, content wrapper (`[data-critical-content]`), and hero (`[data-lcp-hero]`) on mobile; H1 at sm breakpoint included. Further gain would require async CSS (risk of FOUC).
- **Long main-thread tasks:** First-party (chunk 2117) on mobile; GTM + first-party on desktop (GTM deferred). Acceptable at 97+/100.
- **GTM unused JS (~59 KiB):** Third-party; already loaded after window load (mobile: +5s delay). GTM preconnect was removed from layout to clear Lighthouse “Unused preconnect” (GTM loads late).
- **Forced reflow:** Mitigations in place (rAF deferral in CertSearch, StickyMobileCta, CertTableOfContents). Any remaining reflow is unattributed or from Next/third-party; monitor if it grows.
- **Desktop font CLS (~0.003):** Inter swap can shift text; `adjustFontFallback: true` is set; remaining shift is small.

## Rule: Fix one without breaking the other

- **Desktop-only** logic must run only when `min-width: 1024px` (or equivalent). Do not run heavy work or load desktop chunks on mobile.
- **Shared** code (layout, GA, fonts) must be safe for the slower mobile critical path: avoid blocking the main thread before LCP (~2–4s on slow 4G).

---

## Desktop-only components (do not run on mobile)

| Component | Purpose | How it stays desktop-only |
|-----------|---------|---------------------------|
| `DesktopSidebarSlot` | Renders contact sidebar only on lg+ | `matchMedia('(min-width: 1024px)')`; returns `null` on mobile so sidebar chunk never loads |
| `DesktopContactSidebar` | Heavy sidebar; deferred with idle | Only mounted by `DesktopSidebarSlot` when `isDesktop` |
| `DeferredCertSearch` | Search in header (desktop nav) | `isDesktop` gate; CertSearch chunk loads only when lg+ and after requestIdleCallback |
| Critical layout CSS (layout.tsx) | Grid 1fr + 320px for sidebar | `@media (min-width: 1024px)` only |
| Mobile LCP critical CSS (layout.tsx) | Hero + content wrapper + H1 so LCP can paint before main CSS | `@media (max-width: 1023px)`; targets `[data-critical-header]`, `[data-critical-content]`, `[data-lcp-hero]`; H1 at sm (640px) inlined |

**Mobile:** Header search is in `hidden lg:flex`; the mobile menu uses `CertSearch` (dynamic import) only when the menu is open. Sidebar column is `hidden lg:block` and `DesktopSidebarSlot` returns `null` on mobile.

---

## Shared components: mobile-safe behavior

| Component | Risk | Current behavior |
|-----------|------|------------------|
| `GoogleAnalytics` | GTM long tasks can delay LCP on mobile | **Mobile:** load gtag only after `window.load` + 5s delay so tasks run after LCP. **Desktop:** load on `window.load`. Fallbacks: 10s mobile, 6s desktop. |
| `Header` | Desktop nav (DeferredCertSearch) must not run on mobile | DeferredCertSearch lives in `hidden lg:flex`; on mobile it still mounts but returns a placeholder and never loads CertSearch. Minimal cost. |
| Layout grid | CLS on desktop when sidebar appears | Inline critical CSS in `<head>` with `@media (min-width: 1024px)` so mobile is unchanged. |
| Critical CSS (layout.tsx) | Mobile LCP delayed by render-blocking CSS | Hero styles inlined for `[data-lcp-hero]` inside `@media (max-width: 1023px)` only; desktop gets no extra rules. |

---

## Validation checklist (before merge / release)

Run after any change that touches layout, analytics, or desktop-only components.

1. **Build**
   ```bash
   npm run build
   ```
   Must succeed.

2. **Lighthouse – Mobile** (PageSpeed Insights or DevTools)
   - URL: `https://www.trailblazeprep.com/certifications/administrator` (or staging)
   - Form factor: **Mobile**
   - Check: Performance **≥ 96** (median of 3 runs), LCP **< 2.5s**, CLS **= 0**, TBT **≤ 50ms** (see baseline table above).
   - If score drops, re-run 2–3 times and use median before concluding regression; ensure no new main-thread work or blocking before LCP.

3. **Lighthouse – Desktop**
   - Same URL, form factor: **Desktop**
   - Check: Performance **≥ 97** (median of 3 runs), CLS **< 0.01**, TBT **≤ 60ms** (see baseline table above).
   - Re-run 2–3 times and use median; a single low run (e.g. 76) is often variance, not a regression.

4. **Regression check**
   - Did you add code that runs on **both** viewports? If it’s heavy (e.g. analytics, big components), gate it by viewport or defer it so mobile LCP is not blocked.
   - Did you change **GA** loading? Keep mobile delay (load + 5s); desktop can load on load.

---

## Script

- `npm run build` – always run before release.
- Optional: run PageSpeed Insights (or `scripts/page_speed_monitor.py` if configured) for mobile and desktop and compare to previous runs.

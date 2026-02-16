# Performance: Mobile vs Desktop

This doc ensures **desktop optimizations never regress mobile** and provides a validation checklist.

## Baseline scores (do not merge if either drops)

| Form factor | Performance | LCP   | CLS   | TBT   |
|-------------|-------------|-------|-------|-------|
| **Mobile**  | ≥ 97        | < 2.5s| 0     | ≤ 50ms|
| **Desktop** | 100         | < 0.5s| < 0.01| ≤ 60ms|

**Current achieved (Feb 2026):** Mobile 97–99, Desktop 100 (scores vary by run). After any change to layout, analytics, hero, or desktop-only components: run `npm run validate:perf` and PageSpeed Insights for **both** form factors. Do **not** merge if Mobile drops below 97 or Desktop below 100 without an explicit decision.

### Remaining known issues (accepted / low priority)

- **Legacy JavaScript (~12 KiB):** Polyfills in chunk 2117; Next.js/SWC bundle. `.browserslistrc` targets modern browsers; further reduction would require build config or dependency updates.
- **Render blocking (mobile):** Main CSS (~10.9 KiB); est. savings 450 ms in some runs. Critical hero CSS already inlined; further gain would require broader critical CSS or async CSS (risk of FOUC).
- **Long main-thread tasks:** First-party (chunk 2117) on mobile; GTM + first-party on desktop (GTM deferred). Acceptable at 97+/100.
- **GTM unused JS (~59 KiB):** Third-party; already loaded after window load (mobile: +5s delay).

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
| Mobile LCP critical CSS (layout.tsx) | Hero gradient + H1 so LCP can paint before main CSS | `@media (max-width: 1023px)` only; targets `[data-lcp-hero]` on cert page |

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
   - Check: Performance **≥ 97**, LCP **< 2.5s**, CLS **= 0**, TBT **≤ 50ms** (see baseline table above).
   - If score drops, ensure no new main-thread work or blocking before LCP on mobile; mobile-only critical CSS must stay in `@media (max-width: 1023px)`.

3. **Lighthouse – Desktop**
   - Same URL, form factor: **Desktop**
   - Check: Performance **100**, CLS **< 0.01**, TBT **≤ 60ms** (see baseline table above).
   - Desktop can tolerate more deferred work (sidebar, search after idle).

4. **Regression check**
   - Did you add code that runs on **both** viewports? If it’s heavy (e.g. analytics, big components), gate it by viewport or defer it so mobile LCP is not blocked.
   - Did you change **GA** loading? Keep mobile delay (load + 5s); desktop can load on load.

---

## Script

- `npm run build` – always run before release.
- Optional: run PageSpeed Insights (or `scripts/page_speed_monitor.py` if configured) for mobile and desktop and compare to previous runs.

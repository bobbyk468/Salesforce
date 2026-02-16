# Performance: Mobile vs Desktop

This doc ensures **desktop optimizations never regress mobile** and provides a validation checklist.

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

**Mobile:** Header search is in `hidden lg:flex`; the mobile menu uses `CertSearch` (dynamic import) only when the menu is open. Sidebar column is `hidden lg:block` and `DesktopSidebarSlot` returns `null` on mobile.

---

## Shared components: mobile-safe behavior

| Component | Risk | Current behavior |
|-----------|------|------------------|
| `GoogleAnalytics` | GTM long tasks can delay LCP on mobile | **Mobile:** load gtag only after `window.load` + 5s delay so tasks run after LCP. **Desktop:** load on `window.load`. Fallbacks: 10s mobile, 6s desktop. |
| `Header` | Desktop nav (DeferredCertSearch) must not run on mobile | DeferredCertSearch lives in `hidden lg:flex`; on mobile it still mounts but returns a placeholder and never loads CertSearch. Minimal cost. |
| Layout grid | CLS on desktop when sidebar appears | Inline critical CSS in `<head>` with `@media (min-width: 1024px)` so mobile is unchanged. |

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
   - Check: Performance ≥ 90, LCP < 3s if possible, CLS = 0.
   - If score drops, ensure no new main-thread work or blocking before LCP on mobile.

3. **Lighthouse – Desktop**
   - Same URL, form factor: **Desktop**
   - Check: Performance ≥ 95, CLS < 0.05.
   - Desktop can tolerate more deferred work (sidebar, search after idle).

4. **Regression check**
   - Did you add code that runs on **both** viewports? If it’s heavy (e.g. analytics, big components), gate it by viewport or defer it so mobile LCP is not blocked.
   - Did you change **GA** loading? Keep mobile delay (load + 5s); desktop can load on load.

---

## Script

- `npm run build` – always run before release.
- Optional: run PageSpeed Insights (or `scripts/page_speed_monitor.py` if configured) for mobile and desktop and compare to previous runs.

# Mobile and DOM audit: 2026-11-03

## Scope

Reviewed the first two scanner findings for Trailblaze Prep: **DOM Size metric unavailable** and **Mobile Friendliness**. The unavailable DOM metric is not evidence that the page has an excessive DOM, so this change does not remove content or restructure the page to reduce node count.

The mobile issue was reproducible at a 320 CSS-pixel viewport. The homepage hero metrics extended the document to 327–328px; the footer's three external links also used a non-wrapping row. The shared mobile menu button rendered at 40×40px. The certification page also had a measured document width of 327–328px at 320px.

## Changes

- The homepage hero metrics wrap when they cannot fit on one line.
- Footer external links wrap and center on narrow screens.
- The mobile menu button has a 44px minimum width and height.
- No content or internal SEO links were removed. No deployment or commit was performed.

## Browser measurements

| Page and source | 320px | 375px | 390px | 768px | Menu button |
| --- | ---: | ---: | ---: | ---: | ---: |
| Homepage, live before patch | 327–328px document width | 375px | 390px | 768px | 40×40px |
| Administrator page, live before patch | 327–328px document width | 375px | 390px | 768px | 40×40px |
| Homepage, local production build after patch | 320px | 375px | 390px | 768px | 44×44px |
| Administrator page, local production build after patch | 320px | 375px | 390px | 768px | 44×44px |

For the local post-patch run, the menu opened at every width; its panel remained inside the viewport. The parent agent independently checked both pages at 320, 375, 390, 768, and 1280px (10 combinations) with no horizontal overflow. The parent also independently observed HTTP 200 and a correct viewport for desktop, mobile, and Googlebot requests, and measured the homepage DOM at 390px: 532 nodes, depth 13, maximum children 47. Those counts are structural observations, not a scanner DOM-size score or proof of a DOM-size defect.

## Reproduction

From the repository root, build and retain its full log:

```sh
npm run build > /tmp/trailblaze-seo-build-2026-11-03.log 2>&1
```

The checked-in Puppeteer diagnostic runs on the production server at both routes and at 320, 375, 390, and 768px. It disables cache, emulates a mobile viewport with touch, checks document overflow and the 44px menu target, opens the menu, and checks that the panel remains in the viewport.

```sh
npm run start -- --hostname 127.0.0.1 --port 3210
node scripts/audit-mobile-layout.mjs --base=http://127.0.0.1:3210 > /tmp/trailblaze-mobile-audit-2026-11-03.json 2>&1
```

The browser diagnostic exits nonzero if any check fails. It reports the Puppeteer-managed Chromium executable path with its JSON results. Get that path independently with:

```sh
node -e "console.log(require('puppeteer').executablePath())"
```

This run used `/Users/brahmajikatragadda/.cache/puppeteer/chrome/mac_arm-156.0.8078.47/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`.

Build and typecheck evidence: `/tmp/trailblaze-seo-build-2026-11-03.log` (`npm run build`, including Next.js TypeScript checks; exit 0). The parent agent additionally ran `npx tsc --noEmit` and reported exit 0. Browser diagnostic source: [`scripts/audit-mobile-layout.mjs`](../scripts/audit-mobile-layout.mjs). Browser result log: `/tmp/trailblaze-mobile-audit-2026-11-03.json` (8 route/viewport cases; exit 0). Its `chromium` field records Puppeteer's managed browser executable path.

## Limitations and state

The scanner's DOM Size value was unavailable and the scanner artifact could not be retrieved for a source-level DOM-size measurement. This audit therefore makes no claim that DOM size is excessive or that a scanner DOM finding has been cleared. The local build and responsive checks are not deployment evidence; the changes remain local and unpublished.

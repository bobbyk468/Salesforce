// 301s for the standalone study guide and exam tips pages that were merged
// into their /certifications/<slug> hub in November 2026. Each source was
// mapped from the `const slug` the page itself declared, not inferred from
// the URL, because many slugs differ (/pd1-study-guide -> developer-1).
const mergedCertPageRedirects = require('./redirects/merged-cert-pages.json')

const credentialAliasRedirects = [
  ['/certifications/platform-administrator', '/certifications/administrator'],
  ['/certifications/platform-app-builder', '/certifications/app-builder'],
  ['/certifications/platform-developer-1', '/certifications/developer-1'],
  ['/certifications/platform-developer-2', '/certifications/developer-2'],
  ['/certifications/agentforce-sales-consultant', '/certifications/sales-cloud'],
  ['/certifications/sales-cloud-consultant', '/certifications/sales-cloud'],
  ['/certifications/agentforce-service-consultant', '/certifications/service-cloud'],
  ['/certifications/service-cloud-consultant', '/certifications/service-cloud'],
  ['/certifications/field-service-consultant', '/certifications/field-service'],
  ['/certifications/experience-cloud-consultant', '/certifications/experience-cloud'],
  ['/certifications/account-engagement-consultant', '/certifications/pardot-consultant'],
  ['/certifications/account-engagement-specialist', '/certifications/pardot-specialist'],
  ['/certifications/marketing-cloud-engagement-consultant', '/certifications/marketing-cloud-consultant'],
  ['/certifications/nonprofit-cloud-consultant', '/certifications/nonprofit-cloud'],
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  // Prevent /path vs /path/ duplication — Google indexes both without this, causing "chose different canonical"
  trailingSlash: false,
  // Increase timeout for local builds (default 60s can fail on resource-constrained machines)
  staticPageGenerationTimeout: 180,
  experimental: {
    optimizePackageImports: ['lucide-react'],
    optimizeCss: true,
    /*
      inlineCss stays OFF. Re-measured on 2026-11-08 after worker-side
      inlining turned out to cause CLS 0.203, which closed that route and
      left only a blocking <link> or this.

      Built both. inlineCss removes the blocking <link> (0 stylesheet links,
      1 inline <style>) but the homepage goes 752,172 -> 1,039,436 bytes raw
      and 51,467 -> 98,258 gzipped. That is +46.8KB gzipped on EVERY page.

      The separate sheet is 14.8KB gzipped and cached across the whole site,
      so the comparison is:
        now:       66.3KB on the first page, 51.5KB on every page after
        inlineCss: 98.3KB on every page, always

      It is worse on the first page and far worse on the rest, and bigger
      HTML also slows the cold-colo renders that the Performance grade is
      most sensitive to. It buys one audit checkbox by making the thing that
      checkbox exists to measure worse.

      Google's own measurement with the blocking link: PSI mobile 95,
      desktop 99, CLS 0. Leave it.
    */
    // Include bot-data JSON in the serverless bundle for /api/chat on Vercel.
  },
  outputFileTracingIncludes: {
    '/api/chat': ['./bot-data/**/*'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  // gzip responses for ALL routes (fixes Uncompressed Page audit when using next start)
  // Production builds minify JS/CSS (SWC/Terser). "Unminified" audit may be from dev build or tool false positive.
  productionBrowserSourceMaps: false, // avoid shipping .map files; keeps payload smaller
  async redirects() {
    return [
      // apex → www redirect is handled by Cloudflare edge rule, not Next.js.
      // Removing it here prevents OpenNext/Workers from outputting ":path*" literally.
      // 301 redirects for old cert slugs that were renamed
      // Old slug → current slug (prevents 404s from external links / Ahrefs)
      ...mergedCertPageRedirects,
      ...credentialAliasRedirects.map(([source, destination]) => ({ source, destination, permanent: true })),
      // Claude credential names include "Foundations"; send the long-form slug
      // people guess from the name to the page that exists.
      {
        source: '/certifications/claude-certified-associate-foundations',
        destination: '/certifications/claude-certified-associate',
        permanent: true,
      },
      {
        source: '/certifications/claude-certified-developer-foundations',
        destination: '/certifications/claude-certified-developer',
        permanent: true,
      },
      // ADM-201 consolidation (November 2026): the standalone study guide and
      // exam tips pages targeted the same intent as the credential hub and were
      // merged into it. Their unique content now lives in Adm201MergedGuide.
      {
        source: '/adm-201-study-guide',
        destination: '/certifications/administrator',
        permanent: true,
      },
      {
        source: '/adm-201-exam-tips',
        destination: '/certifications/administrator',
        permanent: true,
      },
      {
        source: '/certifications/platform-developer-i',
        destination: '/certifications/developer-1',
        permanent: true,
      },
      {
        source: '/certifications/developer',
        destination: '/certifications/developer-1',
        permanent: true,
      },
      {
        source: '/certifications/platform-developer-ii',
        destination: '/certifications/developer-2',
        permanent: true,
      },
      {
        source: '/og-image',
        destination: '/og-default.png',
        permanent: true,
      },
      {
        source: '/certifications/marketing-cloud-email-specialist',
        destination: '/certifications/email-specialist',
        permanent: true,
      },
      {
        source: '/certifications/tableau-desktop',
        destination: '/certifications/tableau-desktop-foundations',
        permanent: true,
      },
      {
        source: '/certifications/integration-architecture-designer',
        destination: '/certifications/integration-architect',
        permanent: true,
      },
      {
        source: '/certifications/javascript-developer-1',
        destination: '/certifications/javascript-developer-i',
        permanent: true,
      },
      // Data Cloud Consultant → Data 360 Consultant (rebranded March 2026)
      // Changed to permanent 301 redirects; new canonical URLs use data-360 (2026 entity naming standard)
      // CAUTION: These are single-hop 301s — destinations must remain live pages.
      // If data-360-consultant, data-360-consultant-study-guide, or data-360-consultant-exam-tips
      // are ever renamed, update the destinations here immediately to avoid a redirect chain.
      // Redirect chains dilute PageRank flow and are flagged by Ahrefs Site Audit.
      {
        source: '/certifications/data-cloud-consultant',
        destination: '/certifications/data-360-consultant',
        permanent: true,
      },
      {
        source: '/data-cloud-consultant-study-guide',
        destination: '/certifications/data-360-consultant',
        permanent: true,
      },
      {
        source: '/data-cloud-consultant-exam-tips',
        destination: '/certifications/data-360-consultant',
        permanent: true,
      },
      // Generic exam-tips slugs (year-specific → permanent URLs)
      {
        source: '/adm-201-exam-tips-2026',
        destination: '/certifications/administrator',
        permanent: true,
      },
      {
        source: '/pd1-exam-tips-2026',
        destination: '/certifications/developer-1',
        permanent: true,
      },
      {
        source: '/pd2-exam-tips-2026',
        destination: '/certifications/developer-2',
        permanent: true,
      },
      // Consolidate duplicate Service Cloud study-guide intent into one canonical URL.
      {
        source: '/service-cloud-study-guide',
        destination: '/certifications/service-cloud',
        permanent: true,
      },
      // Consolidate likely legacy short slugs into the canonical long-tail URLs.
      {
        source: '/experience-cloud-study-guide',
        destination: '/certifications/experience-cloud',
        permanent: true,
      },
      {
        source: '/marketing-cloud-admin-study-guide',
        destination: '/certifications/marketing-cloud-engagement-admin',
        permanent: true,
      },
      {
        source: '/marketing-cloud-administrator-study-guide',
        destination: '/certifications/marketing-cloud-engagement-admin',
        permanent: true,
      },
      {
        source: '/marketing-cloud-path',
        destination: '/marketing-cloud-certification-path',
        permanent: true,
      },
      {
        source: '/salesforce-marketing-cloud-certification-path',
        destination: '/marketing-cloud-certification-path',
        permanent: true,
      },
    ]
  },
  async headers() {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://static.cloudflareinsights.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https: blob:",
      "font-src 'self' data:",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://analytics.google.com https://region1.google-analytics.com https://stats.g.doubleclick.net https://cloudflareinsights.com",
      "frame-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ')
    const securityHeaders = [
      { key: 'Content-Security-Policy', value: csp },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }, // fixes "Missing Referrer Policy" audit
    ]
    // Apply to every route: root, all pages, all API routes
    return [
      { source: '/', headers: securityHeaders },
      { source: '/:path*', headers: securityHeaders },
      {
        // /og is the Open Graph image endpoint, not a page. Every distinct ?t=
        // title became its own crawlable URL: 111 of them sit in Search Console
        // as "Crawled - currently not indexed", 59% of that whole report.
        // noindex rather than a robots.txt Disallow, because Facebook, X and
        // LinkedIn honour robots.txt and would then stop fetching the share
        // image, breaking social previews. This keeps the fetch and drops the
        // indexing.
        source: '/og',
        headers: [...securityHeaders, { key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ]
  },
}

module.exports = nextConfig

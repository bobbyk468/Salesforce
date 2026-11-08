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
    // inlineCss deliberately left off. Measured on Next 16.4.4: it removes
    // the blocking <link> but writes the stylesheet into the page three
    // times — once in <style> and twice more inside the RSC flight payload
    // — taking the homepage from 730KB to 1009KB raw and 48.7KB to 93.7KB
    // gzipped, and the RSC payload from 438KB to 624KB. The sheet is 15KB
    // gzipped and cached across every page; inlining it costs 45KB gzipped
    // on every page instead. That trades a measured regression in HTML size
    // and parse work for one audit flag.
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
        destination: '/data-360-consultant-study-guide',
        permanent: true,
      },
      {
        source: '/data-cloud-consultant-exam-tips',
        destination: '/data-360-consultant-exam-tips',
        permanent: true,
      },
      // Generic exam-tips slugs (year-specific → permanent URLs)
      {
        source: '/adm-201-exam-tips-2026',
        destination: '/adm-201-exam-tips',
        permanent: true,
      },
      {
        source: '/pd1-exam-tips-2026',
        destination: '/pd1-exam-tips',
        permanent: true,
      },
      {
        source: '/pd2-exam-tips-2026',
        destination: '/pd2-exam-tips',
        permanent: true,
      },
      // Consolidate duplicate Service Cloud study-guide intent into one canonical URL.
      {
        source: '/service-cloud-study-guide',
        destination: '/service-cloud-consultant-study-guide',
        permanent: true,
      },
      // Consolidate likely legacy short slugs into the canonical long-tail URLs.
      {
        source: '/experience-cloud-study-guide',
        destination: '/experience-cloud-consultant-study-guide',
        permanent: true,
      },
      {
        source: '/marketing-cloud-admin-study-guide',
        destination: '/marketing-cloud-engagement-admin-study-guide',
        permanent: true,
      },
      {
        source: '/marketing-cloud-administrator-study-guide',
        destination: '/marketing-cloud-engagement-admin-study-guide',
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

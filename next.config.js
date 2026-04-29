/** @type {import('next').NextConfig} */
const nextConfig = {
  // Include bot-data JSON in the serverless bundle for /api/chat on Vercel
  outputFileTracingIncludes: {
    '/api/chat': ['./bot-data/**/*'],
  },
  reactStrictMode: true,
  compress: true,
  // Prevent /path vs /path/ duplication — Google indexes both without this, causing "chose different canonical"
  trailingSlash: false,
  // Increase timeout for local builds (default 60s can fail on resource-constrained machines)
  staticPageGenerationTimeout: 180,
  experimental: {
    optimizePackageImports: ['lucide-react'],
    optimizeCss: true,
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
      // Canonical www (apex → www). GSC may list http(s)://trailblazeprep.com/... as "Page with redirect"
      // — that is expected; Google indexes https://www.trailblazeprep.com/... instead. Align
      // NEXT_PUBLIC_SITE_URL in Vercel with www so sitemap.xml / robots host are not all redirects.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'trailblazeprep.com' }],
        destination: 'https://www.trailblazeprep.com/:path*',
        permanent: true,
      },
      // 301 redirects for old cert slugs that were renamed
      // Old slug → current slug (prevents 404s from external links / Ahrefs)
      {
        source: '/certifications/platform-developer-i',
        destination: '/certifications/developer-1',
        permanent: true,
      },
      {
        source: '/certifications/platform-developer-ii',
        destination: '/certifications/developer-2',
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
    ]
  },
  async headers() {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https: blob:",
      "font-src 'self' data:",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://analytics.google.com https://region1.google-analytics.com https://stats.g.doubleclick.net",
      "frame-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ')
    const securityHeaders = [
      { key: 'Content-Security-Policy', value: csp },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }, // fixes "Missing Referrer Policy" audit
    ]
    // Apply to every route: root, all pages, all API routes
    return [
      { source: '/', headers: securityHeaders },
      { source: '/:path*', headers: securityHeaders },
    ]
  },
}

module.exports = nextConfig

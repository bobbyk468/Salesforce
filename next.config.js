/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true, // gzip responses for ALL routes (fixes Uncompressed Page audit when using next start)
  // Production builds minify JS/CSS (SWC/Terser). "Unminified" audit may be from dev build or tool false positive.
  productionBrowserSourceMaps: false, // avoid shipping .map files; keeps payload smaller
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'trailblazeprep.com',
          },
        ],
        destination: 'https://www.trailblazeprep.com/:path*',
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
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
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

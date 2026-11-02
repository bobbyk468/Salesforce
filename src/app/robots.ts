import { MetadataRoute } from 'next'

// IMPORTANT: NEXT_PUBLIC_SITE_URL must be set to https://www.trailblazeprep.com (with www) in Vercel.
// If set to the apex domain, robots.txt and sitemap will reference a non-canonical host.
// The fallback below auto-corrects apex → www so a misconfigured env var doesn't silently break crawling.
const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const baseUrl = rawUrl.replace(/^(https?:\/\/)(?!www\.)trailblazeprep\.com/, '$1www.trailblazeprep.com')
if (rawUrl !== baseUrl) {
  console.warn('[robots] NEXT_PUBLIC_SITE_URL uses apex host — auto-corrected to www. Set NEXT_PUBLIC_SITE_URL=https://www.trailblazeprep.com in Vercel.')
}
const host = (() => {
  try {
    return new URL(baseUrl).host
  } catch {
    return 'www.trailblazeprep.com'
  }
})()

export default function robots(): MetadataRoute.Robots {
  return {
    // One shared policy keeps exclusions consistent for all crawlers. More
    // specific user-agent groups would override these exclusions.
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/*?q=*'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host,
  }
}

import { MetadataRoute } from 'next'

// Crawling endpoints always use the canonical production origin.
const baseUrl = 'https://www.trailblazeprep.com'
const host = 'www.trailblazeprep.com'

export default function robots(): MetadataRoute.Robots {
  return {
    // One shared policy keeps exclusions consistent for all crawlers. More
    // specific user-agent groups would override these exclusions.
    rules: {
      userAgent: '*',
      allow: '/',
      // /og is deliberately NOT disallowed here: Facebook, X and LinkedIn
      // honour robots.txt, so blocking it would stop them fetching the share
      // image. It carries X-Robots-Tag: noindex instead (see next.config.js).
      disallow: ['/api/', '/*?q=*'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host,
  }
}

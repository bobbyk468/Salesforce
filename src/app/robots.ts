import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const host = (() => {
  try {
    return new URL(baseUrl).host
  } catch {
    return 'www.trailblazeprep.com'
  }
})()
if (host === 'trailblazeprep.com') {
  console.warn(
    '[robots] NEXT_PUBLIC_SITE_URL uses apex; site redirects to www. Prefer https://www.trailblazeprep.com in Vercel.',
  )
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow all crawlers, block API routes
      {
        userAgent: '*',
        allow: '/',
        // Block API routes and parameterized search URLs (?q= from CertSearch sitelinks box)
        disallow: ['/api/', '/*?q=*'],
      },
      // Explicitly allow major AI/LLM crawlers so they index all content
      // OpenAI (ChatGPT, SearchGPT)
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      // Anthropic (Claude)
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      // Perplexity
      { userAgent: 'PerplexityBot', allow: '/' },
      // Google (Gemini / AI Overviews)
      { userAgent: 'Google-Extended', allow: '/' },
      // Microsoft (Copilot / Bing AI)
      { userAgent: 'Bingbot', allow: '/' },
      // Apple (Apple Intelligence)
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      // Meta (Meta AI)
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
      // ByteDance / Cohere
      { userAgent: 'Bytespider', allow: '/' },
      // You.com
      { userAgent: 'YouBot', allow: '/' },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host,
  }
}

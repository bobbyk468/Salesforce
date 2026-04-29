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

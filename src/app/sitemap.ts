import { MetadataRoute } from 'next'
import sitemapSource from '../../public/urls.json'
// Route -> ISO date of the last commit that changed the page's own content.
// Regenerate with `npm run sitemap:lastmod`. Without <lastmod> Google has no
// signal that a page changed and falls back to guessing: a certification page
// rewritten this week was still shown in search carrying an August date.
import lastModifiedSource from '../../public/sitemap-lastmod.json'

type SitemapSource = { urls: string[] }

const lastModified = lastModifiedSource as Record<string, string>

// Build this metadata route from the checked-in canonical URL index instead of
// reading src/app at request time. Workers do not expose a project filesystem.
const sourceUrls = (sitemapSource as SitemapSource).urls
const noindexPracticeTestPaths = new Set([
  '/certifications/administrator-practice-test',
  '/certifications/email-specialist-practice-test',
])
const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const baseUrl = rawBaseUrl.replace(
  /^(https?:\/\/)(?!www\.)trailblazeprep\.com/,
  '$1www.trailblazeprep.com',
)

export const dynamic = 'force-static'

function getPriority(pathname: string): number {
  if (pathname === '/') return 1
  if (pathname === '/certifications') return 0.9
  if (pathname.startsWith('/certifications/role/')) return 0.85
  if (pathname.startsWith('/certifications/')) return 0.8
  if (pathname.endsWith('-study-guide')) return 0.8
  if (pathname.endsWith('-exam-tips')) return 0.75
  return 0.8
}

function getChangeFrequency(pathname: string): MetadataRoute.Sitemap[number]['changeFrequency'] {
  if (
    pathname === '/' ||
    pathname === '/certifications' ||
    pathname.startsWith('/certifications/') ||
    pathname.endsWith('-study-guide')
  ) {
    return 'weekly'
  }

  return 'monthly'
}

export default function sitemap(): MetadataRoute.Sitemap {
  const uniquePaths = new Set<string>()

  return sourceUrls.flatMap((sourceUrl) => {
    const pathname = new URL(sourceUrl).pathname
    if (noindexPracticeTestPaths.has(pathname) || uniquePaths.has(pathname)) return []
    uniquePaths.add(pathname)

    const modified = lastModified[pathname]

    return [{
      url: `${baseUrl}${pathname}`,
      ...(modified ? { lastModified: new Date(modified) } : {}),
      changeFrequency: getChangeFrequency(pathname),
      priority: getPriority(pathname),
    }]
  })
}

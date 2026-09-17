import { MetadataRoute } from 'next'
import sitemapSource from '../../public/urls.json'
import { RELEASE_DATE } from '@/lib/release-data'

type SitemapSource = { urls: string[] }

// Build this metadata route from the checked-in canonical URL index instead of
// reading src/app at request time. Workers do not expose a project filesystem.
const sourceUrls = (sitemapSource as SitemapSource).urls
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
  return sourceUrls.map((sourceUrl) => {
    const pathname = new URL(sourceUrl).pathname

    return {
      url: `${baseUrl}${pathname}`,
      lastModified: new Date(RELEASE_DATE),
      changeFrequency: getChangeFrequency(pathname),
      priority: getPriority(pathname),
    }
  })
}

import { buildSearchIndex } from '@/lib/search-index'

/**
 * The site search index, prerendered at build time and served as a static
 * asset. SiteSearch fetches it on the first keystroke, never on page load,
 * so it costs nothing until someone actually searches.
 */
export const dynamic = 'force-static'

export function GET() {
  return new Response(JSON.stringify(buildSearchIndex()), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=3600, s-maxage=31536000',
    },
  })
}

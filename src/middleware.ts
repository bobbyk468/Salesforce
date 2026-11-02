import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const productionHost = ['trailblazeprep.com', 'www.trailblazeprep.com'].includes(url.hostname)
  if (productionHost && (url.protocol !== 'https:' || url.hostname !== 'www.trailblazeprep.com')) {
    url.protocol = 'https:'
    url.hostname = 'www.trailblazeprep.com'
    url.port = ''
    return NextResponse.redirect(url, 308)
  }

  const response = NextResponse.next()

  // Query-param contact URLs are utility entry points; keep canonical /contact as the indexable URL.
  if (request.nextUrl.pathname === '/contact' && request.nextUrl.searchParams.has('exam')) {
    response.headers.set('X-Robots-Tag', 'noindex, follow')
  }

  return response
}

export const config = {
  matcher: ['/:path*'],
}

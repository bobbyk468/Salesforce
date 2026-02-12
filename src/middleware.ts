import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Query-param contact URLs are utility entry points; keep canonical /contact as the indexable URL.
  if (request.nextUrl.pathname === '/contact' && request.nextUrl.searchParams.has('exam')) {
    response.headers.set('X-Robots-Tag', 'noindex, follow')
  }

  return response
}

export const config = {
  matcher: ['/contact'],
}

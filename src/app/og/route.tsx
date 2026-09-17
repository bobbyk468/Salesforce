import { NextResponse } from 'next/server'

/**
 * Shared social image endpoint. A static raster image works on both Vercel and
 * Cloudflare Workers; query parameters remain supported for existing metadata.
 */
export function GET(request: Request) {
  return NextResponse.redirect(new URL('/og-default.png', request.url), 307)
}

import { CERTIFICATION_PATHS } from '@/lib/certification-path-data'
import { NextResponse } from 'next/server'

/** Serves certification path data for client-side render to reduce initial HTML size. */
export async function GET() {
  return NextResponse.json(CERTIFICATION_PATHS)
}

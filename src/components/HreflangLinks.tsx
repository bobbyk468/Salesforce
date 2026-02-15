'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

/**
 * Injects hreflang link tags for the current page (en + x-default).
 * Fixes "Missing Hreflang Tags" audit; single-language site signals default and English.
 */
export default function HreflangLinks() {
  const pathname = usePathname()

  useEffect(() => {
    const path = pathname ?? '/'
    const canonical = `${SITE_URL}${path === '/' ? '' : path}`

    const linkEn = document.createElement('link')
    linkEn.rel = 'alternate'
    linkEn.hreflang = 'en'
    linkEn.href = canonical

    const linkDefault = document.createElement('link')
    linkDefault.rel = 'alternate'
    linkDefault.hreflang = 'x-default'
    linkDefault.href = canonical

    document.head.appendChild(linkEn)
    document.head.appendChild(linkDefault)

    return () => {
      document.head.removeChild(linkEn)
      document.head.removeChild(linkDefault)
    }
  }, [pathname])

  return null
}

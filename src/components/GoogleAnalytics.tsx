'use client'

import { useEffect } from 'react'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const FALLBACK_MS = 6000

/**
 * Loads gtag.js after the window load event so GTM long tasks fall outside the
 * Lighthouse trace and don't affect TBT/LCP. Falls back to FALLBACK_MS if load already fired.
 */
export default function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return

    let timeoutId: ReturnType<typeof setTimeout> | null = null
    let done = false

    const load = () => {
      if (done) return
      done = true
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
        timeoutId = null
      }
      window.removeEventListener('load', load)
      const s1 = document.createElement('script')
      s1.async = true
      s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
      document.head.appendChild(s1)

      const s2 = document.createElement('script')
      s2.id = 'ga-config'
      s2.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');
      `
      document.head.appendChild(s2)
    }

    if (document.readyState === 'complete') {
      load()
    } else {
      window.addEventListener('load', load)
      timeoutId = setTimeout(load, FALLBACK_MS)
    }

    return () => {
      window.removeEventListener('load', load)
      if (timeoutId !== null) clearTimeout(timeoutId)
    }
  }, [])

  if (!GA_MEASUREMENT_ID) return null
  return null
}

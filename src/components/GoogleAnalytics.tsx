'use client'

import { useEffect } from 'react'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

/**
 * Loads gtag.js after requestIdleCallback (or 3.5s) to keep GA off the critical path
 * and reduce desktop TBT from long GTM tasks.
 */
export default function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return

    let idleId: number | null = null
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    const load = () => {
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

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(load, { timeout: 3500 })
    } else {
      timeoutId = setTimeout(load, 3500)
    }

    return () => {
      if (idleId !== null && 'cancelIdleCallback' in window) window.cancelIdleCallback(idleId)
      if (timeoutId !== null) clearTimeout(timeoutId)
    }
  }, [])

  if (!GA_MEASUREMENT_ID) return null
  return null
}

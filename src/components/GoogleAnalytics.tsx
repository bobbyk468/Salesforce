'use client'

import { useEffect } from 'react'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
/** Desktop: delay to allow React hydration to complete first. Mobile: longer delay so GA tasks don't affect LCP. */
const DESKTOP_DELAY_AFTER_LOAD_MS = 3000
const MOBILE_DELAY_AFTER_LOAD_MS = 8000
const FALLBACK_DESKTOP_MS = 8000
const FALLBACK_MOBILE_MS = 12000

/**
 * Loads gtag.js after window load. On mobile, adds an extra delay so GTM long tasks
 * run well after LCP and don't regress mobile performance. Desktop loads on load.
 */
export default function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return

    let timeoutId: ReturnType<typeof setTimeout> | null = null
    let done = false
    const isMobile = () => window.matchMedia('(max-width: 1023px)').matches

    const load = () => {
      if (done) return
      done = true
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
        timeoutId = null
      }
      window.removeEventListener('load', onLoad)
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

    const onLoad = () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
        timeoutId = null
      }
      if (isMobile()) {
        timeoutId = setTimeout(load, MOBILE_DELAY_AFTER_LOAD_MS)
      } else {
        timeoutId = setTimeout(load, DESKTOP_DELAY_AFTER_LOAD_MS)
      }
    }

    if (document.readyState === 'complete') {
      onLoad()
    } else {
      window.addEventListener('load', onLoad)
      timeoutId = setTimeout(load, isMobile() ? FALLBACK_MOBILE_MS : FALLBACK_DESKTOP_MS)
    }

    return () => {
      window.removeEventListener('load', onLoad)
      if (timeoutId !== null) clearTimeout(timeoutId)
    }
  }, [])

  if (!GA_MEASUREMENT_ID) return null
  return null
}

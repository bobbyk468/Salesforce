'use client'

import { useEffect } from 'react'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
/**
 * To protect Core Web Vitals, load GA only after:
 * - first user interaction (preferred), OR
 * - a long idle fallback (in case user never interacts).
 *
 * Lighthouse can wait long enough to “see” GA; the interaction gate helps keep GA
 * out of the critical path for real users and lab runs.
 */
const DESKTOP_IDLE_FALLBACK_MS = 20000
const MOBILE_IDLE_FALLBACK_MS = 30000

/**
 * Loads gtag.js well after LCP/hydration to avoid main-thread contention.
 */
export default function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return

    let timeoutId: ReturnType<typeof setTimeout> | null = null
    let idleId: number | null = null
    let done = false
    const isMobile = () => window.matchMedia('(max-width: 1023px)').matches

    const load = () => {
      if (done) return
      done = true
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
        timeoutId = null
      }
      cleanupListeners()
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
        gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });
      `
      document.head.appendChild(s2)
    }

    const onFirstInteraction = () => {
      // Give the browser a beat after interaction before downloading/exec.
      if (timeoutId !== null) clearTimeout(timeoutId)
      timeoutId = setTimeout(load, 1000)
    }

    const cleanupListeners = () => {
      window.removeEventListener('pointerdown', onFirstInteraction, { capture: true } as any)
      window.removeEventListener('keydown', onFirstInteraction, { capture: true } as any)
      window.removeEventListener('scroll', onFirstInteraction, { capture: true } as any)
      if (idleId !== null && 'cancelIdleCallback' in window) {
        ;(window as any).cancelIdleCallback(idleId)
        idleId = null
      }
    }

    // Prefer: after real interaction
    window.addEventListener('pointerdown', onFirstInteraction, { capture: true, passive: true })
    window.addEventListener('keydown', onFirstInteraction, { capture: true, passive: true })
    window.addEventListener('scroll', onFirstInteraction, { capture: true, passive: true })

    // Fallback: after long idle
    const fallbackMs = isMobile() ? MOBILE_IDLE_FALLBACK_MS : DESKTOP_IDLE_FALLBACK_MS
    if ('requestIdleCallback' in window) {
      idleId = (window as any).requestIdleCallback(load, { timeout: fallbackMs })
    } else {
      timeoutId = setTimeout(load, fallbackMs)
    }

    return () => {
      cleanupListeners()
      if (timeoutId !== null) clearTimeout(timeoutId)
    }
  }, [])

  if (!GA_MEASUREMENT_ID) return null
  return null
}

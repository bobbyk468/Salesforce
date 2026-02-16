'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const ContactSidebar = dynamic(() => import('@/components/ContactSidebar'), {
  ssr: false,
})

/**
 * Mount the heavy interactive sidebar only on desktop viewports.
 * This avoids shipping extra client work on mobile where the sidebar is hidden.
 */
export default function DesktopContactSidebar() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [shouldMount, setShouldMount] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const sync = () => setIsDesktop(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!isDesktop) {
      setShouldMount(false)
      return
    }

    let timeoutId: ReturnType<typeof setTimeout> | null = null
    let idleId: number | null = null

    const mount = () => setShouldMount(true)

    // Defer non-critical sidebar hydration so desktop LCP/TBT are less impacted.
    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(mount, { timeout: 1200 })
    } else {
      timeoutId = setTimeout(mount, 1200)
    }

    return () => {
      if (idleId !== null && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId)
      }
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
      }
    }
  }, [isDesktop])

  if (!isDesktop) return null
  if (!shouldMount) {
    return <div className="rounded-2xl border border-gray-100 bg-white min-h-[420px]" aria-hidden="true" />
  }
  return <ContactSidebar />
}

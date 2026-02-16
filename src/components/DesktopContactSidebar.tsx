'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const ContactSidebar = dynamic(() => import('@/components/ContactSidebar'), {
  ssr: false,
})

/**
 * Rendered only on desktop (via DesktopSidebarSlot). Uses a mount gate so the
 * heavy ContactSidebar does not run during initial hydration, reducing desktop TBT.
 * Placeholder has fixed width (w-80) to match layout and prevent CLS.
 */
export default function DesktopContactSidebar() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null
    let idleId: number | null = null
    const mount = () => setMounted(true)

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(mount, { timeout: 2500 })
    } else {
      timeoutId = setTimeout(mount, 2500)
    }
    return () => {
      if (idleId !== null && typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId)
      }
      if (timeoutId !== null) clearTimeout(timeoutId)
    }
  }, [])

  if (!mounted) {
    return (
      <div
        className="w-80 min-h-[420px] bg-transparent"
        aria-hidden="true"
      />
    )
  }
  return <ContactSidebar />
}

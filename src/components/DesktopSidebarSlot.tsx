'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const DesktopContactSidebar = dynamic(
  () => import('@/components/DesktopContactSidebar'),
  { ssr: false }
)

/**
 * Renders the contact sidebar only on desktop (lg+). The DesktopContactSidebar
 * chunk is not loaded on mobile, keeping the mobile bundle small and preserving
 * the mobile Lighthouse score.
 */
export default function DesktopSidebarSlot() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const sync = () => setIsDesktop(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  if (!isDesktop) return null
  return <DesktopContactSidebar />
}

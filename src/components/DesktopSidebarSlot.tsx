'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

const DesktopContactSidebar = dynamic(
  () => import('@/components/DesktopContactSidebar'),
  { ssr: false }
)

/**
 * Renders the contact sidebar only on desktop (lg+). The DesktopContactSidebar
 * chunk is not loaded on mobile, keeping the mobile bundle small and preserving
 * the mobile Lighthouse score.
 */
/** Routes that are themselves a contact form, so the docked widget duplicates them. */
const SUPPRESSED_ROUTES = new Set(['/contact'])

export default function DesktopSidebarSlot() {
  const pathname = usePathname()
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const sync = () => setIsDesktop(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  if (!isDesktop) return null
  if (pathname && SUPPRESSED_ROUTES.has(pathname.replace(/\/$/, '') || '/')) return null
  return <DesktopContactSidebar />
}

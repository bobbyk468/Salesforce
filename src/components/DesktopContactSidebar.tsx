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

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const sync = () => setIsDesktop(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  if (!isDesktop) return null
  return <ContactSidebar />
}

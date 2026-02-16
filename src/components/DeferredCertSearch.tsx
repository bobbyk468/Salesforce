'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const CertSearch = dynamic(() => import('@/components/CertSearch'), { ssr: false })

const PLACEHOLDER_CLASS = 'min-h-10 min-w-[12rem] max-w-xs w-full rounded-lg border border-gray-200 bg-white'

/**
 * Renders CertSearch only on desktop (lg+) and only after requestIdleCallback,
 * so desktop TBT stays low and the CertSearch chunk is never loaded on mobile.
 */
export default function DeferredCertSearch() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const sync = () => setIsDesktop(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!isDesktop) return
    let idleId: number | null = null
    let timeoutId: ReturnType<typeof setTimeout> | null = null
    const mount = () => setMounted(true)
    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(mount, { timeout: 1500 })
    } else {
      timeoutId = setTimeout(mount, 1500)
    }
    return () => {
      if (idleId !== null && 'cancelIdleCallback' in window) window.cancelIdleCallback(idleId)
      if (timeoutId !== null) clearTimeout(timeoutId)
    }
  }, [isDesktop])

  if (!isDesktop) {
    return <div className={PLACEHOLDER_CLASS} aria-hidden="true" />
  }
  if (!mounted) {
    return <div className={PLACEHOLDER_CLASS} aria-hidden="true" />
  }
  return <CertSearch />
}

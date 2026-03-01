'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/** Paths that should show the sticky content CTA (study guides, content pages without practice questions) */
const STICKY_CONTENT_PATHS = [
  '-study-guide',
  '/how-to-study-for-salesforce-certification',
  '/how-to-become-salesforce-',
  '/which-salesforce-certification-first',
  '/salesforce-certification-exam-day-tips',
  '/salesforce-admin-vs-developer-career',
  '/salesforce-certification-passing-score',
  '/salesforce-certification-cost',
  '/salesforce-certification-difficulty',
  '/salesforce-certification-maintenance',
  '/salesforce-certification-salary',
  '/salesforce-certification-validity',
  '/salesforce-certification-voucher',
  '/salesforce-exam-retake-policy',
  '/salesforce-free-certification',
  '/is-salesforce-certification-worth-it',
  '/become-cta',
  '/certification-path',
  '/admin-certification-path',
  '/developer-certification-path',
  '/architect-certification-path',
  '/consultant-certification-path',
]

function shouldShowStickyCta(pathname: string): boolean {
  if (!pathname) return false
  return STICKY_CONTENT_PATHS.some((p) => pathname.includes(p))
}

/**
 * Sticky CTA bar for study guide and content pages (no practice questions section).
 * Appears after 400px scroll, links to certifications hub.
 */
export default function StickyContentCta() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!shouldShowStickyCta(pathname ?? '')) return

    function updateVisibility() {
      if (window.scrollY < 400) {
        requestAnimationFrame(() => setVisible(false))
        return
      }
      requestAnimationFrame(() => setVisible(true))
    }

    function onScrollOrResize() {
      if (rafRef.current !== null) return
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null
        updateVisibility()
      })
    }

    updateVisibility()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current)
    }
  }, [pathname])

  if (!visible || !shouldShowStickyCta(pathname ?? '')) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] px-4 py-3 safe-area-bottom">
      <Link
        href="/certifications"
        className="flex items-center justify-center w-full px-6 py-3 bg-salesforce-blue text-white rounded-xl font-bold text-base hover:bg-salesforce-dark transition-colors shadow-md active:scale-[0.98]"
      >
        Browse Free Practice Questions
      </Link>
    </div>
  )
}

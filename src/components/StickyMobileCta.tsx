'use client'

import { useState, useEffect, useRef } from 'react'
import Link from '@/components/AppLink'

interface StickyMobileCtaProps {
  /** Anchor to scroll to (default: #practice-questions) */
  href?: string
  /** Button label */
  label?: string
}

/**
 * Sticky CTA bar shown only on mobile (< lg breakpoint).
 * Appears after user scrolls 400px and hides when they reach the practice questions section.
 */
export default function StickyMobileCta({
  href = '#practice-questions',
  label = 'Start Free Practice',
}: StickyMobileCtaProps) {
  const [visible, setVisible] = useState(false)
  const rafRef = useRef<number | null>(null)
  const barRef = useRef<HTMLDivElement | null>(null)

  /**
   * Publishes the bar's height to the document so other fixed chrome can clear
   * it. The chatbot launcher and the WhatsApp button sit at `bottom-6` with a
   * higher z-index, so while this bar was up they overlapped it, and the page's
   * last rows -- including the footer links -- sat underneath it.
   */
  useEffect(() => {
    const root = document.documentElement
    if (!visible) {
      root.removeAttribute('data-sticky-cta')
      root.style.removeProperty('--sticky-cta-h')
      return
    }
    const sync = () => {
      const height = barRef.current?.offsetHeight ?? 0
      root.style.setProperty('--sticky-cta-h', `${height}px`)
      root.setAttribute('data-sticky-cta', '1')
    }
    sync()
    window.addEventListener('resize', sync)
    return () => {
      window.removeEventListener('resize', sync)
      root.removeAttribute('data-sticky-cta')
      root.style.removeProperty('--sticky-cta-h')
    }
  }, [visible])

  useEffect(() => {
    function updateVisibility() {
      const scrollY = window.scrollY
      if (scrollY < 400) {
        requestAnimationFrame(() => setVisible(false))
        return
      }
      const practiceSection = document.getElementById('practice-questions')
      if (practiceSection) {
        const rect = practiceSection.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          requestAnimationFrame(() => setVisible(false))
          return
        }
      }
      // Defer state write to next frame to avoid forced reflow (read getBoundingClientRect then write)
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
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  if (!visible) return null

  return (
    <div
      ref={barRef}
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] px-4 py-3 safe-area-bottom"
    >
      <Link
        href={href}
        className="flex items-center justify-center w-full px-6 py-3 bg-salesforce-blue text-white rounded-xl font-bold text-base hover:bg-salesforce-dark transition-colors shadow-md active:scale-[0.98]"
      >
        {label}
      </Link>
    </div>
  )
}

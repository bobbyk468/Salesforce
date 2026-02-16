'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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
  label = 'Start 5 Free Questions',
}: StickyMobileCtaProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY
      // Show after scrolling past hero (~400px)
      if (scrollY < 400) {
        setVisible(false)
        return
      }
      // Hide if practice-questions section is in viewport (user reached it)
      const practiceSection = document.getElementById('practice-questions')
      if (practiceSection) {
        const rect = practiceSection.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisible(false)
          return
        }
      }
      setVisible(true)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] px-4 py-3 safe-area-bottom">
      <Link
        href={href}
        className="flex items-center justify-center w-full px-6 py-3 bg-salesforce-blue text-white rounded-xl font-bold text-base hover:bg-salesforce-dark transition-colors shadow-md active:scale-[0.98]"
      >
        {label}
      </Link>
    </div>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import Link from '@/components/AppLink'
import { Award, ChevronDown, Menu, X } from 'lucide-react'
import type { HeaderCategory } from '@/components/Header'

/**
 * One 64px bar at every breakpoint.
 *
 * This used to be two stacked bars: the logo row, then a "Choose your role"
 * strip of eleven dropdown pills that wrapped onto two lines. Sticky, that
 * cost 198px of every desktop viewport (and 174px on mobile, via a 2x2 grid
 * of the same four links already in the desktop row) before any content.
 *
 * The role strip also carried no SEO weight: its sub-items were mounted
 * client-side on first open, so the served HTML held eleven labels and not a
 * single certification href. Collapsing it into one "Certifications" menu
 * loses no crawlable link and gains eleven — the role hubs are now real
 * anchors in the HTML rather than lazily rendered ones.
 */
export default function HeaderClient({ categories }: { categories: HeaderCategory[] }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const certsRef = useRef<HTMLDetailsElement | null>(null)

  // Native <details> has no light-dismiss; close it on an outside click or Escape.
  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      const details = certsRef.current
      if (details?.open && !details.contains(event.target as Node)) details.open = false
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      if (certsRef.current?.open) {
        certsRef.current.open = false
        certsRef.current.querySelector('summary')?.focus()
      }
      setMobileOpen(false)
    }
    document.addEventListener('click', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('click', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  const closeAll = () => {
    if (certsRef.current) certsRef.current.open = false
    setMobileOpen(false)
  }

  const primaryLinks = [
    { href: '/certifications', label: 'All Certifications' },
    { href: '/certification-path', label: 'Cert Path' },
    { href: '/tools/score-calculator', label: 'Exam Score Calculator' },
    { href: '/become-cta', label: 'Become a CTA' },
  ]

  return (
    <header data-critical-header className="no-print bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-[100] focus:rounded-lg focus:bg-white focus:p-3 focus:text-salesforce-dark">
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-salesforce-dark to-salesforce-blue text-white shadow-md group-hover:shadow-lg transition-shadow">
              <Award className="h-6 w-6" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold text-salesforce-dark">
              Trailblaze{' '}<span className="text-salesforce-blue">Prep</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
            <li>
              <details ref={certsRef} className="relative">
              <summary className="nav-link inline-flex items-center gap-1 px-4 py-2 text-gray-600 hover:text-salesforce-blue font-medium rounded-lg hover:bg-salesforce-blue/5 transition-colors text-sm cursor-pointer list-none select-none">
                <span>Certifications</span>
                <ChevronDown className="h-4 w-4 opacity-70" aria-hidden="true" />
              </summary>
              <div className="absolute left-0 top-full mt-2 w-[30rem] rounded-xl border border-gray-200 bg-white p-3 shadow-2xl z-[60]">
                <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Browse by role
                </p>
                <ul className="grid grid-cols-2 gap-x-2">
                  {categories.map((category) => (
                    <li key={category.slug}>
                      <Link
                        href={`/certifications/role/${category.slug}`}
                        onClick={closeAll}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-salesforce-blue/10 hover:text-salesforce-blue"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="mt-2 border-t border-gray-100 pt-2">
                  <li>
                    <Link
                      href="/certifications"
                      onClick={closeAll}
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-salesforce-blue hover:bg-salesforce-blue/10"
                    >
                      All certifications &rarr;
                    </Link>
                  </li>
                </ul>
              </div>
              </details>
            </li>

              <li>
                <Link href="/certification-path" className="nav-link px-4 py-2 text-gray-600 hover:text-salesforce-blue font-medium rounded-lg hover:bg-salesforce-blue/5 transition-colors text-sm">
                  Cert Path
                </Link>
                <Link href="/tools/score-calculator" className="nav-link px-4 py-2 text-gray-600 hover:text-salesforce-blue font-medium rounded-lg hover:bg-salesforce-blue/5 transition-colors text-sm">
                  Score Calculator
                </Link>
              </li>
              <li>
                <Link href="/become-cta" className="nav-link px-4 py-2 text-gray-600 hover:text-salesforce-blue font-medium rounded-lg hover:bg-salesforce-blue/5 transition-colors text-sm">
                  Become a CTA
                </Link>
              </li>
              <li>
                <Link href="/contact" className="ml-2 px-4 py-2.5 bg-salesforce-blue text-white rounded-lg font-semibold text-sm hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile hamburger; the panel is only mounted after the first tap */}
          <div className="lg:hidden relative">
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="min-h-11 min-w-11 p-2 text-gray-600 hover:text-salesforce-blue rounded-lg"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen
                ? <X className="h-6 w-6" aria-hidden="true" />
                : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>

            {mobileOpen && (
              <nav aria-label="Mobile navigation" className="absolute right-0 mt-2 w-[85vw] max-w-sm max-h-[75vh] overflow-y-auto border border-gray-200 bg-white rounded-xl shadow-2xl p-3 z-50">
                <div className="space-y-2">
                  <ul className="space-y-2">
                    {primaryLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={closeAll}
                          className="flex min-h-11 items-center rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-700 shadow-sm hover:border-salesforce-blue hover:text-salesforce-blue"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ul>
                    <li>
                  <Link
                    href="/contact"
                    onClick={closeAll}
                    className="flex min-h-11 items-center justify-center rounded-lg bg-salesforce-blue px-3 text-sm font-semibold text-white shadow-sm hover:bg-salesforce-dark"
                  >
                    Contact Us
                  </Link>
                    </li>
                  </ul>
                </div>

                <p className="mt-4 mb-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">Choose your role</p>
                <ul>
                {categories.map((category) => (
                  <li key={category.slug}>
                  <details className="py-1">
                    <summary className="flex min-h-11 items-center justify-between w-full py-2 text-left font-medium text-gray-700 cursor-pointer list-none">
                      <span>{category.name}</span>
                      <ChevronDown className="h-4 w-4 opacity-70" aria-hidden="true" />
                    </summary>
                    <ul className="pl-3 space-y-0.5 max-h-60 overflow-y-auto">
                      <li>
                      <Link
                        href={`/certifications/role/${category.slug}`}
                        onClick={closeAll}
                        className="flex min-h-11 items-center text-sm font-semibold text-salesforce-blue"
                      >
                        All {category.name} certifications
                      </Link>
                      </li>
                      {category.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={closeAll}
                            className="flex min-h-11 items-center text-sm text-gray-600 hover:text-salesforce-blue"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                  </li>
                ))}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

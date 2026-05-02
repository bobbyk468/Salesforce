'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { Award, ChevronDown, Menu, X } from 'lucide-react'
import { CERTIFICATION_CATEGORIES } from '@/lib/certifications-data'

export default function Header() {
  const desktopDetailsRefs = useRef<(HTMLDetailsElement | null)[]>([])
  // Mobile menu: only mounts full DOM when opened — eliminates ~200 nodes on initial load
  const [mobileOpen, setMobileOpen] = useState(false)
  // Desktop dropdowns: only render sub-items after a category is first opened
  const [renderedDesktopCats, setRenderedDesktopCats] = useState<Set<string>>(new Set())

  const handleLinkClick = (index: number) => {
    const detailsElement = desktopDetailsRefs.current[index]
    if (detailsElement?.open) detailsElement.open = false
    setMobileOpen(false)
  }

  const handleDesktopToggle = (slug: string, open: boolean) => {
    if (open) {
      setRenderedDesktopCats(prev => {
        if (prev.has(slug)) return prev
        const next = new Set(prev)
        next.add(slug)
        return next
      })
    }
  }

  return (
    <header data-critical-header className="no-print bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm min-h-16">
      {/* Top bar: Logo + primary links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-16 h-16">
          <Link href="/" className="flex items-center gap-2 group" aria-label="Trailblaze Prep Home">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-salesforce-dark to-salesforce-blue text-white shadow-md group-hover:shadow-lg transition-shadow">
              <Award className="h-6 w-6" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold text-salesforce-dark">
              Trailblaze<span className="text-salesforce-blue"> Prep</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/certifications" className="nav-link px-4 py-2 text-gray-600 hover:text-salesforce-blue font-medium rounded-lg hover:bg-salesforce-blue/5 transition-colors text-sm">
              All Certifications
            </Link>
            <Link href="/certification-path" className="nav-link px-4 py-2 text-gray-600 hover:text-salesforce-blue font-medium rounded-lg hover:bg-salesforce-blue/5 transition-colors text-sm">
              Cert Path
            </Link>
            <Link href="/become-cta" className="nav-link px-4 py-2 text-gray-600 hover:text-salesforce-blue font-medium rounded-lg hover:bg-salesforce-blue/5 transition-colors text-sm">
              Become a CTA
            </Link>
            <Link href="/contact" className="ml-2 px-4 py-2.5 bg-salesforce-blue text-white rounded-lg font-semibold text-sm hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95">
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger — content is only mounted after the first tap */}
          <div className="lg:hidden relative">
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="p-2 text-gray-600 hover:text-salesforce-blue rounded-lg"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen
                ? <X className="h-6 w-6" aria-hidden="true" />
                : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>

            {mobileOpen && (
              <div className="absolute right-0 mt-2 w-[85vw] max-w-sm border border-gray-200 bg-white rounded-xl shadow-2xl p-3 space-y-2 z-50">
                <Link href="/certifications" onClick={() => setMobileOpen(false)} className="block py-2 font-medium text-gray-700 hover:text-salesforce-blue">
                  All Certifications
                </Link>
                <Link href="/certification-path" onClick={() => setMobileOpen(false)} className="block py-2 font-medium text-gray-700 hover:text-salesforce-blue">
                  Certification Path
                </Link>
                <Link href="/become-cta" onClick={() => setMobileOpen(false)} className="block py-2 font-medium text-gray-700 hover:text-salesforce-blue">
                  Become a CTA
                </Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-2 font-medium text-gray-700 hover:text-salesforce-blue">
                  Contact Us
                </Link>

                <div className="pt-2 border-t border-gray-100">
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Choose your role</p>
                  {CERTIFICATION_CATEGORIES.map((category) => (
                    <details key={category.slug} className="py-1">
                      <summary className="flex items-center justify-between w-full py-2 text-left font-medium text-gray-700 cursor-pointer list-none">
                        <span>{category.name}</span>
                        <ChevronDown className="h-4 w-4 opacity-70" aria-hidden="true" />
                      </summary>
                      <div className="pl-3 space-y-0.5 max-h-60 overflow-y-auto">
                        {category.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1.5 text-sm text-gray-600 hover:text-salesforce-blue"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Choose your role — desktop dropdowns with lazy sub-item rendering */}
      <div className="bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2 hidden lg:block">
            Choose your role
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {CERTIFICATION_CATEGORIES.map((category, index) => (
              <details
                key={category.slug}
                className="relative group"
                ref={(el) => { if (el) desktopDetailsRefs.current[index] = el }}
                onToggle={(e) => handleDesktopToggle(category.slug, (e.currentTarget as HTMLDetailsElement).open)}
              >
                <summary className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-salesforce-blue hover:text-salesforce-blue hover:bg-salesforce-blue/5 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer list-none">
                  <span>{category.name}</span>
                  <ChevronDown className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true" />
                </summary>
                {/* Sub-items only mounted after the dropdown is opened for the first time */}
                <div className="absolute left-0 top-full mt-2 w-64 max-h-[70vh] overflow-y-auto py-2 bg-white rounded-xl shadow-2xl border border-gray-200 z-[60]">
                  {renderedDesktopCats.has(category.slug) && category.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => handleLinkClick(index)}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-salesforce-blue/10 hover:text-salesforce-blue transition-colors duration-150 truncate"
                      aria-label={`View ${item.name} certification page`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

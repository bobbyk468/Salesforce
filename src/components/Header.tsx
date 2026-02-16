'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Award, ChevronDown } from 'lucide-react'
import DeferredCertSearch from './DeferredCertSearch'
import { CERTIFICATION_CATEGORIES } from '@/lib/certifications-data'

/** True when we're on a single certification page (e.g. /certifications/administrator), not hub or role. */
function isCertDetailPage(pathname: string): boolean {
  const match = pathname.match(/^\/certifications\/([^/]+)$/)
  return !!match && match[1] !== 'role'
}

export default function Header() {
  const pathname = usePathname()
  const hideRoleBar = isCertDetailPage(pathname ?? '')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null)

  const handleDesktopBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setOpenDesktopDropdown(null)
    }
  }

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm min-h-16">
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

          <div className="hidden lg:flex items-center gap-3">
            <DeferredCertSearch />
            <Link
              href="/certifications"
              className="px-4 py-2 text-gray-600 hover:text-salesforce-blue font-medium rounded-lg hover:bg-salesforce-blue/5 transition-colors"
            >
              All Certifications
            </Link>
            <Link
              href="/certification-path"
              className="px-4 py-2 text-gray-600 hover:text-salesforce-blue font-medium rounded-lg hover:bg-salesforce-blue/5 transition-colors"
            >
              Certification Path
            </Link>
            <Link
              href="/become-cta"
              className="px-4 py-2 text-gray-600 hover:text-salesforce-blue font-medium rounded-lg hover:bg-salesforce-blue/5 transition-colors"
            >
              Become a CTA
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-salesforce-blue text-white rounded-lg font-medium hover:bg-salesforce-dark transition-colors shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-gray-600 hover:text-salesforce-blue rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Choose your role: hidden on single cert pages to reduce above-the-fold clutter */}
      {!hideRoleBar && (
      <div className="bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 hidden lg:block">
            Choose your role
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {CERTIFICATION_CATEGORIES.map((category) => (
              <div
                key={category.slug}
                className="relative group"
                onMouseEnter={() => setOpenDesktopDropdown(category.slug)}
                onMouseLeave={() => setOpenDesktopDropdown(null)}
                onFocus={() => setOpenDesktopDropdown(category.slug)}
                onBlur={handleDesktopBlur}
              >
                <Link
                  href={`/certifications/role/${category.slug}`}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-salesforce-blue hover:text-salesforce-blue hover:bg-salesforce-blue/5 transition-all duration-200 shadow-sm hover:shadow-md"
                  aria-haspopup="menu"
                  aria-expanded={openDesktopDropdown === category.slug}
                  aria-controls={`role-menu-${category.slug}`}
                >
                  {category.name}
                  <ChevronDown className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
                {/* Dropdown: all certifications in this role (Basic → Advanced order), no View all */}
                <div
                  id={`role-menu-${category.slug}`}
                  role="menu"
                  className={`absolute left-0 top-full mt-2 w-64 max-h-[70vh] overflow-y-auto py-2 bg-white rounded-xl shadow-2xl border border-gray-200 transition-all duration-200 z-[60] ${
                    openDesktopDropdown === category.slug ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
                  }`}
                >
                  {category.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-salesforce-blue/10 hover:text-salesforce-blue transition-colors duration-150 truncate"
                      aria-label={`View ${item.name} certification page`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      )}

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
          <div className="pb-3 border-b border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Search</p>
            <CertSearch />
          </div>
          <Link
            href="/certifications"
            className="block py-2 font-medium text-gray-700 hover:text-salesforce-blue"
            onClick={() => setMobileMenuOpen(false)}
          >
            All Certifications
          </Link>
          <Link
            href="/certification-path"
            className="block py-2 font-medium text-gray-700 hover:text-salesforce-blue"
            onClick={() => setMobileMenuOpen(false)}
          >
            Certification Path
          </Link>
          <Link
            href="/become-cta"
            className="block py-2 font-medium text-gray-700 hover:text-salesforce-blue"
            onClick={() => setMobileMenuOpen(false)}
          >
            Become a CTA
          </Link>
          <Link
            href="/contact"
            className="block py-2 font-medium text-gray-700 hover:text-salesforce-blue"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          {!hideRoleBar && (
          <div className="pt-2 border-t border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Choose your role</p>
            {CERTIFICATION_CATEGORIES.map((category) => (
              <div key={category.slug} className="py-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-2 text-left font-medium text-gray-700"
                  onClick={() => setOpenDropdown(openDropdown === category.slug ? null : category.slug)}
                >
                  {category.name}
                  <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === category.slug ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === category.slug && (
                  <div className="pl-3 space-y-0.5 max-h-60 overflow-y-auto">
                    {category.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-1.5 text-sm text-gray-600 hover:text-salesforce-blue"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          )}
        </div>
      )}
    </header>
  )
}

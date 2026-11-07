'use client'

import { useEffect, useRef, useState } from 'react'
import Link from '@/components/AppLink'
import SiteSearch from '@/components/SiteSearch'
import { Award, ChevronDown, Menu, X } from 'lucide-react'
import { CERTIFICATION_CATEGORIES } from '@/lib/certifications-data'

type NavLink = { label: string; href: string }
type NavSection = { label: string; href?: string; links: NavLink[]; seeAll?: NavLink; columns?: 1 | 2 }

/**
 * Top-level sections of the blue bar. Every destination here is a page that
 * exists; the dropdowns list real pages rather than pointing at hub routes we
 * do not have (there is no /exam-tips index, for instance).
 */
const NAV_SECTIONS: NavSection[] = [
  {
    label: 'Certifications',
    href: '/certifications',
    columns: 2,
    links: CERTIFICATION_CATEGORIES.map((category) => ({
      label: category.name,
      href: `/certifications/role/${category.slug}`,
    })),
    seeAll: { label: 'All certifications', href: '/certifications' },
  },
  {
    label: 'Practice Exams',
    href: '/certifications',
    columns: 2,
    links: [
      { label: 'Platform Administrator (ADM-201)', href: '/certifications/administrator' },
      { label: 'Platform Administrator II', href: '/certifications/advanced-administrator' },
      { label: 'Platform App Builder', href: '/certifications/app-builder' },
      { label: 'Platform Developer I', href: '/certifications/developer-1' },
      { label: 'Platform Foundations', href: '/certifications/platform-foundations' },
      { label: 'AI Associate', href: '/certifications/ai-associate' },
      { label: 'Agentforce Specialist', href: '/certifications/agentforce-specialist' },
      { label: 'Business Analyst', href: '/certifications/business-analyst' },
      { label: 'Sales Cloud Consultant', href: '/certifications/sales-cloud' },
      { label: 'Service Cloud Consultant', href: '/certifications/service-cloud' },
    ],
    seeAll: { label: 'Every certification with practice questions', href: '/salesforce-certifications-list' },
  },
  {
    label: 'Study Guides',
    columns: 2,
    links: [
      { label: 'ADM-201 study guide', href: '/adm-201-study-guide' },
      { label: 'Platform Administrator II', href: '/advanced-administrator-study-guide' },
      { label: 'Platform App Builder', href: '/app-builder-study-guide' },
      { label: 'Platform Foundations', href: '/platform-foundations-study-guide' },
      { label: 'AI Associate', href: '/ai-associate-study-guide' },
      { label: 'Agentforce Specialist', href: '/agentforce-specialist-study-guide' },
      { label: 'Business Analyst', href: '/business-analyst-study-guide' },
      { label: 'Tableau Data Analyst', href: '/tableau-data-analyst-study-guide' },
    ],
    seeAll: { label: 'How to study for a Salesforce certification', href: '/how-to-study-for-salesforce-certification' },
  },
  {
    label: 'Exam Tips',
    columns: 2,
    links: [
      { label: 'ADM-201 exam tips', href: '/adm-201-exam-tips' },
      { label: 'Platform Administrator II', href: '/advanced-administrator-exam-tips' },
      { label: 'Platform App Builder', href: '/app-builder-exam-tips' },
      { label: 'Platform Foundations', href: '/platform-foundations-exam-tips' },
      { label: 'AI Associate', href: '/ai-associate-exam-tips' },
      { label: 'Agentforce Specialist', href: '/agentforce-specialist-exam-tips' },
      { label: 'Service Cloud Consultant', href: '/service-cloud-consultant-exam-tips' },
      { label: 'Email Specialist', href: '/email-specialist-exam-tips' },
    ],
  },
  {
    label: 'Cert Paths',
    href: '/certification-path',
    links: [
      { label: 'All certification paths', href: '/certification-path' },
      { label: 'Admin path', href: '/admin-certification-path' },
      { label: 'Developer path', href: '/developer-certification-path' },
      { label: 'Consultant path', href: '/consultant-certification-path' },
      { label: 'Architect path', href: '/architect-certification-path' },
      { label: 'Marketing Cloud path', href: '/marketing-cloud-certification-path' },
      { label: 'Which certification first?', href: '/which-salesforce-certification-first' },
      { label: 'Become a CTA', href: '/become-cta' },
    ],
  },
  {
    label: 'Compare',
    columns: 2,
    links: [
      { label: 'ADM-201 vs App Builder', href: '/adm-201-vs-app-builder' },
      { label: 'Administrator vs Advanced Admin', href: '/administrator-vs-advanced-administrator' },
      { label: 'App Builder vs Developer I', href: '/app-builder-vs-developer-i' },
      { label: 'PD1 vs PD2', href: '/pd1-vs-pd2' },
      { label: 'Agentforce Specialist vs AI Associate', href: '/agentforce-specialist-vs-ai-associate' },
      { label: 'Difficulty ranking', href: '/salesforce-certification-difficulty' },
      { label: 'Certification cost', href: '/salesforce-certification-cost' },
      { label: 'ROI calculator', href: '/salesforce-certification-roi-calculator' },
    ],
  },
]

/**
 * Three rows, in the shape of a publication masthead:
 *
 *   1. a slim announcement strip
 *   2. burger + logo + search + contact      <- stays on screen
 *   3. the blue section bar                  <- scrolls away
 *
 * Rows 1 and 3 collapse once the page is scrolled, leaving a 60px bar, so the
 * full masthead is only paid for at the top of the page. The header is
 * `fixed` with a spacer of the full height beneath it, which is what keeps
 * that collapse from shifting the page: the space in flow never changes.
 *
 * The burger is present at every width, not just mobile, because the blue bar
 * is gone once you scroll and it has to stay possible to reach everything.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement | null>(null)
  const sentinelRef = useRef<HTMLDivElement | null>(null)

  /**
   * Collapse is driven by an IntersectionObserver on an 80px sentinel at the
   * top of the document rather than a scroll listener. A scroll listener
   * missed events here often enough to leave the header stuck in the wrong
   * state; the observer reports the same fact without firing on every frame.
   */
  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return
    if (typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenSection(null)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenSection(null)
        setDrawerOpen(false)
      }
    }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  // The drawer is a full-height overlay; stop the page behind it scrolling.
  useEffect(() => {
    if (!drawerOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previous }
  }, [drawerOpen])

  const close = () => { setOpenSection(null); setDrawerOpen(false) }

  return (
    <>
      <header
        data-critical-header
        className="no-print fixed inset-x-0 top-0 z-50 bg-white shadow-sm"
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-[100] focus:rounded-lg focus:bg-white focus:p-3 focus:text-salesforce-dark">
          Skip to main content
        </a>

        {/* Row 1: announcement strip */}
        <div className={`overflow-hidden bg-salesforce-dark transition-[height] duration-200 ${scrolled ? 'h-0' : 'h-10'}`}>
          <div className="mx-auto flex h-10 max-w-7xl items-center justify-center px-4">
            <Link href="/certifications" className="text-center text-xs font-medium text-white/90 hover:text-white sm:text-sm">
              Free practice questions for every Salesforce certification &mdash; no sign-up
            </Link>
          </div>
        </div>

        {/* Row 2: burger, logo, search, contact */}
        <div className="border-b border-gray-100">
          <div className="mx-auto flex h-[60px] max-w-7xl items-center gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
            <button
              onClick={() => setDrawerOpen(true)}
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 hover:text-salesforce-blue"
              aria-label="Open menu"
              aria-expanded={drawerOpen}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>

            <Link href="/" className="group flex flex-shrink-0 items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-salesforce-dark to-salesforce-blue text-white shadow-md">
                <Award className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold text-salesforce-dark sm:text-xl">
                Trailblaze{' '}<span className="text-salesforce-blue">Prep</span>
              </span>
            </Link>

            <SiteSearch className="mx-auto hidden w-full max-w-xl md:block" />

            <Link
              href="/contact"
              className="ml-auto hidden h-10 flex-shrink-0 items-center rounded-lg bg-salesforce-blue px-4 text-sm font-semibold text-white shadow-md hover:bg-salesforce-dark sm:flex md:ml-0"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Row 3: section bar */}
        <div
          ref={navRef}
          className={`overflow-visible border-b border-gray-100 bg-salesforce-blue transition-[height,opacity] duration-200 ${scrolled ? 'pointer-events-none h-0 opacity-0' : 'h-12 opacity-100'} hidden lg:block`}
        >
          <nav aria-label="Primary" className="mx-auto flex h-12 max-w-7xl items-center gap-1 px-4 sm:px-6 lg:px-8">
            {NAV_SECTIONS.map((section) => (
              <div key={section.label} className="relative">
                <button
                  onClick={() => setOpenSection((current) => (current === section.label ? null : section.label))}
                  aria-expanded={openSection === section.label}
                  className={`inline-flex h-12 items-center gap-1 px-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/15 hover:text-white ${openSection === section.label ? 'bg-white/15 text-white' : ''}`}
                >
                  <span>{section.label}</span>
                  <ChevronDown className="h-4 w-4 opacity-80" aria-hidden="true" />
                </button>

                {openSection === section.label && (
                  <div className={`absolute left-0 top-full rounded-b-xl border border-gray-200 bg-white p-3 shadow-2xl ${section.columns === 2 ? 'w-[32rem]' : 'w-72'}`}>
                    <ul className={section.columns === 2 ? 'grid grid-cols-2 gap-x-2' : ''}>
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={close}
                            className="block truncate rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-salesforce-blue/10 hover:text-salesforce-blue"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {section.seeAll && (
                      <div className="mt-2 border-t border-gray-100 pt-2">
                        <Link
                          href={section.seeAll.href}
                          onClick={close}
                          className="block rounded-lg px-3 py-2 text-sm font-semibold text-salesforce-blue hover:bg-salesforce-blue/10"
                        >
                          {section.seeAll.label} &rarr;
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </header>

      {/*
        Spacer matching the header at rest. The header is fixed, so this is
        what holds the page down; because it never changes height, the row 1
        and row 3 collapse on scroll shifts nothing.
      */}
      <div aria-hidden="true" className="no-print relative h-[100px] lg:h-[148px]">
        {/* Watched by the observer above to decide when the header collapses. */}
        <div ref={sentinelRef} className="absolute left-0 top-0 h-20 w-px" />
      </div>

      {/* Slide-in drawer: the full site, at every width */}
      {drawerOpen && (
        <div className="no-print fixed inset-0 z-[80] lg:z-[80]">
          <button
            className="absolute inset-0 bg-gray-900/50"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="absolute left-0 top-0 flex h-full w-[88vw] max-w-sm flex-col bg-white shadow-2xl">
            <div className="flex h-[60px] flex-shrink-0 items-center justify-between border-b border-gray-100 px-4 py-2.5">
              <span className="text-lg font-bold text-salesforce-dark">
                Trailblaze{' '}<span className="text-salesforce-blue">Prep</span>
              </span>
              <button
                onClick={() => setDrawerOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4">
              <SiteSearch className="mb-4 md:hidden" />

              <Link
                href="/contact"
                onClick={close}
                className="mb-4 flex min-h-11 items-center justify-center rounded-lg bg-salesforce-blue px-4 text-sm font-semibold text-white shadow-sm hover:bg-salesforce-dark"
              >
                Contact Us
              </Link>

              {NAV_SECTIONS.map((section) => (
                <details key={section.label} className="border-b border-gray-100 py-1">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between py-2 font-semibold text-gray-900">
                    <span>{section.label}</span>
                    <ChevronDown className="h-4 w-4 opacity-70" aria-hidden="true" />
                  </summary>
                  <ul className="pb-2 pl-3">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={close}
                          className="flex min-h-11 items-center text-sm text-gray-600 hover:text-salesforce-blue"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    {section.seeAll && (
                      <li>
                        <Link
                          href={section.seeAll.href}
                          onClick={close}
                          className="flex min-h-11 items-center text-sm font-semibold text-salesforce-blue"
                        >
                          {section.seeAll.label} &rarr;
                        </Link>
                      </li>
                    )}
                  </ul>
                </details>
              ))}

              <p className="mt-5 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Browse every certification
              </p>
              {CERTIFICATION_CATEGORIES.map((category) => (
                <details key={category.slug} className="py-1">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between py-2 font-medium text-gray-700">
                    <span>{category.name}</span>
                    <ChevronDown className="h-4 w-4 opacity-70" aria-hidden="true" />
                  </summary>
                  <ul className="max-h-60 overflow-y-auto pl-3">
                    <li>
                      <Link
                        href={`/certifications/role/${category.slug}`}
                        onClick={close}
                        className="flex min-h-11 items-center text-sm font-semibold text-salesforce-blue"
                      >
                        All {category.name} certifications
                      </Link>
                    </li>
                    {category.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={close}
                          className="flex min-h-11 items-center text-sm text-gray-600 hover:text-salesforce-blue"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

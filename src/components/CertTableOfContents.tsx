'use client'

import { useEffect, useState } from 'react'

interface CertTableOfContentsProps {
  sections: Array<{ id: string; title: string }>
  /**
   * True when the page renders CertPageFaq (the dumps comparison, then the
   * FAQ) above Related Certifications, as the shared associate template does.
   * The five bespoke bodies render it below, so they leave this false.
   */
  faqAboveRelated?: boolean
}

/**
 * Puts the tail of the list into the order the page actually renders it.
 *
 * Two things were out of step. No page's tocSections data listed the
 * practice-vs-dumps section, so its jump link was missing sitewide; and the
 * shared associate template lists Related Certifications before the FAQ while
 * rendering it after, which left the scroll-spy highlighting the wrong entry.
 * Both are fixed here rather than across 90 JSON files.
 *
 * The dumps comparison and the FAQ always render together, in that order,
 * because one component emits both. What differs between the two page
 * families is whether that pair sits above or below Related Certifications,
 * and only the page knows which, so it says so via `faqAboveRelated`. An
 * earlier version inferred it from whether the TOC had a FAQ entry, which was
 * wrong for retired credentials: their FAQ entry is filtered out upstream
 * while the page still uses the associate layout.
 */
function withOrderedTail(
  sections: Array<{ id: string; title: string }>,
  faqAboveRelated: boolean,
) {
  if (sections.length === 0) return sections
  const dumps = sections.find((s) => s.id === 'practice-vs-dumps') ?? {
    id: 'practice-vs-dumps',
    title: 'Practice vs Dumps',
  }
  const faq = sections.find((s) => s.id === 'faq')
  const related = sections.find((s) => s.id === 'related-certs')
  const head = sections.filter(
    (s) => !['practice-vs-dumps', 'faq', 'related-certs'].includes(s.id),
  )
  const pair = [dumps, ...(faq ? [faq] : [])]
  return faqAboveRelated
    ? [...head, ...pair, ...(related ? [related] : [])]
    : [...head, ...(related ? [related] : []), ...pair]
}

export default function CertTableOfContents({
  sections: rawSections,
  faqAboveRelated = false,
}: CertTableOfContentsProps) {
  const sections = withOrderedTail(rawSections, faqAboveRelated)
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sections])

  if (sections.length === 0) return null

  return (
    <div className="lg:sticky lg:top-24">
      <nav className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm" aria-label="Table of contents">
        <p className="mb-3 font-semibold text-gray-900">Table of Contents</p>
        <ul className="space-y-2">
          {sections.map((section) => {
            const isActive = section.id === activeId
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={
                    isActive
                      ? 'block rounded-lg border-l-2 border-salesforce-blue bg-salesforce-blue/5 px-3 py-2 text-sm font-medium text-salesforce-blue'
                      : 'block rounded-lg border-l-2 border-transparent px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-salesforce-blue'
                  }
                >
                  {section.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

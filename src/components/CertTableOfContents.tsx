'use client'

import { useEffect, useState } from 'react'

interface CertTableOfContentsProps {
  sections: Array<{ id: string; title: string }>
}

/**
 * Every certification page renders the practice-vs-dumps section just above
 * its FAQ, but no page's tocSections data listed it, so the jump link was
 * missing sitewide. Inserting it here, immediately before the FAQ entry,
 * keeps the one list in document order without editing 90 JSON files, and
 * means a page added later cannot forget it. Retired and unverified
 * credentials have their "Exam FAQs" entry filtered out upstream but still
 * render both sections, so there the entry goes last rather than being
 * dropped.
 */
function withDumpsSection(sections: Array<{ id: string; title: string }>) {
  if (sections.length === 0 || sections.some((s) => s.id === 'practice-vs-dumps')) return sections
  const entry = { id: 'practice-vs-dumps', title: 'Practice vs Dumps' }
  const faqIndex = sections.findIndex((s) => s.id === 'faq')
  if (faqIndex === -1) return [...sections, entry]
  return [...sections.slice(0, faqIndex), entry, ...sections.slice(faqIndex)]
}

export default function CertTableOfContents({ sections: rawSections }: CertTableOfContentsProps) {
  const sections = withDumpsSection(rawSections)
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

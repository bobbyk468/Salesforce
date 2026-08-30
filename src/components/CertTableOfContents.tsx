'use client'

import { useEffect, useState } from 'react'

interface CertTableOfContentsProps {
  sections: Array<{ id: string; title: string }>
}

export default function CertTableOfContents({ sections }: CertTableOfContentsProps) {
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

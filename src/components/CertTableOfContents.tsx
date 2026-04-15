'use client'

import { useState, useEffect, useRef } from 'react'
import { List, ChevronDown, ChevronUp } from 'lucide-react'

interface CertTableOfContentsProps {
  sections: Array<{ id: string; title: string }>
}

export default function CertTableOfContents({ sections }: CertTableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current !== null) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        const scrollPosition = window.scrollY + 100
        let next: string = ''
        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i].id)
          if (element && element.offsetTop <= scrollPosition) {
            next = sections[i].id
            break
          }
        }
        // Defer setState to next frame to avoid forced reflow (read offsetTop then write)
        if (next) requestAnimationFrame(() => setActiveSection(next))
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [sections])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      // Defer scroll (write) to next frame to avoid forced reflow
      requestAnimationFrame(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      })
    }
  }

  if (sections.length === 0) return null

  return (
    <div className="lg:sticky lg:top-24">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors lg:hidden"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-2">
            <List className="h-5 w-5 text-salesforce-blue" />
            <span className="font-semibold text-gray-900">Table of Contents</span>
          </div>
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="p-4 border-b border-gray-100 lg:border-b-0">
            <div className="flex items-center gap-2 mb-3">
              <List className="h-5 w-5 text-salesforce-blue" />
              <span className="font-semibold text-gray-900">Table of Contents</span>
            </div>
          </div>
          <nav className="p-4 pt-0" aria-label="Table of contents">
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => {
                      scrollToSection(section.id)
                      setIsOpen(false)
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      activeSection === section.id
                        ? 'bg-salesforce-blue/10 text-salesforce-dark font-medium border-l-2 border-salesforce-blue'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-salesforce-blue'
                    }`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

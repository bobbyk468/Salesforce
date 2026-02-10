import { ReactNode } from 'react'
import CertTableOfContents from './CertTableOfContents'

interface CertificationPageLayoutProps {
  children: ReactNode
  showTableOfContents?: boolean
}

/**
 * Shared layout component for all certification pages.
 * Provides consistent grid layout with optional table of contents sidebar.
 */
export default function CertificationPageLayout({
  children,
  showTableOfContents = true,
}: CertificationPageLayoutProps) {
  const sections = [
    { id: 'exam-prep', title: 'Exam Prep Content' },
    { id: 'practice-questions', title: 'Practice Questions' },
    { id: 'more-questions', title: 'Get More Questions' },
    { id: 'related-certs', title: 'Related Certifications' },
  ]

  if (!showTableOfContents) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        {children}
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {children}
        </div>

        {/* Sidebar - Table of Contents */}
        <aside className="lg:col-span-1">
          <CertTableOfContents sections={sections} />
        </aside>
      </div>
    </div>
  )
}

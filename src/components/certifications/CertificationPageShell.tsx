import CertTableOfContents from '@/components/CertTableOfContents'
import type { ReactNode } from 'react'

interface CertificationPageShellProps {
  children: ReactNode
  tocSections: { id: string; title: string }[]
}

/**
 * Shared certification page shell consolidating layout duplication.
 * Provides the max-width wrapper, grid layout (main content + sidebar TOC),
 * and responsive breakpoints for all cert body templates.
 *
 * Before: Layout logic duplicated across AssociateTemplate, AppBuilderTemplate,
 *         AdministratorCertBody, Developer1CertBody.
 * After:  Single source of truth for outer shell structure.
 *
 * Benefits:
 * - Future layout changes (spacing, breakpoint, sidebar width) need only one update
 * - Consistent max-width and padding across all cert pages
 * - Easier to test and maintain
 */
export default function CertificationPageShell({
  children,
  tocSections,
}: CertificationPageShellProps) {
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">{children}</div>
        <aside className="lg:col-span-1">
          <CertTableOfContents sections={tocSections} />
        </aside>
      </div>
    </div>
  )
}

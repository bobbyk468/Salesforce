'use client'

import { useRef, useCallback } from 'react'
import { toPng } from 'html-to-image'
import { Download } from 'lucide-react'

interface RoadmapWithDownloadProps {
  children: React.ReactNode
  /** Filename for the downloaded PNG (e.g. "salesforce-admin-cert-roadmap.png"). */
  downloadFilename: string
}

export default function RoadmapWithDownload({ children, downloadFilename }: RoadmapWithDownloadProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleDownload = useCallback(() => {
    if (!ref.current) return
    toPng(ref.current, {
      cacheBust: true,
      pixelRatio: 2,
      backgroundColor: '#ffffff',
    })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = downloadFilename
        link.href = dataUrl
        link.click()
      })
      .catch((err) => console.error('Roadmap export failed:', err))
  }, [downloadFilename])

  return (
    <div className="my-8">
      <div ref={ref}>{children}</div>
      <p className="mt-3 flex items-center gap-2 text-sm text-gray-600">
        <button
          type="button"
          onClick={handleDownload}
          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors"
        >
          <Download className="h-4 w-4" aria-hidden />
          Download as PNG
        </button>
        <span className="text-gray-600">Save or share this roadmap.</span>
      </p>
    </div>
  )
}

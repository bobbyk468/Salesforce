'use client'

import { useEffect, useState } from 'react'

interface Props {
  note: string
}

// Detects India via the browser's IANA timezone.
// Renders nothing during SSR and for non-Indian users — zero impact on others.
export default function IndiaGstNote({ note }: Props) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
      setShow(tz === 'Asia/Kolkata')
    } catch {
      // Intl not available — skip silently
    }
  }, [])

  if (!show) return null

  return (
    <p className="mt-2 text-xs text-gray-500 flex items-start gap-1.5">
      <span className="shrink-0">🇮🇳</span>
      <span>{note}. Final amount confirmed at Webassessor checkout.</span>
    </p>
  )
}

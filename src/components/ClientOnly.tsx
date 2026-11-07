'use client'

import { useEffect, useState, type ReactNode } from 'react'

/**
 * Renders nothing until after the first client render.
 *
 * `dynamic(..., { ssr: false })` is supposed to be enough on its own: the
 * server emits nothing, so there should be nothing to mismatch. In practice
 * the lazy chunk can resolve before hydration finishes, and React's first
 * client render then produces markup the server HTML does not contain. That
 * is a hydration mismatch (minified error #418), and React responds by
 * discarding the hydrated tree — which took unrelated, correctly-rendered
 * parts of the page down with it.
 *
 * Gating on a state flag that can only become true in an effect makes the
 * first client render provably identical to the server's: nothing.
 */
export default function ClientOnly({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return <>{children}</>
}

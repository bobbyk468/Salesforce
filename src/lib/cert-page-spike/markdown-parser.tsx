import Link from 'next/link'
import type { ReactNode } from 'react'

/**
 * Lightweight markdown parser for cert content.
 * Supports: **bold**, *italic*, [link](url), and inline text.
 *
 * This replaces the custom JSON AST (IntroSegment[]) with markdown strings,
 * significantly reducing authoring friction while maintaining XSS safety.
 *
 * Examples:
 * "This is **important** for the exam."
 * "Learn more at [the docs](https://example.com)"
 * "Contact us at [support@example.com](mailto:support@example.com)"
 */

export type MarkdownSegment = {
  type: 'text' | 'strong' | 'em' | 'link' | 'mailto'
  text?: string
  href?: string
  label?: string
}

/**
 * Parse markdown string to AST segments.
 * Supports: **bold**, *italic*, [text](url), [text](mailto:email)
 */
export function parseMarkdown(input: string): MarkdownSegment[] {
  const segments: MarkdownSegment[] = []
  let pos = 0

  while (pos < input.length) {
    // Look for markdown patterns
    const boldMatch = input.substring(pos).match(/^\*\*([^\*]+)\*\*/)
    const italicMatch = input.substring(pos).match(/^\*([^\*]+)\*/)
    const linkMatch = input.substring(pos).match(/^\[([^\]]+)\]\(([^)]+)\)/)

    if (boldMatch) {
      segments.push({ type: 'strong', text: boldMatch[1] })
      pos += boldMatch[0].length
    } else if (italicMatch) {
      segments.push({ type: 'em', text: italicMatch[1] })
      pos += italicMatch[0].length
    } else if (linkMatch) {
      const [full, label, href] = linkMatch
      if (href.startsWith('mailto:')) {
        segments.push({ type: 'mailto', label, href })
      } else {
        segments.push({ type: 'link', label, href })
      }
      pos += full.length
    } else {
      // Regular text until next markdown pattern
      const nextPatternPos = Math.min(
        input.indexOf('**', pos) !== -1 ? input.indexOf('**', pos) : Infinity,
        input.indexOf('*', pos) !== -1 ? input.indexOf('*', pos) : Infinity,
        input.indexOf('[', pos) !== -1 ? input.indexOf('[', pos) : Infinity,
      )

      if (nextPatternPos === Infinity) {
        // No more patterns, consume rest
        const text = input.substring(pos)
        if (text) segments.push({ type: 'text', text })
        pos = input.length
      } else if (nextPatternPos === pos) {
        // Special char at current pos didn't form a valid pattern — consume it as plain text
        // to avoid infinite loop (e.g. lone * in "dw.* API" or unclosed brackets)
        const char = input[pos]
        const last = segments[segments.length - 1]
        if (last?.type === 'text') {
          last.text = (last.text ?? '') + char
        } else {
          segments.push({ type: 'text', text: char })
        }
        pos++
      } else {
        // Consume until next pattern
        const text = input.substring(pos, nextPatternPos)
        if (text) segments.push({ type: 'text', text })
        pos = nextPatternPos
      }
    }
  }

  return segments
}

/**
 * Render markdown segments to React elements.
 * Safe: only allows specific HTML elements, no arbitrary attributes.
 */
export function renderMarkdownSegments(segments: MarkdownSegment[]): ReactNode {
  return segments.map((s, i) => {
    switch (s.type) {
      case 'text':
        return <span key={i}>{s.text}</span>
      case 'strong':
        return <strong key={i}>{s.text}</strong>
      case 'em':
        return <em key={i}>{s.text}</em>
      case 'link':
        return (
          <Link key={i} href={s.href!} className="text-salesforce-blue font-medium hover:underline">
            {s.label}
          </Link>
        )
      case 'mailto':
        return (
          <a key={i} href={s.href!} className="text-salesforce-blue font-medium hover:underline">
            {s.label}
          </a>
        )
      default:
        return null
    }
  })
}

/**
 * Convenience function: parse markdown and render to React in one step.
 */
export function markdown(input: string): ReactNode {
  const segments = parseMarkdown(input)
  return renderMarkdownSegments(segments)
}

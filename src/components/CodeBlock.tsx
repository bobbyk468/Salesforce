'use client'

import { useState, Fragment } from 'react'

/** Small, dependency-free Apex/Java-style keyword set — enough to make exam code snippets scannable
 *  without pulling in a full syntax-highlighting library for a handful of code blocks. */
const KEYWORDS = new Set([
  'public', 'private', 'global', 'protected', 'static', 'final', 'void', 'class', 'interface',
  'extends', 'implements', 'trigger', 'on', 'insert', 'update', 'delete', 'undelete', 'upsert', 'merge',
  'if', 'else', 'for', 'while', 'do', 'return', 'new', 'this', 'super', 'try', 'catch', 'finally', 'throw',
  'true', 'false', 'null', 'instanceof', 'virtual', 'override', 'abstract', 'with', 'sharing', 'without',
])

function highlightLine(line: string, lineKey: number) {
  const commentIdx = line.indexOf('//')
  const codePart = commentIdx === -1 ? line : line.slice(0, commentIdx)
  const commentPart = commentIdx === -1 ? '' : line.slice(commentIdx)

  const segments: { text: string; type: 'code' | 'string' }[] = []
  const stringRe = /'[^']*'/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = stringRe.exec(codePart))) {
    segments.push({ text: codePart.slice(lastIndex, match.index), type: 'code' })
    segments.push({ text: match[0], type: 'string' })
    lastIndex = match.index + match[0].length
  }
  segments.push({ text: codePart.slice(lastIndex), type: 'code' })

  return (
    <Fragment key={lineKey}>
      {segments.map((seg, i) => {
        if (seg.type === 'string') {
          return (
            <span key={i} className="text-emerald-400">
              {seg.text}
            </span>
          )
        }
        const parts = seg.text.split(/(\b[A-Za-z_][A-Za-z0-9_]*\b)/g)
        return (
          <Fragment key={i}>
            {parts.map((p, j) =>
              KEYWORDS.has(p) ? (
                <span key={j} className="text-sky-400 font-medium">
                  {p}
                </span>
              ) : (
                <Fragment key={j}>{p}</Fragment>
              ),
            )}
          </Fragment>
        )
      })}
      {commentPart && <span className="text-gray-500">{commentPart}</span>}
    </Fragment>
  )
}

export default function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)
  const lines = code.split('\n')

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — button simply won't confirm.
    }
  }

  return (
    <div className="relative group">
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy code"
        className="absolute top-2 right-2 z-10 rounded-md bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-300 opacity-100 transition-opacity hover:bg-gray-700 hover:text-white sm:opacity-0 sm:group-hover:opacity-100"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 text-xs overflow-x-auto leading-relaxed">
        <code>
          {lines.map((line, i) => (
            <div key={i}>{line ? highlightLine(line, i) : ' '}</div>
          ))}
        </code>
      </pre>
    </div>
  )
}

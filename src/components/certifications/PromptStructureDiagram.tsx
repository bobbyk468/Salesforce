/**
 * System vs. user vs. assistant message structure for Claude Certified Associate:
 * shows how a request is assembled and why role separation matters for consistent behavior.
 */
export default function PromptStructureDiagram() {
  return (
    <figure
      id="prompt-structure-overview"
      className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24"
    >
      <figcaption className="text-base font-semibold text-gray-900 mb-1">
        Prompt structure: system, user, and assistant roles (exam mental model)
      </figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        The <strong>system prompt</strong> sets persistent instructions, tone, and constraints for every request. The{' '}
        <strong>user message</strong> is the specific task or question. Claude's <strong>assistant response</strong>{' '}
        is generated within those system-level boundaries — this is why a well-structured system prompt produces
        more consistent output than repeating instructions in every user message.
      </p>
      <svg
        role="img"
        aria-labelledby="prompt-structure-diagram-title"
        className="w-full max-w-4xl mx-auto h-auto"
        style={{ fontSize: '11px' }}
        viewBox="0 0 700 260"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="prompt-structure-diagram-title">
          Diagram: system prompt sets persistent rules, user message provides the specific task, assistant response
          is generated within the system boundaries
        </title>
        <defs>
          <linearGradient id="psBox" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
        </defs>

        <rect x="16" y="16" width="668" height="228" rx="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 4" />
        <text x="36" y="36" fill="#475569" fontWeight="600">One API request</text>

        <rect x="36" y="52" width="628" height="72" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="56" y="74" fill="#0f172a" fontWeight="600">System Prompt (persists across every request)</text>
        <text x="56" y="92" fill="#334155">Role definition · output format/schema · constraints &amp; guardrails ·</text>
        <text x="56" y="108" fill="#334155">escalation rules</text>

        <rect x="36" y="136" width="628" height="52" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="56" y="158" fill="#0f172a" fontWeight="600">User Message (changes every request)</text>
        <text x="56" y="176" fill="#334155">The specific task, question, or data for this turn</text>

        <path d="M 350 188 L 350 208" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#psArrow)" />
        <defs>
          <marker id="psArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" />
          </marker>
        </defs>

        <rect x="36" y="212" width="628" height="24" rx="6" fill="url(#psBox)" stroke="#64748b" strokeWidth="1.5" />
        <text x="350" y="228" textAnchor="middle" fill="#1e293b" fontWeight="600">
          Assistant Response — generated within system-prompt boundaries
        </text>
      </svg>
    </figure>
  )
}

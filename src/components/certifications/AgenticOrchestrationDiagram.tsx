/**
 * Multi-agent orchestration loop for Claude Certified Architect - Professional:
 * coordinator dispatches to subagents, evaluates/verifies output, and escalates
 * or retries on failure. Matches the exam's production-architecture scenarios.
 */
export default function AgenticOrchestrationDiagram() {
  return (
    <figure
      id="agentic-orchestration-overview"
      className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24"
    >
      <figcaption className="text-base font-semibold text-gray-900 mb-1">
        Multi-agent orchestration loop (exam mental model)
      </figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        A <strong>coordinator</strong> agent decomposes a task and dispatches it to specialized{' '}
        <strong>subagents</strong>. Each subagent's output is <strong>evaluated</strong> against defined criteria —
        on success it's returned to the coordinator; on failure the system <strong>retries with a narrower scope</strong>{' '}
        or <strong>escalates to a human</strong> rather than looping indefinitely.
      </p>
      <svg
        role="img"
        aria-labelledby="orchestration-diagram-title"
        className="w-full max-w-4xl mx-auto h-auto"
        style={{ fontSize: '11px' }}
        viewBox="0 0 760 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="orchestration-diagram-title">
          Diagram: coordinator agent dispatches to subagents, evaluates output, and either returns success, retries
          with narrower scope, or escalates to a human
        </title>
        <defs>
          <linearGradient id="aoBox" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <marker id="aoArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" />
          </marker>
        </defs>

        <rect x="300" y="16" width="160" height="64" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="380" y="40" textAnchor="middle" fill="#0f172a" fontWeight="600">Coordinator</text>
        <text x="380" y="58" textAnchor="middle" fill="#334155">Decomposes task,</text>
        <text x="380" y="72" textAnchor="middle" fill="#334155">dispatches subtasks</text>

        <path d="M 340 80 L 156 128" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#aoArrow)" />
        <path d="M 380 80 L 380 128" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#aoArrow)" />
        <path d="M 420 80 L 604 128" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#aoArrow)" />

        <rect x="60" y="136" width="140" height="56" rx="8" fill="url(#aoBox)" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="130" y="158" textAnchor="middle" fill="#1e293b" fontWeight="600">Subagent A</text>
        <text x="130" y="176" textAnchor="middle" fill="#475569">e.g. research</text>

        <rect x="310" y="136" width="140" height="56" rx="8" fill="url(#aoBox)" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="380" y="158" textAnchor="middle" fill="#1e293b" fontWeight="600">Subagent B</text>
        <text x="380" y="176" textAnchor="middle" fill="#475569">e.g. drafting</text>

        <rect x="560" y="136" width="140" height="56" rx="8" fill="url(#aoBox)" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="630" y="158" textAnchor="middle" fill="#1e293b" fontWeight="600">Subagent C</text>
        <text x="630" y="176" textAnchor="middle" fill="#475569">e.g. risk check</text>

        <path d="M 130 192 L 300 232" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#aoArrow)" />
        <path d="M 380 192 L 380 224" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#aoArrow)" />
        <path d="M 630 192 L 460 232" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#aoArrow)" />

        <rect x="300" y="232" width="160" height="60" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="380" y="256" textAnchor="middle" fill="#0f172a" fontWeight="600">Evaluate Output</text>
        <text x="380" y="274" textAnchor="middle" fill="#334155">Confidence score,</text>
        <text x="380" y="286" textAnchor="middle" fill="#334155">defined criteria</text>

        <path
          d="M 300 254 Q 240 250 200 180"
          stroke="#dc2626"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
          markerEnd="url(#aoArrow)"
        />
        <text x="205" y="220" textAnchor="middle" fill="#dc2626" fontSize="10">retry, narrower scope</text>

        <path
          d="M 460 254 Q 560 260 640 300"
          stroke="#dc2626"
          strokeWidth="1.5"
          markerEnd="url(#aoArrow)"
        />
        <rect x="600" y="296" width="140" height="20" rx="4" fill="#fee2e2" stroke="#dc2626" strokeWidth="1" />
        <text x="670" y="310" textAnchor="middle" fill="#7f1d1d" fontSize="10">escalate to human</text>
      </svg>
    </figure>
  )
}

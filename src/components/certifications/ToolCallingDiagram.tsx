/**
 * Tool/function calling request-response cycle for Claude Certified Developer:
 * tool definition -> model requests tool_use -> app executes -> tool_result returned -> final answer.
 */
export default function ToolCallingDiagram() {
  return (
    <figure
      id="tool-calling-overview"
      className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24"
    >
      <figcaption className="text-base font-semibold text-gray-900 mb-1">
        Tool calling cycle: from definition to final answer (exam mental model)
      </figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        You define a tool with a JSON schema. Claude decides mid-conversation whether to call it, returning a{' '}
        <strong>tool_use</strong> block with the tool name and inputs. Your application executes the real function
        and sends the result back as a <strong>tool_result</strong> block. Claude then incorporates that data into
        its final response.
      </p>
      <svg
        role="img"
        aria-labelledby="tool-calling-diagram-title"
        className="w-full max-w-4xl mx-auto h-auto"
        style={{ fontSize: '11px' }}
        viewBox="0 0 760 260"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="tool-calling-diagram-title">
          Diagram: tool definition sent with request, Claude returns tool_use block, application executes function
          and sends tool_result, Claude returns final answer
        </title>
        <defs>
          <linearGradient id="tcBox" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <marker id="tcArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" />
          </marker>
        </defs>

        <rect x="16" y="16" width="150" height="72" rx="8" fill="url(#tcBox)" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="91" y="40" textAnchor="middle" fill="#1e293b" fontWeight="600">Your App</text>
        <text x="91" y="58" textAnchor="middle" fill="#475569">Sends message +</text>
        <text x="91" y="74" textAnchor="middle" fill="#475569">tool schema (JSON)</text>

        <path d="M 166 52 L 198 52" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#tcArrow)" />
        <rect x="206" y="16" width="150" height="72" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="281" y="40" textAnchor="middle" fill="#0f172a" fontWeight="600">Claude</text>
        <text x="281" y="58" textAnchor="middle" fill="#334155">Decides to call</text>
        <text x="281" y="74" textAnchor="middle" fill="#334155">the tool</text>

        <path d="M 356 52 L 388 52" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#tcArrow)" />
        <rect x="396" y="16" width="170" height="72" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="481" y="40" textAnchor="middle" fill="#0f172a" fontWeight="600">tool_use block</text>
        <text x="481" y="58" textAnchor="middle" fill="#334155">{'{ name, input }'}</text>
        <text x="481" y="74" textAnchor="middle" fill="#334155">returned to your app</text>

        <path d="M 481 88 L 481 120" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#tcArrow)" />
        <rect x="396" y="128" width="170" height="64" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="481" y="150" textAnchor="middle" fill="#0f172a" fontWeight="600">Execute Function</text>
        <text x="481" y="168" textAnchor="middle" fill="#334155">Your app runs the</text>
        <text x="481" y="182" textAnchor="middle" fill="#334155">real lookup/action</text>

        <path d="M 396 160 L 236 160" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#tcArrow)" />
        <rect x="66" y="128" width="170" height="64" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
        <text x="151" y="150" textAnchor="middle" fill="#0f172a" fontWeight="600">tool_result block</text>
        <text x="151" y="168" textAnchor="middle" fill="#334155">Sent back with the</text>
        <text x="151" y="182" textAnchor="middle" fill="#334155">function's real output</text>

        <path d="M 151 192 L 151 216" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#tcArrow)" />
        <rect x="16" y="216" width="330" height="36" rx="8" fill="url(#tcBox)" stroke="#64748b" strokeWidth="1.5" />
        <text x="181" y="238" textAnchor="middle" fill="#1e293b" fontWeight="600">
          Claude incorporates result into final response
        </text>
      </svg>
    </figure>
  )
}

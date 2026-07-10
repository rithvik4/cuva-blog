import { Database, ArrowRight, Brain, Bot, Workflow, Shield } from "lucide-react"

export function RagRelationship() {
  return (
    <section className="py-20 bg-[#0F0D1A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 text-center">
          Relationship to Other Platform Components
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          RAG ensures intelligence across the platform is contextual and trustworthy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <Database className="h-8 w-8 text-[#80E9FF] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Knowledge Systems</h3>
            <p className="text-sm text-gray-400">Provide retrieval and structure</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <Bot className="h-8 w-8 text-[#80E9FF] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Knowledge Assistant & CuvaBot</h3>
            <p className="text-sm text-gray-400">Consume grounded responses</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <Workflow className="h-8 w-8 text-[#80E9FF] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">AI Agents & Workflows</h3>
            <p className="text-sm text-gray-400">Act on retrieved context</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <Shield className="h-8 w-8 text-[#80E9FF] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Operating Fabric</h3>
            <p className="text-sm text-gray-400">Enforces governance, security, and audit controls</p>
          </div>
        </div>

        {/* Visual Flow */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 text-white">
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
            <Database className="h-5 w-5 text-[#80E9FF]" />
            <span className="text-sm font-medium">Knowledge Systems</span>
          </div>
          <ArrowRight className="h-5 w-5 text-[#80E9FF] rotate-90 md:rotate-0" />
          <div className="flex items-center gap-2 bg-gradient-to-r from-[#593BEE] to-[#80E9FF] px-4 py-2 rounded-lg">
            <Brain className="h-5 w-5" />
            <span className="text-sm font-bold">RAG</span>
          </div>
          <ArrowRight className="h-5 w-5 text-[#80E9FF] rotate-90 md:rotate-0" />
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
            <span className="text-sm font-medium">Assistants / Agents / Workflows</span>
          </div>
        </div>
      </div>
    </section>
  )
}

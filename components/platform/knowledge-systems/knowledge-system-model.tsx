import { Database, Network, Sparkles, ArrowRight } from "lucide-react"

export function KnowledgeSystemModel() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0F0D1A] mb-4">The Knowledge System Model</h2>
          <p className="text-lg text-[#3D3D4E] max-w-3xl mx-auto">
            Cuva Knowledge Systems combine three core capabilities into a single operating model.
          </p>
        </div>

        {/* Diagram */}
        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Knowledge Assistant */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#E5FAFE] border border-[#80E9FF]/30">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#593BEE] text-white mb-4">
                <Database className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-[#0F0D1A] mb-2">Knowledge Assistant</h3>
              <p className="text-sm text-[#3D3D4E]">Provides structured information and conversational access</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="w-16 h-[2px] bg-gradient-to-r from-[#593BEE] to-[#80E9FF]" />
                <ArrowRight className="h-5 w-5 text-[#593BEE]" />
              </div>
            </div>

            {/* Knowledge Search */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#E5FAFE] border border-[#80E9FF]/30">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#593BEE] text-white mb-4">
                <Network className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-[#0F0D1A] mb-2">Knowledge Search</h3>
              <p className="text-sm text-[#3D3D4E]">Captures relationships between entities, documents, and data</p>
            </div>
          </div>

          {/* Center connector and RAG */}
          <div className="flex flex-col items-center mt-8">
            <div className="w-[2px] h-8 bg-gradient-to-b from-[#593BEE] to-[#80E9FF]" />
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#593BEE] text-white max-w-md">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-[#593BEE] mb-4">
                <Sparkles className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold mb-2">RAG</h3>
              <p className="text-sm text-white/80">Grounds AI reasoning and execution in relevant enterprise context</p>
            </div>
          </div>

          {/* Result */}
          <div className="flex flex-col items-center mt-8">
            <div className="w-[2px] h-8 bg-gradient-to-b from-[#80E9FF] to-[#593BEE]" />
            <div className="px-8 py-4 rounded-full bg-[#0F0D1A] text-white font-medium">
              Accuracy, Relevance, and Traceability
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

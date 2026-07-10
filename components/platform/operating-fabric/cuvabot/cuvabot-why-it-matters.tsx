import { Database, ArrowRight, Bot, GitBranch } from "lucide-react"

export function CuvabotWhyItMatters() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">Relationship Overview</h2>
          <p className="text-lg text-[#3D3D4E] max-w-2xl mx-auto">
            CuvaBot connects Knowledge Systems to action through a unified conversational layer.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {/* Knowledge Systems */}
            <div className="bg-[#F4F4F7] border border-gray-200 rounded-xl p-6 text-center min-w-[180px]">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-[#E5FAFE] flex items-center justify-center">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-serif font-bold text-[#0F0D1A]">Knowledge Systems</h4>
              <p className="text-xs text-[#9090A7] mt-1">Context & retrieval</p>
            </div>

            <ArrowRight className="w-6 h-6 text-primary rotate-90 md:rotate-0 flex-shrink-0" />

            {/* RAG */}
            <div className="bg-[#F4F4F7] border border-gray-200 rounded-xl p-6 text-center min-w-[180px]">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-[#E5FAFE] flex items-center justify-center">
                <span className="text-primary font-bold text-sm">RAG</span>
              </div>
              <h4 className="font-serif font-bold text-[#0F0D1A]">RAG</h4>
              <p className="text-xs text-[#9090A7] mt-1">Grounded responses</p>
            </div>

            <ArrowRight className="w-6 h-6 text-primary rotate-90 md:rotate-0 flex-shrink-0" />

            {/* Outputs */}
            <div className="bg-primary rounded-xl p-6 text-center min-w-[200px]">
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-white">
                  <Bot className="w-5 h-5" />
                  <span className="font-medium">Assistants</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-white">
                  <Bot className="w-5 h-5" />
                  <span className="font-medium">Agents</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-white">
                  <GitBranch className="w-5 h-5" />
                  <span className="font-medium">Workflows</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

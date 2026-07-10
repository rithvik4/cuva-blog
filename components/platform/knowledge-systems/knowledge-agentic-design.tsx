import { Bot, RefreshCw, TrendingUp } from "lucide-react"

export function KnowledgeAgenticDesign() {
  return (
    <section className="bg-[#F4F4F7] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0F0D1A] mb-6">Agentic by Design</h2>
            <p className="text-lg text-[#3D3D4E] leading-relaxed mb-6">
              Knowledge Systems in Cuva are built and maintained by AI agents. Agents perform ETL, extraction,
              classification, linking, and continuous updates, ensuring knowledge stays current as enterprise data
              evolves.
            </p>
            <p className="text-lg text-[#3D3D4E] leading-relaxed">
              This agentic approach enables Knowledge Systems to improve over time without manual maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-neutral-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#E5FAFE] mb-4">
                <Bot className="h-6 w-6 text-[#593BEE]" />
              </div>
              <h3 className="text-sm font-bold text-[#0F0D1A]">Agent-Driven</h3>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-neutral-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#E5FAFE] mb-4">
                <RefreshCw className="h-6 w-6 text-[#593BEE]" />
              </div>
              <h3 className="text-sm font-bold text-[#0F0D1A]">Continuous Updates</h3>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-neutral-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#E5FAFE] mb-4">
                <TrendingUp className="h-6 w-6 text-[#593BEE]" />
              </div>
              <h3 className="text-sm font-bold text-[#0F0D1A]">Self-Improving</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

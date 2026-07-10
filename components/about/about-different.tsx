import { Layers, Brain, Shield } from "lucide-react"

export function AboutDifferent() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-[#0F0D1A] sm:text-4xl mb-6">How We Are Different</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Most AI companies focus on individual capabilities or tools. Cuva is built as a unified system that brings
            together AI agents, enterprise knowledge, and a governed operating layer.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-lg bg-[#E5FAFE] flex items-center justify-center mb-6">
              <Brain className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-3">AI Agents</h3>
            <p className="text-muted-foreground leading-relaxed">
              Purpose-built agents that understand financial workflows and can execute complex multi-step tasks
              autonomously.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-lg bg-[#E5FAFE] flex items-center justify-center mb-6">
              <Layers className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-3">Enterprise Knowledge</h3>
            <p className="text-muted-foreground leading-relaxed">
              Deep integration with your institutional knowledge, documents, and data sources for context-aware
              intelligence.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-lg bg-[#E5FAFE] flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-3">Governed Operating Layer</h3>
            <p className="text-muted-foreground leading-relaxed">
              Built-in governance from the start, ensuring reliability, auditability, and compliance across all AI
              operations.
            </p>
          </div>
        </div>
        <p className="text-center text-lg text-muted-foreground mt-12 max-w-3xl mx-auto">
          This approach allows financial institutions to deploy reliable, end-to-end AI grounded in enterprise context,
          with governance built in from the start rather than added later.
        </p>
      </div>
    </section>
  )
}

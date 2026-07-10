import { MessageSquare, FileText, Play } from "lucide-react"

export function CuvabotDefinition() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            A Conversational Layer Within the Operating Fabric
          </h2>
          <p className="text-lg text-[#3D3D4E] max-w-3xl mx-auto">
            CuvaBot operates within the Operating Fabric, inheriting its control, permissions, and orchestration to turn
            questions into governed actions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            <div className="w-14 h-14 mb-4 rounded-lg bg-[#E5FAFE] flex items-center justify-center">
              <MessageSquare className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-3">Chat with the Knowledge Systems</h3>
            <p className="text-[#3D3D4E]">
              Ask questions against the Knowledge Base, Knowledge Graph, and RAG to get grounded, permission-aware
              answers with source references.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            <div className="w-14 h-14 mb-4 rounded-lg bg-[#E5FAFE] flex items-center justify-center">
              <FileText className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-3">Enterprise Search</h3>
            <p className="text-[#3D3D4E]">
              Unified search across connected systems with semantic understanding and permissions awareness.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            <div className="w-14 h-14 mb-4 rounded-lg bg-[#E5FAFE] flex items-center justify-center">
              <Play className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-3">Workflow Execution by Command</h3>
            <p className="text-[#3D3D4E]">
              Launch multi-step workflows through natural language, without switching tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

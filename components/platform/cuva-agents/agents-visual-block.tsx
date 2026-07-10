import Image from "next/image"

export function AgentsVisualBlock() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/multi-agent-workflow-diagram-showing-ai-agents-col.jpg"
              alt="Multi-agent workflow diagram"
              width={1000}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-[#9090A7] mt-6 text-lg">
            Agents collaborate to complete complex financial tasks end to end.
          </p>
        </div>
      </div>
    </section>
  )
}

export function OrchestrationVisualBlock() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#593BEE]/10 to-[#80E9FF]/10 rounded-2xl blur-xl" />
            <img
              src="/multi-agent-orchestration-workflow-diagram-showing.jpg"
              alt="Agent Orchestration Workflow"
              className="relative rounded-2xl shadow-xl w-full"
            />
          </div>
          <p className="text-center text-[#9090A7] mt-6 text-sm">
            Coordinate multiple agents to execute complex financial workflows with full visibility.
          </p>
        </div>
      </div>
    </section>
  )
}

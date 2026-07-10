import { Button } from "@/components/ui/button"
import { ArrowRight, Wrench, GitBranch } from "lucide-react"
import Link from "next/link"

export function AgentsBuildRun() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            Build and Run Agentic Automation
          </h2>
          <p className="text-lg text-[#3D3D4E]">
            Build, configure, and deploy complex multi-agent workflows that automate enterprise operations at scale.
            This capability spans the full lifecycle of agentic automation, from designing and configuring agents to
            coordinating multiple agents across long-running, end-to-end workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Agent Studio */}
          <div className="bg-[#F4F4F7] rounded-2xl p-8 border border-gray-100">
            <div className="w-14 h-14 rounded-xl bg-[#E8E4FD] flex items-center justify-center mb-6">
              <Wrench className="w-7 h-7 text-[#593BEE]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#0F0D1A] mb-4">Agent Studio</h3>
            <p className="text-[#3D3D4E] leading-relaxed mb-6">
              Design complex agentic workflows using an intuitive, visual studio that allows teams to build, configure,
              and test agents through simple drag-and-drop composition.
            </p>
            <Button
              variant="outline"
              className="border-[#593BEE] text-[#593BEE] hover:bg-[#593BEE] hover:text-white bg-transparent"
              asChild
            >
              <Link href="/platform/cuva-agents/agent-studio">
                Explore Agent Studio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Multi-Agent Workflows */}
          <div className="bg-[#F4F4F7] rounded-2xl p-8 border border-gray-100">
            <div className="w-14 h-14 rounded-xl bg-[#E8E4FD] flex items-center justify-center mb-6">
              <GitBranch className="w-7 h-7 text-[#593BEE]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#0F0D1A] mb-4">Multi-Agent Workflows</h3>
            <p className="text-[#3D3D4E] leading-relaxed mb-6">
              Coordinate and deploy multiple agents as cohesive workflows that execute end-to-end processes, handle
              exceptions, and operate reliably at enterprise scale.
            </p>
            <Button
              variant="outline"
              className="border-[#593BEE] text-[#593BEE] hover:bg-[#593BEE] hover:text-white bg-transparent"
              asChild
            >
              <Link href="/platform/cuva-agents/multi-agent-workflows">
                See Multi-Agent Workflows
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

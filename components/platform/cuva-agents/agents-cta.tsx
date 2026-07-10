import { Button } from "@/components/ui/button"
import { Wrench, GitBranch, Calendar } from "lucide-react"
import Link from "next/link"

export function AgentsCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#593BEE] to-[#3B1FBF]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-12">
          Ready to explore agentic automation?
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-white text-[#593BEE] hover:bg-gray-100" asChild>
            <Link href="/demo">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Demo
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 bg-transparent"
            asChild
          >
            <Link href="/platform/cuva-agents/agent-studio">
              <Wrench className="mr-2 h-5 w-5" />
              Explore Agent Studio
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 bg-transparent"
            asChild
          >
            <Link href="/platform/cuva-agents/multi-agent-workflows">
              <GitBranch className="mr-2 h-5 w-5" />
              See Multi-Agent Workflows
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

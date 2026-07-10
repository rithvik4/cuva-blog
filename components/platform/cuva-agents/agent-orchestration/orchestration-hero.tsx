import { Button } from "@/components/ui/button"
import Link from "next/link"

export function OrchestrationHero() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left content - 7 columns */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F0D1A] leading-tight mb-4">
            Multi-Agent Workflows
          </h1>
          <p className="text-xl md:text-2xl text-[#593BEE] font-medium mb-6">
            Multi-agent workflows for automating complex enterprise operations
          </p>
          <p className="text-lg md:text-xl text-[#3D3D4E] leading-relaxed max-w-3xl mx-auto mb-8">
            Execute workflows with branching logic, complex decisions, and controlled agent behavior.
          </p>
          <Button asChild size="lg" className="bg-[#593BEE] hover:bg-[#593BEE]/90 text-white">
            <Link href="/demo">Book a Demo</Link>
          </Button>
        </div>

        {/* Right visual - 5 columns */}
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#593BEE]/20 to-[#80E9FF]/20 rounded-2xl blur-2xl" />
            <img
              src="/multi-agent-orchestration-dashboard-with-connected.jpg"
              alt="Multi-Agent Workflows Dashboard"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

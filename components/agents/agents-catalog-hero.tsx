import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AgentsCatalogHero() {
  return (
    <section className="pt-12 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content - 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F0D1A] leading-tight">
              Our Agent Catalog
            </h1>
            <p className="text-xl text-[#3D3D4E] max-w-2xl leading-relaxed">
              Production-ready financial AI agents that act as blueprints for complex enterprise agents
            </p>
            <p className="text-lg text-[#9090A7] max-w-2xl leading-relaxed">
              The Cuva Agent Catalog is a curated set of enterprise-grade AI agents designed to run real financial
              operations. Each agent is purpose-built for a specific domain and delivered with the workflows, knowledge
              integrations, and governance needed to operate safely in production.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-[#593BEE] hover:bg-[#593BEE]/90 text-white" asChild>
                <Link href="#agents">
                  Explore Agents
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right visual - 5 columns */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#593BEE]/20 to-[#80E9FF]/20 rounded-2xl blur-2xl" />
              <img
                src="/ai-agent-catalog-grid-with-financial-icons-and-wor.jpg"
                alt="Agent Catalog"
                className="relative rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

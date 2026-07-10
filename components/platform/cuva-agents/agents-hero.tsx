import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AgentsHero() {
  return (
    <section className="pt-12 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content - 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F0D1A] leading-tight">
              Agentic Automation
            </h1>
            <p className="text-xl text-[#593BEE] font-medium">A new way to automate complex enterprise operations</p>
            <p className="text-lg text-[#3D3D4E] max-w-xl leading-relaxed">
              Cuva AI enables a new way to automate complex enterprise operations through agentic automation.
              Enterprises gain precise control over agent behavior, secure execution, and enterprise-grade governance,
              all grounded in enterprise context via Knowledge Systems, the Operating Fabric, and integrated connectors.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-[#593BEE] hover:bg-[#4a2fdc] text-white" asChild>
                <Link href="/demo">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right visual - 5 columns */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/multi-agent-ai-workflow-diagram-with-connected-nod.jpg"
                alt="Multi-agent workflow diagram"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

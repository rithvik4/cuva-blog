import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function StudioHero() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left column - 7 cols */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F0D1A] leading-tight">
            Agent Studio
          </h1>
          <p className="text-xl md:text-2xl text-[#593BEE] font-medium">
            Build and orchestrate powerful financial AI agents with ease
          </p>
          <p className="text-lg text-[#3D3D4E] max-w-xl leading-relaxed">
            A visual, no-code environment to design multi-step workflows, reasoning logic, and system actions tailored
            to your financial operations.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg" className="bg-[#593BEE] hover:bg-[#593BEE]/90 text-white">
              <Link href="/demo">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Right column - 5 cols */}
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#593BEE]/20 to-[#80E9FF]/20 rounded-2xl blur-2xl" />
            <img
              src="/visual-workflow-builder-canvas-with-drag-and-drop-.jpg"
              alt="Agent Studio Workflow Builder"
              className="relative rounded-2xl shadow-2xl border border-gray-100 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function OperationsConsoleHero() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left column - Content */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F0D1A] leading-tight">
            Operations Console
          </h1>
          <p className="text-xl md:text-2xl text-[#3D3D4E] font-medium">
            The control plane for running, monitoring, and governing agentic workflows
          </p>
          <p className="text-lg text-[#3D3D4E] leading-relaxed max-w-2xl">
            The Operations Console is where teams operate the Cuva platform in production. It provides real-time
            visibility into workflow executions, agent behavior, decisions, logs, and outcomes so enterprises can run
            automation safely, reliably, and with full accountability.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg" className="bg-[#593BEE] hover:bg-[#593BEE]/90 text-white px-8 py-6 text-lg">
              <Link href="/demo">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Right column - Console UI Visual */}
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#80E9FF]/20 rounded-2xl blur-2xl" />
            <div className="relative bg-[#0F0D1A] rounded-xl shadow-2xl overflow-hidden border border-[#3D3D4E]/30">
              {/* Console Header */}
              <div className="bg-[#1a1a2e] px-4 py-3 border-b border-[#3D3D4E]/30 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-sm text-gray-400">Operations Console</span>
              </div>
              {/* Console Content */}
              <div className="p-4 space-y-3">
                {/* Run status items */}
                {[
                  { status: "success", name: "Invoice Processing", time: "2m ago" },
                  { status: "running", name: "KYC Verification", time: "Running..." },
                  { status: "success", name: "Portfolio Rebalance", time: "5m ago" },
                  { status: "failed", name: "Data Sync", time: "12m ago" },
                ].map((run, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#1a1a2e] rounded-lg p-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        run.status === "success"
                          ? "bg-green-500"
                          : run.status === "running"
                            ? "bg-[#80E9FF] animate-pulse"
                            : "bg-red-500"
                      }`}
                    />
                    <span className="text-white text-sm flex-1">{run.name}</span>
                    <span className="text-gray-500 text-xs">{run.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CuvabotHero() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left content - 7 columns */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F0D1A] leading-tight">
            CuvaBot
          </h1>
          <p className="text-xl md:text-2xl text-[#3D3D4E] font-medium">
            Chat, search, and run workflows across your financial enterprise.
          </p>
          <p className="text-lg text-[#9090A7] max-w-xl">
            CuvaBot is the conversational interface to the Cuva platform. Ask questions against Knowledge Systems,
            search across connected tools, and trigger multi-step agent workflows using natural language commands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/demo">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Right visual - 5 columns */}
        <div className="lg:col-span-5">
          <div className="relative">
            {/* Chat interface mockup */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Chat header */}
              <div className="bg-[#0F0D1A] px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium">CuvaBot</span>
              </div>
              {/* Chat messages */}
              <div className="p-4 space-y-4 bg-gray-50">
                <div className="flex justify-end">
                  <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-[80%]">
                    What's the current exposure to tech sector?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 max-w-[85%] space-y-2">
                    <p className="text-[#3D3D4E] text-sm">Based on current portfolio data:</p>
                    <p className="text-[#0F0D1A] font-medium">Tech sector exposure: 23.4%</p>
                    <div className="text-xs text-[#9090A7] flex items-center gap-1 pt-1 border-t border-gray-100 mt-2">
                      <span>Source: Portfolio Analytics</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Input area */}
              <div className="border-t border-gray-200 p-3">
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                  <span className="text-[#9090A7] text-sm">Ask CuvaBot...</span>
                </div>
              </div>
            </div>
            {/* Accent glow */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/30 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Library } from "lucide-react"

export function LibraryHero() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left column - 7 cols */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F0D1A] leading-tight text-balance">
            Agent Library
          </h1>
          <p className="text-xl text-[#3D3D4E] leading-relaxed max-w-xl">
            Prebuilt financial agents ready for instant deployment. A growing catalog of ready-made AI agents designed
            for onboarding, KYC, planning, payments, accounting, compliance, and more.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-[#593BEE] hover:bg-[#4a2fcc] text-white">
              Browse Agent Library
            </Button>
          </div>
        </div>

        {/* Right column - 5 cols */}
        <div className="lg:col-span-5 relative">
          <div className="relative bg-gradient-to-br from-[#F4F4F7] to-white rounded-xl p-8 shadow-lg border border-[#E5E5E5]">
            {/* Agent Grid Illustration */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "KYC", color: "#593BEE" },
                { name: "AML", color: "#80E9FF" },
                { name: "Tax", color: "#593BEE" },
                { name: "Recon", color: "#80E9FF" },
                { name: "Wealth", color: "#593BEE" },
                { name: "SCF", color: "#80E9FF" },
                { name: "Payroll", color: "#593BEE" },
                { name: "Report", color: "#80E9FF" },
                { name: "Audit", color: "#593BEE" },
              ].map((agent, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg flex items-center justify-center text-white text-xs font-semibold"
                  style={{ backgroundColor: agent.color }}
                >
                  {agent.name}
                </div>
              ))}
            </div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-[#E5FAFE] rounded-full flex items-center justify-center">
              <Library className="w-10 h-10 text-[#593BEE]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

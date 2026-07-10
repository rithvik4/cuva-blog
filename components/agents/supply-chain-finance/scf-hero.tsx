import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function SCFHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          width: "40%",
          height: "50%",
          background: "linear-gradient(135deg, rgba(89,59,238,0.5) 0%, rgba(128,233,255,0.5) 100%)",
          filter: "blur(60px)",
          borderRadius: "50%",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content - 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-4 py-1.5 bg-[#E5FAFE] text-primary font-semibold text-sm rounded-full">
              Supply Chain Finance Agent
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F0D1A] leading-tight">
              CuvaSCF: Our Premier Financial AI Agent
            </h1>
            <p className="text-lg text-[#3D3D4E] leading-relaxed max-w-2xl">
              The Supply Chain Finance Agent is designed to automate and orchestrate core SCF workflows across supplier
              onboarding, invoice validation, financing, payments, reporting, and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/demo">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/5 bg-transparent"
              >
                <Link href="/platform/cuva-agents">Explore Platform</Link>
              </Button>
            </div>
          </div>

          {/* Right visual - 5 columns */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <img
                src="/supply-chain-finance-workflow-dashboard-with-buyer.jpg"
                alt="Supply Chain Finance Agent Dashboard"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

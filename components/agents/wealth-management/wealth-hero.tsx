import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function WealthHero() {
  return (
    <section className="pt-12 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content - 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-4 py-1.5 bg-[#E5FAFE] text-primary font-semibold text-sm rounded-full">
              Wealth Management Agent
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F0D1A] leading-tight">
              CuvaWealth: Our Premier Financial AI Agent
            </h1>
            <p className="text-lg text-[#3D3D4E] leading-relaxed max-w-2xl">
              The Wealth Management Agent is a production-ready AI agent designed to support advisors and wealth firms
              across onboarding, planning, investment support, reporting, and compliance. It automates high-frequency
              workflows while preserving governance, auditability, and advisor control.
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
                src="/wealth-management-dashboard-with-client-portfolios.jpg"
                alt="Wealth Management Agent Dashboard"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

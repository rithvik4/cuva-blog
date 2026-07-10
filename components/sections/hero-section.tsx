import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left: Copy (7 columns) */}
          <div className="col-span-12 lg:col-span-7">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-[#0F0D1A] sm:text-5xl lg:text-6xl text-balance">
              AI Native Operating Platform for the <span className="text-primary">Financial Industry</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#3D3D4E] max-w-xl">
              A comprehensive AI-native operating platform combining financial connectors, agentic workflow automation,
              and enterprise operating fabric.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all"
              >
                <Link href="/demo">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/5 bg-transparent"
              >
                <Link href="/platform">Explore Platform</Link>
              </Button>
            </div>
          </div>

          {/* Right: Dashboard Visual (5 columns) */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative">
              {/* Accent glow effect */}
              <div className="absolute -inset-4 bg-[#80E9FF]/20 blur-3xl rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-white">
                <img
                  src="/images/homepage.png"
                  alt="Cuva AI Platform Dashboard"
                  className="w-full h-auto object-contain"
                  width={1080}
                  height={1024}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function KnowledgeAssistantHero() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="grid grid-cols-12 gap-8 items-center">
        {/* Left: Text */}
        <div className="col-span-12 lg:col-span-6">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Knowledge Systems</p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-[#0F0D1A] sm:text-5xl lg:text-[56px] lg:leading-[1.1] text-balance">
            Knowledge Assistant
          </h1>
          <p className="mt-4 text-xl font-medium text-primary">
            The enterprise knowledge base with a conversational access layer
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            The Knowledge Assistant is where enterprise knowledge is created, organized, and accessed. It combines a
            structured knowledge base with a conversational interface, allowing teams to build, maintain, and use
            institutional knowledge with clarity, permissions, and control.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
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
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="col-span-12 lg:col-span-6">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#80E9FF]/20 blur-3xl rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-white">
              <img
                src="/ai-chat-assistant-interface-with-financial-data-vi.jpg"
                alt="Knowledge Assistant Interface"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

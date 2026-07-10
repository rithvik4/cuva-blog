import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Database, Bot } from "lucide-react"

export function PlatformCtaFooter() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Start Exploring the Cuva Platform</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Discover how Cuva can transform your financial operations with AI-native capabilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="text-base">
              <Link href="/demo">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
              <Link href="/platform/knowledge-systems">
                <Database className="mr-2 h-4 w-4" />
                Explore Knowledge Systems
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
              <Link href="/platform/cuva-agents">
                <Bot className="mr-2 h-4 w-4" />
                Explore Agentic Automation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

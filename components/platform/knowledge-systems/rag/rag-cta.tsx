import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, MessageSquare } from "lucide-react"

export function RagCta() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F7F8F9]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0F0D1A] mb-4">
            Ready to Experience Grounded AI?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            See how RAG powers intelligent, trustworthy automation across your financial enterprise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 bg-transparent"
            >
              <Link href="/platform/knowledge-systems">
                <BookOpen className="mr-2 h-4 w-4" />
                Explore Knowledge Systems
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 bg-transparent"
            >
              <Link href="/platform/knowledge-systems/knowledge-assistant">
                <MessageSquare className="mr-2 h-4 w-4" />
                See Knowledge Assistant
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

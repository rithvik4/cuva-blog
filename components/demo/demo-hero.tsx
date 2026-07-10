import Link from "next/link"
import { Button } from "@/components/ui/button"

export function DemoHero() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Book a Demo</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            See how Cuva delivers measurable outcomes for real financial operations
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            Book a guided demo to understand how Cuva helps financial institutions cut operational workload, improve
            client engagement, and deploy AI safely in regulated environments.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 px-8">
              <Link href="#schedule">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

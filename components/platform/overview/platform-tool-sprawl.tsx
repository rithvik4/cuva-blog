import { Layers } from "lucide-react"

export function PlatformToolSprawl() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Layers className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">From Tool Sprawl to an Operating Platform</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Most financial enterprises rely on a growing collection of tools, scripts, and point AI solutions. While
            each solves a narrow problem, together they create fragmentation, risk, and operational drag. Cuva replaces
            this tool sprawl with a unified operating platform where knowledge, agents, workflows, and governance work
            together as one system.
          </p>
        </div>
      </div>
    </section>
  )
}

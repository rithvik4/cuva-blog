import { Shield } from "lucide-react"

export function DemoReassurance() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E5FAFE]">
              <Shield className="h-6 w-6 text-primary" />
            </div>
          </div>
          <p className="text-lg text-muted-foreground">
            We work with financial institutions operating in regulated, high-stakes environments. Your time and context
            are respected.
          </p>
        </div>
      </div>
    </section>
  )
}

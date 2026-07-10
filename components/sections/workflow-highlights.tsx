import { CheckCircle2 } from "lucide-react"

const workflows = [
  "Portfolio onboarding and IPS checks",
  "SCF invoice validation and settlement",
  "Vendor payouts and reconciliation",
  "Banking compliance and risk workflows",
]

export function WorkflowHighlights() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0F0D1A] sm:text-4xl mb-6">
              Automate Complex Financial Workflows
            </h2>
            <ul className="space-y-4">
              {workflows.map((workflow, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-[#3D3D4E]">{workflow}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-3xl" />
            <img
              src="/images/workflow-highlights.png"
              alt="Workflow Automation"
              className="relative rounded-2xl shadow-xl border border-border/50 w-full h-auto object-contain bg-[#F8F9FA]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

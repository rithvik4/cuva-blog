import { Bot, Database, Shield } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Bot,
    title: "Apply Proven SCF Agents",
    description: "Pre-built and configurable agents execute core SCF workflows.",
  },
  {
    number: "2",
    icon: Database,
    title: "Ground Actions in Enterprise Knowledge",
    description: "Invoices, contracts, supplier data, and transaction history inform every decision.",
  },
  {
    number: "3",
    icon: Shield,
    title: "Operate with Governance Built In",
    description: "Policies, permissions, and auditability are enforced automatically across workflows.",
  },
]

export function SCFSolutionsDelivery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-[#0F0D1A] mb-12">
          How Outcomes Are Delivered
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg z-10">
                    {step.number}
                  </div>
                  <div className="flex-1 bg-[#F4F4F7] rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-5 h-5 text-primary" />
                      <h3 className="font-serif text-lg font-bold text-[#0F0D1A]">{step.title}</h3>
                    </div>
                    <p className="text-[#3D3D4E]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

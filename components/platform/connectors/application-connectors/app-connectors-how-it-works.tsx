import { KeyRound, Settings, Bot } from "lucide-react"

const steps = [
  {
    icon: KeyRound,
    title: "Authenticate",
    description:
      "Authenticate your apps securely using OAuth, ensuring enterprise-grade security and controlled access.",
  },
  {
    icon: Settings,
    title: "Configure",
    description:
      "Configure your connectors by selecting the required operations and defining inputs and outputs to match your workflow needs.",
  },
  {
    icon: Bot,
    title: "Enable Agents & Workflows",
    description:
      "Agents automate the desired operations across all connected applications, enabling end-to-end workflows with consistency and control.",
  },
]

export function AppConnectorsHowItWorks() {
  return (
    <section className="py-24 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">How It Works</h2>
          <p className="text-lg text-[#3D3D4E] max-w-2xl mx-auto">
            Connect your enterprise applications in three simple steps.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-[#593BEE] to-[#80E9FF] hidden md:block" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Step number and icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#593BEE] flex items-center justify-center shadow-lg">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#80E9FF] flex items-center justify-center text-xs font-bold text-[#0F0D1A]">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="font-heading text-xl font-bold text-[#0F0D1A] mb-2">{step.title}</h3>
                    <p className="text-[#3D3D4E] leading-relaxed">{step.description}</p>
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

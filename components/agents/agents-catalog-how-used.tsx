import { Download, Settings, Play } from "lucide-react"

const steps = [
  {
    icon: Download,
    number: "01",
    title: "Deploy",
    description: "Select an agent from the catalog and configure it for your systems, policies, and operating model.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Customize",
    description: "Adapt workflows, prompts, and logic in Agent Studio to match your organization's requirements.",
  },
  {
    icon: Play,
    number: "03",
    title: "Operate",
    description:
      "Run agents through workflows, APIs, and conversational interfaces with full visibility in the Operations Console.",
  },
]

export function AgentsCatalogHowUsed() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] text-center mb-12">
          How Agents Are Used
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[39px] top-12 bottom-12 w-0.5 bg-[#593BEE]/20 hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-white border-2 border-[#593BEE] flex items-center justify-center shadow-sm">
                      <step.icon className="w-8 h-8 text-[#593BEE]" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#593BEE] text-white text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-4">
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

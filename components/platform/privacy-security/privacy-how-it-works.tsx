import { Lock, Shield, FileCheck } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Lock,
    title: "Enforce Privacy",
    description: "Apply permissions, redaction, masking, and identity-based access across systems and knowledge.",
  },
  {
    number: "2",
    icon: Shield,
    title: "Secure the Platform",
    description:
      "Use encryption, secure connectors, role inheritance, and authentication controls to protect all data flows.",
  },
  {
    number: "3",
    icon: FileCheck,
    title: "Maintain Compliance",
    description:
      "Use audit trails, logging, governance settings, and regulatory alignment to meet enterprise and industry requirements.",
  },
]

export function PrivacyHowItWorks() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">How It Works</h2>
          <p className="text-lg text-[#3D3D4E] max-w-2xl mx-auto">
            A systematic approach to enterprise-grade protection
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-[#593BEE]/20 hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#593BEE] text-white flex items-center justify-center font-bold text-xl z-10">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="w-5 h-5 text-[#593BEE]" />
                      <h3 className="font-serif text-xl font-bold text-[#0F0D1A]">{step.title}</h3>
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

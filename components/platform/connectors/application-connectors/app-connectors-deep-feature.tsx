import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Unified view of enterprise information",
  "Faster automation deployment",
  "Improved team collaboration",
  "Reduced operational overhead",
  "Foundational building blocks for workflow orchestration",
  "Enables agents to access, sync, and reason over enterprise data",
]

export function AppConnectorsDeepFeature() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-6">
              Enable end-to-end workflows across applications and departments
            </h2>
            <p className="text-lg text-[#3D3D4E] leading-relaxed">
              Application Connectors make it possible to automate end-to-end workflows across multiple applications and
              departments, helping teams work together more efficiently with less manual effort.
            </p>
          </div>
          <div className="bg-[#F4F4F7] rounded-2xl p-8">
            <h3 className="font-heading text-xl font-bold text-[#0F0D1A] mb-6">Key Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#593BEE] flex-shrink-0 mt-0.5" />
                  <span className="text-[#3D3D4E]">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

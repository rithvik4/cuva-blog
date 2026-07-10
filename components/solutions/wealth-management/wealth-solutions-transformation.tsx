import { Workflow, Users, ShieldCheck } from "lucide-react"

const transformations = [
  {
    icon: Workflow,
    title: "Automate Advisor Workflows",
    description:
      "Routine tasks such as onboarding, documentation, reporting, and follow-ups are automated across systems, freeing advisors to focus on high-value client interactions.",
  },
  {
    icon: Users,
    title: "Deliver Personalized Client Experiences",
    description:
      "AI-driven insights and responses enable timely, relevant communication with clients across channels, improving engagement and trust.",
  },
  {
    icon: ShieldCheck,
    title: "Operate with Built-In Governance",
    description:
      "All workflows run with auditability, permissions, and compliance controls enforced by default, supporting regulated wealth operations.",
  },
]

export function WealthSolutionsTransformation() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F0D1A] mb-4 font-serif">
          How Cuva Transforms Wealth Management Operations
        </h2>
        <p className="text-center text-[#3D3D4E] mb-12 max-w-2xl mx-auto">
          From manual processes to intelligent automation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E5FAFE] flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-[#0F0D1A] mb-3">{item.title}</h3>
              <p className="text-[#3D3D4E] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

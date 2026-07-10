import { Activity, FileText, Shield } from "lucide-react"

const pillars = [
  {
    icon: Activity,
    title: "Real-time workflow execution visibility",
  },
  {
    icon: FileText,
    title: "Audit-ready logs and traceability",
  },
  {
    icon: Shield,
    title: "Operational control for regulated environments",
  },
]

export function OperationsConsoleValueBar() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#593BEE]/30 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#E5FAFE] flex items-center justify-center mb-6">
                <pillar.icon className="w-10 h-10 text-[#593BEE]" />
              </div>
              <h3 className="text-lg font-bold text-[#0F0D1A]">{pillar.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

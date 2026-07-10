import { Brain, CheckCircle, Zap } from "lucide-react"

const values = [
  {
    icon: Brain,
    text: "Complete enterprise context",
  },
  {
    icon: CheckCircle,
    text: "Accurate, auditable reasoning",
  },
  {
    icon: Zap,
    text: "Real-time financial intelligence",
  },
]

export function KnowledgeValueBar() {
  return (
    <section className="bg-[#F4F4F7] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {values.map((value, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#E5FAFE]">
                <value.icon className="h-6 w-6 text-[#593BEE]" />
              </div>
              <span className="text-base font-medium text-[#0F0D1A]">{value.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

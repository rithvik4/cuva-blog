import { Zap, Building2, Settings } from "lucide-react"

const pillars = [
  {
    icon: Zap,
    title: "Deploy in Minutes",
  },
  {
    icon: Building2,
    title: "Purpose-Built for Finance",
  },
  {
    icon: Settings,
    title: "Fully Customizable",
  },
]

export function LibraryValueBar() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-white rounded-xl border border-[#E5E5E5] hover:shadow-lg hover:border-[#593BEE] transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#E5FAFE] flex items-center justify-center mb-6">
                <pillar.icon className="w-10 h-10 text-[#593BEE]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0F0D1A]">{pillar.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

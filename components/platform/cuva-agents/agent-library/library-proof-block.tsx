import { Settings, Eye, FileCheck } from "lucide-react"

const trustItems = [
  {
    icon: Settings,
    title: "Configurable",
  },
  {
    icon: Eye,
    title: "Monitored and Versioned",
  },
  {
    icon: FileCheck,
    title: "Fully Auditable",
  },
]

export function LibraryProofBlock() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] text-center mb-12">
          Enterprise-Grade Capabilities
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4 px-8 py-4 bg-[#F4F4F7] rounded-xl">
              <item.icon className="w-8 h-8 text-[#593BEE]" />
              <span className="font-semibold text-[#0F0D1A]">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

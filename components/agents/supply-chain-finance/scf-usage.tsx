import { Rocket, Wrench, FileCode } from "lucide-react"

const useCases = [
  {
    icon: Rocket,
    title: "Deploy",
    description: "Deploy as-is to accelerate SCF program rollout",
  },
  {
    icon: Wrench,
    title: "Extend",
    description: "Extend workflows to support specific SCF models such as reverse factoring or dynamic discounting",
  },
  {
    icon: FileCode,
    title: "Blueprint",
    description: "Use as a blueprint for building additional trade finance or treasury agents",
  },
]

export function SCFUsage() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            How Enterprises Use This Agent
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {useCases.map((useCase, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center mx-auto mb-4">
                <useCase.icon className="w-8 h-8 text-[#593BEE]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0F0D1A] mb-2">{useCase.title}</h3>
              <p className="text-[#3D3D4E] text-sm">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

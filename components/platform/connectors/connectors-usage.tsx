import { Workflow, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

const usageCases = [
  {
    icon: Workflow,
    title: "Powering workflows",
    description:
      "Connectors allow agents and workflows to securely interact with enterprise and financial systems, enabling end-to-end processes across applications while respecting permissions, controls, and compliance requirements.",
    link: "/platform/connectors/application-connectors",
    linkText: "Learn more: Application Connectors",
  },
  {
    icon: BookOpen,
    title: "Building knowledge systems",
    description:
      "Connectors are used to access enterprise data sources, allowing agents to ingest, structure, and maintain knowledge systems that support search, reasoning, and decision-making.",
    link: "/platform/knowledge-systems",
    linkText: "Learn more: Knowledge Systems",
  },
]

export function ConnectorsUsage() {
  return (
    <section id="connector-usage" className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">
            Connector Usage Across the Platform
          </h2>
          <p className="text-lg text-[#3D3D4E] max-w-3xl mx-auto">
            Connectors are used in two core ways across the platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {usageCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E8E4FD] flex items-center justify-center mb-6">
                <useCase.icon className="w-7 h-7 text-[#593BEE]" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0F0D1A] mb-3">{useCase.title}</h3>
              <p className="text-[#3D3D4E] leading-relaxed mb-4">{useCase.description}</p>
              <Link href={useCase.link} className="inline-flex items-center text-[#593BEE] font-medium hover:underline">
                {useCase.linkText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

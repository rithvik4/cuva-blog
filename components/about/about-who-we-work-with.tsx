import { Building, Users, Server } from "lucide-react"

export function AboutWhoWeWorkWith() {
  return (
    <section className="py-20 bg-[#0F0D1A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl mb-6">Who We Work With</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Cuva works with financial institutions, technology providers, and enterprise teams looking to modernize
            operations without disrupting their existing technology landscape. Our solutions are used across
            front-office, middle-office, and operational functions where accuracy, reliability, and governance are
            essential.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white/5 rounded-xl p-8 border border-white/10">
            <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
              <Building className="w-7 h-7 text-[#80E9FF]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-4">Financial Institutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Wealth management firms</li>
              <li>Banks and financial institutions</li>
              <li>Supply chain finance providers</li>
              <li>M&A advisory firms</li>
              <li>Insurance organizations</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-xl p-8 border border-white/10">
            <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-[#80E9FF]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-4">Teams & Departments</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Front-office and client-facing teams</li>
              <li>Middle-office and operations</li>
              <li>Risk, compliance, and control functions</li>
              <li>Strategy, transformation, and AI teams</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-xl p-8 border border-white/10">
            <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
              <Server className="w-7 h-7 text-[#80E9FF]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-4">Operating Environments</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Regulated financial environments</li>
              <li>Multi-party and multi-system workflows</li>
              <li>High-volume, complex processes</li>
              <li>Enterprise deployments at scale</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Target, Building2, Globe } from "lucide-react"

export function AboutSnapshot() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-[#0F0D1A] sm:text-4xl mb-6">Company Snapshot</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#E5FAFE] flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0F0D1A] mb-2">Focus</h3>
            <p className="text-muted-foreground">Enterprise AI for financial operations</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#E5FAFE] flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0F0D1A] mb-2">Industry</h3>
            <p className="text-muted-foreground">Financial services</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#E5FAFE] flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0F0D1A] mb-2">Operating Model</h3>
            <p className="text-muted-foreground">Global, enterprise-first</p>
          </div>
        </div>
      </div>
    </section>
  )
}

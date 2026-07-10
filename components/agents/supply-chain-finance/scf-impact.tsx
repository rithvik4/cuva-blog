const metrics = [
  { value: "2x", label: "Faster supplier onboarding through automated intake and verification" },
  { value: "40%", label: "Reduction in operational workload by automating manual SCF processes" },
  { value: "2.5x", label: "Improvement in client engagement via AI-driven communication" },
  { value: "50%", label: "Faster compliance processing with real-time checks and alerts" },
  { value: "40%", label: "Operational cost savings through end-to-end workflow automation" },
]

export function SCFImpact() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">Business Impact</h2>
          <p className="text-lg text-[#3D3D4E]">Measured outcomes from supply chain finance deployments</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <div key={index} className="p-6 bg-[#F4F4F7] rounded-xl text-center hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-[#593BEE] mb-3">{metric.value}</div>
              <p className="text-[#3D3D4E] text-sm">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

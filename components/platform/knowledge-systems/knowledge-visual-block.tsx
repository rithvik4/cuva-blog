export function KnowledgeVisualBlock() {
  return (
    <section className="bg-[#F4F4F7] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-4xl">
            <div className="absolute -inset-4 bg-[#593BEE]/10 blur-3xl rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-white">
              <img src="/architecture-diagram-showing-knowledge-base-knowle.jpg" alt="Knowledge Systems Architecture" className="w-full h-auto" />
            </div>
          </div>
          <p className="mt-6 text-base text-[#3D3D4E] text-center">
            A single intelligence layer connected to all your financial systems.
          </p>
        </div>
      </div>
    </section>
  )
}

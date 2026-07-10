export function TrustBar() {
  return (
    <section className="py-16 bg-background border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-[#9090A7] mb-8">
          Trusted by wealth firms, SCF platforms, banks, and financial leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 grayscale">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-8 w-24 bg-[#9090A7]/20 rounded flex items-center justify-center">
              <span className="text-xs text-[#9090A7]">Logo {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

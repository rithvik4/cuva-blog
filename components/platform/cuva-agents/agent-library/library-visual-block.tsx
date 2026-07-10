import Image from "next/image"

export function LibraryVisualBlock() {
  return (
    <section className="py-20 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E5E5E5]">
            <Image
              src="/ai-agent-library-dashboard-with-categorized-agent-.jpg"
              alt="Agent Library Grid"
              width={1000}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-[#3D3D4E] mt-6 text-lg">
            Launch automation across teams without starting from scratch.
          </p>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function SearchHero() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left content - 7 columns */}
        <div className="lg:col-span-7">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F0D1A] leading-tight mb-6">
            Knowledge Search
          </h1>
          <p className="text-xl text-[#593BEE] mb-4 leading-relaxed font-medium">
            Find information across your enterprise with context and precision
          </p>
          <p className="text-lg text-[#3D3D4E] mb-8 leading-relaxed">
            Search across enterprise data, documents, and knowledge using structure and relationships powered by the
            Knowledge Graph.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#593BEE] hover:bg-[#593BEE]/90 text-white px-8 py-6 text-lg rounded-lg"
          >
            <Link href="/demo">Book a Demo</Link>
          </Button>
        </div>

        {/* Right visual - 5 columns */}
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#593BEE]/20 to-[#80E9FF]/20 rounded-2xl transform rotate-3" />
            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-4">
              <Image
                src="/enterprise-search-interface-with-financial-data-re.jpg"
                alt="Knowledge Search Interface"
                width={500}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import Image from "next/image"

export function SearchVisualBlock() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <Image
              src="/unified-search-results-page-showing-financial-data.jpg"
              alt="Unified Search Results"
              width={900}
              height={500}
              className="rounded-lg w-full"
            />
          </div>
          <p className="text-center text-[#9090A7] mt-6 text-lg">
            One place to search everything, even when labels differ across systems.
          </p>
        </div>
      </div>
    </section>
  )
}

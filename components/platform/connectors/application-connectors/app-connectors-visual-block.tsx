import Image from "next/image"

export function AppConnectorsVisualBlock() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E5E5E5]">
            <Image
              src="/enterprise-apps-crm-communication-storage-document.jpg"
              alt="Enterprise applications flowing into Cuva unified platform"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-[#3D3D4E] mt-6 text-lg">
            Unify your enterprise applications into one knowledge and workflow layer.
          </p>
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function InfrastructureLayer() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F7FC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F0D1A] mb-6 leading-tight">
              Infrastructure Layer<br />
              for <span className="text-[#593BEE]">Enterprise AI</span>
            </h2>
            <p className="text-lg text-[#3D3D4E] mb-8 leading-relaxed max-w-lg">
              Cuva provides the infrastructure, not just a tool, that financial enterprises need to build, train, deploy, manage, and operate AI systems at enterprise scale.
            </p>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 bg-[#593BEE] hover:bg-[#4A2FD4] text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Explore the Platform
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right: Infrastructure Graphic */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/infrastructure2.png"
              alt="Cuva AI Platform Architecture showing Knowledge Systems, Agent Orchestration, and Operating Fabric connected to a central platform"
              width={700}
              height={600}
              className="w-full h-auto rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

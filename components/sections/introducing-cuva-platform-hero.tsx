"use client"

import { ArrowRight, Layers, Brain, Workflow, Plug, Lightbulb } from "lucide-react"
import Link from "next/link"

export function IntroducingCuvaPlatformHero() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#F8F7FC] rounded-full py-2 px-4 border border-neutral-200">
              <Lightbulb className="w-4 h-4 text-[#593BEE]" />
              <span className="text-xs font-semibold text-[#593BEE] uppercase tracking-wider">
                Enterprise AI Platform
              </span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F0D1A] mb-4">
            Introducing Cuva AI&apos;s{" "}
            <span className="text-[#593BEE]">AI-Native Operating Platform</span>
          </h2>
          <p className="text-base md:text-lg text-[#3D3D4E] max-w-4xl mx-auto">
            Cuva AI&apos;s AI-native operating platform provides the infrastructure financial enterprises need to operationalize AI at enterprise scale.
          </p>
        </div>

        {/* AI-Native Operating Platform */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0F0D1A] mb-4">
              AI-Native Operating Platform
            </h3>
            <p className="text-base text-[#3D3D4E] max-w-3xl mx-auto mb-8">
              Our platform combines AI Agent Orchestration, Enterprise Knowledge Systems, and enterprise integrations, with an Enterprise Operating Fabric—the operational layer that plans, controls, and executes enterprise AI operations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-[#F8F7FC] rounded-xl p-4 border border-neutral-100">
                <h4 className="font-semibold text-[#0F0D1A] mb-1">AI Agent Orchestration</h4>
                <p className="text-sm text-[#3D3D4E]">Coordinate agents, workflows, tools, and enterprise actions.</p>
              </div>
              <div className="bg-[#F8F7FC] rounded-xl p-4 border border-neutral-100">
                <h4 className="font-semibold text-[#0F0D1A] mb-1">Knowledge Systems</h4>
                <p className="text-sm text-[#3D3D4E]">Build enterprise context using knowledge bases, graphs, and RAG.</p>
              </div>
              <div className="bg-[#F8F7FC] rounded-xl p-4 border border-neutral-100">
                <h4 className="font-semibold text-[#0F0D1A] mb-1">Operating Fabric</h4>
                <p className="text-sm text-[#3D3D4E]">Coordinate execution, governance, validation, and enterprise operations.</p>
              </div>
            </div>
          </div>

          {/* Architecture Diagram - Centered */}
          <div className="flex justify-center">
            <div className="bg-[#F8F7FC] rounded-2xl p-8 border border-neutral-100 max-w-3xl w-full">
              <div className="flex flex-col items-center">
                {/* Top Layer - Operating Fabric (Highlighted) */}
                <div className="bg-gradient-to-r from-[#593BEE] to-[#7B5FFF] rounded-xl p-4 text-center w-full max-w-xs">
                  <div className="flex items-center justify-center gap-2">
                    <Layers className="w-5 h-5 text-white" />
                    <span className="font-semibold text-white text-sm">Operating Fabric</span>
                  </div>
                </div>
                
                {/* Connector Lines - Vertical down then horizontal spread */}
                <div className="relative w-full h-10">
                  {/* Vertical line from Operating Fabric */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-5 bg-[#593BEE]/40" />
                  {/* Horizontal line spanning across */}
                  <div className="absolute top-5 left-[16.67%] right-[16.67%] h-0.5 bg-[#593BEE]/40" />
                  {/* Vertical lines down to each box */}
                  <div className="absolute left-[16.67%] top-5 w-0.5 h-5 bg-[#593BEE]/40" />
                  <div className="absolute left-1/2 -translate-x-1/2 top-5 w-0.5 h-5 bg-[#593BEE]/40" />
                  <div className="absolute right-[16.67%] top-5 w-0.5 h-5 bg-[#593BEE]/40" />
                </div>
                
                {/* Bottom Layer - Three boxes side by side */}
                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="bg-white rounded-xl p-4 border border-neutral-200 flex items-center justify-center gap-2">
                    <Workflow className="w-5 h-5 text-[#593BEE] flex-shrink-0" />
                    <span className="font-semibold text-[#0F0D1A] text-sm whitespace-nowrap">AI Agent Orchestration</span>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-neutral-200 flex items-center justify-center gap-2">
                    <Brain className="w-5 h-5 text-[#593BEE] flex-shrink-0" />
                    <span className="font-semibold text-[#0F0D1A] text-sm whitespace-nowrap">Knowledge Systems</span>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-neutral-200 flex items-center justify-center gap-2">
                    <Plug className="w-5 h-5 text-[#593BEE] flex-shrink-0" />
                    <span className="font-semibold text-[#0F0D1A] text-sm whitespace-nowrap">Connectors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/platform"
            className="inline-flex items-center gap-2 bg-[#593BEE] hover:bg-[#4A2FD4] text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Explore the Platform
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

"use client"

import { AlertTriangle } from "lucide-react"
import { EnterpriseAIShift } from "./enterprise-ai-shift"
import { EnterpriseAIChallenges } from "./enterprise-ai-challenges"

export function EnterpriseAIChallengesWrapper() {
  return (
    <section className="py-20 lg:py-24 bg-[#F8F7FC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white rounded-full py-2 px-4 border border-neutral-200">
            <AlertTriangle className="w-4 h-4 text-[#593BEE]" />
            <span className="text-xs font-semibold text-[#593BEE] uppercase tracking-wider">
              The Challenge
            </span>
          </div>
        </div>

        {/* Main Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#0F0D1A] mb-16">
          Enterprise <span className="text-[#593BEE]">AI</span> Challenges
        </h2>
      </div>

      {/* Sub-sections */}
      <EnterpriseAIShift />
      <EnterpriseAIChallenges />
    </section>
  )
}

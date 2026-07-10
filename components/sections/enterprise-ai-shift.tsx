"use client"

import Image from "next/image"

export function EnterpriseAIShift() {
  return (
    <section className="pt-0 pb-16 bg-[#F8F7FC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-[#0F0D1A] mb-10">
          Enterprise AI Pilot-to-Production Challenge
        </h3>

        {/* Two Column Layout: 7 cols left, 5 cols right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base text-[#3D3D4E] leading-relaxed">
              As a financial enterprise, you are investing heavily in artificial intelligence as your organization moves toward AI-native operations.
            </p>
            <p className="text-base text-[#3D3D4E] leading-relaxed">
              Yet most AI initiatives struggle to reach production, and even when deployed, operationalizing AI remains a challenge. As a result, they rarely deliver meaningful ROI.
            </p>
            <p className="text-base text-[#3D3D4E] leading-relaxed">
              The core challenge is not building AI, but operating AI as a cohesive system across enterprise data, systems, processes, and people.
            </p>

            {/* Footer Statement */}
            <div className="pt-6 mt-6">
              <div className="inline-flex items-center gap-3 bg-[#F5F3FF] rounded-full py-3 px-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center border border-[#E9E5FF]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#593BEE]"
                  >
                    <path
                      d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium text-[#0F0D1A]">
                  Cuva enables financial enterprises to successfully navigate the AI transition.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - 5 columns */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/images/ai-funnel.png"
                alt="AI Investment Funnel showing progression from $100s of billions in AI Investment, to Enterprise AI Pilots, to Production AI Systems, to very few Projects Delivering ROI"
                width={500}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

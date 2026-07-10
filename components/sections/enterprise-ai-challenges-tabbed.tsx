"use client"

import { useState, useEffect, useRef } from "react"
import { AlertTriangle, TrendingDown, ShieldAlert } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const tabs = [
  {
    id: "pilot",
    label: "Pilot-to-Production Challenge",
    icon: TrendingDown,
    title: "Enterprise AI Pilot-to-Production Challenge",
    description: "Why most enterprise AI initiatives fail to reach production and deliver ROI.",
  },
  {
    id: "reliability",
    label: "Reliability Challenges",
    icon: ShieldAlert,
    title: "Enterprise AI Reliability Challenges",
    description: "Three fundamental gaps prevent your AI initiatives from operating reliably at enterprise scale.",
  },
]

const challenges = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="7" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="17" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="7" cy="14.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="17" cy="14.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Lack of Contextual Intelligence",
    description: "Your enterprise AI requires continuous, up-to-date enterprise context to operate effectively. Without it, your agents cannot understand enterprise processes and workflows."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="4" y1="21" x2="4" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="4" y1="10" x2="4" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="21" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="8" x2="12" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="20" y1="21" x2="20" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="20" y1="12" x2="20" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="4" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="20" cy="14" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Lack of Control",
    description: "Controlling enterprise AI remains a major challenge, including planning actions, coordinating agents and workflows, and controlling execution at the enterprise level."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Lack of Accuracy",
    description: "Your AI systems struggle to produce consistent, reliable outputs, and hallucinations make them difficult to rely on in production environments."
  }
]

export function EnterpriseAIChallengesTabbed() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const panelRefs = useRef<Record<string, HTMLDivElement | null>>({})
  // Used to ignore scroll-sync briefly while a click-triggered smooth scroll is in progress
  const isClickScrolling = useRef(false)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      if (isClickScrolling.current) return

      // Active tab = panel whose center is closest to the viewport center
      const viewportCenter = window.innerHeight / 2
      let closestId: string | null = null
      let closestDist = Number.POSITIVE_INFINITY
      for (const [id, node] of Object.entries(panelRefs.current)) {
        if (!node) continue
        const r = node.getBoundingClientRect()
        const center = r.top + r.height / 2
        const dist = Math.abs(center - viewportCenter)
        if (dist < closestDist) {
          closestDist = dist
          closestId = id
        }
      }
      if (closestId) setActiveTab((prev) => (prev === closestId ? prev : closestId))
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const handleTabClick = (id: string) => {
    setActiveTab(id)
    isClickScrolling.current = true
    panelRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "center" })
    window.setTimeout(() => {
      isClickScrolling.current = false
    }, 800)
  }

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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#0F0D1A] mb-12">
          Enterprise <span className="text-[#593BEE]">AI</span> Challenges
        </h2>

        {/* Vertical Tabs + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Vertical Tab List (sticky) */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-28 flex flex-col gap-3">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={cn(
                      "group flex items-start gap-4 text-left rounded-xl p-5 transition-all border",
                      isActive
                        ? "bg-white border-[#593BEE] shadow-md"
                        : "bg-white/60 border-neutral-200 hover:bg-white hover:border-neutral-300",
                    )}
                  >
                    <div
                      className={cn(
                        "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                        isActive ? "bg-[#593BEE] text-white" : "bg-[#F5F3FF] text-[#593BEE]",
                      )}
                    >
                      <tab.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4
                        className={cn(
                          "font-semibold text-base transition-colors",
                          isActive ? "text-[#593BEE]" : "text-[#0F0D1A]",
                        )}
                      >
                        {tab.label}
                      </h4>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right: Content Panels (stacked) */}
          <div className="lg:col-span-9 flex flex-col gap-8">
            {/* Pilot-to-Production Panel */}
            <div
              data-tab-id="pilot"
              ref={(el) => {
                panelRefs.current["pilot"] = el
              }}
              className="scroll-mt-28 bg-white rounded-2xl shadow-lg border border-neutral-100 p-8 lg:p-10"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0F0D1A] mb-3">{tabs[0].title}</h3>
                <p className="text-base text-[#3D3D4E]">{tabs[0].description}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column */}
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
                  <div className="pt-4">
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

                {/* Right Column */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-md">
                    <Image
                      src="/images/ai-funnel.png"
                      alt="AI Investment Funnel showing progression from $100s of billions in AI Investment, to Enterprise AI Pilots, to Production AI Systems, to very few Projects Delivering ROI"
                      width={500}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Reliability Panel */}
            <div
              data-tab-id="reliability"
              ref={(el) => {
                panelRefs.current["reliability"] = el
              }}
              className="scroll-mt-28 bg-white rounded-2xl shadow-lg border border-neutral-100 p-8 lg:p-10"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0F0D1A] mb-3">{tabs[1].title}</h3>
                <p className="text-base text-[#3D3D4E]">{tabs[1].description}</p>
              </div>

              {/* Challenge Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                {challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="bg-[#F8F7FC] rounded-2xl p-6 border border-neutral-100"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#F5F3FF] flex items-center justify-center text-[#593BEE] mb-5">
                      {challenge.icon}
                    </div>

                    {/* Title with underline */}
                    <h4 className="text-xl font-bold text-[#0F0D1A] mb-1">
                      {challenge.title}
                    </h4>
                    <div className="w-8 h-1 bg-[#593BEE] rounded-full mb-4" />

                    {/* Description */}
                    <p className="text-sm text-[#3D3D4E] leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer Callout */}
              <div className="bg-[#F8F7FC] rounded-2xl p-6 border border-neutral-100 flex items-center gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F5F3FF] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#593BEE]">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-base text-[#0F0D1A]">
                  We have built an AI-native operating platform to help financial enterprises overcome these challenges by bringing{" "}
                  <span className="text-[#593BEE] font-semibold">enterprise context, control, and accuracy</span>{" "}
                  into one operating layer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

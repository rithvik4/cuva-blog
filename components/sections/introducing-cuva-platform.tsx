"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Brain, Settings, CheckCircle, Target, Rocket, Server, TrendingUp, Building2, Lightbulb, ShieldCheck, Workflow } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const tabs = [
  {
    id: "reliable",
    label: "Reliable Enterprise AI",
    icon: ShieldCheck,
  },
  {
    id: "journey",
    label: "From AI Pilots to AI-Native Operations",
    icon: Workflow,
  },
]

const pillars = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Contextual Intelligence",
    items: [
      "Enterprise knowledge systems",
      "Context-aware reasoning",
      "Financial domain understanding"
    ]
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Control",
    items: [
      "Planning and coordination",
      "Workflow orchestration",
      "Governance and validation"
    ]
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Accuracy",
    items: [
      "Validation mechanisms",
      "Monitoring and evaluation",
      "Continuous improvement"
    ]
  }
]

const journeySteps = [
  { 
    icon: <Rocket className="w-5 h-5" />,
    label: "AI Pilots", 
    description: "Experiment and validate high-value use cases.",
    active: false 
  },
  { 
    icon: <Server className="w-5 h-5" />,
    label: "Production Systems", 
    description: "Build robust, secure, and scalable AI systems.",
    active: false 
  },
  { 
    icon: <TrendingUp className="w-5 h-5" />,
    label: "Operational AI", 
    description: "Embed AI into core workflows and decisions.",
    active: false 
  },
  { 
    icon: <Building2 className="w-5 h-5" />,
    label: "AI-Native Enterprise", 
    description: "Achieve continuous value with AI at the core.",
    active: true 
  }
]

export function IntroducingCuvaPlatform() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const [progress, setProgress] = useState(0)
  const panelRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const containerRef = useRef<HTMLDivElement | null>(null)
  const clickLockRef = useRef(false)

  // Scroll-synced active tab + progress line via a single rAF-throttled handler
  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0

      // Progress line fill across the section
      const el = containerRef.current
      if (el) {
        const rect = el.getBoundingClientRect()
        const viewportH = window.innerHeight
        const total = rect.height - viewportH
        const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 0))
        setProgress(total > 0 ? scrolled / total : 0)
      }

      // Active tab = panel whose center is closest to the viewport center
      if (!clickLockRef.current) {
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
    clickLockRef.current = true
    panelRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "center" })
    window.setTimeout(() => {
      clickLockRef.current = false
    }, 800)
  }

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
                The Solution
              </span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F0D1A] mb-4">
            Solving Enterprise AI Challenges{" "}
            <span className="text-[#593BEE]">with Cuva</span>
          </h2>
          <p className="text-base md:text-lg text-[#3D3D4E] max-w-4xl mx-auto">
            Cuva addresses enterprise AI challenges by bringing context, control, and accuracy into a single AI-native operating platform.
          </p>
        </div>

        {/* Tabbed Layout: vertical tabs (left) + stacked panels (right) */}
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left: Sticky Vertical Tabs with scroll-progress line */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <div className="flex lg:block gap-3">
                {/* Progress rail */}
                <div className="hidden lg:block relative w-1 rounded-full bg-neutral-100 mr-0">
                  <div
                    className="absolute top-0 left-0 w-full rounded-full bg-[#593BEE] transition-[height] duration-150"
                    style={{ height: `${Math.round(progress * 100)}%` }}
                  />
                </div>
                <div className="flex lg:flex-col gap-3 flex-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:pl-4">
                  {tabs.map((tab) => {
                    const isActive = activeTab === tab.id
                    return (
                      <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className={cn(
                          "flex items-center gap-3 text-left px-4 py-3 rounded-xl transition-all whitespace-nowrap lg:whitespace-normal",
                          isActive
                            ? "bg-[#F5F3FF] border border-[#593BEE]/30"
                            : "bg-transparent border border-transparent hover:bg-[#F8F7FC]",
                        )}
                      >
                        <span
                          className={cn(
                            "flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 transition-colors",
                            isActive ? "bg-[#593BEE] text-white" : "bg-[#F4F4F7] text-[#6B6B7B]",
                          )}
                        >
                          <tab.icon className="w-4 h-4" />
                        </span>
                        <span
                          className={cn(
                            "font-semibold text-sm transition-colors",
                            isActive ? "text-[#593BEE]" : "text-[#0F0D1A]",
                          )}
                        >
                          {tab.label}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stacked Content Panels */}
          <div className="lg:col-span-9 flex flex-col gap-16">

            {/* Panel: Reliable Enterprise AI */}
            <div
              data-panel-id="reliable"
              ref={(el) => {
                panelRefs.current["reliable"] = el
              }}
              className="scroll-mt-28"
            >
              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0F0D1A] mb-4">
                  Reliable Enterprise AI:{" "}
                  <span className="text-[#593BEE]">Context, Control, and Accuracy</span>
                </h3>
                <p className="text-base text-[#3D3D4E] max-w-3xl">
                  The platform brings enterprise context, coordinated AI operations, and controlled execution into one unified operating layer.
                </p>
              </div>

              {/* Three Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pillars.map((pillar, index) => (
                  <div
                    key={index}
                    className="bg-[#F8F7FC] rounded-2xl p-6 border border-neutral-100"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#593BEE] border border-neutral-100 mb-5">
                      {pillar.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[#0F0D1A] mb-1">{pillar.title}</h4>
                    <div className="w-8 h-1 bg-[#593BEE] rounded-full mb-4" />
                    <ul className="space-y-3">
                      {pillar.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#593BEE] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-[#3D3D4E]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Panel: From AI Pilots to AI-Native Operations */}
            <div
              data-panel-id="journey"
              ref={(el) => {
                panelRefs.current["journey"] = el
              }}
              className="scroll-mt-28"
            >
              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0F0D1A] mb-4">
                  From AI Pilots to{" "}
                  <span className="text-[#593BEE]">AI-Native Operations</span>
                </h3>
                <p className="text-base text-[#3D3D4E] max-w-3xl">
                  The platform helps financial enterprises become true AI-native enterprises by moving from pilots to production, from production to operationalization, and transforming enterprise operations into AI-native operations.
                </p>
              </div>

              {/* Journey Visual - Horizontal Cards with Arrows */}
              <div className="flex flex-col lg:flex-row items-stretch gap-2 lg:gap-0">
                {journeySteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    {/* Card */}
                    <div
                      className={cn(
                        "rounded-2xl p-5 min-w-[200px] h-full flex flex-col",
                        step.active
                          ? "bg-white border-2 border-[#593BEE] shadow-sm"
                          : "bg-[#F8F7FC] border border-neutral-100",
                      )}
                    >
                      {/* Icon */}
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mb-4",
                          step.active ? "bg-[#F5F3FF] text-[#593BEE]" : "bg-[#EEEEF0] text-[#6B6B7B]",
                        )}
                      >
                        {step.icon}
                      </div>
                      {/* Text */}
                      <div>
                        <h4
                          className={cn(
                            "font-semibold text-base mb-1",
                            step.active ? "text-[#593BEE]" : "text-[#0F0D1A]",
                          )}
                        >
                          {step.label}
                        </h4>
                        <p className="text-sm text-[#3D3D4E] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow between cards */}
                    {index < journeySteps.length - 1 && (
                      <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-[#F4F4F7] mx-1 flex-shrink-0">
                        <ArrowRight className="w-4 h-4 text-[#593BEE]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
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

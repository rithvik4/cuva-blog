"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight, Plug, Bot, GitBranch, BookOpen, MessageSquare, Cpu } from "lucide-react"
import Link from "next/link"

const tabs = [
  {
    id: "knowledge",
    label: "Knowledge Systems",
    icon: BookOpen,
    title: "Intelligent Knowledge Infrastructure",
    description:
      "Agent-built knowledge systems that structure data, map relationships, and enable contextual retrieval.",
    image: "/images/knowledge-base.png",
    href: "/platform/knowledge-systems",
  },
  {
    id: "agents",
    label: "Agentic Automation",
    icon: Bot,
    title: "Configurable Financial Agents",
    description: "Configurable financial agents designed to reason, act, and operate across enterprise workflows.",
    image: "/images/ai-agents.png",
    href: "/platform/cuva-agents",
  },
  {
    id: "workflows",
    label: "Multi-Agent Workflows",
    icon: GitBranch,
    title: "End-to-End Workflow Automation",
    description:
      "End-to-end workflows built using triggers, agents, flow control, and terminators to automate financial operations.",
    image: "/images/workflow-canvas.png",
    href: "/platform/cuva-agents/multi-agent-workflows",
  },
  {
    id: "fabric",
    label: "Operating Fabric",
    icon: Cpu,
    title: "Unified Platform Layer",
    description:
      "The underlying platform layer that unifies agents, workflows, connectors, models, security, and governance.",
    image: "/platform-architecture-diagram-infrastructure.jpg",
    href: "/platform/operating-fabric",
  },
  {
    id: "cuvabot",
    label: "CuvaBot",
    icon: MessageSquare,
    title: "Enterprise Knowledge Assistant",
    description:
      "Enterprise knowledge assistant that combines chat, search, and reasoning over financial knowledge systems.",
    image: "/images/cuvabot.png",
    href: "/platform/operating-fabric/cuvabot",
  },
  {
    id: "connectors",
    label: "Connectors",
    icon: Plug,
    title: "Financial & Enterprise Connectors",
    description: "Financial and enterprise connectors that power data access, actions, and automation across systems.",
    image: "/images/connectors.png",
    href: "/platform/connectors",
  },
]

export function PlatformOverview() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const activeContent = tabs.find((tab) => tab.id === activeTab)!

  const isConnectorsTab = activeTab === "connectors"
  const isCuvabotTab = activeTab === "cuvabot"

  return (
    <section className="py-20 lg:py-24 bg-[#F4F4F7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0F0D1A] sm:text-4xl">
            Explore the Cuva Platform
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto pb-2 mb-8 gap-2 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all",
                activeTab === tab.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-[#3D3D4E] hover:bg-white/80 border border-border",
              )}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="bg-white rounded-2xl shadow-lg border border-border/50 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
            <div className="flex flex-col justify-center">
              <h3 className="font-serif text-2xl font-bold text-[#0F0D1A] mb-4">{activeContent.title}</h3>
              <p className="text-[#3D3D4E] leading-relaxed mb-6">{activeContent.description}</p>
              <Link
                href={activeContent.href}
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Explore
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 bg-[#80E9FF]/10 blur-2xl rounded-2xl" />
              <img
                src={activeContent.image || "/placeholder.svg"}
                alt={activeContent.title}
                className={cn(
                  "relative rounded-xl shadow-md w-full border border-border/50 h-[420px]",
                  isCuvabotTab || isConnectorsTab ? "object-contain bg-gray-50" : "object-cover object-top",
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

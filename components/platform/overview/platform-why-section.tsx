"use client"

import { useState } from "react"
import { Database, Bot, Shield } from "lucide-react"
import Link from "next/link"

const tabs = [
  {
    id: "scale",
    label: "Operating AI at Enterprise Scale",
  },
  {
    id: "approach",
    label: "Our Approach",
  },
]

export function PlatformWhySection() {
  const [activeTab, setActiveTab] = useState("approach")

  return (
    <section className="py-20 bg-[#F7F8F9]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Why an AI-Native Operating Platform
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Understanding the challenge and how Cuva addresses it
          </p>

          {/* Vertical Tabs Layout */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Tab List */}
            <div className="md:w-64 flex-shrink-0">
              <div className="flex md:flex-col gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 text-left rounded-lg transition-all text-sm font-medium ${
                      activeTab === tab.id
                        ? "bg-primary text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content Panel */}
            <div className="flex-1 bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              {activeTab === "scale" && (
                <div className="max-w-2xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">The Enterprise AI Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most AI platforms address only part of the enterprise challenge. Some focus on knowledge and
                    retrieval but cannot execute actions. Others orchestrate agents without sufficient enterprise
                    context. Many automate workflows without a true operating fabric to enforce control, consistency,
                    and governance. In financial enterprises, these partial approaches lead to fragmented intelligence,
                    fragile automation, and increased operational and compliance risk.
                  </p>
                </div>
              )}

              {activeTab === "approach" && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">A Complete AI-Native Operating Platform</h3>
                  <p className="text-muted-foreground mb-8">
                    Cuva was built as a complete AI-native operating platform that unifies context, execution, and
                    control across the financial enterprise.
                  </p>

                  {/* Solution Cards */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <Link
                      href="/platform/knowledge-systems"
                      className="group p-6 bg-[#F7F8F9] rounded-xl hover:shadow-md transition-all border border-transparent hover:border-primary/20"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Database className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        Knowledge Systems
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Create trusted, structured enterprise context that powers AI reasoning and decisions.
                      </p>
                    </Link>

                    <Link
                      href="/platform/cuva-agents"
                      className="group p-6 bg-[#F7F8F9] rounded-xl hover:shadow-md transition-all border border-transparent hover:border-primary/20"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Bot className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        Agents and Workflows
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Enable intelligent execution through agents and workflows that reason and act using enterprise
                        context.
                      </p>
                    </Link>

                    <Link
                      href="/platform/operating-fabric"
                      className="group p-6 bg-[#F7F8F9] rounded-xl hover:shadow-md transition-all border border-transparent hover:border-primary/20"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        Operating Fabric
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Orchestrate, govern, and control all execution with visibility, policy enforcement, and
                        auditability.
                      </p>
                    </Link>
                  </div>

                  {/* Closing Statement */}
                  <p className="text-muted-foreground text-center border-t border-gray-200 pt-6">
                    Together, these capabilities allow financial enterprises to operate intelligence, automation, and
                    governance as one coherent system.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

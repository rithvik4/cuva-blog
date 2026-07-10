"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown, Brain, Bot, Plug, Layers, Shield, Lock, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const platformOverview = {
  title: "Platform Overview",
  href: "/platform",
  description: "Explore Cuva's complete AI platform for financial enterprises",
}

const platformUpperItems = [
  {
    title: "Knowledge Systems",
    href: "/platform/knowledge-systems",
    icon: Brain,
    description: "AI-powered knowledge management",
    pages: [
      { title: "Knowledge Assistant", href: "/platform/knowledge-systems/knowledge-assistant" },
      { title: "Knowledge Search", href: "/platform/knowledge-systems/knowledge-search" },
      { title: "RAG", href: "/platform/knowledge-systems/rag" },
    ],
  },
  {
    title: "Agentic Automation",
    href: "/platform/cuva-agents",
    icon: Bot,
    description: "Build and deploy AI agents",
    pages: [
      { title: "Agent Studio", href: "/platform/cuva-agents/agent-studio" },
      { title: "Multi-Agent Workflows", href: "/platform/cuva-agents/multi-agent-workflows" },
    ],
  },
  {
    title: "Connectors",
    href: "/platform/connectors",
    icon: Plug,
    description: "Connect to enterprise systems",
    pages: [
      { title: "Application Connectors", href: "/platform/connectors/application-connectors" },
      { title: "Financial Connectors", href: "/platform/connectors/financial-connectors" },
    ],
  },
  {
    title: "Operating Fabric",
    href: "/platform/operating-fabric",
    icon: Layers,
    description: "Enterprise operations layer",
    pages: [
      { title: "Operations Console", href: "/platform/operating-fabric/operations-console" },
      { title: "CuvaBot", href: "/platform/operating-fabric/cuvabot" },
    ],
  },
]

const platformLowerItems = [
  {
    title: "Built for the Enterprise",
    href: "/platform/built-for-enterprise",
    icon: Shield,
    pages: [],
  },
  {
    title: "Privacy, Security & Compliance",
    href: "/platform/privacy-security",
    icon: Lock,
    pages: [],
  },
]

const agentItems = [
  { title: "Overview", href: "/agents" },
  { title: "Wealth Management Agent", href: "/agents/wealth-management" },
  { title: "Supply Chain Finance Agent", href: "/agents/supply-chain-finance" },
]

const solutionItems = [
  { title: "Overview", href: "/solutions" },
  { title: "Wealth Management", href: "/solutions/wealth-management" },
  { title: "Supply Chain Finance", href: "/solutions/supply-chain-finance" },
]

const resourceItems = [{ title: "Developers", href: "/resources/developers" }]

const aboutItems = [
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "/contact" },
]

export function HeaderV2() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [platformOpen, setPlatformOpen] = useState(false)
  const [agentsOpen, setAgentsOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-accent" />

      <div className="relative mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <Link href="/test" className="flex items-center gap-2">
          <Image src="/images/cuva-white.png" alt="Cuva AI" width={140} height={34} className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-0">
          {/* Platform Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPlatformOpen(true)}
            onMouseLeave={() => setPlatformOpen(false)}
          >
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10">
              Platform
              <ChevronDown
                className={cn("ml-1 h-4 w-4 transition-transform duration-200", platformOpen && "rotate-180")}
              />
            </button>
            {platformOpen && (
              <>
                <div className="fixed left-0 right-0 top-14 h-4" />
                <div className="fixed left-0 right-0 top-[72px]">
                  <div className="w-full bg-background/95 backdrop-blur-lg border-b shadow-xl">
                    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                      {/* Platform Overview Card */}
                      <Link
                        href={platformOverview.href}
                        className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all group mb-8"
                      >
                        <div>
                          <span className="text-lg font-bold text-primary">{platformOverview.title}</span>
                          <p className="text-sm text-muted-foreground mt-1">{platformOverview.description}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>

                      {/* Main Platform Grid */}
                      <div className="grid grid-cols-4 gap-6">
                        {platformUpperItems.map((item) => (
                          <div key={item.title} className="space-y-3">
                            <Link
                              href={item.href}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                            >
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <item.icon className="h-5 w-5" />
                              </div>
                              <div>
                                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                  {item.title}
                                </span>
                                <p className="text-xs text-muted-foreground">{item.description}</p>
                              </div>
                            </Link>
                            {item.pages.length > 0 && (
                              <ul className="space-y-1 ml-2">
                                {item.pages.map((page) => (
                                  <li key={page.title}>
                                    <Link
                                      href={page.href}
                                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary rounded-md px-3 py-2 transition-colors hover:bg-muted"
                                    >
                                      <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                                      {page.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Lower Items */}
                      <div className="mt-6 pt-6 border-t border-border">
                        <div className="flex gap-6">
                          {platformLowerItems.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                              <item.icon className="h-4 w-4" />
                              <span>{item.title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Agents Dropdown */}
          <div className="relative" onMouseEnter={() => setAgentsOpen(true)} onMouseLeave={() => setAgentsOpen(false)}>
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10">
              Agents
              <ChevronDown
                className={cn("ml-1 h-4 w-4 transition-transform duration-200", agentsOpen && "rotate-180")}
              />
            </button>
            {agentsOpen && (
              <>
                <div className="absolute left-0 top-full h-2 w-full" />
                <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+0.5rem)]">
                  <div className="w-[280px] rounded-2xl border bg-background/95 backdrop-blur-lg p-2 shadow-xl">
                    <ul className="grid gap-1">
                      {agentItems.map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="block text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl px-4 py-3 transition-colors"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10">
              Solutions
              <ChevronDown
                className={cn("ml-1 h-4 w-4 transition-transform duration-200", solutionsOpen && "rotate-180")}
              />
            </button>
            {solutionsOpen && (
              <>
                <div className="absolute left-0 top-full h-2 w-full" />
                <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+0.5rem)]">
                  <div className="w-[280px] rounded-2xl border bg-background/95 backdrop-blur-lg p-2 shadow-xl">
                    <ul className="grid gap-1">
                      {solutionItems.map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="block text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl px-4 py-3 transition-colors"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10">
              Resources
              <ChevronDown
                className={cn("ml-1 h-4 w-4 transition-transform duration-200", resourcesOpen && "rotate-180")}
              />
            </button>
            {resourcesOpen && (
              <>
                <div className="absolute left-0 top-full h-2 w-full" />
                <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+0.5rem)]">
                  <div className="w-[280px] rounded-2xl border bg-background/95 backdrop-blur-lg p-2 shadow-xl">
                    <ul className="grid gap-1">
                      {resourceItems.map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="block text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl px-4 py-3 transition-colors"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* About Dropdown */}
          <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10">
              About
              <ChevronDown
                className={cn("ml-1 h-4 w-4 transition-transform duration-200", aboutOpen && "rotate-180")}
              />
            </button>
            {aboutOpen && (
              <>
                <div className="absolute left-0 top-full h-2 w-full" />
                <div className="absolute right-0 top-[calc(100%+0.5rem)]">
                  <div className="w-[200px] rounded-2xl border bg-background/95 backdrop-blur-lg p-2 shadow-xl">
                    <ul className="grid gap-1">
                      {aboutItems.map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="block text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl px-4 py-3 transition-colors"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </nav>

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Button
            variant="ghost"
            asChild
            className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-md px-5"
          >
            <a href="https://app.cuva.ai/" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
          <Button
            asChild
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-md px-6 shadow-lg"
          >
            <Link href="/demo">
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8 px-4">
              <MobileNavSection title="Platform" items={platformUpperItems.concat(platformLowerItems)} />
              <MobileNavSection title="Agents" items={agentItems} />
              <MobileNavSection title="Solutions" items={solutionItems} />
              <MobileNavSection title="Resources" items={resourceItems} />
              <MobileNavSection title="About" items={aboutItems} />
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
                <Button variant="outline" asChild className="rounded-full bg-transparent">
                  <a href="https://app.cuva.ai/" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full"
                >
                  <Link href="/demo">
                    Book a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function MobileNavSection({
  title,
  items,
}: {
  title: string
  items: {
    title: string
    href: string
    icon?: React.ComponentType<{ className?: string }>
    description?: string
    pages?: { title: string; href: string }[]
  }[]
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b pb-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-2 text-lg font-medium"
      >
        {title}
        <ChevronDown className={cn("h-5 w-5 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="ml-4 flex flex-col gap-3 pb-2">
          {items.map((item) => (
            <div key={item.title}>
              <Link
                href={item.href}
                className="flex items-center gap-2 font-bold text-primary hover:text-primary/80 py-1"
              >
                {item.icon && (
                  <span className="flex h-4 w-4 items-center justify-center flex-shrink-0">
                    <item.icon className="h-4 w-4" />
                  </span>
                )}
                <span>{item.title}</span>
              </Link>
              {item.pages && item.pages.length > 0 && (
                <div className="pl-6 flex flex-col gap-1 mt-1">
                  {item.pages.map((page) => (
                    <Link
                      key={page.title}
                      href={page.href}
                      className="text-sm text-muted-foreground hover:text-primary py-1"
                    >
                      {page.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

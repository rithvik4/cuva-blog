"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown, Brain, Bot, Plug, Layers, Shield, Lock } from "lucide-react"
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
    pages: [
      { title: "Agent Studio", href: "/platform/cuva-agents/agent-studio" },
      { title: "Multi-Agent Workflows", href: "/platform/cuva-agents/multi-agent-workflows" },
    ],
  },
  {
    title: "Connectors",
    href: "/platform/connectors",
    icon: Plug,
    pages: [
      { title: "Application Connectors", href: "/platform/connectors/application-connectors" },
      { title: "Financial Connectors", href: "/platform/connectors/financial-connectors" },
    ],
  },
  {
    title: "Operating Fabric",
    href: "/platform/operating-fabric",
    icon: Layers,
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

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [platformOpen, setPlatformOpen] = useState(false)
  const [agentsOpen, setAgentsOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors",
        scrolled ? "bg-white shadow-sm" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/cuva-black.png" alt="Cuva AI" width={120} height={32} className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          {/* Platform Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPlatformOpen(true)}
            onMouseLeave={() => setPlatformOpen(false)}
          >
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#F7F8F9]">
              Platform
              <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", platformOpen && "rotate-180")} />
            </button>
            {platformOpen && (
              <>
                <div className="fixed left-0 right-0 top-10 h-6" />
                <div className="fixed left-0 right-0 top-16">
                  <div className="w-full border-t border-b bg-white shadow-lg">
                    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                      <div className="flex justify-center mb-6">
                        <Link href={platformOverview.href} className="text-center group">
                          <span className="text-lg font-bold text-primary group-hover:text-primary/80 transition-colors">
                            {platformOverview.title}
                          </span>
                          <p className="text-sm text-muted-foreground mt-1">{platformOverview.description}</p>
                        </Link>
                      </div>
                      <div className="border-t border-gray-200 mb-6" />
                      {/* End Platform Overview */}

                      <div className="grid grid-cols-4 gap-8 divide-x divide-gray-200">
                        {platformUpperItems.map((item) => (
                          <div key={item.title} className="space-y-3 pl-8 first:pl-0">
                            <Link
                              href={item.href}
                              className="flex items-start gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                            >
                              <item.icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
                              <span>{item.title}</span>
                            </Link>
                            {item.pages.length > 0 && (
                              <ul className="space-y-1 ml-7">
                                {item.pages.map((page) => (
                                  <li key={page.title}>
                                    <Link
                                      href={page.href}
                                      className="block text-sm text-muted-foreground hover:text-primary hover:bg-[#F7F8F9] rounded-md px-3 py-2 transition-colors"
                                    >
                                      {page.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="my-6 border-t border-gray-200" />
                      <div className="grid grid-cols-2 gap-8">
                        {platformLowerItems.map((item) => (
                          <div key={item.title}>
                            <Link
                              href={item.href}
                              className="flex items-start gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                            >
                              <item.icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
                              <span>{item.title}</span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Agents Dropdown */}
          <div className="relative" onMouseEnter={() => setAgentsOpen(true)} onMouseLeave={() => setAgentsOpen(false)}>
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#F7F8F9]">
              Agents
              <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", agentsOpen && "rotate-180")} />
            </button>
            {agentsOpen && (
              <>
                <div className="absolute left-0 top-full h-2 w-full" />
                <div className="absolute left-0 top-[calc(100%+0.5rem)]">
                  <div className="w-[300px] rounded-lg border bg-white p-4 shadow-lg">
                    <ul className="grid gap-1">
                      {agentItems.map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="block text-sm text-muted-foreground hover:text-primary hover:bg-[#F7F8F9] rounded-md px-3 py-2 transition-colors"
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
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#F7F8F9]">
              Solutions
              <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", solutionsOpen && "rotate-180")} />
            </button>
            {solutionsOpen && (
              <>
                <div className="absolute left-0 top-full h-2 w-full" />
                <div className="absolute left-0 top-[calc(100%+0.5rem)]">
                  <div className="w-[300px] rounded-lg border bg-white p-4 shadow-lg">
                    <ul className="grid gap-1">
                      {solutionItems.map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="block text-sm text-muted-foreground hover:text-primary hover:bg-[#F7F8F9] rounded-md px-3 py-2 transition-colors"
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
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#F7F8F9]">
              Resources
              <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", resourcesOpen && "rotate-180")} />
            </button>
            {resourcesOpen && (
              <>
                <div className="absolute left-0 top-full h-2 w-full" />
                <div className="absolute left-0 top-[calc(100%+0.5rem)]">
                  <div className="w-[300px] rounded-lg border bg-white p-4 shadow-lg">
                    <ul className="grid gap-1">
                      {resourceItems.map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="block text-sm text-muted-foreground hover:text-primary hover:bg-[#F7F8F9] rounded-md px-3 py-2 transition-colors"
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
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#F7F8F9]">
              About
              <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", aboutOpen && "rotate-180")} />
            </button>
            {aboutOpen && (
              <>
                <div className="absolute left-0 top-full h-2 w-full" />
                <div className="absolute left-0 top-[calc(100%+0.5rem)]">
                  <div className="w-[200px] rounded-lg border bg-white p-4 shadow-lg">
                    <ul className="grid gap-1">
                      {aboutItems.map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="block text-sm text-muted-foreground hover:text-primary hover:bg-[#F7F8F9] rounded-md px-3 py-2 transition-colors"
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

          <Link
            href="/blog"
            className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#F7F8F9]"
          >
            Blog
          </Link>
        </nav>

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/5 bg-transparent">
            <a href="https://app.cuva.ai/" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
          <Button asChild className="bg-primary text-white hover:bg-primary/90">
            <Link href="/demo">Book a Demo</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
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
              <div className="border-b pb-2">
                <Link
                  href="/blog"
                  className="flex w-full items-center justify-between py-2 text-lg font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Blog
                </Link>
              </div>
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                <Button variant="outline" asChild>
                  <a href="https://app.cuva.ai/" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
                <Button asChild className="bg-primary text-white hover:bg-primary/90">
                  <Link href="/demo">Book a Demo</Link>
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

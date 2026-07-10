import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  platform: [
    { label: "Knowledge Systems", href: "/platform/knowledge-systems" },
    { label: "Agentic Automation", href: "/platform/cuva-agents" },
    { label: "Connectors", href: "/platform/connectors" },
    { label: "Operating Fabric", href: "/platform/operating-fabric" },
    { label: "Built for the Enterprise", href: "/platform/built-for-enterprise" },
    { label: "Privacy & Security", href: "/platform/privacy-security" },
  ],
  solutions: [
    { label: "Wealth Management", href: "/solutions/wealth-management" },
    { label: "Supply Chain Finance", href: "/solutions/supply-chain-finance" },
  ],
  resources: [{ label: "Developers", href: "/resources/developers" }],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
  agents: [
    { label: "Agent Catalog", href: "/agents" },
    { label: "Wealth Management", href: "/agents/wealth-management" },
    { label: "Supply Chain Finance", href: "/agents/supply-chain-finance" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0F0D1A] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Image src="/images/cuva-black.png" alt="Cuva AI" width={100} height={28} className="h-7 w-auto invert" />
            <p className="mt-4 text-sm text-white/60 max-w-xs">
              AI-native operating platform for the financial industry.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Agents</h4>
            <ul className="space-y-3">
              {footerLinks.agents.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">About</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">© {new Date().getFullYear()} Cuva AI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-white/40 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white/40 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

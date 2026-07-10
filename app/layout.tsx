import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Open_Sans, Nunito_Sans, Nunito_Sans as V0_Font_Nunito_Sans, Open_Sans as V0_Font_Open_Sans } from 'next/font/google'

// Initialize fonts
const _nunitoSans = V0_Font_Nunito_Sans({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900","1000"] })
const _openSans = V0_Font_Open_Sans({ subsets: ['latin'], weight: ["300","400","500","600","700","800"] })

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" })
const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito-sans" })

export const metadata: Metadata = {
  title: "Cuva AI | AI Native Operating Platform for Financial Industry",
  description:
    "A comprehensive AI-native operating platform combining financial connectors, agentic workflow automation, and enterprise operating fabric for wealth management, banking, and supply chain finance.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon.png?v=3",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png?v=3",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openSans.variable} ${nunitoSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

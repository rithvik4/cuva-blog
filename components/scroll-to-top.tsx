"use client"

import { useEffect } from "react"

export function ScrollToTop() {
  useEffect(() => {
    // Disable browser scroll restoration and force the page to the top on mount.
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual"
      }
      window.scrollTo(0, 0)
    }
  }, [])

  return null
}

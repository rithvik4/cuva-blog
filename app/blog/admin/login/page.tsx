"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Lock, ArrowRight, Loader2, User } from "lucide-react"

export default function AdminLoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      })

      const data = await response.json()

      if (response.ok) {
        // Redirect to admin dashboard on success
        router.push("/blog/admin")
        router.refresh()
      } else {
        setError(data.error || "Invalid password")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-4">
      
      <div className="w-full max-w-md z-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
            Cuva Admin
          </h1>
          <p className="text-slate-500 text-sm">
            Enter your credentials to access the dashboard
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <form onSubmit={handleLogin} className="space-y-6">
            
            <div className="space-y-4">
              {/* Username Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20 focus:border-[#5B3CF5] transition-all placeholder:text-slate-300 text-slate-900"
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5B3CF5]/20 focus:border-[#5B3CF5] transition-all placeholder:text-slate-300 text-slate-900"
                />
              </div>
              
              {/* Error Message */}
              {error && (
                <div className="mt-3 text-sm text-red-500 font-medium px-1 flex items-center">
                   {error}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#593bee] to-[#180577] text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  Access Dashboard
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

import { ChevronRight, Clock, CheckCircle, XCircle, Loader2 } from "lucide-react"

export function OperationsConsoleLayout() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">Console Layout</h2>
          <p className="text-lg text-[#3D3D4E]">
            A unified interface for monitoring, inspecting, and controlling your workflows
          </p>
        </div>

        {/* Console UI Mockup */}
        <div className="max-w-6xl mx-auto bg-[#0F0D1A] rounded-2xl shadow-2xl overflow-hidden border border-[#3D3D4E]/30">
          {/* Console Header */}
          <div className="bg-[#1a1a2e] px-6 py-4 border-b border-[#3D3D4E]/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-white font-medium">Operations Console</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Last updated: Just now</span>
            </div>
          </div>

          {/* Console Body - 3 Panel Layout */}
          <div className="grid lg:grid-cols-12 min-h-[500px]">
            {/* Runs List */}
            <div className="lg:col-span-4 border-r border-[#3D3D4E]/30 p-4">
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-4">Workflow Runs</div>
              <div className="space-y-2">
                {[
                  { status: "success", name: "Invoice Processing #1247", time: "2m ago", active: false },
                  { status: "running", name: "KYC Verification #1248", time: "Running", active: true },
                  { status: "success", name: "Portfolio Rebalance #1246", time: "5m ago", active: false },
                  { status: "failed", name: "Data Sync #1245", time: "12m ago", active: false },
                  { status: "success", name: "Report Generation #1244", time: "18m ago", active: false },
                  { status: "success", name: "Client Onboarding #1243", time: "25m ago", active: false },
                ].map((run, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 rounded-lg p-3 cursor-pointer transition-colors ${
                      run.active ? "bg-[#593BEE]/20 border border-[#593BEE]/50" : "bg-[#1a1a2e] hover:bg-[#1a1a2e]/80"
                    }`}
                  >
                    {run.status === "success" && <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />}
                    {run.status === "running" && (
                      <Loader2 className="w-4 h-4 text-[#80E9FF] animate-spin flex-shrink-0" />
                    )}
                    {run.status === "failed" && <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />}
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm truncate">{run.name}</div>
                      <div className="text-gray-500 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {run.time}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Run Detail */}
            <div className="lg:col-span-4 border-r border-[#3D3D4E]/30 p-4">
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-4">Run Detail</div>
              <div className="space-y-4">
                <div className="bg-[#1a1a2e] rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Loader2 className="w-4 h-4 text-[#80E9FF] animate-spin" />
                    <span className="text-white font-medium">KYC Verification #1248</span>
                  </div>
                  <div className="text-xs text-gray-400 space-y-1">
                    <div>Triggered by: API Webhook</div>
                    <div>Started: 2 minutes ago</div>
                    <div>Agent: KYC Verification Agent</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Execution Steps</div>
                {[
                  { step: "Document Received", status: "complete" },
                  { step: "Identity Extraction", status: "complete" },
                  { step: "Database Lookup", status: "complete" },
                  { step: "Risk Assessment", status: "running" },
                  { step: "Decision Output", status: "pending" },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    {step.status === "complete" && <CheckCircle className="w-4 h-4 text-green-500" />}
                    {step.status === "running" && <Loader2 className="w-4 h-4 text-[#80E9FF] animate-spin" />}
                    {step.status === "pending" && <div className="w-4 h-4 rounded-full border border-gray-600" />}
                    <span className={step.status === "pending" ? "text-gray-500" : "text-white"}>{step.step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Logs Panel */}
            <div className="lg:col-span-4 p-4">
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-4">Logs</div>
              <div className="bg-[#1a1a2e] rounded-lg p-4 font-mono text-xs space-y-2 h-[400px] overflow-y-auto">
                <div className="text-gray-500">[14:32:01] Workflow triggered via API</div>
                <div className="text-gray-500">[14:32:01] Agent: KYC Verification initialized</div>
                <div className="text-green-400">[14:32:02] Step 1: Document received - passport.pdf</div>
                <div className="text-green-400">[14:32:03] Step 2: Identity extraction complete</div>
                <div className="text-gray-400"> → Name: John Smith</div>
                <div className="text-gray-400"> → DOB: 1985-03-15</div>
                <div className="text-gray-400"> → Document: Passport</div>
                <div className="text-green-400">[14:32:05] Step 3: Database lookup complete</div>
                <div className="text-gray-400"> → Match found: Customer #42891</div>
                <div className="text-[#80E9FF]">[14:32:06] Step 4: Risk assessment in progress...</div>
                <div className="text-gray-400"> → Checking sanctions list</div>
                <div className="text-gray-400"> → Validating document authenticity</div>
                <div className="text-gray-500 animate-pulse">[14:32:08] Processing...</div>
              </div>
            </div>
          </div>
        </div>

        {/* Relationship to Other Components */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-[#0F0D1A] text-center mb-8">
            Relationship to Other Platform Components
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Multi-Agent Workflows executes workflows",
              "Operating Fabric enforces policies and runtime rules",
              "Connectors and Knowledge Systems supply data",
              "Operations Console provides visibility and control",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-[#F4F4F7] rounded-lg p-4">
                <div className="w-2 h-2 rounded-full bg-[#593BEE]" />
                <span className="text-[#3D3D4E]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { MessageSquare, FileText, CheckCircle, Play } from "lucide-react"

export function CuvabotVisualBlock() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Chat UI Mockup */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Chat header */}
            <div className="bg-[#0F0D1A] px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-white font-medium">CuvaBot</span>
                <span className="text-white/60 text-sm ml-2">Online</span>
              </div>
            </div>

            {/* Chat messages */}
            <div className="p-6 space-y-6 bg-gray-50 min-h-[400px]">
              {/* User question */}
              <div className="flex justify-end">
                <div className="bg-primary text-white rounded-2xl rounded-tr-md px-5 py-3 max-w-[75%]">
                  What's the compliance status for the Henderson portfolio restructuring?
                </div>
              </div>

              {/* Bot response with sources */}
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-md px-5 py-4 max-w-[85%] space-y-3">
                  <p className="text-[#3D3D4E]">
                    The Henderson portfolio restructuring is currently in compliance review. Based on the latest
                    assessment:
                  </p>
                  <ul className="text-[#0F0D1A] space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Risk assessment completed on Dec 18</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Documentation requirements met</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 border-2 border-amber-500 rounded-full mt-0.5 flex-shrink-0" />
                      <span>Final approval pending from compliance officer</span>
                    </li>
                  </ul>
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-100 mt-3">
                    <FileText className="w-4 h-4 text-[#9090A7]" />
                    <span className="text-xs text-[#9090A7]">
                      Sources: Portfolio Compliance DB, Risk Assessment System
                    </span>
                  </div>
                </div>
              </div>

              {/* Action confirmation */}
              <div className="flex justify-end">
                <div className="bg-primary text-white rounded-2xl rounded-tr-md px-5 py-3 max-w-[75%]">
                  Send a reminder to the compliance officer for approval
                </div>
              </div>

              {/* Workflow execution */}
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-md px-5 py-4 max-w-[85%] space-y-3">
                  <div className="flex items-center gap-2 text-[#0F0D1A] font-medium">
                    <Play className="w-4 h-4 text-primary" />
                    <span>Workflow Executed</span>
                  </div>
                  <p className="text-[#3D3D4E] text-sm">
                    Reminder sent to Sarah Chen (Compliance Officer) regarding Henderson portfolio approval. Expected
                    response within 24 hours.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-green-600 bg-green-50 px-3 py-1.5 rounded-full w-fit">
                    <CheckCircle className="w-3 h-3" />
                    <span>Action completed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Input area */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3">
                <span className="text-[#9090A7]">Ask CuvaBot...</span>
              </div>
            </div>
          </div>

          {/* Caption */}
          <p className="text-center text-[#9090A7] mt-6 text-lg italic">
            Turn questions into answers, and answers into actions.
          </p>
        </div>
      </div>
    </section>
  )
}

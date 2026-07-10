import { Shield, FileCheck, Eye } from "lucide-react"

export function PlatformRegulatedReality() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Designed for Regulated Reality</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            Cuva is built for the realities of regulated financial environments, where trust, auditability, and
            explainability are mandatory. Every action, decision, and workflow execution is governed, logged, and
            traceable, enabling enterprises to adopt AI with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex items-center gap-3">
              <FileCheck className="h-5 w-5 text-primary" />
              <span className="text-gray-300">Full auditability</span>
            </div>
            <div className="flex items-center gap-3">
              <Eye className="h-5 w-5 text-primary" />
              <span className="text-gray-300">Complete traceability</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-gray-300">Policy enforcement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

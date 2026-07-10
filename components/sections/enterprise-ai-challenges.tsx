"use client"

const challenges = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="7" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="17" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="7" cy="14.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="17" cy="14.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Lack of Contextual Intelligence",
    description: "Your enterprise AI requires continuous, up-to-date enterprise context to operate effectively. Without it, your agents cannot understand enterprise processes and workflows."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="4" y1="21" x2="4" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="4" y1="10" x2="4" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="21" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="8" x2="12" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="20" y1="21" x2="20" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="20" y1="12" x2="20" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="4" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="20" cy="14" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Lack of Control",
    description: "Controlling enterprise AI remains a major challenge, including planning actions, coordinating agents and workflows, and controlling execution at the enterprise level."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Lack of Accuracy",
    description: "Your AI systems struggle to produce consistent, reliable outputs, and hallucinations make them difficult to rely on in production environments."
  }
]

export function EnterpriseAIChallenges() {
  return (
    <section className="pt-8 pb-0 bg-[#F8F7FC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-center text-[#0F0D1A] mb-4">
          Enterprise AI Reliability Challenges
        </h3>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-[#3D3D4E] text-center max-w-3xl mx-auto mb-12">
          Three fundamental gaps prevent your AI initiatives from operating reliably at enterprise scale.
        </p>

        {/* Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-neutral-100"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#F5F3FF] flex items-center justify-center text-[#593BEE] mb-6">
                {challenge.icon}
              </div>

              {/* Title with underline */}
              <h3 className="text-xl font-bold text-[#0F0D1A] mb-2">
                {challenge.title}
              </h3>
              <div className="w-10 h-1 bg-[#593BEE] rounded-full mb-4" />

              {/* Description */}
              <p className="text-sm text-[#3D3D4E] leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Callout */}
        <div className="bg-white rounded-2xl p-6 border border-neutral-100 flex items-center gap-5">
          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#F5F3FF] flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#593BEE]">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-base md:text-lg text-[#0F0D1A]">
            We have built an AI-native operating platform to help financial enterprises overcome these challenges by bringing{" "}
            <span className="text-[#593BEE] font-semibold">enterprise context, control, and accuracy</span>{" "}
            into one operating layer.
          </p>
        </div>
      </div>
    </section>
  )
}

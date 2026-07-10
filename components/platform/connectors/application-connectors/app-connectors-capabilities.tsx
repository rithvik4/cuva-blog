import { Users, FolderKanban, FileSpreadsheet, HardDrive, Mail, MessageCircle } from "lucide-react"

const capabilities = [
  {
    icon: Users,
    title: "CRM",
    description:
      "Sync client data, activity logs, tasks, pipelines, and communication histories from platforms like Salesforce, HubSpot, and Pipedrive.",
  },
  {
    icon: FolderKanban,
    title: "Collaboration",
    description:
      "Integrate collaboration tools such as Confluence, Jira, and Asana to centralize teamwork and project activity.",
  },
  {
    icon: FileSpreadsheet,
    title: "Productivity",
    description:
      "Connect productivity apps — Microsoft Word, Excel, PowerPoint, Google Sheets — to enable document-aware workflows.",
  },
  {
    icon: HardDrive,
    title: "File Storage",
    description:
      "Access and manage files from Google Drive, OneDrive, SharePoint, Dropbox, and FTP sources within workflows.",
  },
  {
    icon: Mail,
    title: "Email",
    description:
      "Integrate Gmail, Outlook, Mailchimp, and other email platforms for automated communication and notifications.",
  },
  {
    icon: MessageCircle,
    title: "Communication",
    description:
      "Connect real-time communication platforms such as Slack, Teams, Zoom, Google Meet, WebEx, and Vonage to power conversational workflows.",
  },
]

export function AppConnectorsCapabilities() {
  return (
    <section className="py-24 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F0D1A] mb-4">Connector Capabilities</h2>
          <p className="text-lg text-[#3D3D4E] max-w-3xl mx-auto">
            Connect across all your enterprise application categories with purpose-built integrations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#593BEE]"
            >
              <div className="w-16 h-16 rounded-xl bg-[#E5FAFE] flex items-center justify-center mb-6">
                <capability.icon className="w-8 h-8 text-[#593BEE]" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0F0D1A] mb-3">{capability.title}</h3>
              <p className="text-[#3D3D4E] leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

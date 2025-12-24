import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

export const metadata: Metadata = {
  title: "Remote Esports Jobs UK | Work From Home Gaming Careers | EsportsJobs.quest",
  description:
    "Find remote esports jobs in the UK. Work from home in coaching, content, marketing & more. Flexible gaming careers with UK and international organisations.",
  keywords:
    "remote esports jobs, work from home gaming jobs, remote gaming careers uk, esports jobs work from home, flexible esports roles",
  openGraph: {
    title: "Remote Esports Jobs UK | Work From Home Gaming Careers",
    description: "Find remote esports jobs. Work from home in coaching, content, marketing & more.",
    type: "website",
    url: "https://esportsjobs.quest/esports-jobs-remote",
  },
  alternates: {
    canonical: "https://esportsjobs.quest/esports-jobs-remote",
  },
};

const remoteRoles = [
  { role: "Esports Coach", suitability: "Excellent", notes: "VOD review, strategy sessions, and player development work well remotely. May need occasional in-person bootcamps." },
  { role: "Esports Analyst", suitability: "Excellent", notes: "Data analysis, opponent research, and reporting are fully remote-compatible." },
  { role: "Content Creator", suitability: "Excellent", notes: "Video editing, social content, and streaming can be done from anywhere with good internet." },
  { role: "Marketing Manager", suitability: "Good", notes: "Campaign management and digital marketing work remotely. Events may require travel." },
  { role: "Community Manager", suitability: "Excellent", notes: "Discord moderation and community engagement are inherently remote-first." },
  { role: "Tournament Admin", suitability: "Good", notes: "Online tournaments are fully remote. LAN events require on-site presence." },
  { role: "Broadcaster", suitability: "Mixed", notes: "Remote casting is common, but major events typically require on-site attendance." },
  { role: "Events Manager", suitability: "Limited", notes: "Planning can be remote, but execution requires physical presence at venues." },
];

const tips = [
  { title: "Invest in Your Setup", description: "Good internet, quality webcam, and professional home office environment are essential." },
  { title: "Time Zone Awareness", description: "Many esports orgs operate across time zones. Be flexible and communicate availability clearly." },
  { title: "Over-Communicate", description: "In remote roles, proactive communication prevents misunderstandings and shows engagement." },
  { title: "Build Virtual Relationships", description: "Actively network in Discord, attend virtual events, and maintain team connections." },
  { title: "Set Boundaries", description: "Esports can blur work-life balance. Establish clear working hours, especially with international teams." },
];

export default function EsportsJobsRemote() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <UnifiedHeader />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-transparent to-violet-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs-uk" className="hover:text-white">Esports Jobs UK</Link>
              <span className="mx-2">/</span>
              <span className="text-cyan-400">Remote</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Remote Esports Jobs:{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Work From Anywhere
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              The esports industry has embraced remote work. From coaching to content creation,
              many roles can be done from home. Find flexible opportunities with UK and international organisations.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="text-2xl font-bold text-cyan-400">150+</div>
                <div className="text-sm text-slate-400">Remote Roles</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="text-2xl font-bold text-violet-400">60%</div>
                <div className="text-sm text-slate-400">Fully Remote</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="text-2xl font-bold text-emerald-400">Global</div>
                <div className="text-sm text-slate-400">Opportunities</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="text-2xl font-bold text-amber-400">Flexible</div>
                <div className="text-sm text-slate-400">Hours Available</div>
              </div>
            </div>

            <Link href="/#jobs" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all inline-block">
              Browse Remote Jobs
            </Link>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Remote Suitability by Role</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {remoteRoles.map((item) => (
                <div key={item.role} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">{item.role}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      item.suitability === "Excellent" ? "bg-emerald-600/20 text-emerald-400" :
                      item.suitability === "Good" ? "bg-cyan-600/20 text-cyan-400" :
                      item.suitability === "Mixed" ? "bg-amber-600/20 text-amber-400" :
                      "bg-red-600/20 text-red-400"
                    }`}>{item.suitability}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{item.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Tips for Remote Esports Work</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {tips.map((tip) => (
                <div key={tip.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="font-bold text-white mb-2">{tip.title}</h3>
                  <p className="text-slate-400 text-sm">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-cyan-600/20 via-slate-900 to-violet-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Start Your Remote Esports Career</h2>
            <p className="text-slate-300 mb-8">Work from anywhere with top gaming organisations.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#jobs" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-violet-600 text-white font-semibold rounded-xl">
                Browse Remote Jobs
              </Link>
              <Link href="/esports-jobs-uk" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                All UK Jobs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter />
    </div>
  );
}

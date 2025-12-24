import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

export const metadata: Metadata = {
  title: "Esports Analyst Careers UK | Data & Strategy Jobs | EsportsJobs.quest",
  description: "Become an esports analyst. Guide to analyst careers, data analysis in gaming, salaries, and how to break into esports analytics.",
  keywords: "esports analyst jobs, esports data analyst, gaming analyst careers, esports strategy analyst",
  alternates: { canonical: "https://esportsjobs.quest/esports-analyst-careers" },
};

const roles = [
  { title: "Junior Analyst", salary: "£22,000 - £30,000", focus: "Data collection, basic VOD review" },
  { title: "Esports Analyst", salary: "£28,000 - £42,000", focus: "Opponent scouting, strategy support" },
  { title: "Senior Analyst", salary: "£40,000 - £55,000", focus: "Lead analysis, presentations to team" },
  { title: "Head of Analytics", salary: "£50,000 - £75,000", focus: "Analytics department leadership" },
];

const skills = ["Data analysis (Excel, Python, SQL)", "Game-specific expertise", "Statistical thinking", "Pattern recognition", "Presentation skills", "VOD review techniques", "Communication", "Strategic mindset"];

export default function EsportsAnalystCareers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <UnifiedHeader />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-violet-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-careers" className="hover:text-white">Esports Careers</Link>
              <span className="mx-2">/</span>
              <span className="text-blue-400">Analyst</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Analyst Careers:{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Data-Driven Victory</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Esports analysts provide the competitive edge through data analysis, opponent scouting,
              and strategic insights. Turn your analytical mind into an esports career.
            </p>
            <Link href="/esports-jobs-uk" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-xl inline-block">
              Browse Analyst Jobs
            </Link>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Analyst Career Progression</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {roles.map((role) => (
                <div key={role.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">{role.title}</h3>
                    <span className="text-emerald-400">{role.salary}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{role.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Essential Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div key={skill} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
                  <span className="text-slate-300 text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600/20 via-slate-900 to-violet-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Start Your Analyst Career</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs-uk" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-xl">Analyst Jobs</Link>
              <Link href="/esports-careers" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">All Careers</Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter />
    </div>
  );
}

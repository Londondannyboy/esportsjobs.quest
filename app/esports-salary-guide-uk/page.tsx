import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

export const metadata: Metadata = {
  title: "Esports Salary Guide UK 2025 | What Do Esports Jobs Pay? | EsportsJobs.quest",
  description: "Complete UK esports salary guide for 2025. Salaries for coaches, analysts, marketers, broadcasters and more. Know your worth in the esports industry.",
  keywords: "esports salary uk, esports jobs pay, gaming industry salaries uk, esports wages, how much do esports jobs pay",
  alternates: { canonical: "https://esportsjobs.quest/esports-salary-guide-uk" },
};

const salaries = [
  { category: "Competition", roles: [
    { role: "Esports Coach", entry: "£25,000", mid: "£40,000", senior: "£65,000+" },
    { role: "Esports Analyst", entry: "£22,000", mid: "£35,000", senior: "£55,000+" },
    { role: "Team Manager", entry: "£26,000", mid: "£42,000", senior: "£65,000+" },
  ]},
  { category: "Content & Broadcast", roles: [
    { role: "Content Creator", entry: "£22,000", mid: "£40,000", senior: "£80,000+" },
    { role: "Broadcaster/Caster", entry: "£20,000", mid: "£38,000", senior: "£60,000+" },
    { role: "Video Producer", entry: "£24,000", mid: "£38,000", senior: "£55,000+" },
  ]},
  { category: "Marketing & Business", roles: [
    { role: "Marketing Manager", entry: "£28,000", mid: "£45,000", senior: "£70,000+" },
    { role: "Partnerships Manager", entry: "£30,000", mid: "£50,000", senior: "£80,000+" },
    { role: "Community Manager", entry: "£23,000", mid: "£35,000", senior: "£50,000+" },
  ]},
  { category: "Events & Operations", roles: [
    { role: "Tournament Organiser", entry: "£24,000", mid: "£38,000", senior: "£55,000+" },
    { role: "Event Manager", entry: "£26,000", mid: "£42,000", senior: "£60,000+" },
    { role: "Operations Manager", entry: "£28,000", mid: "£45,000", senior: "£70,000+" },
  ]},
];

export default function EsportsSalaryGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <UnifiedHeader />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-transparent to-violet-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs-uk" className="hover:text-white">Esports Jobs UK</Link>
              <span className="mx-2">/</span>
              <span className="text-emerald-400">Salary Guide</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Salary Guide UK{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">2025</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              What do esports jobs really pay in the UK? Our comprehensive salary guide covers all
              major roles from entry-level to senior positions.
            </p>
            <Link href="/esports-jobs-uk" className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-violet-600 text-white font-semibold rounded-xl inline-block">
              Browse Jobs
            </Link>
          </div>
        </section>

        {salaries.map((category) => (
          <section key={category.category} className="py-12 odd:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-white mb-6">{category.category}</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-slate-800/50 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-800 border-b border-slate-700">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Role</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Entry Level</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Mid Level</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Senior Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.roles.map((row, idx) => (
                      <tr key={row.role} className={idx % 2 === 0 ? "bg-slate-800/30" : "bg-slate-800/10"}>
                        <td className="px-6 py-4 text-slate-300 font-medium">{row.role}</td>
                        <td className="px-6 py-4 text-slate-400">{row.entry}</td>
                        <td className="px-6 py-4 text-slate-400">{row.mid}</td>
                        <td className="px-6 py-4 text-emerald-400 font-medium">{row.senior}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        ))}

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Key Factors Affecting Salary</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="font-bold text-white mb-2">Location</h3>
                <p className="text-slate-400 text-sm">London roles typically pay 10-20% more than regional positions.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="font-bold text-white mb-2">Organisation Size</h3>
                <p className="text-slate-400 text-sm">Tier 1 orgs and publishers pay more than smaller teams.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="font-bold text-white mb-2">Experience</h3>
                <p className="text-slate-400 text-sm">Proven track record significantly increases earning potential.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="font-bold text-white mb-2">Specialisation</h3>
                <p className="text-slate-400 text-sm">Niche expertise (specific games, tools) commands premium rates.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-emerald-600/20 via-slate-900 to-violet-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Next Role</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs-uk" className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-violet-600 text-white font-semibold rounded-xl">Browse Jobs</Link>
              <Link href="/esports-careers" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">Career Paths</Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter />
    </div>
  );
}

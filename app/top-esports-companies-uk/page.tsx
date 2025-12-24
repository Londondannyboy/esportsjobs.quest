import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

export const metadata: Metadata = {
  title: "Top Esports Companies UK 2025 | Who's Hiring? | EsportsJobs.quest",
  description: "Directory of top esports companies in the UK. From Fnatic to British Esports, discover who's hiring and where to apply for esports jobs.",
  keywords: "esports companies uk, uk esports organisations, gaming companies hiring uk, esports employers uk",
  alternates: { canonical: "https://esportsjobs.quest/top-esports-companies-uk" },
};

const companies = [
  { name: "Fnatic", type: "Esports Org", location: "London", employees: "100+", games: "LoL, Valorant, CS2", hiring: "Yes" },
  { name: "Excel Esports", type: "Esports Org", location: "London", employees: "30+", games: "LoL (LEC), Valorant", hiring: "Yes" },
  { name: "Guild Esports", type: "Esports Org", location: "London", employees: "20+", games: "Valorant, Rocket League, FIFA", hiring: "Yes" },
  { name: "Gfinity", type: "Tournament Operator", location: "London", employees: "50+", games: "Multiple", hiring: "Yes" },
  { name: "FACEIT", type: "Platform", location: "London", employees: "80+", games: "CS2, Dota 2, Multiple", hiring: "Yes" },
  { name: "British Esports", type: "Governing Body", location: "UK-wide", employees: "20+", games: "All", hiring: "Sometimes" },
  { name: "Wylde Gaming", type: "Esports Org", location: "Manchester", employees: "15+", games: "Rocket League, FIFA", hiring: "Yes" },
  { name: "Team Liquid EU", type: "Esports Org", location: "Remote/EU", employees: "50+", games: "Multiple", hiring: "Yes" },
  { name: "ESL UK", type: "Tournament Operator", location: "London", employees: "30+", games: "Multiple", hiring: "Yes" },
  { name: "Belong Gaming Arenas", type: "Venues", location: "Multiple UK", employees: "100+", games: "All", hiring: "Yes" },
  { name: "Insomnia Gaming Festival", type: "Events", location: "Birmingham", employees: "20+", games: "All", hiring: "Seasonal" },
  { name: "NUEL", type: "University Esports", location: "UK-wide", employees: "10+", games: "Multiple", hiring: "Yes" },
];

export default function TopEsportsCompaniesUK() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <UnifiedHeader activeSite="jobs" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-cyan-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs-uk" className="hover:text-white">Esports Jobs UK</Link>
              <span className="mx-2">/</span>
              <span className="text-violet-400">Top Companies</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Top Esports Companies{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Hiring in the UK</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              The UK is home to leading esports organisations, tournament operators, and gaming companies.
              Discover who&apos;s hiring and where to apply.
            </p>
            <Link href="/esports-jobs-uk" className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl inline-block">
              View Open Positions
            </Link>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">UK Esports Companies Directory</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.map((company) => (
                <div key={company.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">{company.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs ${company.hiring === "Yes" ? "bg-emerald-600/20 text-emerald-400" : "bg-amber-600/20 text-amber-400"}`}>
                      {company.hiring === "Yes" ? "Hiring" : company.hiring}
                    </span>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="text-violet-400">{company.type}</p>
                    <p className="text-slate-400">📍 {company.location}</p>
                    <p className="text-slate-400">👥 {company.employees}</p>
                    <p className="text-slate-500">🎮 {company.games}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-violet-600/20 via-slate-900 to-cyan-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Apply to Top Companies</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs-uk" className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl">Browse Jobs</Link>
              <Link href="/esports-recruitment" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">Recruitment Help</Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

export const metadata: Metadata = {
  title: "Esports Jobs London | Gaming Careers in the Capital | EsportsJobs.quest",
  description:
    "Find esports jobs in London. The UK's esports hub with Fnatic, Excel, Gfinity & more. Browse 200+ gaming roles in London. Competitive salaries & top organisations.",
  keywords:
    "esports jobs london, gaming jobs london, esports careers london, london gaming industry, esports companies london",
  openGraph: {
    title: "Esports Jobs London | Gaming Careers in the Capital",
    description: "Find esports jobs in London. The UK's esports hub with top organisations.",
    type: "website",
    url: "https://esportsjobs.quest/esports-jobs-london",
  },
  alternates: {
    canonical: "https://esportsjobs.quest/esports-jobs-london",
  },
};

const londonCompanies = [
  { name: "Fnatic", type: "Esports Organisation", roles: "50+", focus: "LoL, Valorant, CS2" },
  { name: "Excel Esports", type: "Esports Organisation", roles: "20+", focus: "LEC, Valorant" },
  { name: "Gfinity", type: "Tournament Operator", roles: "40+", focus: "Events, Broadcasting" },
  { name: "FACEIT", type: "Gaming Platform", roles: "60+", focus: "Platform, Esports Ops" },
  { name: "Sports Interactive", type: "Game Developer", roles: "30+", focus: "Football Manager" },
  { name: "British Esports", type: "Governing Body", roles: "15+", focus: "Education, Policy" },
  { name: "ESL UK", type: "Tournament Operator", roles: "20+", focus: "CS2, Events" },
  { name: "Guild Esports", type: "Esports Organisation", roles: "15+", focus: "Multi-title" },
];

const salaryComparison = [
  { role: "Esports Coach", london: "£35,000 - £70,000", ukAvg: "£30,000 - £60,000" },
  { role: "Marketing Manager", london: "£40,000 - £75,000", ukAvg: "£32,000 - £65,000" },
  { role: "Content Producer", london: "£32,000 - £55,000", ukAvg: "£28,000 - £48,000" },
  { role: "Tournament Organiser", london: "£30,000 - £55,000", ukAvg: "£26,000 - £48,000" },
  { role: "Community Manager", london: "£28,000 - £48,000", ukAvg: "£24,000 - £42,000" },
];

const areas = [
  { area: "Shoreditch/Old Street", description: "Tech hub with many gaming startups and creative agencies" },
  { area: "Soho/Central", description: "Publisher offices and media companies with esports divisions" },
  { area: "Stratford/Olympic Park", description: "Major esports venues and event spaces" },
  { area: "Hammersmith", description: "SEGA and other publisher headquarters" },
  { area: "Twickenham/West", description: "Studio clusters and gaming companies" },
];

export default function EsportsJobsLondon() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <UnifiedHeader />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-violet-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs-uk" className="hover:text-white">Esports Jobs UK</Link>
              <span className="mx-2">/</span>
              <span className="text-red-400">London</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Jobs London:{" "}
              <span className="bg-gradient-to-r from-red-400 to-violet-400 bg-clip-text text-transparent">
                The UK&apos;s Esports Capital
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              London is the heart of UK esports. Home to Fnatic, Excel Esports, Gfinity, and FACEIT,
              the capital offers more esports opportunities than anywhere else in Britain.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="text-2xl font-bold text-red-400">200+</div>
                <div className="text-sm text-slate-400">Active Roles</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="text-2xl font-bold text-violet-400">30+</div>
                <div className="text-sm text-slate-400">Companies</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="text-2xl font-bold text-cyan-400">+15%</div>
                <div className="text-sm text-slate-400">London Premium</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="text-2xl font-bold text-amber-400">Hybrid</div>
                <div className="text-sm text-slate-400">Many Flexible</div>
              </div>
            </div>

            <Link href="/#jobs" className="px-8 py-4 bg-gradient-to-r from-red-600 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all inline-block">
              Browse London Jobs
            </Link>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Top London Esports Employers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {londonCompanies.map((company) => (
                <div key={company.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-2">{company.name}</h3>
                  <p className="text-slate-400 text-sm mb-2">{company.type}</p>
                  <p className="text-xs text-slate-500 mb-2">{company.focus}</p>
                  <span className="text-emerald-400 text-sm">{company.roles} employees</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">London Esports Salary Guide</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-slate-800/50 rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-800 border-b border-slate-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Role</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">London Salary</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">UK Average</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryComparison.map((row, idx) => (
                    <tr key={row.role} className={idx % 2 === 0 ? "bg-slate-800/30" : "bg-slate-800/10"}>
                      <td className="px-6 py-4 text-slate-300">{row.role}</td>
                      <td className="px-6 py-4 text-emerald-400">{row.london}</td>
                      <td className="px-6 py-4 text-slate-400">{row.ukAvg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">London Gaming Hubs</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {areas.map((area) => (
                <div key={area.area} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="font-bold text-white mb-2">{area.area}</h3>
                  <p className="text-slate-400 text-xs">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-red-600/20 via-slate-900 to-violet-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your London Esports Role</h2>
            <p className="text-slate-300 mb-8">Browse current opportunities in the UK&apos;s esports capital.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#jobs" className="px-8 py-4 bg-gradient-to-r from-red-600 to-violet-600 text-white font-semibold rounded-xl">
                Browse London Jobs
              </Link>
              <Link href="/esports-jobs-remote" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Remote Options
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter />
    </div>
  );
}

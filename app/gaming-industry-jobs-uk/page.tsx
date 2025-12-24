import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

export const metadata: Metadata = {
  title: "Gaming Industry Jobs UK | Complete Guide 2025 | EsportsJobs.quest",
  description:
    "Find gaming industry jobs across the UK. From game development to publishing, QA to marketing. 1000+ roles at leading UK gaming companies. Apply today.",
  keywords:
    "gaming industry jobs uk, uk games industry careers, video game jobs uk, gaming sector jobs, games industry employment uk",
  openGraph: {
    title: "Gaming Industry Jobs UK | Complete Guide 2025",
    description: "Find gaming industry jobs across the UK. From development to publishing.",
    type: "website",
    url: "https://esportsjobs.quest/gaming-industry-jobs-uk",
  },
  alternates: {
    canonical: "https://esportsjobs.quest/gaming-industry-jobs-uk",
  },
};

const sectors = [
  { name: "Game Development", roles: "Programmers, Designers, Artists, Audio", companies: "Rockstar, Playground, Rare" },
  { name: "Publishing", roles: "Marketing, PR, Localisation, Community", companies: "SEGA, EA, Bandai Namco" },
  { name: "QA & Testing", roles: "Testers, QA Leads, Automation, Compliance", companies: "Keywords, Pole To Win" },
  { name: "Esports", roles: "Coaches, Analysts, Events, Broadcasting", companies: "Fnatic, Excel, Gfinity" },
  { name: "Streaming & Content", roles: "Creators, Editors, Talent Management", companies: "Twitch, YouTube Gaming" },
  { name: "Services & Tech", roles: "Tools, Middleware, Platform Development", companies: "Unity, Improbable, Multiplay" },
];

const stats = [
  { value: "£7B+", label: "Annual Revenue" },
  { value: "20,000+", label: "Employees" },
  { value: "500+", label: "Companies" },
  { value: "12%", label: "Annual Growth" },
];

export default function GamingIndustryJobsUK() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <UnifiedHeader />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-emerald-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/gaming-jobs-uk" className="hover:text-white">Gaming Jobs UK</Link>
              <span className="mx-2">/</span>
              <span className="text-violet-400">Industry Overview</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Gaming Industry Jobs UK:{" "}
              <span className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
                Complete Guide 2025
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              The UK gaming industry is one of the largest in the world. With over £7 billion in annual
              revenue and 20,000+ employees, opportunities span development, publishing, esports, and beyond.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-2xl font-bold text-violet-400">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link href="/#jobs" className="px-8 py-4 bg-gradient-to-r from-violet-600 to-emerald-600 text-white font-semibold rounded-xl inline-block">
              Browse Industry Jobs
            </Link>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">UK Gaming Sectors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector) => (
                <div key={sector.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-2">{sector.name}</h3>
                  <p className="text-slate-400 text-sm mb-2"><strong>Roles:</strong> {sector.roles}</p>
                  <p className="text-slate-500 text-xs"><strong>Key Companies:</strong> {sector.companies}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">The UK Games Industry</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-slate-300 mb-6">
                According to <a href="https://ukie.org.uk" className="text-violet-400">Ukie</a>, the UK games
                industry generates over £7 billion annually, making it one of Europe&apos;s largest markets.
                The sector employs more than 20,000 people across 500+ companies, from AAA giants to indie studios.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                The UK&apos;s Video Games Tax Relief (VGTR) has attracted significant investment, while
                world-class universities produce talented graduates. From Rockstar&apos;s Edinburgh studio
                to the Silicon Spa cluster in Leamington, opportunities exist nationwide.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-violet-600/20 via-slate-900 to-emerald-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Explore Gaming Opportunities</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/gaming-jobs-uk" className="px-8 py-4 bg-gradient-to-r from-violet-600 to-emerald-600 text-white font-semibold rounded-xl">
                All Gaming Jobs
              </Link>
              <Link href="/gaming-tester-jobs-uk" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                QA Tester Jobs
              </Link>
              <Link href="/esports-jobs-uk" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Esports Jobs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter />
    </div>
  );
}

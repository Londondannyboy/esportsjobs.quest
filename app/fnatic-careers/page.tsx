import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

export const metadata: Metadata = {
  title: "Fnatic Careers & Jobs UK | Work at Fnatic | EsportsJobs.quest",
  description: "Find jobs at Fnatic, the UK's leading esports organisation. Careers in coaching, content, marketing, operations and more at one of esports' biggest brands.",
  keywords: "fnatic jobs, fnatic careers, work at fnatic, fnatic esports jobs, fnatic london jobs",
  alternates: { canonical: "https://esportsjobs.quest/fnatic-careers" },
};

const departments = [
  { name: "Esports Performance", roles: ["Coaches", "Analysts", "Team Managers", "Sports Psychologists"] },
  { name: "Content & Creative", roles: ["Video Producers", "Editors", "Designers", "Content Managers"] },
  { name: "Marketing & Brand", roles: ["Marketing Managers", "Social Media", "Partnerships", "Community"] },
  { name: "Business & Operations", roles: ["Finance", "HR", "Legal", "Operations", "IT"] },
  { name: "Product & Tech", roles: ["Product Managers", "Developers", "UX Designers"] },
];

const facts = [
  { label: "Founded", value: "2004" },
  { label: "Headquarters", value: "London, UK" },
  { label: "Employees", value: "100+" },
  { label: "Games", value: "LoL, Valorant, CS2" },
  { label: "Major Titles", value: "6 World Championships" },
  { label: "Social Following", value: "10M+" },
];

export default function FnaticCareers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <UnifiedHeader />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-transparent to-slate-900" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/top-esports-companies-uk" className="hover:text-white">Top Companies</Link>
              <span className="mx-2">/</span>
              <span className="text-orange-400">Fnatic</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Fnatic Careers:{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Join a Legend</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Fnatic is one of the world&apos;s most iconic esports organisations, headquartered in London.
              With teams competing in League of Legends, Valorant, and CS2, Fnatic offers careers across
              esports, content, marketing, and business functions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://fnatic.com/careers" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold rounded-xl inline-block">
                Fnatic Careers Page
              </a>
              <Link href="/esports-jobs-uk" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                All Esports Jobs
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Fnatic at a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
                  <div className="text-xl font-bold text-orange-400">{fact.value}</div>
                  <div className="text-sm text-slate-400">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Departments at Fnatic</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept) => (
                <div key={dept.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-3">{dept.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {dept.roles.map((role) => (
                      <span key={role} className="px-2 py-1 bg-orange-600/20 text-orange-400 text-xs rounded">{role}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-orange-600/20 via-slate-900 to-amber-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Apply to Fnatic</h2>
            <p className="text-slate-300 mb-8">Check Fnatic&apos;s official careers page for current openings.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://fnatic.com/careers" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold rounded-xl">
                Fnatic Careers
              </a>
              <Link href="/esports-jobs-uk" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                All Esports Jobs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter />
    </div>
  );
}

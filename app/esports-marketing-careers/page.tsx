import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

export const metadata: Metadata = {
  title: "Esports Marketing Careers UK | Marketing Jobs Guide | EsportsJobs.quest",
  description: "Build your esports marketing career. Guide to marketing roles, salaries, and opportunities in UK esports and gaming organisations.",
  keywords: "esports marketing jobs, gaming marketing careers, esports brand marketing, gaming marketing uk",
  alternates: { canonical: "https://esportsjobs.quest/esports-marketing-careers" },
};

const roles = [
  { title: "Marketing Coordinator", salary: "£24,000 - £32,000", focus: "Campaign support, content coordination" },
  { title: "Social Media Manager", salary: "£28,000 - £40,000", focus: "Platform management, community engagement" },
  { title: "Marketing Manager", salary: "£38,000 - £55,000", focus: "Strategy, campaigns, team leadership" },
  { title: "Partnerships Manager", salary: "£40,000 - £65,000", focus: "Sponsor relations, deal negotiation" },
  { title: "Head of Marketing", salary: "£55,000 - £85,000", focus: "Department leadership, brand strategy" },
  { title: "CMO", salary: "£80,000 - £150,000+", focus: "Executive marketing leadership" },
];

const skills = ["Digital marketing", "Social media expertise", "Content creation", "Analytics", "Brand strategy", "Gaming culture knowledge", "Campaign management", "Sponsorship activation"];

export default function EsportsMarketingCareers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <UnifiedHeader activeSite="jobs" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-transparent to-violet-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-careers" className="hover:text-white">Esports Careers</Link>
              <span className="mx-2">/</span>
              <span className="text-pink-400">Marketing</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Marketing Careers:{" "}
              <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">Build Gaming Brands</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Marketing in esports means building brands, engaging passionate communities, and driving growth
              for gaming organisations. Discover marketing career opportunities in UK esports.
            </p>
            <Link href="/esports-jobs-uk" className="px-8 py-4 bg-gradient-to-r from-pink-600 to-violet-600 text-white font-semibold rounded-xl inline-block">
              Browse Marketing Jobs
            </Link>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Marketing Roles & Salaries</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((role) => (
                <div key={role.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">{role.title}</h3>
                    <span className="text-emerald-400 text-sm">{role.salary}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{role.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Key Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div key={skill} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
                  <span className="text-slate-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-pink-600/20 via-slate-900 to-violet-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Launch Your Marketing Career</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs-uk" className="px-8 py-4 bg-gradient-to-r from-pink-600 to-violet-600 text-white font-semibold rounded-xl">Marketing Jobs</Link>
              <Link href="/esports-careers" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">All Careers</Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}

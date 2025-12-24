import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

export const metadata: Metadata = {
  title: "Esports Broadcaster Careers UK | Casting & Hosting Jobs | EsportsJobs.quest",
  description: "Become an esports broadcaster, caster or host. Guide to broadcast careers, how to start casting, and jobs in esports production.",
  keywords: "esports caster jobs, esports broadcaster careers, esports host jobs, casting esports uk",
  alternates: { canonical: "https://esportsjobs.quest/esports-broadcaster-careers" },
};

const roles = [
  { title: "Freelance Caster", salary: "£100-500/event", focus: "Cast community and amateur events" },
  { title: "Staff Caster", salary: "£28,000 - £45,000", focus: "Regular casting for org or operator" },
  { title: "Lead Talent", salary: "£45,000 - £80,000", focus: "Main stage casting, major events" },
  { title: "Broadcast Producer", salary: "£35,000 - £60,000", focus: "Direct shows, manage production" },
  { title: "Desk Host/Analyst", salary: "£30,000 - £55,000", focus: "Pre/post show analysis and hosting" },
];

const skills = ["Public speaking", "Quick thinking", "Game knowledge", "Entertaining delivery", "Work under pressure", "Voice control", "Teamwork with co-caster", "Preparation & research"];

export default function EsportsBroadcasterCareers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <UnifiedHeader activeSite="jobs" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-violet-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-careers" className="hover:text-white">Esports Careers</Link>
              <span className="mx-2">/</span>
              <span className="text-red-400">Broadcasting</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Broadcaster Careers:{" "}
              <span className="bg-gradient-to-r from-red-400 to-violet-400 bg-clip-text text-transparent">Voice of Esports</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              From casting epic moments to hosting major tournaments, broadcasters bring esports to life.
              Discover how to build your career in esports broadcasting.
            </p>
            <Link href="/esports-jobs-uk" className="px-8 py-4 bg-gradient-to-r from-red-600 to-violet-600 text-white font-semibold rounded-xl inline-block">
              Browse Broadcast Jobs
            </Link>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Broadcast Roles & Pay</h2>
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

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">How to Start Casting</h2>
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <p className="text-slate-300">1. <strong>Practice constantly</strong> - Cast matches on your own stream or recordings</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <p className="text-slate-300">2. <strong>Start small</strong> - Volunteer for amateur/community tournaments</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <p className="text-slate-300">3. <strong>Build a showreel</strong> - Compile your best casting moments</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <p className="text-slate-300">4. <strong>Network</strong> - Connect with event organisers and other talent</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-red-600/20 via-slate-900 to-violet-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Start Your Broadcast Career</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs-uk" className="px-8 py-4 bg-gradient-to-r from-red-600 to-violet-600 text-white font-semibold rounded-xl">Broadcast Jobs</Link>
              <Link href="/esports-careers" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">All Careers</Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}

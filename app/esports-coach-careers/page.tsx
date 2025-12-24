import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

export const metadata: Metadata = {
  title: "Esports Coach Careers UK | Coaching Jobs Guide | EsportsJobs.quest",
  description: "Become an esports coach in the UK. Guide to coaching careers, salaries, qualifications and how to break into professional esports coaching.",
  keywords: "esports coach jobs, esports coaching careers, become esports coach, gaming coach jobs uk",
  alternates: { canonical: "https://esportsjobs.quest/esports-coach-careers" },
};

const progression = [
  { level: "Volunteer Coach", salary: "Unpaid - £500/mo", description: "Coach amateur teams, build experience" },
  { level: "Academy Coach", salary: "£22,000 - £30,000", description: "Develop young talent in org academies" },
  { level: "Assistant Coach", salary: "£30,000 - £45,000", description: "Support head coach, specialize in areas" },
  { level: "Head Coach", salary: "£45,000 - £80,000", description: "Lead strategic direction, manage staff" },
  { level: "Director of Esports", salary: "£70,000 - £120,000+", description: "Oversee multiple teams and coaches" },
];

const skills = ["Deep game knowledge", "Strategic thinking", "Communication", "Leadership", "Data analysis", "Emotional intelligence", "VOD review skills", "Player development"];

export default function EsportsCoachCareers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <UnifiedHeader activeSite="jobs" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-transparent to-violet-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-careers" className="hover:text-white">Esports Careers</Link>
              <span className="mx-2">/</span>
              <span className="text-orange-400">Coaching</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Coach Careers:{" "}
              <span className="bg-gradient-to-r from-orange-400 to-violet-400 bg-clip-text text-transparent">Guide Teams to Victory</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Esports coaches guide professional teams through strategy, player development, and competitive preparation.
              Learn how to build your coaching career in the UK esports industry.
            </p>
            <Link href="/esports-jobs-uk" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-violet-600 text-white font-semibold rounded-xl inline-block">
              Browse Coaching Jobs
            </Link>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Career Progression</h2>
            <div className="space-y-4">
              {progression.map((level, idx) => (
                <div key={level.level} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 flex items-center gap-6">
                  <div className="w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center text-orange-400 font-bold">{idx + 1}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-white">{level.level}</h3>
                      <span className="text-emerald-400">{level.salary}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{level.description}</p>
                  </div>
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
                  <span className="text-slate-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-orange-600/20 via-slate-900 to-violet-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Start Your Coaching Career</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs-uk" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-violet-600 text-white font-semibold rounded-xl">Coaching Jobs</Link>
              <Link href="/esports-careers" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">All Careers</Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}

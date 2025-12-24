import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

export const metadata: Metadata = {
  title: "How to Get Into Esports UK | Complete Guide 2025 | EsportsJobs.quest",
  description:
    "Complete guide to breaking into the esports industry. From building skills to networking, landing your first role & career progression. Your esports journey starts here.",
  keywords:
    "how to get into esports, break into esports, start esports career, esports industry guide, become esports professional",
  openGraph: {
    title: "How to Get Into Esports UK | Complete Guide 2025",
    description: "Complete guide to breaking into the esports industry. Your journey starts here.",
    type: "website",
    url: "https://esportsjobs.quest/how-to-get-into-esports",
  },
  alternates: {
    canonical: "https://esportsjobs.quest/how-to-get-into-esports",
  },
};

const steps = [
  {
    step: 1,
    title: "Identify Your Path",
    description: "Esports has many roles beyond playing. Coaching, content, marketing, events, broadcasting, analytics—find what matches your skills and interests.",
    actions: ["Research different esports roles", "Assess your current skills", "Identify transferable experience", "Choose 2-3 target areas"],
  },
  {
    step: 2,
    title: "Build Relevant Skills",
    description: "Develop the specific skills your chosen path requires. Technical skills, soft skills, and deep game knowledge.",
    actions: ["Take online courses", "Learn industry tools", "Develop game expertise", "Practice consistently"],
  },
  {
    step: 3,
    title: "Gain Practical Experience",
    description: "Create opportunities to apply your skills. Volunteer, freelance, create content, or coach amateur teams.",
    actions: ["Volunteer at local events", "Coach amateur teams", "Create content portfolio", "Join university esports"],
  },
  {
    step: 4,
    title: "Network Actively",
    description: "Esports is a relationship-driven industry. Most jobs come through connections, not applications.",
    actions: ["Join Discord communities", "Attend esports events", "Engage on Twitter/X", "Connect on LinkedIn"],
  },
  {
    step: 5,
    title: "Build Your Portfolio",
    description: "Create tangible examples of your work. Show, don't tell—portfolios beat CVs in esports.",
    actions: ["Document your projects", "Publish your content", "Track your results", "Get testimonials"],
  },
  {
    step: 6,
    title: "Apply Strategically",
    description: "When you're ready, apply to roles that match your experience. Quality over quantity.",
    actions: ["Tailor each application", "Research companies", "Demonstrate passion", "Follow up professionally"],
  },
];

const pathways = [
  { path: "Competition", roles: "Coach, Analyst, Team Manager, Performance Coach", entry: "Coaching amateur teams, VOD analysis content" },
  { path: "Content", roles: "Creator, Editor, Producer, Streamer", entry: "Building your own audience and portfolio" },
  { path: "Broadcast", roles: "Caster, Host, Producer, Graphics", entry: "Casting amateur matches, community events" },
  { path: "Marketing", roles: "Marketing Manager, Social Media, Partnerships", entry: "Managing social for amateur orgs, freelancing" },
  { path: "Events", roles: "Tournament Director, Event Manager, Admin", entry: "Volunteering at local LANs, online admining" },
  { path: "Business", roles: "GM, BD, Operations, Finance", entry: "Traditional experience + esports involvement" },
];

const faqs = [
  {
    question: "How long does it take to get an esports job?",
    answer: "With focused effort, you might land a paid role within 6-12 months. This assumes consistent networking, skill development, and visible involvement in the scene. Some find opportunities faster through connections, while others take longer to find the right fit.",
  },
  {
    question: "Do I need to be good at games to work in esports?",
    answer: "Not necessarily. While game knowledge is valuable, you don't need to be a skilled player for most roles. Understanding competitive gaming, meta, and esports culture is more important than your personal rank for roles like marketing, events, or operations.",
  },
  {
    question: "Is a degree required for esports?",
    answer: "Rarely required but sometimes helpful. Marketing, business, and education roles may prefer degrees. For most esports positions, practical experience, demonstrable skills, and passion matter more than academic credentials.",
  },
  {
    question: "Should I work for free to get started?",
    answer: "Strategic volunteering can build valuable experience, but be cautious. Short-term volunteering at events or for amateur teams is reasonable. Avoid extended unpaid work for commercial organisations—your skills have value.",
  },
];

export default function HowToGetIntoEsports() {
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
              <Link href="/esports-careers" className="hover:text-white">Esports Careers</Link>
              <span className="mx-2">/</span>
              <span className="text-violet-400">How to Get In</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How to Get Into Esports:{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Your Complete Guide
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Breaking into esports requires strategy, skills, and persistence. This guide walks you
              through every step—from identifying your path to landing your first role.
            </p>

            <Link href="/esports-jobs-uk" className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl inline-block">
              Browse Current Opportunities
            </Link>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">The 6-Step Path Into Esports</h2>
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.step} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-violet-600/20 rounded-full flex items-center justify-center text-2xl font-bold text-violet-400 shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-slate-400 mb-4">{step.description}</p>
                      <div className="grid md:grid-cols-2 gap-2">
                        {step.actions.map((action) => (
                          <div key={action} className="flex items-center gap-2 text-slate-300 text-sm">
                            <span className="text-violet-400">→</span>
                            {action}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Entry Pathways by Area</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pathways.map((pathway) => (
                <div key={pathway.path} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-2">{pathway.path}</h3>
                  <p className="text-slate-400 text-sm mb-2"><strong>Roles:</strong> {pathway.roles}</p>
                  <p className="text-cyan-400 text-sm"><strong>Entry:</strong> {pathway.entry}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-slate-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-violet-600/20 via-slate-900 to-cyan-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Esports Journey?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs-uk" className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl">
                Browse Esports Jobs
              </Link>
              <Link href="/entry-level-esports-jobs-uk" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Entry Level Roles
              </Link>
              <Link href="/esports-careers" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Career Paths
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

export const metadata: Metadata = {
  title: "Entry Level Esports Jobs UK | Start Your Gaming Career | EsportsJobs.quest",
  description:
    "Find entry level esports jobs in the UK. No experience required for many roles. Start your gaming industry career with internships, junior positions & graduate schemes.",
  keywords:
    "entry level esports jobs, junior esports jobs uk, esports internships, graduate esports jobs, no experience gaming jobs, starter esports roles",
  openGraph: {
    title: "Entry Level Esports Jobs UK | Start Your Gaming Career",
    description: "Find entry level esports jobs in the UK. No experience required for many roles.",
    type: "website",
    url: "https://esportsjobs.quest/entry-level-esports-jobs-uk",
  },
  alternates: {
    canonical: "https://esportsjobs.quest/entry-level-esports-jobs-uk",
  },
};

const entryLevelRoles = [
  {
    title: "Tournament Admin / Referee",
    salary: "£18,000 - £25,000",
    requirements: ["Game knowledge", "Attention to detail", "Fair judgment", "Communication skills"],
    description: "Officiate matches, enforce rules, and manage tournament brackets. Often starts as volunteer work.",
    path: "Volunteer → Part-time → Full-time Admin → Head Admin → Competitive Ops Manager",
  },
  {
    title: "Community Moderator",
    salary: "£20,000 - £28,000",
    requirements: ["Discord experience", "Communication", "Conflict resolution", "Gaming community knowledge"],
    description: "Manage Discord servers and social communities, engage fans, and maintain positive spaces.",
    path: "Volunteer Mod → Staff Mod → Community Coordinator → Community Manager",
  },
  {
    title: "Social Media Coordinator",
    salary: "£22,000 - £28,000",
    requirements: ["Social media fluency", "Content creation", "Writing skills", "Gaming culture knowledge"],
    description: "Create and schedule social content, engage with followers, track metrics.",
    path: "Coordinator → Social Media Executive → Social Media Manager → Head of Social",
  },
  {
    title: "Junior Video Editor",
    salary: "£20,000 - £28,000",
    requirements: ["Premier Pro / DaVinci", "Creative eye", "Gaming content understanding", "Quick turnaround"],
    description: "Edit match highlights, social clips, and YouTube content for esports organisations.",
    path: "Junior Editor → Editor → Senior Editor → Content Producer → Creative Director",
  },
  {
    title: "Marketing Assistant",
    salary: "£22,000 - £28,000",
    requirements: ["Marketing interest", "Writing skills", "Basic analytics", "Organisation"],
    description: "Support marketing campaigns, coordinate assets, assist with partnerships.",
    path: "Assistant → Marketing Executive → Marketing Manager → Head of Marketing",
  },
  {
    title: "Events Assistant",
    salary: "£20,000 - £26,000",
    requirements: ["Event experience", "Problem-solving", "Flexibility", "Physical stamina"],
    description: "Support tournament operations, manage logistics, assist with live events.",
    path: "Events Assistant → Events Coordinator → Events Manager → Director of Events",
  },
  {
    title: "Data Entry / Operations Support",
    salary: "£20,000 - £25,000",
    requirements: ["Excel skills", "Attention to detail", "Organisation", "Reliability"],
    description: "Maintain databases, update stats, support operations teams with admin tasks.",
    path: "Support → Operations Coordinator → Operations Manager → COO",
  },
  {
    title: "Customer Support / Player Support",
    salary: "£20,000 - £26,000",
    requirements: ["Communication", "Problem-solving", "Patience", "Gaming platform knowledge"],
    description: "Handle player inquiries, resolve issues, and provide support for platforms.",
    path: "Support Agent → Senior Support → Support Lead → Support Manager",
  },
];

const internshipTypes = [
  {
    type: "Marketing Internship",
    duration: "3-6 months",
    paid: "Often paid (£18-22k pro rata)",
    learnings: "Campaign management, content creation, analytics, brand partnerships",
  },
  {
    type: "Content Internship",
    duration: "3-6 months",
    paid: "Mixed (50% paid)",
    learnings: "Video editing, social content, broadcast assistance, production",
  },
  {
    type: "Operations Internship",
    duration: "3-6 months",
    paid: "Often paid (£18-22k pro rata)",
    learnings: "Tournament admin, logistics, team support, event coordination",
  },
  {
    type: "Esports Performance Internship",
    duration: "3-12 months",
    paid: "Sometimes paid",
    learnings: "Data analysis, VOD review, coaching support, scouting",
  },
];

const tips = [
  {
    title: "Start Volunteering Now",
    description: "Don't wait for paid opportunities. Volunteer at local tournaments, for amateur teams, or community events. Experience matters more than pay at the start.",
    icon: "🤝",
  },
  {
    title: "Build Your Portfolio",
    description: "Create content, edit videos, write match recaps, or run community events. Show tangible examples of what you can do.",
    icon: "📁",
  },
  {
    title: "Network Relentlessly",
    description: "Join Discord servers, attend events, engage on Twitter/X. Most entry-level jobs come through connections, not job boards.",
    icon: "🌐",
  },
  {
    title: "Be Flexible on Pay",
    description: "Entry-level esports salaries are lower than other industries. Accept this for now—the experience is the investment.",
    icon: "💰",
  },
  {
    title: "Develop Transferable Skills",
    description: "Learn video editing, data analysis, project management, or marketing. These skills open doors across esports.",
    icon: "🛠️",
  },
  {
    title: "Consider Adjacent Roles",
    description: "Games QA, gaming retail, or streaming support jobs can be stepping stones into esports proper.",
    icon: "🔄",
  },
];

const faqs = [
  {
    question: "Can I get an esports job with no experience?",
    answer: "Yes, but you'll need to create experience. Volunteer at tournaments, coach amateur teams, create content, or moderate communities. Many entry-level roles value passion and potential over formal experience. The key is demonstrating your commitment through practical involvement.",
  },
  {
    question: "What's the lowest entry point into esports?",
    answer: "Tournament administration and community moderation often have the lowest barriers. Many start as volunteers before getting paid roles. Games QA testing at studios is another common entry point that can lead to esports roles.",
  },
  {
    question: "Do I need a degree for entry-level esports jobs?",
    answer: "Not usually. While degrees in marketing, media, or business can help, practical experience and demonstrable skills matter more. Some roles (like lecturing or certain business positions) may prefer degrees, but most entry-level esports jobs prioritize passion and relevant experience.",
  },
  {
    question: "What salary can I expect as an esports beginner?",
    answer: "Entry-level esports salaries typically range from £18,000-£28,000 depending on the role and organisation. London-based roles may be slightly higher. It's generally lower than comparable roles in other industries, but there's strong progression for those who excel.",
  },
  {
    question: "How long does it take to get a paid esports job?",
    answer: "This varies widely. Some find paid roles within 6 months of active effort, while others spend 1-2 years building experience. Consistent networking, skill development, and visible involvement in the scene significantly speed up the process.",
  },
  {
    question: "Should I relocate for an entry-level esports job?",
    answer: "London has the most opportunities, but remote work is increasingly common. Consider relocating if you can afford it and a specific opportunity is worth it. However, many entry-level roles are now remote or hybrid, making location less critical than before.",
  },
];

export default function EntryLevelEsportsJobsUK() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Entry Level Esports Jobs UK",
    description: "Guide to finding entry-level esports jobs in the UK with no experience required.",
    url: "https://esportsjobs.quest/entry-level-esports-jobs-uk",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-transparent to-violet-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs-uk" className="hover:text-white transition-colors">Esports Jobs UK</Link>
              <span className="mx-2">/</span>
              <span className="text-emerald-400">Entry Level</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Entry Level Esports Jobs UK:{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">
                  Start Your Gaming Career
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                No experience? No problem. Discover entry-level esports roles, internships, and pathways
                to launch your career in the UK gaming industry. From volunteer opportunities to paid
                junior positions, your esports journey starts here.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-2xl font-bold text-emerald-400">100+</div>
                  <div className="text-sm text-slate-400">Entry Roles</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-2xl font-bold text-violet-400">£20-28k</div>
                  <div className="text-sm text-slate-400">Starting Salary</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-2xl font-bold text-cyan-400">30+</div>
                  <div className="text-sm text-slate-400">Internships</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-2xl font-bold text-amber-400">Remote</div>
                  <div className="text-sm text-slate-400">Options Available</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#jobs"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
                >
                  Browse Entry Level Jobs
                </Link>
                <Link
                  href="/how-to-get-into-esports"
                  className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-emerald-500 transition-all"
                >
                  How to Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Entry Level Roles */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Entry Level Roles in Esports</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              These roles are accessible to those just starting their esports careers.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {entryLevelRoles.map((role) => (
                <div key={role.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">{role.title}</h3>
                    <span className="text-emerald-400 font-medium text-sm">{role.salary}</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">{role.description}</p>
                  <div className="mb-4">
                    <span className="text-xs text-slate-500">Requirements:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {role.requirements.map((req) => (
                        <span key={req} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-slate-500">
                    <strong>Career Path:</strong> {role.path}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internships */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Esports Internships</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Internships offer structured entry into esports with mentorship and learning opportunities.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {internshipTypes.map((internship) => (
                <div key={internship.type} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-3">{internship.type}</h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-slate-500">Duration:</span> <span className="text-slate-300">{internship.duration}</span></div>
                    <div><span className="text-slate-500">Compensation:</span> <span className="text-emerald-400">{internship.paid}</span></div>
                    <div><span className="text-slate-500">You&apos;ll learn:</span> <span className="text-slate-300">{internship.learnings}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Tips for Landing Your First Esports Job</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Practical advice from those who&apos;ve successfully broken into the industry.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tips.map((tip) => (
                <div key={tip.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="text-3xl mb-4">{tip.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{tip.title}</h3>
                  <p className="text-slate-400 text-sm">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Entry Level Esports FAQs</h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-slate-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600/20 via-slate-900 to-violet-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Esports Career?
            </h2>
            <p className="text-slate-300 mb-8">
              Browse entry-level positions and take the first step towards your dream job.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#jobs"
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
              >
                View Entry Level Jobs
              </Link>
              <Link
                href="/esports-careers"
                className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-emerald-500 transition-all"
              >
                Explore Career Paths
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Related Guides</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/esports-jobs-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-emerald-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Esports Jobs UK</h3>
                <p className="text-slate-400 text-sm">All esports opportunities in the UK.</p>
              </Link>
              <Link href="/how-to-get-into-esports" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-emerald-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">How to Get Into Esports</h3>
                <p className="text-slate-400 text-sm">Complete guide to breaking in.</p>
              </Link>
              <Link href="/esports-careers" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-emerald-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Career Pathways</h3>
                <p className="text-slate-400 text-sm">All esports career options.</p>
              </Link>
              <Link href="/esports-jobs-remote" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-emerald-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Remote Esports Jobs</h3>
                <p className="text-slate-400 text-sm">Work from anywhere opportunities.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <UnifiedFooter />
    </div>
  );
}

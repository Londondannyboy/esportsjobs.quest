import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

export const metadata: Metadata = {
  title: "Esports Recruitment Services UK | Hire Gaming Talent | EsportsJobs.quest",
  description:
    "Specialist esports & gaming recruitment services. Find top esports talent or discover your next career opportunity. Expert recruiters for the UK gaming industry.",
  keywords:
    "esports recruitment, gaming recruitment, esports headhunters, gaming talent acquisition, esports hiring, gaming staffing uk",
  openGraph: {
    title: "Esports Recruitment Services UK | Hire Gaming Talent",
    description: "Specialist esports & gaming recruitment services. Find top talent or your next opportunity.",
    type: "website",
    url: "https://esportsjobs.quest/esports-recruitment",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esports Recruitment Services UK | Hire Gaming Talent",
    description: "Specialist esports & gaming recruitment services. Find top talent or your next opportunity.",
  },
  alternates: {
    canonical: "https://esportsjobs.quest/esports-recruitment",
  },
};

const services = [
  {
    title: "Executive Search",
    icon: "🎯",
    description: "Headhunting for senior leadership, C-suite, and director-level positions in esports organisations.",
    features: ["Confidential search", "Passive candidate targeting", "Thorough vetting", "Industry network access"],
    forWhom: "Esports orgs, publishers, gaming companies seeking leadership",
  },
  {
    title: "Permanent Recruitment",
    icon: "👥",
    description: "Full-service recruitment for permanent roles across all esports and gaming functions.",
    features: ["Role definition", "Candidate sourcing", "Screening & interviews", "Offer negotiation support"],
    forWhom: "Any organisation hiring permanent esports staff",
  },
  {
    title: "Contract & Freelance",
    icon: "📋",
    description: "Flexible talent solutions for projects, tournaments, and temporary coverage.",
    features: ["Rapid placement", "Verified professionals", "Flexible terms", "Project-based hiring"],
    forWhom: "Event organisers, content projects, seasonal needs",
  },
  {
    title: "Talent Advisory",
    icon: "💡",
    description: "Strategic guidance on building esports teams, competitive salaries, and market insights.",
    features: ["Salary benchmarking", "Team structure advice", "Market intelligence", "Hiring strategy"],
    forWhom: "New esports ventures, traditional sports entering gaming",
  },
];

const rolesWeRecruit = [
  {
    category: "Competition & Performance",
    roles: ["Esports Coach", "Analyst", "Team Manager", "Performance Coach", "Scout", "Sports Psychologist"],
  },
  {
    category: "Content & Broadcast",
    roles: ["Content Creator", "Video Producer", "Caster", "Host", "Broadcast Producer", "Graphics Designer"],
  },
  {
    category: "Marketing & Partnerships",
    roles: ["Marketing Manager", "Social Media Manager", "Partnerships Manager", "Brand Manager", "Community Manager"],
  },
  {
    category: "Events & Operations",
    roles: ["Tournament Director", "Event Manager", "Operations Manager", "Production Manager", "Referee"],
  },
  {
    category: "Business & Leadership",
    roles: ["CEO", "COO", "General Manager", "Business Development", "Finance Director", "HR Manager"],
  },
  {
    category: "Technical & Product",
    roles: ["Game Developer", "Platform Engineer", "Data Scientist", "Product Manager", "UX Designer"],
  },
];

const clients = [
  "Professional esports organisations",
  "Game publishers and developers",
  "Tournament operators",
  "Streaming platforms",
  "Gaming hardware brands",
  "Esports media companies",
  "Sports teams entering esports",
  "Gaming agencies",
  "Universities with esports programmes",
  "Investment firms in gaming",
];

const processSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "We discuss your hiring needs, team structure, culture, and ideal candidate profile.",
    duration: "1-2 hours",
  },
  {
    step: 2,
    title: "Role Definition",
    description: "We refine the job specification, salary expectations, and key success criteria.",
    duration: "1-2 days",
  },
  {
    step: 3,
    title: "Candidate Search",
    description: "Active sourcing through our network, database, and targeted outreach.",
    duration: "1-3 weeks",
  },
  {
    step: 4,
    title: "Screening & Shortlisting",
    description: "We conduct initial interviews, skills assessment, and reference checks.",
    duration: "1-2 weeks",
  },
  {
    step: 5,
    title: "Client Interviews",
    description: "Present shortlisted candidates and coordinate interview process.",
    duration: "1-2 weeks",
  },
  {
    step: 6,
    title: "Offer & Onboarding",
    description: "Support offer negotiation and ensure smooth candidate onboarding.",
    duration: "1-2 weeks",
  },
];

const stats = [
  { value: "500+", label: "Placements Made" },
  { value: "95%", label: "Retention Rate" },
  { value: "50+", label: "Client Partners" },
  { value: "2 weeks", label: "Avg. Time to Shortlist" },
];

const faqs = [
  {
    question: "What makes esports recruitment different from general recruitment?",
    answer: "Esports recruitment requires deep industry knowledge—understanding game-specific requirements, the unique culture of esports organisations, non-traditional career paths, and the blend of competitive gaming and business skills. A general recruiter won't understand why a former pro player might excel in coaching, or why Discord community management experience matters. We speak the language and know the ecosystem.",
  },
  {
    question: "What types of companies do you work with?",
    answer: "We work with professional esports organisations (team owners), tournament operators, game publishers, streaming platforms, gaming hardware brands, esports media companies, traditional sports teams entering esports, gaming agencies, universities with esports programmes, and investment firms looking at the gaming space.",
  },
  {
    question: "How much do your recruitment services cost?",
    answer: "Our fees depend on the service level and role seniority. Typically, we work on a percentage of first-year salary (15-25%) for permanent placements, with executive search commanding premium rates. We also offer retained search for critical hires. Contact us for a tailored quote based on your specific needs.",
  },
  {
    question: "How long does the recruitment process take?",
    answer: "Typical timelines are 4-8 weeks from briefing to accepted offer. We can deliver shortlists within 2 weeks for most roles. Executive searches may take longer (8-12 weeks) due to the confidential nature and thorough vetting required. Urgent hires can be expedited with our contractor network.",
  },
  {
    question: "Do you help candidates find jobs too?",
    answer: "While our core service is client-focused recruitment, we're always looking to connect with talented esports professionals. Register your CV with us, and we'll proactively match you with suitable opportunities as they arise. Browse our current vacancies on the job board.",
  },
  {
    question: "Can you help with international hiring?",
    answer: "Yes, we support hiring across the UK, Europe, and globally. We understand visa requirements, remote work arrangements, and can advise on relocation packages. Many esports organisations operate internationally, and we help navigate cross-border talent acquisition.",
  },
];

export default function EsportsRecruitment() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "EsportsJobs.quest Recruitment Services",
    description: "Specialist esports and gaming recruitment services in the UK",
    url: "https://esportsjobs.quest/esports-recruitment",
    serviceType: ["Esports Recruitment", "Gaming Talent Acquisition", "Executive Search"],
    areaServed: "United Kingdom",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-transparent to-violet-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-cyan-400">Esports Recruitment</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Esports & Gaming{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    Recruitment Services
                  </span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  We connect exceptional esports talent with leading gaming organisations. Whether
                  you&apos;re building a championship team or seeking your dream esports career,
                  our specialist recruiters deliver results.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                      <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
                  >
                    Hire Talent
                  </Link>
                  <Link
                    href="/esports-jobs-uk"
                    className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-cyan-500 transition-all"
                  >
                    Find Jobs
                  </Link>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                <h2 className="text-2xl font-bold text-white mb-6">Quick Enquiry</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">I am a...</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 text-slate-300">
                        <input type="radio" name="type" value="employer" className="text-cyan-600" defaultChecked />
                        Hiring Manager
                      </label>
                      <label className="flex items-center gap-2 text-slate-300">
                        <input type="radio" name="type" value="candidate" className="text-cyan-600" />
                        Job Seeker
                      </label>
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company / Role Interested In"
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
                  >
                    Get in Touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Recruitment Services</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Tailored recruitment solutions for every esports and gaming hiring need.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div key={service.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{service.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-slate-400 text-sm mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {service.features.map((feature) => (
                          <span key={feature} className="px-2 py-1 bg-cyan-600/20 text-cyan-400 text-xs rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-slate-500">
                        <strong>Best for:</strong> {service.forWhom}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/esports-recruitment-agency"
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                Learn more about our agency services →
              </Link>
            </div>
          </div>
        </section>

        {/* Roles We Recruit */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Roles We Recruit</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              We place talent across all functions within esports and gaming organisations.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rolesWeRecruit.map((category) => (
                <div key={category.category} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.roles.map((role) => (
                      <li key={role} className="text-slate-400 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Recruitment Process</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              A structured approach to finding the right talent for your organisation.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-cyan-600/20 rounded-full flex items-center justify-center text-lg font-bold text-cyan-400">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm mb-2">{step.description}</p>
                  <span className="text-xs text-cyan-400">{step.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Who We Work With</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Our clients range from emerging esports startups to established global organisations.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {clients.map((client) => (
                <div key={client} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
                  <span className="text-slate-300 text-sm">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Why Choose Our Esports Recruitment?</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-lg font-bold text-white mb-2">Industry Expertise</h3>
                <p className="text-slate-400 text-sm">We understand esports culture, terminology, and what makes great hires in this space.</p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-lg font-bold text-white mb-2">Global Network</h3>
                <p className="text-slate-400 text-sm">Access to passive candidates across the UK, Europe, and international esports scenes.</p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-bold text-white mb-2">Speed to Hire</h3>
                <p className="text-slate-400 text-sm">Our specialisation means faster shortlists and efficient placement processes.</p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-bold text-white mb-2">Quality Matches</h3>
                <p className="text-slate-400 text-sm">95% retention rate because we focus on long-term fit, not just filling positions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Recruitment FAQs</h2>

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
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 via-slate-900 to-violet-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Your Esports Dream Team?
            </h2>
            <p className="text-slate-300 mb-8">
              Get in touch to discuss your recruitment needs. We&apos;re here to help you find
              the talent that will drive your organisation forward.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
              >
                Contact Us
              </Link>
              <Link
                href="/esports-jobs-uk"
                className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-cyan-500 transition-all"
              >
                Browse Current Vacancies
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Related Services</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/esports-recruitment-agency" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Recruitment Agency</h3>
                <p className="text-slate-400 text-sm">Full agency services for esports hiring.</p>
              </Link>
              <Link href="/gaming-recruitment-services" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Gaming Recruitment</h3>
                <p className="text-slate-400 text-sm">Broader gaming industry staffing.</p>
              </Link>
              <Link href="/esports-jobs-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Esports Jobs UK</h3>
                <p className="text-slate-400 text-sm">Browse current esports vacancies.</p>
              </Link>
              <Link href="/hire-esports-professionals" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Hire Professionals</h3>
                <p className="text-slate-400 text-sm">Direct hiring solutions.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}

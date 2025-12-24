import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

export const metadata: Metadata = {
  title: "Esports Recruitment Agency UK | Specialist Gaming Headhunters | EsportsJobs.quest",
  description:
    "The UK's dedicated esports recruitment agency. Expert headhunters for coaching, content, marketing & operations roles. Find gaming talent or your next career.",
  keywords:
    "esports recruitment agency, gaming headhunters uk, esports staffing agency, gaming talent agency, esports hiring agency",
  openGraph: {
    title: "Esports Recruitment Agency UK | Specialist Gaming Headhunters",
    description: "The UK's dedicated esports recruitment agency. Expert headhunters for gaming talent.",
    type: "website",
    url: "https://esportsjobs.quest/esports-recruitment-agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esports Recruitment Agency UK | Specialist Gaming Headhunters",
    description: "The UK's dedicated esports recruitment agency. Expert headhunters for gaming talent.",
  },
  alternates: {
    canonical: "https://esportsjobs.quest/esports-recruitment-agency",
  },
};

const specialisations = [
  {
    area: "Esports Organisations",
    description: "Recruitment for professional esports teams and organisation staff.",
    roles: ["Coaches & Analysts", "Team Managers", "Content Teams", "Operations Staff", "Marketing & Partnerships"],
    icon: "🏆",
  },
  {
    area: "Tournament Operators",
    description: "Staffing for event companies running esports competitions.",
    roles: ["Tournament Directors", "Production Staff", "Broadcast Talent", "Event Managers", "Referees & Admins"],
    icon: "🏟️",
  },
  {
    area: "Game Publishers",
    description: "Esports division hiring for game developers and publishers.",
    roles: ["Esports Managers", "Community Teams", "Competitive Operations", "Esports Marketing", "Product Managers"],
    icon: "🎮",
  },
  {
    area: "Streaming & Media",
    description: "Talent acquisition for streaming platforms and esports media.",
    roles: ["Talent Managers", "Content Producers", "Platform Operations", "Creator Partnerships", "Editorial Staff"],
    icon: "📺",
  },
  {
    area: "Gaming Brands",
    description: "Recruitment for brands with esports sponsorships and activations.",
    roles: ["Esports Marketing", "Brand Activation", "Influencer Marketing", "Partnership Management", "Events Team"],
    icon: "🎯",
  },
  {
    area: "Education & Development",
    description: "Staffing for esports education providers and talent development.",
    roles: ["Esports Lecturers", "Programme Managers", "Youth Coaches", "Academy Directors", "Curriculum Developers"],
    icon: "📚",
  },
];

const differentiators = [
  {
    title: "Esports-First Expertise",
    description: "We don't recruit for other industries. 100% of our focus is gaming and esports, meaning deep specialist knowledge.",
    icon: "🎯",
  },
  {
    title: "Industry Connections",
    description: "Our team comes from esports backgrounds with established relationships across the UK and European scenes.",
    icon: "🤝",
  },
  {
    title: "Candidate Understanding",
    description: "We speak the language. We understand what makes a great coach, why Discord skills matter, and how esports careers develop.",
    icon: "💬",
  },
  {
    title: "Passive Talent Access",
    description: "The best candidates aren't actively job hunting. Our network gives access to passive talent others can't reach.",
    icon: "🔍",
  },
  {
    title: "Cultural Fit Focus",
    description: "Esports culture is unique. We assess for cultural alignment, not just skills, leading to better retention.",
    icon: "🎮",
  },
  {
    title: "Speed & Efficiency",
    description: "Specialisation means faster shortlists. We know where to find talent and can move quickly on briefs.",
    icon: "⚡",
  },
];

const pricingModels = [
  {
    model: "Contingency",
    description: "Pay only when we successfully place a candidate.",
    fee: "18-22% of first year salary",
    bestFor: "Mid-level permanent roles, volume hiring",
    features: ["No upfront cost", "Pay on success", "Multiple agency option", "Standard search process"],
  },
  {
    model: "Retained Search",
    description: "Dedicated exclusive search with upfront commitment.",
    fee: "25-30% of first year salary",
    bestFor: "Senior roles, confidential searches, critical hires",
    features: ["Exclusive focus", "Dedicated consultant", "Guaranteed shortlist", "Comprehensive reporting"],
  },
  {
    model: "Project Recruitment",
    description: "Fixed-fee solution for multiple hires or team builds.",
    fee: "Custom pricing",
    bestFor: "New team setup, expansion hiring, event staffing",
    features: ["Volume discounts", "Dedicated resource", "Flexible scope", "Project management"],
  },
];

const testimonials = [
  {
    quote: "They understood exactly what we needed in a coach—not just the tactical knowledge but the personality fit for our team culture.",
    author: "Head of Esports",
    company: "UK Esports Organisation",
  },
  {
    quote: "Found us a Marketing Director who actually gets esports. Previous agencies sent us candidates who didn't understand the space at all.",
    author: "CEO",
    company: "Tournament Operator",
  },
  {
    quote: "Rapid turnaround on our broadcast talent needs for a major event. Professional service throughout.",
    author: "Production Director",
    company: "Esports Broadcast Company",
  },
];

const faqs = [
  {
    question: "How is an esports recruitment agency different from a general recruiter?",
    answer: "General recruiters lack the industry knowledge to properly assess esports candidates. They don't understand game-specific requirements, competitive experience, or the unique culture of gaming organisations. An esports-specialist agency knows the ecosystem, speaks the language, and has networks specifically in this space. This leads to better candidate quality and faster placements.",
  },
  {
    question: "Do you work with international candidates?",
    answer: "Yes. Esports is a global industry and many roles can be done remotely. We source candidates from across the UK, Europe, and internationally. For UK-based roles requiring right to work, we can advise on visa sponsorship options and have experience with international relocations.",
  },
  {
    question: "What's your typical placement timeline?",
    answer: "For most roles, we can provide a shortlist within 2 weeks. The full process from briefing to accepted offer typically takes 4-8 weeks. Retained/executive searches may take longer (8-12 weeks). We can expedite urgent needs using our contractor network for immediate starts.",
  },
  {
    question: "Do you offer any guarantees?",
    answer: "Yes. For permanent placements, we offer a rebate period (typically 3 months) during which we'll replace a candidate at no additional cost if they leave for any reason. For retained searches, we guarantee a minimum number of qualified candidates and won't close the search until you're satisfied.",
  },
  {
    question: "Can you help us hire for roles outside esports?",
    answer: "Our expertise is esports and gaming. For general roles (finance, HR, etc.), we can help if they're within esports/gaming organisations, as cultural fit still matters. For pure non-gaming roles, we'd recommend a generalist agency, though we can often provide referrals.",
  },
  {
    question: "What information do you need to start a search?",
    answer: "We'll need: role title and responsibilities, required skills and experience, salary range and benefits, team structure and reporting lines, company culture and values, interview process, and timeline. A thorough briefing call ensures we target the right candidates.",
  },
];

export default function EsportsRecruitmentAgency() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: "EsportsJobs.quest Recruitment Agency",
    description: "Specialist esports and gaming recruitment agency in the UK",
    url: "https://esportsjobs.quest/esports-recruitment-agency",
    serviceType: ["Esports Recruitment", "Gaming Headhunting", "Executive Search"],
    areaServed: "United Kingdom",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-cyan-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-recruitment" className="hover:text-white transition-colors">Esports Recruitment</Link>
              <span className="mx-2">/</span>
              <span className="text-violet-400">Agency</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The UK&apos;s Specialist{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Esports Recruitment Agency
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                We&apos;re not general recruiters who dabble in gaming. Esports and gaming is all we do.
                Our dedicated team of industry specialists connects exceptional talent with leading
                organisations across the UK and Europe.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
                >
                  Discuss Your Hiring Needs
                </Link>
                <Link
                  href="/esports-jobs-uk"
                  className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-violet-500 transition-all"
                >
                  View Current Opportunities
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  500+ Successful Placements
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  50+ Client Partners
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  95% Retention Rate
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Specialisations */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Specialisations</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              We recruit across the full esports and gaming ecosystem.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialisations.map((spec) => (
                <div key={spec.area} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{spec.icon}</span>
                    <h3 className="text-xl font-bold text-white">{spec.area}</h3>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">{spec.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {spec.roles.map((role) => (
                      <span key={role} className="px-2 py-1 bg-violet-600/20 text-violet-400 text-xs rounded">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Agency?</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              What sets us apart from general recruitment agencies.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((diff) => (
                <div key={diff.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="text-3xl mb-4">{diff.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{diff.title}</h3>
                  <p className="text-slate-400 text-sm">{diff.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Pricing Models</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Flexible engagement options to suit your hiring needs and budget.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {pricingModels.map((pricing) => (
                <div key={pricing.model} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-2">{pricing.model}</h3>
                  <p className="text-slate-400 text-sm mb-4">{pricing.description}</p>
                  <div className="text-2xl font-bold text-violet-400 mb-2">{pricing.fee}</div>
                  <p className="text-xs text-slate-500 mb-4">Best for: {pricing.bestFor}</p>
                  <ul className="space-y-2">
                    {pricing.features.map((feature) => (
                      <li key={feature} className="text-slate-300 text-sm flex items-center gap-2">
                        <span className="text-emerald-400">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-400 text-sm">
                Contact us for a detailed quote tailored to your specific requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">What Our Clients Say</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="text-4xl text-violet-400 mb-4">&ldquo;</div>
                  <p className="text-slate-300 mb-4 italic">{testimonial.quote}</p>
                  <div>
                    <div className="text-white font-medium">{testimonial.author}</div>
                    <div className="text-slate-500 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Work With Us */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">How to Work With Us</h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-violet-600/20 rounded-full flex items-center justify-center text-2xl font-bold text-violet-400 mx-auto mb-4">1</div>
                <h3 className="font-bold text-white mb-2">Get in Touch</h3>
                <p className="text-slate-400 text-sm">Contact us with your hiring needs or career goals.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-violet-600/20 rounded-full flex items-center justify-center text-2xl font-bold text-violet-400 mx-auto mb-4">2</div>
                <h3 className="font-bold text-white mb-2">Briefing Call</h3>
                <p className="text-slate-400 text-sm">We discuss requirements, culture, and ideal candidate profile.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-violet-600/20 rounded-full flex items-center justify-center text-2xl font-bold text-violet-400 mx-auto mb-4">3</div>
                <h3 className="font-bold text-white mb-2">Search & Screen</h3>
                <p className="text-slate-400 text-sm">We source, screen, and shortlist the best candidates.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-violet-600/20 rounded-full flex items-center justify-center text-2xl font-bold text-violet-400 mx-auto mb-4">4</div>
                <h3 className="font-bold text-white mb-2">Interview & Hire</h3>
                <p className="text-slate-400 text-sm">We coordinate interviews and support through to offer.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Agency FAQs</h2>

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
        <section className="py-20 bg-gradient-to-r from-violet-600/20 via-slate-900 to-cyan-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Let&apos;s Find Your Next Star Hire
            </h2>
            <p className="text-slate-300 mb-8">
              Whether you&apos;re building a championship roster, launching an esports division, or
              scaling your gaming business—we have the talent network to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
              >
                Start a Conversation
              </Link>
              <Link
                href="/esports-recruitment"
                className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-violet-500 transition-all"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Explore More</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/esports-recruitment" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Recruitment Services</h3>
                <p className="text-slate-400 text-sm">Full overview of our recruitment offering.</p>
              </Link>
              <Link href="/esports-jobs-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Esports Jobs UK</h3>
                <p className="text-slate-400 text-sm">Browse current vacancies.</p>
              </Link>
              <Link href="/gaming-recruitment-services" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Gaming Recruitment</h3>
                <p className="text-slate-400 text-sm">Broader gaming industry staffing.</p>
              </Link>
              <Link href="/esports-careers" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Career Pathways</h3>
                <p className="text-slate-400 text-sm">Explore esports career options.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <UnifiedFooter />
    </div>
  );
}

import Link from "next/link";

const jobCategories = [
  {
    icon: "🎮",
    title: "Pro Players & Athletes",
    description:
      "Compete professionally in titles like League of Legends, Valorant, CS2, Fortnite, and more. Join top esports organisations as a signed player with salary, benefits, and competition opportunities.",
    features: ["Competitive Salary", "Team House", "Tournament Travel"],
  },
  {
    icon: "🎯",
    title: "Coaches & Analysts",
    description:
      "Guide professional teams to victory with strategic coaching and data analysis. Review VODs, develop strategies, and help players reach their peak performance in competitive gaming.",
    features: ["Strategic Planning", "Player Development", "Performance Analysis"],
  },
  {
    icon: "📹",
    title: "Content Creators & Streamers",
    description:
      "Create engaging gaming content for YouTube, TikTok, and Twitch. Work with esports organisations, game publishers, and brands to produce videos, streams, and social media content.",
    features: ["Video Production", "Live Streaming", "Brand Partnerships"],
  },
  {
    icon: "🎙️",
    title: "Casters & Broadcast Talent",
    description:
      "Bring esports matches to life as a shoutcaster, analyst desk host, or broadcast talent. Commentate on live competitions and engage audiences watching from around the world.",
    features: ["Live Commentary", "Desk Analysis", "Event Hosting"],
  },
  {
    icon: "🏟️",
    title: "Event & Tournament Organisers",
    description:
      "Plan and execute esports tournaments from local LAN parties to international championships. Manage venues, coordinate teams, and deliver unforgettable competitive experiences.",
    features: ["Event Planning", "Venue Management", "Production Coordination"],
  },
  {
    icon: "📊",
    title: "Marketing & Business",
    description:
      "Drive growth for esports organisations through marketing, partnerships, and business development. Manage sponsorships, social media, and brand strategies in the gaming industry.",
    features: ["Partnership Sales", "Social Media", "Brand Strategy"],
  },
];

const stats = [
  { value: "5,000+", label: "Active Esports Jobs", suffix: "" },
  { value: "$1.8B", label: "Global Esports Industry", suffix: "" },
  { value: "500+", label: "Esports Organisations", suffix: "" },
  { value: "100%", label: "Free to Apply", suffix: "" },
];

const featuredJobs = [
  {
    title: "Valorant Head Coach",
    company: "FNATIC",
    location: "London, UK",
    type: "Full-time",
    salary: "£60,000 - £80,000",
    posted: "2 days ago",
    tags: ["Coaching", "Valorant", "Leadership"],
    urgent: true,
  },
  {
    title: "Content Creator - Gaming",
    company: "100 Thieves",
    location: "Remote",
    type: "Full-time",
    salary: "£40,000 - £55,000",
    posted: "1 day ago",
    tags: ["Content", "YouTube", "Streaming"],
    urgent: false,
  },
  {
    title: "Esports Tournament Producer",
    company: "ESL FACEIT Group",
    location: "Cologne, Germany",
    type: "Full-time",
    salary: "€50,000 - €70,000",
    posted: "3 days ago",
    tags: ["Production", "Events", "Broadcasting"],
    urgent: false,
  },
  {
    title: "League of Legends Analyst",
    company: "G2 Esports",
    location: "Berlin, Germany",
    type: "Full-time",
    salary: "€45,000 - €60,000",
    posted: "1 week ago",
    tags: ["Analysis", "LoL", "Strategy"],
    urgent: false,
  },
  {
    title: "Social Media Manager",
    company: "Team Liquid",
    location: "Remote",
    type: "Full-time",
    salary: "$50,000 - $70,000",
    posted: "4 days ago",
    tags: ["Marketing", "Social Media", "Content"],
    urgent: false,
  },
  {
    title: "Broadcast Graphics Designer",
    company: "BLAST Premier",
    location: "Copenhagen, Denmark",
    type: "Contract",
    salary: "€55,000 - €75,000",
    posted: "5 days ago",
    tags: ["Design", "Broadcast", "Motion Graphics"],
    urgent: true,
  },
];

const companies = [
  "FNATIC",
  "Team Liquid",
  "Cloud9",
  "100 Thieves",
  "G2 Esports",
  "TSM",
  "Evil Geniuses",
  "NRG",
];

const careerPaths = [
  {
    title: "Competition Path",
    description: "For those who want to compete at the highest level as professional players or support competitive teams.",
    roles: ["Pro Player", "Team Coach", "Analyst", "Team Manager", "Performance Coach"],
    icon: "🏆",
  },
  {
    title: "Content Path",
    description: "For creative individuals who want to build audiences and create engaging gaming content.",
    roles: ["Streamer", "YouTuber", "Podcast Host", "Content Producer", "Video Editor"],
    icon: "🎬",
  },
  {
    title: "Broadcast Path",
    description: "For those who want to bring esports to life through live production and commentary.",
    roles: ["Shoutcaster", "Desk Analyst", "Host", "Producer", "Observer"],
    icon: "📺",
  },
  {
    title: "Business Path",
    description: "For professionals who want to grow esports organisations through business and marketing.",
    roles: ["Marketing Manager", "Partnership Manager", "General Manager", "HR", "Finance"],
    icon: "💼",
  },
];

const industryStats = [
  {
    stat: "540 million",
    label: "People watch esports globally, with the audience growing 8% year-over-year. More viewers mean more jobs in the industry.",
  },
  {
    stat: "£100 million",
    label: "The UK esports market alone is valued at over £100 million, creating thousands of job opportunities across the country.",
  },
  {
    stat: "22,000+",
    label: "Professional esports players compete globally, supported by coaches, analysts, managers, and content teams.",
  },
  {
    stat: "200%",
    label: "Growth in esports job postings since 2020, as the industry professionalises and expands into new markets.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Video Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-main.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 video-overlay" />
          <div className="absolute inset-0 scanlines opacity-20" />
        </div>

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50 border-b border-cyan-500/20 backdrop-blur-md bg-black/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-xl">
                  E
                </div>
                <span className="text-xl font-bold neon-text">
                  ESPORTS JOBS
                </span>
              </a>
              <div className="hidden md:flex items-center gap-6">
                <a href="#jobs" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Browse Jobs
                </a>
                <a href="#categories" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Categories
                </a>
                <a href="#careers" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Career Paths
                </a>
                <a href="#faq" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  FAQ
                </a>
                <Link href="/contact" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-6 rounded btn-shine transition-all">
                  Post a Job
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 text-cyan-400 text-sm font-medium">
            🎮 The #1 Esports Job Board
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block">FIND YOUR DREAM</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              ESPORTS JOB
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Browse thousands of esports jobs from top gaming organisations.
            Find roles in pro gaming, coaching, content creation, broadcasting, and esports management.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Search esports jobs..."
                className="flex-1 px-6 py-4 rounded-lg bg-gray-900/80 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-black font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 pulse-glow">
                Search Jobs
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400">
            <span>Popular:</span>
            <a href="#" className="text-cyan-400 hover:underline">Content Creator</a>
            <span>•</span>
            <a href="#" className="text-cyan-400 hover:underline">Esports Coach</a>
            <span>•</span>
            <a href="#" className="text-cyan-400 hover:underline">Tournament Organiser</a>
            <span>•</span>
            <a href="#" className="text-cyan-400 hover:underline">Social Media Manager</a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-cyan-500/50 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-cyan-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-12 bg-gradient-to-r from-purple-900/50 via-cyan-900/30 to-purple-900/50 border-y border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-black stat-value mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What are Esports Jobs */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-center">
              What are <span className="text-cyan-400">Esports Jobs</span>?
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-6">
                Esports jobs encompass all career opportunities within the competitive gaming industry.
                From professional players competing for million-dollar prize pools to content creators building
                massive audiences, the esports industry offers diverse career paths for gaming enthusiasts.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                The esports industry has transformed from basement LAN parties into a $1.8 billion global
                phenomenon. This explosive growth has created thousands of job opportunities that did not exist
                a decade ago. Today, esports organisations employ coaches, analysts, marketing managers,
                content producers, event organisers, and many more professionals who help teams succeed both
                in-game and as businesses.
              </p>
              <p className="text-lg text-gray-400">
                Whether you are a skilled player dreaming of going pro, a creative looking to build a content
                career, or a business professional seeking opportunities in gaming, the esports industry has
                a place for you. Our job board connects talented individuals with the organisations shaping
                the future of competitive gaming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section id="jobs" className="py-24 bg-[#0d0d15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Featured <span className="text-cyan-400">Esports Jobs</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover the latest opportunities from top esports organisations and gaming companies worldwide.
            </p>
          </div>

          <div className="grid gap-4">
            {featuredJobs.map((job, index) => (
              <div
                key={index}
                className="job-card bg-gray-900/50 rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{job.title}</h3>
                    {job.urgent && (
                      <span className="px-2 py-1 text-xs rounded bg-red-500/20 border border-red-500/50 text-red-400">
                        Urgent
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-3">
                    <span className="font-medium text-cyan-400">{job.company}</span>
                    <span className="flex items-center gap-1">📍 {job.location}</span>
                    <span className="flex items-center gap-1">💰 {job.salary}</span>
                    <span className="flex items-center gap-1">🕐 {job.posted}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    job.type === "Full-time" ? "badge-fulltime" :
                    job.type === "Contract" ? "badge-contract" :
                    job.type === "Remote" ? "badge-remote" : "badge-parttime"
                  }`}>
                    {job.type}
                  </span>
                  <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-6 rounded transition-all">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#" className="inline-flex items-center gap-2 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/20 font-bold py-3 px-8 rounded-lg transition-all">
              View All Esports Jobs
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section id="categories" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Esports Job <span className="text-purple-400">Categories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore career opportunities across every area of the esports and gaming industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobCategories.map((category, index) => (
              <div
                key={index}
                className="card-hover bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 group"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-6">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section id="careers" className="py-24 animated-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Esports <span className="text-cyan-400">Career Paths</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Whether you want to compete, create, broadcast, or build businesses, there is an esports career for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {careerPaths.map((path, index) => (
              <div key={index} className="bg-gray-900/80 border border-gray-700 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{path.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{path.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{path.description}</p>
                <div className="flex flex-wrap gap-2">
                  {path.roles.map((role, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Esports Industry <span className="text-purple-400">Growth</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The esports job market is expanding rapidly with new opportunities every day.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {industryStats.map((item, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-8">
                <div className="text-4xl font-black text-cyan-400 mb-4">{item.stat}</div>
                <p className="text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-16 bg-[#0d0d15] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gray-400 uppercase tracking-wider text-sm">
              Jobs from leading esports organisations
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {companies.map((company) => (
              <div
                key={company}
                className="text-2xl font-bold text-gray-600 hover:text-gray-400 transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#0d0d15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              How to Land Your <span className="text-cyan-400">Esports Job</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Follow these steps to find and apply for esports jobs that match your skills and passion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Your Profile",
                description: "Build a profile showcasing your gaming experience, skills, and portfolio. Whether you are a player, creator, or professional, highlight what makes you stand out in the esports industry.",
              },
              {
                step: "02",
                title: "Browse & Apply",
                description: "Search through thousands of esports job listings from top organisations worldwide. Filter by role, location, and experience level to find opportunities that match your career goals.",
              },
              {
                step: "03",
                title: "Get Hired",
                description: "Connect directly with hiring managers at esports organisations. Our platform helps you stand out from other candidates and land interviews for your dream esports job.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-8xl font-black text-cyan-500/10 absolute -top-4 -left-2">
                  {item.step}
                </div>
                <div className="relative bg-gray-900/50 border border-gray-700 rounded-2xl p-8 pt-12">
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/hero-3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-purple-900/90" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Start Your Esports Career?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of gaming professionals who found their dream esports jobs through our platform.
            Browse the latest opportunities and take the first step towards your career in competitive gaming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#jobs" className="bg-white text-black font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-all transform hover:scale-105 btn-shine inline-flex items-center justify-center">
              Browse Esports Jobs
            </a>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-10 rounded-lg text-lg transition-all inline-flex items-center justify-center">
              Post a Job
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden neon-border-purple">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source src="/hero-5.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Built by <span className="text-purple-400">Esports Professionals</span>
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                We&apos;re an esports network with deep connections across the competitive gaming industry.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                Our team has worked with tournament organisers, pro teams, content creators, and gaming companies.
                We understand what employers are looking for and help candidates present themselves effectively.
              </p>
              <ul className="space-y-4 text-gray-400 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Curated job listings from verified esports organisations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Career advice and resources for gaming professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Direct connections to hiring managers at top teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Free for job seekers—always</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-lg transition-all">
                Contact Us
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-[#0d0d15]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Esports Jobs <span className="text-purple-400">FAQ</span>
            </h2>
            <p className="text-xl text-gray-400">
              Common questions about finding jobs in the esports and gaming industry
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What types of esports jobs are available?",
                a: "The esports industry offers diverse roles including professional players, coaches, analysts, content creators, streamers, shoutcasters, tournament organisers, event managers, marketing specialists, social media managers, broadcast producers, graphic designers, video editors, community managers, and many traditional business roles like HR, finance, and operations within gaming organisations.",
              },
              {
                q: "How do I get a job in esports with no experience?",
                a: "Start by building relevant skills through volunteer work, freelance projects, or creating your own content. Join Discord communities, follow esports professionals on social media, and attend industry events to network. Consider internships or entry-level positions that can provide valuable industry experience. Build a portfolio showcasing your work, whether that is content, analysis, or event organisation.",
              },
              {
                q: "What qualifications do I need for esports jobs?",
                a: "Requirements vary by role. Pro players need exceptional gaming skills and competitive experience. Coaches benefit from gaming knowledge and leadership abilities. Marketing and business roles may require relevant degrees, but practical experience often matters more than formal education in esports. Many employers value passion for gaming, portfolio work, and industry connections.",
              },
              {
                q: "Are esports jobs remote or location-based?",
                a: "Many esports jobs offer remote work, especially content creation, social media management, and some coaching or analyst positions. However, event management, broadcast production, and team house positions typically require in-person attendance. Some organisations offer hybrid arrangements, and pro players often relocate to team facilities for training and competition.",
              },
              {
                q: "What is the average salary for esports jobs?",
                a: "Salaries vary widely by role and organisation. Entry-level positions may start at £20,000-£30,000, while mid-level roles like content managers or coaches can earn £35,000-£60,000. Senior positions and executives can earn £100,000 or more. Top professional players earn millions from salaries, prize winnings, and sponsorships. Location and organisation size also significantly impact compensation.",
              },
              {
                q: "Which companies hire for esports jobs?",
                a: "Major employers include esports organisations like Fnatic, Team Liquid, Cloud9, G2 Esports, and 100 Thieves. Game publishers like Riot Games, Blizzard, and Valve hire extensively. Tournament organisers like ESL FACEIT Group and BLAST employ broadcast and event staff. Streaming platforms like Twitch and YouTube Gaming, plus hardware companies like Razer and Logitech, also hire gaming professionals.",
              },
              {
                q: "Can I work in esports without being a pro gamer?",
                a: "Absolutely. The esports industry needs professionals in marketing, business development, event management, broadcast production, journalism, community management, HR, finance, legal, and many other roles. While gaming knowledge is helpful, it is not always required. Many successful esports professionals came from traditional industries and brought transferable skills to gaming.",
              },
              {
                q: "How competitive are esports jobs?",
                a: "Esports jobs are highly competitive due to industry passion and limited positions compared to applicants. Standing out requires demonstrable skills, a strong portfolio, and networking within the community. Entry-level positions can receive hundreds of applications. Gaining experience through volunteering, freelance work, or creating your own content gives you an advantage.",
              },
              {
                q: "How do I become an esports coach?",
                a: "Start by developing deep game knowledge in your chosen title through high-level play or extensive analysis. Study professional matches, understand meta developments, and learn coaching methodologies. Gain experience coaching amateur or semi-pro teams, often on a volunteer basis initially. Build a track record of player development and team improvement to attract professional opportunities.",
              },
              {
                q: "What skills are most valuable for esports careers?",
                a: "Beyond role-specific skills, valuable abilities include strong communication, adaptability to fast-paced environments, social media proficiency, content creation skills, data analysis, project management, and networking ability. Understanding multiple games and the broader esports ecosystem helps. Languages and cultural awareness are valuable for international organisations.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-800/50 transition-colors">
                  <span className="font-bold text-lg text-white pr-4">{faq.q}</span>
                  <span className="text-cyan-400 text-2xl group-open:rotate-45 transition-transform flex-shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-400">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050508] border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-2xl">
                  E
                </div>
                <span className="text-2xl font-bold">ESPORTS JOBS</span>
              </div>
              <p className="text-gray-400 mb-4">
                The leading job board connecting gaming professionals with esports career opportunities.
              </p>
              <p className="text-gray-500 text-sm">
                Find your dream job in competitive gaming, content creation, and esports management.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Job Categories</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Pro Player Jobs</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Coaching Jobs</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Content Creator Jobs</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Broadcast Jobs</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Event Jobs</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Marketing Jobs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Career Guide</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Salary Guide</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Interview Tips</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Resume Templates</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Industry News</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📧 hello@esportsjobs.quest</li>
                <li>📍 London, United Kingdom</li>
              </ul>
              <div className="mt-6">
                <Link href="/contact" className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-4 rounded text-sm transition-all">
                  Post a Job
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2025 Esports Jobs. All rights reserved.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-gray-400">Privacy Policy</a>
              {" · "}
              <a href="#" className="hover:text-gray-400">Terms of Service</a>
              {" · "}
              <a href="#" className="hover:text-gray-400">Cookie Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

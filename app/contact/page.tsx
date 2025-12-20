"use client";

import { useState } from "react";
import Link from "next/link";

const jobTypes = [
  "Pro Player / Athlete",
  "Coach / Analyst",
  "Content Creator / Streamer",
  "Caster / Broadcast Talent",
  "Event / Tournament Organiser",
  "Marketing / Business",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jobType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          jobType: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Navigation */}
      <nav className="border-b border-cyan-500/20 backdrop-blur-md bg-black/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-xl">
                E
              </div>
              <span className="text-xl font-bold neon-text">
                ESPORTS JOBS
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/#jobs" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Browse Jobs
              </Link>
              <Link href="/#categories" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Categories
              </Link>
              <Link href="/#faq" className="text-gray-300 hover:text-cyan-400 transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-6 rounded transition-all">
                Post a Job
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/hero-5.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Post Your <span className="text-cyan-400">Esports Job</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Reach thousands of gaming professionals looking for their next
              opportunity. Post your <Link href="/" className="text-cyan-400 hover:underline">esports jobs</Link> and find the perfect candidate.
            </p>
          </div>

          {/* Form */}
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">🎮</div>
                <h2 className="text-3xl font-bold text-cyan-400 mb-4">GG! Message Received</h2>
                <p className="text-gray-300 mb-8">
                  Thanks for getting in touch. We will review your job posting
                  and get back to you within 24 hours.
                </p>
                <Link
                  href="/"
                  className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-8 rounded-lg transition-all"
                >
                  Back to Esports Jobs
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company / Organisation *
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      placeholder="Your esports organisation"
                    />
                  </div>
                  <div>
                    <label htmlFor="jobType" className="block text-sm font-medium text-gray-300 mb-2">
                      Job Category
                    </label>
                    <select
                      id="jobType"
                      value={formData.jobType}
                      onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    >
                      <option value="">Select a category</option>
                      {jobTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Job Details
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                    placeholder="E.g., We're looking for a Valorant Coach for our professional team based in London. The role involves developing strategies, reviewing VODs, and supporting our players in competitions..."
                  />
                </div>

                {status === "error" && (
                  <div className="bg-red-900/50 border border-red-500/50 rounded-lg p-4 text-red-300">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Submit Job Posting →"
                  )}
                </button>

                <p className="text-center text-gray-500 text-sm">
                  By submitting this form, you agree to our terms. We will review your posting
                  and contact you about listing options.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-[#0d0d15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Targeted Reach</h3>
              <p className="text-gray-400">Your <Link href="/" className="text-cyan-400 hover:underline">esports jobs</Link> reach qualified gaming professionals actively seeking opportunities.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Review</h3>
              <p className="text-gray-400">We review all job postings within 24 hours and provide quick turnaround.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-white mb-2">Quality Candidates</h3>
              <p className="text-gray-400">Connect with passionate gaming professionals who understand the esports industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Resources */}
      <section className="py-16 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Esports Industry Resources</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <a href="https://britishesports.org" target="_blank" rel="noopener noreferrer" className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="font-bold text-white mb-2">British Esports Federation</h3>
              <p className="text-gray-400 text-sm">The national body for esports in the UK, promoting grassroots competitions and education.</p>
            </a>
            <a href="https://ukie.org.uk" target="_blank" rel="noopener noreferrer" className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="font-bold text-white mb-2">UKIE</h3>
              <p className="text-gray-400 text-sm">The UK games industry trade body representing over 2,000 games businesses.</p>
            </a>
            <a href="https://esic.gg" target="_blank" rel="noopener noreferrer" className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="font-bold text-white mb-2">ESIC</h3>
              <p className="text-gray-400 text-sm">The Esports Integrity Commission ensuring fair play in competitive gaming.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050508] border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-xl">
                E
              </div>
              <span className="text-xl font-bold">ESPORTS JOBS</span>
            </div>
            <p className="text-gray-400 mb-4">
              <Link href="/" className="text-cyan-400 hover:underline">Esports Jobs</Link> - The leading job board for gaming careers.
            </p>
            <p className="text-gray-600 text-sm">
              &copy; 2025 Esports Jobs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

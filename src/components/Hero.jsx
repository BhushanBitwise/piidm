import React, { useState } from 'react';
import { Star, CheckCircle2, Sparkles, Award, ArrowRight, ShieldCheck, Users, Briefcase } from 'lucide-react';
import { SITE_METADATA } from '../data/piidmData';

export default function Hero({ onOpenDemoModal, onOpenSyllabusModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    mode: 'Classroom Training (Pune)',
    branch: 'FC Road (Head Office)'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-piidm-navy to-slate-900 text-white pt-10 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Decorative Gradients & Mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-red-600 rounded-full blur-[128px]"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-amber-500 rounded-full blur-[140px] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Badges, Highlights */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Award Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
              <Award className="w-4 h-4 text-amber-400" />
              <span>{SITE_METADATA.tagline}</span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="hidden sm:inline text-slate-200">IFA International Award</span>
            </div>

            {/* Main H1 Title */}
            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.18] tracking-tight text-white">
              Digital Marketing Courses In Pune With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-teal-300">
                AI Tools
              </span>
              , Live Clients Projects &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-400 to-amber-300">
                Placement Support
              </span>
            </h1>

            {/* Subheading / Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Enhance Your Digital Skills with PIIDM’s Agency-Style & Gen-AI Powered Digital Marketing Classes in Pune.
              Master <strong className="text-white font-semibold">50+ AI Tools</strong>, work on real client ad budgets, and get placed with top MNCs & digital agencies.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>100% Practical & Agency Style Training</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>15+ Global Certifications (Google, HubSpot)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>100% Placement Support (429+ Partners)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Learn 50+ Gen-AI & Performance Tools</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenDemoModal}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-heading font-extrabold text-base shadow-lg shadow-red-600/40 hover:shadow-red-600/60 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-5 h-5" />
                <span>Book Free Demo Lecture</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenSyllabusModal}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 hover:border-white/40"
              >
                <span>Download Syllabus (PDF)</span>
              </button>
            </div>

            {/* Quick Rating Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-3 flex-wrap">
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">4.9 / 5.0</span>
                <span className="text-xs text-slate-400">({SITE_METADATA.totalReviews} Google Reviews)</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ISO 9001:2015 Certified Institute</span>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Registration / Free Demo Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-800 border border-slate-100 relative overflow-hidden">
              {/* Form Top Accent */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-piidm-blue via-red-600 to-amber-500"></div>

              <div className="mb-5 text-center">
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full mb-1">
                  Limited Seats per batch
                </span>
                <h2 className="font-heading font-black text-2xl text-slate-900">
                  Attend Free Demo Class
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Experience our agency-style live class & discuss your career roadmap with experts
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-emerald-900">Demo Class Booked!</h3>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Thank you, <span className="font-semibold">{formData.name}</span>. Our senior career counsellor will call you shortly on{' '}
                    <span className="font-semibold">{formData.phone}</span> with the batch schedule & demo link.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-piidm-blue font-bold underline pt-2"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-piidm-blue focus:ring-2 focus:ring-piidm-blue/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number (WhatsApp) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-piidm-blue focus:ring-2 focus:ring-piidm-blue/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-piidm-blue focus:ring-2 focus:ring-piidm-blue/20 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Training Mode
                      </label>
                      <select
                        value={formData.mode}
                        onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-piidm-blue"
                      >
                        <option>Classroom Training (Pune)</option>
                        <option>Online Live Interactive</option>
                        <option>Hybrid (Weekend)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Branch Preference
                      </label>
                      <select
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-piidm-blue"
                      >
                        <option>FC Road (Head Office)</option>
                        <option>Pimple Saudagar (PCMC)</option>
                        <option>Hadapsar (Pune East)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white font-heading font-extrabold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-4"
                  >
                    <span>Reserve Free Demo Seat Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-center text-slate-400">
                    🔒 No spam guarantee. Instant brochure & batch dates will be shared on WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

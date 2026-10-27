import React from 'react';
import { Award, CheckCircle2, Star, Sparkles, GraduationCap, Building2, ArrowRight } from 'lucide-react';
import { SITE_METADATA } from '../data/piidmData';

export default function TrainerProfile({ onOpenDemoModal }) {
  return (
    <section id="trainer" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-piidm-navy to-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Founder Photo with Accents */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-xs sm:max-w-sm">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600 via-amber-400 to-piidm-blue rounded-3xl blur-md opacity-50 group-hover:opacity-80 transition duration-500"></div>
                <div className="relative bg-slate-950 rounded-2xl p-2.5 border border-white/20 shadow-2xl">
                  <img
                    src={SITE_METADATA.vijayPhoto}
                    alt="Founder / Director Of PIIDM - Vijay Gehlot"
                    className="w-full h-auto rounded-xl object-cover shadow-inner"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://piidm.com/wp-content/uploads/2021/11/Top-Digital-Marketing-Course-In-Pune-1-1024x576.png";
                    }}
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-heading font-black text-xl text-white">
                      Vijay Gehlot
                    </h3>
                    <p className="text-xs font-semibold text-amber-300">
                      Founder & Director • Digital Marketing Coach
                    </p>
                    <div className="flex items-center justify-center gap-1 mt-2 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                      <span className="text-xs font-bold text-white ml-1">5.0 Mentor Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Credentials & Bio */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" /> Learn From Industry Expert
              </span>

              <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
                Vijay Gehlot — Founder & Chief Mentor at PIIDM
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                With over <strong className="text-white font-semibold">12+ years of hands-on agency & corporate consulting experience</strong>,
                Vijay Gehlot has spearheaded performance campaigns for over 100+ brands and personally mentored 50,000+ students and entrepreneurs across India.
              </p>

              {/* Stats & Credibility Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2 text-left">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                  <div className="font-heading font-black text-2xl text-amber-300">12+</div>
                  <div className="text-xs text-slate-400">Years Experience</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                  <div className="font-heading font-black text-2xl text-blue-400">50K+</div>
                  <div className="text-xs text-slate-400">Students Mentored</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 col-span-2 sm:col-span-1">
                  <div className="font-heading font-black text-2xl text-emerald-400">100+</div>
                  <div className="text-xs text-slate-400">Brand Audits Done</div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2 text-xs sm:text-sm text-slate-300 text-left pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct personal mentorship in live client project batches</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Guest keynote speaker at premier business colleges across Pune</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Author of authoritative growth strategy & programmatic SEO playbooks</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center lg:justify-start">
                <button
                  onClick={onOpenDemoModal}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all flex items-center gap-2"
                >
                  <span>Book Free Session With Vijay Gehlot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

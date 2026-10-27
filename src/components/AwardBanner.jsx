import React from 'react';
import { Award, Trophy, CheckCircle, Sparkles, Star } from 'lucide-react';
import { SITE_METADATA } from '../data/piidmData';

export default function AwardBanner({ onOpenDemoModal }) {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-piidm-navy via-slate-900 to-piidm-blue-dark rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden border border-slate-800">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>National & Global Recognition</span>
              </div>

              <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Award Winning Digital Marketing Institute in Pune
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                PIIDM has been officially honored with the prestigious{' '}
                <strong className="text-amber-300 font-bold">IFA International Award for Best Digital Marketing Institute in Pune</strong>.
                Recognized for excellence in agency-style practical learning, cutting-edge Generative AI curriculum integration, and an impeccable placement record spanning over 12+ years.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-left">
                <div className="flex items-start gap-2.5 bg-white/5 rounded-xl p-3 border border-white/10">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">IFA International Award</div>
                    <div className="text-[11px] text-slate-400">Best Digital Marketing Institute</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white/5 rounded-xl p-3 border border-white/10">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">4.9 / 5.0 Star Rating</div>
                    <div className="text-[11px] text-slate-400">Verified by 2,472+ Google Reviews</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white/5 rounded-xl p-3 border border-white/10">
                  <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Agency-Driven Methodology</div>
                    <div className="text-[11px] text-slate-400">Live Client Portfolios & Budgets</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white/5 rounded-xl p-3 border border-white/10">
                  <CheckCircle className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">ISO 9001:2015 Certified</div>
                    <div className="text-[11px] text-slate-400">Standardized Quality Education</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 flex justify-center lg:justify-start">
                <button
                  onClick={onOpenDemoModal}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-heading font-extrabold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Join Award-Winning Institute</span>
                </button>
              </div>
            </div>

            {/* Right Image: IFA Award trophy and certificate */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm sm:max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-rose-500 to-blue-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-white/20 shadow-2xl p-2">
                  <img
                    src={SITE_METADATA.ifaAwardImg || "https://cdn-ileilfn.nitrocdn.com/HIloZJmbyqmKIxjpwMUiOZljSdqZqqHZ/assets/images/optimized/rev-a874e7e/piidm.com/wp-content/uploads/2026/01/IFA-International-Award-For-Best-Digital-Marketing-Institute-In-Pune-e1770131585523.webp"}
                    alt="IFA International Award For Best Digital Marketing Institute In Pune"
                    className="w-full h-auto rounded-xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="p-3 text-center bg-slate-900/90 backdrop-blur-sm">
                    <span className="text-xs font-bold text-amber-300">
                      🏆 IFA International Award Ceremony
                    </span>
                    <p className="text-[11px] text-slate-400">
                      Presented to Director Vijay Gehlot & PIIDM Team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

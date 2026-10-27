import React from 'react';
import { Target, Sparkles, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { BRAND_CASE_STUDIES_DATA } from '../data/piidmData';

export default function BrandCaseStudies({ onOpenDemoModal }) {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-piidm-blue bg-blue-50 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" /> Real-World Growth Frameworks
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Brand Case Studies.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Deconstruct and master the exact advertising campaigns, viral hooks, retention loops, and growth funnels used by India’s most successful consumer brands.
          </p>
        </div>

        {/* 10 Brand Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mb-12">
          {BRAND_CASE_STUDIES_DATA.map((brand, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-piidm-blue/40 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div className="h-16 w-full flex items-center justify-center mb-3 bg-white rounded-xl p-2 shadow-inner">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-12 max-w-[85%] object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(brand.name)}&background=0c1b33&color=fff`;
                  }}
                />
              </div>

              <div className="text-center mt-1">
                <h3 className="font-heading font-bold text-sm text-slate-900 group-hover:text-piidm-blue transition-colors">
                  {brand.name}
                </h3>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-snug">
                  {brand.topic}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-200/60 text-center">
                <span className="text-[10px] font-bold text-piidm-blue group-hover:underline inline-flex items-center gap-0.5">
                  View Study <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-slate-900 to-piidm-navy rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading font-black text-xl text-white">
              Want To Learn How To Run High ROAS Campaigns Like These Brands?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Join our next agency-style cohort to build real portfolio campaigns under direct mentorship.
            </p>
          </div>
          <button
            onClick={onOpenDemoModal}
            className="shrink-0 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-1.5"
          >
            <span>Reserve Demo Lecture</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

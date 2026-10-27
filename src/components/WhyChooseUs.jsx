import React from 'react';
import { Cpu, Briefcase, UserCheck, Trophy, Target, ArrowRight, Sparkles } from 'lucide-react';
import { HIGHLIGHTS_5 } from '../data/piidmData';

export default function WhyChooseUs({ onOpenDemoModal, onOpenSyllabusModal }) {
  const highlightIcons = [
    <Cpu className="w-6 h-6 text-piidm-blue" />,
    <Briefcase className="w-6 h-6 text-red-600" />,
    <UserCheck className="w-6 h-6 text-amber-500" />,
    <Trophy className="w-6 h-6 text-purple-600" />,
    <Target className="w-6 h-6 text-emerald-600" />,
  ];

  const badges = [
    "Gen-AI 2026 Ready",
    "Real Budgets & Portfolios",
    "12+ Years Practitioners",
    "IFA Award Recipient",
    "Guaranteed Interviews"
  ];

  return (
    <section id="highlights" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-piidm-blue bg-blue-50 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" /> Program Key Highlights
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            5 Key Highlights Of PIIDM’s Digital Marketing Classes in Pune
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover why over 58,000+ students, business owners, and professionals choose PIIDM as their #1 digital marketing training institute.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HIGHLIGHTS_5.map((item, idx) => (
            <div
              key={idx}
              className={`group relative bg-slate-50 hover:bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-piidm-blue/30 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Card Header with Step Number and Icon */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {highlightIcons[idx]}
                  </div>
                  <span className="font-heading font-black text-4xl text-slate-200 group-hover:text-piidm-blue/20 transition-colors">
                    {item.num}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="inline-block text-[11px] font-bold text-slate-500 bg-slate-200/60 px-2.5 py-0.5 rounded-md">
                    {badges[idx]}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-3 group-hover:text-piidm-blue transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Card Footer Micro CTA */}
              <div className="pt-6 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-xs font-bold text-piidm-blue group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-[10px] text-slate-400 font-semibold">
                  Module Verified
                </span>
              </div>
            </div>
          ))}

          {/* Quick Consultation CTA Card */}
          <div className="bg-gradient-to-br from-piidm-navy to-piidm-blue-dark rounded-2xl p-7 text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"></div>

            <div className="relative z-10 space-y-3">
              <span className="text-[11px] font-bold tracking-widest uppercase text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md">
                Personalized Roadmap
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-white">
                Not Sure Which Digital Marketing Path Fits You?
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Speak directly with senior digital marketing coach Vijay Gehlot to map out your salary growth, career transition, or agency revenue model.
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={onOpenDemoModal}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-heading font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Talk To Career Counsellor</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

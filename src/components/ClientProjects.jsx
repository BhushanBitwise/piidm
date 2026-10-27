import React from 'react';
import { Target, Sparkles, TrendingUp, Globe, Link2, Search, CheckCircle, ArrowRight } from 'lucide-react';
import { CLIENT_PROJECTS_DATA } from '../data/piidmData';

export default function ClientProjects({ onOpenDemoModal }) {
  const iconMap = {
    Target: <Target className="w-6 h-6 text-piidm-blue" />,
    Sparkles: <Sparkles className="w-6 h-6 text-rose-500" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-500" />,
    Globe: <Globe className="w-6 h-6 text-indigo-500" />,
    Link: <Link2 className="w-6 h-6 text-amber-500" />,
    Search: <Search className="w-6 h-6 text-teal-500" />,
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" /> Agency Proof of Work
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
            Live Clients Projects & Assignments
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            At PIIDM, you don't just learn theory. You manage real advertising budgets, write ad copy tested with live audiences, and build an agency-ready proof-of-work portfolio.
          </p>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CLIENT_PROJECTS_DATA.map((proj, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 rounded-2xl p-7 border border-slate-700 hover:border-piidm-blue/50 hover:bg-slate-800 transition-all duration-300 shadow-xl group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {iconMap[proj.icon] || <Target className="w-6 h-6 text-piidm-blue" />}
                </div>
                <span className="font-heading font-black text-2xl text-slate-600 group-hover:text-amber-400 transition-colors">
                  {proj.num}
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-3 group-hover:text-blue-300 transition-colors">
                {proj.title}
              </h3>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                {proj.desc}
              </p>

              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Portfolio Verified
                </span>
                <span className="text-xs text-slate-400 group-hover:text-white transition-colors flex items-center gap-1 font-semibold">
                  Details <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Client Fee Banner Callout */}
        <div className="mt-14 bg-gradient-to-r from-red-900/60 via-slate-800 to-piidm-navy/80 rounded-2xl p-6 sm:p-8 border border-red-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading font-black text-xl text-white">
              Enquiry For Top Digital Marketing Courses In Pune Fees
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Affordable fee structure with zero-cost EMI options starting at just ₹ 4,500/month.
            </p>
          </div>
          <button
            onClick={onOpenDemoModal}
            className="shrink-0 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all flex items-center gap-2"
          >
            <span>Get Fee Structure & Discount</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

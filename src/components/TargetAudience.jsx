import React from 'react';
import { GraduationCap, Briefcase, TrendingUp, Store, Laptop, Home, CheckCircle2, ArrowRight } from 'lucide-react';
import { TARGET_AUDIENCE } from '../data/piidmData';

export default function TargetAudience({ onOpenDemoModal }) {
  const iconMap = {
    GraduationCap: <GraduationCap className="w-6 h-6 text-piidm-blue" />,
    Briefcase: <Briefcase className="w-6 h-6 text-red-600" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-600" />,
    Store: <Store className="w-6 h-6 text-amber-500" />,
    Laptop: <Laptop className="w-6 h-6 text-purple-600" />,
    Home: <Home className="w-6 h-6 text-rose-500" />,
  };

  const jobRoles = [
    { title: "Performance Marketing Manager", salary: "₹ 6 - 12 LPA", demand: "High" },
    { title: "SEO Specialist / Consultant", salary: "₹ 4 - 8 LPA", demand: "High" },
    { title: "Social Media Strategist", salary: "₹ 3.5 - 7 LPA", demand: "Very High" },
    { title: "Google & Meta Ads Specialist", salary: "₹ 4.5 - 9 LPA", demand: "High" },
    { title: "Content & AI Copywriter", salary: "₹ 3.5 - 6.5 LPA", demand: "High" },
    { title: "Full-Stack Digital Marketer", salary: "₹ 7 - 14 LPA", demand: "Booming" },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Part: Who Can Join */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-piidm-blue bg-blue-50 px-3 py-1 rounded-full">
            No Prior Tech Experience Required
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Who Can Join Digital Marketing Program in Pune?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our curriculum is designed from beginner scratch to advanced AI-level mastery. Anyone with basic computer curiosity can enroll.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {TARGET_AUDIENCE.map((aud, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-piidm-blue/30 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {iconMap[aud.icon] || <GraduationCap className="w-6 h-6 text-piidm-blue" />}
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-piidm-blue transition-colors">
                {aud.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {aud.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Part: Digital Marketing Job Opportunities */}
        <div className="bg-gradient-to-br from-slate-900 via-piidm-navy to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full">
              Career Growth Outlook
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
              Digital Marketing Job Opportunities & Salary Potential
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              High-growth job profiles in high demand across IT companies, e-commerce brands, and fast-scaling agencies in Pune and worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {jobRoles.map((role, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-md">
                    Demand: {role.demand}
                  </span>
                  <span className="text-xs font-black text-amber-300">
                    {role.salary}
                  </span>
                </div>
                <h4 className="font-heading font-bold text-base text-white mb-1">
                  {role.title}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-2 border-t border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Interview calls provided by PIIDM</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={onOpenDemoModal}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-heading font-bold text-sm shadow-lg shadow-red-600/30 transition-all inline-flex items-center gap-2"
            >
              <span>Explore Digital Marketing Career Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

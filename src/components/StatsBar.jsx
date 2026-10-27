import React from 'react';
import { Users, GraduationCap, Briefcase, Calendar, Star, Building2 } from 'lucide-react';
import { STATS } from '../data/piidmData';

export default function StatsBar() {
  const icons = [
    <Users className="w-6 h-6 text-piidm-blue" />,
    <GraduationCap className="w-6 h-6 text-red-600" />,
    <Briefcase className="w-6 h-6 text-emerald-600" />,
    <Calendar className="w-6 h-6 text-amber-500" />,
    <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />,
    <Building2 className="w-6 h-6 text-indigo-600" />,
  ];

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center ${idx > 0 ? 'sm:pl-4' : ''} ${idx % 2 !== 0 && idx < 2 ? 'border-none' : ''}`}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-3 shadow-inner">
                {icons[idx]}
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                {stat.value}
              </h2>
              <span className="text-xs sm:text-sm font-bold text-slate-700 mt-1">
                {stat.label}
              </span>
              <span className="text-[11px] text-slate-400 mt-0.5">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

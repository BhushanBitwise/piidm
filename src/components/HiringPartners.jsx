import React from 'react';
import { Building2, Briefcase, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { HIRING_COMPANIES_DATA } from '../data/piidmData';

export default function HiringPartners({ onOpenDemoModal, onOpenSyllabusModal }) {
  return (
    <section id="placements" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-14 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100/90 px-3 py-1 rounded-full">
            <Briefcase className="w-3.5 h-3.5" /> 100% Placement Record
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Our Students Working With Companies Like.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We Confidently Believe Every PIIDM Student Is Equal To Every <strong>PIIDM Placement</strong>. Our students have achieved great success after completing their courses with us. Many of them are now working with <strong>top companies in India</strong> across startups, marketing agencies, e-commerce giants, and multinational corporations.
          </p>
        </div>

        {/* Company Logos Grid with High-Res Images & Prominent Sizing */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-6 mb-14">
          {HIRING_COMPANIES_DATA.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-piidm-blue/50 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="h-20 sm:h-24 w-full flex items-center justify-center mb-3">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 sm:max-h-20 max-w-[90%] object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=0170b9&color=fff&size=150`;
                  }}
                />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-piidm-blue transition-colors text-center line-clamp-1">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Placement Metrics & Highlights Banner */}
        <div className="bg-gradient-to-r from-piidm-navy via-slate-900 to-piidm-blue-dark rounded-3xl p-8 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                Highest CTC Package
              </span>
              <div className="font-heading font-black text-3xl sm:text-4xl text-white">
                ₹ 12.5 LPA
              </div>
              <p className="text-xs text-slate-400">
                Achieved by our Performance Marketer alumnus at an international agency
              </p>
            </div>

            <div className="space-y-2 md:pl-8 pt-6 md:pt-0">
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-400">
                Average Salary Hike
              </span>
              <div className="font-heading font-black text-3xl sm:text-4xl text-white">
                85% - 150%
              </div>
              <p className="text-xs text-slate-400">
                For career switchers and working professionals post certification
              </p>
            </div>

            <div className="space-y-3 md:pl-8 pt-6 md:pt-0 flex flex-col items-center md:items-start justify-center">
              <div className="text-xs font-bold text-slate-300">
                Placement Wing Guarantees:
              </div>
              <div className="text-xs text-slate-300 space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Unlimited interview calls till selection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Personal portfolio & live campaign proof</span>
                </div>
              </div>
              <button
                onClick={onOpenDemoModal}
                className="mt-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md"
              >
                <span>Check Placement Opportunities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

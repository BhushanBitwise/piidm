import React from 'react';
import { Calendar, Clock, Laptop, Users, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { BATCH_TIMINGS } from '../data/piidmData';

export default function Batches({ onOpenDemoModal }) {
  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-piidm-blue bg-blue-50 px-3 py-1 rounded-full">
            <Calendar className="w-3.5 h-3.5" /> Flexible Schedules
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Batches & Timing Of Digital Marketing Institute In Pune
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Choose between classroom training in Pune (FC Road, Pimple Saudagar, Hadapsar) or live instructor-led interactive online batches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {BATCH_TIMINGS.map((batch, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between ${
                idx === 0
                  ? 'bg-white border-piidm-blue shadow-xl relative'
                  : 'bg-white border-slate-200/90 shadow-sm hover:shadow-lg'
              }`}
            >
              {idx === 0 && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-wider bg-red-600 text-white px-3 py-0.5 rounded-full shadow-md">
                  Fastest Filling
                </span>
              )}

              <div>
                <span className="inline-block text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md mb-3">
                  {batch.badge}
                </span>

                <h3 className="font-heading font-black text-xl text-slate-900 mb-2">
                  {batch.type}
                </h3>

                <p className="text-xs font-semibold text-slate-500 mb-4">
                  {batch.days}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Available Slots:
                  </div>
                  {batch.slots.map((slot, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl text-xs font-bold text-slate-800 border border-slate-100"
                    >
                      <Clock className="w-4 h-4 text-piidm-blue shrink-0" />
                      <span>{slot}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Mode: <strong className="text-slate-800">{batch.mode}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Max 15 - 18 students per batch</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={onOpenDemoModal}
                  className={`w-full py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                    idx === 0
                      ? 'bg-red-600 hover:bg-red-500 text-white shadow-md'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Reserve Seat in Next Batch</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Free Demo Lecture Callout */}
        <div className="bg-gradient-to-r from-blue-900 to-piidm-navy rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading font-black text-xl text-white">
              Attend Our Free Digital Marketing Classes In Pune Demo Lectures
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Get an experiential walkthrough of real agency ad dashboards, live SEO audit reports, and AI prompt engineering tools.
            </p>
          </div>
          <button
            onClick={onOpenDemoModal}
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-extrabold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-1.5"
          >
            <span>Book Free Demo Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

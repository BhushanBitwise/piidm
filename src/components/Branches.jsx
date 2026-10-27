import React from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, Building, Sparkles } from 'lucide-react';
import { BRANCHES_DATA, SITE_METADATA } from '../data/piidmData';

export default function Branches({ onOpenDemoModal }) {
  return (
    <section id="branches" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-piidm-blue bg-blue-50 px-3 py-1 rounded-full">
            <Building className="w-3.5 h-3.5" /> 3 Convenient Offline Locations
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Digital Marketing Institute Near You in Pune: 3 Centres
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Visit your nearest PIIDM offline training branch for one-on-one counseling, infrastructure tour, and demo classroom seat reservation.
          </p>
        </div>

        {/* 3 Branches Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {BRANCHES_DATA.map((branch) => (
            <div
              key={branch.id}
              className="bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-piidm-blue group-hover:bg-piidm-blue group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-blue-100 text-piidm-blue px-2.5 py-1 rounded-md">
                    {branch.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-3 group-hover:text-piidm-blue transition-colors">
                  {branch.name}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{branch.address}</span>
                </p>

                <div className="space-y-2 mb-5 pt-3 border-t border-slate-200/60 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold">{branch.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{branch.timing}</span>
                  </div>
                </div>

                {/* Features Pill */}
                <div className="space-y-1.5 pt-2 border-t border-slate-200/60">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Centre Amenities:
                  </div>
                  {branch.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between gap-3">
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200 shadow-sm flex items-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-blue-600" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={onOpenDemoModal}
                  className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-sm transition-all"
                >
                  Visit Branch
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Online City Pills Banner */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white text-center space-y-4">
          <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">
            Live Instructor-Led Online Training Across India
          </span>
          <h4 className="font-heading font-black text-xl text-white">
            Check Out Our Digital Marketing Online Courses According To Your City
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto pt-2">
            {[
              "Digital Marketing Course Pune",
              "Mumbai",
              "Delhi NCR",
              "Bangalore",
              "Hyderabad",
              "Chennai",
              "Kolkata",
              "Ahmedabad",
              "Jaipur",
              "Nagpur",
              "Nashik",
              "Indore",
              "Surat",
              "Chandigarh",
              "Dubai & UAE (NRI Batches)"
            ].map((city, idx) => (
              <span
                key={idx}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-3 py-1.5 rounded-full border border-slate-700 cursor-pointer transition-colors"
                onClick={onOpenDemoModal}
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

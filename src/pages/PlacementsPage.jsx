import React from 'react';
import HiringPartners from '../components/HiringPartners';
import VideoTestimonials from '../components/VideoTestimonials';
import GoogleReviews from '../components/GoogleReviews';
import { Briefcase, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function PlacementsPage({ onOpenDemoModal, onPlayVideo }) {
  return (
    <div className="pt-6">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-piidm-navy to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full">
            <Briefcase className="w-3.5 h-3.5" /> 100% Placement Assurance
          </span>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight max-w-4xl mx-auto leading-tight">
            PIIDM Digital Marketing Placements & Hiring Partners
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            With over 54,651+ placed students and 429+ active hiring partners across Pune, Mumbai, Bangalore, and Gurgaon, PIIDM guarantees interview support until you are selected.
          </p>
          <div className="pt-4">
            <button
              onClick={onOpenDemoModal}
              className="px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Apply For Placement Drive</span>
            </button>
          </div>
        </div>
      </section>

      {/* Hiring Partners Section */}
      <HiringPartners onOpenDemoModal={onOpenDemoModal} />

      {/* Video Reviews */}
      <VideoTestimonials onPlayVideo={onPlayVideo} />

      {/* Google Reviews */}
      <GoogleReviews />
    </div>
  );
}

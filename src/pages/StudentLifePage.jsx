import React from 'react';
import StudentLife from '../components/StudentLife';
import VideoTestimonials from '../components/VideoTestimonials';
import GoogleReviews from '../components/GoogleReviews';
import { Camera, Sparkles } from 'lucide-react';

export default function StudentLifePage({ onPlayVideo, onOpenDemoModal }) {
  return (
    <div className="pt-6">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-piidm-navy to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            <Camera className="w-3.5 h-3.5" /> Campus Memories & Celebrations
          </span>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Student Life & Cultural Events At PIIDM Pune
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Experience our vibrant campus energy with sports tournaments (PPL Cricket), musical fests with Team Dhun, celebrity workshops with Samay Raina, and convocation felicitations.
          </p>
        </div>
      </section>

      <StudentLife />
      <VideoTestimonials onPlayVideo={onPlayVideo} />
      <GoogleReviews />
    </div>
  );
}

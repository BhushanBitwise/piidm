import React from 'react';
import { Play, Video, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { VIDEO_TESTIMONIALS_DATA } from '../data/piidmData';

export default function VideoTestimonials({ onPlayVideo }) {
  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-piidm-blue bg-blue-50 px-3 py-1 rounded-full">
            <Video className="w-3.5 h-3.5" /> Real Student Stories
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Student’s Video Testimonial
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Watch our students share their genuine learning journey, faculty guidance, and career placements at PIIDM.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VIDEO_TESTIMONIALS_DATA.map((video, idx) => (
            <div
              key={video.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Thumbnail with Play Trigger */}
              <div
                className="relative aspect-video bg-slate-900 overflow-hidden cursor-pointer"
                onClick={() => onPlayVideo(video.id)}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>
                <span className="absolute bottom-2.5 right-2.5 text-[10px] font-bold bg-slate-900/80 text-white px-2 py-0.5 rounded-md backdrop-blur-sm">
                  Video Review
                </span>
              </div>

              {/* Video Info */}
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                  <span className="text-[11px] font-bold text-slate-500 ml-1">5.0 Star</span>
                </div>

                <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 group-hover:text-piidm-blue transition-colors line-clamp-2">
                  {video.title}
                </h3>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">{video.name}</span>
                  <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> {video.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

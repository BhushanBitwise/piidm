import React from 'react';
import { Cpu, Sparkles, Wrench } from 'lucide-react';
import { TOOLS_DATA } from '../data/piidmData';

export default function ToolsMarquee() {
  const row1 = TOOLS_DATA.slice(0, 12);
  const row2 = TOOLS_DATA.slice(12);

  return (
    <section id="tools" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-12 space-y-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-teal-300 bg-teal-400/10 border border-teal-400/20 px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5" /> Hands-On AI Technology Stack
        </span>
        <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
          Master 50+ Gen-AI & Digital Marketing Tools Like
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Get hands-on practical training on industry-standard AI platforms, ad management dashboards, SEO crawlers, and analytics suites.
        </p>
      </div>

      {/* Infinite Marquee Row 1 */}
      <div className="relative w-full overflow-hidden mb-6 py-2">
        <div 
          className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDuration: '80s' }}
        >
          {[...row1, ...row1, ...row1].map((tool, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-2xl px-5 py-3.5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 shadow-sm">
                {tool.icon ? (
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <Wrench className="w-5 h-5 text-slate-700" />
                )}
              </div>
              <div className="text-left">
                <div className="font-bold text-sm text-white group-hover:text-blue-400 transition-colors whitespace-nowrap">
                  {tool.name}
                </div>
                <div className="text-[11px] text-slate-400 whitespace-nowrap">
                  {tool.cat}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Marquee Row 2 (Reverse) */}
      <div className="relative w-full overflow-hidden py-2">
        <div 
          className="flex gap-4 w-max animate-marquee-reverse hover:[animation-play-state:paused]"
          style={{ animationDuration: '80s' }}
        >
          {[...row2, ...row2, ...row2].map((tool, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-2xl px-5 py-3.5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 shadow-sm">
                {tool.icon ? (
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <Cpu className="w-5 h-5 text-slate-700" />
                )}
              </div>
              <div className="text-left">
                <div className="font-bold text-sm text-white group-hover:text-teal-300 transition-colors whitespace-nowrap">
                  {tool.name}
                </div>
                <div className="text-[11px] text-slate-400 whitespace-nowrap">
                  {tool.cat}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Tool Summary Pill */}
      <div className="mt-10 text-center">
        <span className="inline-block text-xs font-semibold text-slate-400 bg-slate-800/60 px-4 py-2 rounded-full border border-slate-700">
          ✨ Students receive free access credentials, tool prompts library, and step-by-step masterclasses
        </span>
      </div>
    </section>
  );
}

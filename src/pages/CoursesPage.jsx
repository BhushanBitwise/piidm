import React from 'react';
import Curriculum from '../components/Curriculum';
import ToolsMarquee from '../components/ToolsMarquee';
import Certifications from '../components/Certifications';
import Batches from '../components/Batches';
import FaqSection from '../components/FaqSection';
import { Sparkles, Download, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CoursesPage({ onOpenDemoModal, onOpenSyllabusModal }) {
  return (
    <div className="pt-6">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-piidm-navy to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" /> Comprehensive 2026 Curriculum
          </span>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Digital Marketing & Gen-AI Courses In Pune
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Explore all 61 modules covering AI Prompt Engineering, Performance Marketing, SEO, Social Media, Google Ads, and 100% Placement Drives.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenDemoModal}
              className="px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Free Demo Lecture</span>
            </button>
            <button
              onClick={onOpenSyllabusModal}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Syllabus PDF</span>
            </button>
          </div>
        </div>
      </section>

      {/* Curriculum Component with All 61 Modules */}
      <Curriculum
        onOpenSyllabusModal={onOpenSyllabusModal}
        onOpenDemoModal={onOpenDemoModal}
      />

      {/* Tools Section */}
      <ToolsMarquee />

      {/* Certifications */}
      <Certifications onOpenDemoModal={onOpenDemoModal} />

      {/* Batch Timings */}
      <Batches onOpenDemoModal={onOpenDemoModal} />

      {/* FAQ */}
      <FaqSection onOpenDemoModal={onOpenDemoModal} />
    </div>
  );
}

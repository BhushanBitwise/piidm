import React from 'react';
import AwardBanner from '../components/AwardBanner';
import TrainerProfile from '../components/TrainerProfile';
import WhyChooseUs from '../components/WhyChooseUs';
import StatsBar from '../components/StatsBar';
import Certifications from '../components/Certifications';
import { Award, Sparkles } from 'lucide-react';

export default function AboutPage({ onOpenDemoModal, onOpenSyllabusModal }) {
  return (
    <div className="pt-6">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-piidm-navy to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            <Award className="w-3.5 h-3.5" /> India's #1 Award Winning Institute
          </span>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight max-w-4xl mx-auto leading-tight">
            About PIIDM — Practical Institute of Internet & Digital Marketing
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Founded by industry veteran Vijay Gehlot with a mission to deliver practical, agency-driven digital marketing education that produces job-ready leaders.
          </p>
        </div>
      </section>

      <StatsBar />
      <AwardBanner onOpenDemoModal={onOpenDemoModal} />
      <TrainerProfile onOpenDemoModal={onOpenDemoModal} />
      <WhyChooseUs onOpenDemoModal={onOpenDemoModal} onOpenSyllabusModal={onOpenSyllabusModal} />
      <Certifications onOpenDemoModal={onOpenDemoModal} />
    </div>
  );
}

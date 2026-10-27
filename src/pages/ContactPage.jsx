import React from 'react';
import Branches from '../components/Branches';
import FaqSection from '../components/FaqSection';
import { MapPin, Phone, Mail, MessageCircle, Sparkles } from 'lucide-react';
import { SITE_METADATA } from '../data/piidmData';

export default function ContactPage({ onOpenDemoModal }) {
  return (
    <div className="pt-6">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-piidm-navy to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-blue-400 bg-blue-400/10 border border-blue-400/20 px-3 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5" /> 3 Convenient Centres in Pune
          </span>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Contact PIIDM Digital Marketing Institute Pune
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Visit our offline branches at FC Road (Head Office), Pimple Saudagar (PCMC), or Hadapsar (Magarpatta) for personalized counseling.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs font-bold">
            <a
              href={`tel:${SITE_METADATA.phone}`}
              className="px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 flex items-center gap-2 shadow-md transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call: {SITE_METADATA.phone}</span>
            </a>
            <a
              href={`https://wa.me/${SITE_METADATA.whatsapp}?text=Hi%2C%20I%20want%20to%20visit%20PIIDM%20Centre.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-2 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      <Branches onOpenDemoModal={onOpenDemoModal} />
      <FaqSection onOpenDemoModal={onOpenDemoModal} />
    </div>
  );
}

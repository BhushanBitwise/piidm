import React from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { SITE_METADATA } from '../data/piidmData';

export default function FloatingActions({ onOpenDemoModal }) {
  return (
    <>
      {/* Floating Desktop Buttons (Right Side) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col gap-3">
        {/* WhatsApp Floating Button */}
        <a
          href={`https://wa.me/${SITE_METADATA.whatsapp}?text=Hi%2C%20I%20want%20to%20know%20more%20about%20PIIDM%20Digital%20Marketing%20Courses.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group relative"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>

        {/* Call Floating Button */}
        <a
          href={`tel:${SITE_METADATA.phone}`}
          className="w-13 h-13 p-3.5 rounded-full bg-piidm-blue hover:bg-piidm-blue-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group relative"
          aria-label="Call PIIDM Institute"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Call: {SITE_METADATA.phone}
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${SITE_METADATA.phone}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
        >
          <Phone className="w-4 h-4 text-emerald-600" />
          <span>Call Now</span>
        </a>

        <a
          href={`https://wa.me/${SITE_METADATA.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20PIIDM%20Digital%20Marketing%20Course.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenDemoModal}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Free Demo</span>
        </button>
      </div>
    </>
  );
}

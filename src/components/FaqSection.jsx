import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { FAQS_DATA, SITE_METADATA } from '../data/piidmData';

export default function FaqSection({ onOpenDemoModal }) {
  const categories = Object.keys(FAQS_DATA);
  const [activeCategory, setActiveCategory] = useState(categories[0] || 'Course / Content');

  const questions = FAQS_DATA[activeCategory] || [];

  return (
    <section id="faqs" className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-piidm-blue bg-blue-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-3.5 h-3.5" /> Have Questions?
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            FREQUENTLY ASKED QUESTION
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Find transparent answers regarding course duration, fees, live client projects, 100% placement support, and class timings.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border flex items-center gap-2 ${
                activeCategory === cat
                  ? 'bg-piidm-blue text-white border-piidm-blue shadow-md'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  activeCategory === cat
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                {FAQS_DATA[cat]?.length || 0}
              </span>
            </button>
          ))}
        </div>

        {/* FAQ Accordions using native <details> and <summary> */}
        <div className="space-y-3.5">
          {questions.map((faq, idx) => (
            <details
              key={`${activeCategory}-${idx}`}
              className="group bg-slate-50 border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-200 open:bg-white open:shadow-md open:border-piidm-blue/40"
            >
              <summary className="list-none flex items-center justify-between p-5 cursor-pointer select-none font-heading font-bold text-sm sm:text-base text-slate-800 hover:text-piidm-blue transition-colors">
                <span className="pr-4">{faq.question}</span>
                <div className="w-7 h-7 rounded-full bg-slate-200/60 group-open:bg-blue-50 text-slate-600 group-open:text-piidm-blue flex items-center justify-center shrink-0 transition-transform duration-200 group-open:rotate-180">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </summary>
              <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-14 bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900">
              Still have questions about our digital marketing courses in Pune?
            </h4>
            <p className="text-xs text-slate-500">
              Our academic counselors are available on WhatsApp and phone call for personalized guidance.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${SITE_METADATA.whatsapp}?text=Hi%2C%20I%20have%20a%20query%20regarding%20PIIDM%20Course%20Fees%20and%20Batches.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
            <button
              onClick={onOpenDemoModal}
              className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Call Back</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

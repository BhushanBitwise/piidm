import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/piidmData';

export default function Certifications({ onOpenDemoModal }) {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-piidm-blue bg-blue-50 px-3 py-1 rounded-full">
            <Award className="w-3.5 h-3.5" /> Globally Recognized Credentials
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            15+ Digital Marketing Certification in Pune
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Gain verified, resume-boosting certificates from global industry giants such as Google, HubSpot, Meta, and PIIDM to validate your expertise.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-5 border border-slate-100 flex items-center justify-center p-2">
                  {cert.img ? (
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <Award className="w-16 h-16 text-piidm-blue/40" />
                  )}
                  <span className="absolute top-2 right-2 text-[10px] font-black uppercase tracking-wider bg-slate-900/80 text-white px-2 py-0.5 rounded-md backdrop-blur-sm">
                    {cert.issuer}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-piidm-blue mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Industry Recognized</span>
                </div>

                <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-piidm-blue transition-colors">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Issuer: <strong className="text-slate-700">{cert.issuer}</strong>
                </span>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-xs font-bold text-piidm-blue hover:underline inline-flex items-center gap-1"
                >
                  View Sample <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Zoom Modal */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-xl w-full p-6 text-slate-900 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div>
                  <h4 className="font-heading font-bold text-lg text-slate-900">
                    {selectedCert.title}
                  </h4>
                  <span className="text-xs text-slate-500">Issuer: {selectedCert.issuer}</span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold"
                >
                  ✕
                </button>
              </div>
              <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-center mb-4">
                <img
                  src={selectedCert.img}
                  alt={selectedCert.title}
                  className="max-h-80 w-auto object-contain rounded-lg shadow-sm"
                />
              </div>
              <div className="text-center">
                <button
                  onClick={() => {
                    setSelectedCert(null);
                    onOpenDemoModal();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md"
                >
                  Enroll To Earn This Certificate
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

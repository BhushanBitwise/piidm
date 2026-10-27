import React, { useState } from 'react';
import { Camera, Sparkles, X, ZoomIn } from 'lucide-react';
import { STUDENT_LIFE_DATA } from '../data/piidmData';

export default function StudentLife() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            <Camera className="w-3.5 h-3.5" /> Vibrant Campus Culture
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
            Student Life At PIIDM
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Batch Certification, Cricket Event, Farewell Party, Dandiya Night And Much More! Experience the vibrant learning culture at PIIDM Pune.
          </p>
        </div>

        {/* Gallery Grid with High-Resolution Local Photos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {STUDENT_LIFE_DATA.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/80 group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 ${
                idx === 0 || idx === 6 ? 'md:col-span-2 md:row-span-1' : ''
              }`}
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>

              {/* Overlay with Title & Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 sm:p-5 flex flex-col justify-end">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Campus Event
                </span>
                <h4 className="font-heading font-bold text-xs sm:text-sm text-white line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                  {item.desc}
                </p>
                <div className="pt-2 flex items-center gap-1 text-[11px] text-blue-300 font-semibold">
                  <ZoomIn className="w-3.5 h-3.5" /> Click to view full image
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Zoom Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
                <img
                  src={selectedImage.img}
                  alt={selectedImage.title}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>

              <div className="p-5 bg-slate-900 border-t border-slate-800">
                <h3 className="font-heading font-bold text-lg text-white">
                  {selectedImage.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {selectedImage.desc} • PIIDM Campus Pune
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

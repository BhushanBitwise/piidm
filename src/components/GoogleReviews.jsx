import React, { useState } from 'react';
import { Star, MessageSquareQuote, CheckCircle, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { REVIEWS_DATA, SITE_METADATA } from '../data/piidmData';

export default function GoogleReviews() {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 4;
  const totalPages = Math.ceil(REVIEWS_DATA.length / reviewsPerPage);

  const displayedReviews = REVIEWS_DATA.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  return (
    <section id="reviews" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Trust Score */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full">
              <CheckCircle className="w-3.5 h-3.5" /> Verified Google Reviews
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
              What Our Students Have To Say
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl">
              Authentic reviews from professionals and students who transformed their careers with PIIDM Pune.
            </p>
          </div>

          {/* Google Trust Rating Box */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 flex items-center gap-4 shrink-0 shadow-sm">
            <div className="w-12 h-12 bg-white rounded-xl shadow-inner flex items-center justify-center p-2">
              <img
                src="https://cdn.trustindex.io/assets/platform/Google/logo/f.svg"
                alt="Google Rating"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://www.google.com/favicon.ico";
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="font-black text-slate-900 ml-1 text-base">{SITE_METADATA.rating}</span>
              </div>
              <div className="text-xs text-slate-500 font-semibold">
                Rated <strong className="text-slate-800">Excellent</strong> based on {SITE_METADATA.totalReviews} reviews
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {displayedReviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-piidm-blue/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Author Info & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(rev.name)}&background=0170b9&color=fff`;
                      }}
                    />
                    <div>
                      <h4 className="font-heading font-bold text-sm text-slate-900">
                        {rev.name}
                      </h4>
                      <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
                        <CheckCircle className="w-3 h-3" /> Verified Student
                      </div>
                    </div>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic line-clamp-4">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>Google Review</span>
                <span className="text-piidm-blue font-bold">PIIDM Pune</span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Controls */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-slate-500 font-semibold">
            Showing {currentPage * reviewsPerPage + 1} - {Math.min((currentPage + 1) * reviewsPerPage, REVIEWS_DATA.length)} of {REVIEWS_DATA.length} Featured Reviews
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-slate-700"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-slate-700"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { BookOpen, Calendar, User, ArrowRight, Sparkles } from 'lucide-react';
import { BLOGS_DATA } from '../data/piidmData';

export default function BlogSection() {
  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-piidm-blue bg-blue-50 px-3 py-1 rounded-full">
            <BookOpen className="w-3.5 h-3.5" /> Industry Insights & Growth Guides
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Our Recent Blogs & Knowledge Articles
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Read actionable digital marketing playbooks, AI prompts, and organic SEO growth strategies written by senior trainers.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS_DATA.map((blog, idx) => (
            <article
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://piidm.com/wp-content/uploads/2021/11/Top-Digital-Marketing-Course-In-Pune-1-1024x576.png";
                    }}
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-piidm-blue text-white px-2.5 py-1 rounded-md shadow-sm">
                    {blog.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" /> {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-slate-400" /> {blog.author}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-piidm-blue transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-piidm-blue group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

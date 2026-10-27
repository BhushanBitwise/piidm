import React, { useState } from 'react';
import { BookOpen, CheckCircle2, ChevronDown, Download, Sparkles, Layers, Search, Filter } from 'lucide-react';
import { CURRICULUM_DOMAINS_DATA } from '../data/piidmData';

export default function Curriculum({ onOpenSyllabusModal, onOpenDemoModal }) {
  // Filter out empty domains (like Brand Case Studies which has its own dedicated section)
  const validDomains = CURRICULUM_DOMAINS_DATA.filter((d) => d.modules && d.modules.length > 0);
  const [activeDomainIdx, setActiveDomainIdx] = useState(0);
  const [openAll, setOpenAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const activeDomain = validDomains[activeDomainIdx] || validDomains[0];

  // Count total modules and topics across all domains
  const totalModulesCount = validDomains.reduce((acc, d) => acc + d.modules.length, 0);
  const totalTopicsCount = validDomains.reduce(
    (acc, d) => acc + d.modules.reduce((mAcc, m) => mAcc + m.topics.length, 0),
    0
  );

  const filteredModules = searchQuery.trim()
    ? activeDomain.modules.filter(
        (m) =>
          m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : activeDomain.modules;

  return (
    <section id="curriculum" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Matching piidm.com */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-piidm-blue bg-blue-50 px-3 py-1 rounded-full">
            <BookOpen className="w-3.5 h-3.5" /> Comprehensive Industry Curriculum
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Our Curriculum.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our <strong>Classroom & Online Digital Marketing Training In Pune</strong> Curriculum, Program Covers Basic To Advance Level Content To High.
          </p>
          <div className="inline-block bg-gradient-to-r from-piidm-navy via-slate-900 to-piidm-blue-dark text-white text-xs sm:text-sm font-bold px-5 py-2 rounded-2xl shadow-md mt-2">
            ✨ {totalModulesCount}+ Latest Modules, {totalTopicsCount}+ Topics, 50+ Marketing & AI Tools, Business Cases Studies & More
          </div>
        </div>

        {/* Domain Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {validDomains.map((dom, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveDomainIdx(idx);
                setSearchQuery('');
              }}
              className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 border flex items-center gap-2 shrink-0 ${
                activeDomainIdx === idx
                  ? 'bg-piidm-blue text-white border-piidm-blue shadow-lg scale-102'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              <span>{dom.domain}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                  activeDomainIdx === idx
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                {dom.modules.length}
              </span>
            </button>
          ))}
        </div>

        {/* Active Domain Header & Controls */}
        <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200/90 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-0.5 rounded-md">
              Selected Domain
            </span>
            <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900 mt-1">
              {activeDomain.domain}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Contains {activeDomain.modules.length} modules with practical agency assignments
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Search filter input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-piidm-blue"
              />
            </div>

            {/* Toggle all */}
            <button
              onClick={() => setOpenAll(!openAll)}
              className="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors shrink-0"
            >
              {openAll ? 'Collapse All' : 'Expand All'}
            </button>
          </div>
        </div>

        {/* Modules Accordion List */}
        <div className="space-y-3.5 mb-12">
          {filteredModules.map((module, mIdx) => (
            <details
              key={`${activeDomainIdx}-${mIdx}-${openAll}`}
              open={openAll || mIdx === 0}
              className="group bg-slate-50 border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-200 open:bg-white open:shadow-md open:border-piidm-blue/40"
            >
              <summary className="list-none flex items-center justify-between p-4 sm:p-5 cursor-pointer select-none font-heading font-bold text-sm sm:text-base text-slate-900 hover:text-piidm-blue transition-colors">
                <div className="flex items-center gap-3 pr-4">
                  <span className="w-8 h-8 rounded-xl bg-blue-100/70 text-piidm-blue text-xs font-black flex items-center justify-center shrink-0">
                    {mIdx + 1}
                  </span>
                  <span>{module.title}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-semibold text-slate-400 hidden sm:inline">
                    {module.topics.length} Topics
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-200/60 group-open:bg-blue-50 text-slate-600 group-open:text-piidm-blue flex items-center justify-center transition-transform duration-200 group-open:rotate-180">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </summary>

              <div className="px-5 pb-5 pt-2 border-t border-slate-100 bg-white">
                {module.topics.length > 0 ? (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {module.topics.map((top, tIdx) => (
                      <li
                        key={tIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50/70 p-2.5 rounded-xl border border-slate-100"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="font-medium">{top}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-slate-500 italic py-2">
                    Comprehensive mock test, evaluation, and viva rounds included in this module.
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>

        {/* Bottom Curriculum CTAs matching piidm.com */}
        <div className="bg-gradient-to-br from-slate-900 via-piidm-navy to-slate-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Download Complete Program Syllabus PDF
            </span>
            <h4 className="font-heading font-black text-2xl text-white">
              Want the full 55+ Modules curriculum with project briefs?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Get day-by-day lecture timeline, tool access instructions, and internship project details.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenSyllabusModal}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-piidm-blue" />
              <span>Download Syllabus (PDF)</span>
            </button>

            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Demo For This Course</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

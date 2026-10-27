import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Mail, MapPin, ChevronDown, Menu, X, Sparkles, BookOpen } from 'lucide-react';
import { SITE_METADATA } from '../data/piidmData';

export default function Navbar({ onOpenDemoModal, onOpenSyllabusModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courseList = [
    { title: "Digital Marketing Master Course (4.0)", tag: "Most Popular", desc: "Complete 61 Modules with AI & 100% Placement", path: "/courses" },
    { title: "Generative AI In Marketing", tag: "New 2026", desc: "Master ChatGPT, Midjourney, Runway & 50+ AI Tools", path: "/courses" },
    { title: "Performance Marketing & Funnels", tag: "High ROAS", desc: "Meta Ads, Google PMax, Analytics & Scaling", path: "/courses" },
    { title: "Search Engine Optimization (SEO)", tag: "Organic Traffic", desc: "Technical SEO, Core Web Vitals & Programmatic SEO", path: "/courses" },
    { title: "Social Media & Viral Content", tag: "Engagement", desc: "Instagram Growth, Reels, Shorts & Brand Strategy", path: "/courses" },
    { title: "Google Ads & PPC Certification", tag: "Google Certified", desc: "Search, Display, YouTube Ads & Bidding Models", path: "/courses" },
  ];

  const handleNavAnchor = (hash) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="w-full z-40 transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-piidm-navy via-slate-900 to-piidm-blue-dark text-white text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 bg-red-600/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
              <Sparkles className="w-3 h-3" /> New Batch Starting This Week
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-piidm-blue-300" />
              Pune: FC Road • Pimple Saudagar • Hadapsar
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${SITE_METADATA.phone}`}
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold">{SITE_METADATA.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`https://wa.me/${SITE_METADATA.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20PIIDM%20Digital%20Marketing%20Course.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`sticky top-0 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-100'
            : 'bg-white py-3 border-b border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with Link to Home */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={SITE_METADATA.logo}
              alt="PIIDM Logo Website"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://piidm.com/wp-content/uploads/2021/10/cropped-PIIDM-Site-Icon-270x270.png";
              }}
            />
            <div className="hidden lg:block text-left">
              <span className="block font-heading font-extrabold text-lg leading-none tracking-tight text-slate-900">
                PIIDM<span className="text-red-600">.</span>
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
                Digital Marketing Institute
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with React Router */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7 text-[14.5px] font-semibold text-slate-700">
            <Link
              to="/"
              className={`transition-colors ${
                location.pathname === '/' ? 'text-piidm-blue font-bold' : 'hover:text-piidm-blue'
              }`}
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <Link
                to="/courses"
                className={`inline-flex items-center gap-1 transition-colors py-2 focus:outline-none ${
                  location.pathname === '/courses' ? 'text-piidm-blue font-bold' : 'hover:text-piidm-blue'
                }`}
              >
                Courses <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${coursesDropdownOpen ? 'rotate-180 text-piidm-blue' : ''}`} />
              </Link>

              {coursesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5">
                    Programs Available
                  </div>
                  {courseList.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      onClick={() => setCoursesDropdownOpen(false)}
                      className="block p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-800 group-hover:text-piidm-blue text-sm">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-bold bg-blue-50 text-piidm-blue px-2 py-0.5 rounded-full">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                        {item.desc}
                      </p>
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-slate-100 mt-1">
                    <button
                      onClick={() => {
                        setCoursesDropdownOpen(false);
                        onOpenSyllabusModal();
                      }}
                      className="w-full text-center text-xs font-bold text-piidm-blue hover:underline py-1.5"
                    >
                      Download Full Brochure & Syllabus →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/placements"
              className={`transition-colors ${
                location.pathname === '/placements' ? 'text-piidm-blue font-bold' : 'hover:text-piidm-blue'
              }`}
            >
              Placements
            </Link>

            <Link
              to="/about"
              className={`transition-colors ${
                location.pathname === '/about' ? 'text-piidm-blue font-bold' : 'hover:text-piidm-blue'
              }`}
            >
              About
            </Link>

            <Link
              to="/student-life"
              className={`transition-colors ${
                location.pathname === '/student-life' ? 'text-piidm-blue font-bold' : 'hover:text-piidm-blue'
              }`}
            >
              Student Life
            </Link>

            <Link
              to="/contact"
              className={`transition-colors ${
                location.pathname === '/contact' ? 'text-piidm-blue font-bold' : 'hover:text-piidm-blue'
              }`}
            >
              Centres
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSyllabusModal}
              className="px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-slate-600" />
              Syllabus
            </button>
            <button
              onClick={onOpenDemoModal}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-sm shadow-md hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Book Free Demo
              </span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer with Links */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 py-2 border-b border-slate-50"
            >
              Home
            </Link>
            <Link
              to="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 py-2 border-b border-slate-50"
            >
              Courses & 61-Module Curriculum
            </Link>
            <Link
              to="/placements"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 py-2 border-b border-slate-50"
            >
              Placements & Hiring Partners
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 py-2 border-b border-slate-50"
            >
              About PIIDM & Vijay Gehlot
            </Link>
            <Link
              to="/student-life"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 py-2 border-b border-slate-50"
            >
              Student Life & Events
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 py-2 border-b border-slate-50"
            >
              Pune Centres (FC Road, PCMC, Hadapsar)
            </Link>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-center shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Book Free Demo Class
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSyllabusModal();
                }}
                className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-800 font-semibold text-center text-sm"
              >
                Download Syllabus PDF
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

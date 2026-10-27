import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Heart, Shield, Globe, Award } from 'lucide-react';
import { SITE_METADATA, BRANCHES_DATA } from '../data/piidmData';

export default function Footer({ onOpenDemoModal, onOpenSyllabusModal }) {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-24 sm:pb-16 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Institute About & Brand */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={SITE_METADATA.logo}
                alt="PIIDM Logo"
                className="h-12 w-auto object-contain bg-white/10 p-1 rounded-xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://piidm.com/wp-content/uploads/2021/10/cropped-PIIDM-Site-Icon-270x270.png";
                }}
              />
              <div>
                <span className="font-heading font-extrabold text-xl text-white">
                  PIIDM<span className="text-red-500">.</span>
                </span>
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Award Winning Institute
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              PIIDM is Pune’s premier practical Digital Marketing & AI Training Institute.
              Empowering 58,000+ graduates with agency-style live client projects, 15+ international certifications, and 100% placement support.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <Award className="w-4 h-4 text-amber-400" />
                <span>IFA Award Winner</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>ISO 9001:2015</span>
              </span>
            </div>
          </div>

          {/* Col 2: Our Courses */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Our Courses
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/courses" className="hover:text-blue-400 transition-colors">
                  Digital Marketing Master Course (4.0)
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-blue-400 transition-colors">
                  Generative AI in Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-blue-400 transition-colors">
                  Performance Marketing & Meta Ads
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-blue-400 transition-colors">
                  Search Engine Optimization (SEO & Core Web Vitals)
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-blue-400 transition-colors">
                  Google Ads (PPC, PMax & Shopping)
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-blue-400 transition-colors">
                  Social Media Marketing & Reels Growth
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-blue-400 transition-colors">
                  WordPress Website Design & GA4
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-blue-400 transition-colors">
                  Freelancing & Agency Launch Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Useful Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  About PIIDM Institute
                </Link>
              </li>
              <li>
                <Link to="/#highlights" className="hover:text-blue-400 transition-colors">
                  Why Choose PIIDM
                </Link>
              </li>
              <li>
                <Link to="/placements" className="hover:text-blue-400 transition-colors">
                  Placement Cell & Partners
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-blue-400 transition-colors">
                  15+ Certifications
                </Link>
              </li>
              <li>
                <Link to="/student-life" className="hover:text-blue-400 transition-colors">
                  Student Life & Campus
                </Link>
              </li>
              <li>
                <Link to="/#reviews" className="hover:text-blue-400 transition-colors">
                  Student Reviews (2,472+)
                </Link>
              </li>
              <li>
                <Link to="/#faqs" className="hover:text-blue-400 transition-colors">
                  FAQ & Admission Fees
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  Pune Branch Locations
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenSyllabusModal}
                  className="text-amber-400 hover:underline font-bold text-left"
                >
                  Download Syllabus PDF
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Pune Centres Quick Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Pune Centres
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div>
                <strong className="text-white block font-bold">1. FC Road (Head Office):</strong>
                <span>Near Tukaram Paduka Chowk, Shivajinagar, Pune - 411005</span>
              </div>
              <div>
                <strong className="text-white block font-bold">2. Pimple Saudagar (PCMC):</strong>
                <span>Vision Galleria, Near Kunal Icon Rd, PCMC - 411027</span>
              </div>
              <div>
                <strong className="text-white block font-bold">3. Hadapsar (Pune East):</strong>
                <span>Mega Center, Opp. Magarpatta City, Hadapsar - 411028</span>
              </div>
              <div className="pt-2">
                <a
                  href={`tel:${SITE_METADATA.phone}`}
                  className="inline-flex items-center gap-2 text-white font-bold bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{SITE_METADATA.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} PIIDM. All Rights Reserved. Leading Digital Marketing Training Institute in Pune.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <span>•</span>
            <a href="#faqs" className="hover:text-slate-300">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

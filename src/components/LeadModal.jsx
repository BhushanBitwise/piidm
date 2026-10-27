import React, { useRef, useEffect, useState } from 'react';
import { X, CheckCircle2, Sparkles, Phone, Mail, BookOpen, ShieldCheck } from 'lucide-react';
import { SITE_METADATA } from '../data/piidmData';

export default function LeadModal({ isOpen, onClose, modalType = 'demo' }) {
  const dialogRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseInterest: 'Digital Marketing Master Course with AI',
    mode: 'Classroom Training (Pune)',
    branch: 'FC Road (Head Office)'
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
      setSubmitted(false);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const getModalDetails = () => {
    switch (modalType) {
      case 'syllabus':
        return {
          badge: 'Detailed Course Syllabus 2026',
          title: 'Download Complete Syllabus PDF',
          desc: 'Get instant access to module-wise curriculum, tool prompts list, and project briefs.',
          btnText: 'Download Syllabus PDF Now',
          icon: <BookOpen className="w-5 h-5 text-piidm-blue" />
        };
      case 'fees':
        return {
          badge: 'Transparent Course Fees',
          title: 'Enquiry For Digital Marketing Course Fees',
          desc: 'Get batch discounts, EMI installment plans starting ₹4,500/mo, and scholarship details.',
          btnText: 'Get Fee Structure on WhatsApp',
          icon: <Sparkles className="w-5 h-5 text-amber-500" />
        };
      default:
        return {
          badge: 'Limited Seats Available',
          title: 'Book Free Demo Lecture & Consultation',
          desc: 'Attend a live agency-style lecture and discuss your personalized career roadmap.',
          btnText: 'Confirm Free Demo Reservation',
          icon: <Sparkles className="w-5 h-5 text-red-600" />
        };
    }
  };

  const details = getModalDetails();

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="p-0 rounded-3xl shadow-2xl backdrop:bg-slate-900/80 max-w-lg w-[95%] border border-slate-100 open:animate-in open:fade-in open:zoom-in-95 duration-200"
    >
      <div className="bg-white p-6 sm:p-8 relative text-slate-800">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Close modal dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-black text-2xl text-slate-900">
              Request Received Successfully!
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. We have forwarded your request for{' '}
              <span className="font-bold text-piidm-blue">{details.title}</span>. Our advisor will reach out to you on{' '}
              <span className="font-bold text-slate-900">{formData.phone}</span> shortly.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
              >
                Close & Return to Website
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1.5 pr-8">
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-0.5 rounded-md">
                {details.badge}
              </span>
              <h3 className="font-heading font-black text-2xl text-slate-900">
                {details.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {details.desc}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyanshu Kulkarni"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-piidm-blue focus:ring-2 focus:ring-piidm-blue/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mobile Number (WhatsApp) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-piidm-blue focus:ring-2 focus:ring-piidm-blue/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. priyanshu@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-piidm-blue focus:ring-2 focus:ring-piidm-blue/20 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Learning Mode
                  </label>
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-piidm-blue"
                  >
                    <option>Classroom Training (Pune)</option>
                    <option>Online Live Interactive</option>
                    <option>Weekend Executive Batch</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Branch
                  </label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-piidm-blue"
                  >
                    <option>FC Road (Head Office)</option>
                    <option>Pimple Saudagar (PCMC)</option>
                    <option>Hadapsar (Pune East)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white font-heading font-extrabold text-sm tracking-wide shadow-lg shadow-red-600/30 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-4"
              >
                <Sparkles className="w-4 h-4" />
                <span>{details.btnText}</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>100% Privacy Protected. No spam or unsolicited calls.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </dialog>
  );
}

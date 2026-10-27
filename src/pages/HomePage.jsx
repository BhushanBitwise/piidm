import React from 'react';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import AwardBanner from '../components/AwardBanner';
import WhyChooseUs from '../components/WhyChooseUs';
import ToolsMarquee from '../components/ToolsMarquee';
import HiringPartners from '../components/HiringPartners';
import Curriculum from '../components/Curriculum';
import BrandCaseStudies from '../components/BrandCaseStudies';
import ClientProjects from '../components/ClientProjects';
import Certifications from '../components/Certifications';
import TargetAudience from '../components/TargetAudience';
import Batches from '../components/Batches';
import TrainerProfile from '../components/TrainerProfile';
import VideoTestimonials from '../components/VideoTestimonials';
import GoogleReviews from '../components/GoogleReviews';
import StudentLife from '../components/StudentLife';
import FaqSection from '../components/FaqSection';
import BlogSection from '../components/BlogSection';
import Branches from '../components/Branches';

export default function HomePage({
  onOpenDemoModal,
  onOpenSyllabusModal,
  onOpenFeesModal,
  onPlayVideo
}) {
  return (
    <>
      {/* 1. Hero Section with Embedded Demo Booking Form */}
      <Hero
        onOpenDemoModal={onOpenDemoModal}
        onOpenSyllabusModal={onOpenSyllabusModal}
      />

      {/* 2. Statistics Overview Bar */}
      <StatsBar />

      {/* 3. Award Recognition Banner (IFA International Award) */}
      <AwardBanner onOpenDemoModal={onOpenDemoModal} />

      {/* 4. Why Choose PIIDM (5 Key Highlights) */}
      <WhyChooseUs
        onOpenDemoModal={onOpenDemoModal}
        onOpenSyllabusModal={onOpenSyllabusModal}
      />

      {/* 5. 50+ Gen-AI & Digital Marketing Tools Marquee */}
      <ToolsMarquee />

      {/* 6. Hiring Partners & Placements */}
      <HiringPartners
        onOpenDemoModal={onOpenDemoModal}
        onOpenSyllabusModal={onOpenSyllabusModal}
      />

      {/* 7. Comprehensive 61-Module Curriculum */}
      <Curriculum
        onOpenSyllabusModal={onOpenSyllabusModal}
        onOpenDemoModal={onOpenDemoModal}
      />

      {/* 8. Brand Case Studies */}
      <BrandCaseStudies onOpenDemoModal={onOpenDemoModal} />

      {/* 9. Live Client Projects & Real Work Portfolios */}
      <ClientProjects onOpenDemoModal={onOpenFeesModal} />

      {/* 10. 15+ Industry Recognised Certifications */}
      <Certifications onOpenDemoModal={onOpenDemoModal} />

      {/* 11. Who Can Join & Digital Marketing Career Salaries */}
      <TargetAudience onOpenDemoModal={onOpenDemoModal} />

      {/* 12. Batch Timings & Demo Lecture Schedule */}
      <Batches onOpenDemoModal={onOpenDemoModal} />

      {/* 13. Learn From Industry Expert - Vijay Gehlot */}
      <TrainerProfile onOpenDemoModal={onOpenDemoModal} />

      {/* 14. Student Video Testimonials */}
      <VideoTestimonials onPlayVideo={onPlayVideo} />

      {/* 15. Student Google Trustindex Reviews (4.9/5 Rating) */}
      <GoogleReviews />

      {/* 16. Student Life at PIIDM (Photos, PPL, Farewell, Events) */}
      <StudentLife />

      {/* 17. Frequently Asked Questions (Native Accessible Accordions) */}
      <FaqSection onOpenDemoModal={onOpenDemoModal} />

      {/* 18. Recent Blog Playbooks */}
      <BlogSection />

      {/* 19. Pune Training Centres & Online City Links */}
      <Branches onOpenDemoModal={onOpenDemoModal} />
    </>
  );
}

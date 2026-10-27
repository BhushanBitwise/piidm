import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import PlacementsPage from './pages/PlacementsPage';
import AboutPage from './pages/AboutPage';
import StudentLifePage from './pages/StudentLifePage';
import ContactPage from './pages/ContactPage';
import LeadModal from './components/LeadModal';
import VideoModal from './components/VideoModal';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';

export default function App() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadModalType, setLeadModalType] = useState('demo');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState(null);

  const handleOpenDemoModal = () => {
    setLeadModalType('demo');
    setIsLeadModalOpen(true);
  };

  const handleOpenSyllabusModal = () => {
    setLeadModalType('syllabus');
    setIsLeadModalOpen(true);
  };

  const handleOpenFeesModal = () => {
    setLeadModalType('fees');
    setIsLeadModalOpen(true);
  };

  const handlePlayVideo = (videoId) => {
    setActiveVideoId(videoId);
    setIsVideoModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
      {/* Scroll restoration helper to smoothly navigate to top or anchor hashes */}
      <ScrollToTop />

      {/* Global Header & Navigation */}
      <Navbar
        onOpenDemoModal={handleOpenDemoModal}
        onOpenSyllabusModal={handleOpenSyllabusModal}
      />

      {/* Multi-page Router Outlet */}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenDemoModal={handleOpenDemoModal}
                onOpenSyllabusModal={handleOpenSyllabusModal}
                onOpenFeesModal={handleOpenFeesModal}
                onPlayVideo={handlePlayVideo}
              />
            }
          />
          <Route
            path="/courses"
            element={
              <CoursesPage
                onOpenDemoModal={handleOpenDemoModal}
                onOpenSyllabusModal={handleOpenSyllabusModal}
              />
            }
          />
          <Route
            path="/placements"
            element={
              <PlacementsPage
                onOpenDemoModal={handleOpenDemoModal}
                onPlayVideo={handlePlayVideo}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage
                onOpenDemoModal={handleOpenDemoModal}
                onOpenSyllabusModal={handleOpenSyllabusModal}
              />
            }
          />
          <Route
            path="/student-life"
            element={
              <StudentLifePage
                onOpenDemoModal={handleOpenDemoModal}
                onPlayVideo={handlePlayVideo}
              />
            }
          />
          <Route
            path="/contact"
            element={<ContactPage onOpenDemoModal={handleOpenDemoModal} />}
          />
          <Route
            path="/branches"
            element={<ContactPage onOpenDemoModal={handleOpenDemoModal} />}
          />
          {/* Fallback to Home */}
          <Route
            path="*"
            element={
              <HomePage
                onOpenDemoModal={handleOpenDemoModal}
                onOpenSyllabusModal={handleOpenSyllabusModal}
                onOpenFeesModal={handleOpenFeesModal}
                onPlayVideo={handlePlayVideo}
              />
            }
          />
        </Routes>
      </main>

      {/* Global Comprehensive Footer */}
      <Footer
        onOpenDemoModal={handleOpenDemoModal}
        onOpenSyllabusModal={handleOpenSyllabusModal}
      />

      {/* Floating WhatsApp, Call & Mobile Sticky Bar */}
      <FloatingActions onOpenDemoModal={handleOpenDemoModal} />

      {/* Lead Modal Dialog (Demo, Syllabus, Fees) */}
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        modalType={leadModalType}
      />

      {/* Interactive Video Player Modal Dialog */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId={activeVideoId}
      />
    </div>
  );
}

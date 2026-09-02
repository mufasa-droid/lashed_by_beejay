import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCatalog from './components/ServiceCatalog';
import Portfolio from './components/Portfolio';
import ReviewsAndPolicies from './components/ReviewsAndPolicies';
import Contact from './components/Contact';
import Footer from './components/Footer';

import BookingModal from './booking/BookingModal';
import ServiceModal from './components/ServiceModal';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export default function App() {
  // Initialize Lenis smooth scroll synchronized with GSAP
  useSmoothScroll();

  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialService, setBookingInitialService] = useState(null);

  // Service Detail Modal State
  const [isServiceDetailOpen, setIsServiceDetailOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Handlers
  const handleOpenBooking = (service = null) => {
    setBookingInitialService(service);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleOpenServiceDetail = (service) => {
    setSelectedService(service);
    setIsServiceDetailOpen(true);
  };

  const handleCloseServiceDetail = () => {
    setIsServiceDetailOpen(false);
  };

  const handleBookFromServiceDetail = (service) => {
    setIsServiceDetailOpen(false);
    handleOpenBooking(service);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#141312] selection:bg-[#141312] selection:text-[#FAF8F5]">
      
      {/* Sticky Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Streamlined Content Flow (5 Clean Sections) */}
      <main id="main-content">
        {/* 1. Hero Section with Interactive Three.js Lash Visual */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Unified Services & Pricing Menu (Full Sets, Refills, Add-Ons) */}
        <ServiceCatalog 
          onSelectDetail={handleOpenServiceDetail}
          onQuickBook={handleOpenBooking}
        />

        {/* 3. Selected Works / Portfolio Showcase with Lightbox */}
        <Portfolio />

        {/* 4. Client Reviews & 5 Golden Studio Policies */}
        <ReviewsAndPolicies onOpenBooking={handleOpenBooking} />

        {/* 5. Studio Appointments & Direct Booking Concierge */}
        <Contact onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Global Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={bookingInitialService}
      />

      <ServiceModal
        service={selectedService}
        isOpen={isServiceDetailOpen}
        onClose={handleCloseServiceDetail}
        onBookService={handleBookFromServiceDetail}
      />
    </div>
  );
}

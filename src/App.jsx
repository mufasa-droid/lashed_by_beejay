import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedServices from './components/FeaturedServices';
import Portfolio from './components/Portfolio';
import ServiceCatalog from './components/ServiceCatalog';
import EditorialCarousel from './components/EditorialCarousel';
import About from './components/About';
import Testimonials from './components/Testimonials';
import BookingCtaSection from './components/BookingCtaSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

import BookingModal from './booking/BookingModal';
import ServiceModal from './components/ServiceModal';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export default function App() {
  // Initialize Lenis smooth scroll
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

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section with Three.js Tactile Visual */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Featured Services (01 - 04 Numbered) */}
        <FeaturedServices 
          onSelectDetail={handleOpenServiceDetail}
          onOpenBooking={handleOpenBooking}
        />

        {/* 3. Selected Works / Portfolio Showcase with Lightbox */}
        <Portfolio />

        {/* 4. Complete Service Catalog */}
        <ServiceCatalog 
          onSelectDetail={handleOpenServiceDetail}
          onQuickBook={handleOpenBooking}
        />

        {/* 5. Editorial Image Showcase Carousel (Swiper) */}
        <EditorialCarousel />

        {/* 6. About the Artist & Philosophy */}
        <About onOpenBooking={handleOpenBooking} />

        {/* 7. Client Testimonials */}
        <Testimonials />

        {/* 8. Closing Booking CTA */}
        <BookingCtaSection onOpenBooking={handleOpenBooking} />

        {/* 9. Contact & Studio Hours */}
        <Contact onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Modals */}
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

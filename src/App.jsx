import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedServices from './components/FeaturedServices';
import LashStyles from './components/LashStyles';
import Portfolio from './components/Portfolio';
import ServiceCatalog from './components/ServiceCatalog';
import EditorialCarousel from './components/EditorialCarousel';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Policy from './components/Policy';
import BookingCtaSection from './components/BookingCtaSection';
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

      {/* Main Content Flow */}
      <main id="main-content">
        {/* 1. Hero Section with Interactive Three.js Lash Visual */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Featured Lash Services */}
        <FeaturedServices 
          onSelectDetail={handleOpenServiceDetail}
          onOpenBooking={handleOpenBooking}
        />

        {/* 3. Lash Style Discovery Guide (Classic, Hybrid, Volume, Mega, Wispy, Wet) */}
        <LashStyles onOpenBooking={handleOpenBooking} />

        {/* 4. Selected Works / Portfolio Showcase with Lightbox */}
        <Portfolio />

        {/* 5. Complete Service Catalog with Category Filters (Full Sets, Refills, Add-Ons) */}
        <ServiceCatalog 
          onSelectDetail={handleOpenServiceDetail}
          onQuickBook={handleOpenBooking}
        />

        {/* 6. Editorial Image Showcase Carousel (Swiper) */}
        <EditorialCarousel />

        {/* 7. About the Studio & Philosophy */}
        <About onOpenBooking={handleOpenBooking} />

        {/* 8. Client Testimonials */}
        <Testimonials />

        {/* 9. Lash Care & Studio Booking Policies (Exact 5 Rules) */}
        <Policy onOpenBooking={handleOpenBooking} />

        {/* 10. Closing Booking CTA */}
        <BookingCtaSection onOpenBooking={handleOpenBooking} />

        {/* 11. Studio Location & Contact */}
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

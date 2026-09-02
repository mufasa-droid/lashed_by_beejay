import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { animateSectionReveal } from '../animations/gsapEffects';

import 'swiper/css';
import 'swiper/css/pagination';

export default function ReviewsAndPolicies({ onOpenBooking }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    animateSectionReveal(sectionRef.current);
  }, []);

  const policyRules = [
    {
      number: "01",
      title: "Punctuality",
      desc: "Please arrive on time. Arriving promptly guarantees your full appointment window and prevents rushing your lash mapping.",
      highlight: false
    },
    {
      number: "02",
      title: "Booking Deposit",
      desc: `A ${BUSINESS_CONFIG.currency}${BUSINESS_CONFIG.depositAmount} non-refundable deposit is required to secure your appointment slot.`,
      highlight: true
    },
    {
      number: "03",
      title: "Refill Window",
      desc: "Refills are valid exclusively within 2 to 3 weeks of your previous set completed by Lashed by Beejay.",
      highlight: false
    },
    {
      number: "04",
      title: "40% Retention Rule",
      desc: "If your lashes have passed 3 weeks or have less than 40% extensions remaining, a new full set is required.",
      highlight: false
    },
    {
      number: "05",
      title: "Lash Hygiene & Care",
      desc: "Avoid oil-based cleansers, mascara, and direct heavy water pressure during the first 24 hours to maximize retention.",
      highlight: false
    }
  ];

  return (
    <section id="policies" ref={sectionRef} className="py-24 sm:py-32 bg-[#FBF9F5] border-b border-[#EAE6DE]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.28em] font-medium text-[#8F7249] block mb-2">
              Studio Standards
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#141312] tracking-tight">
              Policies & Client Reviews
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5C5854] max-w-md font-light leading-relaxed">
            Clear guidelines for appointment preparation, refill eligibility, and verified feedback from studio clients.
          </p>
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Open Editorial Client Reviews (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            
            <div className="pt-2">
              <div className="flex items-center justify-between pb-4 border-b border-[#141312] mb-8">
                <span className="text-xs uppercase tracking-[0.22em] font-medium text-[#141312]">
                  Client Feedback
                </span>
                <span className="text-[11px] text-[#8E8A85] font-light">
                  Verified Reviews
                </span>
              </div>

              {/* Swiper Slider with Clean Editorial Typography */}
              <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet !bg-[#141312]',
                  bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#8F7249]',
                }}
                className="pb-12 w-full"
              >
                {TESTIMONIALS.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="flex flex-col space-y-6">
                      <span className="font-serif text-6xl text-[#C5A880]/50 leading-none select-none">
                        “
                      </span>
                      <blockquote className="font-serif text-2xl sm:text-3xl text-[#141312] font-light leading-snug -mt-8">
                        {item.quote}
                      </blockquote>
                      <div className="pt-4 border-t border-[#EAE6DE] flex items-baseline justify-between">
                        <div>
                          <p className="font-sans font-medium text-xs text-[#141312] uppercase tracking-wider">
                            {item.name}
                          </p>
                          <span className="text-xs text-[#8F7249] font-light">
                            {item.service}
                          </span>
                        </div>
                        <span className="text-[10px] text-[#8E8A85] uppercase tracking-widest font-mono">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Studio Commitment Statement */}
            <div className="pt-8 border-t border-[#EAE6DE] space-y-3">
              <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#8F7249] block">
                The Lashed by Beejay Promise
              </span>
              <p className="font-serif text-2xl font-light text-[#141312]">
                Care tailored to your natural lashes
              </p>
              <p className="text-xs text-[#6E6963] font-light leading-relaxed">
                Every fan is created and placed by hand with strict isolation so your natural lashes stay strong, comfortable, and undamaged.
              </p>
            </div>

          </div>

          {/* Right: The 5 Studio Rules with Large Numbered Hierarchy (7 cols) */}
          <div className="lg:col-span-7">
            
            <div className="pb-4 border-b border-[#141312] mb-8 flex items-baseline justify-between">
              <h3 className="text-xs uppercase tracking-[0.22em] font-medium text-[#141312]">
                Studio Rules & Protocols
              </h3>
              <span className="text-[11px] text-[#8E8A85] font-light">
                05 Guidelines
              </span>
            </div>

            {/* Editorial Numbered Rows with Thin Dividers */}
            <div className="divide-y divide-[#EAE6DE]">
              {policyRules.map((rule) => (
                <div
                  key={rule.number}
                  className="py-7 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-baseline group"
                >
                  {/* Large Stylized Number (2 cols) */}
                  <div className="sm:col-span-2">
                    <span className="font-serif text-3xl sm:text-4xl font-light text-[#8F7249] tracking-tight block">
                      {rule.number}
                    </span>
                  </div>

                  {/* Rule Details (10 cols) */}
                  <div className="sm:col-span-10 space-y-1.5">
                    <div className="flex items-center gap-3">
                      <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#141312] group-hover:text-[#8F7249] transition-colors">
                        {rule.title}
                      </h4>
                      {rule.highlight && (
                        <span className="text-[9px] uppercase tracking-widest font-sans font-medium text-[#8F7249] bg-[#EFECE5] px-2.5 py-0.5 rounded-full">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#5C5854] font-light leading-relaxed max-w-xl">
                      {rule.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inquiries & Direct Booking Callout */}
            <div className="mt-12 pt-8 border-t border-[#EAE6DE] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#8E8A85] font-light text-center sm:text-left">
                Questions before booking? Send a message anytime on WhatsApp.
              </p>
              <button
                onClick={() => onOpenBooking(null)}
                className="w-full sm:w-auto bg-[#141312] text-[#FAF8F5] hover:bg-[#2C2927] active:scale-[0.98] px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all flex items-center justify-center gap-2 group shadow-sm"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


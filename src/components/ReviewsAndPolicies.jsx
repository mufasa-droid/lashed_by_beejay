import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { 
  Quote, 
  Clock, 
  ShieldAlert, 
  CalendarClock, 
  AlertCircle, 
  Droplets, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Star
} from 'lucide-react';
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
      icon: Clock,
      title: "Punctuality",
      desc: "Please arrive on time. Punctuality preserves your full lash mapping time without rush.",
      highlight: false
    },
    {
      number: "02",
      icon: ShieldAlert,
      title: "Deposit Requirement",
      desc: `A ${BUSINESS_CONFIG.currency}${BUSINESS_CONFIG.depositAmount} non-refundable deposit is required to lock in your appointment slot.`,
      highlight: true
    },
    {
      number: "03",
      icon: CalendarClock,
      title: "Refill Window",
      desc: "Refills are exclusively available for sets done by Lashed by Beejay within 2–3 weeks.",
      highlight: false
    },
    {
      number: "04",
      icon: AlertCircle,
      title: "40% Lash Rule",
      desc: "After 3 weeks or with less than 40% lashes remaining, a new full set is required.",
      highlight: false
    },
    {
      number: "05",
      icon: Droplets,
      title: "Lash Care & Longevity",
      desc: "Avoid oil-based cleansers, mascara, and excessive moisture to guarantee 4+ week retention.",
      highlight: false
    }
  ];

  return (
    <section id="policies" ref={sectionRef} className="py-24 sm:py-32 bg-[#FAF7F0] border-b border-[#EAE6DE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8F7249] block mb-2">
              The Client Experience
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#141312] tracking-tight">
              Reviews & Studio Policies
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5C5854] max-w-md font-light leading-relaxed">
            Transparent studio guidelines ensuring exceptional hygiene, natural lash health, and 5-star retention for every client.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Testimonials Carousel + Studio Promise (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#FFFFFF] border border-[#E8E4DC] rounded-3xl p-7 sm:p-9 shadow-luxury relative flex flex-col justify-between">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F0EDE6]">
                <div className="flex items-center gap-1 text-[#8F7249]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8E8A85]">
                  Verified Clients
                </span>
              </div>

              {/* Swiper Slider */}
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
                    <div className="flex flex-col">
                      <Quote className="w-8 h-8 text-[#C5A880]/40 mb-4" />
                      <blockquote className="font-serif text-lg sm:text-xl text-[#141312] font-light leading-relaxed mb-6 italic">
                        "{item.quote}"
                      </blockquote>
                      <div className="border-t border-[#F0EDE6] pt-4 flex items-center justify-between">
                        <div>
                          <p className="font-sans font-semibold text-xs text-[#141312] uppercase tracking-wider">
                            {item.name}
                          </p>
                          <span className="text-[11px] text-[#8F7249] font-medium">
                            {item.service}
                          </span>
                        </div>
                        <span className="text-[10px] text-[#8E8A85] uppercase tracking-widest">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Studio Commitment Callout */}
            <div className="bg-[#181615] text-[#FAF8F5] rounded-3xl p-7 sm:p-8 border border-[#2A2724] space-y-4">
              <div className="flex items-center gap-2 text-[#C5A880]">
                <Sparkles className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">
                  Studio Philosophy
                </span>
              </div>
              <h3 className="font-serif text-2xl font-light text-white">
                Bespoke Eye Mapping & Lash Health
              </h3>
              <p className="text-xs text-[#A49E96] font-light leading-relaxed">
                We never use heavy pre-made clusters or compromise your natural lashes. Every single fan is hand-crafted and isolated with surgical precision.
              </p>
            </div>

          </div>

          {/* Right: The 5 Golden Studio Rules (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-[#E8E4DC] rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#F0EDE6]">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#141312]">
                  5 Golden Studio Rules
                </span>
                <span className="text-[11px] text-[#8F7249] font-medium">
                  Studio Protocol
                </span>
              </div>

              <div className="space-y-4">
                {policyRules.map((rule) => {
                  const Icon = rule.icon;
                  return (
                    <div
                      key={rule.number}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                        rule.highlight
                          ? 'bg-[#FAF8F5] border-[#C5A880] shadow-sm'
                          : 'bg-white border-[#EAE6DE] hover:border-[#D5CFC5]'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center font-serif text-sm font-medium ${
                        rule.highlight
                          ? 'bg-[#181615] text-[#C5A880]'
                          : 'bg-[#F5F2EB] text-[#8F7249]'
                      }`}>
                        {rule.number}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className="font-serif text-base sm:text-lg font-medium text-[#141312] flex items-center gap-2">
                            <span>{rule.title}</span>
                            {rule.highlight && (
                              <span className="text-[9px] uppercase tracking-wider font-sans font-bold bg-[#8F7249] text-white px-2 py-0.5 rounded-full">
                                Required
                              </span>
                            )}
                          </h4>
                          <Icon className="w-4 h-4 text-[#8E8A85] flex-shrink-0" />
                        </div>
                        <p className="text-xs text-[#5C5854] font-light leading-relaxed">
                          {rule.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action */}
              <div className="mt-8 pt-6 border-t border-[#F0EDE6] flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[#8E8A85] font-light text-center sm:text-left">
                  Have questions about your lashes? We're happy to assist.
                </p>
                <button
                  onClick={() => onOpenBooking(null)}
                  className="w-full sm:w-auto bg-[#181615] text-[#FAF8F5] hover:bg-[#33302D] px-6 py-3 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all flex items-center justify-center gap-2 group shadow-sm"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useRef, useEffect } from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './SocialIcons';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { animateSectionReveal } from '../animations/gsapEffects';

export default function Contact({ onOpenBooking }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    animateSectionReveal(sectionRef.current);
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 sm:py-32 bg-[#FAF7F0] border-b border-[#EAE6DE]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.28em] font-medium text-[#8F7249] block mb-2">
              Get in Touch
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#141312] tracking-tight">
              Appointments & Contact
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5C5854] max-w-md font-light leading-relaxed">
            All appointments are booked directly on WhatsApp to ensure your lash style and time slot are tailored to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Contact Channels & Inquiries (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            
            <div className="pb-4 border-b border-[#141312] flex items-baseline justify-between">
              <h3 className="text-xs uppercase tracking-[0.22em] font-medium text-[#141312]">
                Direct Studio Channels
              </h3>
              <span className="text-[11px] text-[#8E8A85] font-light">
                Available Daily
              </span>
            </div>

            {/* Studio Directory Rows */}
            <div className="divide-y divide-[#EAE6DE]">
              
              {/* WhatsApp Row */}
              <div className="py-6 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8F7249] font-medium block mb-1">
                    Instant Messaging & Booking
                  </span>
                  <h4 className="font-serif text-2xl font-light text-[#141312]">
                    WhatsApp Direct
                  </h4>
                  <p className="text-xs text-[#6E6963] font-light mt-1">
                    {BUSINESS_CONFIG.displayPhone}
                  </p>
                </div>

                <a
                  href={BUSINESS_CONFIG.socials.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#DDD7CC] hover:border-[#141312] hover:bg-[#141312] hover:text-[#FAF8F5] text-xs font-medium text-[#141312] transition-all self-start sm:self-auto"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>

              {/* Instagram Row */}
              <div className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8F7249] font-medium block mb-1">
                    Visual Archive & Portfolio
                  </span>
                  <h4 className="font-serif text-2xl font-light text-[#141312]">
                    Instagram
                  </h4>
                  <p className="text-xs text-[#6E6963] font-light mt-1">
                    {BUSINESS_CONFIG.socials.instagram.handle}
                  </p>
                </div>

                <a
                  href={BUSINESS_CONFIG.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#DDD7CC] hover:border-[#141312] hover:bg-[#141312] hover:text-[#FAF8F5] text-xs font-medium text-[#141312] transition-all self-start sm:self-auto"
                >
                  <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
                  <span>Follow @lashed_by_beejay</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>

            </div>

            {/* Booking Notice */}
            <div className="pt-4 space-y-2">
              <h4 className="font-serif text-xl font-normal text-[#141312]">
                Booking Consultation
              </h4>
              <p className="text-xs sm:text-[13px] text-[#5C5854] font-light leading-relaxed max-w-xl">
                When reaching out, let us know your preferred date, time, and whether you're looking for a Classic, Hybrid, or Volume set. A <strong>₦{BUSINESS_CONFIG.depositAmount} non-refundable deposit</strong> confirms your appointment.
              </p>
            </div>

          </div>

          {/* Right: Studio Overview Statement (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#141312] text-[#FAF8F5] p-8 sm:p-10 rounded-3xl space-y-8 shadow-sm">
              
              <div>
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#C5A880] font-medium block mb-3">
                  Studio Details
                </span>
                
                <h3 className="font-serif text-3xl sm:text-4xl font-light text-white mb-2">
                  {BUSINESS_CONFIG.brandName}
                </h3>
                <p className="text-xs text-[#8E8A85] tracking-wider uppercase">
                  {BUSINESS_CONFIG.brandDescriptor}
                </p>

                <div className="space-y-4 text-xs border-t border-white/10 pt-6 mt-6 text-[#A49E96]">
                  <div className="flex items-baseline justify-between py-1.5 border-b border-white/5">
                    <span className="font-light">Format:</span>
                    <span className="font-medium text-white">Private By Appointment</span>
                  </div>
                  <div className="flex items-baseline justify-between py-1.5 border-b border-white/5">
                    <span className="font-light">Deposit:</span>
                    <span className="font-medium text-white">₦{BUSINESS_CONFIG.depositAmount} (Non-refundable)</span>
                  </div>
                  <div className="flex items-baseline justify-between py-1.5 border-b border-white/5">
                    <span className="font-light">Refill Eligibility:</span>
                    <span className="font-medium text-white">2–3 Weeks (40%+ retention)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking(null)}
                  className="w-full bg-[#FAF8F5] text-[#141312] hover:bg-[#C5A880] py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Start WhatsApp Booking</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


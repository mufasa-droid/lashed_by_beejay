import React, { useRef, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './SocialIcons';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { animateSectionReveal } from '../animations/gsapEffects';

export default function Contact({ onOpenBooking }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    animateSectionReveal(sectionRef.current);
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 sm:py-32 bg-[#FBF9F5] border-b border-[#EAE6DE]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8F7249] block mb-2">
              Connect With Us
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#141312] tracking-tight">
              Studio Appointments & Contact
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5C5854] max-w-md font-light leading-relaxed">
            All lash sessions are scheduled in advance via WhatsApp to ensure a private and focused client experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Contact Details (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* WhatsApp & Phone */}
              <div className="p-6 bg-[#FFFFFF] border border-[#E8E4DC] rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#FAF7F0] border border-[#E0DAD0] flex items-center justify-center text-[#8F7249] mb-4">
                    <Phone className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#141312] mb-1">
                    Direct Phone / WhatsApp
                  </h3>
                  <p className="text-xs text-[#5C5854] leading-relaxed">
                    {BUSINESS_CONFIG.displayPhone}
                  </p>
                </div>
                <button
                  onClick={() => onOpenBooking(null)}
                  className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#8F7249] hover:text-[#141312] mt-4 transition-colors text-left"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>

              {/* Instagram Card */}
              <div className="p-6 bg-[#FFFFFF] border border-[#E8E4DC] rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#FAF7F0] border border-[#E0DAD0] flex items-center justify-center text-[#8F7249] mb-4">
                    <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#141312] mb-1">
                    Instagram Showcase
                  </h3>
                  <p className="text-xs text-[#5C5854] leading-relaxed">
                    {BUSINESS_CONFIG.socials.instagram.handle}
                  </p>
                </div>
                <a
                  href={BUSINESS_CONFIG.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#8F7249] hover:text-[#141312] mt-4 transition-colors"
                >
                  <span>Follow @lashed_by_beejay</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

            </div>

            {/* Inquiries / Quick Overview Box */}
            <div className="p-6 sm:p-8 bg-[#FFFFFF] border border-[#E8E4DC] rounded-2xl space-y-4">
              <h3 className="font-serif text-2xl font-normal text-[#141312]">
                Booking & Consultations
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6963] leading-relaxed font-light">
                Ready for your set or refill? Reach out with your preferred date, time, and lash style. Please note that a <strong>₦{BUSINESS_CONFIG.depositAmount} non-refundable deposit</strong> is required to lock in your appointment slot.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={BUSINESS_CONFIG.socials.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full border border-[#DDD7CC] hover:border-[#25D366] bg-[#FAF8F5] text-xs font-medium text-[#141312] flex items-center gap-2 transition-all hover:bg-[#25D366] hover:text-white shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp: {BUSINESS_CONFIG.displayPhone}</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full border border-[#DDD7CC] hover:border-[#141312] bg-[#FAF8F5] text-xs font-medium text-[#141312] flex items-center gap-2 transition-all hover:bg-[#141312] hover:text-white shadow-sm"
                >
                  <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
                  <span>Instagram: {BUSINESS_CONFIG.socials.instagram.handle}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Quick Summary Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#181615] text-[#FAF8F5] p-8 sm:p-10 rounded-3xl border border-[#2E2A27] shadow-xl flex flex-col justify-between h-full space-y-8">
              
              <div>
                <div className="flex items-center gap-2 text-[#C5A880] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
                  <Sparkles className="w-4 h-4" />
                  <span>Lash Studio Information</span>
                </div>
                
                <h3 className="font-serif text-3xl font-light text-white mb-2">
                  {BUSINESS_CONFIG.brandName}
                </h3>
                <p className="text-xs text-[#C5A880] tracking-widest font-mono uppercase mb-6">
                  {BUSINESS_CONFIG.tagline}
                </p>

                <div className="space-y-4 text-xs tracking-wider border-t border-white/10 pt-5 text-[#A49E96]">
                  <div className="flex items-start justify-between py-1 border-b border-white/5">
                    <span>Studio Access:</span>
                    <span className="font-medium text-white">Private By Appointment</span>
                  </div>
                  <div className="flex items-start justify-between py-1 border-b border-white/5">
                    <span>Booking Deposit:</span>
                    <span className="font-medium text-white">₦{BUSINESS_CONFIG.depositAmount} (Non-refundable)</span>
                  </div>
                  <div className="flex items-start justify-between py-1 border-b border-white/5">
                    <span>Refills Window:</span>
                    <span className="font-medium text-white">2–3 Weeks (40%+ Lashes)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenBooking(null)}
                  className="w-full bg-[#FAF8F5] text-[#181615] hover:bg-[#C5A880] py-4 rounded-xl text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Book Lash Appointment</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

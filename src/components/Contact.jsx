import React, { useRef, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from './SocialIcons';
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
              Get In Touch
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#141312] tracking-tight">
              Studio Location & Concierge
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5C5854] max-w-md font-light leading-relaxed">
            Appointments are exclusively arranged in advance to preserve the tranquil sanctuary of each private guest.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Contact & Location Details (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Studio Location */}
              <div className="p-6 bg-[#FFFFFF] border border-[#E8E4DC] rounded-2xl">
                <div className="w-9 h-9 rounded-full bg-[#FAF7F0] border border-[#E0DAD0] flex items-center justify-center text-[#8F7249] mb-4">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#141312] mb-1">
                  Atelier Address
                </h3>
                <p className="text-xs text-[#5C5854] leading-relaxed">
                  {BUSINESS_CONFIG.contact.address}<br />
                  {BUSINESS_CONFIG.contact.city}
                </p>
                <a
                  href={BUSINESS_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#8F7249] hover:text-[#141312] mt-3 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Concierge & Inquiries */}
              <div className="p-6 bg-[#FFFFFF] border border-[#E8E4DC] rounded-2xl">
                <div className="w-9 h-9 rounded-full bg-[#FAF7F0] border border-[#E0DAD0] flex items-center justify-center text-[#8F7249] mb-4">
                  <Mail className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#141312] mb-1">
                  Direct Concierge
                </h3>
                <p className="text-xs text-[#5C5854] leading-relaxed">
                  {BUSINESS_CONFIG.contact.email}<br />
                  {BUSINESS_CONFIG.contact.phone}
                </p>
                <button
                  onClick={() => onOpenBooking(null)}
                  className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#8F7249] hover:text-[#141312] mt-3 transition-colors"
                >
                  <span>Direct WhatsApp Chat</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>

            </div>

            {/* Socials & Media */}
            <div className="p-6 sm:p-8 bg-[#FFFFFF] border border-[#E8E4DC] rounded-2xl">
              <h3 className="font-serif text-2xl font-normal text-[#141312] mb-2">
                Follow the Studio & Daily Inspo
              </h3>
              <p className="text-xs text-[#6E6963] leading-relaxed mb-6 font-light">
                Follow our daily stories for live cancellations, client sets, and upcoming design collections.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={BUSINESS_CONFIG.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full border border-[#DDD7CC] hover:border-[#141312] bg-[#FAF8F5] text-xs font-medium text-[#141312] flex items-center gap-2 transition-all hover:bg-[#141312] hover:text-white"
                >
                  <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
                  <span>Instagram {BUSINESS_CONFIG.socials.instagram.handle}</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.socials.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full border border-[#DDD7CC] hover:border-[#141312] bg-[#FAF8F5] text-xs font-medium text-[#141312] flex items-center gap-2 transition-all hover:bg-[#141312] hover:text-white"
                >
                  <TikTokIcon className="w-3.5 h-3.5" />
                  <span>TikTok {BUSINESS_CONFIG.socials.tiktok.handle}</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.socials.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full border border-[#DDD7CC] hover:border-[#25D366] bg-[#FAF8F5] text-xs font-medium text-[#141312] flex items-center gap-2 transition-all hover:bg-[#25D366] hover:text-white"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Business</span>
                </a>
              </div>
            </div>

          </div>

          {/* Operating Hours Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#181615] text-[#FAF8F5] p-8 sm:p-10 rounded-3xl border border-[#2E2A27] shadow-xl flex flex-col justify-between h-full space-y-8">
              
              <div>
                <div className="flex items-center gap-2 text-[#C5A880] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
                  <Clock className="w-4 h-4" />
                  <span>Studio Hours</span>
                </div>
                
                <h3 className="font-serif text-3xl font-light text-white mb-6">
                  Weekly Schedule
                </h3>

                <ul className="space-y-4 text-xs tracking-wider border-t border-white/10 pt-4">
                  {BUSINESS_CONFIG.hours.map((schedule, idx) => (
                    <li key={idx} className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-[#A49E96]">{schedule.days}</span>
                      <span className="font-medium text-white">{schedule.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenBooking(null)}
                  className="w-full bg-[#FAF8F5] text-[#181615] hover:bg-[#C5A880] py-4 rounded-xl text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Book Next Appointment</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

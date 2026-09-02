import React from 'react';
import { ArrowUp, Sparkles, MessageCircle } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './SocialIcons';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Services & Pricing', href: '#services' },
    { label: 'Selected Works', href: '#portfolio' },
    { label: 'Studio Policies & Reviews', href: '#policies' },
    { label: 'Studio Contact & Booking', href: '#contact' },
  ];

  return (
    <footer className="bg-[#121110] text-[#FAF8F5] pt-20 pb-12 border-t border-[#242220]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.18em] font-light uppercase text-white block">
                {BUSINESS_CONFIG.brandName}
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-mono block mt-0.5">
                {BUSINESS_CONFIG.brandDescriptor}
              </span>
            </div>

            <p className="text-xs text-[#9E988F] font-light max-w-sm leading-relaxed">
              {BUSINESS_CONFIG.tagline} Bespoke eyelash extensions, precision eye mapping, and private studio sessions.
            </p>
            
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking(null)}
                className="inline-flex items-center gap-2 bg-[#1F1D1B] hover:bg-[#C5A880] hover:text-[#121110] px-4 py-2.5 rounded-full text-[11px] uppercase tracking-widest text-[#E8DEC8] border border-white/10 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Book Appointment (09077824079)</span>
              </button>
            </div>
          </div>

          {/* Quick Nav (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-3">
              Navigation
            </span>
            <ul className="grid grid-cols-2 gap-2 text-xs text-[#A49E96]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contact & Socials (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-3">
              Studio Connect
            </span>
            <p className="text-xs text-[#A49E96] leading-relaxed">
              WhatsApp: {BUSINESS_CONFIG.displayPhone}<br />
              Instagram: {BUSINESS_CONFIG.contact.instagram}<br />
              Sessions: Private By Appointment
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#C5A880]">
              <a href={BUSINESS_CONFIG.socials.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <span>•</span>
              <a href={BUSINESS_CONFIG.socials.whatsapp.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6E6963]">
          <p>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.brandName}. All rights reserved. Where every blink speaks confidence.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#9E988F] hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

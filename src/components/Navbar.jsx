import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#portfolio' },
    { label: 'The Studio', href: '#about' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-3.5 border-b border-[#E8E4DC] shadow-sm'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#" 
            className="group flex flex-col items-start focus:outline-none"
            aria-label={`${BUSINESS_CONFIG.brandName} - Home`}
          >
            <span className="font-serif text-xl sm:text-2xl tracking-[0.18em] font-medium text-[#181615] uppercase transition-colors group-hover:text-[#8F7249]">
              {BUSINESS_CONFIG.brandName}
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#8E8A85] font-sans -mt-0.5">
              Haute Nail Studio
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-[0.2em] font-medium text-[#5C5854]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative py-1 hover:text-[#181615] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#181615] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => onOpenBooking(null)}
              className="bg-[#181615] text-[#F9F7F2] hover:bg-[#33302D] px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 shadow-sm hover:shadow active:scale-[0.98] flex items-center gap-2 group"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={() => onOpenBooking(null)}
              className="bg-[#181615] text-[#F9F7F2] px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-[0.15em] font-medium flex items-center gap-1.5"
            >
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#181615] focus:outline-none rounded-lg hover:bg-black/5"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#FBF9F5] flex flex-col justify-between p-8 md:hidden transition-all duration-500 ease-luxury ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#E8E4DC] pb-6">
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-[0.18em] uppercase text-[#181615]">
              {BUSINESS_CONFIG.brandName}
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#8E8A85]">
              Haute Nail Studio
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-[#181615] hover:bg-black/5 rounded-full"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col space-y-6 my-auto">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-serif text-3xl text-[#181615] hover:text-[#8F7249] transition-colors flex items-center justify-between"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-5 h-5 text-[#C5A880]" />
            </a>
          ))}
        </nav>

        <div className="space-y-4 pt-6 border-t border-[#E8E4DC]">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking(null);
            }}
            className="w-full bg-[#181615] text-[#F9F7F2] py-4 rounded-xl text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Book Appointment via WhatsApp</span>
          </button>
          <p className="text-center text-xs text-[#8E8A85]">
            {BUSINESS_CONFIG.contact.address} • {BUSINESS_CONFIG.contact.city}
          </p>
        </div>
      </div>
    </>
  );
}

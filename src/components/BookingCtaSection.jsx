import React, { useRef, useEffect } from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { animateSectionReveal } from '../animations/gsapEffects';

export default function BookingCtaSection({ onOpenBooking }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    animateSectionReveal(sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-[#181615] text-[#FAF8F5] relative overflow-hidden">
      
      {/* Editorial Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity">
        <img
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1600&auto=format&fit=crop"
          alt="Luxury Studio Nails"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 text-center">
        
        <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#C5A880] block mb-4">
          Reserve Your Bespoke Experience
        </span>

        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight mb-6">
          Ready for your next elevated set?
        </h2>

        <p className="text-sm sm:text-base text-[#B3ADA5] max-w-xl mx-auto font-light leading-relaxed mb-10">
          Book your private 1-on-1 session with Elena Vance. From precision Russian cuticle grooming to custom glazed chrome, let us craft something timeless.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenBooking(null)}
            className="w-full sm:w-auto bg-[#FAF8F5] text-[#181615] hover:bg-[#C5A880] hover:text-[#181615] active:scale-[0.98] py-4 px-8 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 group"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Book via WhatsApp Concierge</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <p className="text-[11px] text-[#7A746C] uppercase tracking-wider mt-8">
          Private Studio • SoHo, New York • By Appointment Only
        </p>

      </div>
    </section>
  );
}

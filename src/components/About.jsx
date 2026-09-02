import React, { useRef, useEffect } from 'react';
import { Sparkles, Shield, HeartHandshake, Eye, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { animateSectionReveal } from '../animations/gsapEffects';

export default function About({ onOpenBooking }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    animateSectionReveal(sectionRef.current);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 sm:py-32 bg-[#FAF7F0] border-b border-[#EAE6DE]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Artist Editorial Portrait (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Asymmetric Offset Background */}
              <div className="absolute -inset-3 bg-[#EAE5DA] rounded-2xl transform -rotate-1 pointer-events-none" />
              
              <div className="relative rounded-xl overflow-hidden bg-[#DDD8CE] shadow-luxury aspect-[3/4]">
                <img
                  src="/images/lashes/volume-set.jpg"
                  alt="Lashed by Beejay — Lash Artistry"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Float Hallmark Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-[#181615] text-[#FAF8F5] p-5 rounded-2xl shadow-xl max-w-[220px] border border-[#2D2A27]">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] block font-semibold">
                  Studio Philosophy
                </span>
                <p className="font-serif text-xl font-normal mt-0.5 text-white">
                  Precision Isolation
                </p>
                <p className="text-[11px] text-[#A6A097] leading-tight mt-1">
                  Tailored styling designed to protect and honor natural lash health.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8F7249] block mb-2">
                About the Studio
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#141312] tracking-tight leading-tight">
                "{BUSINESS_CONFIG.tagline}"
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#5C5854] font-light leading-relaxed">
              <p>
                At <strong className="font-medium text-[#141312]">{BUSINESS_CONFIG.brandName}</strong>, lash extensions are treated as a personalized form of facial architecture. Every eye is unique, requiring thoughtful mapping of curl, length, diameter, and fan density to enhance your natural beauty.
              </p>
              <p>
                From effortless everyday classic sets to textured hybrid blends and dramatic Russian volume, we prioritize meticulous isolation, clean application, and premium lightweight fibers. No clumping, no heavy weighing down—just immaculate lashes that let you wake up radiant and confident every morning.
              </p>
            </div>

            {/* Studio Standards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#FFFFFF] border border-[#E8E4DC] rounded-xl">
                <h3 className="font-serif text-base font-medium text-[#141312] mb-1">
                  Meticulous Natural Lash Care
                </h3>
                <p className="text-xs text-[#6E6963] leading-relaxed font-light">
                  Extensions matched strictly to the weight tolerance of each individual natural lash.
                </p>
              </div>

              <div className="p-4 bg-[#FFFFFF] border border-[#E8E4DC] rounded-xl">
                <h3 className="font-serif text-base font-medium text-[#141312] mb-1">
                  Private & Relaxing Setting
                </h3>
                <p className="text-xs text-[#6E6963] leading-relaxed font-light">
                  A peaceful, comfortable studio environment where you can unwind during your session.
                </p>
              </div>
            </div>

            {/* Signature & Booking Trigger */}
            <div className="pt-4 border-t border-[#EAE6DE] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="font-serif italic text-2xl text-[#141312] block">
                  Beejay
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#8E8A85]">
                  Founder & Lash Stylist • {BUSINESS_CONFIG.brandName}
                </span>
              </div>

              <button
                onClick={() => onOpenBooking(null)}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#141312] hover:text-[#8F7249] border-b border-[#141312] hover:border-[#8F7249] pb-1 transition-all"
              >
                <span>Book Your Lash Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

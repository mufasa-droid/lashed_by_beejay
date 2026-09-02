import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Eye, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import LuxuryVisualCanvas from '../three/LuxuryVisualCanvas';
import { animateHeroEntrance } from '../animations/gsapEffects';

export default function Hero({ onOpenBooking }) {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const title3Ref = useRef(null);
  const subtitleRef = useRef(null);
  const ctasRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    animateHeroEntrance({
      badge: badgeRef.current,
      titleLines: [title1Ref.current, title2Ref.current, title3Ref.current],
      subtitle: subtitleRef.current,
      ctas: ctasRef.current ? Array.from(ctasRef.current.children) : [],
      visual: visualRef.current
    });
  }, []);

  const scrollToPortfolio = (e) => {
    e.preventDefault();
    const el = document.querySelector('#portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-[92vh] pt-32 pb-16 lg:pt-40 lg:pb-24 flex items-center justify-center overflow-hidden border-b border-[#EAE6DE]"
    >
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#F3ECE0] rounded-full filter blur-[120px] pointer-events-none opacity-60" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#EBE4D5] rounded-full filter blur-[100px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-8 max-w-2xl">
            
            {/* Small Luxury Eyebrow */}
            <div 
              ref={badgeRef} 
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EFECE5] border border-[#DDD7CC] text-[11px] uppercase tracking-[0.25em] font-semibold text-[#5C5854]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
              <span>{BUSINESS_CONFIG.brandName} • {BUSINESS_CONFIG.brandDescriptor}</span>
            </div>

            {/* Large Asymmetric Editorial Headline */}
            <div className="space-y-1">
              <div className="overflow-hidden">
                <h1 
                  ref={title1Ref} 
                  className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[4.8rem] font-light text-[#141312] leading-[1.08] tracking-tight"
                >
                  Where every blink
                </h1>
              </div>
              <div className="overflow-hidden">
                <p 
                  ref={title2Ref} 
                  className="font-serif italic text-5xl sm:text-6xl md:text-7xl lg:text-[4.8rem] font-normal text-[#8F7249] leading-[1.08] tracking-tight"
                >
                  speaks
                </p>
              </div>
              <div className="overflow-hidden">
                <p 
                  ref={title3Ref} 
                  className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[4.8rem] font-light text-[#141312] leading-[1.08] tracking-tight"
                >
                  confidence.
                </p>
              </div>
            </div>

            {/* Supporting Copy */}
            <p 
              ref={subtitleRef} 
              className="text-base sm:text-lg text-[#5C5854] font-light leading-relaxed max-w-xl"
            >
              {BUSINESS_CONFIG.shortBio} Classic, Hybrid, and Russian Volume sets tailored to your signature beauty.
            </p>

            {/* Buttons */}
            <div 
              ref={ctasRef} 
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={() => onOpenBooking(null)}
                className="bg-[#141312] text-[#FAF8F5] hover:bg-[#2C2927] active:scale-[0.99] px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-luxury flex items-center justify-center gap-3 group"
              >
                <span>Book Lash Appointment</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToPortfolio}
                className="px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium text-[#141312] bg-white/60 hover:bg-white border border-[#DDD7CC] hover:border-[#141312] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Explore Lash Work</span>
              </button>
            </div>

            {/* Studio Hallmark Badges */}
            <div className="pt-6 border-t border-[#EAE6DE] grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-normal text-[#141312]">1:1 Mapping</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E8A85]">Custom Eye Anatomy</span>
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-normal text-[#141312]">Featherlight</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E8A85]">Zero-Damage Comfort</span>
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-normal text-[#141312]">2–3 Wk Care</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E8A85]">Retention Guarantee</span>
              </div>
            </div>

          </div>

          {/* Right Column: Three.js Interactive Luxury Lash Art (5 cols) */}
          <div ref={visualRef} className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Frame Accents */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C5A880]/40 rounded-tl-2xl pointer-events-none z-20" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#C5A880]/40 rounded-br-2xl pointer-events-none z-20" />

              {/* Three.js Canvas Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#EFECE6] border border-[#E3DCD0] shadow-2xl">
                <LuxuryVisualCanvas 
                  imageUrl="/images/lashes/classic-set.jpg"
                  alt="Lashed by Beejay — Editorial Lash Artistry"
                />
              </div>

              {/* Floating Testimonial Pill */}
              <div className="absolute -bottom-6 -left-6 sm:bottom-4 sm:-left-8 z-30 bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E2DDD3] p-3.5 rounded-xl shadow-luxury max-w-[240px] hidden sm:block">
                <div className="flex items-center gap-1.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#C5A880] text-xs">★</span>
                  ))}
                </div>
                <p className="text-[11px] text-[#2C2927] font-medium leading-tight">
                  "Flawless wispy set with light-as-air comfort."
                </p>
                <span className="text-[9px] uppercase tracking-wider text-[#8E8A85] block mt-1">
                  — Lashed by Beejay Client
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

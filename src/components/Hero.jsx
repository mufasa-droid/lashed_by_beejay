import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
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
      className="relative min-h-[90vh] pt-32 pb-16 lg:pt-40 lg:pb-24 flex items-center justify-center overflow-hidden border-b border-[#EAE6DE]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-8 max-w-2xl">
            
            {/* Editorial Eyebrow */}
            <div 
              ref={badgeRef} 
              className="text-[11px] uppercase tracking-[0.28em] font-medium text-[#8F7249]"
            >
              {BUSINESS_CONFIG.brandName} • {BUSINESS_CONFIG.brandDescriptor}
            </div>

            {/* Large Asymmetric Editorial Headline */}
            <div className="space-y-1">
              <div className="overflow-hidden">
                <h1 
                  ref={title1Ref} 
                  className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-light text-[#141312] leading-[1.06] tracking-tight"
                >
                  Where every blink
                </h1>
              </div>
              <div className="overflow-hidden">
                <p 
                  ref={title2Ref} 
                  className="font-serif italic text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-normal text-[#8F7249] leading-[1.06] tracking-tight"
                >
                  speaks
                </p>
              </div>
              <div className="overflow-hidden">
                <p 
                  ref={title3Ref} 
                  className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-light text-[#141312] leading-[1.06] tracking-tight"
                >
                  confidence.
                </p>
              </div>
            </div>

            {/* Natural, Human Supporting Copy */}
            <p 
              ref={subtitleRef} 
              className="text-base sm:text-lg text-[#5C5854] font-light leading-relaxed max-w-xl"
            >
              Lash extensions shaped specifically to your eye curvature and style. Offering Classic, Hybrid, and Russian Volume sets in a relaxed, private studio setting.
            </p>

            {/* CTAs */}
            <div 
              ref={ctasRef} 
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={() => onOpenBooking(null)}
                className="bg-[#141312] text-[#FAF8F5] hover:bg-[#2C2927] active:scale-[0.99] px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-3 group shadow-sm"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToPortfolio}
                className="px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium text-[#141312] bg-white/70 hover:bg-white border border-[#DDD7CC] hover:border-[#141312] transition-all duration-300 flex items-center justify-center"
              >
                <span>View Recent Sets</span>
              </button>
            </div>

            {/* Studio Hallmarks */}
            <div className="pt-8 border-t border-[#EAE6DE] grid grid-cols-3 gap-6 text-left">
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-normal text-[#141312]">1:1 Isolation</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E8A85]">Natural Lash Health</span>
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-normal text-[#141312]">Weightless</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E8A85]">Zero Pinching</span>
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-normal text-[#141312]">2–3 Wk Care</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E8A85]">Retention Guarantee</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Photographic Hero Canvas (5 cols) */}
          <div ref={visualRef} className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle Asymmetric Shadow Backdrop */}
              <div className="absolute -inset-2 bg-[#EAE4D8]/60 rounded-2xl -rotate-1 pointer-events-none" />

              {/* Three.js Canvas Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#EFECE6] border border-[#DDD5C7] shadow-lg aspect-[4/5] sm:aspect-[3/4]">
                <LuxuryVisualCanvas 
                  imageUrl="/images/lashes/classic-set.jpg"
                  alt="Lashed by Beejay — Classic Lash Set"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


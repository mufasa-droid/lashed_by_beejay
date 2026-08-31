import React, { useRef, useEffect } from 'react';
import { ArrowRight, Sparkles, Clock } from 'lucide-react';
import { SERVICES } from '../data/services';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { animateSectionReveal } from '../animations/gsapEffects';

export default function FeaturedServices({ onSelectDetail, onOpenBooking }) {
  const sectionRef = useRef(null);
  const featured = SERVICES.filter(s => s.featured).slice(0, 4);

  useEffect(() => {
    animateSectionReveal(sectionRef.current);
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 sm:py-32 bg-[#FBF9F5] border-b border-[#EAE6DE]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8F7249] block mb-2">
              Curated Offerings
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#141312] tracking-tight">
              Signature Atelier Services
            </h2>
          </div>
          <p className="text-sm text-[#5C5854] max-w-md font-light leading-relaxed">
            Every session is a masterclass in dry cuticle alignment, structural apex balance, and luxury long-wear aesthetics.
          </p>
        </div>

        {/* Numbered Editorial Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((service, index) => {
            const indexStr = String(index + 1).padStart(2, '0');
            return (
              <div 
                key={service.id}
                className="group relative bg-[#FFFFFF] border border-[#E8E4DC] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:shadow-luxury hover:border-[#C5A880]/60"
              >
                <div>
                  {/* Number & Category */}
                  <div className="flex items-baseline justify-between border-b border-[#F0EDE6] pb-4 mb-6">
                    <span className="font-serif text-3xl font-light text-[#141312]/30 group-hover:text-[#8F7249] transition-colors">
                      {indexStr}
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#8E8A85] bg-[#F5F2EC] px-2.5 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  {/* Thumbnail */}
                  <div 
                    onClick={() => onSelectDetail(service)}
                    className="relative h-44 rounded-xl overflow-hidden mb-5 bg-[#F0EDE6] cursor-pointer"
                  >
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>

                  {/* Title & Short Description */}
                  <h3 
                    onClick={() => onSelectDetail(service)}
                    className="font-serif text-2xl font-normal text-[#141312] group-hover:text-[#8F7249] transition-colors mb-2 cursor-pointer"
                  >
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#6E6963] line-clamp-3 leading-relaxed mb-6 font-light">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-[#F0EDE6] flex items-center justify-between">
                  <div>
                    <span className="font-serif text-2xl font-medium text-[#141312]">
                      {BUSINESS_CONFIG.currency}{service.price}
                    </span>
                    <span className="text-[11px] text-[#8E8A85] block font-light">
                      {service.duration}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectDetail(service)}
                    className="w-10 h-10 rounded-full border border-[#DDD7CC] flex items-center justify-center text-[#141312] group-hover:bg-[#141312] group-hover:text-[#FAF8F5] group-hover:border-[#141312] transition-all duration-300"
                    aria-label={`View details for ${service.name}`}
                  >
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Discover Full Catalog Link */}
        <div className="mt-14 text-center">
          <a
            href="#catalog"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#catalog');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#141312] hover:text-[#8F7249] border-b border-[#141312] hover:border-[#8F7249] pb-1 transition-all"
          >
            <span>Explore Complete Treatment Catalog & Add-Ons</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

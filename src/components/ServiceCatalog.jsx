import React, { useRef, useEffect } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { SERVICES } from '../data/services';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import ServiceCard from './ServiceCard';
import { animateSectionReveal } from '../animations/gsapEffects';

export default function ServiceCatalog({ onSelectDetail, onQuickBook }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    animateSectionReveal(sectionRef.current);
  }, []);

  const fullSets = SERVICES.filter(s => s.category === 'full-sets');
  const refills = SERVICES.filter(s => s.category === 'refills');
  const addOns = SERVICES.filter(s => s.category === 'addons');

  return (
    <section id="services" ref={sectionRef} className="py-24 sm:py-32 bg-[#FBF9F5] border-b border-[#EAE6DE]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.28em] font-medium text-[#8F7249] block mb-2">
              Menu & Pricing
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#141312] tracking-tight">
              Services & Pricing
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5C5854] max-w-md font-light leading-relaxed">
            Full sets shaped to your eye curvature, maintenance refills within 2–3 weeks, and individual lash care treatments.
          </p>
        </div>

        {/* Part 1: Full Sets (Signature Visual Cards) */}
        <div className="mb-20">
          <div className="flex items-center justify-between pb-4 border-b border-[#EAE6DE] mb-8">
            <h3 className="text-xs uppercase tracking-[0.22em] font-medium text-[#141312]">
              Full Sets
            </h3>
            <span className="text-[11px] text-[#8E8A85] font-light">
              Initial Full Application
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fullSets.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelectDetail={onSelectDetail}
                onQuickBook={onQuickBook}
              />
            ))}
          </div>
        </div>

        {/* Part 2: Refills & Add-Ons (Open Editorial Lists Sitting Directly on Background) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-6">
          
          {/* Column A: 2–3 Week Refills (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="pb-4 border-b border-[#141312] mb-6 flex items-baseline justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#141312]">
                    2–3 Week Refills
                  </h3>
                  <p className="text-[11px] text-[#8E8A85] font-light mt-0.5">
                    For Lashed by Beejay sets with at least 40% retention
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#8F7249] font-medium">
                  Maintenance
                </span>
              </div>

              {/* Refills List with Clean Hairline Dividers */}
              <div className="divide-y divide-[#EAE6DE]">
                {refills.map((item) => (
                  <div 
                    key={item.id}
                    className="py-5 first:pt-2 last:pb-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 group hover:bg-black/[0.015] px-2 -mx-2 rounded-lg transition-colors"
                  >
                    <div className="flex-1 pr-4">
                      <h4 
                        onClick={() => onSelectDetail(item)}
                        className="font-serif text-xl font-normal text-[#141312] group-hover:text-[#8F7249] transition-colors cursor-pointer"
                      >
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#6E6963] leading-relaxed font-light mt-1">
                        {item.shortDescription}
                      </p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#F0ECE4]">
                      <span className="font-serif text-2xl font-light text-[#141312] whitespace-nowrap">
                        {BUSINESS_CONFIG.currency}{item.price}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => onSelectDetail(item)}
                          className="px-2.5 py-1.5 text-[11px] uppercase tracking-wider font-medium text-[#6E6963] hover:text-[#141312] transition-colors"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => onQuickBook(item)}
                          className="bg-[#141312] text-[#FAF8F5] hover:bg-[#2C2927] active:scale-[0.98] px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-medium transition-all duration-300 flex items-center gap-1 shadow-sm"
                          aria-label={`Book ${item.name}`}
                        >
                          <span>Book</span>
                          <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#EAE6DE] text-[11px] text-[#8E8A85] flex items-center gap-2 font-light">
              <Clock className="w-3.5 h-3.5 text-[#8F7249]" />
              <span>Valid strictly within 21 days with 40%+ lash retention.</span>
            </div>
          </div>

          {/* Column B: Add-Ons & Care (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="pb-4 border-b border-[#141312] mb-6 flex items-baseline justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#141312]">
                    Add-Ons & Care
                  </h3>
                  <p className="text-[11px] text-[#8E8A85] font-light mt-0.5">
                    Individual add-on treatments and lash hygiene services
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#8F7249] font-medium">
                  Customization
                </span>
              </div>

              {/* Add-Ons List with Clean Hairline Dividers */}
              <div className="divide-y divide-[#EAE6DE]">
                {addOns.map((item) => (
                  <div 
                    key={item.id}
                    className="py-5 first:pt-2 last:pb-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 group hover:bg-black/[0.015] px-2 -mx-2 rounded-lg transition-colors"
                  >
                    <div className="flex-1 pr-4">
                      <h4 
                        onClick={() => onSelectDetail(item)}
                        className="font-serif text-xl font-normal text-[#141312] group-hover:text-[#8F7249] transition-colors cursor-pointer"
                      >
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#6E6963] leading-relaxed font-light mt-1">
                        {item.shortDescription}
                      </p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#F0ECE4]">
                      <span className="font-serif text-2xl font-light text-[#141312] whitespace-nowrap">
                        {BUSINESS_CONFIG.currency}{item.price}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => onSelectDetail(item)}
                          className="px-2.5 py-1.5 text-[11px] uppercase tracking-wider font-medium text-[#6E6963] hover:text-[#141312] transition-colors"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => onQuickBook(item)}
                          className="bg-[#141312] text-[#FAF8F5] hover:bg-[#2C2927] active:scale-[0.98] px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-medium transition-all duration-300 flex items-center gap-1 shadow-sm"
                          aria-label={`Book ${item.name}`}
                        >
                          <span>Book</span>
                          <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#EAE6DE] text-[11px] text-[#8E8A85] flex items-center gap-2 font-light">
              <span>Can be added to any full set appointment or booked standalone.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


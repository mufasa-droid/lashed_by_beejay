import React, { useRef, useEffect } from 'react';
import { ArrowRight, Sparkles, Clock, PlusCircle, RefreshCw, Eye } from 'lucide-react';
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
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8F7249] block mb-2">
              Bespoke Lash Menu
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#141312] tracking-tight">
              Services & Pricing
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5C5854] max-w-md font-light leading-relaxed">
            Meticulously mapped full sets, precision 2–3 week refills, and specialized lash treatments tailored to your eye curvature.
          </p>
        </div>

        {/* Section 1: Full Sets (Signature Visual Cards) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#8F7249]" />
            <h3 className="text-xs uppercase tracking-[0.22em] font-semibold text-[#141312]">
              Full Sets • Signature Application
            </h3>
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

        {/* Section 2: Refills & Add-Ons (Editorial List Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 pt-10 border-t border-[#EAE6DE]">
          
          {/* Column A: 2–3 Week Refills */}
          <div className="bg-[#FFFFFF] border border-[#E8E4DC] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#F0EDE6] mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#E0DAD0] flex items-center justify-center text-[#8F7249]">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-light text-[#141312]">
                      2–3 Week Refills
                    </h3>
                    <p className="text-[10px] uppercase tracking-wider text-[#8E8A85]">
                      Maintenance • Min 40% Lashes Remaining
                    </p>
                  </div>
                </div>
              </div>

              {/* Refills List */}
              <div className="divide-y divide-[#F3EFE8]">
                {refills.map((item) => (
                  <div 
                    key={item.id}
                    className="py-4.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:bg-[#FAF8F4]/80 p-2.5 -mx-2.5 rounded-xl transition-colors"
                  >
                    <div className="flex-1 pr-2">
                      <div className="flex items-center gap-2">
                        <h4 
                          onClick={() => onSelectDetail(item)}
                          className="font-serif text-lg font-medium text-[#141312] group-hover:text-[#8F7249] transition-colors cursor-pointer"
                        >
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-xs text-[#6E6963] leading-relaxed font-light mt-0.5">
                        {item.shortDescription}
                      </p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#F5F2EC]">
                      <span className="font-serif text-xl font-semibold text-[#141312] whitespace-nowrap">
                        {BUSINESS_CONFIG.currency}{item.price}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => onSelectDetail(item)}
                          className="px-2.5 py-1.5 text-[10px] uppercase tracking-wider font-semibold text-[#6E6963] hover:text-[#141312] hover:bg-[#EFECE5] rounded-md transition-colors"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => onQuickBook(item)}
                          className="bg-[#141312] text-[#FAF8F5] hover:bg-[#2C2927] active:scale-[0.97] px-3.5 py-1.5 rounded-lg text-[10px] uppercase tracking-wider font-medium transition-all duration-300 flex items-center gap-1"
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

            <div className="mt-6 pt-4 border-t border-[#F0EDE6] text-[11px] text-[#8E8A85] flex items-center gap-2 font-light">
              <Clock className="w-3.5 h-3.5 text-[#8F7249]" />
              <span>Refills valid only within 21 days with at least 40% retention.</span>
            </div>
          </div>

          {/* Column B: Add-Ons & Care */}
          <div className="bg-[#FFFFFF] border border-[#E8E4DC] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#F0EDE6] mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#E0DAD0] flex items-center justify-center text-[#8F7249]">
                    <PlusCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-light text-[#141312]">
                      Add-Ons & Care
                    </h3>
                    <p className="text-[10px] uppercase tracking-wider text-[#8E8A85]">
                      Customization & Hygiene Services
                    </p>
                  </div>
                </div>
              </div>

              {/* Add-Ons List */}
              <div className="divide-y divide-[#F3EFE8]">
                {addOns.map((item) => (
                  <div 
                    key={item.id}
                    className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:bg-[#FAF8F4]/80 p-2.5 -mx-2.5 rounded-xl transition-colors"
                  >
                    <div className="flex-1 pr-2">
                      <h4 
                        onClick={() => onSelectDetail(item)}
                        className="font-serif text-lg font-medium text-[#141312] group-hover:text-[#8F7249] transition-colors cursor-pointer"
                      >
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#6E6963] leading-relaxed font-light mt-0.5">
                        {item.shortDescription}
                      </p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#F5F2EC]">
                      <span className="font-serif text-xl font-semibold text-[#141312] whitespace-nowrap">
                        {BUSINESS_CONFIG.currency}{item.price}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => onSelectDetail(item)}
                          className="px-2.5 py-1.5 text-[10px] uppercase tracking-wider font-semibold text-[#6E6963] hover:text-[#141312] hover:bg-[#EFECE5] rounded-md transition-colors"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => onQuickBook(item)}
                          className="bg-[#141312] text-[#FAF8F5] hover:bg-[#2C2927] active:scale-[0.97] px-3.5 py-1.5 rounded-lg text-[10px] uppercase tracking-wider font-medium transition-all duration-300 flex items-center gap-1"
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

            <div className="mt-6 pt-4 border-t border-[#F0EDE6] text-[11px] text-[#8E8A85] flex items-center gap-2 font-light">
              <Sparkles className="w-3.5 h-3.5 text-[#8F7249]" />
              <span>Can be booked standalone or added to any full set appointment.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

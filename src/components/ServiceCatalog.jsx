import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, SlidersHorizontal } from 'lucide-react';
import { SERVICES, SERVICE_CATEGORIES } from '../data/services';
import ServiceCard from './ServiceCard';
import { animateSectionReveal } from '../animations/gsapEffects';

export default function ServiceCatalog({ onSelectDetail, onQuickBook }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef(null);

  useEffect(() => {
    animateSectionReveal(sectionRef.current);
  }, []);

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

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
            Hand-crafted full sets, 2–3 week refills, and specialized care add-ons customized to your eye shape.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 gap-2 no-scrollbar">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium whitespace-nowrap transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-[#141312] text-[#FAF8F5] border-[#141312] shadow-sm'
                  : 'bg-white/80 text-[#5C5854] border-[#DDD8CE] hover:border-[#141312] hover:text-[#141312]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectDetail={onSelectDetail}
              onQuickBook={onQuickBook}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

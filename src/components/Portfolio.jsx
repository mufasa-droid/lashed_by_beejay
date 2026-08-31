import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '../data/portfolio';
import PortfolioCard from './PortfolioCard';
import PortfolioLightbox from './PortfolioLightbox';
import { animateSectionReveal } from '../animations/gsapEffects';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    animateSectionReveal(sectionRef.current);
  }, []);

  const handleCategoryChange = (catId) => {
    if (catId === selectedCategory) return;
    setIsFiltering(true);
    setTimeout(() => {
      setSelectedCategory(catId);
      setIsFiltering(false);
    }, 200);
  };

  const filteredItems = selectedCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedCategory);

  const handleOpenLightbox = (item) => {
    const index = filteredItems.findIndex(i => i.id === item.id);
    setLightboxIndex(index >= 0 ? index : 0);
    setIsLightboxOpen(true);
  };

  const handlePrevImage = () => {
    setLightboxIndex(prev => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNextImage = () => {
    setLightboxIndex(prev => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 sm:py-32 bg-[#FBF9F5] border-b border-[#EAE6DE]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8F7249] block mb-2">
              The Gallery
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#141312] tracking-tight">
              Selected Lash Works & Sets
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5C5854] max-w-md font-light leading-relaxed">
            Visual proof of our handcrafted volume fans, seamless classic isolation, and customized wispy mapping.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 gap-2 no-scrollbar">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.18em] font-medium whitespace-nowrap transition-all duration-300 border ${
                selectedCategory === cat.id
                  ? 'bg-[#141312] text-[#FAF8F5] border-[#141312] shadow-sm'
                  : 'bg-white/70 text-[#5C5854] border-[#DDD8CE] hover:border-[#141312] hover:text-[#141312]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid with Asymmetry */}
        <div 
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ${
            isFiltering ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'
          }`}
        >
          {filteredItems.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              onClick={() => handleOpenLightbox(item)}
            />
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox */}
      <PortfolioLightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </section>
  );
}

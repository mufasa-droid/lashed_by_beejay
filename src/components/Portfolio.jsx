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
    }, 180);
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
    <section id="portfolio" ref={sectionRef} className="py-24 sm:py-32 bg-[#FAF7F0] border-b border-[#EAE6DE]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.28em] font-medium text-[#8F7249] block mb-2">
              Visual Archive
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#141312] tracking-tight">
              Selected Lash Work
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5C5854] max-w-md font-light leading-relaxed">
            Real client results demonstrating clean lash isolation, soft fan density, and symmetry tailored to individual eye shapes.
          </p>
        </div>

        {/* Minimal Typographic Filter Bar */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-14 gap-2 no-scrollbar border-b border-[#EAE6DE]/60">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.18em] font-medium whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-[#141312] text-[#FAF8F5]'
                  : 'bg-transparent text-[#6E6963] hover:text-[#141312]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Lookbook Gallery Grid with Subtle Asymmetry */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 transition-all duration-300 ${
            isFiltering ? 'opacity-0 scale-[0.99]' : 'opacity-100 scale-100'
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


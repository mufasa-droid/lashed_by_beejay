import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export default function PortfolioLightbox({ items, currentIndex, isOpen, onClose, onPrev, onNext }) {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 select-none"
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio image fullscreen lightbox"
    >
      {/* Dark Luxury Dim Backdrop */}
      <div 
        className="fixed inset-0 bg-[#0F0E0D]/90 backdrop-blur-xl transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      {/* Top Header Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 p-6 flex items-center justify-between text-white/80">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
            {BUSINESS_CONFIG.brandName} • LASH ARCHIVE
          </span>
          <span className="text-white/30 text-xs">•</span>
          <span className="text-xs tracking-wider font-mono">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Center Image Canvas */}
      <div className="relative z-20 max-w-5xl max-h-[82vh] flex flex-col items-center justify-center mx-auto my-auto animate-scaleUp">
        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="max-h-[68vh] sm:max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
        />

        {/* Caption & Metadata Footer */}
        <div className="mt-4 text-center max-w-xl px-4">
          <h3 className="font-serif text-xl sm:text-2xl text-white font-light">
            {currentItem.title}
          </h3>
          <p className="text-xs text-white/60 mt-1">
            <span className="text-[#C5A880] font-medium">{currentItem.technique}</span> {currentItem.curl ? `• ${currentItem.curl}` : ''}
          </p>
          {currentItem.description && (
            <p className="text-xs text-white/40 mt-1.5 font-light italic">
              "{currentItem.description}"
            </p>
          )}
        </div>
      </div>

      {/* Navigation Chevrons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 sm:left-8 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Previous artwork"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 sm:right-8 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Next artwork"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}

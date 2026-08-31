import React from 'react';
import { Eye, Sparkles } from 'lucide-react';

export default function PortfolioCard({ item, onClick }) {
  // Height aspect classes for editorial asymmetry
  const aspectClass = item.aspect === 'tall' 
    ? 'h-[440px] sm:h-[480px]' 
    : item.aspect === 'square' 
    ? 'h-[320px] sm:h-[360px]' 
    : 'h-[380px] sm:h-[420px]';

  return (
    <div
      onClick={onClick}
      className={`group relative w-full ${aspectClass} rounded-2xl overflow-hidden cursor-pointer bg-[#ECE7DE] border border-[#E0DAD0] shadow-sm hover:shadow-luxury transition-all duration-700`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
        loading="lazy"
      />

      {/* Editorial Vignette & Hover Reveal */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/80 via-[#121110]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6 text-white">
        <div className="flex justify-end">
          <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
            <Eye className="w-4 h-4" />
          </span>
        </div>

        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <span className="text-[9px] uppercase tracking-[0.25em] font-semibold text-[#E8DEC8] block mb-1">
            {item.category} • {item.shape}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-light text-white leading-tight">
            {item.title}
          </h3>
          <p className="text-xs text-white/70 mt-1 font-light line-clamp-1">
            {item.technique}
          </p>
        </div>
      </div>

      {/* Permanent subtle tag on mobile/desktop */}
      <div className="absolute bottom-3 left-3 bg-[#141312]/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] uppercase tracking-[0.18em] text-[#FAF8F5] group-hover:opacity-0 transition-opacity">
        {item.category}
      </div>
    </div>
  );
}

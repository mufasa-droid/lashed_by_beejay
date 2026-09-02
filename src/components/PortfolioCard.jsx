import React from 'react';

export default function PortfolioCard({ item, onClick }) {
  // Height aspect classes for editorial rhythm
  const aspectClass = item.aspect === 'tall' 
    ? 'h-[460px] sm:h-[500px]' 
    : item.aspect === 'square' 
    ? 'h-[360px] sm:h-[400px]' 
    : 'h-[420px] sm:h-[460px]';

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer flex flex-col"
    >
      {/* Editorial Photography Frame */}
      <div className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden bg-[#ECE7DE] border border-[#DDD6C8] shadow-sm group-hover:shadow-md transition-all duration-700`}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Minimal Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-[#FAF8F5] bg-[#141312]/80 backdrop-blur-sm px-3 py-1 rounded-full">
            {item.category}
          </span>
        </div>
      </div>

      {/* Editorial Caption Under Image */}
      <div className="pt-4 pb-2 px-1">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-serif text-xl font-normal text-[#141312] group-hover:text-[#8F7249] transition-colors">
            {item.title}
          </h3>
          {item.curl && (
            <span className="text-[11px] text-[#8E8A85] font-light whitespace-nowrap">
              {item.curl}
            </span>
          )}
        </div>
        <p className="text-xs text-[#6E6963] font-light mt-1 line-clamp-1">
          {item.technique}
        </p>
      </div>
    </div>
  );
}


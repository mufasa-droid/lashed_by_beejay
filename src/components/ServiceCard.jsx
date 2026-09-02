import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export default function ServiceCard({ service, onSelectDetail, onQuickBook }) {
  return (
    <div className="group bg-[#FFFFFF] border border-[#E8E4DC] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 flex flex-col justify-between">
      
      {/* Photography Container with gentle hover zoom */}
      <div 
        onClick={() => onSelectDetail(service)}
        className="relative h-64 sm:h-72 w-full overflow-hidden cursor-pointer bg-[#F0EDE6]"
      >
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Subtle Category Caption */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-[#FAF8F5] bg-[#141312]/80 backdrop-blur-sm px-3 py-1 rounded-full">
            {service.categoryLabel || 'Full Set'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
        <div>
          <h3 
            onClick={() => onSelectDetail(service)}
            className="font-serif text-2xl font-normal text-[#141312] group-hover:text-[#8F7249] transition-colors cursor-pointer"
          >
            {service.name}
          </h3>
          
          <p className="text-xs sm:text-[13px] text-[#6E6963] leading-relaxed font-light mt-2 line-clamp-2">
            {service.shortDescription}
          </p>
        </div>

        {/* Price & Actions */}
        <div className="pt-4 border-t border-[#F0EDE6] flex items-baseline justify-between">
          <div>
            <span className="font-serif text-2xl font-normal text-[#141312]">
              {BUSINESS_CONFIG.currency}{service.price}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectDetail(service)}
              className="px-3 py-2 text-xs uppercase tracking-wider font-medium text-[#6E6963] hover:text-[#141312] hover:bg-[#F5F2EB] rounded-lg transition-colors"
            >
              Details
            </button>
            <button
              onClick={() => onQuickBook(service)}
              className="bg-[#141312] text-[#FAF8F5] hover:bg-[#2C2927] active:scale-[0.98] px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 flex items-center gap-1.5 shadow-sm"
              aria-label={`Book ${service.name}`}
            >
              <span>Book</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}


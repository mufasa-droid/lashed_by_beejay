import React from 'react';
import { Clock, ArrowRight, Eye, Plus } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export default function ServiceCard({ service, onSelectDetail, onQuickBook }) {
  return (
    <div className="group bg-[#FFFFFF] border border-[#E8E4DC] rounded-xl overflow-hidden shadow-sm hover:shadow-luxury transition-all duration-500 flex flex-col justify-between">
      
      {/* Image Container with subtle hover zoom */}
      <div 
        onClick={() => onSelectDetail(service)}
        className="relative h-60 sm:h-64 w-full overflow-hidden cursor-pointer bg-[#F0EDE6]"
      >
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5" /> View Details
          </span>
        </div>

        {/* Category Pill */}
        <div className="absolute top-3.5 left-3.5 bg-[#141312]/80 backdrop-blur-md px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] font-semibold text-[#FAF8F5]">
          {service.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 
              onClick={() => onSelectDetail(service)}
              className="font-serif text-xl font-medium text-[#141312] group-hover:text-[#8F7249] transition-colors cursor-pointer"
            >
              {service.name}
            </h3>
          </div>
          
          <p className="text-xs text-[#6E6963] line-clamp-2 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Price & Duration */}
        <div className="pt-3 border-t border-[#F0EDE6] flex items-center justify-between">
          <div>
            <span className="font-serif text-xl font-semibold text-[#141312]">
              {BUSINESS_CONFIG.currency}{service.price}
            </span>
            <span className="text-[11px] text-[#8E8A85] block -mt-0.5 flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#C5A880]" /> {service.duration}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectDetail(service)}
              className="px-3 py-2 text-[11px] uppercase tracking-wider font-semibold text-[#5C5854] hover:text-[#141312] hover:bg-[#F5F2EB] rounded-lg transition-colors"
            >
              Details
            </button>
            <button
              onClick={() => onQuickBook(service)}
              className="bg-[#141312] text-[#FAF8F5] hover:bg-[#2C2927] active:scale-[0.97] px-4 py-2 rounded-lg text-[11px] uppercase tracking-wider font-medium transition-all duration-300 flex items-center gap-1.5 shadow-sm"
              aria-label={`Book ${service.name}`}
            >
              <span>Book</span>
              <ArrowRight className="w-3 h-3 text-[#C5A880]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

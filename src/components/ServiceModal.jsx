import React, { useEffect } from 'react';
import { X, Clock, Sparkles, Check, ArrowRight, Shield } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export default function ServiceModal({ service, isOpen, onClose, onBookService }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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

  if (!isOpen || !service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#121110]/70 backdrop-blur-md transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-[#FDFBF7] border border-[#E5E0D6] rounded-2xl shadow-2xl overflow-hidden z-10 my-auto text-[#1C1A18] animate-scaleUp">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#181615]/60 hover:bg-[#181615] text-white transition-colors backdrop-blur-sm"
          aria-label="Close service detail"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Image Column */}
          <div className="md:col-span-5 relative min-h-[260px] md:min-h-full bg-[#EAE6DE]">
            <img 
              src={service.image} 
              alt={service.name} 
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
            <div className="absolute bottom-4 left-4 text-white md:hidden">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#E8DEC8] block">
                {service.category.toUpperCase()}
              </span>
              <h3 className="font-serif text-xl font-light">{service.name}</h3>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div>
              {/* Header */}
              <div className="hidden md:block">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8F7249] font-semibold block mb-1">
                  Atelier Service Protocol • {service.category.toUpperCase()}
                </span>
                <h2 id="service-modal-title" className="font-serif text-2xl sm:text-3xl font-light text-[#141312]">
                  {service.name}
                </h2>
              </div>

              {/* Price & Duration Bar */}
              <div className="flex items-center gap-4 py-3 my-3 border-y border-[#EAE6DE]">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8E8A85] block">Investment</span>
                  <span className="font-serif text-2xl font-semibold text-[#141312]">
                    {BUSINESS_CONFIG.currency}{service.price}
                  </span>
                </div>
                <div className="h-8 w-[1px] bg-[#EAE6DE]" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8E8A85] block">Session Duration</span>
                  <span className="text-sm font-medium text-[#141312] flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#C5A880]" /> {service.duration}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 text-xs sm:text-sm text-[#5C5854] leading-relaxed">
                <p>{service.fullDescription || service.shortDescription}</p>

                {/* What's Included */}
                {service.includes && service.includes.length > 0 && (
                  <div className="pt-2">
                    <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#141312] mb-2.5">
                      What's Included in This Ritual:
                    </h4>
                    <ul className="space-y-2">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#423E3A]">
                          <Check className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Ideal For */}
                {service.idealFor && (
                  <div className="bg-[#F5F1E8] border border-[#E3DCD0] p-3 rounded-lg text-xs text-[#5C5854]">
                    <span className="font-semibold text-[#141312]">Ideal For: </span>
                    {service.idealFor}
                  </div>
                )}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-[#EAE6DE] flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onBookService(service);
                }}
                className="flex-1 bg-[#141312] text-[#FAF8F5] hover:bg-[#2C2927] active:scale-[0.99] py-3.5 px-6 rounded-lg text-xs uppercase tracking-[0.18em] font-medium transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Reserve This Service</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

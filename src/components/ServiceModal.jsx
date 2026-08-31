import React, { useEffect } from 'react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck, Eye } from 'lucide-react';
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
        className="fixed inset-0 bg-[#121110]/75 backdrop-blur-md transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-[#FDFBF7] border border-[#E5E0D6] rounded-2xl shadow-2xl overflow-hidden z-10 my-auto text-[#1C1A18] animate-scaleUp">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#181615]/70 hover:bg-[#181615] text-white transition-colors backdrop-blur-sm"
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
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#E8DEC8] block font-medium">
                {service.categoryLabel || service.category}
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
                  {BUSINESS_CONFIG.brandName} • {service.categoryLabel || service.category.toUpperCase()}
                </span>
                <h2 id="service-modal-title" className="font-serif text-2xl sm:text-3xl font-light text-[#141312]">
                  {service.name}
                </h2>
              </div>

              {/* Price Bar */}
              <div className="flex items-center gap-4 py-3 my-3 border-y border-[#EAE6DE]">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8E8A85] block">Official Rate</span>
                  <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#141312]">
                    {BUSINESS_CONFIG.currency}{service.price}
                  </span>
                </div>
                {service.styleSummary && (
                  <>
                    <div className="h-8 w-[1px] bg-[#EAE6DE]" />
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#8E8A85] block">Style Profile</span>
                      <span className="text-xs font-medium text-[#5C5854] block mt-0.5">
                        {service.styleSummary}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Description */}
              <div className="space-y-4 text-xs sm:text-sm text-[#5C5854] leading-relaxed">
                <p className="font-light">{service.fullDescription || service.shortDescription}</p>

                {/* Key Benefits */}
                <div className="bg-[#FAF7F0] border border-[#E8E4DC] p-3.5 rounded-xl space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-[#423E3A]">
                    <Check className="w-3.5 h-3.5 text-[#8F7249] flex-shrink-0 mt-0.5" />
                    <span>Customized eye mapping and length graduation to protect natural lashes.</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#423E3A]">
                    <Check className="w-3.5 h-3.5 text-[#8F7249] flex-shrink-0 mt-0.5" />
                    <span>Applied with medical-grade, long-retention, oil-sensitive adhesive.</span>
                  </div>
                </div>

                {/* Policy note */}
                <div className="text-[11px] text-[#8A847C] leading-normal pt-1">
                  * A {BUSINESS_CONFIG.currency}{BUSINESS_CONFIG.depositAmount} non-refundable deposit is required to secure your booking slot on WhatsApp.
                </div>
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

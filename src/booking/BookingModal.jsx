import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, Clock, Sparkles, MessageCircle, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { SERVICES } from '../data/services';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { openWhatsAppBooking } from './whatsappBooking';
import { getUpcomingBookingDates, POPULAR_TIME_SLOTS } from './bookingUtils';

export default function BookingModal({ isOpen, onClose, initialService = null }) {
  const [selectedServiceId, setSelectedServiceId] = useState(
    initialService ? initialService.id : SERVICES[0].id
  );
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState(POPULAR_TIME_SLOTS[0]);
  const [clientName, setClientName] = useState('');
  const [additionalNote, setAdditionalNote] = useState('');
  const [hasExistingGel, setHasExistingGel] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const modalRef = useRef(null);
  const availableDates = getUpcomingBookingDates(14);

  // Sync initialService when changed
  useEffect(() => {
    if (initialService) {
      setSelectedServiceId(initialService.id);
    }
  }, [initialService]);

  // Set default date when modal opens
  useEffect(() => {
    if (isOpen && !selectedDate) {
      const firstOpenDate = availableDates.find(d => !d.isClosed);
      if (firstOpenDate) {
        setSelectedDate(firstOpenDate.display);
      }
    }
  }, [isOpen, selectedDate, availableDates]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background body scroll when open
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

  if (!isOpen) return null;

  const currentService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  const handleProceedWhatsApp = (e) => {
    e.preventDefault();
    
    let noteText = additionalNote.trim();
    if (hasExistingGel) {
      noteText = noteText ? `[Requires Removal of Existing Gel/Extensions] ${noteText}` : `Requires removal of existing gel or extensions.`;
    }

    openWhatsAppBooking({
      serviceName: currentService.name,
      servicePrice: currentService.price,
      serviceDuration: currentService.duration,
      preferredDate: selectedDate,
      preferredTime: selectedTime,
      clientName: clientName.trim(),
      additionalNote: noteText
    });

    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      {/* Dimmed Backdrop */}
      <div 
        className="fixed inset-0 bg-[#121110]/70 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-2xl bg-[#FDFBF7] border border-[#E5E0D6] rounded-2xl shadow-2xl overflow-hidden z-10 my-auto text-[#1C1A18] animate-scaleUp"
      >
        {/* Header Ribbon */}
        <div className="bg-[#181615] text-[#F9F7F2] px-6 py-5 flex items-center justify-between border-b border-[#2C2927]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-0.5">
              Bespoke Appointment Concierge
            </span>
            <h2 id="booking-modal-title" className="font-serif text-xl sm:text-2xl font-light tracking-wide">
              Reserve Your Studio Session
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#A49E96] hover:text-[#F9F7F2] hover:bg-white/10 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <form onSubmit={handleProceedWhatsApp} className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Step 1: Select Service */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#5C5854] mb-2">
              1. Select Service
            </label>
            <select
              value={selectedServiceId}
              onChange={(e) => setSelectedServiceId(e.target.value)}
              className="w-full bg-[#FFFFFF] border border-[#DDD8CE] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent transition-all shadow-sm font-medium"
            >
              {SERVICES.map(s => (
                <option key={s.id} value={s.id}>
                  {s.name} — {BUSINESS_CONFIG.currency}{s.price} ({s.duration})
                </option>
              ))}
            </select>
          </div>

          {/* Service Snapshot Card */}
          <div className="bg-[#F5F1E8] border border-[#E3DCD0] rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-3.5">
              <img 
                src={currentService.image} 
                alt={currentService.name} 
                className="w-14 h-14 rounded-lg object-cover border border-[#D5CFC3]"
              />
              <div>
                <h3 className="font-serif text-base font-semibold text-[#1C1A18]">
                  {currentService.name}
                </h3>
                <p className="text-xs text-[#6E6963] line-clamp-1 mt-0.5">
                  {currentService.shortDescription}
                </p>
              </div>
            </div>
            <div className="flex sm:flex-col items-baseline sm:items-end justify-between w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-[#E3DCD0]">
              <span className="font-serif text-xl font-bold text-[#1C1A18]">
                {BUSINESS_CONFIG.currency}{currentService.price}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#8A847C]">
                {currentService.duration}
              </span>
            </div>
          </div>

          {/* Step 2: Date Selection */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#5C5854]">
                2. Preferred Date
              </label>
              <span className="text-[11px] text-[#8A847C] flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#C5A880]" /> Tue–Sat Availability
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {availableDates.slice(0, 8).map((dateObj) => (
                <button
                  type="button"
                  key={dateObj.iso}
                  disabled={dateObj.isClosed}
                  onClick={() => setSelectedDate(dateObj.display)}
                  className={`px-3 py-2.5 rounded-lg text-xs font-medium border text-center transition-all ${
                    selectedDate === dateObj.display
                      ? 'bg-[#181615] text-[#F9F7F2] border-[#181615] shadow-sm'
                      : dateObj.isClosed
                      ? 'bg-[#EFEBE3]/50 text-[#AAA59D] border-transparent cursor-not-allowed line-through'
                      : 'bg-white text-[#2C2927] border-[#DDD8CE] hover:border-[#C5A880]'
                  }`}
                >
                  <span className="block font-semibold">{dateObj.dayName}</span>
                  <span className="text-[11px] opacity-80">{dateObj.display.split(', ')[1]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Preferred Time Window */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#5C5854] mb-2 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A880]" /> 3. Preferred Time Window
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {POPULAR_TIME_SLOTS.map((slot) => (
                <button
                  type="button"
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={`px-3.5 py-2.5 rounded-lg text-xs font-medium border text-left flex items-center justify-between transition-all ${
                    selectedTime === slot
                      ? 'bg-[#181615] text-[#F9F7F2] border-[#181615]'
                      : 'bg-white text-[#2C2927] border-[#DDD8CE] hover:border-[#C5A880]'
                  }`}
                >
                  <span>{slot}</span>
                  {selectedTime === slot && <Check className="w-3.5 h-3.5 text-[#C5A880]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Client Info & Custom Note */}
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#5C5854] mb-1.5">
                Your Full Name (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Sophia Rossi"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-[#FFFFFF] border border-[#DDD8CE] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#5C5854] mb-1.5">
                Custom Notes & Inspo Ideas
              </label>
              <textarea
                rows={2}
                placeholder="Mention if you have existing gel for removal, nail art reference photos, or specific length desires..."
                value={additionalNote}
                onChange={(e) => setAdditionalNote(e.target.value)}
                className="w-full bg-[#FFFFFF] border border-[#DDD8CE] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Quick Toggle for Existing Product */}
            <label className="flex items-center gap-2.5 cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={hasExistingGel}
                onChange={(e) => setHasExistingGel(e.target.checked)}
                className="rounded border-[#C5A880] text-[#181615] focus:ring-[#C5A880] w-4 h-4"
              />
              <span className="text-xs text-[#5C5854] select-none">
                I currently have existing gel/acrylic from another salon that needs removal (+20 min)
              </span>
            </label>
          </div>

          {/* Policies Note */}
          <div className="bg-[#FAF7F0] border-l-2 border-[#C5A880] p-3 rounded-r-lg text-[11px] text-[#6E6963] leading-relaxed flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A880] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-[#2C2927]">WhatsApp Concierge Protocol</p>
              <p>{BUSINESS_CONFIG.bookingDepositNote} You will receive a direct reply to confirm slot availability.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 bg-[#181615] text-[#F9F7F2] py-3.5 px-6 rounded-lg font-medium text-xs uppercase tracking-[0.18em] hover:bg-[#2C2927] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 shadow-lg group"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
              <span>Continue to WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3.5 text-xs uppercase tracking-[0.15em] font-medium text-[#7A746C] hover:text-[#181615] hover:bg-[#EFEBE3] rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

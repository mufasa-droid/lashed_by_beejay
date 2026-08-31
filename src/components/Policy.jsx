import React, { useRef, useEffect } from 'react';
import { Clock, ShieldAlert, CalendarClock, AlertCircle, Droplets, CheckCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { animateSectionReveal } from '../animations/gsapEffects';

export default function Policy({ onOpenBooking }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    animateSectionReveal(sectionRef.current);
  }, []);

  const policyItems = [
    {
      number: "01",
      icon: Clock,
      title: "Punctuality",
      description: "Please arrive on time for your appointment."
    },
    {
      number: "02",
      icon: ShieldAlert,
      title: "Deposit Requirement",
      description: `A ${BUSINESS_CONFIG.currency}${BUSINESS_CONFIG.depositAmount} non-refundable deposit is required to secure your booking.`
    },
    {
      number: "03",
      icon: CalendarClock,
      title: "Refill Window",
      description: "Refills are only available for sets done by Lashed by Beejay within 2–3 weeks."
    },
    {
      number: "04",
      icon: AlertCircle,
      title: "Full Set Requirement",
      description: "After 3 weeks or with less than 40% of lashes remaining, a new full set will be required."
    },
    {
      number: "05",
      icon: Droplets,
      title: "Lash Care & Retention",
      description: "No oil-based products on your lashes for longer retention."
    }
  ];

  return (
    <section id="policies" ref={sectionRef} className="py-24 sm:py-32 bg-[#FBF9F5] border-b border-[#EAE6DE]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8F7249] block mb-2">
              Studio Guidelines
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#141312] tracking-tight">
              Lash Care & Booking Policy
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5C5854] max-w-md font-light leading-relaxed">
            To ensure the highest standard of safety, hygiene, and exceptional lash retention, we kindly ask all clients to observe our studio guidelines.
          </p>
        </div>

        {/* 5 Distinct Policy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policyItems.map((policy, idx) => {
            const IconComponent = policy.icon;
            const isDepositCard = policy.number === "02";

            return (
              <div
                key={policy.number}
                className={`p-7 rounded-2xl border transition-all duration-500 flex flex-col justify-between ${
                  isDepositCard
                    ? 'bg-[#181615] text-[#FAF8F5] border-[#181615] shadow-luxury'
                    : 'bg-[#FFFFFF] text-[#141312] border-[#E8E4DC] hover:shadow-luxury hover:border-[#C5A880]/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-current/10">
                    <span className="font-serif text-2xl font-light opacity-50">
                      {policy.number}
                    </span>
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                      isDepositCard ? 'bg-white/10 text-[#C5A880]' : 'bg-[#FAF7F0] text-[#8F7249]'
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className={`font-serif text-2xl font-normal mb-2 ${
                    isDepositCard ? 'text-[#FAF8F5]' : 'text-[#141312]'
                  }`}>
                    {policy.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed font-light ${
                    isDepositCard ? 'text-[#D5CFC7]' : 'text-[#5C5854]'
                  }`}>
                    {policy.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-current/10 flex items-center justify-between text-[10px] uppercase tracking-widest opacity-60">
                  <span>Studio Protocol</span>
                  <span>Verified</span>
                </div>
              </div>
            );
          })}

          {/* Quick Booking Callout Card */}
          <div className="p-7 rounded-2xl bg-[#FAF7F0] border border-[#E3DCD0] flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8F7249] block mb-2">
                Have Questions?
              </span>
              <h3 className="font-serif text-2xl font-light text-[#141312] mb-3">
                Ready to Reserve?
              </h3>
              <p className="text-xs text-[#5C5854] font-light leading-relaxed mb-6">
                Our WhatsApp concierge is available to guide you on style recommendations, availability, and deposit confirmation.
              </p>
            </div>

            <button
              onClick={() => onOpenBooking(null)}
              className="w-full bg-[#141312] text-[#FAF8F5] hover:bg-[#2C2927] py-3.5 px-5 rounded-xl text-xs uppercase tracking-[0.18em] font-medium transition-all flex items-center justify-center gap-2 group shadow-sm"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

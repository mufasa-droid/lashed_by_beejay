import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';
import { animateSectionReveal } from '../animations/gsapEffects';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    animateSectionReveal(sectionRef.current);
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 sm:py-32 bg-[#FAF7F0] border-b border-[#EAE6DE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8F7249] block mb-2">
            Client Words
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#141312] tracking-tight mb-4">
            Experiences at Maison Éclat
          </h2>
          <p className="text-xs sm:text-sm text-[#5C5854] font-light">
            Reflections from our cherished private studio clientele.
          </p>
        </div>

        {/* Testimonials Swiper */}
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-[#141312]',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#8F7249]',
            }}
            className="pb-16"
          >
            {TESTIMONIALS.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-[#FFFFFF] border border-[#E8E4DC] rounded-3xl p-8 sm:p-12 shadow-luxury text-center relative flex flex-col items-center">
                  
                  {/* Subtle Quote Icon */}
                  <Quote className="w-10 h-10 text-[#C5A880]/30 mb-6" />

                  {/* Quote Body */}
                  <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#141312] font-light leading-relaxed mb-8 max-w-2xl italic">
                    "{item.quote}"
                  </blockquote>

                  {/* Author Meta */}
                  <div className="flex flex-col items-center">
                    <span className="font-sans font-semibold text-sm text-[#141312] tracking-wider uppercase">
                      {item.name}
                    </span>
                    <span className="text-xs text-[#8E8A85] mt-0.5">
                      {item.role} • <span className="text-[#8F7249] font-medium">{item.service}</span>
                    </span>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

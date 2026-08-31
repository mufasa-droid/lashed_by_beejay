import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { SHOWCASE_CAROUSEL_IMAGES } from '../data/portfolio';
import { animateSectionReveal } from '../animations/gsapEffects';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function EditorialCarousel() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    animateSectionReveal(sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-[#141312] text-[#FAF8F5] overflow-hidden relative">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8F7249]/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header with Custom Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A880] block mb-2">
              Visual Mastery
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight">
              The Haute Atelier Showcase
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="w-12 h-12 rounded-full border border-white/20 hover:border-[#C5A880] hover:bg-[#C5A880] hover:text-[#141312] flex items-center justify-center transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              className="w-12 h-12 rounded-full border border-white/20 hover:border-[#C5A880] hover:bg-[#C5A880] hover:text-[#141312] flex items-center justify-center transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            slidesPerView={1}
            loop={true}
            speed={900}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-white/40',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#C5A880]',
            }}
            className="w-full h-[460px] sm:h-[560px] lg:h-[640px]"
          >
            {SHOWCASE_CAROUSEL_IMAGES.map((slide, idx) => (
              <SwiperSlide key={slide.id} className="relative w-full h-full bg-[#1A1816]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover select-none"
                  loading="lazy"
                />
                
                {/* Gradient Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/90 via-[#121110]/30 to-transparent flex flex-col justify-end p-8 sm:p-14">
                  <div className="max-w-2xl">
                    <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#C5A880] block mb-2">
                      {slide.subtitle}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Counter Indicator */}
        <div className="mt-6 flex items-center justify-between text-xs text-white/50 tracking-widest font-mono uppercase">
          <span>DRAG OR SWIPE TO EXPLORE</span>
          <span>0{activeIndex + 1} / 0{SHOWCASE_CAROUSEL_IMAGES.length}</span>
        </div>

      </div>
    </section>
  );
}

import React, { useRef, useEffect } from 'react';
import { Sparkles, ArrowRight, Eye } from 'lucide-react';
import { animateSectionReveal } from '../animations/gsapEffects';

export const LASH_STYLE_GUIDE = [
  {
    id: "style-classic",
    name: "Classic",
    eyebrow: "1:1 Single Lash Ratio",
    description: "Natural & elegant everyday look. One extension is applied to each natural lash, offering subtle definition and clean mascara effect.",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=900&auto=format&fit=crop",
    vibe: "Natural • Clean • Timeless"
  },
  {
    id: "style-hybrid",
    name: "Hybrid",
    eyebrow: "50% Classic + 50% Volume",
    description: "A perfect mix of classic and volume lashes. Gives a textured, dimensional appearance with gentle density.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=900&auto=format&fit=crop",
    vibe: "Textured • Soft Dimension"
  },
  {
    id: "style-volume",
    name: "Volume",
    eyebrow: "3D–6D Handmade Fans",
    description: "Full, fluffy, and glamorous. Multiple ultra-light extensions fanned out on every natural lash for dense coverage.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop",
    vibe: "Fluffy • Glamorous • Velvety"
  },
  {
    id: "style-mega",
    name: "Mega Volume",
    eyebrow: "10D–16D Micro-Fine Fans",
    description: "Maximum fullness for a bold statement. Delivers an intense, pitch-black lash line with ultra-featherlight fibers.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=900&auto=format&fit=crop",
    vibe: "Maximum Density • Bold Impact"
  },
  {
    id: "style-wispy",
    name: "Wispy",
    eyebrow: "Spiked & Layered Texture",
    description: "Soft, textured, and trendy. High and low lash spikes create an airy, dynamic, and eye-catching Kim K aesthetic.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop",
    vibe: "Airy • Spiked • Trendsetting"
  },
  {
    id: "style-wet",
    name: "Wet Look",
    eyebrow: "Closed Fan Spikes",
    description: "Defined, glossy lash effect. Distinct closed spikes resemble freshly mascaraed wet lashes with editorial edge.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=900&auto=format&fit=crop",
    vibe: "Defined • Glossy • High Fashion"
  }
];

export default function LashStyles({ onOpenBooking }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    animateSectionReveal(sectionRef.current);
  }, []);

  return (
    <section id="lash-styles" ref={sectionRef} className="py-24 sm:py-32 bg-[#FBF9F5] border-b border-[#EAE6DE]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8F7249] block mb-2">
              Style Discovery
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#141312] tracking-tight">
              Lash Style Guide
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5C5854] max-w-md font-light leading-relaxed">
            Not sure which set suits you best? Explore the 6 signature lash aesthetics crafted at Lashed by Beejay.
          </p>
        </div>

        {/* Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LASH_STYLE_GUIDE.map((style) => (
            <div
              key={style.id}
              className="bg-[#FFFFFF] border border-[#E8E4DC] rounded-2xl overflow-hidden shadow-sm hover:shadow-luxury transition-all duration-500 flex flex-col justify-between group"
            >
              {/* Image with subtle zoom */}
              <div className="relative h-64 overflow-hidden bg-[#ECE8DF]">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#141312]/80 backdrop-blur-md px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] font-semibold text-[#FAF8F5]">
                  {style.vibe}
                </div>
              </div>

              {/* Text info */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8F7249] block mb-1">
                    {style.eyebrow}
                  </span>
                  <h3 className="font-serif text-2xl font-light text-[#141312] group-hover:text-[#8F7249] transition-colors">
                    {style.name} Set
                  </h3>
                  <p className="text-xs text-[#6E6963] leading-relaxed mt-2 font-light">
                    {style.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0EDE6] flex items-center justify-between">
                  <span className="text-[11px] text-[#8E8A85] uppercase tracking-wider font-medium">
                    Signature Profile
                  </span>
                  <button
                    onClick={() => onOpenBooking(null)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#141312] hover:text-[#8F7249] transition-colors"
                  >
                    <span>Book Style</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

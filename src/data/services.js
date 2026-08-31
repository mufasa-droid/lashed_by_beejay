/**
 * Nail Studio Services Data Catalog
 * Organized by categories with full pricing, duration, features, and imagery.
 */

export const SERVICE_CATEGORIES = [
  { id: "all", name: "All Offerings" },
  { id: "signature", name: "Signature Manicures" },
  { id: "gel", name: "Russian & BIAB Gel" },
  { id: "extensions", name: "Sculptural Extensions" },
  { id: "art", name: "Editorial Nail Art" },
  { id: "pedicure", name: "Restorative Pedicures" },
];

export const SERVICES = [
  {
    id: "russian-manicure",
    name: "The Atelier Russian Manicure",
    category: "gel",
    featured: true,
    price: 110,
    duration: "75 min",
    shortDescription: "Dry e-file precision cuticle alignment, nail plate architecture rebalancing, and long-wear reinforced gel overlay.",
    fullDescription: "Our flagship dry hardware technique. We utilize diamond micro-bits to gently refine the proximal fold and lateral sidewalls without soaking. Completed with a multi-layered apex alignment and an ultra-close gel finish that stays immaculate for 4+ weeks.",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=900&auto=format&fit=crop",
    includes: [
      "Hardware dry cuticle refinement & deep cleansing",
      "Apex structural architecture alignment",
      "Reinforced high-gloss builder layer",
      "Choice of neutral or glazed haute tone",
      "Nourishing golden jojoba & peptide hydration"
    ],
    idealFor: "Clients seeking razor-sharp clean cuticles and 4-week durability without lifting."
  },
  {
    id: "sculpted-extensions",
    name: "Sculptural Hard Gel Extensions",
    category: "extensions",
    featured: true,
    price: 165,
    duration: "105 min",
    shortDescription: "Custom form-sculpted architectural extensions tailored to your natural finger anatomy and desired silhouette.",
    fullDescription: "No plastic glued tips. Every nail is custom sculpted using paper forms and hypoallergenic European hard gel to construct an elegant C-curve and featherlight strength. Shaped into almond, stiletto, coffin, or natural square.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=900&auto=format&fit=crop",
    includes: [
      "Full dry prep & gentle nail bed sanitization",
      "Custom form tailoring for zero-bulk extensions",
      "Precision structural filing & balance check",
      "Ultra-gloss gel shield finish",
      "Heated botanical oil massage"
    ],
    idealFor: "Lengthening and refining uneven nail beds with natural lightness."
  },
  {
    id: "editorial-chrome-art",
    name: "Haute Chrome & Glaze Artistry",
    category: "art",
    featured: true,
    price: 145,
    duration: "90 min",
    shortDescription: "Micro-fine pearlescent oyster powders, liquid metal molten silver accents, or glazed mirror reflections.",
    fullDescription: "An homage to modern high-fashion aesthetics. Featuring hand-rubbed micronized chrome pigments, 3D molten silver drips, micro-encapsulated gold foil, or clean glazed donut iridescence on your choice of gel base.",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=900&auto=format&fit=crop",
    includes: [
      "Precision dry manicure prep",
      "Base shade customized to your skin undertone",
      "Bespoke chrome / 3D molten chrome design (all 10 nails)",
      "Scratch-resistant non-wipe armor top coat",
      "Silk cuticle mist"
    ],
    idealFor: "Editorial fashion events, brides, and lovers of futuristic minimalism."
  },
  {
    id: "minimalist-line-art",
    name: "Bespoke Minimalist Nail Art",
    category: "art",
    featured: true,
    price: 135,
    duration: "90 min",
    shortDescription: "Delicate negative space, micro-French lines, geometric accents, and fine-line brushwork.",
    fullDescription: "Subtle elegance designed for everyday luxury. Includes fine-line hand-painted geometry, micro-dots, ombre aura airbrushing, or modern abstract negative space that grows out seamlessly.",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=900&auto=format&fit=crop",
    includes: [
      "Full hardware manicure & cuticle care",
      "Hand-painted custom art consultation",
      "Precision detailing with 000 sable brushes",
      "Reinforcing protective layer",
      "Aromatherapy hand treatment"
    ],
    idealFor: "Effortless chic aesthetics that match every wardrobe."
  },
  {
    id: "biab-structured-overlay",
    name: "BIAB™ Structured Builder Gel",
    category: "gel",
    featured: false,
    price: 95,
    duration: "60 min",
    shortDescription: "Flexible, high-strength builder gel overlay to protect and grow weak natural nails.",
    fullDescription: "Formulated specifically for brittle, thin, or post-acrylic nails. Builder In A Bottle (BIAB) reinforces the natural nail plate with a flexible, shock-absorbing polymer shield while infusing nourishing keratin boosters.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop",
    includes: [
      "Gentle natural nail preparation",
      "Self-leveling builder apex structure",
      "Natural nude, blush, or milky hue",
      "High-shine diamond top seal",
      "Cuticle serum application"
    ],
    idealFor: "Natural nail growth journeys and natural strength."
  },
  {
    id: "signature-couture-manicure",
    name: "Couture Restorative Manicure",
    category: "signature",
    featured: false,
    price: 80,
    duration: "50 min",
    shortDescription: "A gentle, non-gel sensory restoration with exfoliation, masque, and clean 10-free luxury polish.",
    fullDescription: "A deeply therapeutic ritual. Includes dead skin enzyme smoothing, warm botanical compress, pressure-point hand massage with organic camellia oil, and a breathable toxin-free high-shine lacquer finish.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=900&auto=format&fit=crop",
    includes: [
      "Botanical floral hand soak & enzyme exfoliation",
      "Gentle cuticle grooming and shaping",
      "15-minute tension release hand & forearm massage",
      "High-shine buff or breathable vegan lacquer",
      "Organic rosehip cuticle seal"
    ],
    idealFor: "Non-gel lovers desiring ultimate relaxation and pristine natural nails."
  },
  {
    id: "haute-botanical-pedicure",
    name: "Haute Botanical Pedicure Ritual",
    category: "pedicure",
    featured: false,
    price: 115,
    duration: "70 min",
    shortDescription: "Magnesium foot soak, lactic acid callus softening, hot stone massage, and long-wear gel pedicure.",
    fullDescription: "Comprehensive foot wellness and aesthetic perfection. Your feet are immersed in an organic epsom & lavender soak, followed by ultrasonic dead skin elimination, hot stone reflexology, and clean gel alignment.",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=900&auto=format&fit=crop",
    includes: [
      "Magnesium & mineral detox foot soak",
      "AHA/BHA gentle callus smoothing",
      "Toenail shaping and dry cuticle contouring",
      "Heated basalt stone lower leg massage",
      "Long-wear no-smudge gel polish"
    ],
    idealFor: "Total relaxation and flawlessly styled toes for all seasons."
  },
  {
    id: "luxury-gel-infill",
    name: "Studio Infill & Rebalancing",
    category: "extensions",
    featured: false,
    price: 100,
    duration: "75 min",
    shortDescription: "Rebalancing apex growth, cuticle refresh, and color replacement for existing extensions.",
    fullDescription: "Recommended every 3 to 4 weeks. We rebalance the apex weight distribution, eliminate any micro-lifting, and apply a completely new shade or design to keep your extensions structurally sound and stunning.",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=900&auto=format&fit=crop",
    includes: [
      "De-bulking & structural re-alignment",
      "Complete dry hardware cuticle cleanup",
      "New hard gel foundation layer",
      "Fresh gel color or design application",
      "Hydrating treatment"
    ],
    idealFor: "Maintaining existing gel extensions without full removal."
  }
];

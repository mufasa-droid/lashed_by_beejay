/**
 * Lashed by Beejay — Official Services & Price Catalog
 * Exact source of truth for full sets, 2–3 week refills, and add-ons.
 */

export const SERVICE_CATEGORIES = [
  { id: "all", name: "All Services" },
  { id: "full-sets", name: "Full Sets" },
  { id: "refills", name: "Refills (2–3 Weeks)" },
  { id: "addons", name: "Add-Ons & Care" },
];

export const SERVICES = [
  // ================= FULL SETS =================
  {
    id: "classic-set",
    name: "Classic Set",
    category: "full-sets",
    categoryLabel: "Full Set",
    featured: true,
    price: "12,000",
    rawPrice: 12000,
    shortDescription: "Natural & elegant everyday look.",
    fullDescription: "An individual extension applied to each healthy natural lash for a subtle, mascara-like enhancement. Perfect for everyday sophistication and effortless natural beauty.",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=900&auto=format&fit=crop",
    styleSummary: "1:1 Ratio • Natural Elegance"
  },
  {
    id: "hybrid-set",
    name: "Hybrid Set",
    category: "full-sets",
    categoryLabel: "Full Set",
    featured: true,
    price: "17,000",
    rawPrice: 17000,
    shortDescription: "A perfect mix of classic and volume lashes.",
    fullDescription: "A custom blend of classic single lashes and handmade volume fans. Creates a textured, slightly fuller look with balanced dimension.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=900&auto=format&fit=crop",
    styleSummary: "Classic + Volume Blend • Textured Dimension"
  },
  {
    id: "volume-set",
    name: "Volume Set",
    category: "full-sets",
    categoryLabel: "Full Set",
    featured: true,
    price: "22,000",
    rawPrice: 22000,
    shortDescription: "Full, fluffy, and glamorous.",
    fullDescription: "Delicate lightweight lash fans (3D–6D) handcrafted and applied to each natural lash. Delivers dramatic density, dark lash line, and fluffy softness.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop",
    styleSummary: "Handmade Volume Fans • Fluffy Glamour"
  },
  {
    id: "mega-volume-set",
    name: "Mega Volume Set",
    category: "full-sets",
    categoryLabel: "Full Set",
    featured: true,
    price: "28,000",
    rawPrice: 28000,
    shortDescription: "Maximum fullness for a bold statement.",
    fullDescription: "Ultra-fine, featherlight lash fans (up to 16D) creating the darkest, densest, and most striking lash look without compromising natural lash safety.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=900&auto=format&fit=crop",
    styleSummary: "Ultra-Fine Fans • Maximum Density"
  },
  {
    id: "wispy-set",
    name: "Wispy Set",
    category: "full-sets",
    categoryLabel: "Full Set",
    featured: true,
    price: "25,000",
    rawPrice: 25000,
    shortDescription: "Soft, textured, and trendy.",
    fullDescription: "Kim K-inspired textured lash styling combining closed fan spikes with soft fluffy volume base layers for an airy, dynamic, and photogenic finish.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop",
    styleSummary: "Kim K Spikes + Fluffy Layering • Trendy Chic"
  },
  {
    id: "wet-look-set",
    name: "Wet Look Set",
    category: "full-sets",
    categoryLabel: "Full Set",
    featured: true,
    price: "25,000",
    rawPrice: 25000,
    shortDescription: "Defined, glossy lash effect.",
    fullDescription: "Applied using unbloomed closed volume fans to create distinct, dark, glossy bundles. Gives the edgy aesthetic of freshly wet, defined mascara lashes.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=900&auto=format&fit=crop",
    styleSummary: "Closed Fan Spikes • Glossy & Defined"
  },

  // ================= REFILLS (2–3 WEEKS) =================
  {
    id: "classic-refill",
    name: "Classic Refill",
    category: "refills",
    categoryLabel: "Refill (2–3 Weeks)",
    featured: false,
    price: "7,000",
    rawPrice: 7000,
    shortDescription: "Classic touch-up within 2–3 weeks (min 40% lashes remaining).",
    fullDescription: "Gently removes outgrown extensions and places fresh classic lashes to restore full coverage. Valid only for existing Lashed by Beejay sets within 2–3 weeks.",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=900&auto=format&fit=crop",
    styleSummary: "2–3 Week Maintenance • 40%+ Retention"
  },
  {
    id: "hybrid-refill",
    name: "Hybrid Refill",
    category: "refills",
    categoryLabel: "Refill (2–3 Weeks)",
    featured: false,
    price: "10,000",
    rawPrice: 10000,
    shortDescription: "Hybrid touch-up within 2–3 weeks (min 40% lashes remaining).",
    fullDescription: "Replenishes both classic singles and volume fans to restore seamless texture and fullness. For sets done by Lashed by Beejay within 2–3 weeks.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=900&auto=format&fit=crop",
    styleSummary: "2–3 Week Maintenance • 40%+ Retention"
  },
  {
    id: "volume-refill",
    name: "Volume Refill",
    category: "refills",
    categoryLabel: "Refill (2–3 Weeks)",
    featured: false,
    price: "13,000",
    rawPrice: 13000,
    shortDescription: "Volume touch-up within 2–3 weeks (min 40% lashes remaining).",
    fullDescription: "Replaces shed volume fans and rebalances lash line fullness with fresh handmade fans. For sets done by Lashed by Beejay within 2–3 weeks.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop",
    styleSummary: "2–3 Week Maintenance • 40%+ Retention"
  },
  {
    id: "mega-volume-refill",
    name: "Mega Volume Refill",
    category: "refills",
    categoryLabel: "Refill (2–3 Weeks)",
    featured: false,
    price: "16,000",
    rawPrice: 16000,
    shortDescription: "Mega volume touch-up within 2–3 weeks (min 40% lashes remaining).",
    fullDescription: "Restores ultra-dense drama and removes overgrown lash fans. Valid only within 2–3 weeks of initial set with at least 40% retention.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=900&auto=format&fit=crop",
    styleSummary: "2–3 Week Maintenance • 40%+ Retention"
  },

  // ================= ADD-ONS =================
  {
    id: "bottom-lashes",
    name: "Bottom Lashes",
    category: "addons",
    categoryLabel: "Add-On",
    featured: false,
    price: "5,000",
    rawPrice: 5000,
    shortDescription: "Enhance your lower lash line for complete eye definition.",
    fullDescription: "Individual lower lash extensions carefully placed to open up the eyes and complete your full glam look with proportional balance.",
    image: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?q=80&w=900&auto=format&fit=crop",
    styleSummary: "Lower Lash Line Definition"
  },
  {
    id: "lash-removal",
    name: "Lash Removal",
    category: "addons",
    categoryLabel: "Add-On & Care",
    featured: false,
    price: "5,000",
    rawPrice: 5000,
    shortDescription: "Gentle and safe professional lash extension removal.",
    fullDescription: "Safe, painless chemical cream breakdown of lash extension adhesive without damaging your natural lashes.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=900&auto=format&fit=crop",
    styleSummary: "Safe & Damage-Free Professional Removal"
  },
  {
    id: "lash-bath",
    name: "Lash Bath",
    category: "addons",
    categoryLabel: "Add-On & Care",
    featured: false,
    price: "2,000",
    rawPrice: 2000,
    shortDescription: "Deep cleansing treatment for optimal lash hygiene and retention.",
    fullDescription: "Oil-free botanical foam cleanse that removes makeup residues, natural oils, and buildup for pristine retention.",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=900&auto=format&fit=crop",
    styleSummary: "Oil-Free Deep Cleansing Prep"
  },
  {
    id: "colored-lash-addon",
    name: "Colored Lash Add-On",
    category: "addons",
    categoryLabel: "Add-On & Customization",
    featured: false,
    price: "3,000",
    rawPrice: 3000,
    shortDescription: "Add subtle or vibrant colored lash accents to your set.",
    fullDescription: "Custom colored lash flares (brown, blue, purple, ombre, or custom highlights) integrated seamlessly into your full set.",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=900&auto=format&fit=crop",
    styleSummary: "Custom Tonal / Ombre Lash Highlights"
  }
];

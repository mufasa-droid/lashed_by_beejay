/**
 * Centralized Business Configuration
 * Edit this file to customize all studio details, branding, contact info, and WhatsApp number.
 */

export const BUSINESS_CONFIG = {
  // Brand Identity
  brandName: "MAISON ÉCLAT",
  tagline: "Bespoke Nail Artistry & Haute Studio",
  shortBio: "Elevating contemporary manicures into sculptural art. Founded by Master Nail Stylist Elena Vance, dedicated to clean luxury, cuticle precision, and bespoke editorial finishes.",
  establishedYear: "2021",
  
  // WhatsApp Integration (Centralized)
  // Format: International format without '+' or spaces (e.g., '14155552671' or '447123456789')
  whatsappNumber: "14155552671", 
  
  // Contact Details
  contact: {
    phone: "+1 (415) 555-2671",
    email: "concierge@maisoneclat.com",
    address: "742 Mercer Street, Suite 4B",
    city: "SoHo, New York, NY 10012",
    googleMapsUrl: "https://maps.google.com/?q=SoHo+New+York",
  },

  // Hours of Operation
  hours: [
    { days: "Tuesday – Friday", time: "10:00 AM – 7:30 PM" },
    { days: "Saturday", time: "9:30 AM – 6:00 PM" },
    { days: "Sunday & Monday", time: "Private Bookings / Closed" }
  ],

  // Social Links
  socials: {
    instagram: {
      handle: "@maisoneclat.nails",
      url: "https://instagram.com"
    },
    tiktok: {
      handle: "@maisoneclat",
      url: "https://tiktok.com"
    },
    pinterest: {
      handle: "@maisoneclat_atelier",
      url: "https://pinterest.com"
    },
    whatsapp: {
      display: "+1 (415) 555-2671",
      url: "https://wa.me/14155552671"
    }
  },

  // Currency & Booking Policies
  currency: "$",
  bookingDepositNote: "A 20% retainer is required via WhatsApp confirmation to secure your bespoke appointment time.",
  cancellationPolicy: "Kindly notify us at least 24 hours in advance for cancellations or reschedules.",
};

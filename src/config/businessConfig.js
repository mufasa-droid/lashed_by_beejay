/**
 * Centralized Business Configuration for Lashed by Beejay
 * Source of truth for brand name, phone, WhatsApp, Instagram, policies, and deposit terms.
 */

export const BUSINESS_CONFIG = {
  // Brand Identity
  brandName: "LASHED BY BEEJAY",
  brandDescriptor: "LASH STUDIO",
  tagline: "WHERE EVERY BLINK SPEAKS CONFIDENCE.",
  shortBio: "Dedicated to bespoke lash artistry, customized eye mapping, and premium lightweight extensions crafted for healthy, effortless glamour.",
  
  // WhatsApp Integration (Centralized)
  // Nigerian format: 09077824079 -> International standard 2349077824079
  whatsappNumber: "2349077824079",
  displayPhone: "09077824079",
  
  // Contact Details
  contact: {
    phone: "09077824079",
    whatsapp: "09077824079",
    email: "contact@lashedbybeejay.com", // clearly marked placeholder
    location: "Studio By Appointment Only",
    instagram: "@lashed_by_beejay",
    instagramUrl: "https://instagram.com/lashed_by_beejay"
  },

  // Social Links
  socials: {
    instagram: {
      handle: "@lashed_by_beejay",
      url: "https://instagram.com/lashed_by_beejay"
    },
    whatsapp: {
      display: "09077824079",
      url: "https://wa.me/2349077824079"
    }
  },

  // Currency & Financials
  currency: "₦",
  depositAmount: "5,000",
  depositNote: "A ₦5,000 non-refundable deposit is required to secure your booking.",

  // Studio Policies (Exact rules from business source of truth)
  policies: [
    {
      id: "punctuality",
      title: "Punctuality",
      rule: "Please arrive on time for your appointment."
    },
    {
      id: "deposit",
      title: "Deposit Requirement",
      rule: "A ₦5,000 non-refundable deposit is required to secure your booking."
    },
    {
      id: "refill-window",
      title: "Refill Window (2–3 Weeks)",
      rule: "Refills are only available for sets done by Lashed by Beejay within 2–3 weeks."
    },
    {
      id: "full-set-requirement",
      title: "Full Set Condition",
      rule: "After 3 weeks or with less than 40% of lashes remaining, a new full set will be required."
    },
    {
      id: "aftercare",
      title: "Lash Retention Care",
      rule: "No oil-based products on your lashes for longer retention."
    }
  ]
};

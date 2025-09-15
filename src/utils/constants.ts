// Navigation constants
export const NAV_LINKS = [
  { label: "Über mich", sections: ["about-me"] },
  { label: "Behandlungsangebot", sections: ["angebot", "behandlungskonzept", "behandlungsspektrum", "methods"] },
  { label: "Praxis", sections: ["galerie", "map"] },
  { label: "FAQ", sections: ["faq"] },
] as const;

// Contact information
export const CONTACT_INFO = {
  phone: "+49 123 456789",
  email: "info@psychotherapie-praxis.de",
  address: {
    street: "Musterstraße 123",
    city: "12345 Musterstadt",
    country: "Deutschland"
  },
  hours: {
    monday: "09:00 - 18:00",
    tuesday: "09:00 - 18:00",
    wednesday: "09:00 - 18:00",
    thursday: "09:00 - 18:00",
    friday: "09:00 - 16:00",
    saturday: "Geschlossen",
    sunday: "Geschlossen"
  }
} as const;

// Social media links
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/psychotherapie-praxis",
  xing: "https://xing.com/profile/psychotherapie-praxis"
} as const;

// SEO constants
export const SEO_DEFAULT = {
  title: "Psychotherapie Praxis - Professionelle Hilfe in Musterstadt",
  description: "Professionelle Psychotherapie in Musterstadt. Verhaltenstherapie, Systemische Therapie und mehr. Termine verfügbar.",
  keywords: ["Psychotherapie", "Musterstadt", "Verhaltenstherapie", "Systemische Therapie", "Psychologe"],
  image: "/profil.jpg"
} as const;

// Animation constants
export const ANIMATION_DURATION = 180; // ms
export const SCROLLSPY_TOP = 0.1;
export const MENU_HEIGHT = 64; // px


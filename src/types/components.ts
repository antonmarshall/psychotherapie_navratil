// Navigation Types
export interface NavLink {
  label: string;
  sections: string[];
}

// Treatment Concept Types
export interface TreatmentConcept {
  key: string;
  title: string;
  icon: string;
  color: string;
  iconAlt: string;
  description: React.ReactNode;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  privacyAccepted: boolean;
}

// FAQ Types
export interface FAQItem {
  question: string;
  answer: string;
}

// Timeline Types
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

// Gallery Types
export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}


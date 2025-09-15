import { ValidationError } from '@/types/global';

// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation (German format)
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+49|0)[0-9\s\-\(\)]{6,}$/;
  return phoneRegex.test(phone);
};

// Name validation
export const isValidName = (name: string): boolean => {
  return name.trim().length >= 2 && /^[a-zA-ZäöüßÄÖÜ\s]+$/.test(name);
};

// Message validation
export const isValidMessage = (message: string): boolean => {
  return message.trim().length >= 10;
};

// Contact form validation
export const validateContactForm = (data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
  privacyAccepted: boolean;
}): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!isValidName(data.name)) {
    errors.push({ field: 'name', message: 'Bitte geben Sie einen gültigen Namen ein' });
  }

  if (!isValidEmail(data.email)) {
    errors.push({ field: 'email', message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein' });
  }

  if (data.phone && !isValidPhone(data.phone)) {
    errors.push({ field: 'phone', message: 'Bitte geben Sie eine gültige Telefonnummer ein' });
  }

  if (!isValidMessage(data.message)) {
    errors.push({ field: 'message', message: 'Ihre Nachricht sollte mindestens 10 Zeichen lang sein' });
  }

  if (!data.privacyAccepted) {
    errors.push({ field: 'privacyAccepted', message: 'Bitte akzeptieren Sie die Datenschutzerklärung' });
  }

  return errors;
};


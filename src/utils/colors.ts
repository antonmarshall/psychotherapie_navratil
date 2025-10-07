// Zentrale Farbdefinition für die gesamte Website
// Alle Komponenten sollten aus dieser Datei referenzieren!

export const BRAND_COLORS = {
  // Haupt-Palette
  primary: '#F6A81A',      // Kräftiges Gelb
  secondary: '#E4572E',    // Orange-Rot
  accent: '#7B4F6A',       // Violett
  accent2: '#4A6A7B',      // Blaugrün
  accent3: '#2F7D52',      // Waldgrün (NEU für Traumatherapie)
  
  // Light-Varianten
  primaryLight: '#F9E79F',
  secondaryLight: '#F28C28',
  accentLight: '#BFA2C5',
  accent2Light: '#7BA6B6',
  accent3Light: '#6FA085',   // Helles Waldgrün
  
  // Dark-Varianten
  primaryDark: '#F6C544',
  secondaryDark: '#C13D1A',
  accentDark: '#4B3B5A',
  accent2Dark: '#3B5A5A',
  accent3Dark: '#1F6D42',    // Dunkles Waldgrün
  
  // ZENTRALE ABSCHNITT-HINTERGRUNDFARBEN (nur hier ändern!)
  sectionLight: '#fdfbf7',   // Hellerer Ton - Warmes Leinen-Weiß
  sectionDark: '#fef5e7',    // Dunklerer Ton - Warmes Creme (hoffnungsvoll)
  
  // Basis-Farben
  background: '#fff8ed',     // Creme
  foreground: '#222222',     // Dunkelgrau
  white: '#fefcf9',          // Warmes Weiß (für Cards, etc.)
  
  // 10 Weiß-Alternativen die mit Creme harmonieren:
  cardWhite: '#ffffff',      // 1. Reines Weiß (aktuell)
  warmWhite: '#fefefe',      // 2. Hauch wärmer
  creamWhite: '#fefcf8',     // 3. Sehr leicht cremig
  ivoryWhite: '#fdf9f4',     // 4. Elfenbein-Weiß
  pearlWhite: '#faf8f5',     // 5. Perlen-Weiß
  linen: '#faf9f7',          // 6. Leinen-Weiß
  ghostWhite: '#f8f8ff',     // 7. Geister-Weiß (kühl)
  snowWhite: '#fffafa',      // 8. Schnee-Weiß
  seashell: '#fff5ee',       // 9. Muschel-Weiß (warm)
  floralWhite: '#fffaf0',    // 10. Blüten-Weiß
} as const;

// Tailwind-Klassen Mapping
export const TAILWIND_COLORS = {
  // Background-Klassen
  'bg-primary': BRAND_COLORS.primary,
  'bg-primary-light': BRAND_COLORS.primaryLight,
  'bg-primary-dark': BRAND_COLORS.primaryDark,
  
  'bg-secondary': BRAND_COLORS.secondary,
  'bg-secondary-light': BRAND_COLORS.secondaryLight,
  'bg-secondary-dark': BRAND_COLORS.secondaryDark,
  
  'bg-accent': BRAND_COLORS.accent,
  'bg-accent-light': BRAND_COLORS.accentLight,
  'bg-accent-dark': BRAND_COLORS.accentDark,
  
  'bg-accent2': BRAND_COLORS.accent2,
  'bg-accent2-light': BRAND_COLORS.accent2Light,
  'bg-accent2-dark': BRAND_COLORS.accent2Dark,
  
  'bg-accent3': BRAND_COLORS.accent3,
  'bg-accent3-light': BRAND_COLORS.accent3Light,
  'bg-accent3-dark': BRAND_COLORS.accent3Dark,
} as const;

// Für Pentagon-SVG-Linien
export const PENTAGON_COLORS = [
  BRAND_COLORS.primary,     // Verhaltenstherapie
  BRAND_COLORS.accent2,     // Systemische Therapie
  BRAND_COLORS.accent,      // Tiefenpsychologie
  BRAND_COLORS.secondary,   // Neuropsychologie
  BRAND_COLORS.accent3,     // Traumatherapie
] as const;

# 🔄 Farb-Migration Plan

## Ersetzungs-Strategie

### 1. Primärfarbe Gelb (#F6A81A → Variable)

| Alt | Neu | Verwendung |
|-----|-----|-----------|
| `bg-[#F6A81A]` | `bg-primary` | Hintergrund |
| `text-[#F6A81A]` | `text-primary` | Text/Icons |
| `border-[#F6A81A]` | `border-primary` | Rahmen |
| `hover:bg-[#F6C544]` | `hover:bg-primary-hover` | Hover-Hintergrund |
| `hover:text-[#F6C544]` | `hover:text-primary-hover` | Hover-Text |
| `focus:border-[#F6A81A]` | `focus:border-primary` | Focus-Rahmen |

### 2. Creme-Hintergrund (#fff8ed → Variable)

| Alt | Neu |
|-----|-----|
| `bg-[#fff8ed]` | `bg-bg-creme` |
| `from-[#fff8ed]` | `from-bg-creme` |

### 3. Blaugrün (#4A6A7B → Variable)

| Alt | Neu |
|-----|-----|
| `text-[#4A6A7B]` | `text-accent2-custom` |

### 4. Dunkelgrau (#222222 → Variable)

| Alt | Neu |
|-----|-----|
| `text-[#222222]` | `text-text-primary` |

### 5. Yellow-Varianten → Primary

| Alt | Neu |
|-----|-----|
| `bg-yellow-400` | `bg-primary` |
| `hover:bg-yellow-300` | `hover:bg-primary-hover` |
| `border-yellow-400` | `border-primary` |
| `text-yellow-400` | `text-primary` |

## Dateien zum Bearbeiten (nach Priorität)

### Hohe Priorität (viele Farben)
1. ✅ `pages/Lebenslauf.tsx` - 20 Ersetzungen
2. ⏳ `components/sections/ContactSection.tsx` - 12 Ersetzungen  
3. ⏳ `components/layout/Footer.tsx` - 18 Ersetzungen
4. ⏳ `components/sections/FAQSection.tsx` - 5 Ersetzungen
5. ⏳ `components/sections/PracticeGallery.tsx` - 5 Ersetzungen
6. ⏳ `components/sections/PersonHero.tsx` - 5 Ersetzungen

### Mittlere Priorität
7. ⏳ `components/layout/Navigation.tsx` - 5 Ersetzungen
8. ⏳ `components/sections/HeroSection.tsx` - 6 Ersetzungen
9. ⏳ `pages/Impressum.tsx` - 6 Ersetzungen
10. ⏳ `pages/Datenschutz.tsx` - 6 Ersetzungen

## Status
- 📊 Analyse: ✅ Komplett
- 🎨 CSS-Variablen: ✅ Erstellt
- ⚙️ Tailwind-Config: ✅ Erweitert
- 🔄 Migration: 🔄 In Arbeit


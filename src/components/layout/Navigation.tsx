import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

import { NAV_LINKS, ANIMATION_DURATION, SCROLLSPY_TOP, MENU_HEIGHT } from '@/utils/constants';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [treatmentDropdownOpen, setTreatmentDropdownOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);

  const treatmentRef = useRef<HTMLDivElement>(null);
  const practiceRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  // Sliding-Box State und Ref
  const [highlightBoxStyle, setHighlightBoxStyle] = useState<{ left: number; top: number; width: number; height: number; opacity: number; scale: number }>({ left: 0, top: 0, width: 0, height: 0, opacity: 0, scale: 1 });
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const linkRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const linkTextRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  // 1. State für Dropdown-Open-Index (damit die Box bleibt, wenn Dropdown offen)
  const [dropdownOpenIdx, setDropdownOpenIdx] = useState<number | null>(null);
  // State für Kontakt-Button-Hover/Fokus
  const [contactHovered, setContactHovered] = useState(false);
  // Verzögerter Index für Schriftfarbe
  const [delayedBoxIdx, setDelayedBoxIdx] = useState(activeIdx);
  // State für Initial-Load der Highlight-Box
  const [boxReady, setBoxReady] = useState(false);
  const [boxInitial, setBoxInitial] = useState(true);

  // Click-Outside-Handler für Dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        treatmentDropdownOpen &&
        treatmentRef.current &&
        !treatmentRef.current.contains(event.target as Node)
      ) {
        setTreatmentDropdownOpen(false);
      }
      if (
        practiceDropdownOpen &&
        practiceRef.current &&
        !practiceRef.current.contains(event.target as Node)
      ) {
        setPracticeDropdownOpen(false);
      }
    }

    function handleScroll() {
      // Schließe Dropdowns beim Scrollen
      if (treatmentDropdownOpen) {
        setTreatmentDropdownOpen(false);
      }
      if (practiceDropdownOpen) {
        setPracticeDropdownOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      // Schließe Dropdowns mit Escape-Taste
      if (event.key === 'Escape') {
        if (treatmentDropdownOpen) {
          setTreatmentDropdownOpen(false);
        }
        if (practiceDropdownOpen) {
          setPracticeDropdownOpen(false);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [treatmentDropdownOpen, practiceDropdownOpen]);

  // Update highlight bar position
  useEffect(() => {
    // Highlight-Box-Logik: Wenn Kontakt gehovt/fokussiert, keine Box anzeigen
    if (contactHovered) {
      setHighlightBoxStyle((s) => ({ ...s, opacity: 0 }));
      return;
    }
    // Sonst wie gehabt
    const idx = hoverIdx !== null ? hoverIdx : dropdownOpenIdx !== null ? dropdownOpenIdx : activeIdx;
    const el = linkTextRefs.current[idx];
    if (el && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      
      // Verwende requestAnimationFrame für flüssigere Animationen
      requestAnimationFrame(() => {
        setHighlightBoxStyle({
          left: elRect.left - navRect.left - 8,
          top: elRect.top - navRect.top - 4,
          width: elRect.width + 16,
          height: elRect.height + 8,
          opacity: 1,
          scale: 1,
        });
      });
    } else {
      setHighlightBoxStyle((s) => ({ ...s, opacity: 0 }));
    }
  }, [activeIdx, hoverIdx, dropdownOpenIdx, contactHovered]);

  // 2. Scrollspy-Logik mit Intersection Observer
  useEffect(() => {
    const sectionIds = NAV_LINKS.flatMap(link => link.sections);
    let ticking = false;
    let lastActive = activeIdx;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let bestSectionId: string | null = null;
          let bestSectionTop = Number.POSITIVE_INFINITY;
          for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (!el) continue;
            const rect = el.getBoundingClientRect();
            if (rect.top <= MENU_HEIGHT && rect.bottom > MENU_HEIGHT) {
              if (rect.top < bestSectionTop) {
                bestSectionTop = rect.top;
                bestSectionId = id;
              }
            }
          }
          if (!bestSectionId) {
            for (const id of sectionIds) {
              const el = document.getElementById(id);
              if (!el) continue;
              const rect = el.getBoundingClientRect();
              if (rect.top > MENU_HEIGHT) {
                bestSectionId = id;
                break;
              }
            }
          }
          if (!bestSectionId) bestSectionId = sectionIds[sectionIds.length - 1];

          // Finde den Index des Hauptmenüpunkts, dessen sections-Array die Section enthält
          const foundIdx = NAV_LINKS.findIndex(link => link.sections.includes(bestSectionId!));
          if (foundIdx !== -1 && foundIdx !== lastActive) {
            setActiveIdx(foundIdx);
            lastActive = foundIdx;
            // Subtile Skalierung beim Scrollen
            setHighlightBoxStyle(prev => ({ ...prev, scale: 1.03 }));
            setTimeout(() => {
              setHighlightBoxStyle(prev => ({ ...prev, scale: 1 }));
            }, 300);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Highlight-Box erst anzeigen, wenn Position berechnet ist
  useEffect(() => {
    if (!boxReady && highlightBoxStyle.width > 0 && highlightBoxStyle.height > 0) {
      setBoxReady(true);
      // Sofort Animation aktivieren für smooth Verhalten
      setBoxInitial(false);
    }
  }, [highlightBoxStyle.width, highlightBoxStyle.height, boxReady]);

  // Synchronisiere delayedBoxIdx nach Animation
  useEffect(() => {
    if (contactHovered) {
      setDelayedBoxIdx(-1);
      return;
    }
    const idx = hoverIdx !== null ? hoverIdx : dropdownOpenIdx !== null ? dropdownOpenIdx : activeIdx;
    if (delayedBoxIdx !== idx) {
      const timeout = setTimeout(() => setDelayedBoxIdx(idx), ANIMATION_DURATION);
      return () => clearTimeout(timeout);
    }
  }, [activeIdx, hoverIdx, dropdownOpenIdx, contactHovered]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
    setTreatmentDropdownOpen(false);
    setPracticeDropdownOpen(false);
  };

  // MouseEnter/Leave für Hauptmenüpunkte
  const handleMouseEnter = (idx: number) => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setHoverIdx(idx);
    // Subtile Skalierung beim Hover
    setHighlightBoxStyle(prev => ({ ...prev, scale: 1.05 }));
  };
  const handleMouseLeave = (idx: number) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      // Box bleibt, wenn Dropdown offen ist
      if (dropdownOpenIdx !== idx) {
        setHoverIdx(null);
        // Skalierung zurücksetzen
        setHighlightBoxStyle(prev => ({ ...prev, scale: 1 }));
      }
    }, 80); // Reduziert von 120ms auf 80ms für schnellere Reaktion
  };

  // Dropdown-Open-Handling
  const openDropdown = (idx: number) => {
    setDropdownOpenIdx(idx);
    setHoverIdx(idx);
    // Subtile Skalierung beim Dropdown-Öffnen
    setHighlightBoxStyle(prev => ({ ...prev, scale: 1.02 }));
  };
  const closeDropdown = () => {
    setDropdownOpenIdx(null);
    setHoverIdx(null);
    // Skalierung zurücksetzen
    setHighlightBoxStyle(prev => ({ ...prev, scale: 1 }));
  };

  // Hilfsfunktion: Gibt true zurück, wenn der Kasten auf diesem Index ist
  const isBoxOnIdx = (idx: number) => {
    if (contactHovered) return false;
    if (hoverIdx !== null) return hoverIdx === idx;
    if (dropdownOpenIdx !== null) return dropdownOpenIdx === idx;
    return activeIdx === idx;
  };
  // Schriftfarbe: Nur bei delayedBoxIdx
  const isTextWhite = (idx: number) => isBoxOnIdx(idx) && delayedBoxIdx === idx;

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-accent2 shadow-sm"
      style={{
        backgroundImage: "url('/navigator_background.png')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Semi-transparent Overlay für bessere Lesbarkeit - außerhalb des containers */}
      <div className="absolute inset-0 bg-white/5"></div>
      <div className="w-full px-4 sm:px-6 flex items-center justify-between h-16 relative z-10">
        <div className="relative z-20 flex items-center justify-between w-full h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer select-none" onClick={() => scrollToSection('willkommen')}>
            <span className="text-white font-semibold text-xl tracking-wide">
              Praxis <span className="text-primary">Navratil</span>
            </span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center relative" ref={navRef}>
            {/* Sliding Highlight Box */}
            <div
              className={
                "absolute bg-accent2/90 rounded-xl shadow-lg z-0"
              }
              style={{
                left: highlightBoxStyle.left,
                top: highlightBoxStyle.top,
                width: highlightBoxStyle.width,
                height: highlightBoxStyle.height,
                opacity: boxReady ? highlightBoxStyle.opacity : 0,
                transform: `scale(${highlightBoxStyle.scale})`,
                pointerEvents: 'none',
                transition: `
                  left 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                  top 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                  width 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                  height 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                  opacity 0.15s ease-out,
                  transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)
                `,
              }}
              aria-hidden="true"
            />
            {/* Navigation Links */}
            <button
              ref={el => linkRefs.current[0] = el}
              onClick={() => { scrollToSection('person'); setActiveIdx(0); }}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
              onFocus={() => handleMouseEnter(0)}
              onBlur={() => handleMouseLeave(0)}
              className={`relative bg-transparent border-none outline-none shadow-none text-base font-medium px-6 h-16 flex items-center focus:outline-none z-10`}
              tabIndex={0}
            >
              <span ref={el => linkTextRefs.current[0] = el} className={`relative flex items-center transition-colors duration-200 ${isTextWhite(0) ? 'text-white font-semibold' : 'text-gray-800'}`}>Über mich</span>
            </button>
            <div className="relative" ref={treatmentRef}>
              <button
                ref={el => linkRefs.current[1] = el}
                onClick={() => {
                  setTreatmentDropdownOpen((open) => {
                    if (!open) setPracticeDropdownOpen(false);
                    setActiveIdx(1);
                    return !open;
                  });
                }}
                onMouseEnter={() => { handleMouseEnter(1); openDropdown(1); }}
                onMouseLeave={() => { handleMouseLeave(1); closeDropdown(); }}
                onFocus={() => handleMouseEnter(1)}
                onBlur={() => handleMouseLeave(1)}
                className={`relative flex items-center bg-transparent border-none outline-none shadow-none text-base font-medium px-6 h-16 focus:outline-none z-10`}
                tabIndex={0}
              >
                <span
                  ref={el => linkTextRefs.current[1] = el}
                  className={`relative flex items-center transition-colors duration-200 ${isBoxOnIdx(1) ? 'text-white font-semibold' : 'text-gray-800'}`}
                >Behandlungsangebot
                <ChevronDown className={`w-4 h-4 transition-transform ml-1 ${treatmentDropdownOpen ? 'rotate-180' : ''} ${isTextWhite(1) ? 'text-white' : 'text-gray-500'}`} />
                </span>
              </button>
              {treatmentDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-accent2/30 rounded-2xl shadow-xl py-2 min-w-[220px] z-50 animate-dropdown"
                  onMouseEnter={() => openDropdown(1)}
                  onMouseLeave={closeDropdown}
                >
                  <button onClick={() => { scrollToSection('angebot'); setActiveIdx(1); setTreatmentDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-gray-800 hover:bg-accent2/10 hover:text-accent2 transition-colors text-base font-medium rounded-xl">
                    Angebot
                  </button>
                  <button onClick={() => { scrollToSection('behandlungskonzept'); setActiveIdx(1); setTreatmentDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-gray-800 hover:bg-accent2/10 hover:text-accent2 transition-colors text-base font-medium rounded-xl">
                    Behandlungskonzept
                  </button>
                  <button onClick={() => { scrollToSection('behandlungsspektrum'); setActiveIdx(1); setTreatmentDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-gray-800 hover:bg-accent2/10 hover:text-accent2 transition-colors text-base font-medium rounded-xl">
                    Spektrum
                  </button>
                  <button onClick={() => { scrollToSection('methoden'); setActiveIdx(1); setTreatmentDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-gray-800 hover:bg-accent2/10 hover:text-accent2 transition-colors text-base font-medium rounded-xl">
                    Methoden
                  </button>
                </div>
              )}
            </div>
            <div className="relative" ref={practiceRef}>
              <button
                ref={el => linkRefs.current[2] = el}
                onClick={() => {
                  setPracticeDropdownOpen((open) => {
                    if (!open) setTreatmentDropdownOpen(false);
                    setActiveIdx(2);
                    return !open;
                  });
                }}
                onMouseEnter={() => { handleMouseEnter(2); openDropdown(2); }}
                onMouseLeave={() => { handleMouseLeave(2); closeDropdown(); }}
                onFocus={() => handleMouseEnter(2)}
                onBlur={() => handleMouseLeave(2)}
                className={`relative flex items-center bg-transparent border-none outline-none shadow-none text-base font-medium px-6 h-16 focus:outline-none z-10`}
                tabIndex={0}
              >
                <span
                  ref={el => linkTextRefs.current[2] = el}
                  className={`relative flex items-center transition-colors duration-200 ${isBoxOnIdx(2) ? 'text-white font-semibold' : 'text-gray-800'}`}
                >Praxis
                <ChevronDown className={`w-4 h-4 transition-transform ml-1 ${practiceDropdownOpen ? 'rotate-180' : ''} ${isBoxOnIdx(2) ? 'text-white' : 'text-gray-500'}`} />
                </span>
              </button>
              {practiceDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-accent2/30 rounded-2xl shadow-xl py-2 min-w-[180px] z-50 animate-dropdown"
                  onMouseEnter={() => openDropdown(2)}
                  onMouseLeave={closeDropdown}
                >
                  <button onClick={() => { scrollToSection('galerie'); setActiveIdx(2); setPracticeDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-gray-800 hover:bg-accent2/10 hover:text-accent2 transition-colors text-base font-medium rounded-xl">
                    Galerie
                  </button>
                  <button onClick={() => { scrollToSection('standort'); setActiveIdx(2); setPracticeDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-gray-800 hover:bg-accent2/10 hover:text-accent2 transition-colors text-base font-medium rounded-xl">
                    Anfahrt
                  </button>
                </div>
              )}
            </div>
            <button
              ref={el => linkRefs.current[3] = el}
              onClick={() => { scrollToSection('faq'); setActiveIdx(3); }}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={() => handleMouseLeave(3)}
              onFocus={() => handleMouseEnter(3)}
              onBlur={() => handleMouseLeave(3)}
              className={`relative bg-transparent border-none outline-none shadow-none text-base font-medium px-6 h-16 flex items-center focus:outline-none z-10`}
              tabIndex={0}
            >
              <span ref={el => linkTextRefs.current[3] = el} className={`relative flex items-center transition-colors duration-200 ${isBoxOnIdx(3) ? 'text-white font-semibold' : 'text-gray-800'}`}>FAQ</span>
            </button>
            <Button
              onClick={() => scrollToSection('kontakt')}
              onMouseEnter={() => setContactHovered(true)}
              onMouseLeave={() => setContactHovered(false)}
              onFocus={() => setContactHovered(true)}
              onBlur={() => setContactHovered(false)}
              className="bg-yellow-400 text-[#222222] hover:bg-yellow-300 border border-yellow-400 font-semibold px-6 py-2 rounded-full shadow transition-colors text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              Kontakt
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Menü öffnen/schließen">
            {isOpen ? <X className="w-7 h-7 text-gray-800" /> : <Menu className="w-7 h-7 text-gray-800" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="py-6 px-6 shadow-lg animate-fade-in flex flex-col gap-4">
            <button onClick={() => scrollToSection('person')} className="text-left text-gray-800 hover:text-yellow-700 text-lg font-medium px-2 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 transition-colors">
              Über mich
            </button>
            
            {/* Behandlungsangebot Gruppe */}
            <div className="border-l-4 border-yellow-200 pl-4">
              <div className="text-sm font-semibold text-yellow-700 mb-2">Behandlungsangebot</div>
              <div className="flex flex-col gap-1">
                <button onClick={() => scrollToSection('angebot')} className="text-left text-gray-700 hover:text-yellow-700 text-base font-medium px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 transition-colors">
                  Angebot
                </button>
                <button onClick={() => scrollToSection('behandlungskonzept')} className="text-left text-gray-700 hover:text-yellow-700 text-base font-medium px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 transition-colors">
                  Behandlungskonzept
                </button>
                <button onClick={() => scrollToSection('behandlungsspektrum')} className="text-left text-gray-700 hover:text-yellow-700 text-base font-medium px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 transition-colors">
                  Spektrum
                </button>
                <button onClick={() => scrollToSection('methoden')} className="text-left text-gray-700 hover:text-yellow-700 text-base font-medium px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 transition-colors">
                  Methoden
                </button>
              </div>
            </div>
            
            {/* Praxis Gruppe */}
            <div className="border-l-4 border-yellow-200 pl-4">
              <div className="text-sm font-semibold text-yellow-700 mb-2">Praxis</div>
              <div className="flex flex-col gap-1">
                <button onClick={() => scrollToSection('galerie')} className="text-left text-gray-700 hover:text-yellow-700 text-base font-medium px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 transition-colors">
                  Galerie
                </button>
                <button onClick={() => scrollToSection('standort')} className="text-left text-gray-700 hover:text-yellow-700 text-base font-medium px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 transition-colors">
                  Anfahrt
                </button>
              </div>
            </div>
            
            <button onClick={() => scrollToSection('faq')} className="text-left text-gray-800 hover:text-yellow-700 text-lg font-medium px-2 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 transition-colors">
              FAQ
            </button>
            <Button onClick={() => scrollToSection('kontakt')} className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-full shadow text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400">
              Kontakt
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

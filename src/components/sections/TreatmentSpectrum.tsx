import { useState, useRef, useEffect } from "react";

const spectrumData = [
  {
    title: 'Ängste',
    details: [
      'Spezifische Ängste',
      'Schul-, Leistungs-, Prüfungsangst',
      'Trennungsangst',
      'Soziale Ängste',
    ],
  },
  {
    title: 'Konzentration & Aufmerksamkeit',
    details: [
      'Konzentrationsschwierigkeiten',
      'ADHS/ADS',
      'Leistungsprobleme',
      'Organisation und Strukturierung',
    ],
  },
  {
    title: 'Impuls & Wut',
    details: [
      'Impulsdurchbrüche',
      'Wutanfälle',
      'Selbstverletzendes Verhalten',
      'Geschwister-Rivalität',
      'Selbstregulation',
      'Umgang mit Frustration',
    ],
  },
  {
    title: 'Einnässen & Einkoten',
    details: [
      'Enuresis',
      'Enkopresis',
      'Sauberkeitserziehung',
      'Psychosomatische Ursachen',
    ],
  },
  {
    title: 'Bindung & Beziehung',
    details: [
      'Bindungsstörungen',
      'Unsichere Bindungsmuster',
      'Schwierigkeiten in sozialen Beziehungen',
      'Trennungsängste',
      'Förderung von Beziehungsfähigkeit',
    ],
  },
  {
    title: 'Traurigkeit & Rückzug',
    details: [
      'Depressive Verstimmung',
      'Sozialer Rückzug',
      'Antriebslosigkeit',
      'Verlust- und Trauerbewältigung',
    ],
  },
  {
    title: 'Lernen & Schule',
    details: [
      'Lernschwierigkeiten',
      'Schulverweigerung',
      'Prüfungsangst',
      'Motivationsprobleme',
    ],
  },
  {
    title: 'Essen & Körper',
    details: [
      'Essstörungen',
      'Körperbildprobleme',
      'Gewichtsprobleme',
      'Selbstwahrnehmung',
    ],
  },
  {
    title: 'Hochsensibilität',
    details: [
      'Reizüberflutung und Stressmanagement',
      'Umgang mit starken Emotionen',
      'Selbstwert und Abgrenzung',
      'Sensibilität im Alltag',
      'Ressourcenorientierte Strategien',
    ],
  },
  {
    title: 'Gehirn & Gesundheit',
    details: [
      'Hirnorganische Verletzungen',
      'SHT, Post-Covid, Schlaganfall',
      'Epilepsie, Bestrahlung',
      'Kognitive Entwicklung',
      'Konzentrationsprobleme',
    ],
  },
  {
    title: 'Schlaf & Träume',
    details: [
      'Einschlafprobleme',
      'Durchschlafprobleme',
      'Albträume',
      'Schlafhygiene',
    ],
  },
  {
    title: 'Regulation (Kleinkind)',
    details: [
      'Emotionsregulation im frühen Kindesalter',
      'Trotzverhalten und Wutanfälle',
      'Schlaf- und Essprobleme',
      'Bindungsfördernde Maßnahmen',
      'Unterstützung der Eltern-Kind-Interaktion',
    ],
  },
  {
    title: 'Körperliche Beschwerden',
    details: [
      'Bauchschmerzen',
      'Kopfschmerzen',
      'Psychosomatische Symptome',
      'Abklärung organischer Ursachen',
    ],
  },
  {
    title: 'Trauma & Belastung',
    details: [
      'Akute Belastungsreaktionen',
      'Posttraumatische Belastungsstörung',
      'Verarbeitung belastender Erlebnisse',
      'Stabilisierung',
    ],
  },
  {
    title: 'Zwänge',
    details: [
      'Zwangsgedanken',
      'Zwangshandlungen',
      'Rituale',
      'Umgang mit Zwängen',
    ],
  },
];

// Neue Farblogik nach Cluster, aber keine sichtbaren Gruppen/Labels
const bubbleColors = [
  // Emotion & Affekt (Gelb/Orange)
  'bg-primary-light', // Ängste
  'bg-accent2-light', // Konzentration & Aufmerksamkeit
  'bg-primary', // Impuls & Wut
  'bg-secondary-light', // Einnässen & Einkoten
  // Entwicklung & Beziehung (Blaugrün)
  'bg-accent3-light', // Bindung & Beziehung
  'bg-primary-dark', // Traurigkeit & Rückzug
  'bg-primary-light', // Lernen & Schule
  // Körper & Gesundheit (Violett)
  'bg-accent-light', // Essen & Körper
  'bg-primary-light', // Hochsensibilität
  'bg-accent-light', // Gehirn & Gesundheit
  'bg-secondary-light', // Regulation (Kleinkind)
  'bg-accent-light', // Schlaf & Träume
  'bg-secondary-light', // Körperliche Beschwerden
  // Belastung & Trauma (Orange/Rot)
  'bg-accent3', // Trauma & Belastung
  'bg-primary-dark' // Zwänge
];

const TreatmentSpectrum = () => {
  const [openPopover, setOpenPopover] = useState<number | null>(null);
  const popoverRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  // Close popover on outside click or Escape
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (openPopover !== null) {
        const ref = popoverRefs.current[openPopover];
        if (ref && !ref.contains(e.target as Node)) {
          setOpenPopover(null);
        }
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenPopover(null);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [openPopover]);

  // Hilfsfunktionen für Hover
  const handleMouseEnter = (idx: number) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setOpenPopover(idx);
  };
  const handleMouseLeave = () => {
    // Leichtes Delay, damit das Popover nicht sofort verschwindet
    hoverTimeout.current = setTimeout(() => setOpenPopover(null), 120);
  };

  return (
    <section id="behandlungsspektrum" className="py-20 bg-paper">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Behandlungs-Spektrum</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Nach störungsspezifischer Diagnostik werden folgende Themen behandelt:
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {spectrumData.map((item, idx) => (
            <div
              key={item.title}
              className="relative flex flex-col items-center"
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
              onTouchEnd={(e) => { e.preventDefault(); setOpenPopover(openPopover === idx ? null : idx); }}
            >
              <button
                type="button"
                aria-haspopup="dialog"
                aria-expanded={openPopover === idx}
                aria-controls={`popover-${idx}`}
                tabIndex={0}
                className={`w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 flex items-center justify-center rounded-full shadow-lg text-center text-xs sm:text-sm md:text-base font-semibold text-gray-800 cursor-pointer transition-transform duration-200 hover:scale-105 focus:scale-105 outline-none break-words leading-tight ${bubbleColors[idx % bubbleColors.length]}`}
                onClick={(e) => { e.preventDefault(); setOpenPopover(openPopover === idx ? null : idx); }}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setOpenPopover(openPopover === idx ? null : idx);
                  }
                }}
              >
                {item.title}
              </button>
              {/* Popover: nur anzeigen, wenn Maus direkt über Bubble ist, nicht kopierbar */}
              {openPopover === idx && (
                <div
                  id={`popover-${idx}`}
                  className="absolute z-20 left-1/2 -translate-x-1/2 -top-4 md:-top-6 min-w-[200px] max-w-sm sm:max-w-md bg-white bg-opacity-95 border border-gray-200 shadow-xl rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm text-gray-800 select-none pointer-events-none text-left leading-relaxed transition-all duration-200 opacity-100 scale-100"
                  style={{ userSelect: 'none' }}
                >
                  {item.details && item.details.length > 0 ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>Individuelle Beratung und Begleitung zu diesem Thema – gemeinsam finden wir passende Wege.</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentSpectrum;

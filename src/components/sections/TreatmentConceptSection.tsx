import { Brain, Users, Layers, Activity } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { PENTAGON_COLORS, BRAND_COLORS } from "@/utils/colors";

const concepts = [
  {
    key: "verhaltenstherapie",
    title: "Verhaltens-Therapie",
    icon: import.meta.env.BASE_URL + 'verhaltenstherapie_version_2.png',
    color: "bg-primary-light border-primary",
    iconAlt: "Symbol Verhaltenstherapie",
    description: (
      <>Die Verhaltenstherapie hilft, ungünstige Denk- und Verhaltensmuster zu erkennen und gezielt zu verändern. Sie ist wissenschaftlich sehr gut belegt und praxisnah.</>
    )
  },
  {
    key: "systemische-therapie",
    title: "Familien-Therapie",
    icon: import.meta.env.BASE_URL + 'systemischepsychologie.png',
    color: "bg-accent2-light border-accent2",
    iconAlt: "Symbol Systemische Therapie",
    description: (
      <>Die Systemische Therapie betrachtet Probleme im Zusammenhang mit Beziehungen und dem sozialen Umfeld. Sie stärkt Ressourcen und fördert neue Sichtweisen im System (z.B. Familie).</>
    )
  },
  {
    key: "tiefenpsychologisch",
    title: "Tiefenpsychologische Psychotherapie",
    icon: import.meta.env.BASE_URL + 'tiefenpsychologie_version_2.png',
    color: "bg-accent-light border-accent",
    iconAlt: "Symbol Tiefenpsychologisch fundierte Psychotherapie",
    description: (
      <>Hier stehen unbewusste Konflikte und biografische Erfahrungen im Mittelpunkt. Ziel ist es, innere Muster zu verstehen und zu verändern.</>
    )
  },
  {
    key: "neuropsychologisch",
    title: "Neuropsychologische Therapie",
    icon: import.meta.env.BASE_URL + 'neuropsychologie.png',
    color: "bg-secondary-light border-secondary",
    iconAlt: "Symbol Neuropsychologische Therapie",
    description: (
      <>Die Neuropsychologie verbindet psychische Prozesse mit den Funktionen des Gehirns. Sie hilft z.B. bei Aufmerksamkeits-, Gedächtnis- oder Sprachstörungen nach Erkrankungen oder Unfällen.</>
    )
  },
  {
    key: "traumatherapie",
    title: "Trauma-Therapie",
    icon: import.meta.env.BASE_URL + 'traumatherapie.png',
    color: "bg-accent3-light border-accent3",
    iconAlt: "Symbol Traumatherapie",
    description: (
      <>Die Traumatherapie unterstützt bei der Verarbeitung belastender Erfahrungen. Mit speziellen Methoden wie EMDR helfen wir dabei, traumatische Erinnerungen zu integrieren und Heilung zu fördern.</>
    )
  }
];

const circleRadius = 60;
const svgWidth = 800;
const svgHeight = 600;
const centerX = svgWidth / 2;
const centerY = svgHeight / 2;
const pentagonRadius = 180;

// Pentagon-Koordinaten berechnen (oben beginnend, im Uhrzeigersinn)
const nodePositions = [
  { x: centerX + pentagonRadius * Math.sin(0 * 2 * Math.PI / 5), y: centerY - pentagonRadius * Math.cos(0 * 2 * Math.PI / 5) }, // Verhaltenstherapie (oben)
  { x: centerX + pentagonRadius * Math.sin(1 * 2 * Math.PI / 5), y: centerY - pentagonRadius * Math.cos(1 * 2 * Math.PI / 5) }, // Systemische Therapie (rechts oben)
  { x: centerX + pentagonRadius * Math.sin(2 * 2 * Math.PI / 5), y: centerY - pentagonRadius * Math.cos(2 * 2 * Math.PI / 5) }, // Tiefenpsychologisch (rechts unten)
  { x: centerX + pentagonRadius * Math.sin(3 * 2 * Math.PI / 5), y: centerY - pentagonRadius * Math.cos(3 * 2 * Math.PI / 5) }, // Neuropsychologisch (links unten)
  { x: centerX + pentagonRadius * Math.sin(4 * 2 * Math.PI / 5), y: centerY - pentagonRadius * Math.cos(4 * 2 * Math.PI / 5) }  // Traumatherapie (links oben)
];

const TreatmentConceptSection = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const openMetaRef = useRef<{ y: number; t: number }>({ y: 0, t: 0 });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setHovered(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Close tooltip on scroll for mobile (only when open), with threshold to avoid immediate close
  useEffect(() => {
    if (!hovered) return;
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    if (isDesktop) return;
    const onScroll = () => {
      const dy = Math.abs(window.scrollY - openMetaRef.current.y);
      const dt = Date.now() - openMetaRef.current.t;
      if (dt > 150 && dy > 24) setHovered(null);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [hovered]);

  // Close tooltip when tapping elsewhere on mobile
  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    if (isDesktop || !hovered) return;
    
    const handleTouchStart = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      // Don't close if tapping on a concept circle or tooltip
      if (target.closest('[data-concept-touch]') || target.closest('[data-tooltip]')) {
        return;
      }
      setHovered(null);
    };
    
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    return () => document.removeEventListener('touchstart', handleTouchStart);
  }, [hovered]);

  return (
    <section id="behandlungskonzept" className="py-20 bg-[#fff8ed]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Behandlungskonzept</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Mein psychotherapeutisches Behandlungskonzept basiert auf fünf wissenschaftlich anerkannten Verfahren:
          </p>
        </div>
        {/* Desktop (interactive original) */}
        <div className="relative max-w-[800px] w-full mx-auto h-[600px] hidden md:block">
          {/* SVG-Linien */}
          <svg
            width={svgWidth}
            height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="absolute left-0 top-0 w-full h-full pointer-events-none"
          >
            {/* Pentagon-Linien */}
            <line x1={nodePositions[0].x} y1={nodePositions[0].y} x2={nodePositions[1].x} y2={nodePositions[1].y} stroke={PENTAGON_COLORS[0]} strokeWidth="6" />
            <line x1={nodePositions[1].x} y1={nodePositions[1].y} x2={nodePositions[2].x} y2={nodePositions[2].y} stroke={PENTAGON_COLORS[1]} strokeWidth="6" />
            <line x1={nodePositions[2].x} y1={nodePositions[2].y} x2={nodePositions[3].x} y2={nodePositions[3].y} stroke={PENTAGON_COLORS[2]} strokeWidth="6" />
            <line x1={nodePositions[3].x} y1={nodePositions[3].y} x2={nodePositions[4].x} y2={nodePositions[4].y} stroke={PENTAGON_COLORS[3]} strokeWidth="6" />
            <line x1={nodePositions[4].x} y1={nodePositions[4].y} x2={nodePositions[0].x} y2={nodePositions[0].y} stroke={PENTAGON_COLORS[4]} strokeWidth="6" />
            {/* Verbindungslinien zur Mitte */}
            <line x1={nodePositions[0].x} y1={nodePositions[0].y} x2={centerX} y2={centerY} stroke={`${PENTAGON_COLORS[0]}22`} strokeWidth="3" />
            <line x1={nodePositions[1].x} y1={nodePositions[1].y} x2={centerX} y2={centerY} stroke={`${PENTAGON_COLORS[1]}22`} strokeWidth="3" />
            <line x1={nodePositions[2].x} y1={nodePositions[2].y} x2={centerX} y2={centerY} stroke={`${PENTAGON_COLORS[2]}22`} strokeWidth="3" />
            <line x1={nodePositions[3].x} y1={nodePositions[3].y} x2={centerX} y2={centerY} stroke={`${PENTAGON_COLORS[3]}22`} strokeWidth="3" />
            <line x1={nodePositions[4].x} y1={nodePositions[4].y} x2={centerX} y2={centerY} stroke={`${PENTAGON_COLORS[4]}22`} strokeWidth="3" />
          </svg>
          {/* Knoten, Labels, Tooltips als absolut positionierte Divs */}
          {concepts.map((concept, idx) => {
            const { x, y } = nodePositions[idx];
            const IconSrc = concept.icon;
            const IconAlt = concept.iconAlt;
            // Label-Position: dynamisch für Pentagon
            const labelStyle = {
              left: x,
              width: 200,
              transform: 'translateX(-50%)',
              position: 'absolute',
              zIndex: 3,
              top: idx === 0 ? y - circleRadius - 38 : // oben
                   idx === 1 || idx === 4 ? y - circleRadius - 38 : // rechts oben, links oben  
                   y + circleRadius + 12 // unten für 2,3
            };
            // Tooltip-Position: individuell je nach Kreis
            let tooltipStyle: React.CSSProperties = {
              position: 'absolute',
              width: 260,
              zIndex: 10,
            };
            if (idx === 0) {
              // Oben links: links neben dem Kreis, leicht nach oben
              tooltipStyle.left = x - circleRadius - 280;
              tooltipStyle.top = y - 30;
            } else if (idx === 1) {
              // Oben rechts: rechts neben dem Kreis, leicht nach oben
              tooltipStyle.left = x + circleRadius + 20;
              tooltipStyle.top = y - 30;
            } else if (idx === 2) {
              // Unten rechts: rechts neben dem Kreis, leicht nach oben
              tooltipStyle.left = x + circleRadius + 20;
              tooltipStyle.top = y - 30;
            } else {
              // Unten links: links neben dem Kreis, leicht nach oben
              tooltipStyle.left = x - circleRadius - 280;
              tooltipStyle.top = y - 30;
            }
            return (
              <div key={concept.key}>
                {/* Label */}
                <div style={labelStyle} className="font-semibold text-lg md:text-xl text-gray-800 text-center leading-tight select-none pointer-events-none">
                  {concept.title}
                </div>
                {/* Gemeinsamer Wrapper für Hover-Events */}
                <div
                  onMouseEnter={() => setHovered(concept.key)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ position: 'static' }}
                >
                  {/* Kreis (absolut positioniert) */}
                  <div
                    style={{
                      position: 'absolute',
                      left: x - circleRadius,
                      top: y - circleRadius,
                      width: circleRadius * 2,
                      height: circleRadius * 2,
                      borderRadius: '50%',
                      boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)',
                      borderWidth: 4,
                      borderStyle: 'solid',
                      cursor: 'pointer',
                      background: BRAND_COLORS.white,
                      zIndex: 5,
                      overflow: 'hidden',
                    }}
                    className={`${concept.color} transition-transform duration-200 hover:scale-105`}
                  >
                    <img
                      src={IconSrc}
                      alt={IconAlt}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  {/* Tooltip (absolut zum Container) */}
                  {hovered === concept.key && (
                    <div style={tooltipStyle} className="bg-white/95 border border-gray-200 rounded-2xl shadow-xl p-6 text-gray-800 text-base text-left animate-fade-in">
                      <div className="font-semibold mb-2 text-xl">{concept.title}</div>
                      <div>{concept.description}</div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile (interaktives Pentagon mit Tooltips) */}
        <div className="block md:hidden max-w-[800px] w-full mx-auto relative">
          {/* SVG-Linien */}
          <svg
            width={svgWidth}
            height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full h-auto"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Pentagon-Linien */}
            <line x1={nodePositions[0].x} y1={nodePositions[0].y} x2={nodePositions[1].x} y2={nodePositions[1].y} stroke={PENTAGON_COLORS[0]} strokeWidth="4" />
            <line x1={nodePositions[1].x} y1={nodePositions[1].y} x2={nodePositions[2].x} y2={nodePositions[2].y} stroke={PENTAGON_COLORS[1]} strokeWidth="4" />
            <line x1={nodePositions[2].x} y1={nodePositions[2].y} x2={nodePositions[3].x} y2={nodePositions[3].y} stroke={PENTAGON_COLORS[2]} strokeWidth="4" />
            <line x1={nodePositions[3].x} y1={nodePositions[3].y} x2={nodePositions[4].x} y2={nodePositions[4].y} stroke={PENTAGON_COLORS[3]} strokeWidth="4" />
            <line x1={nodePositions[4].x} y1={nodePositions[4].y} x2={nodePositions[0].x} y2={nodePositions[0].y} stroke={PENTAGON_COLORS[4]} strokeWidth="4" />
            {/* Verbindungslinien zur Mitte */}
            <line x1={nodePositions[0].x} y1={nodePositions[0].y} x2={centerX} y2={centerY} stroke={`${PENTAGON_COLORS[0]}22`} strokeWidth="2" />
            <line x1={nodePositions[1].x} y1={nodePositions[1].y} x2={centerX} y2={centerY} stroke={`${PENTAGON_COLORS[1]}22`} strokeWidth="2" />
            <line x1={nodePositions[2].x} y1={nodePositions[2].y} x2={centerX} y2={centerY} stroke={`${PENTAGON_COLORS[2]}22`} strokeWidth="2" />
            <line x1={nodePositions[3].x} y1={nodePositions[3].y} x2={centerX} y2={centerY} stroke={`${PENTAGON_COLORS[3]}22`} strokeWidth="2" />
            <line x1={nodePositions[4].x} y1={nodePositions[4].y} x2={centerX} y2={centerY} stroke={`${PENTAGON_COLORS[4]}22`} strokeWidth="2" />
          </svg>
          
          {/* Mobile Kreise und Labels - absolut positioniert mit korrekter Skalierung */}
          <div className="absolute inset-0">
            {concepts.map((concept, idx) => {
              const { x, y } = nodePositions[idx];
              // Responsive Skalierung basierend auf Container-Breite
              const containerWidth = 320; // Standard mobile Breite
              const scaleFactor = containerWidth / svgWidth;
              const actualX = x * scaleFactor;
              const actualY = y * scaleFactor;
              const actualRadius = circleRadius * scaleFactor * 0.8; // Etwas kleiner für Mobile
              
              return (
                <div key={concept.key}>
                  {/* Label mit mehr Platz und Zeilenumbrüchen */}
                  <div 
                    style={{
                      position: 'absolute',
                      left: `${(x / svgWidth) * 100}%`,
                      width: '160px',
                      transform: 'translateX(-50%)',
                      top: idx === 0 || idx === 1 || idx === 4 
                        ? `${((y - circleRadius - 70) / svgHeight) * 100}%`
                        : `${((y + circleRadius + 30) / svgHeight) * 100}%`,
                      zIndex: 3,
                    }}
                    className="font-semibold text-sm text-gray-800 text-center leading-tight select-none pointer-events-none"
                  >
                    {concept.title.includes('Tiefenpsychologische') ? (
                      <>
                        Tiefenpsychologische<br />
                        Psychotherapie
                      </>
                    ) : concept.title.includes('Neuropsychologische') ? (
                      <>
                        Neuropsychologische<br />
                        Therapie
                      </>
                    ) : (
                      concept.title
                    )}
                  </div>
                  
                  {/* Kreis mit Tap-Event - größer und besser positioniert */}
                  <div
                    style={{
                      position: 'absolute',
                      left: `${(x / svgWidth) * 100}%`,
                      top: `${(y / svgHeight) * 100}%`,
                      width: '64px',
                      height: '64px',
                      transform: 'translate(-50%, -50%)',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      zIndex: 5,
                    }}
                    data-concept-touch
                    className={`${concept.color} border-4 shadow-lg transition-all duration-200 ${hovered === concept.key ? 'scale-110' : ''}`}
                    style={{
                      position: 'absolute',
                      left: `${(x / svgWidth) * 100}%`,
                      top: `${(y / svgHeight) * 100}%`,
                      width: '72px',
                      height: '72px',
                      transform: 'translate(-50%, -50%)',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      zIndex: 5,
                      backgroundColor: BRAND_COLORS.white
                    }}
                    onClick={() => setHovered(hovered === concept.key ? null : concept.key)}
                    onTouchStart={(e) => {
                      e.preventDefault();
                      setHovered(concept.key);
                      openMetaRef.current = { y: window.scrollY, t: Date.now() };
                    }}
                  >
                    <img
                      src={concept.icon}
                      alt={concept.iconAlt}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  
                  {/* Mobile Tooltip - intelligent positioniert */}
                  {hovered === concept.key && (
                    <div 
                      style={{
                        position: 'absolute',
                        left: idx === 1 || idx === 2 ? '20px' : // rechte Seite: links positionieren
                              idx === 3 || idx === 4 ? 'calc(100% - 300px)' : // linke Seite: rechts positionieren  
                              '50%', // oben: mittig
                        top: idx === 0 ? `${((y + circleRadius + 80) / svgHeight) * 100}%` : // oben: darunter
                             idx === 2 || idx === 3 ? `${((y - 120) / svgHeight) * 100}%` : // unten: darüber
                             `${(y / svgHeight) * 100}%`, // seiten: daneben
                        transform: idx === 0 ? 'translateX(-50%)' : 'none',
                        width: '280px',
                        maxWidth: 'calc(100vw - 40px)',
                        zIndex: 20,
                      }}
                      data-tooltip
                      className="border border-gray-200 rounded-2xl shadow-xl p-4 text-gray-800 text-sm animate-fade-in"
                      style={{
                        position: 'absolute',
                        left: idx === 1 || idx === 2 ? '20px' : 
                              idx === 3 || idx === 4 ? 'calc(100% - 320px)' : 
                              '50%',
                        top: idx === 0 ? `${((y + circleRadius + 100) / svgHeight) * 100}%` :
                             idx === 2 || idx === 3 ? `${((y - 140) / svgHeight) * 100}%` :
                             `${((y - 60) / svgHeight) * 100}%`,
                        transform: idx === 0 ? 'translateX(-50%)' : 'none',
                        width: '300px',
                        maxWidth: 'calc(100vw - 40px)',
                        zIndex: 20,
                        backgroundColor: BRAND_COLORS.white,
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <div className="font-semibold mb-2 text-base">{concept.title}</div>
                      <div>{concept.description}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentConceptSection; 
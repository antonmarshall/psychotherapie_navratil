import { Brain, Users, Layers, Activity } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const concepts = [
  {
    key: "verhaltenstherapie",
    title: "Verhaltenstherapie",
    icon: import.meta.env.BASE_URL + 'verhaltenstherapie_version_2.png',
    color: "bg-primary-light border-primary",
    iconAlt: "Symbol Verhaltenstherapie",
    description: (
      <>Die Verhaltenstherapie hilft, ungünstige Denk- und Verhaltensmuster zu erkennen und gezielt zu verändern. Sie ist wissenschaftlich sehr gut belegt und praxisnah.</>
    )
  },
  {
    key: "systemische-therapie",
    title: "Systemische Therapie",
    icon: import.meta.env.BASE_URL + 'systemischepsychologie.png',
    color: "bg-accent2-light border-accent2",
    iconAlt: "Symbol Systemische Therapie",
    description: (
      <>Die Systemische Therapie betrachtet Probleme im Zusammenhang mit Beziehungen und dem sozialen Umfeld. Sie stärkt Ressourcen und fördert neue Sichtweisen im System (z.B. Familie).</>
    )
  },
  {
    key: "tiefenpsychologisch",
    title: "Tiefenpsychologisch fundierte Psychotherapie",
    icon: import.meta.env.BASE_URL + 'tiefenpsychologie.png',
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
    title: "Traumatherapie",
    icon: import.meta.env.BASE_URL + 'traumatherapie.png',
    color: "bg-accent3-light border-accent3",
    iconAlt: "Symbol Traumatherapie",
    description: (
      <>Die Traumatherapie unterstützt bei der Verarbeitung belastender Erfahrungen. Mit speziellen Methoden wie EMDR helfen wir dabei, traumatische Erinnerungen zu integrieren und Heilung zu fördern.</>
    )
  }
];

const circleRadius = 60;
const svgWidth = 700;
const svgHeight = 580;
const centerX = svgWidth / 2;
const centerY = svgHeight / 2;
const pentagonRadius = 160;

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
        <div className="relative max-w-[700px] w-full mx-auto h-[580px] hidden md:block">
          {/* SVG-Linien */}
          <svg
            width={svgWidth}
            height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="absolute left-0 top-0 w-full h-full pointer-events-none"
          >
            {/* Pentagon-Linien */}
            <line x1={nodePositions[0].x} y1={nodePositions[0].y} x2={nodePositions[1].x} y2={nodePositions[1].y} stroke="#F6A81A" strokeWidth="6" />
            <line x1={nodePositions[1].x} y1={nodePositions[1].y} x2={nodePositions[2].x} y2={nodePositions[2].y} stroke="#4A6A7B" strokeWidth="6" />
            <line x1={nodePositions[2].x} y1={nodePositions[2].y} x2={nodePositions[3].x} y2={nodePositions[3].y} stroke="#7B4F6A" strokeWidth="6" />
            <line x1={nodePositions[3].x} y1={nodePositions[3].y} x2={nodePositions[4].x} y2={nodePositions[4].y} stroke="#E4572E" strokeWidth="6" />
            <line x1={nodePositions[4].x} y1={nodePositions[4].y} x2={nodePositions[0].x} y2={nodePositions[0].y} stroke="#3E8B5F" strokeWidth="6" />
            {/* Verbindungslinien zur Mitte */}
            <line x1={nodePositions[0].x} y1={nodePositions[0].y} x2={centerX} y2={centerY} stroke="#F6A81A22" strokeWidth="3" />
            <line x1={nodePositions[1].x} y1={nodePositions[1].y} x2={centerX} y2={centerY} stroke="#4A6A7B22" strokeWidth="3" />
            <line x1={nodePositions[2].x} y1={nodePositions[2].y} x2={centerX} y2={centerY} stroke="#7B4F6A22" strokeWidth="3" />
            <line x1={nodePositions[3].x} y1={nodePositions[3].y} x2={centerX} y2={centerY} stroke="#E4572E22" strokeWidth="3" />
            <line x1={nodePositions[4].x} y1={nodePositions[4].y} x2={centerX} y2={centerY} stroke="#3E8B5F22" strokeWidth="3" />
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
                <div style={labelStyle} className="font-semibold text-base text-gray-800 text-center leading-tight select-none pointer-events-none">
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
                      background: 'white',
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

        {/* Mobile (vereinfachte, reine SVG-Grafik) */}
        <div className="block md:hidden max-w-[700px] w-full mx-auto">
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full h-auto"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {nodePositions.map((pos, i) => (
                <clipPath id={`clip-mobile-${i}`} key={`clip-mobile-${i}`}>
                  <circle cx={pos.x} cy={pos.y} r={circleRadius - 6} />
                </clipPath>
              ))}
            </defs>

            <line x1={nodePositions[0].x} y1={nodePositions[0].y} x2={nodePositions[1].x} y2={nodePositions[1].y} stroke="#F6A81A" strokeWidth={6} />
            <line x1={nodePositions[1].x} y1={nodePositions[1].y} x2={nodePositions[2].x} y2={nodePositions[2].y} stroke="#4A6A7B" strokeWidth={6} />
            <line x1={nodePositions[2].x} y1={nodePositions[2].y} x2={nodePositions[3].x} y2={nodePositions[3].y} stroke="#7B4F6A" strokeWidth={6} />
            <line x1={nodePositions[3].x} y1={nodePositions[3].y} x2={nodePositions[4].x} y2={nodePositions[4].y} stroke="#E4572E" strokeWidth={6} />
            <line x1={nodePositions[4].x} y1={nodePositions[4].y} x2={nodePositions[0].x} y2={nodePositions[0].y} stroke="#3E8B5F" strokeWidth={6} />
            <line x1={nodePositions[0].x} y1={nodePositions[0].y} x2={centerX} y2={centerY} stroke="#F6A81A22" strokeWidth={3} />
            <line x1={nodePositions[1].x} y1={nodePositions[1].y} x2={centerX} y2={centerY} stroke="#4A6A7B22" strokeWidth={3} />
            <line x1={nodePositions[2].x} y1={nodePositions[2].y} x2={centerX} y2={centerY} stroke="#7B4F6A22" strokeWidth={3} />
            <line x1={nodePositions[3].x} y1={nodePositions[3].y} x2={centerX} y2={centerY} stroke="#E4572E22" strokeWidth={3} />
            <line x1={nodePositions[4].x} y1={nodePositions[4].y} x2={centerX} y2={centerY} stroke="#3E8B5F22" strokeWidth={3} />

            {concepts.map((c, idx) => (
              <g key={`m-node-${c.key}`}>
                <circle cx={nodePositions[idx].x} cy={nodePositions[idx].y} r={circleRadius} fill="#fff" strokeWidth={6}
                        stroke={idx===0?'#F6A81A':idx===1?'#4A6A7B':idx===2?'#7B4F6A':idx===3?'#E4572E':'#3E8B5F'} />
                <image href={c.icon}
                       x={nodePositions[idx].x - (circleRadius - 6)}
                       y={nodePositions[idx].y - (circleRadius - 6)}
                       width={(circleRadius - 6) * 2}
                       height={(circleRadius - 6) * 2}
                       clipPath={`url(#clip-mobile-${idx})`}
                       preserveAspectRatio="xMidYMid slice"/>
                <text
                  x={nodePositions[idx].x}
                  y={idx === 0 || idx === 1 || idx === 4 ? nodePositions[idx].y - (circleRadius + 20) : nodePositions[idx].y + (circleRadius + 30)}
                  textAnchor="middle"
                  fill="#1f2937"
                  fontWeight={600}
                  fontSize={16}
                >
                  {c.title.split(' ').length > 2 ? (
                    c.title.split(' ').length > 3 && c.title.includes('Tiefenpsychologisch') ? (
                      <>
                        <tspan x={nodePositions[idx].x} dy={0}>Tiefenpsychologisch</tspan>
                        <tspan x={nodePositions[idx].x} dy={18}>fundierte Psychotherapie</tspan>
                      </>
                    ) : (
                      <>
                        {c.title.split(' ').slice(0,2).join(' ')}
                        <tspan x={nodePositions[idx].x} dy={18}>{c.title.split(' ').slice(2).join(' ')}</tspan>
                      </>
                    )
                  ) : (
                    <tspan x={nodePositions[idx].x} dy={0}>{c.title}</tspan>
                  )}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default TreatmentConceptSection; 
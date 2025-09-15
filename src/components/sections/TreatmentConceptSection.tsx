import { Brain, Users, Layers, Activity } from "lucide-react";
import { useState } from "react";

const concepts = [
  {
    key: "verhaltenstherapie",
    title: "Verhaltenstherapie",
    icon: "/verhaltenstherapie.png",
    color: "bg-primary-light border-primary",
    iconAlt: "Symbol Verhaltenstherapie",
    description: (
      <>Die Verhaltenstherapie hilft, ungünstige Denk- und Verhaltensmuster zu erkennen und gezielt zu verändern. Sie ist wissenschaftlich sehr gut belegt und praxisnah.</>
    )
  },
  {
    key: "systemische-therapie",
    title: "Systemische Therapie",
    icon: "/systemischepsychologie.png",
    color: "bg-accent2-light border-accent2",
    iconAlt: "Symbol Systemische Therapie",
    description: (
      <>Die Systemische Therapie betrachtet Probleme im Zusammenhang mit Beziehungen und dem sozialen Umfeld. Sie stärkt Ressourcen und fördert neue Sichtweisen im System (z.B. Familie).</>
    )
  },
  {
    key: "tiefenpsychologisch",
    title: "Tiefenpsychologisch fundierte Psychotherapie",
    icon: "/tiefenpsychologie.png",
    color: "bg-accent-light border-accent",
    iconAlt: "Symbol Tiefenpsychologisch fundierte Psychotherapie",
    description: (
      <>Hier stehen unbewusste Konflikte und biografische Erfahrungen im Mittelpunkt. Ziel ist es, innere Muster zu verstehen und zu verändern.</>
    )
  },
  {
    key: "neuropsychologisch",
    title: "Neuropsychologische Therapie",
    icon: "/neuropsychologie.png",
    color: "bg-secondary-light border-secondary",
    iconAlt: "Symbol Neuropsychologische Therapie",
    description: (
      <>Die Neuropsychologie verbindet psychische Prozesse mit den Funktionen des Gehirns. Sie hilft z.B. bei Aufmerksamkeits-, Gedächtnis- oder Sprachstörungen nach Erkrankungen oder Unfällen.</>
    )
  }
];

// Desktop configuration
const DESKTOP_CONFIG = {
  width: 700,
  height: 520,
  circleRadius: 60,
  // These are the EXACT line intersection points on desktop
  intersections: [
  { x: 180, y: 140 }, // Verhaltenstherapie (links oben)
  { x: 520, y: 140 }, // Systemische Therapie (rechts oben)
  { x: 520, y: 370 }, // Tiefenpsychologisch (rechts unten)
  { x: 180, y: 370 }  // Neuropsychologisch (links unten)
  ]
};

// Mobile configuration - simple and direct
const MOBILE_CONFIG = {
  width: 300,
  height: 223, // 300 * (520/700) = 223
  circleRadius: 25, // Größer für bessere Sichtbarkeit
  // Direct intersection points for mobile (scaled from desktop)
  intersections: [
    { x: 77, y: 60 },   // Verhaltenstherapie (links oben)
    { x: 223, y: 60 },  // Systemische Therapie (rechts oben)
    { x: 223, y: 159 }, // Tiefenpsychologisch (rechts unten)
    { x: 77, y: 159 }   // Neuropsychologisch (links unten)
  ]
};

const TreatmentConceptSection = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="behandlungskonzept" className="py-20 bg-[#fff8ed]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Behandlungskonzept</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Mein psychotherapeutisches Behandlungskonzept basiert auf vier wissenschaftlich anerkannten Verfahren:
          </p>
        </div>
        
        {/* Mobile Version - ALL IN SVG */}
        <div className="block md:hidden relative max-w-lg mx-auto" style={{ height: `${MOBILE_CONFIG.height + 100}px`, paddingTop: '60px' }}>
          <svg
            width="100%"
            height="100%"
            viewBox={`0 0 ${MOBILE_CONFIG.width} ${MOBILE_CONFIG.height}`}
            className="w-full h-full"
          >
            {/* Main rectangle lines */}
            <line 
              x1={MOBILE_CONFIG.intersections[0].x} y1={MOBILE_CONFIG.intersections[0].y} 
              x2={MOBILE_CONFIG.intersections[1].x} y2={MOBILE_CONFIG.intersections[1].y} 
              stroke="#F6A81A" strokeWidth="3" 
            />
            <line 
              x1={MOBILE_CONFIG.intersections[1].x} y1={MOBILE_CONFIG.intersections[1].y} 
              x2={MOBILE_CONFIG.intersections[2].x} y2={MOBILE_CONFIG.intersections[2].y} 
              stroke="#4A6A7B" strokeWidth="3" 
            />
            <line 
              x1={MOBILE_CONFIG.intersections[2].x} y1={MOBILE_CONFIG.intersections[2].y} 
              x2={MOBILE_CONFIG.intersections[3].x} y2={MOBILE_CONFIG.intersections[3].y} 
              stroke="#7B4F6A" strokeWidth="3" 
            />
            <line 
              x1={MOBILE_CONFIG.intersections[3].x} y1={MOBILE_CONFIG.intersections[3].y} 
              x2={MOBILE_CONFIG.intersections[0].x} y2={MOBILE_CONFIG.intersections[0].y} 
              stroke="#E4572E" strokeWidth="3" 
            />
            {/* Diagonal lines */}
            <line 
              x1={MOBILE_CONFIG.intersections[0].x} y1={MOBILE_CONFIG.intersections[0].y} 
              x2={MOBILE_CONFIG.intersections[2].x} y2={MOBILE_CONFIG.intersections[2].y} 
              stroke="#7B4F6A22" strokeWidth="2" 
            />
            <line 
              x1={MOBILE_CONFIG.intersections[1].x} y1={MOBILE_CONFIG.intersections[1].y} 
              x2={MOBILE_CONFIG.intersections[3].x} y2={MOBILE_CONFIG.intersections[3].y} 
              stroke="#4A6A7B22" strokeWidth="2" 
            />
            
            {/* Original circles positioned exactly on intersection points */}
            {concepts.map((concept, idx) => {
              const { x, y } = MOBILE_CONFIG.intersections[idx];
              const radius = MOBILE_CONFIG.circleRadius;
              
              return (
                <g key={concept.key}>
                  {/* Original circle with image - positioned exactly on intersection */}
                  <foreignObject
                    x={x - radius}
                    y={y - radius}
                    width={radius * 2}
                    height={radius * 2}
                  >
                    <div
                      className={`w-full h-full rounded-full shadow-lg border-2 cursor-pointer transition-transform duration-200 active:scale-95 overflow-hidden ${concept.color}`}
                      style={{ 
                        aspectRatio: '1/1',
                        clipPath: 'circle(50%)' // Zwingt den Inhalt in einen perfekten Kreis
                      }}
                      onClick={() => setHovered(hovered === concept.key ? null : concept.key)}
                    >
                      <img
                        src={concept.icon}
                        alt={concept.iconAlt}
                        className="w-full h-full object-cover"
                        style={{
                          clipPath: 'circle(50%)', // Zusätzliche Kreis-Maske für das Bild
                          objectPosition: 'center'
                        }}
                      />
                    </div>
                  </foreignObject>
                  
                  {/* Label with manual line breaks */}
                  <foreignObject
                    x={x - 60}
                    y={idx < 2 ? y - radius - 35 : y + radius + 10}
                    width="120"
                    height="30"
                  >
                    <div className="text-center text-xs font-semibold text-gray-800 leading-tight select-none pointer-events-none">
                      {idx === 0 && "Verhaltenstherapie"}
                      {idx === 1 && (
                        <>
                          Systemische<br />
                          Therapie
                        </>
                      )}
                      {idx === 2 && (
                        <>
                          Tiefenpsychologische<br />
                          Psychotherapie
                        </>
                      )}
                      {idx === 3 && (
                        <>
                          Neuropsychologische<br />
                          Therapie
                        </>
                      )}
                    </div>
                  </foreignObject>
                  
                  {/* Tooltip */}
                  {hovered === concept.key && (
                    <foreignObject
                      x={idx < 2 ? x - 100 : x + 10}
                      y={y - 50}
                      width="200"
                      height="100"
                    >
                      <div className="bg-white/95 border border-gray-200 rounded-xl shadow-xl p-3 text-xs text-gray-800">
                        <div className="font-semibold mb-1 text-sm">{concept.title}</div>
                        <div>{concept.description}</div>
                      </div>
                    </foreignObject>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Desktop Version */}
        <div className="hidden md:block relative max-w-[700px] w-full mx-auto h-[520px]">
          {/* SVG Lines */}
          <svg
            width={DESKTOP_CONFIG.width}
            height={DESKTOP_CONFIG.height}
            viewBox={`0 0 ${DESKTOP_CONFIG.width} ${DESKTOP_CONFIG.height}`}
            className="absolute left-0 top-0 w-full h-full pointer-events-none"
          >
            {/* Main rectangle lines */}
            <line 
              x1={DESKTOP_CONFIG.intersections[0].x} y1={DESKTOP_CONFIG.intersections[0].y} 
              x2={DESKTOP_CONFIG.intersections[1].x} y2={DESKTOP_CONFIG.intersections[1].y} 
              stroke="#F6A81A" strokeWidth="6" 
            />
            <line 
              x1={DESKTOP_CONFIG.intersections[1].x} y1={DESKTOP_CONFIG.intersections[1].y} 
              x2={DESKTOP_CONFIG.intersections[2].x} y2={DESKTOP_CONFIG.intersections[2].y} 
              stroke="#4A6A7B" strokeWidth="6" 
            />
            <line 
              x1={DESKTOP_CONFIG.intersections[2].x} y1={DESKTOP_CONFIG.intersections[2].y} 
              x2={DESKTOP_CONFIG.intersections[3].x} y2={DESKTOP_CONFIG.intersections[3].y} 
              stroke="#7B4F6A" strokeWidth="6" 
            />
            <line 
              x1={DESKTOP_CONFIG.intersections[3].x} y1={DESKTOP_CONFIG.intersections[3].y} 
              x2={DESKTOP_CONFIG.intersections[0].x} y2={DESKTOP_CONFIG.intersections[0].y} 
              stroke="#E4572E" strokeWidth="6" 
            />
            {/* Diagonal lines */}
            <line 
              x1={DESKTOP_CONFIG.intersections[0].x} y1={DESKTOP_CONFIG.intersections[0].y} 
              x2={DESKTOP_CONFIG.intersections[2].x} y2={DESKTOP_CONFIG.intersections[2].y} 
              stroke="#7B4F6A22" strokeWidth="3" 
            />
            <line 
              x1={DESKTOP_CONFIG.intersections[1].x} y1={DESKTOP_CONFIG.intersections[1].y} 
              x2={DESKTOP_CONFIG.intersections[3].x} y2={DESKTOP_CONFIG.intersections[3].y} 
              stroke="#4A6A7B22" strokeWidth="3" 
            />
          </svg>
          
          {/* Circles and Labels */}
          {concepts.map((concept, idx) => {
            const { x, y } = DESKTOP_CONFIG.intersections[idx];
            const radius = DESKTOP_CONFIG.circleRadius;
            
            return (
              <div key={concept.key}>
                {/* Label */}
                <div
                  style={{
                    position: 'absolute',
                    left: x,
                    top: idx < 2 ? y - radius - 38 : y + radius + 12,
                    width: 200,
                    transform: 'translateX(-50%)',
                    zIndex: 3,
                    textAlign: 'center',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#374151',
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                >
                  {concept.title}
                </div>
                
                {/* Circle */}
                  <div
                    style={{
                      position: 'absolute',
                    left: x - radius,
                    top: y - radius,
                    width: radius * 2,
                    height: radius * 2,
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
                  onMouseEnter={() => setHovered(concept.key)}
                  onMouseLeave={() => setHovered(null)}
                  >
                    <img
                    src={concept.icon}
                    alt={concept.iconAlt}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                
                {/* Tooltip */}
                  {hovered === concept.key && (
                  <div
                    style={{
                      position: 'absolute',
                      left: idx < 2 ? x - radius - 280 : x + radius + 20,
                      top: y - 30,
                      width: 260,
                      zIndex: 10,
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid #e5e7eb',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      padding: '1.5rem',
                      fontSize: '1rem',
                      color: '#374151',
                      textAlign: 'left',
                      lineHeight: '1.5',
                      pointerEvents: 'none',
                      userSelect: 'none',
                    }}
                  >
                      <div className="font-semibold mb-2 text-xl">{concept.title}</div>
                      <div>{concept.description}</div>
                    </div>
                  )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TreatmentConceptSection; 
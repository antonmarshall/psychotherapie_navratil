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

const circleRadius = 60;
const svgWidth = 700;
const svgHeight = 520;
const nodePositions = [
  { x: 180, y: 140 }, // Verhaltenstherapie (links oben)
  { x: 520, y: 140 }, // Systemische Therapie (rechts oben)
  { x: 520, y: 370 }, // Tiefenpsychologisch (rechts unten)
  { x: 180, y: 370 }  // Neuropsychologisch (links unten)
];

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
        <div className="relative max-w-[700px] w-full mx-auto h-[520px]">
          {/* SVG-Linien */}
          <svg
            width={svgWidth}
            height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="absolute left-0 top-0 w-full h-full pointer-events-none"
          >
            {/* Quadrat/Polygon */}
            <line x1={nodePositions[0].x} y1={nodePositions[0].y} x2={nodePositions[1].x} y2={nodePositions[1].y} stroke="#F6A81A" strokeWidth="6" />
            <line x1={nodePositions[1].x} y1={nodePositions[1].y} x2={nodePositions[2].x} y2={nodePositions[2].y} stroke="#4A6A7B" strokeWidth="6" />
            <line x1={nodePositions[2].x} y1={nodePositions[2].y} x2={nodePositions[3].x} y2={nodePositions[3].y} stroke="#7B4F6A" strokeWidth="6" />
            <line x1={nodePositions[3].x} y1={nodePositions[3].y} x2={nodePositions[0].x} y2={nodePositions[0].y} stroke="#E4572E" strokeWidth="6" />
            {/* Diagonalen */}
            <line x1={nodePositions[0].x} y1={nodePositions[0].y} x2={nodePositions[2].x} y2={nodePositions[2].y} stroke="#7B4F6A22" strokeWidth="3" />
            <line x1={nodePositions[1].x} y1={nodePositions[1].y} x2={nodePositions[3].x} y2={nodePositions[3].y} stroke="#4A6A7B22" strokeWidth="3" />
          </svg>
          {/* Knoten, Labels, Tooltips als absolut positionierte Divs */}
          {concepts.map((concept, idx) => {
            const { x, y } = nodePositions[idx];
            const IconSrc = concept.icon;
            const IconAlt = concept.iconAlt;
            // Label-Position: oben für 0/1, unten für 2/3
            const labelStyle = {
              left: x,
              width: 200,
              transform: 'translateX(-50%)',
              position: 'absolute',
              zIndex: 3,
              top: idx < 2 ? y - circleRadius - 38 : y + circleRadius + 12
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
      </div>
    </section>
  );
};

export default TreatmentConceptSection; 
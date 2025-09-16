import { useMemo } from "react";

const SVG_W = 700;
const SVG_H = 520;

type Node = {
  key: string;
  title: string;
  img: string;
  x: number;
  y: number;
  stroke: string;
};

const nodes: Node[] = [
  { key: 'vt',  title: 'Verhaltenstherapie',                            img: import.meta.env.BASE_URL + 'verhaltenstherapie.png',    x: 180, y: 140, stroke: '#F6A81A' },
  { key: 'sys', title: 'Systemische Therapie',                           img: import.meta.env.BASE_URL + 'systemischepsychologie.png', x: 520, y: 140, stroke: '#4A6A7B' },
  { key: 'tief',title: 'Tiefenpsychologisch\nfundierte Psychotherapie', img: import.meta.env.BASE_URL + 'tiefenpsychologie.png',      x: 520, y: 370, stroke: '#7B4F6A' },
  { key: 'neuro',title:'Neuropsychologische\nTherapie',                 img: import.meta.env.BASE_URL + 'neuropsychologie.png',       x: 180, y: 370, stroke: '#E4572E' },
];

const lines: Array<[string, string, string, number]> = [
  ['vt','sys','#F6A81A',6],
  ['sys','tief','#4A6A7B',6],
  ['tief','neuro','#7B4F6A',6],
  ['neuro','vt','#E4572E',6],
  ['vt','tief','#7B4F6A22',3],
  ['sys','neuro','#4A6A7B22',3],
];

const R = 60; // original design radius, scales with viewBox

const TreatmentConceptSection = () => {
  const nodeMap = useMemo(() => Object.fromEntries(nodes.map(n => [n.key, n])), []);

  return (
    <section id="behandlungskonzept" className="py-20 bg-[#fff8ed]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Behandlungskonzept</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Mein psychotherapeutisches Behandlungskonzept basiert auf vier wissenschaftlich anerkannten Verfahren:
          </p>
        </div>

        <div className="max-w-[700px] w-full mx-auto">
          <svg
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            className="w-full h-auto"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {nodes.map(n => (
                <clipPath id={`clip-${n.key}`} key={`clip-${n.key}`}>
                  <circle cx={n.x} cy={n.y} r={R - 6} />
                </clipPath>
              ))}
            </defs>

            {lines.map(([a,b,color,width]) => (
              <line
                key={`${a}-${b}`}
                x1={nodeMap[a].x}
                y1={nodeMap[a].y}
                x2={nodeMap[b].x}
                y2={nodeMap[b].y}
                stroke={color}
                strokeWidth={width}
              />
            ))}

            {nodes.map(n => (
              <g key={n.key}>
                <circle cx={n.x} cy={n.y} r={R} fill="#ffffff" stroke={n.stroke} strokeWidth={6} />
                <image
                  href={n.img}
                  x={n.x - (R - 6)}
                  y={n.y - (R - 6)}
                  width={(R - 6) * 2}
                  height={(R - 6) * 2}
                  clipPath={`url(#clip-${n.key})`}
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            ))}

            {nodes.map(n => (
              <text
                key={`${n.key}-label`}
                x={n.x}
                y={n.y < SVG_H/2 ? n.y - (R + 24) : n.y + (R + 40)}
                textAnchor="middle"
                fill="#1f2937"
                fontWeight={600}
                fontSize={20}
              >
                {n.title.split('\n').map((line, i) => (
                  <tspan x={n.x} dy={i === 0 ? 0 : 24} key={i}>{line}</tspan>
                ))}
              </text>
            ))}
          </svg>

          <p className="sr-only">
            Visualisierung der vier Verfahren: Verhaltenstherapie, Systemische Therapie, Tiefenpsychologisch fundierte Psychotherapie und Neuropsychologische Therapie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TreatmentConceptSection;
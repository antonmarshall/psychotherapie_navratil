
import { Heart, Users, Brain, Leaf, Sun, Sparkles, BookOpen, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { BRAND_COLORS } from "@/utils/colors";

const MethodsSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const methodCategories = [
    {
      icon: Heart,
      title: "Emotionale Heilung",
      bgColor: "bg-primary-light",
      borderColor: "border-primary",
      iconColor: "text-primary",
      bulletColor: "bg-primary",
      methods: [
        "Entspannungs-Verfahren für innere Ruhe",
        "Achtsamkeits-Training für mehr Präsenz",
        "EMDR für Trauma-Verarbeitung",
        "Körper-Therapie für ganzheitliche Heilung"
      ]
    },
    {
      icon: Users,
      title: "Beziehungen & Familie",
      bgColor: "bg-accent2-light",
      borderColor: "border-accent2",
      iconColor: "text-accent2",
      bulletColor: "bg-accent2",
      methods: [
        "Training sozialer Kompetenzen",
        "Rollenspiele für neue Perspektiven",
        "Coaching für Eltern, Erzieher, Lehrer",
        "Familien-Genogramm und Skulptur"
      ]
    },
    {
      icon: Brain,
      title: "Kognitive Entwicklung",
      bgColor: "bg-secondary-light",
      borderColor: "border-primary",
      iconColor: "text-secondary-dark",
      bulletColor: "bg-primary",
      methods: [
        "Kognitive Umstrukturierung",
        "PC-gestütztes kognitives Training",
        "Vermittlung von Mnemo-Techniken",
        "Selbst-Management-Strategien"
      ]
    },
    {
      icon: Sun,
      title: "Verhaltenstherapie",
      bgColor: "bg-accent-light",
      borderColor: "border-accent",
      iconColor: "text-accent",
      bulletColor: "bg-accent",
      methods: [
        "Expositions-Behandlung",
        "Stress- und Belastungs-Management",
        "Acceptanz- und Commitment-Therapie",
        "Ego-State-Therapie"
      ]
    },
    {
      icon: BookOpen,
      title: "Narrative Heilung",
      bgColor: "bg-accent3-light",
      borderColor: "border-accent3-dark",
      iconColor: "text-accent3-dark",
      bulletColor: "bg-accent3-dark",
      methods: [
        "Arbeit mit Metaphern und Geschichten",
        "Lösungsorientierte Therapie",
        "Spiel-Therapie",
        "Psycho-Edukation"
      ]
    },
    {
      icon: Sparkles,
      title: "Kreative Wege",
      bgColor: "bg-secondary-light",
      borderColor: "border-secondary-dark",
      iconColor: "text-secondary-dark",
      bulletColor: "bg-secondary-dark",
      methods: [
        "Elemente der Kunst-Therapie",
        "Sport und Ernährung",
        "Arbeit mit Übertragung",
        "Holistische Ansätze"
      ]
    }
  ];

  return (
    <section id="methoden" className="py-20 bg-section-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Wie ich mit Ihnen arbeite
          </h2>
                      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Jeder Mensch ist einzigartig. Deshalb passe ich meine Methoden individuell an Ihr Alter, 
            Ihre Situation und Ihre Bereitschaft an. Hier sind die Wege, die wir gemeinsam gehen können:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
          {methodCategories.map((category, index) => {
            const isOpen = openIdx === index;
            const isAdjacent = openIdx !== null && Math.abs(index - openIdx) === 1 && Math.floor(index / 2) === Math.floor(openIdx / 2); // Same row, adjacent
            
            return (
            <div
              key={index}
              className={`group rounded-xl md:rounded-3xl p-4 md:p-8 shadow-lg border-2 ${category.borderColor} hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1
              ${isOpen ? 'md:relative md:z-10 md:scale-105 col-span-2' : ''} 
              ${isAdjacent ? 'md:block hidden' : ''}`}
              style={{
                backgroundColor: BRAND_COLORS.white,
                ...(isAdjacent && { 
                  borderLeft: `4px solid ${category.borderColor.replace('border-', '')}`
                })
              }}
            >
              <div className="text-center mb-6 md:mb-8">
                <div className={`mx-auto mb-3 md:mb-6 p-3 md:p-4 rounded-full w-fit ${category.bgColor} shadow-md md:group-hover:scale-110 transition-transform duration-300 ${isOpen ? 'md:block hidden' : ''}`}>
                  <category.icon className={`w-7 h-7 md:w-8 md:h-8 ${category.iconColor}`} />
                </div>
                <h3 className="font-semibold text-gray-800 text-base md:text-xl mb-3 md:mb-4">
                  {category.title}
                </h3>
              </div>

              {/* Desktop: immer offen */}
              <div className="hidden md:block space-y-4">
                {category.methods.map((method, methodIndex) => (
                  <div key={methodIndex} className="flex items-start gap-4">
                    <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${category.bulletColor}`}></div>
                    <p className="text-gray-700 text-base leading-relaxed">
                      {method}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mobile: aufklappbar & gesteuert, damit wir die Spaltenbreite ändern können */}
              <Collapsible className="md:hidden" open={isOpen} onOpenChange={(open) => setOpenIdx(open ? index : null)}>
                <CollapsibleContent className="space-y-2 pr-1">
                  {category.methods.map((method, methodIndex) => (
                    <div key={methodIndex} className="flex items-start gap-2.5">
                      <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${category.bulletColor}`}></div>
                      <p className="text-gray-700 text-[13px] leading-relaxed">
                        {method}
                      </p>
                    </div>
                  ))}
                </CollapsibleContent>
                <CollapsibleTrigger asChild>
                  <button
                    className="mt-2 w-full flex items-center justify-center text-gray-700/90 hover:text-gray-900 transition-colors"
                    aria-label="Details ein-/ausklappen"
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                </CollapsibleTrigger>
              </Collapsible>
            </div>
          )})}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Diese Methoden sind wissenschaftlich fundiert und werden kontinuierlich an Ihre Fortschritte angepasst. 
            Gemeinsam finden wir den Weg, der für Sie am besten funktioniert.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MethodsSection;

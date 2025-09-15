
import { Heart, Users, Brain, Leaf, Sun, Sparkles, BookOpen } from "lucide-react";

const MethodsSection = () => {
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
      borderColor: "border-secondary",
      iconColor: "text-secondary",
      bulletColor: "bg-secondary",
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
      bgColor: "bg-primary-light",
      borderColor: "border-primary-dark",
      iconColor: "text-primary-dark",
      bulletColor: "bg-primary-dark",
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
    <section id="methoden" className="py-20 bg-[#fff8ed]">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {methodCategories.map((category, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-3xl p-8 shadow-lg border-2 ${category.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-center mb-8">
                <div className={`mx-auto mb-6 p-4 rounded-full w-fit ${category.bgColor} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.methods.map((method, methodIndex) => (
                  <div key={methodIndex} className="flex items-start gap-4">
                    <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${category.bulletColor}`}></div>
                    <p className="text-gray-700 text-base leading-relaxed">
                      {method}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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

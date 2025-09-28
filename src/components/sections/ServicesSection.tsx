import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { BRAND_COLORS } from "@/utils/colors";
import { Plus, X } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      image: import.meta.env.BASE_URL + 'diagnostik_2.png',
      title: "Diagnostik",
      description: "Umfassende psychologische Untersuchung zur genauen Erfassung Ihrer individuellen Situation.",
      bgColor: "bg-primary-light",
      borderColor: "border-primary",
      iconColor: "text-primary"
    },
    {
      image: import.meta.env.BASE_URL + 'beratung_2.png',
      title: "Beratung",
      description: "Professionelle Begleitung für Familien, Eltern und Kinder bei Entwicklungsfragen.",
      bgColor: "bg-accent2-light",
      borderColor: "border-accent2",
      iconColor: "text-accent2"
    },
    {
      image: import.meta.env.BASE_URL + 'behandlung_2.png',
      title: "Behandlung",
      description: "Evidenzbasierte Psychotherapie für Kinder, Jugendliche und Familien.",
      bgColor: "bg-accent-light",
      borderColor: "border-accent",
      iconColor: "text-accent"
    },
    {
      image: import.meta.env.BASE_URL + 'berufliche_wiedereingliederung.png',
      title: "Berufliche Wiedereingliederung",
      description: "Unterstützung bei der Rückkehr ins Berufsleben nach psychischen Belastungen oder Erkrankungen.",
      bgColor: "bg-primary",
      borderColor: "border-primary-dark",
      iconColor: "text-primary"
    }
  ];

  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section id="angebot" className="py-20" style={{backgroundColor: BRAND_COLORS.white}}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mein Angebot
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professionelle psychologische Unterstützung für Kinder, Jugendliche und Familien
            </p>
          </div>

          {/* Services Grid - Mobile-first Design */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {services.map((service, index) => {
              const isExpanded = expandedCard === index;

              return (
                <div
                  key={index}
                  className="relative"
                >
                  {/* Main Card */}
                  <Card
                    className={`group ${service.bgColor} ${service.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 border-2 overflow-hidden rounded-xl md:rounded-2xl h-full`}
                  >
                    {/* Mobile & Desktop Content */}
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <CardHeader className="pb-3 md:pb-4">
                      <CardTitle className="text-sm sm:text-base md:text-xl font-semibold text-gray-900 text-center">
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base text-center">
                        {service.description}
                      </p>
                    </CardContent>

                    {/* Mobile Expand Button */}
                    <div className="md:hidden absolute top-2 right-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedCard(isExpanded ? null : index);
                        }}
                        className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
                        aria-label={isExpanded ? "Schließen" : "Mehr erfahren"}
                      >
                        {isExpanded ? (
                          <X className="w-4 h-4 text-gray-700" />
                        ) : (
                          <Plus className="w-4 h-4 text-gray-700" />
                        )}
                      </button>
                    </div>
                  </Card>

                  {/* Mobile Expanded Overlay */}
                  {isExpanded && (
                    <div className="md:hidden absolute inset-0 z-10 pointer-events-none">
                      <Card className="absolute inset-0 border-4 border-primary shadow-2xl pointer-events-auto">
                        <CardContent className="p-6 h-full flex flex-col justify-center">
                          <div className="text-center">
                            <div className="mb-4">
                              <img
                                src={service.image}
                                alt={service.title}
                                className="w-16 h-16 mx-auto mb-3 rounded-full object-cover"
                              />
                              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm mb-4">
                              {service.description}
                            </p>
                            <button
                              onClick={() => setExpandedCard(null)}
                              className="w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg transition-colors"
                            >
                              Verstanden
                            </button>
                          </div>
                        </CardContent>
                      </Card>
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

export default ServicesSection;

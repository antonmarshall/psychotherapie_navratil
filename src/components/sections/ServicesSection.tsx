import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

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

  const [activeMobileCard, setActiveMobileCard] = useState<number | null>(null);

  return (
    <section id="angebot" className="py-20 bg-section-light">
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

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => {
              const isActive = activeMobileCard === index;

              return (
                <div
                  key={index}
                  className="relative"
                >
                  {/* Desktop Card (md and up) - unchanged */}
                  <Card
                    className={`hidden md:block group ${service.bgColor} ${service.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 border-2 overflow-hidden rounded-2xl h-full`}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl font-semibold text-gray-900 text-center">
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <p className="text-gray-700 leading-relaxed text-base text-center">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Mobile Card (only image with tap overlay) */}
                  <div 
                    className="md:hidden relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                    onClick={() => setActiveMobileCard(isActive ? null : index)}
                  >
                    <div className={`relative w-full h-48 border-4 ${service.borderColor} rounded-xl overflow-hidden`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Full color overlay with text (on tap) */}
                      <div 
                        className={`absolute inset-0 bg-section-light flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                      >
                        <h3 className="text-gray-900 text-base sm:text-lg font-semibold text-center mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed text-center">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
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

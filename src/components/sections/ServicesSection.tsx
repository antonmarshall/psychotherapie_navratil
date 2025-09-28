import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { BRAND_COLORS } from "@/utils/colors";

const ServicesSection = () => {
  const services = [
    {
      image: import.meta.env.BASE_URL + 'diagnostik_2.png',
      title: "Diagnostik",
      description: "Umfassende psychologische Untersuchung zur genauen Erfassung Ihrer individuellen Situation.",
      bgColor: "bg-primary-light",
      borderColor: "border-primary"
    },
    {
      image: import.meta.env.BASE_URL + 'beratung_2.png',
      title: "Beratung", 
      description: "Professionelle Begleitung für Familien, Eltern und Kinder bei Entwicklungsfragen.",
      bgColor: "bg-accent2-light",
      borderColor: "border-accent2"
    },
    {
      image: import.meta.env.BASE_URL + 'behandlung_2.png',
      title: "Behandlung",
      description: "Evidenzbasierte Psychotherapie für Kinder, Jugendliche und Familien.",
      bgColor: "bg-accent-light",
      borderColor: "border-accent"
    },
    {
      image: import.meta.env.BASE_URL + 'berufliche_wiedereingliederung.png',
      title: "Berufliche Wiedereingliederung",
      description: "Unterstützung bei der Rückkehr ins Berufsleben nach psychischen Belastungen oder Erkrankungen.",
      bgColor: "bg-primary",
      borderColor: "border-primary-dark"
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="angebot" className="py-20 bg-white">
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
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`group relative ${service.bgColor} ${service.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 border-2 overflow-hidden rounded-xl md:rounded-2xl`}
              >
                {/* Mobile: Clean Design ohne seltsame Ränder */}
                <div className="md:hidden">
                  <button
                    type="button"
                    className="w-full"
                    aria-expanded={openIdx === index}
                    onClick={() => setOpenIdx(prev => prev === index ? null : index)}
                    aria-label={`${service.title} öffnen`}
                  >
                    {openIdx === index ? (
                      /* Text-Ansicht: Clean und geräumig */
                      <div className="p-4 text-center min-h-[120px] flex flex-col justify-center">
                        <h3 className="font-semibold text-gray-900 mb-3 text-base">{service.title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    ) : (
                      /* Bild-Ansicht: Fullsize ohne Ränder */
                      <div className="relative aspect-square overflow-hidden rounded-xl border-2" style={{borderColor: BRAND_COLORS.white}}>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Blur-Titel ohne weißen Hintergrund */}
                        <div className="absolute inset-x-0 bottom-0 p-3">
                          <span
                            className="text-white text-sm font-semibold px-3 py-2 rounded-lg shadow-lg block text-center"
                            style={{
                              backdropFilter: 'blur(12px)',
                              backgroundColor: 'rgba(0, 0, 0, 0.075)' // 7.5% statt 30%
                            }}
                          >
                            {service.title}
                          </span>
                        </div>
                      </div>
                    )}
                  </button>
                </div>

                {/* Desktop: wie bisher */}
                <div className="hidden md:block">
                  <div className="aspect-square sm:aspect-video overflow-hidden">
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
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

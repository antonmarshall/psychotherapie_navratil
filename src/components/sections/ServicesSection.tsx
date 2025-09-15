import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      image: "/diagnostik_2.png",
      title: "Diagnostik",
      description: "Umfassende psychologische Untersuchung zur genauen Erfassung Ihrer individuellen Situation",
      bgColor: "bg-primary-light",
      borderColor: "border-primary"
    },
    {
      image: "/beratung_2.png",
      title: "Beratung", 
      description: "Professionelle Begleitung für Familien, Eltern und Kinder bei Entwicklungsfragen",
      bgColor: "bg-accent2-light",
      borderColor: "border-accent2"
    },
    {
      image: "/behandlung_2.png",
      title: "Behandlung",
      description: "Evidenzbasierte Psychotherapie für Kinder, Jugendliche und Familien",
      bgColor: "bg-accent-light",
      borderColor: "border-accent"
    },
    {
      image: "/berufliche_wiedereingliederung.png",
      title: "Berufliche Wiedereingliederung",
      description: "Unterstützung bei der Rückkehr ins Berufsleben nach psychischen Belastungen oder Erkrankungen",
      bgColor: "bg-primary",
      borderColor: "border-primary-dark"
    }
  ];

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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`group ${service.bgColor} ${service.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 border-2 overflow-hidden rounded-2xl`}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Camera, MapPin } from "lucide-react";

const PracticeGallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Praxis von außen",
      description: "Die Praxis in der Hüffer-Straße 22 in Münster",
      image: import.meta.env.BASE_URL + 'praxis_von_außen.png'
    },
    {
      id: 2,
      title: "Eingangsbereich",
      description: "Willkommener Empfangsbereich der Praxis",
      image: import.meta.env.BASE_URL + 'Eingangsbereich.png'
    },
    {
      id: 3,
      title: "Wartezimmer",
      description: "Gemütlicher Wartebereich für Familien",
      image: import.meta.env.BASE_URL + 'wartezimmer.png'
    },
    {
      id: 4,
      title: "Spielzimmer",
      description: "Kreativer Raum für Kinder und Jugendliche",
      image: import.meta.env.BASE_URL + 'spielzimmer.png'
    },
    {
      id: 5,
      title: "Therapieraum",
      description: "Ruhiger Raum für Gespräche und Therapie",
      image: import.meta.env.BASE_URL + 'therapieraum.png'
    }
  ];

  return (
    <section id="galerie" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#fff8ed]">
              <Camera className="w-6 h-6 text-[#F6A81A]" />
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Praxis-Rundgang
          </h2>
          <p className="text-lg text-gray-600">
            Werfen Sie einen Blick in unsere einladenden Räumlichkeiten
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
                {galleryImages.map((image) => (
                <CarouselItem key={image.id} className="basis-4/5 sm:basis-3/4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                    <div className="aspect-square overflow-hidden max-w-xs mx-auto md:max-w-none">
                      <img 
                        src={image.image} 
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardContent
                      className="p-6 bg-[#fff8ed] border border-white/60 shadow-2xl"
                    >
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 relative z-10">
                        {image.title}
                      </h3>
                      <p className="text-gray-600 relative z-10">
                        {image.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white shadow-lg hover:bg-white text-[#F6A81A] border-[#F6A81A]/20 hover:border-[#F6A81A]/40 w-10 h-10 md:w-14 md:h-14 hover:scale-105 transition-all duration-200" />
            <CarouselNext className="bg-white shadow-lg hover:bg-white text-[#F6A81A] border-[#F6A81A]/20 hover:border-[#F6A81A]/40 w-10 h-10 md:w-14 md:h-14 hover:scale-105 transition-all duration-200" />
          </Carousel>
          {/* Swipe-Hinweis entfernt (mobile hint) */}
        </div>

        <div className="mt-12 text-center">
          
        </div>
      </div>
    </section>
  );
};

export default PracticeGallery;

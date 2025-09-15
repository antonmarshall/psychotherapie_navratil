import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Camera, MapPin } from "lucide-react";

const PracticeGallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Wartezimmer",
      description: "Gemütlicher Wartebereich für Familien",
      image: "/wartezimmer.png"
    },
    {
      id: 2,
      title: "Therapieraum",
      description: "Ruhiger Raum für Gespräche und Therapie",
      image: "/therapieraum.png"
    },
    {
      id: 3,
      title: "Eingangsbereich",
      description: "Willkommener Empfangsbereich der Praxis",
      image: "/Eingangsbereich.png"
    },
    {
      id: 4,
      title: "Praxis von außen",
      description: "Die Praxis in der Hüffer-Straße 22 in Münster",
      image: "/praxis_von_außen.png"
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
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                    <div className="aspect-square overflow-hidden">
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
          {/* Swipe-Hinweis */}
          <div className="flex justify-center mt-4 md:hidden select-none">
            <span className="flex items-center gap-2 text-[#F6A81A] text-sm bg-[#fff8ed] rounded-full px-4 py-1 shadow-sm">
              <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12H3m0 0l4-4m-4 4l4 4' /></svg>
              Zum Durchwischen ziehen
            </span>
          </div>
        </div>

        <div className="mt-12 text-center">
          
        </div>
      </div>
    </section>
  );
};

export default PracticeGallery;

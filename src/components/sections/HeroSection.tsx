import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}hero_hintergrund.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Kasten mit Overlay */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center">
        <div className="relative rounded-3xl shadow-xl p-6 md:p-12 max-w-2xl mx-auto flex flex-col items-start gap-4 md:gap-6 mt-14 md:mt-16 mb-8 md:mb-12">
          {/* Semi-transparentes Overlay */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-3xl"></div>
          <div className="relative z-10 w-full">
          {/* Profilbild */}
          <img
            src={import.meta.env.BASE_URL + 'profil.jpg'}
            alt="Dipl.-Psych. Christiane Navrátil"
            className="w-28 h-28 md:w-40 md:h-40 rounded-full object-cover mb-2 shadow-lg border-2 border-accent2/20 absolute left-1/2 -translate-x-1/2 -top-20 md:-top-24"
            style={{marginTop: 0}}
          />
          <div className="mt-16 md:mt-20 w-full">
            {/* Headline */}
            <div className="text-center mb-2">
              <h1 className="text-2xl md:text-3xl font-medium text-gray-600 mb-1">
                Praxis für Psychotherapie
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Christiane Navrátil
              </h2>
            </div>
            {/* Subline */}
            <p className="text-base md:text-lg text-gray-500 mb-3 md:mb-4 text-center mx-auto mt-4">
              Kinder, Jugendliche, Erwachsene und Familien
            </p>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center mt-6">
            <Button 
              size="lg" 
                className="bg-primary text-text-primary hover:bg-primary-hover border border-primary px-8 py-4 rounded-full text-lg font-semibold shadow"
                onClick={() => document.getElementById('angebot')?.scrollIntoView({ behavior: 'smooth' })}
            >
                Therapieangebote
            </Button>
            <Button 
                size="lg"
                className="min-w-[180px] bg-accent2 text-gray-900 hover:bg-accent2/80 border border-accent2 font-semibold px-8 py-4 rounded-full shadow transition-all duration-200 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent2"
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            >
                Kontakt aufnehmen
            </Button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/hero_hintergrund.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Weißer Kasten mit Inhalt */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center">
        <div className="bg-[#fff8ed]/90 rounded-3xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto flex flex-col items-start gap-6 mt-16 mb-12 relative">
          {/* Profilbild */}
          <img
            src="/profil.jpg"
            alt="Dipl.-Psych. Christiane Navratil"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-2 shadow-md border-4 border-white absolute left-1/2 -translate-x-1/2 -top-16"
            style={{marginTop: 0}}
          />
          <div className="mt-20 w-full">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-2 text-left md:text-left">
              Praxis für Psychotherapie – Christiane Navratil
          </h1>
            {/* Subline */}
            <p className="text-lg text-gray-500 mb-4 max-w-md text-left md:text-left">
              für Kinder, Jugendliche & Erwachsene
            </p>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center mt-6">
            <Button 
              size="lg" 
                className="bg-yellow-400 text-[#222222] hover:bg-yellow-300 border border-yellow-400 px-8 py-4 rounded-full text-lg font-semibold shadow"
                onClick={() => document.getElementById('angebot')?.scrollIntoView({ behavior: 'smooth' })}
            >
                Therapieangebote
            </Button>
            <Button 
                size="lg"
              variant="outline" 
                className="min-w-[180px] bg-white border border-yellow-400 text-[#222222] hover:bg-yellow-500 hover:text-white border border-yellow-400 font-semibold px-6 py-2 rounded-full shadow transition-all duration-200 text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-accent2 hover:bg-accent2 hover:text-white hover:border-accent2"
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            >
                Kontakt aufnehmen
            </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

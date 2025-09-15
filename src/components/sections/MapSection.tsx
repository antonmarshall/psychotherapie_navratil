
import { MapPin } from "lucide-react";

const MapSection = () => {
  return (
    <section id="standort" className="py-20 bg-[#fff8ed]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-blue-200 rounded-full mb-4">
            <MapPin className="w-6 h-6 text-blue-700" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Praxis-Standort
          </h2>
          <p className="text-lg text-gray-700">
            Hüffer-Straße 22, 48149 Münster
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2402.8234567890123!2d7.625570000000001!3d51.9606710!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9ba68a3f1a1a1%3A0x1234567890abcdef!2sH%C3%BCffer%20Str.%2022%2C%2048149%20M%C3%BCnster!5e0!3m2!1sde!2sde!4v1234567890123!5m2!1sde!2sde"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Praxis-Standort Münster"
            />
          </div>
          
          <div className="mt-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Anfahrt</h3>
              <p className="text-gray-600 text-sm">
                Die Praxis befindet sich zentral in Münster und ist gut mit öffentlichen Verkehrsmitteln 
                sowie dem Auto erreichbar. Parkmöglichkeiten sind in der Nähe vorhanden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

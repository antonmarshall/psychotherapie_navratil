import { Card, CardContent } from "@/components/ui/card";
import { Smile, Ear, Heart, Lightbulb, Users, ArrowRight } from "lucide-react";

const WelcomeSection = () => {
  return (
    <section id="willkommen" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6" style={{ marginTop: '-12px' }}>
            Willkommen in der Hüffer-Straße 22 in Münster!
          </h2>
                      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ein Ort, um Neues zu lernen und sich auszuruhen. Um neue Ideen zu entwickeln und Lösungen für Probleme zu finden.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;

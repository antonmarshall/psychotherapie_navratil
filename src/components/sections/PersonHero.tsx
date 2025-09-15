import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, User, Stethoscope, GraduationCap, BookOpen, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PersonHero = () => {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections = [
    {
      id: "about",
      title: "Über mich",
      icon: User,
      content: "Diplom-Psychologin und Kinder- und Jugendlichen-Psychotherapeutin mit über 30 Jahren Erfahrung. Mein Weg führte von der Krankenschwester über das Psychologie-Studium zur Psychotherapie. Seit 2009 führe ich meine eigene Praxis in Münster Seit 2009 führe ich meine eigene Praxis in Münster, in der ich verhaltenstherapeutische Verfahren mit systemischen Elementen und tiefenpsychologischen Ansätzen verbinde."
    },
    {
      id: "philosophy", 
      title: "Meine Arbeitsweise",
      icon: Stethoscope,
      content: "Ich schaffe einen geschützten Raum, in dem Sie offen und ehrlich sein können. Meine Arbeit verbindet unterschiedliche Methoden – von Verhaltenstherapie über kreative Ansätze bis hin zu Körper- und Narrativen Verfahren. So finden Kinder, Jugendliche und Erwachsene jeweils die Unterstützung, die sie brauchen."
    },
    {
      id: "qualifications",
      title: "Qualifikationen",
      icon: GraduationCap,
      content: (
        <div className="bg-[#fff8ed] border border-[#F6A81A]/20 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-3">Alle Qualifikationen im Überblick:</h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            <div>• Dipl.-Psychologin</div>
            <div>• Kinder- und Jugendlichen-Psychotherapeutin</div>
            <div>• Klinische Neuropsychologin</div>
            <div>• Heilpraktiker (Psychotherapie)</div>
            <div>• Montessori-Pädagogin</div>
            <div>• Krankenschwester</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="person" className="py-20 bg-[#fff8ed]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Bild und Name */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <img 
                  src="/profil.jpg" 
                  alt="Dipl.-Psych. Christiane Navratil"
                  className="w-64 h-64 mx-auto lg:mx-0 rounded-full object-cover shadow-xl"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Dipl.-Psych. Christiane Navratil
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Kinder- und Jugendlichen-Psychotherapeutin
              </p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>Hüffer-Straße 22, Münster</p>
                <p>Praxis seit 2009 • 30+ Jahre Erfahrung</p>
              </div>
            </div>

            {/* Aufklapper */}
            <div className="space-y-6">
              {sections.map((section) => (
                <Collapsible 
                  key={section.id}
                  open={openSection === section.id}
                  onOpenChange={(open) => setOpenSection(open ? section.id : null)}
                >
                  <CollapsibleTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between p-4 h-auto bg-white/80 hover:bg-white border-0 shadow-lg"
                    >
                      <div className="flex items-center gap-3">
                        <section.icon className="w-5 h-5 text-[#F6A81A]" />
                        <span className="font-medium text-gray-900">{section.title}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform ${openSection === section.id ? 'rotate-180' : ''}`} />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 pb-6 pt-4">
                    {typeof section.content === 'string' ? (
                      <p className="text-gray-700 leading-relaxed">
                        {section.content}
                      </p>
                    ) : (
                      section.content
                    )}
                  </CollapsibleContent>
                </Collapsible>
              ))}

              {/* Button zum Lebenslauf */}
              <Card className="mt-8 bg-gradient-to-br from-[#fff8ed] to-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-6 h-6 text-[#F6A81A]" />
                    <h3 className="font-semibold text-gray-900">Mehr über mich</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Detaillierter Lebenslauf und beruflicher Werdegang.
                  </p>
                  <Button 
                    onClick={() => navigate('/lebenslauf')}
                    className="w-full bg-[#F6A81A] hover:bg-[#F6C544] text-white"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Lebenslauf ansehen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonHero;

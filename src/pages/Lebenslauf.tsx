import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Lebenslauf = () => {
  const navigate = useNavigate();

  const trustBadges = [
    "Klinische Neuropsychologin (GNP, PTK RP)",
    "Kassenzulassung KVWL seit 2012"
  ];

  const methods = [
    "Familien-Therapie",
    "Sandspiel-Therapie", 
    "Tiefenpsychologische Therapie",
    "Neuropsychologische Therapie",
    "Verhaltenstherapie",
    "EMDR (auch Erwachsene)"
  ];

  const targetGroups = [
    {
      title: "Kinder",
      aspects: [
        { label: "Spielerisch", description: "Zugang über Spiel + kreative Methoden." },
        { label: "Entwicklung", description: "Förderung emotionaler, kognitiver + sozialer Reifung." },
        { label: "Sicherheit", description: "Aufbau von Vertrauen und Sicherheit." },
        { label: "Ressource", description: "Stärken entdecken + nutzen." }
      ]
    },
    {
      title: "Jugendliche", 
      aspects: [
        { label: "Selbstfindung", description: "Selbstfindung und Rollenklärung." },
        { label: "Bewältigung", description: "Umgang mit Stress, Konflikten und Krisen." },
        { label: "Perspektiven", description: "Zukunftsplanung und Entscheidungsfindung." }
      ]
    },
    {
      title: "Erwachsene",
      aspects: [
        { label: "Klarheit", description: "Verstehen von Mustern und Lebenssituation." },
        { label: "Veränderung", description: "Begleitung bei Übergängen und Neuausrichtung." },
        { label: "Resilienz", description: "Stärkung innerer Widerstandskraft." },
        { label: "Selbstfürsorge", description: "Förderung von Achtsamkeit und Balance." }
      ]
    }
  ];

  const qualifications = [
    "Klinische Neuropsychologie (GNP, PTK RP)",
    "Montessori-Pädagogin, internationale Montessori Vereinigung, Aachen",
    "Approbation KJP (VT, APV, Münster)",
    "Approbation PP in Vorbereitung (TP, LPP, Rinkerode)",
    "Psychotraumatologin (DeGPT, Berlin)",
    "Familien-Therapeutin (Bundeskonferenz für Erziehung, Fürth)"
  ];

  const workStations = [
    "Gemeinschaftskrankenhaus Herdecke",
    "LWL-KJP (Marl-Sinsen/Coesfeld)",
    "SPZ UKM",
    "Clemenshospital Münster (Pädiatrie/Neuropädiatrie)",
    "Eigene Praxis seit 2009 (KVWL seit 2014)"
  ];

  const teaching = [
    "Franz-Hitze-Haus Münster (Sterben & Tod)",
    "Akkon-Hochschule Berlin (Kommunikation mit schwer Kranken)",
    "Kinder-Psychosomatik/Neuropsychologie (Clemenshospital)"
  ];

  const memberships = [
    "Psychotherapeuten-Kammer NRW, PTK NRW",
    "Deutsche Psychotherapeuten-Vereinigung, DPtV",
    "Deutscher Berufsverband für Verhaltenstherapeuten, DBVT",
    "Gesellschaft für Neuropsychologie, GNP",
    "PsychotherapeutInnen Netzwerk Münster, PTN"
  ];

  return (
    <div className="min-h-screen bg-[#fff8ed]">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-[#F6A81A] hover:text-[#F6C544] hover:bg-[#F6A81A]/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Button>
          </div>

          {/* Hauptüberschrift */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dipl.-Psych. Christiane Navrátil
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kinder- und Jugendlichen-Psychotherapeutin (VT) | Klinische Neuropsychologin
            </p>
          </div>

          {/* Kurzprofil */}
          <Card className="bg-white shadow-lg border-0 mb-16">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-[#4A6A7B] mb-6">Über mich</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Diplom-Psychologin und Kinder- und Jugendlichen-Psychotherapeutin mit über 30 Jahren Erfahrung. Mein Weg führte von der Krankenschwester über das Psychologie-Studium zur Psychotherapie. Seit 2009 führe ich meine eigene Praxis in Münster, in der ich verhaltenstherapeutische Verfahren mit systemischen Elementen und tiefenpsychologischen Ansätzen verbinde.
              </p>
            </CardContent>
          </Card>

          {/* Qualifikationen */}
          <Card className="bg-white shadow-lg border-0 mb-16">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Qualifikationen</h2>
                <p className="text-gray-600">Mein beruflicher Werdegang</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex items-start gap-3 bg-gradient-to-r from-[#fff8ed] to-[#F6A81A]/5 p-4 rounded-lg border border-[#F6A81A]/10 hover:border-[#F6A81A]/20 transition-colors">
                    <div className="w-2 h-2 bg-[#F6A81A] rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                    <span className="text-gray-700 text-sm">{qual}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Zulassungen */}
          <Card className="bg-white shadow-lg border-0 mb-16">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Zulassungen</h2>
                <p className="text-gray-600">Meine behördlichen Zulassungen</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-start gap-3 bg-gradient-to-r from-[#fff8ed] to-[#F6A81A]/5 p-4 rounded-lg border border-[#F6A81A]/10 hover:border-[#F6A81A]/20 transition-colors">
                    <div className="w-2 h-2 bg-[#F6A81A] rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                    <span className="text-gray-700 text-sm">{badge}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Schwerpunkte & Methoden */}
          <Card className="bg-white shadow-lg border-0 mb-16">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Schwerpunkte & Methoden</h2>
                <p className="text-gray-600">Meine therapeutischen Ansätze</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {methods.map((method, index) => (
                  <div key={index} className="flex items-start gap-3 bg-gradient-to-r from-[#fff8ed] to-[#F6A81A]/5 p-4 rounded-lg border border-[#F6A81A]/10 hover:border-[#F6A81A]/20 transition-colors">
                    <div className="w-2 h-2 bg-[#F6A81A] rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                    <span className="text-gray-700 text-sm">{method}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Für wen ich arbeite */}
          <Card className="bg-white shadow-lg border-0 mb-16">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Für wen ich arbeite</h2>
                <p className="text-gray-600">Meine Zielgruppen und Ansätze</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {targetGroups.map((group, index) => (
                  <Card key={index} className="bg-[#fff8ed] border-[#F6A81A]/20 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-[#4A6A7B] mb-4 text-lg text-center">{group.title}</h3>
                      <div className="space-y-3">
                        {group.aspects.map((aspect, aspectIndex) => (
                          <div key={aspectIndex} className="flex items-start gap-3 bg-gradient-to-r from-[#fff8ed] to-[#F6A81A]/5 p-3 rounded-lg border border-[#F6A81A]/10">
                            <div className="w-2 h-2 bg-[#F6A81A] rounded-full mt-1.5 flex-shrink-0 shadow-sm"></div>
                            <div>
                              <div className="font-medium text-gray-800 text-sm">{aspect.label}</div>
                              <div className="text-gray-600 text-xs mt-1">{aspect.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Berufliche Stationen */}
          <Card className="bg-white shadow-lg border-0 mb-16">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Berufliche Stationen</h2>
                <p className="text-gray-600">Auswahl meiner beruflichen Erfahrung</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {workStations.map((station, index) => (
                  <div key={index} className="flex items-start gap-3 bg-gradient-to-r from-[#fff8ed] to-[#F6A81A]/5 p-4 rounded-lg border border-[#F6A81A]/10 hover:border-[#F6A81A]/20 transition-colors">
                    <div className="w-2 h-2 bg-[#F6A81A] rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                    <span className="text-gray-700 text-sm">{station}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Lehre & Vorträge */}
          <Card className="bg-white shadow-lg border-0 mb-16">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Lehre &amp; Vorträge</h2>
                <p className="text-gray-600">Auswahl meiner Lehrtätigkeit</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {teaching.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-gradient-to-r from-[#fff8ed] to-[#F6A81A]/5 p-4 rounded-lg border border-[#F6A81A]/10 hover:border-[#F6A81A]/20 transition-colors">
                    <div className="w-2 h-2 bg-[#F6A81A] rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Mitgliedschaften */}
          <Card className="bg-white shadow-lg border-0 mb-16">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Mitgliedschaften</h2>
                <p className="text-gray-600">Meine beruflichen Verbände</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {memberships.map((member, index) => (
                  <div key={index} className="flex items-start gap-3 bg-gradient-to-r from-[#fff8ed] to-[#F6A81A]/5 p-4 rounded-lg border border-[#F6A81A]/10 hover:border-[#F6A81A]/20 transition-colors">
                    <div className="w-2 h-2 bg-[#F6A81A] rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                    <span className="text-gray-700 text-sm">{member}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>



          {/* Zurück-Button */}
          <div className="text-center">
            <Button 
              onClick={() => navigate('/')}
              className="bg-[#F6A81A] hover:bg-[#F6C544] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
            >
              Zurück zur Startseite
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lebenslauf;

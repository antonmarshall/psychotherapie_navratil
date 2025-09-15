import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Lebenslauf = () => {
  const navigate = useNavigate();

  const trustBadges = [
    "Approbation KJP (VT)",
    "Klinische Neuropsychologin (GNP)",
    "Eigene Praxis seit 2009",
    "Kassenzulassung KVWL seit 2014"
  ];

  const methods = [
    "Verhaltenstherapie",
    "EMDR (Kinder/Jugendliche)",
    "Psychotraumatologie (DeGPT)",
    "Systemische Familienarbeit",
    "Kreative Verfahren",
    "Klinische Neuropsychologie"
  ];

  const targetGroups = [
    {
      title: "Kinder",
      description: "Spielerisch, sicherheits- und bindungsorientiert; Elternarbeit fest integriert."
    },
    {
      title: "Jugendliche", 
      description: "Klare Ziele, Selbstwirksamkeit, alltagsnahe Tools (z.B. Exposition, Skills)."
    },
    {
      title: "Erwachsene",
      description: "Fokussiert und wirksam, von VT bis tiefenpsychologisch fundierten Elementen."
    }
  ];

  const qualifications = [
    "Psychologie-Studium (WWU Münster)",
    "Approbation KJP (VT)",
    "Klinische Neuropsychologin (GNP)",
    "zzt. vertiefende Weiterbildung zur Psychologischen Psychotherapeutin (TP)",
    "Montessori-Pädagogin",
    "Zusatz: DeGPT Psychotraumatologie, EMDR (Kinder/Jugendliche), lösungsorientierte systemische Familienarbeit"
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
              <div className="flex flex-wrap gap-3 justify-center">
                {trustBadges.map((badge, index) => (
                  <Badge 
                    key={index} 
                    className="bg-[#4A6A7B]/10 text-[#4A6A7B] border-[#4A6A7B]/20 px-4 py-2 text-sm font-medium rounded-full hover:bg-[#4A6A7B] hover:text-white transition-colors"
                  >
                    {badge}
                  </Badge>
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
              <div className="flex flex-wrap gap-3 justify-center">
                {methods.map((method, index) => (
                  <Badge 
                    key={index} 
                    className="bg-[#4A6A7B]/10 text-[#4A6A7B] border-[#4A6A7B]/20 px-4 py-2 text-sm font-medium rounded-full hover:bg-[#4A6A7B] hover:text-white transition-colors"
                  >
                    {method}
                  </Badge>
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
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold text-[#4A6A7B] mb-3 text-lg">{group.title}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{group.description}</p>
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
              <div className="flex flex-wrap gap-3 justify-center">
                {workStations.map((station, index) => (
                  <Badge 
                    key={index} 
                    className="bg-[#4A6A7B]/10 text-[#4A6A7B] border-[#4A6A7B]/20 px-4 py-2 text-sm font-medium rounded-full hover:bg-[#4A6A7B] hover:text-white transition-colors"
                  >
                    {station}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Lehre & Vorträge */}
          <Card className="bg-white shadow-lg border-0 mb-16">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Lehre & Vorträge</h2>
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

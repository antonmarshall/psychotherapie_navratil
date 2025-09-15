import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Building, User, Mail, Phone, MapPin, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Impressum = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fff8ed]">
      <div className="container mx-auto px-6 py-20">
        {/* Header mit Zurück-Button */}
        <div className="mb-16">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-8 hover:bg-white/60 text-gray-600"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Startseite
          </Button>
          
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#fff8ed] shadow-lg">
                <Building className="w-10 h-10 text-[#F6A81A]" />
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Impressum
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Rechtliche Informationen zur Praxis für Psychotherapie
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Angaben gemäß § 5 TMG */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                <User className="w-6 h-6 text-[#F6A81A]" />
                Angaben gemäß § 5 TMG
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Diensteanbieter</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Dipl.-Psych. Christiane Navratil</strong></p>
                  <p>Kinder- und Jugendlichen-Psychotherapeutin</p>
                  <p>Hüffer-Str. 22</p>
                  <p>48149 Münster</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Kontaktdaten</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#F6A81A]" />
                    <span>Telefon: (0176) 96 34 60 95</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#F6A81A]" />
                    <span>E-Mail: christianenavratil@web.de</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Berufsbezeichnung und berufsrechtliche Regelungen */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#F6A81A]" />
                Berufsbezeichnung und berufsrechtliche Regelungen
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Berufsbezeichnung</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Kinder- und Jugendlichen-Psychotherapeutin</p>
                  <p>Verliehen durch: APV – Gesellschaft für Angewandte Psychologie und Verhaltensmedizin, Münster</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Zuständige Kammer</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Psychotherapeuten-Kammer Nordrhein-Westfalen (PTK NRW)</p>
                  <p>Tersteegenstr. 9</p>
                  <p>40474 Düsseldorf</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Berufsrecht</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Psychotherapeutengesetz (PsychThG)</p>
                  <p>Berufsordnung für Psychologische Psychotherapeuten und Kinder- und Jugendlichenpsychotherapeuten</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Aufsichtsbehörde */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                <Building className="w-6 h-6 text-[#F6A81A]" />
                Aufsichtsbehörde
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-gray-700">
                <p><strong>Kassenärztliche Vereinigung Westfalen-Lippe (KVWL)</strong></p>
                <p>Robert-Schimrigk-Str. 4-6</p>
                <p>44141 Dortmund</p>
                <p>Telefon: (0231) 94 42-0</p>
                <p>E-Mail: info@kvwl.de</p>
              </div>
            </CardContent>
          </Card>

          {/* Haftungsausschluss */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900">
                Haftungsausschluss
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Haftung für Inhalte</h3>
                <p className="text-gray-700">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Haftung für Links</h3>
                <p className="text-gray-700">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Urheberrecht</h3>
                <p className="text-gray-700">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Datenschutz */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900">
                Datenschutz
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Informationen zum Datenschutz finden Sie in unserer <a href="/datenschutz" className="text-[#F6A81A] hover:underline">Datenschutzerklärung</a>.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Impressum;

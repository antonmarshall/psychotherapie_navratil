import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Eye, Lock, Database, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Datenschutz = () => {
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
                <Shield className="w-10 h-10 text-[#F6A81A]" />
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Datenschutzerklärung
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Informationen zum Schutz Ihrer persönlichen Daten
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Verantwortlicher */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#F6A81A]" />
                Verantwortlicher für die Datenverarbeitung
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-gray-700">
                <p><strong>Dipl.-Psych. Christiane Navrátil</strong></p>
                <p>Kinder-, Jugendlichen- & Erwachsenen‑Psychotherapeutin</p>
                <p>Hüffer-Str. 22</p>
                <p>48149 Münster</p>
                <div className="flex items-center gap-2 mt-2">
                  <Phone className="w-4 h-4 text-[#F6A81A]" />
                  <span>(0176) 96 34 60 95</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#F6A81A]" />
                  <span>christianenavratil@web.de</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Erhebung und Verarbeitung personenbezogener Daten */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                <Database className="w-6 h-6 text-[#F6A81A]" />
                Erhebung und Verarbeitung personenbezogener Daten
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Beim Besuch unserer Website</h3>
                <p className="text-gray-700 mb-4">
                  Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) umfassen etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und Ähnliches.
                </p>
                <p className="text-gray-700">
                  Diese Informationen sind technisch bedingt und werden automatisch erfasst. Sie werden nicht mit anderen Datenquellen in Verbindung gebracht.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Kontaktformular</h3>
                <p className="text-gray-700 mb-4">
                  Wenn Sie uns über das Kontaktformular erreichen, werden die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse, Telefonnummer, Nachricht) zur Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
                <p className="text-gray-700">
                  Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Zweck der Datenverarbeitung */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                <Eye className="w-6 h-6 text-[#F6A81A]" />
                Zweck der Datenverarbeitung
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-gray-700">
                <p>Die Verarbeitung Ihrer personenbezogenen Daten erfolgt für folgende Zwecke:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Zur Bereitstellung unserer Website und deren Inhalte</li>
                  <li>Zur Beantwortung Ihrer Anfragen über das Kontaktformular</li>
                  <li>Zur Verbesserung unserer Website und der Benutzerfreundlichkeit</li>
                  <li>Zur Erfüllung gesetzlicher Verpflichtungen</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Rechtsgrundlagen */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                <Lock className="w-6 h-6 text-[#F6A81A]" />
                Rechtsgrundlagen der Datenverarbeitung
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-gray-700">
                <p>Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf folgenden Rechtsgrundlagen:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Art. 6 Abs. 1 lit. a DSGVO:</strong> Einwilligung (bei Kontaktformular)</li>
                  <li><strong>Art. 6 Abs. 1 lit. b DSGVO:</strong> Vertragserfüllung oder vorvertragliche Maßnahmen</li>
                  <li><strong>Art. 6 Abs. 1 lit. c DSGVO:</strong> Erfüllung einer rechtlichen Verpflichtung</li>
                  <li><strong>Art. 6 Abs. 1 lit. f DSGVO:</strong> Berechtigtes Interesse (Website-Betrieb)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Speicherdauer */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900">
                Speicherdauer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-gray-700">
                <p>Ihre personenbezogenen Daten werden nur so lange gespeichert, wie es für die genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen dies vorschreiben.</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Server-Logfiles:</strong> 7 Tage</li>
                  <li><strong>Kontaktformular-Daten:</strong> Bis zur vollständigen Bearbeitung Ihrer Anfrage, maximal 2 Jahre</li>
                  <li><strong>Cookies:</strong> Je nach Cookie-Typ (siehe Cookie-Richtlinie)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Ihre Rechte */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900">
                Ihre Rechte
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-gray-700">
                <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Auskunftsrecht:</strong> Sie können Auskunft über die zu Ihrer Person gespeicherten Daten verlangen</li>
                  <li><strong>Berichtigungsrecht:</strong> Sie können die Berichtigung falscher Daten verlangen</li>
                  <li><strong>Löschungsrecht:</strong> Sie können die Löschung Ihrer Daten verlangen</li>
                  <li><strong>Einschränkungsrecht:</strong> Sie können die Einschränkung der Verarbeitung verlangen</li>
                  <li><strong>Widerspruchsrecht:</strong> Sie können der Verarbeitung widersprechen</li>
                  <li><strong>Datenübertragbarkeit:</strong> Sie können die Übertragung Ihrer Daten verlangen</li>
                </ul>
                <p className="mt-4">
                  Zur Ausübung dieser Rechte kontaktieren Sie uns bitte unter den oben genannten Kontaktdaten.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900">
                Cookies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-gray-700">
                <p>Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.</p>
                <p>Wir verwenden nur technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Diese Cookies werden automatisch gesetzt und können nicht deaktiviert werden.</p>
                <p>Weitere Cookies (z.B. Analyse-Cookies) werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt.</p>
              </div>
            </CardContent>
          </Card>

          {/* Datensicherheit */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900">
                Datensicherheit
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-gray-700">
                <p>Zum Schutz Ihrer Daten bei der Übertragung verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z.B. SSL) über HTTPS.</p>
                <p>Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen Manipulation, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen.</p>
              </div>
            </CardContent>
          </Card>

          {/* Änderungen der Datenschutzerklärung */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900">
                Änderungen der Datenschutzerklärung
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
              </p>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#F6A81A]" />
                Cookies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-gray-700">
                <p>
                  Diese Website verwendet nur technisch notwendige Cookies für die Grundfunktionen. 
                  Ich sammle keine persönlichen Daten oder analysiere Ihr Verhalten.
                </p>
                <p>
                  Die verwendeten Cookies sind ausschließlich für die ordnungsgemäße Funktion der Website erforderlich 
                  und können nicht deaktiviert werden.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Kontakt */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900">
                Kontakt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten wenden Sie sich bitte an:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Dipl.-Psych. Christiane Navrátil</strong></p>
                <p>Hüffer-Str. 22, 48149 Münster</p>
                <p>E-Mail: christianenavratil@web.de</p>
                <p>Telefon: (0176) 96 34 60 95</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;

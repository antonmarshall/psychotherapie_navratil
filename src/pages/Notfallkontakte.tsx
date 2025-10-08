import { AlertTriangle, Phone, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Notfallkontakte = () => {
  const navigate = useNavigate();
  const regionalContacts = [
    {
      region: "Kreis Münster",
      contacts: [
        {
          group: "Kinder und Jugendliche unter 18 Jahre",
          entries: [
            { place: "Universitätsklinikum Münster", phone: "(0251) 83 56 67 3" }
          ]
        },
        {
          group: "Jugendliche über 18 Jahre und Erwachsene",
          entries: [
            { place: "Universitätsklinikum Münster", phone: "(0251) 83 56 60 1" },
            { place: "LWL-Klinik", phone: "(0251) 91 55 50" }
          ]
        }
      ]
    },
    {
      region: "Kreis Coesfeld",
      contacts: [
        {
          group: "Kinder und Jugendliche unter 18 Jahre",
          entries: [
            { place: "LWL-Klinik Marl-Sinsen", phone: "(02365) 80 20" }
          ]
        },
        {
          group: "Jugendliche über 18 Jahre und Erwachsene",
          entries: [
            { place: "Klinik am Schloßgarten", phone: "(02594) 92 01" }
          ]
        }
      ]
    },
    {
      region: "Kreis Steinfurt",
      contacts: [
        {
          group: "Kinder und Jugendliche unter 18 Jahre",
          entries: [
            { place: "Universitätsklinikum Münster", phone: "(0251) 83 56 67 3" }
          ]
        },
        {
          group: "Jugendliche über 18 Jahre und Erwachsene",
          entries: [
            { place: "LWL-Klinik Lengerich", phone: "(05481) 120" }
          ]
        }
      ]
    },
    {
      region: "Kreis Warendorf",
      contacts: [
        {
          group: "Kinder und Jugendliche unter 18 Jahre",
          entries: [
            { place: "LWL-Klinik Hamm", phone: "(02381) 89 30" }
          ]
        },
        {
          group: "Jugendliche über 18 Jahre und Erwachsene",
          entries: [
            { place: "St. Rochus-Hospital Telgte", phone: "(02504) 600" },
            { place: "LWL-Klinik Lippstadt", phone: "(02945) 98 101" }
          ]
        }
      ]
    },
    {
      region: "Kreis Borken",
      contacts: [
        {
          group: "Kinder und Jugendliche unter 18 Jahre",
          entries: [
            { place: "LWL-Klinik Marl-Sinsen", phone: "(02365) 80 20" }
          ]
        },
        {
          group: "Jugendliche über 18 Jahre und Erwachsene",
          entries: [
            { place: "LWL-Klinik Münster", phone: "(0251) 91 55 50" },
            { place: "St. Vinzenz-Hospital Rhede", phone: "(02872) 80 22 01" },
            { place: "Lukas-Krankenhaus Gronau", phone: "(02562) 790" }
          ]
        }
      ]
    }
  ];

  const generalEmergencyContacts = [
    { name: "Polizei", phone: "110", isEmergency: true },
    { name: "Ärztlicher Bereitschafts-Dienst", phone: "116 117", isEmergency: true },
    { name: "Krisenhilfe Münster", phone: "(0251) 51 90 05" },
    { name: "Kinder-Krisen-Hilfe Münster", phone: "(0251) 13 30 444" },
    { name: "Telefon-Seelsorge", phone: "(0800) 11 10 111" },
    { name: "Kinder- und Jugend-Telefon", phone: "(0800) 11 10 333" },
    { name: "Frauen-Notdienst in Münster", phone: "(0251) 34 443" }
  ];

  return (
    <div className="min-h-screen bg-section-dark">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-primary hover:text-primary-hover hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Button>
          </div>

          {/* Hauptüberschrift */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notfall-Kontakte
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Wichtige Telefonnummern für psychische Notfälle
            </p>
          </div>

          {/* Wichtiger Hinweis */}
          <Card className="bg-red-50 border-2 border-red-300 mb-8 md:mb-12 shadow-lg">
            <CardContent className="p-4 md:p-8">
              <div className="flex items-start gap-2 md:gap-3">
                <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-red-900 mb-2">
                    In akuten Notfällen
                  </h3>
                  <p className="text-sm md:text-base text-red-800 mb-3 md:mb-4">
                    Bei akuter Selbst- oder Fremdgefährdung wählen Sie bitte sofort:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                    <a 
                      href="tel:110" 
                      className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold text-sm md:text-lg shadow-lg transition-all duration-200"
                    >
                      <Phone className="w-4 h-4 md:w-5 md:h-5" />
                      Polizei: 110
                    </a>
                    <a 
                      href="tel:116117" 
                      className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold text-sm md:text-lg shadow-lg transition-all duration-200"
                    >
                      <Phone className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="text-center">Ärztl. Bereitschaftsdienst: 116 117</span>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Allgemeine Hilfs- und Beratungskontakte */}
          <Card className="bg-white shadow-lg border-0 mb-8 md:mb-16">
            <CardContent className="p-4 md:p-8">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Hilfs- und Beratungs-Kontakte</h2>
                <p className="text-sm md:text-base text-gray-600">Weitere wichtige Anlaufstellen</p>
              </div>
              <div className="grid gap-3 md:grid-cols-2 md:gap-4">
                {generalEmergencyContacts.map((contact, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 p-3 md:p-4 rounded-lg border transition-all duration-300 ${
                      contact.isEmergency 
                        ? 'bg-red-50 border-red-300 hover:border-red-400' 
                        : 'bg-white border-primary/10 hover:border-primary/20'
                    }`}
                  >
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className={`w-2 h-2 rounded-full mt-1.5 md:mt-2 flex-shrink-0 shadow-sm ${
                        contact.isEmergency ? 'bg-red-600' : 'bg-primary'
                      }`}></div>
                      <span className={`font-semibold text-sm md:text-base ${
                        contact.isEmergency ? 'text-red-900' : 'text-gray-900'
                      }`}>
                        {contact.name}
                      </span>
                    </div>
                    <a 
                      href={`tel:${contact.phone.replace(/\s/g, '').replace(/\(|\)/g, '')}`}
                      className={`inline-flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-lg font-bold text-sm md:text-base transition-all duration-200 w-full sm:w-auto ${
                        contact.isEmergency 
                          ? 'bg-red-600 hover:bg-red-700 text-white' 
                          : 'bg-primary hover:bg-primary-hover text-white'
                      }`}
                    >
                      <Phone className="w-4 h-4" />
                      {contact.phone}
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Regionale Psychiatrische Kliniken */}
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              Psychiatrische Kliniken nach Region
            </h2>
            <p className="text-sm md:text-base text-gray-600">Notfall-Anlaufstellen in Ihrer Region</p>
          </div>
          
          <div className="space-y-4 md:space-y-6">
              {regionalContacts.map((region, regionIndex) => (
                <Card key={regionIndex} className="shadow-lg bg-white border-0 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary to-primary-hover text-white p-4 md:p-6">
                    <CardTitle className="text-lg md:text-xl font-semibold">{region.region}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 md:p-8">
                    <div className="space-y-4 md:space-y-6">
                      {region.contacts.map((contactGroup, groupIndex) => (
                        <div key={groupIndex}>
                          <h4 className="font-semibold text-accent2-custom mb-3 md:mb-4 text-sm md:text-base">
                            {contactGroup.group}
                          </h4>
                          <div className="space-y-2 md:space-y-3">
                            {contactGroup.entries.map((entry, entryIndex) => (
                              <div 
                                key={entryIndex} 
                                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 p-3 md:p-4 bg-white rounded-lg border border-primary/10 hover:border-primary/20 transition-colors"
                              >
                                <div className="flex items-start gap-2 md:gap-3">
                                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5 md:mt-2 flex-shrink-0 shadow-sm"></div>
                                  <span className="font-medium text-gray-900 text-xs md:text-sm">{entry.place}</span>
                                </div>
                                <a 
                                  href={`tel:${entry.phone.replace(/\s/g, '').replace(/\(|\)/g, '')}`}
                                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-3 md:px-4 py-2 rounded-lg font-medium transition-all duration-200 w-full sm:w-auto text-xs md:text-sm"
                                >
                                  <Phone className="w-3 h-3 md:w-4 md:h-4" />
                                  {entry.phone}
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

          {/* Hinweis am Ende */}
          <Card className="mt-8 md:mt-16 bg-blue-50 border-2 border-blue-300 shadow-lg">
            <CardContent className="p-4 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">
                Hinweis
              </h3>
              <p className="text-sm md:text-base text-blue-800">
                Diese Kontakte dienen der Notfallversorgung außerhalb meiner Sprechzeiten. 
                Für reguläre Terminvereinbarungen kontaktieren Sie mich bitte während meiner 
                telefonischen Sprechzeiten (Montags 9-12 Uhr) oder nutzen Sie das Kontaktformular.
              </p>
            </CardContent>
          </Card>

          {/* Zurück-Button */}
          <div className="text-center mt-8 md:mt-16">
            <Button 
              onClick={() => navigate('/')}
              className="bg-primary hover:bg-primary-hover text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold shadow-lg w-full sm:w-auto"
            >
              Zurück zur Startseite
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notfallkontakte;


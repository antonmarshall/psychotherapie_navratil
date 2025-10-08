import { AlertTriangle, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Notfallkontakte = () => {
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
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <Link 
              to="/psychotherapie_navratil/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Notfall-Kontakte</h1>
                <p className="text-lg text-gray-600 mt-2">
                  Wichtige Telefonnummern für psychische Notfälle
                </p>
              </div>
            </div>
          </div>

          {/* Wichtiger Hinweis */}
          <Card className="bg-red-50 border-2 border-red-300 mb-8 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-red-900 mb-2">
                    In akuten Notfällen
                  </h3>
                  <p className="text-red-800 mb-3">
                    Bei akuter Selbst- oder Fremdgefährdung wählen Sie bitte sofort:
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="tel:110" 
                      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg transition-all duration-200"
                    >
                      <Phone className="w-5 h-5" />
                      Polizei: 110
                    </a>
                    <a 
                      href="tel:116117" 
                      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg transition-all duration-200"
                    >
                      <Phone className="w-5 h-5" />
                      Ärztlicher Bereitschaftsdienst: 116 117
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Allgemeine Hilfs- und Beratungskontakte */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Hilfs- und Beratungs-Kontakte
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {generalEmergencyContacts.map((contact, index) => (
                <Card 
                  key={index} 
                  className={`shadow-lg hover:shadow-xl transition-all duration-300 ${
                    contact.isEmergency ? 'border-2 border-red-400 bg-red-50' : 'bg-white'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className={`font-semibold text-lg ${
                          contact.isEmergency ? 'text-red-900' : 'text-gray-900'
                        }`}>
                          {contact.name}
                        </h3>
                      </div>
                      <a 
                        href={`tel:${contact.phone.replace(/\s/g, '').replace(/\(|\)/g, '')}`}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all duration-200 ${
                          contact.isEmergency 
                            ? 'bg-red-600 hover:bg-red-700 text-white' 
                            : 'bg-primary hover:bg-primary-hover text-white'
                        }`}
                      >
                        <Phone className="w-4 h-4" />
                        {contact.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Regionale Psychiatrische Kliniken */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Psychiatrische Kliniken nach Region
            </h2>
            <div className="space-y-8">
              {regionalContacts.map((region, regionIndex) => (
                <Card key={regionIndex} className="shadow-lg bg-white overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary to-primary-hover text-white">
                    <CardTitle className="text-2xl">{region.region}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {region.contacts.map((contactGroup, groupIndex) => (
                        <div key={groupIndex}>
                          <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                            {contactGroup.group}
                          </h4>
                          <div className="space-y-3 ml-4">
                            {contactGroup.entries.map((entry, entryIndex) => (
                              <div 
                                key={entryIndex} 
                                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                              >
                                <div className="mb-2 sm:mb-0">
                                  <p className="font-medium text-gray-900">{entry.place}</p>
                                </div>
                                <a 
                                  href={`tel:${entry.phone.replace(/\s/g, '').replace(/\(|\)/g, '')}`}
                                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 w-fit"
                                >
                                  <Phone className="w-4 h-4" />
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
          </section>

          {/* Hinweis am Ende */}
          <Card className="mt-12 bg-blue-50 border-2 border-blue-300 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Hinweis
              </h3>
              <p className="text-blue-800">
                Diese Kontakte dienen der Notfallversorgung außerhalb meiner Sprechzeiten. 
                Für reguläre Terminvereinbarungen kontaktieren Sie mich bitte während meiner 
                telefonischen Sprechzeiten (Montags 9-12 Uhr) oder nutzen Sie das Kontaktformular.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Notfallkontakte;


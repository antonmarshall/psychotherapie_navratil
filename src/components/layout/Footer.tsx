import { Phone, Mail, MapPin, Clock, Heart, AlertTriangle } from "lucide-react";

const Footer = () => {
  const emergencyContacts = [
    {
      group: "Kinder und Jugendliche unter 18 Jahre",
      place: "Universitätsklinikum Münster",
      phone: "(0251) 83 56 67 3"
    },
    {
      group: "Jugendliche über 18 Jahre und Erwachsene",
      place: "Universitätsklinikum Münster", 
      phone: "(0251) 83 56 60 1"
    },
    {
      group: "Erwachsene",
      place: "LWL-Klinik",
      phone: "(0251) 91 55 50"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Praxis Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-[#F6A81A]" />
              <h3 className="text-xl font-semibold">Praxis Navratil</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Professionelle psychologische Unterstützung für Kinder, Jugendliche und Familien in Münster.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#F6A81A] flex-shrink-0" />
                <div>
                  <p className="text-white">Hüffer-Str. 22</p>
                  <p className="text-gray-300">48149 Münster</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F6A81A] flex-shrink-0" />
                <a href="tel:+4917696346095" className="text-white hover:text-[#F6A81A] transition-colors">
                  (0176) 96 34 60 95
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F6A81A] flex-shrink-0" />
                <a href="mailto:christianenavratil@web.de" className="text-white hover:text-[#F6A81A] transition-colors">
                  christianenavratil@web.de
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#F6A81A] flex-shrink-0" />
                <span className="text-gray-300">Mo–Fr: 9–18 Uhr</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <a href="#person" className="text-gray-300 hover:text-[#F6A81A] transition-colors block">
                Über mich
              </a>
              <div className="ml-4 space-y-1">
                <a href="#angebot" className="text-gray-300 hover:text-[#F6A81A] transition-colors block text-sm">
                  Angebot
                </a>
                <a href="#behandlungskonzept" className="text-gray-300 hover:text-[#F6A81A] transition-colors block text-sm">
                  Behandlungskonzept
                </a>
                <a href="#behandlungsspektrum" className="text-gray-300 hover:text-[#F6A81A] transition-colors block text-sm">
                  Behandlungsspektrum
                </a>
                <a href="#methoden" className="text-gray-300 hover:text-[#F6A81A] transition-colors block text-sm">
                  Methoden
                </a>
              </div>
              <a href="#galerie" className="text-gray-300 hover:text-[#F6A81A] transition-colors block">
                Praxis
              </a>
              <div className="ml-4 space-y-1">
                <a href="#standort" className="text-gray-300 hover:text-[#F6A81A] transition-colors block text-sm">
                  Anfahrt
                </a>
              </div>
              <a href="#faq" className="text-gray-300 hover:text-[#F6A81A] transition-colors block">
                FAQ
              </a>
            </div>
          </div>

          {/* Rechtliches & Notfall-Kontakte */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <div className="space-y-3 mb-6">
              <a href="/impressum" className="text-gray-300 hover:text-[#F6A81A] transition-colors block">
                Impressum
              </a>
              <a href="/datenschutz" className="text-gray-300 hover:text-[#F6A81A] transition-colors block">
                Datenschutz
              </a>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4 mb-4">
              <h4 className="text-white font-medium mb-2">Sprechzeiten</h4>
              <p className="text-gray-300 text-sm">
                Montags von 9 bis 12 Uhr<br />
                Falls Sie mich nicht persönlich erreichen, hinterlassen Sie bitte eine Nachricht auf meinem AB. 
                Ich werde schnellstmöglich zurückrufen.
              </p>
            </div>

            {/* Notfall-Kontakte */}
            <div className="bg-red-900/30 border border-red-700 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <h4 className="text-red-400 font-medium text-sm">Notfall-Kontakte</h4>
              </div>
              <div className="space-y-2">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="text-xs">
                    <p className="text-gray-300 font-medium">{contact.group}</p>
                    <p className="text-gray-400">{contact.place}</p>
                    <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-red-400 hover:text-red-300 transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Dipl.-Psych. Christiane Navratil. Alle Rechte vorbehalten.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Kinder- und Jugendlichen-Psychotherapeutin • Hüffer-Str. 22, 48149 Münster
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

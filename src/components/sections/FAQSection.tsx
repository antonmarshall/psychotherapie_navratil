import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Für wen eignet sich die Psychotherapie?",
      answer: "Meine Praxis ist spezialisiert auf Kinder, Jugendliche und Familien. Ich behandle Kleinkinder, Vorschulkinder, Grundschulkinder, Jugendliche, Eltern und Erwachsene mit verschiedenen psychischen Belastungen."
    },
    {
      question: "Wie läuft eine Therapiesitzung ab?",
      answer: "Jede Sitzung wird individuell auf Sie abgestimmt. Wir beginnen mit einem kurzen Gespräch, dann folgt die therapeutische Arbeit und zum Abschluss reflektieren wir gemeinsam das Erlebte. Bei Kindern wird auch spielerisch gearbeitet."
    },
    {
      question: "Was kostet eine Therapiesitzung?",
      answer: "Die Kosten werden in der Regel von den Krankenkassen übernommen. Bei Selbstzahlern erstelle ich gerne ein individuelles Angebot. Sprechen Sie mich einfach darauf an."
    },
    {
      question: "Werden die Kosten von der Krankenkasse übernommen?",
      answer: "Ja, in der Regel übernehmen folgende Institutionen die Kosten: Gesetzliche Krankenkassen (bis 21 Jahre, bei Therapiebeginn vor dem 21. Lebensjahr ist Weiterbehandlung möglich), Private Krankenkassen (mit und ohne Beihilfe), Berufsgenossenschaften, sowie Kosten-Erstattungsverfahren bei neuropsychologischer Behandlung."
    },
    {
      question: "Wie lange dauert eine Therapie?",
      answer: "Die Dauer ist sehr individuell und hängt von der Art der Problematik ab. In der Regel dauert eine Therapie zwischen 20-50 Sitzungen. Wir besprechen den Verlauf regelmäßig und passen die Therapie an Ihre Fortschritte an."
    },
    {
      question: "Kann ich auch ohne Überweisung kommen?",
      answer: "Ja, Sie können auch ohne Überweisung zu mir kommen. Für die Kostenübernahme durch die Krankenkasse ist jedoch eine Überweisung vom Hausarzt oder Kinderarzt erforderlich. Ich helfe Ihnen gerne bei der Klärung der Formalitäten."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#fff8ed] mb-6 shadow-lg">
              <HelpCircle className="w-8 h-8 text-[#F6A81A]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hier finden Sie Antworten auf die wichtigsten Fragen zu meiner Praxis
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden"
              >
                <CardHeader 
                  className="cursor-pointer hover:bg-gray-50 transition-colors p-6"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <CardTitle className="flex justify-between items-center text-left">
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-[#F6A81A] transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </CardTitle>
                </CardHeader>
                {openIndex === index && (
                  <CardContent className="pt-0 px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* Call-to-Action */}
          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto bg-[#fff8ed] border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Haben Sie weitere Fragen?
                </h3>
                <p className="text-gray-700 mb-6">
                  Falls Sie hier keine Antwort auf Ihre Frage gefunden haben, kontaktieren Sie mich gerne direkt. Ich helfe Ihnen weiter!
                </p>
                <button 
                  className="inline-flex items-center gap-2 bg-[#F6A81A] hover:bg-[#F6C544] text-white px-6 py-3 rounded-lg font-medium shadow-lg transition-all duration-200"
                  onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <HelpCircle className="w-4 h-4" />
                  Kontakt aufnehmen
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

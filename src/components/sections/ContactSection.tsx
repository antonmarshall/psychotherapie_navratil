
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Nachricht gesendet! Ich melde mich schnellstmöglich zurück.");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="kontakt" className="py-20 bg-[#fff8ed]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Kontakt
          </h2>
          <p className="text-xl text-gray-600">
            Melden Sie sich bei mir! Rufen Sie an oder schreiben Sie eine E-Mail.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Kontakt-Informationen */}
          <div>
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  Psychotherapeutische Praxis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-4">
                    Dipl.-Psych. Christiane Navratil
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#F6A81A] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-800 font-medium">Hüffer-Str. 22</p>
                        <p className="text-gray-600">48149 Münster</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#F6A81A] flex-shrink-0" />
                      <a href="tel:+4917696346095" className="text-gray-800 hover:text-[#F6A81A] transition-colors">
                        (0176) 96 34 60 95
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#F6A81A] flex-shrink-0" />
                      <a href="mailto:christianenavratil@web.de" className="text-gray-800 hover:text-[#F6A81A] transition-colors">
                        christianenavratil@web.de
                      </a>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#F6A81A] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-800 font-medium">Telefonische Sprechzeiten:</p>
                        <p className="text-gray-600">Montags von 9 bis 12 Uhr</p>
                        <p className="text-sm text-gray-500 mt-2">
                          Falls Sie mich nicht persönlich erreichen, hinterlassen Sie bitte eine Nachricht auf meinem AB. 
                          Ich werde schnellstmöglich zurückrufen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Kontakt-Formular */}
          <div>
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">
                  Nachricht senden
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      placeholder="Ihr Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="border-gray-300 focus:border-[#F6A81A]"
                    />
                    <Input
                      type="email"
                      placeholder="Ihre E-Mail"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="border-gray-300 focus:border-[#F6A81A]"
                    />
                  </div>
                  <Input
                    type="tel"
                    placeholder="Ihre Telefonnummer (optional)"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="border-gray-300 focus:border-[#F6A81A]"
                  />
                  <Textarea
                    placeholder="Ihre Nachricht"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="border-gray-300 focus:border-[#F6A81A] resize-none"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-[#F6A81A] hover:bg-[#F6C544] text-white py-3 rounded-lg transition-colors duration-300"
                  >
                    Nachricht senden
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

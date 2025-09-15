import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award, Users, Heart } from "lucide-react";

const Timeline = () => {
  const timelineData = [
    {
      year: "1965",
      title: "Geboren",
      description: "Ehefrau, Mutter und Großmutter",
      icon: Heart,
      color: "bg-pink-500"
    },
    {
      year: "1980er",
      title: "Krankenschwester",
      description: "Grundausbildung im Gesundheitswesen",
      icon: Award,
      color: "bg-blue-500"
    },
    {
      year: "1990er",
      title: "Psychologie-Studium",
      description: "Diplom-Psychologin",
      icon: GraduationCap,
      color: "bg-green-500"
    },
    {
      year: "2000er",
      title: "Therapeutische Ausbildungen",
      description: "Kinder- und Jugendlichen-Psychotherapeutin",
      icon: Award,
      color: "bg-purple-500"
    },
    {
      year: "2009",
      title: "Praxisgründung",
      description: "Eigene Praxistätigkeit",
      icon: Briefcase,
      color: "bg-orange-500"
    },
    {
      year: "Heute",
      title: "Lehr- und Vortragstätigkeit",
      description: "Montessori-Pädagogin, Heilpraktiker",
      icon: GraduationCap,
      color: "bg-red-500"
    }
  ];

  return (
    <section id="timeline" className="py-16 bg-gradient-to-b from-orange-200 to-yellow-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-block p-3 bg-yellow-300 rounded-full mb-4">
            <Users className="w-6 h-6 text-yellow-800" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Zu meiner Person
          </h2>
          <h3 className="text-xl text-rose-700 font-semibold mb-4">
            Dipl.-Psych. Christiane Navratil
          </h3>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Zentrale Linie */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-400 via-blue-400 via-green-400 via-purple-400 via-orange-400 to-red-400 rounded-full"></div>
            
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Karte */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          {index % 2 === 0 ? (
                            <>
                              <div>
                                <div className="text-sm font-bold text-white bg-gradient-to-r from-rose-500 to-orange-500 px-3 py-1 rounded-full">
                                  {item.year}
                                </div>
                              </div>
                              <div className={`p-2 ${item.color} text-white rounded-full`}>
                                <item.icon className="w-4 h-4" />
                              </div>
                            </>
                          ) : (
                            <>
                              <div className={`p-2 ${item.color} text-white rounded-full`}>
                                <item.icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-sm font-bold text-white bg-gradient-to-r from-rose-500 to-orange-500 px-3 py-1 rounded-full">
                                  {item.year}
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Mittelpunkt */}
                  <div className="w-2/12 flex justify-center">
                    <div className={`w-4 h-4 ${item.color} rounded-full border-4 border-white shadow-lg z-10`}></div>
                  </div>
                  
                  {/* Leerer Raum */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-rose-200 to-orange-200 border-0 shadow-lg">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Qualifikationen
              </h4>
              <div className="text-sm text-gray-700 space-y-2">
                <p>• Dipl.-Psychologin • Kinder- und Jugendlichen-Psychotherapeutin</p>
                <p>• Klinische Neuropsychologin • Heilpraktiker (Psychotherapie)</p>
                <p>• Montessori-Pädagogin • Krankenschwester</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

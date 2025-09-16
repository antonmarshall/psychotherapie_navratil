import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie } from 'lucide-react';

interface CookieBannerProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

const CookieBanner = ({ onAccept, onDecline }: CookieBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Prüfe, ob bereits eine Cookie-Einstellung gespeichert wurde
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    onAccept?.();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
    onDecline?.();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg p-6">
          {/* Content */}
          <div className="flex items-start gap-4 mb-4">
            <div className="p-2 bg-primary/10 rounded-full flex-shrink-0">
              <Cookie className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Datenschutz-Hinweis
              </h3>
              <p className="text-foreground leading-relaxed">
                Diese Website verwendet nur technisch notwendige Cookies für die Grundfunktionen.
                Ich sammle keine persönlichen Daten oder analysiere Ihr Verhalten.
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDecline}
              className="text-gray-400 hover:text-gray-600 flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <Button
              variant="outline"
              onClick={handleDecline}
              className="border-gray-300 hover:bg-muted"
            >
              Ablehnen
            </Button>
            <Button
              onClick={handleAccept}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Akzeptieren
            </Button>
          </div>

          {/* Privacy Notice */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-muted-foreground text-center">
              Weitere Informationen finden Sie in meinen{' '}
              <a href="/psychotherapie_navratil/datenschutz" className="text-link hover:text-link-hover underline">
                Datenschutzbestimmungen
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
import { Suspense, lazy } from 'react';
import Navigation from '../components/layout/Navigation';
import HeroSection from '../components/sections/HeroSection';
import WelcomeSection from '../components/sections/WelcomeSection';
import ServicesSection from '../components/sections/ServicesSection';
import TreatmentSpectrum from '../components/sections/TreatmentSpectrum';
import ContactSection from '../components/sections/ContactSection';
import PracticeGallery from '../components/sections/PracticeGallery';
import MethodsSection from '../components/sections/MethodsSection';
import MapSection from '../components/sections/MapSection';
import FAQSection from '../components/sections/FAQSection';
import Footer from '../components/layout/Footer';
import TreatmentConceptSection from "../components/sections/TreatmentConceptSection";
// Personenvorstellung
import PersonHero from '../components/sections/PersonHero';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16"> {/* Add top padding for fixed navigation */}
        <HeroSection />
        <WelcomeSection />
        
        {/* Personenvorstellung */}
        <PersonHero />
        
        <ServicesSection />
        <TreatmentConceptSection />
        <TreatmentSpectrum />
        <MethodsSection />
        
        <div id="galerie">
          <PracticeGallery />
        </div>
        <MapSection />
        <div id="faq">
          <FAQSection />
        </div>
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

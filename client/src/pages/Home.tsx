import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContactFormSection from "@/components/ContactFormSection";
import ServicesSection from "@/components/ServicesSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import ServiceAreasDetailedSection from "@/components/ServiceAreasDetailedSection";
import UrgencySection from "@/components/UrgencySection";
import SEOFAQSection from "@/components/SEOFAQSection";
import StructuredDataFAQ from "@/components/StructuredDataFAQ";
import SEOOptimizer from "@/components/SEOOptimizer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import DetailedServicesSection from "@/components/DetailedServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import B2BServicesSection from "@/components/B2BServicesSection";
import AboutSection from "@/components/AboutSection";
import RealizationsSection from "@/components/RealizationsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <SEOOptimizer />
      <StructuredDataFAQ />
      <LocalBusinessSchema />
      <Header />
      <HeroSection />
      <ContactFormSection />
      <ServicesSection />
      <ServiceAreasSection />
      <ServiceAreasDetailedSection />
      <UrgencySection />
      <SEOFAQSection />
      <WhyChooseSection />
      <B2BServicesSection />
      <DetailedServicesSection />
      <AboutSection />
      <RealizationsSection />
      <Footer />
    </div>
  );
}

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContactFormSection from "@/components/ContactFormSection";
import ServicesSection from "@/components/ServicesSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import DetailedServicesSection from "@/components/DetailedServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import AboutSection from "@/components/AboutSection";
import RealizationsSection from "@/components/RealizationsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection />
      <ContactFormSection />
      <ServicesSection />
      <ServiceAreasSection />
      <WhyChooseSection />
      <DetailedServicesSection />
      <AboutSection />
      <RealizationsSection />
      <Footer />
    </div>
  );
}

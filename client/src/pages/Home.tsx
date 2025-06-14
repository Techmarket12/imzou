import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContactFormSection from "@/components/ContactFormSection";
import ServicesSection from "@/components/ServicesSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection />
      <ContactFormSection />
      <ServicesSection />
      <ServiceAreasSection />
    </div>
  );
}

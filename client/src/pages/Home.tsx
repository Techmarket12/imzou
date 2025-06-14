import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ZoneInterventionSection from "@/components/ZoneInterventionSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection />
      <ZoneInterventionSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
}

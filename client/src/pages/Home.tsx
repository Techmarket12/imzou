import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <GallerySection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

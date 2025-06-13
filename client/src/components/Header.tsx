import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationItems = [
    { label: "Accueil", href: "accueil" },
    { label: "Nettoyage Toiture", href: "toiture" },
    { label: "Nettoyage Terrasse", href: "terrasse" },
    { label: "Nettoyage Façade", href: "facade" },
    { label: "Nos Réalisations", href: "realisations" },
    { label: "Qui Sommes-Nous ?", href: "about" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-[hsl(220,26%,14%)]/95 backdrop-blur-sm shadow-lg" : "bg-[hsl(220,26%,14%)]"
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[hsl(160,84%,39%)] to-[hsl(199,89%,48%)] rounded-full flex items-center justify-center">
              <i className="fas fa-water text-white text-xl"></i>
            </div>
            <span className="text-white text-xl font-bold">Aqua-BOB-L'éponge</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-[hsl(160,84%,39%)] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* CTA Button */}
          <Button 
            className="hidden lg:flex bg-[hsl(160,84%,39%)] hover:bg-[hsl(160,84%,35%)] text-white px-6 py-3 rounded-lg font-semibold transition-colors items-center space-x-2"
            onClick={() => scrollToSection("contact")}
          >
            <i className="fas fa-phone"></i>
            <span>Demander un Devis Gratuit</span>
          </Button>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="lg:hidden text-white">
                <i className="fas fa-bars text-xl"></i>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[hsl(220,26%,14%)] border-l border-white/10">
              <div className="flex flex-col space-y-6 mt-8">
                {navigationItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-white hover:text-[hsl(160,84%,39%)] transition-colors text-left"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  className="bg-[hsl(160,84%,39%)] hover:bg-[hsl(160,84%,35%)] text-white mt-4"
                  onClick={() => scrollToSection("contact")}
                >
                  Demander un Devis Gratuit
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoPath from "@assets/image_1749795372312.png";

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
    { label: "Nos prestations", href: "services" },
    { label: "Nos réalisations", href: "realisations" },
    { label: "Prop'Habitat Guadeloupe", href: "about" },
    { label: "Devenir franchisé", href: "franchise" },
    { label: "Couverture", href: "couverture" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoPath} 
              alt="Aqua-BOB-L'éponge" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[hsl(160,84%,39%)] transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>
          
          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline"
              className="border border-white/30 text-white hover:bg-white hover:text-black px-4 py-2 text-sm"
            >
              <i className="fas fa-info-circle mr-2"></i>
              Infos pratiques
            </Button>
            
            <Button 
              className="bg-[hsl(160,84%,39%)] hover:bg-[hsl(160,84%,35%)] text-white px-6 py-2 font-semibold text-sm"
              onClick={() => scrollToSection("contact")}
            >
              <i className="fas fa-phone mr-2"></i>
              Contactez-nous
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="lg:hidden text-white">
                <i className="fas fa-bars text-xl"></i>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/95 border-l border-white/10">
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
                  Contactez-nous
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "wouter";
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
    { label: "Accueil", href: "/", id: "nav-accueil", isRoute: true },
    { label: "Nettoyage Toitures", href: "/services/toiture", id: "nav-toitures", isRoute: true },
    { label: "Nettoyage Façades", href: "/services/facade", id: "nav-facades", isRoute: true },
    { label: "Nettoyage Terrasses", href: "/services/terrasse", id: "nav-terrasses", isRoute: true },
    { label: "Services B2B", href: "entreprises", id: "nav-entreprises", isRoute: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="w-full px-0 py-4">
        <div className="flex items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logoPath}
              alt="aqua-toiture-facade"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-white/90 hover:text-white text-lg font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#59D14C] transition-all group-hover:w-full"></span>
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white/90 hover:text-white text-lg font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#59D14C] transition-all group-hover:w-full"></span>
                </button>
              )
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border border-white/30  hover:bg-white hover:text-black px-4 py-2 text-sm"
            >
              <i className="fas fa-info-circle mr-2"></i>
              Infos pratiques
            </Button>

            <Button
              className="bg-[#27851E] hover:bg-[#1F6B15] text-white px-6 py-2 font-semibold text-sm"
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
            <SheetContent
              side="right"
              className="bg-black/95 border-l border-white/10"
            >
              <div className="flex flex-col space-y-6 mt-8">
                {navigationItems.map((item) => (
                  item.isRoute ? (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="text-white hover:text-[#59D14C] transition-colors text-left"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.href)}
                      className="text-white hover:text-[#59D14C] transition-colors text-left"
                    >
                      {item.label}
                    </button>
                  )
                ))}
                <Button
                  className="bg-[#59D14C] hover:bg-[#4AC93D] text-white mt-4"
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

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "./ThemeToggle";

import logoPath from "@assets/logo2.png";

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isRoute?: boolean;
}

const navigationItems: NavigationItem[] = [
  { id: "home", label: "Accueil", href: "/", isRoute: true },
  { id: "toiture", label: "Nettoyage Toitures", href: "/services/toiture", isRoute: true },
  { id: "facade", label: "Nettoyage Façades", href: "/services/facade", isRoute: true },
  { id: "terrasse", label: "Nettoyage Terrasses", href: "/services/terrasse", isRoute: true },
  { id: "b2b", label: "Services B2B", href: "/services/b2b", isRoute: true },
  { id: "contact", label: "Contact", href: "/contact", isRoute: true },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location !== "/") {
      // Mark that user is navigating to home from another page
      sessionStorage.setItem('navigatingToHome', 'true');
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-sm dark:bg-black/80 light:bg-white/95 light:shadow-md" 
          : "bg-transparent"
      }`}
    >
      <nav className="w-full px-0 py-4">
        <div className="flex items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logoPath}
              alt="aqua-toiture-facade"
              className="w-20 h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors dark:text-white/90 dark:hover:text-white light:text-gray-600 light:hover:text-gray-900"
                onClick={() => {
                  if (item.href === "/" && location !== "/") {
                    // Mark that user is navigating to home from another page
                    sessionStorage.setItem('navigatingToHome', 'true');
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border border-white/30 hover:bg-white hover:text-black px-4 py-2 text-sm dark:border-white/30 dark:hover:bg-white dark:hover:text-black light:border-gray-300 light:text-gray-700 light:hover:bg-gray-100 light:hover:text-gray-900"
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

            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="text-white dark:text-white">
                  <i className="fas fa-bars text-xl"></i>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-white border-l border-gray-200 dark:bg-black/95 dark:border-white/10"
              >
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Theme Toggle for Mobile */}
                  <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/10 pb-4">
                    <span className="text-gray-700 dark:text-white text-sm">Mode d'affichage</span>
                    <ThemeToggle />
                  </div>
                  
                  {navigationItems.map((item) => (
                    <Link
                      key={item.id}  
                      href={item.href}
                      className="text-gray-700 hover:text-[#27851E] dark:text-white dark:hover:text-[#59D14C] transition-colors text-left"
                      onClick={() => {
                        if (item.href === "/" && location !== "/") {
                          // Mark that user is navigating to home from another page
                          sessionStorage.setItem('navigatingToHome', 'true');
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button
                    className="bg-[#27851E] hover:bg-[#1F6B15] dark:bg-[#59D14C] dark:hover:bg-[#4AC93D] text-white mt-4"
                    onClick={() => scrollToSection("contact")}
                  >
                    Contactez-nous
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}

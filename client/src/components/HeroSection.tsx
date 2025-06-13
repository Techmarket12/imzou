import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Vue aérienne d'un nettoyage de toiture avec tuiles oranges" 
          className="w-full h-full object-cover scale-105" 
        />
        <div className="hero-overlay absolute inset-0 organic-shape"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Votre Extérieur. Notre <span className="text-[hsl(160,84%,39%)]">Expertise</span>. Votre <span className="text-[hsl(160,84%,39%)]">Sérénité</span>.
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 mb-8 animate-slide-up">
            Aqua-BOB-L'éponge : Spécialistes du nettoyage et de la protection des toitures, terrasses et façades en Wallonie & à Bruxelles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Button 
              className="bg-[hsl(160,84%,39%)] hover:bg-[hsl(160,84%,35%)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
              onClick={() => scrollToSection("contact")}
            >
              <i className="fas fa-calculator"></i>
              <span>Demander un Devis Gratuit</span>
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[hsl(220,26%,14%)] px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
              onClick={() => scrollToSection("services")}
            >
              <i className="fas fa-play"></i>
              <span>Découvrir Nos Services</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import logoPath from "@assets/image_1749795372312.png";
import videoPath from "@assets/Toiture_Nettoyage_Haute_Pression_1749795362619.mp4";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-green-900">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <div className="lg:col-span-6 space-y-8 lg:pr-12">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-white block">Votre Habitat</span>
                <span className="text-white block">vous protège &</span>
                <span className="text-[hsl(160,84%,39%)] block">Nous protégeons</span>
                <span className="text-[hsl(160,84%,39%)] block">votre Habitat</span>
              </h1>
              
              <p className="text-lg text-gray-200 max-w-lg leading-relaxed">
                L'entreprise <strong>Aqua-BOB-L'éponge</strong> est votre prestataire de confiance pour le 
                nettoyage de toiture. Nous vous proposons une solution de nettoyage 
                à l'extérieur à la vapeur et sans produit chimique à Tournai-en-Brie et 
                ses alentours.
              </p>
            </div>
            
            <Button 
              className="bg-[hsl(160,84%,39%)] hover:bg-[hsl(160,84%,35%)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={() => scrollToSection("contact")}
            >
              <i className="fas fa-phone mr-2"></i>
              Contactez-nous
            </Button>
          </div>
          
          {/* Right side - Large Circular Video */}
          <div className="lg:col-span-6 flex justify-end items-center relative">
            {/* Large circular video that partially extends beyond screen */}
            <div className="w-[600px] h-[600px] rounded-full overflow-hidden shadow-2xl border-4 border-white/20 relative transform translate-x-24">
              <video 
                autoPlay 
                muted 
                loop 
                className="w-full h-full object-cover"
              >
                <source src={videoPath} type="video/mp4" />
                {/* Fallback image */}
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                  alt="Vue aérienne d'un nettoyage de toiture avec tuiles oranges" 
                  className="w-full h-full object-cover" 
                />
              </video>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-black/50 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/70 transition-all">
                  <i className="fas fa-play text-white text-2xl ml-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom section with video thumbnails */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-24 h-16 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
              <i className="fas fa-play text-white text-sm"></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import logoPath from "@assets/image_1749795372312.png";
import videoPath from "@assets/Toiture_Nettoyage_Haute_Pression_1749794531300.mp4";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-green-900"
    >
      {/* Desktop version */}
      <div className="hidden lg:flex lg:items-center lg:h-screen">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 w-full pt-20">
          <div className="grid lg:grid-cols-12 gap-2 items-center h-[90vh]">
            {/* Left side - Text content (smaller space) */}
            <div className="lg:col-span-4 space-y-8 pl-2 lg:pl-4">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-[#849FE1] block">Votre Habitat</span>
                  <span className="text-[#849FE1] block">vous protège &</span>
                  <span className="text-[#59D14C] block">Nous protégeons</span>
                  <span className="text-[#59D14C] block">votre Habitat</span>
                </h1>

                <p className="text-lg text-gray-200 max-w-lg leading-relaxed">
                  L'entreprise <strong>aqua-toiture-facade</strong> est votre
                  prestataire de confiance pour le nettoyage de toiture. <span className="text-[#59D14C] font-semibold">Nous
                  vous proposons une solution de nettoyage à l'extérieur à la
                  vapeur et sans produit chimique</span> à Tournai-en-Brie et ses
                  alentours.
                </p>
              </div>

              <Button
                className="bg-[#27851E] hover:bg-[#1F6B15] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                onClick={() => scrollToSection("contact")}
              >
                <i className="fas fa-phone mr-2"></i>
                Contactez-nous
              </Button>
            </div>

            {/* Right side - Large Circular Video taking more space and extending UP */}
            <div className="lg:col-span-8 relative overflow-hidden h-full">
              {/* Large circular video positioned to extend slightly beyond top and right */}
              <div className="absolute left-16 -top-40 right-0">
                <div className="w-[900px] h-[900px] rounded-full overflow-hidden shadow-2xl relative">
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  >
                    <source src={videoPath} type="video/mp4" />
                    <img
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
                      alt="Vue aérienne d'un nettoyage de toiture avec tuiles oranges"
                      className="w-full h-full object-cover"
                    />
                  </video>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="lg:hidden relative min-h-screen">
        {/* Dark navbar at top */}
        <div className="relative bg-gray-900 h-16 flex items-center justify-between px-4 z-30">
          <div className="flex items-center"></div>
        </div>

        {/* Video section */}
        <div className="relative h-[50vh] overflow-hidden">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            className="w-full h-full object-cover"
          >
            <source src={videoPath} type="video/mp4" />
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
              alt="Vue aérienne d'un nettoyage de toiture avec tuiles oranges"
              className="w-full h-full object-cover"
            />
          </video>

          {/* Play button */}

          {/* Gradient overlay at bottom of video */}
        </div>

        {/* Bottom section with content */}
        <div className="relative bg-gray-900 p-6 min-h-[50vh] flex flex-col justify-center">
          <h1 className="text-3xl font-bold leading-tight mb-4">
            <span className="text-white">Votre Habitat vous</span>
            <br />
            <span className="text-white">protège & </span>
            <span className="text-[#59D14C]">Nous</span>
            <br />
            <span className="text-[#59D14C]">protégeons votre Habitat</span>
          </h1>

          <p className="text-gray-300 mb-6 leading-relaxed">
            L'entreprise{" "}
            <span className="font-semibold text-[#59D14C]">
              aqua-toiture-facade
            </span>{" "}
            est votre prestataire de confiance pour le nettoyage de toiture.
            <span className="text-[#59D14C] font-semibold"> Nous vous proposons une solution de nettoyage à l'extérieur à la
            vapeur et sans produit chimique</span> à Tournai-en-Brie et ses alentours.
          </p>

          <Button
            className="bg-[#27851E] hover:bg-[#1F6B15] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-fit"
            onClick={() => scrollToSection("contact")}
          >
            <i className="fas fa-envelope mr-2"></i>
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}

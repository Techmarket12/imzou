import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoPath from "@assets/logo2.png";
import videoPath from "@assets/video_hero.mp4";
import fallbackImage from "@assets/toiture2.png";

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(true);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if user is navigating to home from another page
    const navigatingToHome = sessionStorage.getItem('navigatingToHome');
    if (navigatingToHome) {
      setShouldAutoPlay(false);
      // Clear the flag after using it
      sessionStorage.removeItem('navigatingToHome');
    } else {
      // Direct access to home page or refresh - allow autoplay
      setShouldAutoPlay(true);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
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

                <p className="text-lg text-gray-200 max-w-lg leading-relaxed">L'entreprise
                  <strong> Aqua-toiture-facade</strong> Entreprise spécialisé dans le nettoyage toitures , façades , terrasse en 10 année d’expérience.
                  <span className="text-[#59D14C] font-semibold">
                    Nous avons pu développé une solution haute pression écologique sans produite chimique
                  </span>{" "}
                  à Bruxelles capitale, Brabant wallon et le Brabant flamand.
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
                    ref={desktopVideoRef}
                    autoPlay={shouldAutoPlay}
                    muted
                    loop
                    preload="metadata"
                    className="w-full h-full object-cover"
                    onLoadedData={() => setVideoLoaded(true)}
                    onError={() => setVideoLoaded(false)}
                  >
                    <source src={videoPath} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="lg:hidden relative min-h-screen bg-gray-900">
        {/* Dark navbar at top */}
        <div className="relative bg-gray-900 h-16 flex items-center justify-between px-4 z-30">
          <div className="flex items-center"></div>
        </div>

        {/* Video section */}
        <div className="relative h-[55vh] overflow-hidden bg-gray-900">
          <video
            ref={mobileVideoRef}
            autoPlay={shouldAutoPlay}
            muted
            loop
            playsInline
            preload="metadata"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            className="w-full h-full object-contain"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoLoaded(false)}
            style={{ objectPosition: "center" }}
          >
            <source src={videoPath} type="video/mp4" />
          </video>

          {/* Play button */}

          {/* Gradient overlay at bottom of video */}
        </div>

        {/* Bottom section with content */}
        <div className="relative bg-gray-900 p-6 min-h-[45vh] flex flex-col justify-center">
          <h1 className="text-3xl font-bold leading-tight mb-4">
            <span className="text-white">Votre habitat</span>
            <br/>
              <span>vous protège & </span>
            <br/>
            <span className="text-[#59D14C]">Nous vous protégeons</span>
            
          </h1>

          <p className="text-gray-300 mb-6 leading-relaxed">
            <span className="font-semibold text-[#59D14C]">
              aqua-toiture-facade
            </span>{" "}
            - Spécialiste du nettoyage toiture Bruxelles, démoussage terrasse et nettoyage façade.
            <span className="text-[#59D14C] font-semibold">
              {" "}
              Solution haute pression écologique sans produit chimique
            </span>{" "}
            à Bruxelles, Anderlecht, Uccle, Ixelles, Brabant Wallon, Waterloo et Brabant Flamand.
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

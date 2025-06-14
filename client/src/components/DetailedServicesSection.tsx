import videoPath from "@assets/video-1_3b16_1749911399247.mp4";

export default function DetailedServicesSection() {
  const detailedServices = [
    "Nettoyage de toiture à la vapeur",
    "Nettoyage mécanique de toiture", 
    "Nettoyage de skydom",
    "Traitement hydrofuge incolore de toiture",
    "Traitement hydrofuge coloré de toiture",
    "Démoussage de toiture",
    "Nettoyage de façade",
    "Nettoyage de sol",
    "Traitement de toiture réflective",
    "Nettoyage de monuments historiques",
    "Nettoyage de mobilier urbain",
    "Nettoyage de panneaux solaires",
    "Nettoyage de bâtiments industriels",
    "Ravalement de façade"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Nettoyage de toiture et d'autres types de{" "}
                <span className="text-[#59D14C]">surfaces extérieurs</span> à Tournai-en-Brie
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Faites appel à notre équipe de professionnels pour la réalisation des travaux suivants :
              </p>
            </div>

            {/* Services list */}
            <div className="grid sm:grid-cols-2 gap-3">
              {detailedServices.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#59D14C] rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">{service}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                <span className="text-white font-semibold">Nous répondons aussi bien aux demandes des particuliers que des professionnels.</span>
              </p>
              <p className="text-[#59D14C] font-medium italic">
                Sollicitez nos services pour le nettoyage et l'entretien de toitures, façades et sols
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-[#59D14C] text-black px-6 py-3 rounded-lg font-bold text-lg">
                09 70 35 76 70
              </div>
              <div className="text-gray-300">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-phone text-[#59D14C]"></i>
                  <span className="text-sm">Devis gratuit par téléphone</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right video */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-[600px] object-cover"
              >
                <source src={videoPath} type="video/mp4" />
                <img
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Équipement professionnel de nettoyage"
                  className="w-full h-[600px] object-cover"
                />
              </video>
              
              {/* Video overlay with subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-black/50 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/70 transition-all backdrop-blur-sm">
                  <i className="fas fa-play text-white text-2xl ml-1"></i>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#59D14C] rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
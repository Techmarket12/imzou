import videoPath from "@assets/video2.mp4";

export default function DetailedServicesSection() {
  const detailedServices = [
    "Nettoyage de toiture à la vapeur (travail en hauteur)",
    "Nettoyage mécanique de toiture (travail en hauteur)",
    "Nettoyage de skydom (travail en hauteur)",
    "Traitement hydrofuge incolore de toiture (travail en hauteur)",
    "Traitement hydrofuge coloré de toiture (travail en hauteur)",
    "Démoussage de toiture (travail en hauteur)",
    "Nettoyage de façade (travail en hauteur)",
    "Nettoyage de sol",
    "Traitement de toiture réflective (travail en hauteur)",
    "Nettoyage de monuments historiques (travail en hauteur)",
    "Nettoyage de mobilier urbain",
    "Nettoyage de panneaux solaires (travail en hauteur)",
    "Nettoyage de bâtiments industriels (travail en hauteur)",
    "Ravalement de façade (travail en hauteur)",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Nettoyage de toiture et d'autres types de{" "}
                  <span className="text-[#59D14C]">surfaces extérieurs</span>
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Faites appel à notre équipe de professionnels pour la
                  réalisation des travaux suivants :
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
                <p className="text-gray-300 mb-4 text-center lg:text-left">
                  <span className="text-white font-semibold">
                    Nous répondons aussi bien aux demandes des particuliers que
                    des professionnels.
                  </span>
                </p>
                <p className="text-[#59D14C] font-medium italic text-center lg:text-left">
                  Sollicitez nos services pour le nettoyage et l'entretien de
                  toitures, façades et sols
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
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
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-full">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto rounded-2xl shadow-2xl"
                >
                  <source src={videoPath} type="video/mp4" />
                  Votre navigateur ne supporte pas les vidéos HTML5.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

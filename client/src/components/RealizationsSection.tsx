import { useState } from "react";
import galleryImage1 from "@assets/image_1749796907502.png";
import galleryImage2 from "@assets/image_1749797136347.png";
import galleryImage3 from "@assets/image_1749797561345.png";
import galleryImage4 from "@assets/image_1749797669448.png";
import galleryImage5 from "@assets/image_1749797801845.png";
import galleryImage6 from "@assets/image_1749797965900.png";

export default function RealizationsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const realizations = [
    {
      image:
        "https://media.discordapp.net/attachments/1086348722159484928/1382706144056967359/AJfQ9KS2eqv_ZV1aRHu0gDN4P46BqovFZjvlcQAHU3n7HPrlGpKOEEtM58LnvLHuQ1O7InuSH_SWbeQkEJ7GJtd286991CYzpaog7qm0qc6qIWFQuWEYtRA_S45SaLlSsYGSS4pKPUeLDgWe7ScMZRMarfxTbGVTgcTPmqR09H_r02gVbuSnlQs1024.png?ex=684ec3f2&is=684d7272&hm=da22788d59996a73ae6dd766418c50d546d876d0ada09858517a285129fcf3ee&=&format=webp&quality=lossless&width=930&height=930",
      title: "Nettoyage de toiture résidentielle",
      description: "Nettoyage complet avec démoussage",
    },
    {
      image:
        "https://media.discordapp.net/attachments/1086348722159484928/1382734753773387786/AJfQ9KTVkAFGgspGYpN6Zpn2DuRljdDkCDItMRAlvrR15T9mdtEU3QhUGN-rxix74o3xArtjtfUiBJtDfxc9HieGFgDN68HNtxMdTu-MoW_mnPsg9Z5Ly20rYSI-lP6eThOWpLhdfrm7OFkdPwmaPQg12ajlZWcApCO55afDijK9kARe38qG3Qs1024.png?ex=684ede97&is=684d8d17&hm=12607d978425f0d27b3d2e5decd19e88ca3ac55747a4f77aa0c6032b68bdf8ab&=&format=webp&quality=lossless&width=930&height=930",
      title: "Traitement haute pression",
      description: "Intervention sur toiture en tuiles",
    },
    {
      image:
        "https://media.discordapp.net/attachments/1086348722159484928/1382735095600910528/AJfQ9KScJeQLg6VBhbM6sXQ3JC0J5kfm4xmEdFqYosGoV_rSrG8K9LoCv3NExNGDfVlrB2d0sQCH6TS42jmBfPB3PCZrNZbFnMXIOEIpJ-qkNK2TuCUIE5oMUGcDEuWvJ-MCTq7Fzci_L_2QDdLQT4C1kSHavcsCk8hauYVfrUF2X-aSYnlHs1024.png?ex=684edee8&is=684d8d68&hm=529eff4393fb61c8dfe015a4a0867cf8136a98be2801a87a3ae0d7ae7a72dd40&=&format=webp&quality=lossless&width=930&height=930",
      title: "Vue aérienne avant/après",
      description: "Résultat spectaculaire de nos interventions",
    },
    {
      image:
        "https://media.discordapp.net/attachments/1086348722159484928/1382740979228082256/AJfQ9KQMrtQhtU0TIc-z8KTOAcF1I6NUYzftk0aDiP12vlypY2ggW6mXNdZSZEAmnU31pFn1PKr2Ynh7CPSLfG-xDwNreNoqiA1Gv6EVkNS6JlMco8p-uNULyBkU82BFGQ7CbLrphLxNpB6ScxcRLQqjXpD1vu65q6G9cKkurF-t62bE7Ysis1024.png?ex=684e3ba3&is=684cea23&hm=4fd78167e0bc4ae96fc4902d2e65b17abcc315390f1f36213b484a9c9534b037&=&format=webp&quality=lossless&width=930&height=930",
      title: "Nettoyage de toiture moderne",
      description: "Traitement écologique sans produits chimiques",
    },
    {
      image:
        "https://media.discordapp.net/attachments/1086348722159484928/1381884123500777472/toiture.jpg?ex=684e6961&is=684d17e1&hm=8f154192aa2d06cf7d1554134d49a727f4db4a8db7229742761613b60dc8b48a&=&format=webp&width=930&height=930",
      title: "Rénovation complète",
      description: "Nettoyage et traitement hydrofuge",
    },
    {
      image:
        "https://media.discordapp.net/attachments/1086348722159484928/1381882905198071858/hero.jpg?ex=684e683e&is=684d16be&hm=cbc38918bf4c71e6452159d2d0bb3f68420112c4fe79dd391db137e43e033bc4&=&format=webp&width=930&height=930",
      title: "Immeuble résidentiel",
      description: "Intervention sur bâtiment collectif",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-bl from-slate-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Nos <span className="text-[#59D14C]">réalisations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Nous utilisons des méthodes écologiques pour effectuer les travaux
            de nettoyage de toiture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {realizations.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <i className="fas fa-search-plus text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action button */}
        <div className="text-center mt-12">
          <button className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm">
            <i className="fas fa-images mr-2"></i>
            Galerie photos
          </button>
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Réalisation agrandie"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

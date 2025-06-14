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
      image: galleryImage1,
      title: "Nettoyage de toiture résidentielle",
      description: "Nettoyage complet avec démoussage"
    },
    {
      image: galleryImage2,
      title: "Traitement haute pression",
      description: "Intervention sur toiture en tuiles"
    },
    {
      image: galleryImage3,
      title: "Vue aérienne avant/après",
      description: "Résultat spectaculaire de nos interventions"
    },
    {
      image: galleryImage4,
      title: "Nettoyage de toiture moderne",
      description: "Traitement écologique sans produits chimiques"
    },
    {
      image: galleryImage5,
      title: "Rénovation complète",
      description: "Nettoyage et traitement hydrofuge"
    },
    {
      image: galleryImage6,
      title: "Immeuble résidentiel",
      description: "Intervention sur bâtiment collectif"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-bl from-slate-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Nos <span className="text-[#59D14C]">réalisations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Nous utilisons des méthodes écologiques pour effectuer les travaux de nettoyage de toiture.
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
                  <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
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
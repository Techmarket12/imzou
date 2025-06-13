import { Button } from "@/components/ui/button";
import galleryImage1 from "@assets/image_1749796907502.png";
import galleryImage2 from "@assets/image_1749797136347.png";
import galleryImage3 from "@assets/image_1749797561345.png";
import galleryImage4 from "@assets/image_1749797669448.png";
import galleryImage5 from "@assets/image_1749797801845.png";
import galleryImage6 from "@assets/image_1749797965900.png";
import galleryImage7 from "@assets/image_1749798146289.png";
import galleryImage8 from "@assets/image_1749798328274.png";

export default function GallerySection() {
  const portfolioItems = [
    {
      image: galleryImage1,
      title: "Nettoyage Toiture",
      location: "Wavre, Wallonie",
      alt: "Avant/après nettoyage de toiture"
    },
    {
      image: galleryImage2,
      title: "Nettoyage Terrasse",
      location: "Bruxelles",
      alt: "Terrasse moderne après nettoyage haute pression"
    },
    {
      image: galleryImage3,
      title: "Nettoyage Façade",
      location: "Namur, Wallonie",
      alt: "Façade de bâtiment après nettoyage professionnel"
    },
    {
      image: galleryImage4,
      title: "Nettoyage Complet",
      location: "Charleroi, Wallonie",
      alt: "Extérieur de maison moderne après nettoyage complet"
    },
    {
      image: galleryImage5,
      title: "Dallage Pierre",
      location: "Louvain-la-Neuve",
      alt: "Dallage en pierre impeccable après nettoyage"
    },
    {
      image: galleryImage6,
      title: "Nettoyage Professionnel",
      location: "Liège, Wallonie",
      alt: "Équipement de nettoyage haute pression en action"
    },
    {
      image: galleryImage7,
      title: "Rénovation Toiture",
      location: "Tournai, Wallonie",
      alt: "Toiture rénovée après traitement complet"
    },
    {
      image: galleryImage8,
      title: "Nettoyage Industriel",
      location: "Mons, Wallonie",
      alt: "Nettoyage industriel haute pression"
    }
  ];

  return (
    <section id="realisations" className="py-20 bg-gradient-to-r from-slate-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Nos Réalisations</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez quelques-unes de nos interventions récentes. Des résultats qui parlent d'eux-mêmes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src={item.image}
                alt={item.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-[#27851E] hover:bg-[#1F6B15] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Voir Toutes Nos Réalisations
          </Button>
        </div>
      </div>
    </section>
  );
}

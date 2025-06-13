import { Button } from "@/components/ui/button";

export default function GallerySection() {
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Nettoyage Toiture",
      location: "Wavre, Wallonie",
      alt: "Avant/après nettoyage de toiture"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Nettoyage Terrasse",
      location: "Bruxelles",
      alt: "Terrasse moderne après nettoyage haute pression"
    },
    {
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Nettoyage Façade",
      location: "Namur, Wallonie",
      alt: "Façade de bâtiment après nettoyage professionnel"
    },
    {
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Nettoyage Complet",
      location: "Charleroi, Wallonie",
      alt: "Extérieur de maison moderne après nettoyage complet"
    },
    {
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Dallage Pierre",
      location: "Louvain-la-Neuve",
      alt: "Dallage en pierre impeccable après nettoyage"
    },
    {
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Nettoyage Professionnel",
      location: "Liège, Wallonie",
      alt: "Équipement de nettoyage haute pression en action"
    }
  ];

  return (
    <section id="realisations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[hsl(220,26%,14%)] mb-4">Nos Réalisations</h2>
          <p className="text-xl text-[hsl(215,16%,47%)] max-w-3xl mx-auto">
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
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,26%,14%)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ZoneInterventionSection() {
  const zones = [
    {
      title: "Bruxelles-Capitale",
      description: "Interventions dans toute la région de Bruxelles-Capitale",
      features: [
        "Nettoyage résidentiel et commercial",
        "Intervention rapide en 24h",
        "Équipe locale expérimentée",
        "Devis gratuit sur place"
      ],
      icon: "fas fa-city",
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-600"
    },
    {
      title: "Brabant Wallon",
      description: "Service complet dans tout le Brabant wallon",
      features: [
        "Wavre, Ottignies, Nivelles",
        "Waterloo, Braine-l'Alleud",
        "Toutes communes du BW",
        "Déplacements inclus"
      ],
      icon: "fas fa-home",
      color: "from-green-600 to-green-800",
      bgColor: "bg-green-600"
    },
    {
      title: "Brabant Flamand",
      description: "Prestations dans le Brabant flamand",
      features: [
        "Louvain et périphérie",
        "Hal-Vilvorde",
        "Service bilingue",
        "Expertise reconnue"
      ],
      icon: "fas fa-map-marker-alt",
      color: "from-orange-600 to-orange-800",
      bgColor: "bg-orange-600"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-800 via-slate-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Nos Zones d'<span className="text-[#59D14C]">Intervention</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Aqua-BOB-L'éponge intervient dans trois provinces belges pour vous offrir 
            un service de proximité et une expertise reconnue partout en Belgique.
          </p>
        </div>

        {/* Zones Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {zones.map((zone, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${zone.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${zone.icon} text-white text-2xl`}></i>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{zone.title}</h3>
                <p className="text-gray-300 text-center mb-6">{zone.description}</p>
                
                <ul className="space-y-3">
                  {zone.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <i className="fas fa-check text-[#59D14C] mr-3 flex-shrink-0"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#59D14C]/20 to-[#27851E]/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Votre Zone est Couverte ?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Contactez-nous pour vérifier si nous intervenons dans votre commune 
              et recevez votre devis gratuit personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                className="bg-[#27851E] hover:bg-[#1F6B15] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
                onClick={scrollToContact}
              >
                <i className="fas fa-phone mr-2"></i>
                Demander un devis
              </Button>
              <div className="flex items-center text-gray-300">
                <i className="fas fa-clock text-[#59D14C] mr-2"></i>
                <span>Réponse sous 24h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Visual */}
        <div className="mt-16">
          <div className="bg-gray-900 rounded-2xl p-8 text-center">
            <h4 className="text-2xl font-bold text-white mb-4">Couverture Géographique</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-building text-white"></i>
                </div>
                <h5 className="font-semibold text-white">Bruxelles</h5>
                <p className="text-sm">19 communes</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-tree text-white"></i>
                </div>
                <h5 className="font-semibold text-white">Brabant Wallon</h5>
                <p className="text-sm">27 communes</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-landmark text-white"></i>
                </div>
                <h5 className="font-semibold text-white">Brabant Flamand</h5>
                <p className="text-sm">65 communes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
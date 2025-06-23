
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const bruxellesCommunes = [
  {
    name: "Anderlecht",
    services: ["nettoyage toiture Anderlecht", "démoussage toiture Anderlecht", "nettoyage terrasse Anderlecht", "nettoyage escalier extérieur Anderlecht", "nettoyage entrée maison Anderlecht"],
    population: "120,000 hab.",
    description: "Service professionnel de nettoyage toiture et façade à Anderlecht"
  },
  {
    name: "Uccle",
    services: ["nettoyage toiture Uccle", "démoussage toiture Uccle", "nettoyage terrasse Uccle", "nettoyage allée Uccle", "prix nettoyage toiture Uccle"],
    population: "85,000 hab.",
    description: "Spécialiste nettoyage haute pression et démoussage à Uccle"
  },
  {
    name: "Ixelles",
    services: ["nettoyage toiture Ixelles", "démoussage toiture Ixelles", "démoussage terrasse Ixelles", "nettoyage escalier extérieur Ixelles", "nettoyage façade avant ravalement Ixelles"],
    population: "87,000 hab.",
    description: "Expert en nettoyage toiture et traitement hydrofuge à Ixelles"
  },
  {
    name: "Etterbeek",
    services: ["nettoyage toiture Etterbeek", "démoussage toiture Etterbeek", "nettoyage façade Etterbeek", "nettoyage allée en pierre Etterbeek", "nettoyage façade crépi Etterbeek prix"],
    population: "48,000 hab.",
    description: "Service de nettoyage façade et terrasse à Etterbeek"
  },
  {
    name: "Saint-Gilles",
    services: ["nettoyage toiture Saint-Gilles", "démoussage toiture Saint-Gilles", "nettoyage façade Saint-Gilles", "nettoyage entrée Saint-Gilles", "nettoyage graffitis façade Saint-Gilles"],
    population: "50,000 hab.",
    description: "Nettoyage professionnel toiture et démoussage à Saint-Gilles"
  },
  {
    name: "Schaerbeek",
    services: ["nettoyage toiture Schaerbeek", "démoussage toiture Schaerbeek", "nettoyage façade Schaerbeek", "nettoyage allée Schaerbeek"],
    population: "133,000 hab.",
    description: "Intervention rapide nettoyage toiture et façade à Schaerbeek"
  }
];

const brabantWallon = [
  {
    name: "Wavre",
    services: ["nettoyage toiture Wavre", "démoussage toiture Wavre", "nettoyage terrasse Wavre", "traitement hydrofuge terrasse Wavre", "nettoyage allée pierre Wavre"],
    population: "35,000 hab.",
    description: "Spécialiste démoussage toiture et nettoyage terrasse à Wavre"
  },
  {
    name: "Waterloo",
    services: ["nettoyage toiture Waterloo", "démoussage toiture Waterloo", "nettoyage façade Waterloo", "nettoyage escalier Waterloo", "devis démoussage toiture Waterloo"],
    population: "30,000 hab.",
    description: "Expert nettoyage haute pression et traitement hydrofuge à Waterloo"
  },
  {
    name: "Braine-l'Alleud",
    services: ["nettoyage toiture Braine-l'Alleud", "démoussage toiture Braine-l'Alleud", "nettoyage façade Braine-l'Alleud", "nettoyage entrée Braine-l'Alleud", "traitement hydrofuge toit Braine-l'Alleud"],
    population: "39,000 hab.",
    description: "Service professionnel nettoyage toiture et façade à Braine-l'Alleud"
  },
  {
    name: "Nivelles",
    services: ["nettoyage toiture Nivelles", "démoussage toiture Nivelles", "nettoyage façade Nivelles", "nettoyage abords Nivelles"],
    population: "29,000 hab.",
    description: "Nettoyage toiture karcher et démoussage à Nivelles"
  }
];

const brabantFlamand = [
  {
    name: "Zaventem",
    services: ["nettoyage toiture Zaventem", "démoussage toiture Zaventem", "nettoyage façade Zaventem", "nettoyage escalier extérieur Zaventem", "nettoyage terrasse composite Zaventem"],
    population: "32,000 hab.",
    description: "Expert nettoyage toiture et terrasse composite à Zaventem"
  },
  {
    name: "Dilbeek",
    services: ["nettoyage toiture Dilbeek", "démoussage toiture Dilbeek", "nettoyage façade Dilbeek", "nettoyage entrée Dilbeek"],
    population: "42,000 hab.",
    description: "Service professionnel de nettoyage haute pression à Dilbeek"
  },
  {
    name: "Tervuren",
    services: ["nettoyage toiture Tervuren", "démoussage toiture Tervuren", "nettoyage façade Tervuren", "nettoyage allée Tervuren"],
    population: "21,000 hab.",
    description: "Spécialiste démoussage et nettoyage écologique à Tervuren"
  },
  {
    name: "Vilvoorde",
    services: ["nettoyage toiture Vilvoorde", "démoussage toiture Vilvoorde", "nettoyage façade Vilvoorde", "nettoyage terrasse Vilvoorde"],
    population: "45,000 hab.",
    description: "Intervention rapide nettoyage toiture et façade à Vilvoorde"
  }
];

export default function ServiceAreasDetailedSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Nettoyage Toiture <span className="text-[#59D14C]">Zones Couvertes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Service professionnel de nettoyage toiture Bruxelles, démoussage terrasse et nettoyage façade haute pression 
              dans toute la région de Bruxelles-Capitale, Brabant Wallon et Brabant Flamand.
            </p>
          </div>

          {/* Région de Bruxelles-Capitale */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="text-[#59D14C]">Région de Bruxelles-Capitale</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bruxellesCommunes.map((commune, index) => (
                <Card key={index} className="bg-gray-700/50 border-gray-600 hover:bg-gray-700/70 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-[#59D14C] text-xl">
                      {commune.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-gray-300 border-gray-500 w-fit">
                      {commune.population}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4 text-sm">
                      {commune.description}
                    </p>
                    <div className="space-y-2">
                      {commune.services.slice(0, 3).map((service, serviceIndex) => (
                        <div key={serviceIndex} className="text-xs text-gray-400 bg-gray-800/50 rounded px-2 py-1">
                          ✓ {service}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Brabant Wallon */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="text-[#59D14C]">Brabant Wallon</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {brabantWallon.map((commune, index) => (
                <Card key={index} className="bg-gray-700/50 border-gray-600 hover:bg-gray-700/70 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-[#59D14C] text-xl">
                      {commune.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-gray-300 border-gray-500 w-fit">
                      {commune.population}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4 text-sm">
                      {commune.description}
                    </p>
                    <div className="space-y-2">
                      {commune.services.slice(0, 3).map((service, serviceIndex) => (
                        <div key={serviceIndex} className="text-xs text-gray-400 bg-gray-800/50 rounded px-2 py-1">
                          ✓ {service}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Brabant Flamand */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="text-[#59D14C]">Brabant Flamand</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {brabantFlamand.map((commune, index) => (
                <Card key={index} className="bg-gray-700/50 border-gray-600 hover:bg-gray-700/70 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-[#59D14C] text-xl">
                      {commune.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-gray-300 border-gray-500 w-fit">
                      {commune.population}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4 text-sm">
                      {commune.description}
                    </p>
                    <div className="space-y-2">
                      {commune.services.slice(0, 3).map((service, serviceIndex) => (
                        <div key={serviceIndex} className="text-xs text-gray-400 bg-gray-800/50 rounded px-2 py-1">
                          ✓ {service}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Intervention Rapide dans Toute la Région
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Nettoyage toiture karcher Bruxelles, prix nettoyage toiture Uccle, 
              devis démoussage toiture Waterloo, traitement hydrofuge toiture. 
              Devis gratuit et intervention rapide garantie.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-[#59D14C] hover:bg-[#4AC93D] text-white font-semibold py-4 px-8 text-lg rounded-xl"
            >
              <i className="fas fa-map-marker-alt mr-3"></i>
              Devis Gratuit dans Votre Commune
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

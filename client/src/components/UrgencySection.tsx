import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const urgencyServices = [
  {
    title: "Nettoyage Toiture Urgence",
    icon: "fas fa-home",
    color: "text-red-400",
    bgColor: "bg-red-500/20",
    borderColor: "border-red-400/50",
    services: [
      "nettoyage toiture urgence",
      "nettoyage toiture après tempête", 
      "démoussage toiture rapide",
      "intervention rapide toiture"
    ],
    description: "Intervention d'urgence pour toitures endommagées ou dangereuses",
    responseTime: "2h max"
  },
  {
    title: "Intervention Rapide Façade",
    icon: "fas fa-building",
    color: "text-orange-400", 
    bgColor: "bg-orange-500/20",
    borderColor: "border-orange-400/50",
    services: [
      "intervention rapide nettoyage façade",
      "nettoyage façade après graffiti",
      "nettoyage extérieur après travaux",
      "urgence nettoyage façade"
    ],
    description: "Solutions rapides pour problèmes de façades urgents",
    responseTime: "4h max"
  },
  {
    title: "Nettoyage Terrasse Express",
    icon: "fas fa-th-large", 
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20",
    borderColor: "border-yellow-400/50",
    services: [
      "nettoyage terrasse express",
      "nettoyage terrasse glissante urgence",
      "nettoyage escalier urgent",
      "démoussage terrasse rapide"
    ],
    description: "Intervention express pour terrasses dangereuses",
    responseTime: "6h max"
  },
  {
    title: "Urgence Commerce B2B",
    icon: "fas fa-store",
    color: "text-purple-400",
    bgColor: "bg-purple-500/20", 
    borderColor: "border-purple-400/50",
    services: [
      "urgence nettoyage extérieur commerce",
      "nettoyage parking commerce urgent",
      "intervention rapide grande surface",
      "nettoyage haute pression immédiat"
    ],
    description: "Services d'urgence pour espaces commerciaux",
    responseTime: "1h max"
  }
];

const urgencyReasons = [
  {
    icon: "fas fa-exclamation-triangle",
    title: "Sécurité",
    examples: ["Terrasse glissante", "Toiture après tempête", "Escalier dangereux"]
  },
  {
    icon: "fas fa-clock",
    title: "Urgence Commerciale", 
    examples: ["Ouverture imminente", "Visite clients", "Inspection sanitaire"]
  },
  {
    icon: "fas fa-paint-brush",
    title: "Dégradations",
    examples: ["Graffitis sur façade", "Vandalisme", "Taches importantes"]
  },
  {
    icon: "fas fa-tools",
    title: "Post-Travaux",
    examples: ["Fin de chantier", "Résidus construction", "Nettoyage urgent"]
  }
];

const urgencyZones = [
  { zone: "Bruxelles", time: "30min", services: "Toutes urgences" },
  { zone: "Anderlecht", time: "45min", services: "Nettoyage urgence" },
  { zone: "Uccle", time: "45min", services: "Démoussage rapide" },
  { zone: "Ixelles", time: "45min", services: "Intervention façade" },
  { zone: "Wavre", time: "1h", services: "Urgence toiture" },
  { zone: "Waterloo", time: "1h", services: "Nettoyage express" },
  { zone: "Zaventem", time: "1h", services: "Commerce urgent" },
  { zone: "Dilbeek", time: "1h", services: "Terrasse express" }
];

export default function UrgencySection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-900/20 via-gray-800 to-orange-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="bg-red-500 text-white px-6 py-3 mb-8 text-lg font-semibold animate-pulse">
              🚨 SERVICES D'URGENCE 24H/7J
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-red-400">Intervention Rapide</span> Nettoyage
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              <strong>Nettoyage toiture urgence</strong>, <strong>intervention rapide nettoyage façade</strong>, 
              <strong>nettoyage terrasse express</strong> et <strong>urgence nettoyage extérieur commerce</strong>.
              Mobilisation immédiate dans toute la région de Bruxelles.
            </p>
          </div>

          {/* Services d'urgence */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {urgencyServices.map((service, index) => (
              <Card key={index} className={`bg-gray-700/50 border-gray-600 hover:bg-gray-700/70 transition-all duration-300 border-l-4 ${service.borderColor}`}>
                <CardHeader className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${service.bgColor} mb-4 mx-auto`}>
                    <i className={`${service.icon} ${service.color} text-2xl`}></i>
                  </div>
                  <CardTitle className="text-white text-lg">
                    {service.title}
                  </CardTitle>
                  <Badge className={`${service.bgColor} ${service.color} ${service.borderColor} w-fit mx-auto`}>
                    Réponse: {service.responseTime}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.services.map((item, serviceIndex) => (
                      <div key={serviceIndex} className="text-xs text-gray-400 bg-gray-800/50 rounded px-2 py-1">
                        🚨 {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Raisons d'urgence */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Situations d'<span className="text-red-400">Urgence</span> Fréquentes
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {urgencyReasons.map((reason, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-600 text-center">
                  <CardContent className="p-6">
                    <i className={`${reason.icon} text-red-400 text-3xl mb-4`}></i>
                    <h4 className="text-white font-bold mb-3">{reason.title}</h4>
                    <div className="space-y-1">
                      {reason.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="text-gray-400 text-sm">
                          • {example}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Temps d'intervention par zone */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Temps d'<span className="text-orange-400">Intervention</span> par Zone
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              {urgencyZones.map((zone, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-600">
                  <CardContent className="p-4 text-center">
                    <h4 className="text-[#59D14C] font-bold mb-1">{zone.zone}</h4>
                    <div className="text-orange-400 font-semibold mb-1">{zone.time}</div>
                    <div className="text-gray-400 text-xs">{zone.services}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Urgence */}
          <div className="text-center bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-xl p-8 border-2 border-red-400/50">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                <span className="text-red-400">Urgence ?</span> Contactez-nous Immédiatement
              </h3>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                <strong>Nettoyage toiture après tempête</strong>, <strong>démoussage toiture rapide</strong>, 
                <strong>nettoyage façade après graffiti</strong>, <strong>nettoyage terrasse glissante urgence</strong>.
                Intervention garantie dans les plus brefs délais.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button 
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 text-lg animate-pulse"
              >
                <i className="fas fa-phone mr-2"></i>
                Urgence: 0497175556
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white py-4 px-8 text-lg"
              >
                <i className="fas fa-envelope mr-2"></i>
                Contact Express
              </Button>
            </div>

            <div className="text-center">
              <Badge className="bg-green-500/20 text-green-300 border-green-400/50 px-4 py-2">
                ✓ Intervention 7j/7 - 24h/24 dans toute la région
              </Badge>
            </div>
          </div>

          {/* SEO Keywords footer */}
          <div className="mt-12 p-6 bg-gray-800/30 rounded-xl border border-gray-700">
            <h4 className="text-white font-bold mb-3 text-center text-sm">
              Mots-clés Urgence : Intervention Rapide
            </h4>
            <div className="text-center text-gray-500 text-xs leading-relaxed">
              <p className="mb-1">
                <strong className="text-red-400">Urgences Toiture :</strong> nettoyage toiture urgence • 
                nettoyage toiture après tempête • démoussage toiture rapide • intervention rapide toiture
              </p>
              <p className="mb-1">
                <strong className="text-orange-400">Urgences Façade :</strong> intervention rapide nettoyage façade • 
                nettoyage façade après graffiti • urgence nettoyage façade • nettoyage extérieur après travaux
              </p>
              <p className="mb-1">
                <strong className="text-yellow-400">Urgences Terrasse :</strong> nettoyage terrasse express • 
                nettoyage terrasse glissante urgence • démoussage terrasse rapide • nettoyage escalier urgent
              </p>
              <p>
                <strong className="text-purple-400">Urgences Commerce :</strong> urgence nettoyage extérieur commerce • 
                nettoyage parking commerce urgent • intervention rapide grande surface • nettoyage haute pression immédiat
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

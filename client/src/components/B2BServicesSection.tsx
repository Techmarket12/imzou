import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function B2BServicesSection() {
  const enterprises = [
    {
      name: "Carrefour",
      sector: "Grande distribution"
    },
    {
      name: "Delhaize",
      sector: "Supermarché"
    },
    {
      name: "Aldi",
      sector: "Commerce"
    },
    {
      name: "Lidl",
      sector: "Distribution"
    },
    {
      name: "Colruyt",
      sector: "Retail"
    },
    {
      name: "Brico",
      sector: "Bricolage"
    }
  ];

  const b2bServices = [
    {
      icon: "fas fa-building",
      title: "Nettoyage de façades commerciales",
      description: "Redonnez une image professionnelle à vos points de vente",
      features: ["Devantures", "Vitres", "Enseignes", "Murs extérieurs"]
    },
    {
      icon: "fas fa-home",
      title: "Entretien de toitures professionnelles",
      description: "Préservez l'intégrité de vos bâtiments commerciaux",
      features: ["Centres commerciaux", "Entrepôts", "Bureaux", "Usines"]
    },
    {
      icon: "fas fa-road",
      title: "Nettoyage d'espaces extérieurs",
      description: "Maintenez la propreté de vos zones de passage",
      features: ["Parkings", "Terrasses", "Cours", "Aires de livraison"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
              SERVICES PROFESSIONNELS B2B
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Nettoyage professionnel pour{" "}
              <span className="text-[#59D14C]">entreprises</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Faites confiance à notre expertise pour l'entretien de vos locaux commerciaux. 
              Nous intervenons pour les grandes enseignes, PME et collectivités.
            </p>
          </div>

          {/* Logos des entreprises */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Ils nous font confiance
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {enterprises.map((enterprise, index) => (
                <div 
                  key={index}
                  className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-[#59D14C]/50 text-center"
                >
                  <h4 className="text-white font-semibold text-lg mb-2">{enterprise.name}</h4>
                  <p className="text-gray-400 text-sm">{enterprise.sector}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services B2B */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {b2bServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gray-700/90 backdrop-blur-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-[#59D14C]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className={`${service.icon} text-[#59D14C] text-3xl`}></i>
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-[#59D14C] transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white flex items-center">
                      <i className="fas fa-check-circle text-[#59D14C] mr-2"></i>
                      Applications
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-300"
                        >
                          <i className="fas fa-chevron-right text-[#59D14C] mr-3 text-sm"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Avantages B2B */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Pourquoi choisir nos services B2B ?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#59D14C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-calendar-alt text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Interventions planifiées</h4>
                      <p className="text-gray-300 text-sm">Contrats d'entretien régulier adaptés à vos besoins</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#59D14C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-clock text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Horaires flexibles</h4>
                      <p className="text-gray-300 text-sm">Intervention en dehors des heures d'ouverture</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#59D14C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-file-invoice text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Facturation simplifiée</h4>
                      <p className="text-gray-300 text-sm">Devis détaillés et facturation mensuelle</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#59D14C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-shield-alt text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Assurance complète</h4>
                      <p className="text-gray-300 text-sm">Couverture professionnelle pour tous nos services</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-[#59D14C]/10 rounded-2xl p-8 border border-[#59D14C]/20">
                  <h4 className="text-2xl font-bold text-white mb-4">
                    Devis personnalisé
                  </h4>
                  <p className="text-gray-300 mb-6">
                    Obtenez une offre adaptée à vos besoins spécifiques
                  </p>
                  <div className="space-y-3">
                    <Button
                      size="lg"
                      className="w-full bg-[#59D14C] hover:bg-[#27851E] text-white font-semibold"
                      onClick={scrollToContact}
                    >
                      <i className="fas fa-envelope mr-2"></i>
                      Demander un devis B2B
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-[#59D14C] text-[#59D14C] hover:bg-[#59D14C] hover:text-white"
                    >
                      <i className="fas fa-phone mr-2"></i>
                      Appel commercial
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
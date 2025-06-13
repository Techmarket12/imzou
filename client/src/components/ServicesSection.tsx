import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    id: "toiture",
    title: "Nettoyage de Toiture",
    description:
      "Redonnez éclat et longévité à votre toiture avec notre technologie vapeur haute pression.",
    features: [
      "Démoussage complet",
      "Traitement anti-mousse",
      "Nettoyage des gouttières",
      "Inspection gratuite",
    ],
    image:
      "https://media.discordapp.net/attachments/1086348722159484928/1382706144056967359/AJfQ9KS2eqv_ZV1aRHu0gDN4P46BqovFZjvlcQAHU3n7HPrlGpKOEEtM58LnvLHuQ1O7InuSH_SWbeQkEJ7GJtd286991CYzpaog7qm0qc6qIWFQuWEYtRA_S45SaLlSsYGSS4pKPUeLDgWe7ScMZRMarfxTbGVTgcTPmqR09H_r02gVbuSnlQs1024.png?ex=684cc9b2&is=684b7832&hm=68c97c0bb355e4021f492477f01a05edd010bed7e2b813c8c9aa748a906a47e8&=&format=webp&quality=lossless&width=930&height=930",
    price: "À partir de 8€/m²",
    duration: "1-2 jours",
    icon: "fas fa-home",
  },
  {
    id: "facade",
    title: "Nettoyage de Façade",
    description:
      "Ravivez l'aspect neuf de votre façade grâce à nos techniques de nettoyage respectueuses.",
    features: [
      "Nettoyage haute pression",
      "Traitement des traces",
      "Protection anti-salissure",
      "Tous types de matériaux",
    ],
    image:
      "https://cdn.discordapp.com/attachments/1086348722159484928/1383009818767261696/AJfQ9KTYs8lp2SUNrq00ZDv9mJ6GERIfkMldtQz375-ed577Ya92Ps2BrL4hxfO0oDkBOa6SQMaClIX3qIpMBjr_0pVsCxYfwnERUM3oeYxqETGW2SVwL0RvBQdHJrMctJGnH7qELMQiEXhLY9bBd7lwJBMlC1Jr6MGWpjnpfj9cJi1W2WcK9Qs1024.png?ex=684d3bc3&is=684bea43&hm=f402a98b3cdb37be3bd3d1ba65972f84feba365de3acf0bf1858d5031baa6b7e&",
    price: "À partir de 12€/m²",
    duration: "1-3 jours",
    icon: "fas fa-building",
  },
  {
    id: "terrasse",
    title: "Nettoyage de Terrasse",
    description:
      "Retrouvez une terrasse impeccable et sécurisée pour profiter pleinement de vos extérieurs.",
    features: [
      "Démoussage profond",
      "Nettoyage joints",
      "Traitement anti-glisse",
      "Finition protective",
    ],
    image:
      "https://media.discordapp.net/attachments/1086348722159484928/1382734753773387786/AJfQ9KTVkAFGgspGYpN6Zpn2DuRljdDkCDItMRAlvrR15T9mdtEU3QhUGN-rxix74o3xArtjtfUiBJtDfxc9HieGFgDN68HNtxMdTu-MoW_mnPsg9Z5Ly20rYSI-lP6eThOWpLhdfrm7OFkdPwmaPQg12ajlZWcApCO55afDijK9kARe38qG3Qs1024.png?ex=684ce457&is=684b92d7&hm=496119527350e8ee803fdfd214b20acccce45d0b30b93351cc69128b53e49d11&=&format=webp&quality=lossless&width=930&height=930",
    price: "À partir de 15€/m²",
    duration: "1 jour",
    icon: "fas fa-th-large",
  },
];

export default function ServicesSection() {
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
              Nos{" "}
              <span className="text-[#27851E]">Services Experts</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de services de nettoyage
              écologique. Chaque intervention est réalisée avec des équipements
              professionnels et des techniques respectueuses de l'environnement.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gray-700/90 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#27851E] text-white px-3 py-1">
                      <i className={`${service.icon} mr-2`}></i>
                      Service {index + 1}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-gray-800"
                    >
                      {service.duration}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-white group-hover:text-[#27851E] transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white flex items-center">
                      <i className="fas fa-check-circle text-[#27851E] mr-2"></i>
                      Prestations incluses
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-300"
                        >
                          <i className="fas fa-chevron-right text-[#27851E] mr-3 text-sm"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between p-4 bg-gray-600 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-300">Tarif indicatif</p>
                      <p className="text-xl font-bold text-[#27851E]">
                        {service.price}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-300">Devis gratuit</p>
                      <i className="fas fa-calculator text-2xl text-gray-400"></i>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                    <Button
                      className="w-full bg-[#27851E] hover:bg-[#1F6B15] text-white font-semibold py-3"
                      onClick={scrollToContact}
                    >
                      <i className="fas fa-envelope mr-2"></i>
                      Demander un devis
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-[#27851E] text-[#27851E] hover:bg-[#27851E] hover:text-white"
                    >
                      <i className="fas fa-info-circle mr-2"></i>
                      En savoir plus
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-to-r from-[#27851E] to-[hsl(160,84%,45%)] rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Vous hésitez entre plusieurs services ?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Nos experts vous conseillent gratuitement pour choisir la solution
              la plus adaptée à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#27851E] hover:bg-gray-100 font-semibold px-8"
                onClick={scrollToContact}
              >
                <i className="fas fa-phone mr-2"></i>
                Consultation gratuite
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#27851E] font-semibold px-8"
              >
                <i className="fas fa-whatsapp mr-2"></i>
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

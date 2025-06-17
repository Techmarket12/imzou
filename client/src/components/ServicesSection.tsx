import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import images for equipment
import toitureImg from "@assets/toiture2.png";
import facadeImg from "@assets/facade2.png";
import terrasseImge from "@assets/terrasse3.jpg";
import nacelleImg from "@assets/realisation_079034xlarge.jpg";
import vapeurImg from "@assets/maxresdefault.jpg";
import pressionImg from "@assets/natursteinfassade.webp";
import produitsImg from "@assets/123.jpg";
import aspirationImg from "@assets/nettoyage-de-gouttieres-sans-monter-sur-le-toit-avec-laspirateur-SKY-Vac.jpg";

const services = [
  {
    id: "toiture",
    title: "Nettoyage de Toiture",
    description:
      "Redonnez éclat et longévité à votre toiture avec notre technologie vapeur haute pression. Nos experts travaillent en hauteur en toute sécurité.",
    features: [
      "Démoussage complet",
      "Traitement anti-mousse",
      "Nettoyage des gouttières",
      "Inspection gratuite",
    ],
    image: toitureImg,
    price: "À partir de 8€/m²",
    duration: "1-2 jours",
    icon: "fas fa-home",
  },
  {
    id: "facade",
    title: "Nettoyage de Façade",
    description:
      "Ravivez l'aspect neuf de votre façade grâce à nos techniques de nettoyage respectueuses. Nos experts travaillent en hauteur en toute sécurité.",
    features: [
      "Nettoyage haute pression",
      "Traitement des traces",
      "Protection anti-salissure",
      "Tous types de matériaux",
    ],
    image: facadeImg,
    price: "À partir de 12€/m²",
    duration: "1-3 jours",
    icon: "fas fa-building",
  },
  {
    id: "terrasse",
    title: "Nettoyage de Terrasse",
    description:
      "Retrouvez une terrasse impeccable et sécurisée pour profiter pleinement de vos extérieurs. Nos experts travaillent en hauteur en toute sécurité.",
    features: [
      "Démoussage profond",
      "Nettoyage joints",
      "Traitement anti-glisse",
      "Finition protective",
    ],
    image: terrasseImge,
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
              Nos <span className="text-[#59D14C]">Services Experts</span>
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
                  <CardTitle className="text-2xl text-white group-hover:text-[#59D14C] transition-colors">
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
                      <i className="fas fa-check-circle text-[#59D14C] mr-2"></i>
                      Prestations incluses
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

                  {/* Price */}
                  <div className="flex items-center justify-between p-4 bg-gray-600 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-300">Tarif indicatif</p>
                      <p className="text-xl font-bold text-[#59D14C]">
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

          {/* Nos matériaux Section */}
          <div className="mt-20 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Nos <span className="text-[#59D14C]">Matériaux</span>
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Équipements professionnels de dernière génération pour garantir
                un travail de qualité et en toute sécurité
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-start gap-8">
              {/* Groupe de gauche - 2 matériaux */}
              <div className="flex flex-col gap-8">
                {/* Matériau 1 */}
                <div className="bg-gray-700/90 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-[#59D14C]/50 w-72">
                  <div className="text-center">
                    <div className="w-full h-48 mx-auto mb-6 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={nacelleImg}
                        alt="Nacelle élévatrice"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="text-white font-semibold mb-3 text-base">
                      Nacelle élévatrice
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Pour les nettoyages en hauteur jusqu'à 15 m
                    </p>
                  </div>
                </div>

                {/* Matériau 2 */}
                <div className="bg-gray-700/90 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-[#59D14C]/50 w-72">
                  <div className="text-center">
                    <div className="w-full h-48 mx-auto mb-6 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={vapeurImg}
                        alt="Nettoyeur vapeur"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="text-white font-semibold mb-3 text-base">
                      Nettoyeur vapeur
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Dernière génération pour un nettoyage en douceur et
                      efficace de vos tuiles
                    </p>
                  </div>
                </div>
              </div>

              {/* Matériau central */}
              <div className="bg-gray-700/90 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-[#59D14C]/50 w-60 self-center">
                <div className="text-center">
                  <div className="w-full h-48 mx-auto mb-6 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={pressionImg}
                      alt="Nettoyeur haute pression"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h4 className="text-white font-semibold mb-3 text-base">
                    Nettoyeur haute pression
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    À eau chaude pour façades et terrasses
                  </p>
                </div>
              </div>

              {/* Groupe de droite - 2 matériaux */}
              <div className="flex flex-col gap-8">
                <div className="bg-gray-700/90 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-[#59D14C]/50 w-72">
                  <div className="text-center">
                    <div className="w-full h-48 mx-auto mb-6 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={aspirationImg}
                        alt="Système d'aspiration"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="text-white font-semibold mb-3 text-base">
                      Système d'aspiration
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Pour le nettoyage des gouttières
                    </p>
                  </div>
                </div>
                {/* Matériau 4 */}
                <div className="bg-gray-700/90 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-[#59D14C]/50 w-72">
                  <div className="text-center">
                    <div className="w-full h-48 mx-auto mb-6 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={produitsImg}
                        alt="Produits d'entretien"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="text-white font-semibold mb-3 text-base">
                      Produits d'entretien
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Pour toiture, façade et terrasse assurant une longévité
                      maximale
                    </p>
                  </div>
                </div>

                {/* Matériau 5 */}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-to-r from-[#59D14C] to-[hsl(160,84%,45%)] rounded-2xl p-12 text-white">
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
                className="bg-white text-[#59D14C] hover:bg-gray-100 font-semibold px-8"
                onClick={scrollToContact}
              >
                <i className="fas fa-phone mr-2"></i>
                Consultation gratuite
              </Button>
              <Button
                size="lg"
                className="bg-[#25D366] text-white hover:bg-[#1eb855] border-0 font-semibold px-8 shadow-lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

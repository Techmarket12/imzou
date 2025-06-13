import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    id: "toiture",
    title: "Nettoyage de Toiture",
    description: "Redonnez éclat et longévité à votre toiture avec notre technologie vapeur haute pression.",
    features: [
      "Démoussage complet",
      "Traitement anti-mousse",
      "Nettoyage des gouttières",
      "Inspection gratuite"
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    price: "À partir de 8€/m²",
    duration: "1-2 jours",
    icon: "fas fa-home"
  },
  {
    id: "facade",
    title: "Nettoyage de Façade",
    description: "Ravivez l'aspect neuf de votre façade grâce à nos techniques de nettoyage respectueuses.",
    features: [
      "Nettoyage haute pression",
      "Traitement des traces",
      "Protection anti-salissure",
      "Tous types de matériaux"
    ],
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    price: "À partir de 12€/m²",
    duration: "1-3 jours",
    icon: "fas fa-building"
  },
  {
    id: "terrasse",
    title: "Nettoyage de Terrasse",
    description: "Retrouvez une terrasse impeccable et sécurisée pour profiter pleinement de vos extérieurs.",
    features: [
      "Démoussage profond",
      "Nettoyage joints",
      "Traitement anti-glisse",
      "Finition protective"
    ],
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    price: "À partir de 15€/m²",
    duration: "1 jour",
    icon: "fas fa-th-large"
  }
];

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nos <span className="text-[hsl(160,84%,39%)]">Services Experts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de services de nettoyage écologique. 
              Chaque intervention est réalisée avec des équipements professionnels et des techniques respectueuses de l'environnement.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[hsl(160,84%,39%)] text-white px-3 py-1">
                      <i className={`${service.icon} mr-2`}></i>
                      Service {index + 1}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {service.duration}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-[hsl(160,84%,39%)] transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center">
                      <i className="fas fa-check-circle text-[hsl(160,84%,39%)] mr-2"></i>
                      Prestations incluses
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <i className="fas fa-chevron-right text-[hsl(160,84%,39%)] mr-3 text-sm"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-500">Tarif indicatif</p>
                      <p className="text-xl font-bold text-[hsl(160,84%,39%)]">{service.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Devis gratuit</p>
                      <i className="fas fa-calculator text-2xl text-gray-400"></i>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-[hsl(160,84%,39%)] hover:bg-[hsl(160,84%,35%)] text-white font-semibold py-3"
                      onClick={scrollToContact}
                    >
                      <i className="fas fa-envelope mr-2"></i>
                      Demander un devis
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-[hsl(160,84%,39%)] text-[hsl(160,84%,39%)] hover:bg-[hsl(160,84%,39%)] hover:text-white"
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
          <div className="text-center bg-gradient-to-r from-[hsl(160,84%,39%)] to-[hsl(160,84%,45%)] rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Vous hésitez entre plusieurs services ?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Nos experts vous conseillent gratuitement pour choisir la solution la plus adaptée à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-[hsl(160,84%,39%)] hover:bg-gray-100 font-semibold px-8"
                onClick={scrollToContact}
              >
                <i className="fas fa-phone mr-2"></i>
                Consultation gratuite
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[hsl(160,84%,39%)] font-semibold px-8"
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
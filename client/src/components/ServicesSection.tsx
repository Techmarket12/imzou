import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      id: "toiture",
      icon: "fas fa-home",
      title: "Nettoyage Toiture",
      description: "Nettoyage haute pression, démoussage, traitement anti-mousse et protection hydrofuge pour tous types de toitures.",
      features: [
        "Démoussage professionnel",
        "Traitement anti-mousse longue durée",
        "Protection hydrofuge"
      ],
      color: "bg-[hsl(160,84%,39%)] hover:bg-[hsl(160,84%,35%)]"
    },
    {
      id: "terrasse",
      icon: "fas fa-th-large",
      title: "Nettoyage Terrasse",
      description: "Remise à neuf de vos terrasses en pierre, béton, carrelage ou bois avec nos techniques adaptées.",
      features: [
        "Nettoyage haute pression",
        "Traitement anti-taches",
        "Protection étanchéité"
      ],
      color: "bg-[hsl(199,89%,48%)] hover:bg-[hsl(199,89%,44%)]"
    },
    {
      id: "facade",
      icon: "fas fa-building",
      title: "Nettoyage Façade",
      description: "Ravalement et nettoyage de façades pour redonner éclat et protection à vos murs extérieurs.",
      features: [
        "Nettoyage basse pression",
        "Traitement anti-pollution",
        "Protection longue durée"
      ],
      color: "bg-[hsl(220,26%,14%)] hover:bg-[hsl(220,26%,10%)]"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[hsl(220,26%,14%)] mb-4">Nos Services Professionnels</h2>
          <p className="text-xl text-[hsl(215,16%,47%)] max-w-3xl mx-auto">
            Nous offrons des solutions complètes de nettoyage et protection pour tous vos extérieurs avec des techniques professionnelles et des équipements de pointe.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="service-card bg-white rounded-xl shadow-lg border border-gray-100">
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${service.id === 'toiture' ? 'bg-[hsl(160,84%,39%)]' : service.id === 'terrasse' ? 'bg-[hsl(199,89%,48%)]' : 'bg-[hsl(220,26%,14%)]'} rounded-full flex items-center justify-center mb-6`}>
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-[hsl(220,26%,14%)] mb-4">{service.title}</h3>
                <p className="text-[hsl(215,16%,47%)] mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-[hsl(215,16%,47%)]">
                      <i className="fas fa-check text-[hsl(160,84%,39%)] mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${service.color} text-white py-3 rounded-lg font-semibold transition-colors`}>
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

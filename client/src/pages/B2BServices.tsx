import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { apiRequest } from "@/lib/queryClient";

// Import des images
import carrefourImg from "@assets/carrefour.png";
import delhaizeImg from "@assets/delhaize.png";
import bricoImg from "@assets/Brico_logo.svg.png";
import huboImg from "@assets/hubo.png";
import totalImg from "@assets/totalenergies.png";
import q8Img from "@assets/Q8.png";
import facadeImg from "@assets/facade2.png";
import terrasseImg from "@assets/terrasse2.png";
import toitureImg from "@assets/toiture2.png";
import commerceImg from "@assets/commerce.webp";

interface B2BFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
}

export default function B2BServices() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<B2BFormData>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
  });

  const submitMutation = useMutation({
    mutationFn: async (data: B2BFormData) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact request");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Demande envoyée avec succès !",
        description: "Nous vous recontacterons dans les plus brefs délais.",
        duration: 5000,
      });
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
      });
    },
    onError: () => {
      toast({
        title: "Erreur lors de l'envoi",
        description: "Veuillez réessayer ou nous contacter directement.",
        variant: "destructive",
        duration: 5000,
      });
    },
  });

  const handleInputChange = (field: keyof B2BFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), `, // url(${commerceImg})
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <Badge className="bg-[#59D14C] text-white px-6 py-3 mb-8 text-lg font-semibold">
            SERVICES B2B PROFESSIONNELS
          </Badge>
          <h1
            className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
          >
            Solutions de Nettoyage
            <br />
            <span className="text-[#59D14C]">Professionnel</span>
          </h1>
          <p
            className="text-xl lg:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
          >
            Partenaire de confiance des grandes enseignes et PME depuis 15 ans.
            Nettoyage haute pression, démoussage et entretien de surfaces
            commerciales.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-[#59D14C] hover:bg-[#4AC93D] text-white px-8 py-4 text-lg font-semibold"
              onClick={() =>
                document
                  .getElementById("contact-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Demander un Devis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold bg-black/20 backdrop-blur-sm"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Nos Services B2B
            </Button>
          </div>
        </div>
      </section>

      {/* Clients de Confiance */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
              ILS NOUS FONT CONFIANCE
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Nos <span className="text-[#59D14C]">Clients</span> Prestigieux
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Plus de 200 entreprises nous font confiance pour l'entretien de
              leurs espaces commerciaux
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {[
              { img: carrefourImg, name: "Carrefour" },
              { img: delhaizeImg, name: "Delhaize" },
              { img: bricoImg, name: "Brico" },
              { img: huboImg, name: "Hubo" },
              { img: totalImg, name: "TotalEnergies" },
              { img: q8Img, name: "Q8" },
            ].map((client, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-gray-600 hover:border-[#59D14C]/50 flex items-center justify-center"
              >
                <img
                  src={client.img}
                  alt={client.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-700/50 rounded-xl p-6">
              <div className="text-4xl font-bold text-[#59D14C] mb-2">200+</div>
              <div className="text-gray-300">Entreprises clientes</div>
            </div>
            <div className="bg-gray-700/50 rounded-xl p-6">
              <div className="text-4xl font-bold text-[#59D14C] mb-2">15</div>
              <div className="text-gray-300">Années d'expérience</div>
            </div>
            <div className="bg-gray-700/50 rounded-xl p-6">
              <div className="text-4xl font-bold text-[#59D14C] mb-2">50k+</div>
              <div className="text-gray-300">m² nettoyés/mois</div>
            </div>
            <div className="bg-gray-700/50 rounded-xl p-6">
              <div className="text-4xl font-bold text-[#59D14C] mb-2">24/7</div>
              <div className="text-gray-300">Support client</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services B2B */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
              SERVICES PROFESSIONNELS
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Solutions <span className="text-[#59D14C]">Complètes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des services adaptés aux besoins spécifiques des entreprises
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Nettoyage de Toitures",
                description:
                  "Entretien professionnel des toitures commerciales",
                image: toitureImg,
                features: [
                  "Démoussage haute pression",
                  "Traitement hydrofuge",
                  "Nettoyage gouttières",
                  "Inspection complète",
                ],
                price: "À partir de 12€/m²",
              },
              {
                title: "Nettoyage de Façades",
                description: "Rénovation et entretien des façades d'entreprise",
                image: facadeImg,
                features: [
                  "Tous types de matériaux",
                  "Techniques spécialisées",
                  "Produits professionnels",
                  "Accès difficile",
                ],
                price: "À partir de 15€/m²",
              },
              {
                title: "Nettoyage de Terrasses",
                description: "Entretien des espaces extérieurs commerciaux",
                image: terrasseImg,
                features: [
                  "Parkings et cours",
                  "Terrasses clients",
                  "Zones de stockage",
                  "Allées piétonnes",
                ],
                price: "À partir de 10€/m²",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-[#59D14C] transition-colors duration-300"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#59D14C] text-white">
                      {service.price}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <i className="fas fa-check-circle text-[#59D14C] mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-[#59D14C] hover:bg-[#4AC93D] text-white"
                    onClick={() =>
                      document
                        .getElementById("contact-form")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Demander un Devis
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages B2B */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
              AVANTAGES B2B
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Pourquoi <span className="text-[#59D14C]">Choisir</span> Aqua BOB
              ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "fas fa-clock",
                title: "Interventions Flexibles",
                description: "Planning adapté à vos horaires d'ouverture",
              },
              {
                icon: "fas fa-shield-alt",
                title: "Assurance Complète",
                description: "Responsabilité civile et décennale incluses",
              },
              {
                icon: "fas fa-handshake",
                title: "Contrats Annuels",
                description:
                  "Tarifs préférentiels pour les contrats longue durée",
              },
              {
                icon: "fas fa-leaf",
                title: "Produits Écologiques",
                description: "Solutions respectueuses de l'environnement",
              },
              {
                icon: "fas fa-tools",
                title: "Équipements Professionnels",
                description: "Matériel de pointe pour tous types de surfaces",
              },
              {
                icon: "fas fa-certificate",
                title: "Garantie Qualité",
                description: "Satisfaction garantie ou intervention gratuite",
              },
              {
                icon: "fas fa-phone-alt",
                title: "Support Dédié",
                description: "Interlocuteur unique pour votre entreprise",
              },
              {
                icon: "fas fa-chart-line",
                title: "Devis Personnalisé",
                description: "Tarification adaptée à vos besoins spécifiques",
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className="bg-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="text-4xl text-[#59D14C] mb-4">
                  <i className={advantage.icon}></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-300">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs d'Activité */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
              SECTEURS D'ACTIVITÉ
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Tous <span className="text-[#59D14C]">Secteurs</span> Confondus
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Notre expertise s'étend à tous les secteurs d'activité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Grande Distribution",
                description: "Supermarchés, hypermarchés, centres commerciaux",
                icon: "fas fa-shopping-cart",
                examples: ["Carrefour", "Delhaize", "Colruyt"],
              },
              {
                title: "Restauration",
                description: "Restaurants, cafés, fast-food, terrasses",
                icon: "fas fa-utensils",
                examples: ["McDonald's", "Quick", "Restaurants locaux"],
              },
              {
                title: "Industrie",
                description: "Usines, entrepôts, zones de production",
                icon: "fas fa-industry",
                examples: ["Zones industrielles", "Entrepôts logistiques"],
              },
              {
                title: "Santé",
                description: "Hôpitaux, cliniques, centres de soins",
                icon: "fas fa-hospital",
                examples: ["Hôpitaux publics", "Cliniques privées"],
              },
              {
                title: "Éducation",
                description: "Écoles, universités, centres de formation",
                icon: "fas fa-graduation-cap",
                examples: [
                  "Écoles primaires",
                  "Universités",
                  "Centres de formation",
                ],
              },
              {
                title: "Bureaux",
                description: "Immeubles de bureaux, centres d'affaires",
                icon: "fas fa-building",
                examples: [
                  "Tours de bureaux",
                  "Centres d'affaires",
                  "Sièges sociaux",
                ],
              },
            ].map((sector, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-[#59D14C] transition-colors duration-300"
              >
                <div className="text-3xl text-[#59D14C] mb-4">
                  <i className={sector.icon}></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {sector.title}
                </h3>
                <p className="text-gray-300 mb-4">{sector.description}</p>
                <div className="text-sm text-gray-400">
                  <strong>Exemples :</strong> {sector.examples.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formules B2B */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
              FORMULES B2B
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Nos <span className="text-[#59D14C]">Formules</span>{" "}
              Professionnelles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des offres adaptées à la taille et aux besoins de votre entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "À partir de 500€/mois",
                description: "Idéal pour petites entreprises",
                features: [
                  "Nettoyage mensuel",
                  "Surfaces jusqu'à 200m²",
                  "1 type de surface",
                  "Support par email",
                ],
                ideal: "PME, commerces de proximité",
                color: "border-gray-600",
              },
              {
                name: "Business",
                price: "À partir de 1200€/mois",
                description: "Solution complète pour moyennes entreprises",
                features: [
                  "Nettoyage bi-mensuel",
                  "Surfaces jusqu'à 1000m²",
                  "Tous types de surfaces",
                  "Support téléphonique",
                  "Devis express 24h",
                ],
                ideal: "Moyennes entreprises, franchises",
                color: "border-[#59D14C]",
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Devis personnalisé",
                description: "Service premium pour grandes entreprises",
                features: [
                  "Planning personnalisé",
                  "Surfaces illimitées",
                  "Équipe dédiée",
                  "Support 24/7",
                  "Facturation adaptée",
                  "Contrat pluriannuel",
                ],
                ideal: "Grandes entreprises, groupes",
                color: "border-yellow-500",
              },
            ].map((formula, index) => (
              <div
                key={index}
                className={`bg-gray-700/50 rounded-xl p-6 border-2 ${formula.color} relative ${formula.popular ? "scale-105 z-10" : ""}`}
              >
                {formula.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#59D14C] text-white px-4 py-1">
                      RECOMMANDÉE
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {formula.name}
                  </h3>
                  <div className="text-2xl font-bold text-[#59D14C] mb-2">
                    {formula.price}
                  </div>
                  <p className="text-gray-300 text-sm">{formula.description}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {formula.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <i className="fas fa-check-circle text-[#59D14C] mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center mb-6">
                  <p className="text-[#59D14C] text-xs font-semibold">
                    {formula.ideal}
                  </p>
                </div>

                <Button
                  className={`w-full ${formula.popular ? "bg-[#59D14C] hover:bg-[#4AC93D]" : "bg-gray-600 hover:bg-gray-500"} text-white`}
                  onClick={() =>
                    document
                      .getElementById("contact-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Choisir {formula.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact-form"
        className="py-20 bg-gradient-to-br from-gray-800 to-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                DEMANDE DE DEVIS B2B
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Obtenez votre{" "}
                <span className="text-[#59D14C]">Devis Professionnel</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Remplissez ce formulaire pour recevoir votre devis B2B
                personnalisé sous 24h. Nos experts commerciaux vous
                recontacteront rapidement.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Nom de l'entreprise *"
                    value={formData.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                    required
                  />
                  <Input
                    placeholder="Nom du contact *"
                    value={formData.contactName}
                    onChange={(e) =>
                      handleInputChange("contactName", e.target.value)
                    }
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    type="email"
                    placeholder="Email professionnel *"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Téléphone *"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                    required
                  />
                </div>

                <Textarea
                  placeholder="Décrivez votre projet et vos besoins spécifiques (optionnel)"
                  rows={4}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#59D14C] hover:bg-[#4AC93D] text-white font-semibold py-4"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Demander un Devis B2B
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <i className="fas fa-phone text-[#59D14C] text-2xl mb-2"></i>
                    <div className="text-white font-semibold">Téléphone</div>
                    <div className="text-gray-300">0497175556</div>
                  </div>
                  <div>
                    <i className="fas fa-envelope text-[#59D14C] text-2xl mb-2"></i>
                    <div className="text-white font-semibold">Email B2B</div>
                    <div className="text-gray-300">info@aquatf.be</div>
                  </div>
                  <div>
                    <i className="fas fa-clock text-[#59D14C] text-2xl mb-2"></i>
                    <div className="text-white font-semibold">Horaires</div>
                    <div className="text-gray-300">Lun-Ven 8h-18h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

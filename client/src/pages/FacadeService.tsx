import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Link } from "wouter";

// Images spécifiques au service façade
import facadeHero from "@assets/facade2.png";
import pressionImg from "@assets/natursteinfassade.webp";
import vapeurImg from "@assets/maxresdefault.jpg";
import produitImg from "@assets/123.jpg";
import avantApres1 from "@assets/gallerie4.png";
import avantApres2 from "@assets/gallerie5.png";
import avantApres3 from "@assets/gallerie6.png";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  facadeType: string;
  surfaceArea: string;
  buildingHeight: string;
  urgency: string;
  message: string;
}

export default function FacadeService() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    facadeType: "",
    surfaceArea: "",
    buildingHeight: "",
    urgency: "",
    message: "",
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
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
        title: "Demande envoyée !",
        description: "Nous vous recontacterons dans les plus brefs délais pour votre devis façade.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        facadeType: "",
        surfaceArea: "",
        buildingHeight: "",
        urgency: "",
        message: "",
      });
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      toast({
        title: "Champs requis manquants",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }
    submitMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const services = [
    {
      icon: "fas fa-spray-can",
      title: "Nettoyage Haute Pression",
      description: "Élimination efficace de toutes les salissures, pollution et traces noires sur tous types de façades",
      features: ["Réglage pression adaptée", "Buse rotative", "Rinçage soigné", "Séchage rapide"],
    },
    {
      icon: "fas fa-cloud",
      title: "Nettoyage Vapeur",
      description: "Technique écologique utilisant la vapeur haute température pour un nettoyage en profondeur",
      features: ["100% écologique", "Désinfection naturelle", "Pas de produits chimiques", "Résultat impeccable"],
    },
    {
      icon: "fas fa-shield-alt",
      title: "Traitement Protecteur",
      description: "Application d'un traitement hydrofuge pour protéger durablement votre façade",
      features: ["Protection longue durée", "Anti-infiltration", "Respirabilité préservée", "Garantie 5 ans"],
    },
    {
      icon: "fas fa-tools",
      title: "Rénovation Joints",
      description: "Réfection des joints dégradés pour une étanchéité parfaite et un aspect esthétique optimal",
      features: ["Déjointoyage soigneux", "Nouveau jointoiement", "Mortier adapté", "Finition parfaite"],
    },
  ];

  const equipments = [
    {
      title: "Nettoyeur Haute Pression",
      description: "Équipements professionnels avec réglage de pression",
      image: pressionImg,
    },
    {
      title: "Générateur Vapeur",
      description: "Technologie vapeur écologique haute température",
      image: vapeurImg,
    },
    {
      title: "Produits Spécialisés",
      description: "Gamme complète de produits de protection",
      image: produitImg,
    },
  ];

  const beforeAfterImages = [
    { before: avantApres1, after: avantApres2, title: "Nettoyage façade brique" },
    { before: avantApres2, after: avantApres3, title: "Ravalement façade crépi" },
    { before: avantApres3, after: avantApres1, title: "Nettoyage façade pierre" },
  ];

  const facadeTypes = [
    {
      type: "Brique",
      description: "Technique douce adaptée à la porosité de la brique",
      price: "12-15€/m²",
      durability: "Excellent",
    },
    {
      type: "Crépi/Enduit",
      description: "Nettoyage vapeur préservant la texture",
      price: "10-14€/m²",
      durability: "Très bon",
    },
    {
      type: "Pierre naturelle",
      description: "Traitement spécialisé selon le type de pierre",
      price: "15-20€/m²",
      durability: "Exceptionnel",
    },
    {
      type: "Béton/Parpaing",
      description: "Haute pression pour éliminer les salissures tenaces",
      price: "8-12€/m²",
      durability: "Très bon",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/70"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${facadeHero})` }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#59D14C] text-white px-6 py-3 mb-8 text-lg font-semibold">
              SERVICE SPÉCIALISÉ FAÇADE
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              Nettoyage et Ravalement de{" "}
              <span className="text-[#59D14C] drop-shadow-2xl">Façade</span>
            </h1>
            <p className="text-xl text-gray-100 mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
              Redonnez tout son éclat à votre façade avec nos techniques de nettoyage professionnelles. 
              Haute pression, vapeur écologique et traitements protecteurs pour tous types de matériaux.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#59D14C] hover:bg-[#4AC93D] text-white font-semibold py-4 px-8 text-lg rounded-xl"
              >
                <i className="fas fa-calculator mr-3"></i>
                Devis Gratuit
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900 py-4 px-8 text-lg rounded-xl"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <i className="fas fa-info-circle mr-3"></i>
                Nos Techniques
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Breadcrumb */}
      <section className="py-6 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-gray-300">
            <Link href="/" className="hover:text-[#59D14C] transition-colors">
              <i className="fas fa-home mr-2"></i>Accueil
            </Link>
            <i className="fas fa-chevron-right text-gray-500"></i>
            <span className="text-[#59D14C]">Nettoyage de Façade</span>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Nos Techniques <span className="text-[#59D14C]">Façade</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Une façade propre améliore l'isolation thermique jusqu'à 15% et préserve la valeur de votre bien. 
                Nos techniques respectent chaque type de matériau.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
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
                        Avantages
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
          </div>
        </div>
      </section>

      {/* Facade Types Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                MATÉRIAUX SPÉCIALISÉS
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Tous Types de <span className="text-[#59D14C]">Façades</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Chaque matériau nécessite une approche spécifique. Nos experts adaptent leurs techniques pour un résultat optimal.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facadeTypes.map((facade, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-[#59D14C]/50 transition-all duration-300 group"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#59D14C] transition-colors">
                      {facade.type}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {facade.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs">Prix</span>
                        <span className="text-[#59D14C] font-semibold text-sm">{facade.price}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs">Durabilité</span>
                        <span className="text-white text-sm">{facade.durability}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                ÉQUIPEMENTS PROFESSIONNELS
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Matériel <span className="text-[#59D14C]">Spécialisé</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Nous utilisons exclusivement du matériel professionnel de dernière génération pour garantir un résultat impeccable.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {equipments.map((equipment, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-[#59D14C]/50 transition-all duration-300 group"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={equipment.image}
                      alt={equipment.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#59D14C] transition-colors">
                      {equipment.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {equipment.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                TRANSFORMATIONS RÉALISÉES
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Avant / <span className="text-[#59D14C]">Après</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Découvrez la transformation spectaculaire de nos interventions façade.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {beforeAfterImages.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-[#59D14C]/50 transition-all duration-300 group"
                >
                  <div className="grid grid-cols-2 h-48">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.before}
                        alt="Avant"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-red-500 text-white text-xs">AVANT</Badge>
                      </div>
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src={item.after}
                        alt="Après"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-[#59D14C] text-white text-xs">APRÈS</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#59D14C] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pollution Types Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                TYPES DE SALISSURES
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Chaque Pollution a sa <span className="text-[#59D14C]">Solution</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Identifiez le type de salissure sur votre façade pour comprendre la technique de nettoyage adaptée.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  type: "Pollution Urbaine",
                  icon: "fas fa-car",
                  description: "Particules de carbone, gaz d'échappement",
                  solution: "Nettoyage haute pression + dégraissant",
                  difficulty: "Facile",
                  color: "bg-red-500"
                },
                {
                  type: "Mousses & Lichens",
                  icon: "fas fa-leaf",
                  description: "Développement biologique humide",
                  solution: "Traitement biocide + brossage",
                  difficulty: "Modéré",
                  color: "bg-green-500"
                },
                {
                  type: "Traces Noires",
                  icon: "fas fa-tint",
                  description: "Ruissellement et stagnation d'eau",
                  solution: "Nettoyage vapeur + hydrofuge",
                  difficulty: "Difficile",
                  color: "bg-gray-600"
                },
                {
                  type: "Graffitis",
                  icon: "fas fa-spray-can",
                  description: "Peintures et encres sur support",
                  solution: "Produits spécialisés + ponçage",
                  difficulty: "Expert",
                  color: "bg-purple-500"
                }
              ].map((pollution, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-[#59D14C]/50 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${pollution.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <i className={`${pollution.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{pollution.type}</h3>
                    <Badge className={`text-xs text-white ${pollution.difficulty === 'Facile' ? 'bg-green-600' : pollution.difficulty === 'Modéré' ? 'bg-yellow-600' : pollution.difficulty === 'Difficile' ? 'bg-orange-600' : 'bg-red-600'}`}>
                      {pollution.difficulty}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-gray-300 text-sm leading-relaxed">{pollution.description}</p>
                    <div className="p-3 bg-gray-700/50 rounded-lg">
                      <p className="text-[#59D14C] font-semibold text-sm mb-1">Solution recommandée</p>
                      <p className="text-gray-300 text-xs">{pollution.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Techniques Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                TECHNIQUES AVANCÉES
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Technologies de <span className="text-[#59D14C]">Pointe</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Découvrez nos méthodes innovantes pour un nettoyage de façade respectueux et efficace.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Nettoyage Cryogénique",
                  subtitle: "Innovation par le froid",
                  description: "Projection de glace carbonique pour nettoyer sans abrasion ni produits chimiques. Idéal pour les façades historiques et matériaux délicats.",
                  benefits: ["Aucun résidu", "Écologique 100%", "Préserve les matériaux", "Très haute précision"],
                  applications: ["Monuments historiques", "Briques anciennes", "Pierre de taille", "Surfaces sculptées"],
                  image: pressionImg
                },
                {
                  title: "Hydrogommage Doux",
                  subtitle: "Précision maximale",
                  description: "Projection d'eau et d'abrasif fin sous faible pression. Technique de choix pour raviver les façades en pierre naturelle sans les endommager.",
                  benefits: ["Contrôle précis", "Respect patine", "Finition uniforme", "Polyvalence matériaux"],
                  applications: ["Pierre calcaire", "Grès", "Béton architectural", "Crépi minéral"],
                  image: vapeurImg
                }
              ].map((technique, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-[#59D14C]/50 transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={technique.image} alt={technique.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white">{technique.title}</h3>
                      <p className="text-[#59D14C] font-semibold">{technique.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-gray-300 mb-6 leading-relaxed">{technique.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3 flex items-center">
                          <i className="fas fa-star text-[#59D14C] mr-2"></i>
                          Avantages
                        </h4>
                        <ul className="space-y-2">
                          {technique.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-gray-300 text-sm">
                              <i className="fas fa-check text-[#59D14C] mr-2"></i>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-3 flex items-center">
                          <i className="fas fa-cogs text-[#59D14C] mr-2"></i>
                          Applications
                        </h4>
                        <ul className="space-y-2">
                          {technique.applications.map((app, idx) => (
                            <li key={idx} className="flex items-center text-gray-300 text-sm">
                              <i className="fas fa-arrow-right text-[#59D14C] mr-2"></i>
                              {app}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                PROCESSUS PROFESSIONNEL
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Notre <span className="text-[#59D14C]">Méthode</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Une approche méthodique en 6 étapes pour garantir un résultat optimal et durable.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Diagnostic Initial",
                  description: "Analyse complète de votre façade : matériau, état, type de salissures, orientation, historique",
                  details: ["Identification matériau", "Cartographie salissures", "Test produits", "Évaluation risques"],
                  icon: "fas fa-search",
                },
                {
                  step: "02", 
                  title: "Préparation Chantier",
                  description: "Protection soignée de l'environnement et mise en sécurité du périmètre d'intervention",
                  details: ["Bâchage végétation", "Protection sols", "Signalisation", "Sécurisation accès"],
                  icon: "fas fa-hard-hat",
                },
                {
                  step: "03",
                  title: "Tests Préliminaires",
                  description: "Validation de la technique et des produits sur une zone discrète de la façade",
                  details: ["Zone test 1m²", "Vérification résultat", "Ajustement paramètres", "Validation client"],
                  icon: "fas fa-flask",
                },
                {
                  step: "04",
                  title: "Nettoyage Principal",
                  description: "Application de la technique validée sur l'ensemble de la surface à traiter",
                  details: ["Nettoyage progressif", "Contrôle qualité", "Rinçage soigné", "Vérification uniforme"],
                  icon: "fas fa-spray-can",
                },
                {
                  step: "05",
                  title: "Traitement Protection",
                  description: "Application optionnelle d'un traitement hydrofuge ou anti-salissure selon besoins",
                  details: ["Choix traitement", "Application uniforme", "Temps séchage", "Contrôle absorption"],
                  icon: "fas fa-shield-alt",
                },
                {
                  step: "06",
                  title: "Finitions & Contrôle",
                  description: "Nettoyage du chantier, contrôle qualité final et remise des recommandations d'entretien",
                  details: ["Nettoyage chantier", "Contrôle final", "Photos résultat", "Conseils entretien"],
                  icon: "fas fa-check-circle",
                }
              ].map((process, index) => (
                <div key={index} className="flex items-start space-x-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-[#59D14C]/50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#59D14C] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{process.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <i className={`${process.icon} text-[#59D14C] mr-3 text-xl`}></i>
                      <h3 className="text-xl font-bold text-white">{process.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4">{process.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {process.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-gray-400 text-sm">
                          <i className="fas fa-chevron-right text-[#59D14C] mr-2 text-xs"></i>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                ENGAGEMENT ÉCOLOGIQUE
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Respect de l'<span className="text-[#59D14C]">Environnement</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Notre engagement pour un nettoyage de façade respectueux de l'environnement et de votre santé.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  {[
                    {
                      icon: "fas fa-leaf",
                      title: "Produits Écologiques",
                      description: "Utilisation exclusive de produits biodégradables et certifiés environnement. Aucun impact sur la faune et la flore."
                    },
                    {
                      icon: "fas fa-recycle",
                      title: "Gestion des Déchets",
                      description: "Récupération et traitement approprié de tous les déchets de nettoyage. Recyclage des eaux usées quand possible."
                    },
                    {
                      icon: "fas fa-tint",
                      title: "Économie d'Eau",
                      description: "Techniques optimisées pour réduire la consommation d'eau. Système de récupération et filtration des eaux de rinçage."
                    },
                    {
                      icon: "fas fa-certificate",
                      title: "Certifications",
                      description: "Respect des normes environnementales strictes. Formations régulières aux bonnes pratiques écologiques."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#59D14C] rounded-full flex items-center justify-center flex-shrink-0">
                        <i className={`${item.icon} text-white text-lg`}></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Notre Engagement Chiffré</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-gray-700/50 rounded-lg">
                    <span className="text-gray-300">Réduction consommation eau</span>
                    <span className="text-[#59D14C] font-bold text-xl">-40%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-700/50 rounded-lg">
                    <span className="text-gray-300">Produits biodégradables</span>
                    <span className="text-[#59D14C] font-bold text-xl">100%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-700/50 rounded-lg">
                    <span className="text-gray-300">Déchets recyclés</span>
                    <span className="text-[#59D14C] font-bold text-xl">95%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-700/50 rounded-lg">
                    <span className="text-gray-300">Émissions CO₂ réduites</span>
                    <span className="text-[#59D14C] font-bold text-xl">-30%</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-[#59D14C]/10 rounded-lg border border-[#59D14C]/20">
                  <p className="text-[#59D14C] font-semibold text-center">
                    <i className="fas fa-award mr-2"></i>
                    Certification ISO 14001 Environnement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                QUESTIONS FRÉQUENTES
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Vos <span className="text-[#59D14C]">Questions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Toutes les réponses aux questions que vous vous posez sur le nettoyage de façade.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "À quelle fréquence faut-il nettoyer sa façade ?",
                  answer: "La fréquence dépend de l'exposition : tous les 3-5 ans en ville, 5-7 ans en campagne. Les façades nord nécessitent plus d'attention car elles sèchent moins vite."
                },
                {
                  question: "Le nettoyage peut-il endommager ma façade ?",
                  answer: "Non, si réalisé par des professionnels. Nous adaptons la technique au matériau : vapeur douce pour la pierre, basse pression pour le crépi, haute pression pour le béton."
                },
                {
                  question: "Combien coûte un nettoyage de façade ?",
                  answer: "Entre 8€ et 25€/m² selon le matériau et la technique. Crépi simple : 8-12€/m², brique : 12-18€/m², pierre naturelle : 15-25€/m². Devis gratuit sous 24h."
                },
                {
                  question: "Dois-je demander une autorisation en copropriété ?",
                  answer: "Pour l'extérieur, oui si changement d'aspect. Pour un simple nettoyage sans modification, généralement non. Nous vous conseillons selon votre situation."
                },
                {
                  question: "Faut-il protéger la façade après nettoyage ?",
                  answer: "Recommandé pour prolonger l'efficacité. L'hydrofuge protège 8-12 ans et facilite l'entretien futur. Particulièrement utile sur pierre et crépi."
                },
                {
                  question: "Intervenez-vous par tous temps ?",
                  answer: "Non, nous évitons les jours de pluie, gel, ou vent fort. Les conditions optimales garantissent la qualité du résultat et le séchage approprié."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                    <div className="w-8 h-8 bg-[#59D14C] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed pl-11">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                TÉMOIGNAGES CLIENTS
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ils Nous Font <span className="text-[#59D14C]">Confiance</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Découvrez les retours de nos clients satisfaits de nos services de nettoyage de façade.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Marie Dubois",
                  location: "Uccle, Bruxelles",
                  service: "Nettoyage façade brique",
                  rating: 5,
                  comment: "Façade de 1920 retrouvée comme neuve ! L'équipe a su préserver la patine tout en éliminant 30 ans de pollution. Travail minutieux et respect des délais.",
                  before: "Brique noircie par pollution",
                  after: "Couleur originale retrouvée"
                },
                {
                  name: "Jean-Pierre Martin",
                  location: "Watermael-Boitsfort",
                  service: "Nettoyage crépi + hydrofuge",
                  rating: 5,
                  comment: "Excellent rapport qualité-prix. Le traitement hydrofuge appliqué il y a 3 ans tient parfaitement. Plus de traces noires, la façade reste propre.",
                  before: "Crépi taché et verdâtre",
                  after: "Blanc éclatant protégé"
                },
                {
                  name: "Sophie Lemaire",
                  location: "Ixelles",
                  service: "Ravalement pierre naturelle",
                  rating: 5,
                  comment: "Maison de maître en pierre bleue magnifiquement restaurée. Technique vapeur respectueuse, résultat bluffant. Je recommande vivement !",
                  before: "Pierre ternie et mousseuse",
                  after: "Pierre noble révélée"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-[#59D14C]/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#59D14C] rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <i key={i} className="fas fa-star text-yellow-400 mr-1"></i>
                    ))}
                    <span className="text-gray-400 text-sm ml-2">{testimonial.service}</span>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-4 italic">"{testimonial.comment}"</p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
                    <div>
                      <p className="text-red-400 text-xs font-semibold">AVANT</p>
                      <p className="text-gray-300 text-xs">{testimonial.before}</p>
                    </div>
                    <div>
                      <p className="text-[#59D14C] text-xs font-semibold">APRÈS</p>
                      <p className="text-gray-300 text-xs">{testimonial.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 inline-block">
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#59D14C] mb-2">500+</div>
                    <p className="text-gray-300 text-sm">Façades nettoyées</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#59D14C] mb-2">98%</div>
                    <p className="text-gray-300 text-sm">Clients satisfaits</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#59D14C] mb-2">15+</div>
                    <p className="text-gray-300 text-sm">Années d'expérience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                DEMANDE DE DEVIS
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Obtenez votre <span className="text-[#59D14C]">Devis Gratuit</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Remplissez ce formulaire pour recevoir votre devis personnalisé sous 24h. 
                Nos experts évalueront précisément vos besoins façade.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Prénom *"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                    required
                  />
                  <Input
                    placeholder="Nom *"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    type="email"
                    placeholder="Email *"
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

                <Input
                  placeholder="Adresse"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Ville"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  <Input
                    placeholder="Code postal"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange("postalCode", e.target.value)}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Select
                    value={formData.facadeType}
                    onValueChange={(value) => handleInputChange("facadeType", value)}
                  >
                    <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
                      <SelectValue placeholder="Type de façade" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="brique" className="text-white hover:bg-gray-600">Brique</SelectItem>
                      <SelectItem value="crepi" className="text-white hover:bg-gray-600">Crépi/Enduit</SelectItem>
                      <SelectItem value="pierre" className="text-white hover:bg-gray-600">Pierre naturelle</SelectItem>
                      <SelectItem value="beton" className="text-white hover:bg-gray-600">Béton/Parpaing</SelectItem>
                      <SelectItem value="autre" className="text-white hover:bg-gray-600">Autre</SelectItem>
                    </SelectContent>
                  </Select>

                  <Input
                    placeholder="Surface approximative (m²)"
                    value={formData.surfaceArea}
                    onChange={(e) => handleInputChange("surfaceArea", e.target.value)}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Select
                    value={formData.buildingHeight}
                    onValueChange={(value) => handleInputChange("buildingHeight", value)}
                  >
                    <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
                      <SelectValue placeholder="Hauteur du bâtiment" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="plain-pied" className="text-white hover:bg-gray-600">Plain-pied</SelectItem>
                      <SelectItem value="1-etage" className="text-white hover:bg-gray-600">1 étage (R+1)</SelectItem>
                      <SelectItem value="2-etages" className="text-white hover:bg-gray-600">2 étages (R+2)</SelectItem>
                      <SelectItem value="plus-2-etages" className="text-white hover:bg-gray-600">Plus de 2 étages</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select
                    value={formData.urgency}
                    onValueChange={(value) => handleInputChange("urgency", value)}
                  >
                    <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
                      <SelectValue placeholder="Urgence" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="pas-urgent" className="text-white hover:bg-gray-600">Pas urgent</SelectItem>
                      <SelectItem value="dans-le-mois" className="text-white hover:bg-gray-600">Dans le mois</SelectItem>
                      <SelectItem value="urgent" className="text-white hover:bg-gray-600">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Textarea
                  placeholder="Message ou détails supplémentaires"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 min-h-[120px]"
                />

                <Button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full bg-[#59D14C] hover:bg-[#4AC93D] text-white font-semibold py-4 px-6 text-lg rounded-xl transition-all duration-300 disabled:opacity-50"
                >
                  {submitMutation.isPending ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-3"></i>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-3"></i>
                      Demander mon devis gratuit
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
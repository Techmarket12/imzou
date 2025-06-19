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
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${facadeHero})` }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#59D14C] text-white px-6 py-3 mb-8 text-lg font-semibold">
              SERVICE SPÉCIALISÉ FAÇADE
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Nettoyage et Ravalement de{" "}
              <span className="text-[#59D14C]">Façade</span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
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
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Diagnostic Initial",
                  description: "Analyse complète de votre façade et identification du type de matériau et des salissures",
                  icon: "fas fa-search",
                },
                {
                  step: "02", 
                  title: "Préparation du Chantier",
                  description: "Protection des surfaces sensibles et mise en place des équipements de sécurité",
                  icon: "fas fa-hard-hat",
                },
                {
                  step: "03",
                  title: "Nettoyage Adapté",
                  description: "Application de la technique appropriée selon le matériau (haute pression, vapeur, etc.)",
                  icon: "fas fa-spray-can",
                },
                {
                  step: "04",
                  title: "Traitement Protecteur",
                  description: "Application optionnelle d'un traitement hydrofuge pour une protection durable",
                  icon: "fas fa-shield-alt",
                },
              ].map((process, index) => (
                <div key={index} className="flex items-start space-x-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
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
                    <p className="text-gray-300 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-slate-900">
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
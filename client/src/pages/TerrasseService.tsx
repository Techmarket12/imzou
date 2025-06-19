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

// Images spécifiques au service terrasse
import terrasseHero from "@assets/terrasse3.jpg";
import pressionImg from "@assets/natursteinfassade.webp";
import vapeurImg from "@assets/maxresdefault.jpg";
import produitImg from "@assets/123.jpg";
import avantApres1 from "@assets/terrasse2.png";
import avantApres2 from "@assets/terrasse3.png";
import avantApres3 from "@assets/gallerie1.png";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  terrasseType: string;
  surfaceArea: string;
  terrasseState: string;
  urgency: string;
  message: string;
}

export default function TerrasseService() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    terrasseType: "",
    surfaceArea: "",
    terrasseState: "",
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
        description: "Nous vous recontacterons dans les plus brefs délais pour votre devis terrasse.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        terrasseType: "",
        surfaceArea: "",
        terrasseState: "",
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
      icon: "fas fa-broom",
      title: "Démoussage Profond",
      description: "Élimination complète des mousses, algues et lichens qui rendent votre terrasse glissante et dangereuse",
      features: ["Traitement des joints", "Élimination racines", "Action préventive", "Finition soignée"],
    },
    {
      icon: "fas fa-tint",
      title: "Nettoyage Haute Pression",
      description: "Redonnez éclat et propreté à votre terrasse avec notre équipement professionnel haute performance",
      features: ["Pression adaptée", "Buses spécialisées", "Respect matériaux", "Séchage optimal"],
    },
    {
      icon: "fas fa-shield-alt",
      title: "Traitement Anti-Glisse",
      description: "Application d'un traitement spécialisé pour une sécurité optimale, même par temps humide",
      features: ["Sécurité maximale", "Transparence totale", "Durée 3-5 ans", "Tous temps"],
    },
    {
      icon: "fas fa-tools",
      title: "Réfection Joints",
      description: "Remplacement des joints dégradés pour une étanchéité parfaite et un aspect esthétique impeccable",
      features: ["Déjointoyage précis", "Mortier adapté", "Étanchéité garantie", "Finition parfaite"],
    },
  ];

  const equipments = [
    {
      title: "Nettoyeur Haute Pression",
      description: "Équipement professionnel avec réglage précis",
      image: pressionImg,
    },
    {
      title: "Générateur Vapeur",
      description: "Nettoyage écologique sans produits chimiques",
      image: vapeurImg,
    },
    {
      title: "Produits Spécialisés",
      description: "Gamme complète anti-mousse et protection",
      image: produitImg,
    },
  ];

  const beforeAfterImages = [
    { before: avantApres1, after: avantApres2, title: "Nettoyage terrasse carrelage" },
    { before: avantApres2, after: avantApres3, title: "Démoussage terrasse bois" },
    { before: avantApres3, after: avantApres1, title: "Rénovation terrasse pierre" },
  ];

  const terrasseTypes = [
    {
      type: "Carrelage",
      description: "Nettoyage adapté aux carreaux et joints",
      price: "15-18€/m²",
      specificity: "Joints traités",
    },
    {
      type: "Pierre naturelle",
      description: "Respect de la porosité naturelle de la pierre",
      price: "18-25€/m²",
      specificity: "Préservation pierre",
    },
    {
      type: "Bois composite",
      description: "Traitement spécialisé pour matériaux composites",
      price: "12-16€/m²",
      specificity: "Sans abrasion",
    },
    {
      type: "Béton/Dalle",
      description: "Haute pression pour éliminer les taches tenaces",
      price: "10-15€/m²",
      specificity: "Taches tenaces",
    },
  ];

  const seasonalTips = [
    {
      season: "Printemps",
      icon: "fas fa-seedling",
      tips: ["Démoussage après l'hiver", "Vérification des joints", "Traitement préventif"],
      bestTime: "Mars - Mai",
    },
    {
      season: "Été",
      icon: "fas fa-sun",
      tips: ["Nettoyage en profondeur", "Application anti-glisse", "Entretien régulier"],
      bestTime: "Juin - Août",
    },
    {
      season: "Automne",
      icon: "fas fa-leaf",
      tips: ["Élimination feuilles mortes", "Préparation hiver", "Protection joints"],
      bestTime: "Sept - Nov",
    },
    {
      season: "Hiver",
      icon: "fas fa-snowflake",
      tips: ["Surveillance gel/dégel", "Nettoyage doux", "Planification printemps"],
      bestTime: "Déc - Fév",
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
          style={{ backgroundImage: `url(${terrasseHero})` }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#59D14C] text-white px-6 py-3 mb-8 text-lg font-semibold">
              SERVICE SPÉCIALISÉ TERRASSE
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Nettoyage et Entretien de{" "}
              <span className="text-[#59D14C]">Terrasse</span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Retrouvez une terrasse impeccable et sécurisée pour profiter pleinement de vos extérieurs. 
              Démoussage, nettoyage haute pression et traitement anti-glisse par des professionnels.
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
                Nos Services
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
            <span className="text-[#59D14C]">Nettoyage de Terrasse</span>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Nos Services <span className="text-[#59D14C]">Terrasse</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Une terrasse propre et entretenue augmente la valeur de votre propriété de 8 à 12%. 
                Nos techniques préservent vos matériaux tout en garantissant sécurité et esthétique.
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terrasse Types Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                MATÉRIAUX SPÉCIALISÉS
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Tous Types de <span className="text-[#59D14C]">Terrasses</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Chaque matériau de terrasse nécessite une approche spécifique. Nos experts adaptent leurs techniques pour préserver et embellir.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {terrasseTypes.map((terrasse, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-[#59D14C]/50 transition-all duration-300 group"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#59D14C] transition-colors">
                      {terrasse.type}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {terrasse.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs">Prix</span>
                        <span className="text-[#59D14C] font-semibold text-sm">{terrasse.price}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs">Spécialité</span>
                        <span className="text-white text-sm">{terrasse.specificity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Tips Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                CONSEILS SAISONNIERS
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Entretien <span className="text-[#59D14C]">Toute l'Année</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Découvrez les meilleures périodes et techniques d'entretien selon les saisons pour une terrasse toujours parfaite.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {seasonalTips.map((season, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-[#59D14C]/50 transition-all duration-300 group"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-[#59D14C]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${season.icon} text-[#59D14C] text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#59D14C] transition-colors">
                      {season.season}
                    </h3>
                    <Badge className="bg-gray-700 text-gray-300 text-xs">{season.bestTime}</Badge>
                  </div>
                  
                  <ul className="space-y-2">
                    {season.tips.map((tip, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-300 text-sm"
                      >
                        <i className="fas fa-check text-[#59D14C] mr-2 mt-1 text-xs"></i>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-slate-900">
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
                Nous utilisons exclusivement du matériel professionnel adapté à chaque type de terrasse pour garantir des résultats exceptionnels.
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
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
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
                Découvrez la transformation spectaculaire de nos interventions terrasse.
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

      {/* Problem Solving Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                PROBLÈMES COURANTS
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Solutions aux <span className="text-[#59D14C]">Problèmes</span> Fréquents
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Identifiez et résolvez les problèmes les plus courants rencontrés sur les terrasses.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  problem: "Terrasse Glissante",
                  severity: "Urgent",
                  causes: ["Mousse", "Algues", "Humidité stagnante", "Matériau lisse"],
                  solutions: ["Démoussage complet", "Traitement anti-glisse", "Amélioration drainage", "Texture antidérapante"],
                  prevention: "Nettoyage annuel + traitement préventif",
                  icon: "fas fa-exclamation-triangle",
                  color: "bg-red-500"
                },
                {
                  problem: "Taches Tenaces",
                  severity: "Modéré",
                  causes: ["Graisse", "Rouille", "Végétation", "Pollution"],
                  solutions: ["Détachage spécialisé", "Nettoyage haute pression", "Produits adaptés", "Ponçage léger"],
                  prevention: "Protection hydrofuge + entretien régulier",
                  icon: "fas fa-circle",
                  color: "bg-orange-500"
                },
                {
                  problem: "Joints Dégradés",
                  severity: "Important",
                  causes: ["Gel/dégel", "Infiltrations", "Usure", "Mauvaise pose"],
                  solutions: ["Déjointoyage", "Nouveau mortier", "Étanchéité", "Finition soignée"],
                  prevention: "Surveillance annuelle + réparations précoces",
                  icon: "fas fa-th-large",
                  color: "bg-yellow-500"
                }
              ].map((issue, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-[#59D14C]/50 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${issue.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <i className={`${issue.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{issue.problem}</h3>
                    <Badge className={`text-xs text-white ${issue.severity === 'Urgent' ? 'bg-red-600' : issue.severity === 'Important' ? 'bg-yellow-600' : 'bg-orange-600'}`}>
                      {issue.severity}
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm">Causes principales</h4>
                      <ul className="space-y-1">
                        {issue.causes.map((cause, idx) => (
                          <li key={idx} className="flex items-center text-gray-300 text-xs">
                            <i className="fas fa-dot-circle text-red-400 mr-2 text-xs"></i>
                            {cause}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm">Solutions</h4>
                      <ul className="space-y-1">
                        {issue.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-center text-gray-300 text-xs">
                            <i className="fas fa-tools text-[#59D14C] mr-2 text-xs"></i>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-gray-700/50 rounded-lg">
                      <h4 className="text-[#59D14C] font-semibold mb-1 text-sm">Prévention</h4>
                      <p className="text-gray-300 text-xs">{issue.prevention}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Guide Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                GUIDE D'ENTRETIEN
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Entretien <span className="text-[#59D14C]">Optimal</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Suivez notre guide complet pour maintenir votre terrasse en parfait état toute l'année.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-6">Entretien Quotidien</h3>
                {[
                  {
                    frequency: "Quotidien",
                    tasks: ["Balayage des feuilles", "Évacuation eau stagnante", "Nettoyage taches fraîches"],
                    duration: "10 min",
                    tools: ["Balai", "Serpillière", "Eau savonneuse"]
                  },
                  {
                    frequency: "Hebdomadaire", 
                    tasks: ["Lavage eau savonneuse", "Vérification évacuations", "Nettoyage mobilier"],
                    duration: "30 min",
                    tools: ["Seau", "Brosse douce", "Produit neutre"]
                  },
                  {
                    frequency: "Mensuel",
                    tasks: ["Inspection joints", "Nettoyage en profondeur", "Traitement préventif"],
                    duration: "2h",
                    tools: ["Brosse dure", "Produits spécialisés", "Pulvérisateur"]
                  }
                ].map((schedule, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-white">{schedule.frequency}</h4>
                      <Badge className="bg-[#59D14C] text-white text-xs">{schedule.duration}</Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-white font-semibold mb-2 text-sm">Tâches</h5>
                        <ul className="space-y-1">
                          {schedule.tasks.map((task, idx) => (
                            <li key={idx} className="flex items-center text-gray-300 text-sm">
                              <i className="fas fa-check text-[#59D14C] mr-2"></i>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-white font-semibold mb-2 text-sm">Outils nécessaires</h5>
                        <ul className="space-y-1">
                          {schedule.tools.map((tool, idx) => (
                            <li key={idx} className="flex items-center text-gray-300 text-sm">
                              <i className="fas fa-tools text-[#59D14C] mr-2"></i>
                              {tool}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-6">Entretien Professionnel</h3>
                
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4">Planning Annuel Recommandé</h4>
                  
                  <div className="space-y-4">
                    {[
                      { month: "Mars", action: "Nettoyage complet printemps", price: "150-250€" },
                      { month: "Juin", action: "Traitement anti-mousse", price: "80-120€" },
                      { month: "Septembre", action: "Préparation hiver", price: "100-180€" },
                      { month: "Décembre", action: "Inspection et maintenance", price: "50-80€" }
                    ].map((schedule, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                        <div>
                          <span className="text-[#59D14C] font-semibold">{schedule.month}</span>
                          <p className="text-gray-300 text-sm">{schedule.action}</p>
                        </div>
                        <Badge className="bg-gray-600 text-white text-xs">{schedule.price}</Badge>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-[#59D14C]/10 rounded-lg border border-[#59D14C]/20">
                    <p className="text-[#59D14C] font-semibold text-center">
                      <i className="fas fa-calculator mr-2"></i>
                      Économie jusqu'à 40% avec contrat annuel
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4">Signes d'Alerte</h4>
                  
                  <div className="space-y-3">
                    {[
                      { sign: "Glissance anormale", urgency: "Immédiat", icon: "fas fa-exclamation-triangle", color: "text-red-400" },
                      { sign: "Taches qui s'étendent", urgency: "Sous 1 semaine", icon: "fas fa-circle", color: "text-orange-400" },
                      { sign: "Joints qui s'effritent", urgency: "Sous 1 mois", icon: "fas fa-th-large", color: "text-yellow-400" },
                      { sign: "Mousse qui revient vite", urgency: "Planifier", icon: "fas fa-leaf", color: "text-green-400" }
                    ].map((alert, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                        <div className="flex items-center">
                          <i className={`${alert.icon} ${alert.color} mr-3`}></i>
                          <span className="text-gray-300 text-sm">{alert.sign}</span>
                        </div>
                        <Badge className="bg-gray-600 text-white text-xs">{alert.urgency}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Solutions Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                SOLUTIONS AVANCÉES
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Innovations <span className="text-[#59D14C]">Technologiques</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Découvrez nos solutions technologiques de pointe pour l'entretien moderne des terrasses.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Traitement Nano-Protection",
                  subtitle: "Protection invisible longue durée",
                  description: "Application d'un revêtement nanotechnologique invisible qui repousse l'eau, les taches et facilite l'entretien. Protection efficace 5-7 ans.",
                  benefits: ["Effet autonettoyant", "Anti-taches intégré", "Préserve l'aspect naturel", "Résistance UV renforcée"],
                  process: ["Nettoyage complet", "Séchage 24h", "Application nano-coating", "Polymérisation 48h"],
                  warranty: "7 ans",
                  price: "25-35€/m²",
                  image: pressionImg
                },
                {
                  title: "Système Anti-Mousse Préventif",
                  subtitle: "Prévention automatique intelligente",
                  description: "Installation d'un système préventif avec diffuseurs intégrés qui libèrent automatiquement des agents anti-mousse selon l'humidité.",
                  benefits: ["Prévention automatique", "Dosage intelligent", "Économie long terme", "Zéro intervention manuelle"],
                  process: ["Étude faisabilité", "Installation discrète", "Programmation système", "Maintenance annuelle"],
                  warranty: "5 ans",
                  price: "150-300€ installation",
                  image: vapeurImg
                }
              ].map((solution, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-[#59D14C]/50 transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={solution.image} alt={solution.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                      <p className="text-[#59D14C] font-semibold">{solution.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3 flex items-center">
                          <i className="fas fa-star text-[#59D14C] mr-2"></i>
                          Avantages
                        </h4>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, idx) => (
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
                          Processus
                        </h4>
                        <ul className="space-y-2">
                          {solution.process.map((step, idx) => (
                            <li key={idx} className="flex items-start text-gray-300 text-sm">
                              <span className="text-[#59D14C] font-bold mr-2 mt-0.5">{idx + 1}.</span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
                      <div className="text-center">
                        <p className="text-gray-400 text-xs">Garantie</p>
                        <p className="text-[#59D14C] font-bold">{solution.warranty}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-400 text-xs">Tarif</p>
                        <p className="text-white font-bold">{solution.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section with Packages */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                OFFRES PERSONNALISÉES
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Nos <span className="text-[#59D14C]">Formules</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Choisissez la formule adaptée à vos besoins et votre budget.
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  name: "Express",
                  price: "12€/m²",
                  description: "Nettoyage rapide pour entretien régulier",
                  features: ["Balayage + lavage", "Démoussage léger", "Rinçage soigné"],
                  duration: "2-3h",
                  ideal: "Terrasses bien entretenues",
                  color: "border-gray-600"
                },
                {
                  name: "Standard",
                  price: "18€/m²",
                  description: "Solution complète pour terrasses courantes",
                  features: ["Nettoyage complet", "Démoussage profond", "Traitement joints", "Rinçage haute pression"],
                  duration: "4-6h",
                  ideal: "Entretien annuel recommandé",
                  color: "border-[#59D14C]",
                  popular: true
                },
                {
                  name: "Premium",
                  price: "25€/m²",
                  description: "Prestation haut de gamme avec protection",
                  features: ["Nettoyage expert", "Rénovation joints", "Traitement anti-mousse", "Protection hydrofuge"],
                  duration: "6-8h",
                  ideal: "Terrasses dégradées",
                  color: "border-yellow-500"
                },
                {
                  name: "Luxury",
                  price: "35€/m²",
                  description: "Service excellence avec innovations",
                  features: ["Tout Premium inclus", "Nano-protection", "Garantie 5 ans", "Suivi personnalisé"],
                  duration: "8-12h",
                  ideal: "Terrasses de prestige",
                  color: "border-purple-500"
                }
              ].map((formula, index) => (
                <div key={index} className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 ${formula.color} relative ${formula.popular ? 'scale-105 z-10' : ''}`}>
                  {formula.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-[#59D14C] text-white px-4 py-1">RECOMMANDÉE</Badge>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{formula.name}</h3>
                    <div className="text-3xl font-bold text-[#59D14C] mb-2">{formula.price}</div>
                    <p className="text-gray-300 text-sm">{formula.description}</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {formula.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <i className="fas fa-check-circle text-[#59D14C] mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-2 text-center">
                    <p className="text-gray-400 text-xs">Durée: {formula.duration}</p>
                    <p className="text-[#59D14C] text-xs font-semibold">{formula.ideal}</p>
                  </div>
                  
                  <Button className={`w-full mt-4 ${formula.popular ? 'bg-[#59D14C] hover:bg-[#4AC93D]' : 'bg-gray-700 hover:bg-gray-600'} text-white`}>
                    Choisir {formula.name}
                  </Button>
                </div>
              ))}
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <i className="fas fa-calculator text-[#59D14C] text-3xl mb-4"></i>
                  <h3 className="text-lg font-bold text-white mb-2">Devis Précis</h3>
                  <p className="text-gray-300 text-sm">Estimation détaillée gratuite sous 24h</p>
                </div>
                <div>
                  <i className="fas fa-clock text-[#59D14C] text-3xl mb-4"></i>
                  <h3 className="text-lg font-bold text-white mb-2">Intervention Rapide</h3>
                  <p className="text-gray-300 text-sm">Rendez-vous sous 48h en urgence</p>
                </div>
                <div>
                  <i className="fas fa-shield-alt text-[#59D14C] text-3xl mb-4"></i>
                  <h3 className="text-lg font-bold text-white mb-2">Garantie Résultat</h3>
                  <p className="text-gray-300 text-sm">Satisfaction 100% ou nouvelle intervention</p>
                </div>
                <div>
                  <i className="fas fa-credit-card text-[#59D14C] text-3xl mb-4"></i>
                  <h3 className="text-lg font-bold text-white mb-2">Paiement Souple</h3>
                  <p className="text-gray-300 text-sm">Facilités de paiement disponibles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                SÉCURITÉ ET GARANTIES
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Votre <span className="text-[#59D14C]">Sécurité</span> d'Abord
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <i className="fas fa-shield-alt text-[#59D14C] mr-3"></i>
                  Nos Garanties
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <i className="fas fa-check-circle text-[#59D14C] mr-3"></i>
                    Assurance responsabilité civile professionnelle
                  </div>
                  <div className="flex items-center text-gray-300">
                    <i className="fas fa-check-circle text-[#59D14C] mr-3"></i>
                    Garantie satisfaction 100% ou recommencement
                  </div>
                  <div className="flex items-center text-gray-300">
                    <i className="fas fa-check-circle text-[#59D14C] mr-3"></i>
                    Devis gratuit et sans engagement
                  </div>
                  <div className="flex items-center text-gray-300">
                    <i className="fas fa-check-circle text-[#59D14C] mr-3"></i>
                    Respect des normes environnementales
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <i className="fas fa-hard-hat text-[#59D14C] mr-3"></i>
                  Sécurité Chantier
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <i className="fas fa-check-circle text-[#59D14C] mr-3"></i>
                    Protection des espaces environnants
                  </div>
                  <div className="flex items-center text-gray-300">
                    <i className="fas fa-check-circle text-[#59D14C] mr-3"></i>
                    Équipements de sécurité individuels
                  </div>
                  <div className="flex items-center text-gray-300">
                    <i className="fas fa-check-circle text-[#59D14C] mr-3"></i>
                    Respect des réglementations en vigueur
                  </div>
                  <div className="flex items-center text-gray-300">
                    <i className="fas fa-check-circle text-[#59D14C] mr-3"></i>
                    Nettoyage du chantier inclus
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
                Nos experts évalueront précisément les besoins de votre terrasse.
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
                    value={formData.terrasseType}
                    onValueChange={(value) => handleInputChange("terrasseType", value)}
                  >
                    <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
                      <SelectValue placeholder="Type de terrasse" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="carrelage" className="text-white hover:bg-gray-600">Carrelage</SelectItem>
                      <SelectItem value="pierre-naturelle" className="text-white hover:bg-gray-600">Pierre naturelle</SelectItem>
                      <SelectItem value="bois-composite" className="text-white hover:bg-gray-600">Bois composite</SelectItem>
                      <SelectItem value="beton-dalle" className="text-white hover:bg-gray-600">Béton/Dalle</SelectItem>
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
                    value={formData.terrasseState}
                    onValueChange={(value) => handleInputChange("terrasseState", value)}
                  >
                    <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
                      <SelectValue placeholder="État de la terrasse" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="bon-etat" className="text-white hover:bg-gray-600">Bon état</SelectItem>
                      <SelectItem value="legere-mousse" className="text-white hover:bg-gray-600">Légère mousse</SelectItem>
                      <SelectItem value="tres-moussue" className="text-white hover:bg-gray-600">Très moussue</SelectItem>
                      <SelectItem value="joints-abimes" className="text-white hover:bg-gray-600">Joints abîmés</SelectItem>
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
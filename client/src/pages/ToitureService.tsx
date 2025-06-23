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
import SEOHead, { seoConfigs } from "@/components/SEOHead";
import { Link } from "wouter";

// Images spécifiques au service toiture
import toitureHero from "@assets/toiture2.png";
import nacelleImg from "@assets/realisation_079034xlarge.jpg";
import aspirationImg from "@assets/nettoyage-de-gouttieres-sans-monter-sur-le-toit-avec-laspirateur-SKY-Vac.jpg";
import produitImg from "@assets/123.jpg";
import avantApres1 from "@assets/gallerie1.png";
import avantApres2 from "@assets/gallerie2.png";
import avantApres3 from "@assets/gallerie3.png";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  toitureType: string;
  surfaceArea: string;
  lastCleaning: string;
  urgency: string;
  message: string;
}

export default function ToitureService() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    toitureType: "",
    surfaceArea: "",
    lastCleaning: "",
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
        description: "Nous vous recontacterons dans les plus brefs délais pour votre devis toiture.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        toitureType: "",
        surfaceArea: "",
        lastCleaning: "",
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
      title: "Démoussage Toiture Bruxelles",
      description: "Démoussage toiture Anderlecht, Uccle, Ixelles et toutes communes de Bruxelles. Élimination totale des mousses, lichens et champignons avec traitement hydrofuge toiture.",
      features: ["Démoussage toiture karcher", "Traitement hydrofuge toiture", "Nettoyage toiture haute pression", "Intervention rapide toiture"],
    },
    {
      icon: "fas fa-tint",
      title: "Nettoyage Gouttières Bruxelles",
      description: "Nettoyage gouttières et corniche à Bruxelles, Brabant Wallon et Brabant Flamand. Aspiration haute performance sans montée sur toit.",
      features: ["Nettoyage gouttières karcher", "Débouchage complet", "Vérification étanchéité", "Prix nettoyage gouttières"],
    },
    {
      icon: "fas fa-shield-alt",
      title: "Traitement Hydrofuge Toiture",
      description: "Traitement hydrofuge toiture Wavre, Waterloo, Braine-l'Alleud. Protection longue durée contre mousses et intempéries.",
      features: ["Traitement hydrofuge toit", "Produits écologiques", "Protection UV", "Tarif traitement hydrofuge"],
    },
    {
      icon: "fas fa-search",
      title: "Devis Nettoyage Toiture Gratuit",
      description: "Devis gratuit nettoyage toiture Bruxelles et inspection complète. Diagnostic toiture avec rapport détaillé et photos.",
      features: ["Devis nettoyage toiture", "Tarif nettoyage toiture", "Photos avant/après", "Conseils personnalisés"],
    },
  ];

  const equipments = [
    {
      title: "Nacelles Professionnelles",
      description: "Accès sécurisé aux toitures en hauteur",
      image: nacelleImg,
    },
    {
      title: "Aspirateur SKY-VAC",
      description: "Nettoyage des gouttières sans montée sur toit",
      image: aspirationImg,
    },
    {
      title: "Produits Spécialisés",
      description: "Gamme complète de produits écologiques",
      image: produitImg,
    },
  ];

  const beforeAfterImages = [
    { before: avantApres1, after: avantApres2, title: "Démoussage toiture ardoise" },
    { before: avantApres2, after: avantApres3, title: "Nettoyage toiture tuiles" },
    { before: avantApres3, after: avantApres1, title: "Rénovation toiture zinc" },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <SEOHead {...seoConfigs.toiture} location="Bruxelles" />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/70"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${toitureHero})` }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#59D14C] text-white px-6 py-3 mb-8 text-lg font-semibold">
              SERVICE SPÉCIALISÉ TOITURE
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              Nettoyage Toiture{" "}
              <span className="text-[#59D14C] drop-shadow-2xl">Bruxelles</span>
            </h1>
            <p className="text-xl text-gray-100 mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
              Spécialiste du <strong>nettoyage toiture Bruxelles</strong> et <strong>démoussage toiture</strong>. 
              Service professionnel à Anderlecht, Uccle, Ixelles, Etterbeek, Saint-Gilles, Schaerbeek, 
              Brabant Wallon et Brabant Flamand. <strong>Devis nettoyage toiture gratuit</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#59D14C] hover:bg-[#4AC93D] text-white font-semibold py-4 px-8 text-lg rounded-xl"
              >
                <i className="fas fa-calendar-alt mr-3"></i>
                Devis Gratuit
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white bg-black/30 text-white hover:bg-white hover:text-gray-900 py-4 px-8 text-lg rounded-xl shadow-2xl backdrop-blur-sm"
                style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.4)', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
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
            <span className="text-[#59D14C]">Nettoyage Toiture Bruxelles</span>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="text-[#59D14C]">Démoussage Toiture</span> Bruxelles
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Une toiture propre et bien entretenue peut durer jusqu'à 30% plus longtemps. 
                Nos experts utilisent des techniques éprouvées pour préserver votre investissement.
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

      {/* Equipment Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                ÉQUIPEMENTS PROFESSIONNELS
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Matériel de <span className="text-[#59D14C]">Pointe</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Nous investissons dans les meilleurs équipements pour garantir un travail sécurisé et de qualité supérieure.
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
                RÉSULTATS GARANTIS
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Avant / <span className="text-[#59D14C]">Après</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Découvrez la transformation spectaculaire de nos interventions toiture.
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

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900">
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
                Toutes les réponses aux questions que vous vous posez sur l'entretien de votre toiture.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "À quelle fréquence faut-il nettoyer sa toiture ?",
                  answer: "Il est recommandé de nettoyer sa toiture tous les 2 à 3 ans selon l'exposition (arbres, pollution). Une inspection annuelle permet de détecter les problèmes précocement."
                },
                {
                  question: "Le nettoyage haute pression peut-il endommager ma toiture ?",
                  answer: "Non, nos experts ajustent la pression selon le type de matériau. Nous utilisons des techniques douces pour les tuiles fragiles et réservons la haute pression aux matériaux résistants."
                },
                {
                  question: "Faut-il traiter la toiture après le nettoyage ?",
                  answer: "Oui, l'application d'un traitement anti-mousse prolonge significativement l'efficacité du nettoyage (3-5 ans) et protège votre toiture des nouvelles contaminations."
                },
                {
                  question: "Intervenez-vous sur tous types de toitures ?",
                  answer: "Nous travaillons sur tuiles, ardoises, zinc, bac acier, fibrociment. Chaque matériau nécessite une approche spécifique que nos experts maîtrisent parfaitement."
                },
                {
                  question: "Le nettoyage de toiture est-il déductible fiscalement ?",
                  answer: "Oui, l'entretien de toiture peut bénéficier d'un crédit d'impôt de 30% dans certaines conditions. Nous fournissons tous les justificatifs nécessaires."
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

      {/* Seasonal Calendar Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                CALENDRIER SAISONNIER
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Quand Nettoyer sa <span className="text-[#59D14C]">Toiture</span> ?
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Chaque saison a ses avantages pour l'entretien de votre toiture. Découvrez les meilleures périodes d'intervention.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  season: "Printemps",
                  icon: "fas fa-seedling",
                  months: "Mars - Mai",
                  benefits: "Bilan après l'hiver",
                  tasks: ["Inspection complète", "Démoussage préventif", "Nettoyage gouttières", "Traitement anti-mousse"],
                  color: "bg-green-500"
                },
                {
                  season: "Été", 
                  icon: "fas fa-sun",
                  months: "Juin - Août",
                  benefits: "Conditions optimales",
                  tasks: ["Nettoyage complet", "Séchage rapide", "Traitement longue durée", "Réparations diverses"],
                  color: "bg-yellow-500"
                },
                {
                  season: "Automne",
                  icon: "fas fa-leaf", 
                  months: "Sept - Nov",
                  benefits: "Préparation hiver",
                  tasks: ["Évacuation feuilles", "Vérification étanchéité", "Nettoyage gouttières", "Dernières réparations"],
                  color: "bg-orange-500"
                },
                {
                  season: "Hiver",
                  icon: "fas fa-snowflake",
                  months: "Déc - Fév", 
                  benefits: "Surveillance renforcée",
                  tasks: ["Inspection sécurité", "Urgences uniquement", "Planification printemps", "Devis préparatoires"],
                  color: "bg-blue-500"
                }
              ].map((season, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-[#59D14C]/50 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${season.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <i className={`${season.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{season.season}</h3>
                    <Badge className="bg-gray-700 text-gray-300 text-xs">{season.months}</Badge>
                    <p className="text-[#59D14C] font-semibold text-sm mt-2">{season.benefits}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {season.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <i className="fas fa-check text-[#59D14C] mr-2 mt-1 text-xs"></i>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roof Types Expertise */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                EXPERTISE MATÉRIAUX
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Spécialistes de <span className="text-[#59D14C]">Tous Matériaux</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Chaque type de toiture nécessite une approche spécifique. Découvrez notre expertise pour votre matériau.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  material: "Tuiles Béton",
                  image: toitureHero,
                  description: "Matériau poreux nécessitant un traitement doux",
                  techniques: ["Basse pression", "Brossage manuel", "Traitement longue durée"],
                  durability: "15-20 ans",
                  maintenance: "Tous les 3 ans"
                },
                {
                  material: "Ardoise Naturelle", 
                  image: nacelleImg,
                  description: "Pierre noble demandant un soin particulier",
                  techniques: ["Nettoyage vapeur", "Produits spécialisés", "Préservation patine"],
                  durability: "50-100 ans",
                  maintenance: "Tous les 5 ans"
                },
                {
                  material: "Zinc et Métaux",
                  image: aspirationImg,
                  description: "Matériaux résistants à haute performance",
                  techniques: ["Haute pression", "Dégraissage", "Protection anti-corrosion"],
                  durability: "30-50 ans", 
                  maintenance: "Tous les 2 ans"
                }
              ].map((roof, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-[#59D14C]/50 transition-all duration-300 group">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={roof.image} alt={roof.material} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white">{roof.material}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-300 mb-4 leading-relaxed">{roof.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Techniques utilisées</h4>
                        <ul className="space-y-1">
                          {roof.techniques.map((technique, idx) => (
                            <li key={idx} className="flex items-center text-gray-300 text-sm">
                              <i className="fas fa-tools text-[#59D14C] mr-2"></i>
                              {technique}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
                        <div>
                          <p className="text-gray-400 text-xs">Durabilité</p>
                          <p className="text-white font-semibold text-sm">{roof.durability}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs">Entretien</p>
                          <p className="text-[#59D14C] font-semibold text-sm">{roof.maintenance}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                TARIFS TRANSPARENTS
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Nos <span className="text-[#59D14C]">Tarifs</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Prix transparents et compétitifs. Devis gratuit sous 24h avec détail des prestations.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Formule Essentiel",
                  price: "8€/m²",
                  description: "Nettoyage de base pour toitures en bon état",
                  features: ["Démoussage manuel", "Nettoyage gouttières", "Inspection visuelle", "Évacuation déchets"],
                  color: "border-gray-600"
                },
                {
                  title: "Formule Confort",
                  price: "12€/m²", 
                  description: "Solution complète avec traitement préventif",
                  features: ["Démoussage haute pression", "Traitement anti-mousse", "Nettoyage complet gouttières", "Inspection détaillée", "Garantie 2 ans"],
                  color: "border-[#59D14C]",
                  popular: true
                },
                {
                  title: "Formule Premium",
                  price: "18€/m²",
                  description: "Prestation haut de gamme avec protection maximale", 
                  features: ["Démoussage professionnel", "Double traitement", "Hydrofuge protection", "Réparations mineures", "Garantie 3 ans", "Suivi annuel"],
                  color: "border-yellow-500"
                }
              ].map((formula, index) => (
                <div key={index} className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 ${formula.color} relative ${formula.popular ? 'scale-105' : ''}`}>
                  {formula.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-[#59D14C] text-white px-4 py-1">PLUS POPULAIRE</Badge>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{formula.title}</h3>
                    <div className="text-4xl font-bold text-[#59D14C] mb-2">{formula.price}</div>
                    <p className="text-gray-300 text-sm">{formula.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {formula.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <i className="fas fa-check-circle text-[#59D14C] mr-3"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full ${formula.popular ? 'bg-[#59D14C] hover:bg-[#4AC93D]' : 'bg-gray-700 hover:bg-gray-600'} text-white`}>
                    Choisir cette formule
                  </Button>
                </div>
              ))}
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <i className="fas fa-calculator text-[#59D14C] text-3xl mb-4"></i>
                  <h3 className="text-xl font-bold text-white mb-2">Devis Gratuit</h3>
                  <p className="text-gray-300">Estimation précise sous 24h sans engagement</p>
                </div>
                <div>
                  <i className="fas fa-shield-alt text-[#59D14C] text-3xl mb-4"></i>
                  <h3 className="text-xl font-bold text-white mb-2">Garantie Incluse</h3>
                  <p className="text-gray-300">Satisfaction garantie ou intervention gratuite</p>
                </div>
                <div>
                  <i className="fas fa-credit-card text-[#59D14C] text-3xl mb-4"></i>
                  <h3 className="text-xl font-bold text-white mb-2">Paiement Facilité</h3>
                  <p className="text-gray-300">Possibilité de paiement en plusieurs fois</p>
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
                Nos experts analyseront vos besoins spécifiques.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Nom complet *"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
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
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                  required
                />

                <Input
                  placeholder="Ville"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                />

                <Textarea
                  placeholder="Décrivez brièvement votre projet (optionnel)"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 min-h-[100px]"
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

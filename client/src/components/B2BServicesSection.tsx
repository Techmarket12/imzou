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
import { apiRequest } from "@/lib/queryClient";

// Import des images directement
import gallerie1 from "@assets/carrefour.png";
import gallerie2 from "@assets/delhaize.png";
import gallerie3 from "@assets/Brico_logo.svg.png";
import gallerie4 from "@assets/hubo.png";
import gallerie5 from "@assets/totalenergies.png";
import gallerie6 from "@assets/Q8.png";
import gallerie7 from "@assets/brico.png";
import gallerie8 from "@assets/station.jpg";
import gallerie9 from "@assets/commerce.webp";

interface B2BFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

export default function B2BServicesSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<B2BFormData>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  // LOGOS DES ENTREPRISES - Remplacez les chemins par vos vrais logos
  const companyLogos = [
    gallerie1, // Logo 1
    gallerie2, // Logo 2
    gallerie3, // Logo 3
    gallerie4, // Logo 4
    gallerie5, // Logo 5
    gallerie6, // Logo 6
  ];

  // IMAGES DES RÉALISATIONS B2B - Utilisez vos vraies images
  const realizationImages = [
    gallerie7, // Image 1 - changez par votre vraie image
    gallerie8, // Image 2 - changez par votre vraie image
    gallerie9, // Image 3 - changez par votre vraie image
  ];

  const enterprises = [
    {
      name: "Carrefour",
      sector: "Grande distribution",
    },
    {
      name: "Delhaize",
      sector: "Supermarché",
    },
    {
      name: "Aldi",
      sector: "Commerce",
    },
    {
      name: "Lidl",
      sector: "Distribution",
    },
    {
      name: "Colruyt",
      sector: "Retail",
    },
    {
      name: "Brico",
      sector: "Bricolage",
    },
  ];

  const submitMutation = useMutation({
    mutationFn: async (data: B2BFormData) => {
      const response = await fetch("/api/contact-b2b", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit B2B request");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Demande envoyée !",
        description: "Nous vous recontacterons dans les plus brefs délais.",
      });
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        serviceType: "",
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
      !formData.companyName ||
      !formData.contactName ||
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

  const handleInputChange = (field: keyof B2BFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const b2bServices = [
    {
      icon: "fas fa-building",
      title: "Nettoyage de façades commerciales",
      description: "Redonnez une image professionnelle à vos points de vente",
      features: ["Devantures", "Vitres", "Enseignes", "Murs extérieurs"],
    },
    {
      icon: "fas fa-home",
      title: "Entretien de toitures professionnelles",
      description: "Préservez l'intégrité de vos bâtiments commerciaux",
      features: ["Centres commerciaux", "Entrepôts", "Bureaux", "Usines"],
    },
    {
      icon: "fas fa-road",
      title: "Nettoyage d'espaces extérieurs",
      description: "Maintenez la propreté de vos zones de passage",
      features: ["Parkings", "Terrasses", "Cours", "Aires de livraison"],
    },
  ];

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
              Faites confiance à notre expertise pour l'entretien de vos locaux
              commerciaux. Nous intervenons pour les grandes enseignes, PME et
              collectivités.
            </p>
          </div>

          {/* Logos des entreprises - 6 emplacements pour logos */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Ils nous font confiance
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {companyLogos.map((logoPath, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-gray-600 hover:border-[#59D14C]/50 flex items-center justify-center aspect-square"
                >
                  <img
                    src={logoPath}
                    alt={`Logo entreprise ${index + 1}`}
                    className="w-full h-full object-contain max-w-full max-h-full"
                    onError={(e) => {
                      // Si l'image ne se charge pas, afficher un placeholder
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (
                        parent &&
                        !parent.querySelector(".placeholder-text")
                      ) {
                        const placeholder = document.createElement("div");
                        placeholder.className =
                          "placeholder-text text-gray-400 text-center";
                        placeholder.innerHTML = `<div class="text-2xl mb-2">🏢</div><span class="text-xs">Logo ${index + 1}</span>`;
                        parent.appendChild(placeholder);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Section images - 3 emplacements pour images */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Nos réalisations B2B
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {realizationImages.map((imagePath, index) => (
                <div
                  key={index}
                  className="bg-gray-700/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-600 hover:border-[#59D14C]/50 transition-all duration-300 h-80"
                >
                  <img
                    src={imagePath}
                    alt={`Réalisation B2B ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Si l'image ne se charge pas, afficher un placeholder
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (
                        parent &&
                        !parent.querySelector(".placeholder-text")
                      ) {
                        const placeholder = document.createElement("div");
                        placeholder.className =
                          "placeholder-text w-full h-full flex items-center justify-center bg-gray-800/50";
                        placeholder.innerHTML = `<div class="text-gray-400 text-center"><div class="text-3xl mb-2">🖼️</div><span class="text-sm">Réalisation ${index + 1}</span></div>`;
                        parent.appendChild(placeholder);
                      }
                    }}
                  />
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
                    <i
                      className={`${service.icon} text-[#59D14C] text-3xl`}
                    ></i>
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
                      <h4 className="text-white font-semibold mb-1">
                        Interventions planifiées
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Contrats d'entretien régulier adaptés à vos besoins
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#59D14C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-clock text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Horaires flexibles
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Interventions en dehors des heures d'ouverture
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#59D14C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-file-invoice text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Facturation simplifiée
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Devis détaillés et facturation mensuelle
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#59D14C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-shield-alt text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Assurance complète
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Couverture professionnelle pour tous nos services
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-[#59D14C]/10 rounded-2xl p-8 border border-[#59D14C]/20">
                  <h4 className="text-2xl font-bold text-white mb-4 text-center">
                    Devis personnalisé
                  </h4>
                  <p className="text-gray-300 mb-6 text-center">
                    Obtenez une offre adaptée à vos besoins spécifiques
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
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

                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        type="email"
                        placeholder="Email professionnel *"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                        required
                      />
                      <Input
                        type="tel"
                        placeholder="Téléphone *"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>

                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) =>
                        handleInputChange("serviceType", value)
                      }
                    >
                      <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
                        <SelectValue placeholder="Type de service souhaité" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem
                          value="facades"
                          className="text-white hover:bg-gray-600"
                        >
                          Nettoyage de façades
                        </SelectItem>
                        <SelectItem
                          value="toitures"
                          className="text-white hover:bg-gray-600"
                        >
                          Entretien de toitures
                        </SelectItem>
                        <SelectItem
                          value="exterieurs"
                          className="text-white hover:bg-gray-600"
                        >
                          Nettoyage d'espaces extérieurs
                        </SelectItem>
                        <SelectItem
                          value="contrat"
                          className="text-white hover:bg-gray-600"
                        >
                          Contrat d'entretien régulier
                        </SelectItem>
                        <SelectItem
                          value="autre"
                          className="text-white hover:bg-gray-600"
                        >
                          Autre demande
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    <Textarea
                      placeholder="Message (optionnel)"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 min-h-[80px]"
                    />

                    <Button
                      type="submit"
                      disabled={submitMutation.isPending}
                      className="w-full bg-[#59D14C] hover:bg-[#4AC93D] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50"
                    >
                      {submitMutation.isPending ? (
                        <>
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane mr-2"></i>
                          Envoyer la demande
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

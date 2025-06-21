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

// Import des images
import facadeImg from "@assets/facade2.png";

interface ContactFormData {
  firstName: string;
  email: string;
  phone: string;
  city: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    email: "",
    phone: "",
    city: "",
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
        title: "Message envoyé avec succès !",
        description: "Nous vous recontacterons dans les plus brefs délais.",
        duration: 5000,
      });
      setFormData({
        firstName: "",
        email: "",
        phone: "",
        city: "",
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

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${facadeImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <Badge className="bg-[#59D14C] text-white px-6 py-3 mb-8 text-lg font-semibold">
            CONTACTEZ-NOUS
          </Badge>
          <h1
            className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
          >
            Parlons de Votre
            <br />
            <span className="text-[#59D14C]">Projet</span>
          </h1>
          <p
            className="text-xl lg:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
          >
            Experts en nettoyage haute pression depuis 15 ans à Bruxelles et
            Brabant. Devis gratuit et intervention rapide garantis.
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
                  .getElementById("contact-info")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Nos Coordonnées
            </Button>
          </div>
        </div>
      </section>

      {/* Informations de Contact */}
      <section id="contact-info" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
              COORDONNÉES
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Comment nous <span className="text-[#59D14C]">Contacter</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Plusieurs moyens pour nous joindre et obtenir votre devis
              personnalisé
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="bg-gray-700/50 border-gray-600 text-center hover:border-[#59D14C] transition-colors duration-300">
              <CardHeader>
                <div className="text-4xl text-[#59D14C] mb-4">
                  <i className="fas fa-phone"></i>
                </div>
                <CardTitle className="text-white">Téléphone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-2">0497175556</p>
                <p className="text-sm text-gray-400">Lun-Ven 8h-18h</p>
                <p className="text-sm text-gray-400">Sam 8h-12h</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-700/50 border-gray-600 text-center hover:border-[#59D14C] transition-colors duration-300">
              <CardHeader>
                <div className="text-4xl text-[#59D14C] mb-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <CardTitle className="text-white">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-2">info@aquatf.be</p>
                <p className="text-sm text-gray-400">Réponse sous 24h</p>
                <p className="text-sm text-gray-400">7j/7</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-700/50 border-gray-600 text-center hover:border-[#59D14C] transition-colors duration-300">
              <CardHeader>
                <div className="text-4xl text-[#59D14C] mb-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <CardTitle className="text-white">
                  Zone d'Intervention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-2">Bruxelles-Capitale</p>
                <p className="text-gray-300 mb-2">Brabant Wallon</p>
                <p className="text-sm text-gray-400">Rayon 50km</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-700/50 border-gray-600 text-center hover:border-[#59D14C] transition-colors duration-300">
              <CardHeader>
                <div className="text-4xl text-[#59D14C] mb-4">
                  <i className="fas fa-clock"></i>
                </div>
                <CardTitle className="text-white">Urgences</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-2">24h/24 - 7j/7</p>
                <p className="text-sm text-gray-400">Intervention rapide</p>
                <p className="text-sm text-gray-400">Devis express</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-700/50 border-gray-600 hover:border-[#59D14C] transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <i className="fas fa-calculator text-[#59D14C] mr-3"></i>
                  Devis Gratuit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Estimation précise et détaillée sans engagement. Déplacement
                  gratuit dans notre zone d'intervention.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Visite sur site incluse</li>
                  <li>• Analyse complète des surfaces</li>
                  <li>• Proposition personnalisée</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-700/50 border-gray-600 hover:border-[#59D14C] transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <i className="fas fa-tools text-[#59D14C] mr-3"></i>
                  Conseil Expert
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Nos spécialistes vous conseillent sur les meilleures solutions
                  pour votre type de surface.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Diagnostic professionnel</li>
                  <li>• Recommandations adaptées</li>
                  <li>• Planification optimale</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-700/50 border-gray-600 hover:border-[#59D14C] transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <i className="fas fa-shield-alt text-[#59D14C] mr-3"></i>
                  Garantie Qualité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Satisfaction garantie ou nous recommençons. Assurance
                  responsabilité civile incluse.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Garantie satisfaction</li>
                  <li>• Assurance complète</li>
                  <li>• Suivi personnalisé</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulaire de Contact */}
      <section
        id="contact-form"
        className="py-20 bg-gradient-to-br from-gray-800 to-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                DEMANDE DE CONTACT
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Obtenez votre{" "}
                <span className="text-[#59D14C]">Devis Gratuit</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Remplissez ce formulaire simple pour recevoir votre devis
                personnalisé sous 24h. Nos experts vous recontacteront
                rapidement.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Nom complet *"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
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
                      Demander un Devis Gratuit
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <i className="fas fa-clock text-[#59D14C] text-2xl mb-2"></i>
                    <div className="text-white font-semibold">
                      Réponse Rapide
                    </div>
                    <div className="text-gray-300">Sous 2h en journée</div>
                  </div>
                  <div>
                    <i className="fas fa-euro-sign text-[#59D14C] text-2xl mb-2"></i>
                    <div className="text-white font-semibold">
                      Devis Gratuit
                    </div>
                    <div className="text-gray-300">Sans engagement</div>
                  </div>
                  <div>
                    <i className="fas fa-shield-alt text-[#59D14C] text-2xl mb-2"></i>
                    <div className="text-white font-semibold">Garantie</div>
                    <div className="text-gray-300">Satisfaction assurée</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
                QUESTIONS FRÉQUENTES
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Vos <span className="text-[#59D14C]">Questions</span>
              </h2>
              <p className="text-xl text-gray-300">
                Les réponses aux questions les plus courantes sur nos services
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Dans quelles zones intervenez-vous ?",
                  answer:
                    "Nous intervenons principalement à Bruxelles-Capitale et dans le Brabant Wallon. Notre zone d'intervention couvre un rayon de 50km autour de Bruxelles, incluant Wavre, Nivelles, Hal, Vilvorde, et leurs environs.",
                },
                {
                  question: "Combien coûte un nettoyage de toiture ?",
                  answer:
                    "Le prix varie selon la superficie, le type de toiture et l'état de salissure. Nos tarifs débutent à 8€/m² pour un nettoyage standard. Un devis gratuit et personnalisé vous sera proposé après visite sur site.",
                },
                {
                  question: "Combien de temps prend une intervention ?",
                  answer:
                    "La durée dépend de la surface et du type de nettoyage. En moyenne : 2-4h pour une terrasse, 4-8h pour une toiture, 3-6h pour une façade. Nous vous informons précisément lors du devis.",
                },
                {
                  question: "Utilisez-vous des produits écologiques ?",
                  answer:
                    "Oui, nous privilégions les produits biodégradables et respectueux de l'environnement. Nos techniques de nettoyage haute pression réduisent l'usage de produits chimiques.",
                },
                {
                  question: "Proposez-vous des garanties ?",
                  answer:
                    "Nous garantissons la qualité de nos interventions. Si le résultat ne vous satisfait pas, nous recommençons gratuitement. Nous sommes assurés responsabilité civile et décennale.",
                },
                {
                  question: "Puis-je obtenir un devis par téléphone ?",
                  answer:
                    "Nous pouvons vous donner une estimation par téléphone, mais un devis précis nécessite une visite sur site pour évaluer l'état des surfaces et définir la meilleure approche.",
                },
              ].map((faq, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <i className="fas fa-question-circle text-[#59D14C] mr-3"></i>
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Processus de Contact */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#59D14C] text-white px-4 py-2 mb-6 text-sm font-semibold">
              PROCESSUS SIMPLE
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Comment ça <span className="text-[#59D14C]">Fonctionne</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un processus simple et transparent, du premier contact à la
              réalisation
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Contact Initial",
                description:
                  "Contactez-nous par téléphone, email ou formulaire. Nous vous rappelons sous 2h en journée.",
                icon: "fas fa-phone-alt",
              },
              {
                step: "2",
                title: "Visite Gratuite",
                description:
                  "Nous venons évaluer vos besoins sur site. Diagnostic complet et conseils personnalisés.",
                icon: "fas fa-search",
              },
              {
                step: "3",
                title: "Devis Détaillé",
                description:
                  "Proposition claire avec détail des prestations, délais et garanties. Sans engagement.",
                icon: "fas fa-file-invoice",
              },
              {
                step: "4",
                title: "Intervention",
                description:
                  "Réalisation soignée par nos experts. Nettoyage complet et vérification qualité.",
                icon: "fas fa-spray-can",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#59D14C] rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${step.icon} text-white text-2xl`}></i>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-[#59D14C] rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

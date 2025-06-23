import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
  {
    question: "Quel est le prix du nettoyage toiture à Bruxelles ?",
    answer: "Le prix nettoyage toiture Uccle et Bruxelles varie entre 8€ et 25€/m² selon le type de toiture. Le tarif nettoyage toiture dépend de la surface, du degré de salissure et du traitement hydrofuge toiture. Nous proposons un devis nettoyage toiture gratuit avec inspection complète.",
    keywords: ["prix nettoyage toiture", "tarif nettoyage toiture", "devis nettoyage toiture"]
  },
  {
    question: "Comment se déroule le démoussage toiture Bruxelles ?",
    answer: "Le démoussage toiture Anderlecht et toute la région de Bruxelles commence par une inspection. Ensuite, nous utilisons un nettoyage toiture karcher haute pression pour éliminer mousses et lichens. Le service se termine par un traitement hydrofuge toiture pour une protection durable.",
    keywords: ["démoussage toiture Bruxelles", "nettoyage toiture karcher", "traitement hydrofuge toiture"]
  },
  {
    question: "Proposez-vous le nettoyage terrasse Bruxelles ?",
    answer: "Oui, nous sommes spécialistes du nettoyage terrasse Bruxelles et démoussage terrasse. Nous intervenons pour le nettoyage escalier extérieur, nettoyage entrée maison et nettoyage allée piétonne à Anderlecht, Uccle, Ixelles et toute la région.",
    keywords: ["nettoyage terrasse Bruxelles", "démoussage terrasse", "nettoyage escalier extérieur"]
  },
  {
    question: "Intervenez-vous pour le nettoyage façade Bruxelles ?",
    answer: "Absolument ! Nous proposons le nettoyage façade Bruxelles et démoussage façade dans toutes les communes : Saint-Gilles, Etterbeek, Schaerbeek. Nos services incluent nettoyage façade karcher, traitement hydrofuge façade et nettoyage graffitis façade.",
    keywords: ["nettoyage façade Bruxelles", "démoussage façade", "nettoyage façade karcher"]
  },
  {
    question: "Couvrez-vous le Brabant Wallon et Brabant Flamand ?",
    answer: "Oui, nous intervenons dans tout le Brabant Wallon (Wavre, Waterloo, Braine-l'Alleud, Nivelles) et Brabant Flamand (Zaventem, Dilbeek, Tervuren, Vilvoorde) pour le nettoyage toiture, démoussage terrasse et nettoyage façade haute pression.",
    keywords: ["Brabant Wallon", "Brabant Flamand", "nettoyage toiture"]
  },
  {
    question: "Utilisez-vous des produits chimiques pour le nettoyage ?",
    answer: "Non, nous privilégions le nettoyage toiture haute pression écologique et sans produit chimique. Notre méthode vapeur respecte l'environnement tout en garantissant un démoussage toiture efficace et un traitement hydrofuge durable.",
    keywords: ["nettoyage écologique", "sans produit chimique", "vapeur"]
  },
  {
    question: "Quelle est la fréquence recommandée pour le nettoyage toiture ?",
    answer: "Nous recommandons un nettoyage toiture karcher tous les 3-5 ans selon l'exposition. Le démoussage toiture et traitement hydrofuge toiture permettent de prolonger la durée de vie de votre toiture jusqu'à 30%. L'intervention rapide toiture évite des réparations coûteuses.",
    keywords: ["fréquence nettoyage", "entretien toiture", "intervention rapide toiture"]
  },
  {
    question: "Proposez-vous un devis gratuit ?",
    answer: "Oui, nous proposons un devis nettoyage toiture gratuit partout : prix nettoyage toiture Uccle, devis démoussage toiture Waterloo, tarif nettoyage façade. L'inspection initiale est également gratuite avec rapport détaillé et photos.",
    keywords: ["devis gratuit", "inspection gratuite", "prix nettoyage"]
  }
];

const serviceHighlights = [
  {
    title: "Nettoyage Toiture Karcher Bruxelles",
    description: "Service professionnel avec matériel Karcher haute pression",
    areas: ["Anderlecht", "Uccle", "Ixelles", "Etterbeek"]
  },
  {
    title: "Démoussage Terrasse Brabant Wallon", 
    description: "Spécialiste du démoussage et nettoyage escalier extérieur",
    areas: ["Wavre", "Waterloo", "Braine-l'Alleud", "Nivelles"]
  },
  {
    title: "Nettoyage Façade Haute Pression",
    description: "Expert en nettoyage façade karcher et traitement hydrofuge",
    areas: ["Saint-Gilles", "Schaerbeek", "Forest", "Molenbeek"]
  },
  {
    title: "Traitement Hydrofuge Toiture",
    description: "Protection longue durée contre mousses et intempéries",
    areas: ["Zaventem", "Dilbeek", "Tervuren", "Vilvoorde"]
  }
];

export default function SEOFAQSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Questions Fréquentes <span className="text-[#59D14C]">Nettoyage Toiture</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Tout savoir sur nos services de nettoyage toiture Bruxelles, démoussage terrasse, 
              nettoyage façade haute pression et tarifs dans votre commune.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* FAQ Section */}
            <div className="lg:col-span-2">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-gray-800/50 border border-gray-700 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-[#59D14C] py-6">
                      <h3 className="text-lg font-semibold">{faq.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                      <p>{faq.answer}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {faq.keywords.map((keyword, keyIndex) => (
                          <span 
                            key={keyIndex}
                            className="text-xs bg-[#59D14C]/20 text-[#59D14C] px-2 py-1 rounded"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Service Highlights */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Nos <span className="text-[#59D14C]">Spécialités</span>
              </h3>
              
              {serviceHighlights.map((service, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-[#59D14C] text-lg">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-3">
                      {service.description}
                    </p>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-400 font-medium">Zones d'intervention :</p>
                      <div className="flex flex-wrap gap-1">
                        {service.areas.map((area, areaIndex) => (
                          <span 
                            key={areaIndex}
                            className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Contact CTA */}
              <Card className="bg-gradient-to-br from-[#59D14C]/20 to-[#27851E]/20 border-[#59D14C]/30">
                <CardContent className="p-6 text-center">
                  <h4 className="text-white font-bold mb-2">Devis Gratuit</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Prix nettoyage toiture Uccle, devis démoussage toiture Waterloo, 
                    tarif traitement hydrofuge toiture
                  </p>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-[#59D14C] hover:bg-[#4AC93D] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Demander un Devis
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Keywords footer */}
          <div className="mt-16 p-8 bg-gray-800/30 rounded-xl border border-gray-700">
            <h4 className="text-white font-bold mb-4 text-center">
              Nos Services dans Toute la Région
            </h4>
            <div className="text-center text-gray-400 text-sm leading-relaxed">
              <p className="mb-2">
                <strong className="text-[#59D14C]">Bruxelles :</strong> nettoyage toiture Anderlecht • démoussage toiture Uccle • 
                nettoyage façade Ixelles • nettoyage terrasse Etterbeek • démoussage façade Saint-Gilles • 
                nettoyage escalier extérieur Schaerbeek
              </p>
              <p className="mb-2">
                <strong className="text-[#59D14C]">Brabant Wallon :</strong> nettoyage toiture Wavre • démoussage toiture Waterloo • 
                nettoyage façade Braine-l'Alleud • traitement hydrofuge toiture Nivelles • 
                nettoyage terrasse Ottignies-Louvain-la-Neuve
              </p>
              <p>
                <strong className="text-[#59D14C]">Brabant Flamand :</strong> nettoyage toiture Zaventem • démoussage toiture Dilbeek • 
                nettoyage façade Tervuren • nettoyage terrasse Vilvoorde • démoussage façade Grimbergen • 
                nettoyage escalier extérieur Halle
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

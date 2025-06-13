import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Demande envoyée avec succès !",
        description: data.message,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Erreur lors de l'envoi",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.service) {
      toast({
        title: "Champs requis manquants",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: "fas fa-phone",
      title: "Téléphone",
      value: "+32 xx xxx xx xx",
      color: "bg-[hsl(160,84%,39%)]"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "contact@aqua-bob-eponge.be",
      color: "bg-[hsl(199,89%,48%)]"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Zone d'intervention",
      value: "Wallonie & Bruxelles",
      color: "bg-white text-[hsl(220,26%,14%)]"
    }
  ];

  const businessHours = [
    { day: "Lundi - Vendredi:", hours: "8h00 - 18h00" },
    { day: "Samedi:", hours: "8h00 - 16h00" },
    { day: "Dimanche:", hours: "Fermé" }
  ];

  return (
    <section id="contact" className="py-20 bg-[hsl(220,26%,14%)] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contactez-Nous</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Prêt à redonner éclat à vos extérieurs ? Demandez votre devis gratuit dès maintenant.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white rounded-xl text-[hsl(220,26%,14%)]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Demander un Devis Gratuit</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Prénom *</label>
                    <Input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="Votre prénom"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Nom *</label>
                    <Input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Votre nom"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="votre@email.com"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Téléphone</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+32 xxx xx xx xx"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Service souhaité *</label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sélectionnez un service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="toiture">Nettoyage Toiture</SelectItem>
                      <SelectItem value="terrasse">Nettoyage Terrasse</SelectItem>
                      <SelectItem value="facade">Nettoyage Façade</SelectItem>
                      <SelectItem value="multiple">Services Multiples</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <Textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Décrivez votre projet..."
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-[hsl(160,84%,39%)] hover:bg-[hsl(160,84%,35%)] text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
                >
                  {contactMutation.isPending ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      <span>Envoyer ma Demande</span>
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Nos Coordonnées</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center`}>
                      <i className={`${info.icon} ${info.color.includes('white') ? 'text-[hsl(220,26%,14%)]' : 'text-white'}`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Horaires</h4>
              <div className="space-y-2 text-gray-300">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[hsl(160,84%,39%)]/10 rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-3 flex items-center">
                <i className="fas fa-gift text-[hsl(160,84%,39%)] mr-2"></i>
                Devis Gratuit
              </h4>
              <p className="text-gray-300">
                Évaluation gratuite et sans engagement. Nous nous déplaçons chez vous pour établir un devis personnalisé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

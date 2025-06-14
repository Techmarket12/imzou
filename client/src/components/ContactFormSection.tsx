import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  serviceType: string;
  propertyType: string;
  surfaceArea: string;
  message: string;
  urgency: string;
  images: File[];
}

export default function ContactFormSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    serviceType: "",
    propertyType: "",
    surfaceArea: "",
    message: "",
    urgency: "",
    images: []
  });

  const [dragActive, setDragActive] = useState(false);

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
        throw new Error("Failed to submit contact form");
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Demande envoyée !",
        description: "Nous vous contacterons dans les plus brefs délais pour votre devis gratuit.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        serviceType: "",
        propertyType: "",
        surfaceArea: "",
        message: "",
        urgency: "",
        images: []
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

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({ ...prev, images: [...prev.images, ...files] }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    setFormData(prev => ({ ...prev, images: [...prev.images, ...files] }));
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Demandez votre <span className="text-[#59D14C]">devis gratuit</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Obtenez une estimation personnalisée pour vos travaux de nettoyage. 
                Notre équipe vous contactera dans les 24h pour une évaluation gratuite.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#59D14C] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-clock text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Réponse rapide</h3>
                  <p className="text-gray-300">Devis personnalisé sous 24h maximum</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#59D14C] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-calculator text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Estimation gratuite</h3>
                  <p className="text-gray-300">Aucun frais pour l'évaluation de vos besoins</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#59D14C] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-handshake text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Sans engagement</h3>
                  <p className="text-gray-300">Aucune obligation d'achat après le devis</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#59D14C] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Toute la Belgique</h3>
                  <p className="text-gray-300">Interventions en Wallonie et à Bruxelles</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-4">Nos coordonnées</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-phone text-[#59D14C]"></i>
                  <span className="text-gray-300">+32 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-[#59D14C]"></i>
                  <span className="text-gray-300">contact@aqua-toiture-facade.be</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-clock text-[#59D14C]"></i>
                  <span className="text-gray-300">Lun-Ven: 8h-18h | Sam: 8h-12h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div>
            <Card className="bg-gray-800 border-gray-700 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Demandez votre devis gratuit
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Quelques informations suffisent pour recevoir votre estimation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nom *
                      </label>
                      <Input
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Votre nom"
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Téléphone *
                      </label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="06 12 34 56 78"
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="votre@email.com"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Ville *
                    </label>
                    <Input
                      required
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="Votre ville"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Type de service *
                    </label>
                    <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Choisissez un service" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem value="toiture" className="text-white">Nettoyage de toiture</SelectItem>
                        <SelectItem value="facade" className="text-white">Nettoyage de façade</SelectItem>
                        <SelectItem value="terrasse" className="text-white">Nettoyage de terrasse</SelectItem>
                        <SelectItem value="multiple" className="text-white">Plusieurs services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message (optionnel)
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Décrivez votre projet..."
                      rows={3}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Photos (optionnel)
                    </label>
                    <div
                      className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                        dragActive 
                          ? "border-[#59D14C] bg-gray-700" 
                          : "border-gray-600 hover:border-[#59D14C] bg-gray-700"
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <i className="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2"></i>
                      <p className="text-gray-300 mb-2">
                        Ajoutez des photos de votre projet
                      </p>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-input"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById("file-input")?.click()}
                        className="border-gray-600 text-gray-300 hover:bg-gray-600"
                      >
                        Choisir des fichiers
                      </Button>
                    </div>

                    {/* Image Preview */}
                    {formData.images.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {formData.images.map((file, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-white"
                          >
                            <i className="fas fa-image"></i>
                            <span className="text-xs">{file.name}</span>
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="ml-1 hover:text-red-400"
                            >
                              <i className="fas fa-times"></i>
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full bg-[#27851E] hover:bg-[#1F6B15] text-white py-3 text-lg font-semibold"
                  >
                    {submitMutation.isPending ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i>
                        Demander mon devis gratuit
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
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
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Demandez votre <span className="text-[hsl(160,84%,39%)]">devis gratuit</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Obtenez une estimation personnalisée pour vos travaux de nettoyage. 
              Notre équipe vous contactera dans les 24h pour une évaluation gratuite.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Benefits */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-[hsl(160,84%,39%)] border-2">
                <CardHeader>
                  <CardTitle className="text-[hsl(160,84%,39%)] flex items-center">
                    <i className="fas fa-gift mr-2"></i>
                    Devis 100% gratuit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Estimation détaillée sans engagement, sur site ou par photos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-gray-900 flex items-center">
                    <i className="fas fa-clock mr-2"></i>
                    Réponse rapide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Nous vous recontactons sous 24h pour planifier votre devis.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-gray-900 flex items-center">
                    <i className="fas fa-leaf mr-2"></i>
                    Éco-responsable
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Nettoyage à la vapeur sans produits chimiques nocifs.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Informations pour votre devis
                  </CardTitle>
                  <CardDescription>
                    Plus vous nous donnez de détails, plus votre devis sera précis !
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Prénom *
                        </label>
                        <Input
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="Votre prénom"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom *
                        </label>
                        <Input
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="votre@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone *
                        </label>
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="06 12 34 56 78"
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse du chantier *
                      </label>
                      <Input
                        required
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder="Adresse complète"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ville *
                        </label>
                        <Input
                          required
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          placeholder="Ville"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Code postal *
                        </label>
                        <Input
                          required
                          value={formData.postalCode}
                          onChange={(e) => handleInputChange("postalCode", e.target.value)}
                          placeholder="77000"
                        />
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Type de service *
                        </label>
                        <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choisissez un service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="toiture">Nettoyage de toiture</SelectItem>
                            <SelectItem value="facade">Nettoyage de façade</SelectItem>
                            <SelectItem value="terrasse">Nettoyage de terrasse</SelectItem>
                            <SelectItem value="multiple">Plusieurs services</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Type de propriété
                        </label>
                        <Select value={formData.propertyType} onValueChange={(value) => handleInputChange("propertyType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Type de bien" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="maison">Maison individuelle</SelectItem>
                            <SelectItem value="appartement">Appartement</SelectItem>
                            <SelectItem value="commerce">Commerce</SelectItem>
                            <SelectItem value="immeuble">Immeuble</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Surface approximative
                        </label>
                        <Input
                          value={formData.surfaceArea}
                          onChange={(e) => handleInputChange("surfaceArea", e.target.value)}
                          placeholder="ex: 100 m²"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Urgence
                        </label>
                        <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Délai souhaité" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">Urgent (sous 48h)</SelectItem>
                            <SelectItem value="semaine">Cette semaine</SelectItem>
                            <SelectItem value="mois">Ce mois-ci</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description détaillée
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Décrivez l'état actuel, vos attentes, difficultés d'accès..."
                        rows={4}
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Photos du chantier
                      </label>
                      <div
                        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                          dragActive 
                            ? "border-[hsl(160,84%,39%)] bg-green-50" 
                            : "border-gray-300 hover:border-[hsl(160,84%,39%)]"
                        }`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                      >
                        <i className="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2"></i>
                        <p className="text-gray-600 mb-2">
                          Glissez vos photos ici ou cliquez pour sélectionner
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          JPG, PNG ou WEBP jusqu'à 10MB chacune
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
                              className="flex items-center gap-2 px-3 py-2"
                            >
                              <i className="fas fa-image"></i>
                              <span className="text-xs">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="ml-1 hover:text-red-600"
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
                      className="w-full bg-[hsl(160,84%,39%)] hover:bg-[hsl(160,84%,35%)] text-white py-3 text-lg font-semibold"
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
      </div>
    </section>
  );
}
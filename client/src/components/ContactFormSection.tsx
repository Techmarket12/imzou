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

// Import images for before/after comparisons
import beforeToiture from "@assets/toitureaprès.png";
import afterToiture from "@assets/facadeavant.png";
import beforeFacade from "@assets/facade2avant.png";
import afterFacade from "@assets/facade2apres.png";
import beforeTerrasse from "@assets/terrasse2avant.png";
import afterTerrasse from "@assets/terrasse2apres.png";

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

// Component for Before/After image comparison
function BeforeAfterComparison({
  beforeImg,
  afterImg,
  title,
  description,
}: {
  beforeImg: string;
  afterImg: string;
  title: string;
  description: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleStart = () => setIsDragging(true);
  const handleEnd = () => setIsDragging(false);

  const updatePosition = (
    clientX: number,
    element: HTMLElement,
    forceUpdate = false,
  ) => {
    if (!isDragging && !forceUpdate) return;
    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX, e.currentTarget);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX, e.currentTarget, true);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX, e.currentTarget, true);
  };

  return (
    <div className="relative group max-w-sm mx-auto">
      <h4 className="text-white font-semibold mb-3 text-center">{title}</h4>
      <div
        className="relative w-full h-40 overflow-hidden rounded-xl cursor-col-resize touch-none select-none"
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
        onTouchMove={handleTouchMove}
        onClick={handleClick}
      >
        {/* After image (background) */}
        <img
          src={afterImg}
          alt="Après"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImg}
            alt="Avant"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <i className="fas fa-arrows-alt-h text-gray-600 text-xs"></i>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
          Avant
        </div>
        <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
          Après
        </div>
      </div>

      {/* Description text */}
      <p className="text-gray-300 text-sm text-center mt-3 leading-relaxed">
        {description}
      </p>
    </div>
  );
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
    images: [],
  });

  const [dragActive, setDragActive] = useState(false);

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
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...imageFiles],
    }));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const beforeAfterData = [
    {
      title: "Nettoyage de Toiture",
      beforeImg: beforeToiture,
      afterImg: afterToiture,
      description:
        "Nettoyage à la vapeur pour préserver l'intégrité de vos tuiles et ardoises sans produits chimiques agressifs.",
    },
    {
      title: "Nettoyage de Façade",

      beforeImg: beforeFacade,
      afterImg: afterFacade,
      description:
        "Traitement à l'eau chaude haute pression pour éliminer salissures et mousses tout en respectant vos revêtements.",
    },
    {
      title: "Nettoyage de Terrasse",
      beforeImg: beforeTerrasse,
      afterImg: afterTerrasse,
      description:
        "Démoussage professionnel et protection durable pour redonner éclat et sécurité à vos espaces extérieurs.",
    },
  ];

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
        description:
          "Nous vous contacterons dans les plus brefs délais pour votre devis gratuit.",
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
        images: [],
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
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Demandez votre{" "}
                <span className="text-[#59D14C]">devis gratuit</span>
              </h2>
            </div>

            {/* Before/After comparisons */}
            <div className="space-y-6">
              {beforeAfterData.map((item, index) => (
                <BeforeAfterComparison
                  key={index}
                  beforeImg={item.beforeImg}
                  afterImg={item.afterImg}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>

          {/* Right form - Reduced height */}
          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700 shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-5xl text-center text-[#59D14C]">
                  Devis gratuit
                </CardTitle>
                <CardDescription className="text-gray-300 text-sm">
                  Quelques informations suffisent pour recevoir votre estimation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Personal Info - Condensed */}
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Nom *
                      </label>
                      <Input
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        placeholder="Votre nom"
                        className="bg-gray-700 border-gray-600 text-white h-9"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Téléphone *
                      </label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="06 12 34 56 78"
                        className="bg-gray-700 border-gray-600 text-white h-9"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="votre@email.com"
                      className="bg-gray-700 border-gray-600 text-white h-9"
                    />
                  </div>

                  {/* Service selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Type de service *
                    </label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) =>
                        handleInputChange("serviceType", value)
                      }
                    >
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white h-9">
                        <SelectValue placeholder="Sélectionnez un service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="toiture">
                          Nettoyage de toiture
                        </SelectItem>
                        <SelectItem value="facade">
                          Nettoyage de façade
                        </SelectItem>
                        <SelectItem value="terrasse">
                          Nettoyage de terrasse
                        </SelectItem>
                        <SelectItem value="complet">
                          Nettoyage complet
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message and Photos */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Message
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Décrivez votre projet..."
                        className="bg-gray-700 border-gray-600 text-white min-h-[60px]"
                        rows={3}
                      />
                    </div>

                    {/* Photo Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Photos (optionnel)
                      </label>
                      <div
                        className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors ${
                          dragActive
                            ? "border-[#59D14C] bg-green-50/5"
                            : "border-gray-600 hover:border-gray-500"
                        }`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                      >
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleFileSelect}
                          className="hidden"
                          id="file-upload"
                        />
                        <label
                          htmlFor="file-upload"
                          className="cursor-pointer flex flex-col items-center space-y-2"
                        >
                          <i className="fas fa-camera text-2xl text-gray-400"></i>
                          <span className="text-sm text-gray-300">
                            Glissez vos photos ici
                          </span>
                          <span className="text-xs text-gray-400">
                            ou cliquez pour sélectionner
                          </span>
                        </label>

                        {formData.images.length > 0 && (
                          <div className="mt-3 text-xs text-[#59D14C]">
                            {formData.images.length} photo(s) sélectionnée(s)
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full bg-[#27851E] hover:bg-[#1F6B15] text-white h-10"
                  >
                    {submitMutation.isPending ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Envoi en cours...</span>
                      </div>
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

            {/* Catchy phrase */}
            <div className="bg-gradient-to-r from-[#27851E] to-[#59D14C] rounded-xl p-6 text-center">
              <h3 className="text-white font-bold text-lg mb-2">
                🌟 Transformez vos extérieurs dès aujourd'hui !
              </h3>
              <p className="text-white/90 text-sm">
                Rejoignez plus de 500 clients satisfaits qui ont fait confiance
                à notre expertise écologique.
                <br />
                <strong>
                  Devis gratuit sous 24h • Sans engagement • Résultats garantis
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

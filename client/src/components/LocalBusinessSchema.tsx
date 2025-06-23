import { useEffect } from 'react';

// Schema enrichi pour entreprise locale avec toutes vos spécialités
export default function LocalBusinessSchema() {
  useEffect(() => {
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "aqua-toiture-facade",
      "alternateName": "Aqua Toiture Façade Bruxelles",
      "description": "Expert en nettoyage toiture Bruxelles, démoussage terrasse et nettoyage façade haute pression. Services B2B pour grandes surfaces, entrepôts. Interventions d'urgence 24h/7j.",
      "url": "https://aqua-toiture-facade.be",
      "telephone": "+32497175556",
      "email": "info@aquatf.be",
      "sameAs": [
        "https://www.facebook.com/aqua-toiture-facade",
        "https://www.linkedin.com/company/aqua-toiture-facade"
      ],
      "logo": "https://aqua-toiture-facade.be/logo.png",
      "image": [
        "https://aqua-toiture-facade.be/images/nettoyage-toiture-bruxelles.jpg",
        "https://aqua-toiture-facade.be/images/demoussage-terrasse.jpg",
        "https://aqua-toiture-facade.be/images/nettoyage-facade-magasin.jpg"
      ],
      "priceRange": "€€",
      "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "Invoice"],
      "currenciesAccepted": "EUR",
      "openingHours": [
        "Mo-Fr 08:00-18:00",
        "Sa 09:00-17:00",
        "Su 09:00-15:00"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bruxelles",
        "addressRegion": "Bruxelles-Capitale",
        "addressCountry": "BE",
        "postalCode": "1000"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 50.8503396,
        "longitude": 4.3517103
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Bruxelles"
        },
        {
          "@type": "City", 
          "name": "Anderlecht"
        },
        {
          "@type": "City",
          "name": "Uccle"
        },
        {
          "@type": "City",
          "name": "Ixelles"
        },
        {
          "@type": "City",
          "name": "Wavre"
        },
        {
          "@type": "City",
          "name": "Waterloo"
        }
      ],
      "knowsAbout": [
        "nettoyage toiture Bruxelles",
        "démoussage toiture",
        "nettoyage terrasse Bruxelles", 
        "nettoyage façade haute pression",
        "nettoyage façade magasin",
        "nettoyage extérieur supermarché",
        "nettoyage entrepôt",
        "intervention rapide nettoyage",
        "traitement hydrofuge toiture",
        "nettoyage escalier extérieur"
      ],
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nettoyage Toiture Karcher Bruxelles",
            "description": "Service professionnel de nettoyage toiture avec matériel Karcher haute pression"
          },
          "areaServed": "Bruxelles",
          "availableAtOrFrom": {
            "@type": "Place",
            "name": "Bruxelles"
          }
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Catalogue Services Nettoyage",
        "itemListElement": [
          {
            "@type": "OfferCatalogItem",
            "itemOffered": {
              "@type": "Service",
              "name": "Nettoyage Toiture Résidentiel",
              "alternateName": "nettoyage toiture Bruxelles",
              "description": "Nettoyage toiture karcher, démoussage et traitement hydrofuge"
            }
          },
          {
            "@type": "OfferCatalogItem", 
            "itemOffered": {
              "@type": "Service",
              "name": "Services B2B Commerciaux",
              "alternateName": "nettoyage façade magasin",
              "description": "Nettoyage façade Lidl, Carrefour, nettoyage entrepôt, station essence"
            }
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(localBusinessSchema);
    script.id = 'local-business-schema';
    
    const existingScript = document.getElementById('local-business-schema');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('local-business-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
}

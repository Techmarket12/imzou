import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
  service?: string;
  location?: string;
}

export default function SEOHead({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  canonicalUrl,
  service,
  location
}: SEOHeadProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', keywords);
      document.head.appendChild(metaKeywords);
    }

    // Update Open Graph title
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute('content', ogTitle || title);
    }

    // Update Open Graph description
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescMeta) {
      ogDescMeta.setAttribute('content', ogDescription || description);
    }

    // Add canonical URL if provided
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', canonicalUrl);
      } else {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        canonical.setAttribute('href', canonicalUrl);
        document.head.appendChild(canonical);
      }
    }

    // Add service-specific schema.org markup
    if (service && location) {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript && existingScript.textContent?.includes('LocalBusiness')) {
        try {
          const schema = JSON.parse(existingScript.textContent);
          
          // Add service-specific information
          schema.serviceType = schema.serviceType || [];
          if (!schema.serviceType.includes(service)) {
            schema.serviceType.push(service);
          }

          // Add location-specific area served
          if (schema.areaServed) {
            const locationExists = schema.areaServed.some((area: any) => 
              area.name && area.name.includes(location)
            );
            if (!locationExists) {
              schema.areaServed.push({
                "@type": "Place",
                "name": location
              });
            }
          }

          existingScript.textContent = JSON.stringify(schema, null, 2);
        } catch (e) {
          console.warn('Could not update existing schema markup');
        }
      }
    }

    // Add hreflang for French/Belgian targeting
    let hreflang = document.querySelector('link[hreflang="fr-BE"]');
    if (!hreflang) {
      hreflang = document.createElement('link');
      hreflang.setAttribute('rel', 'alternate');
      hreflang.setAttribute('hreflang', 'fr-BE');
      hreflang.setAttribute('href', window.location.href);
      document.head.appendChild(hreflang);
    }

  }, [title, description, keywords, ogTitle, ogDescription, canonicalUrl, service, location]);

  return null; // This component doesn't render anything
}

// Pre-defined SEO configurations for each service page
export const seoConfigs = {
  toiture: {
    title: "Nettoyage Toiture Bruxelles | Démoussage Toiture | aqua-toiture-facade",
    description: "Nettoyage toiture Bruxelles ✓ Démoussage toiture Anderlecht, Uccle, Ixelles ✓ Traitement hydrofuge ✓ Nettoyage toiture karcher ✓ Devis gratuit ✓ Intervention rapide",
    keywords: "nettoyage toiture Bruxelles, démoussage toiture Anderlecht, nettoyage toiture Uccle, démoussage toiture Ixelles, traitement hydrofuge toiture, nettoyage toiture karcher, prix nettoyage toiture, devis nettoyage toiture, intervention rapide toiture, nettoyage gouttières",
    service: "Nettoyage toiture",
    ogTitle: "Nettoyage Toiture Bruxelles - Démoussage Professionnel",
    ogDescription: "Spécialiste nettoyage toiture et démoussage à Bruxelles, Anderlecht, Uccle, Ixelles. Devis gratuit."
  },
  facade: {
    title: "Nettoyage Façade Bruxelles | Démoussage Façade Haute Pression | aqua-toiture-facade", 
    description: "Nettoyage façade Bruxelles ✓ Démoussage façade Anderlecht, Saint-Gilles, Etterbeek ✓ Nettoyage façade karcher ✓ Traitement hydrofuge façade ✓ Prix compétitif ✓ Devis gratuit",
    keywords: "nettoyage façade Bruxelles, démoussage façade Anderlecht, nettoyage façade Saint-Gilles, nettoyage façade Etterbeek, nettoyage façade karcher, traitement hydrofuge façade, prix nettoyage façade, nettoyage graffitis façade, nettoyage façade haute pression",
    service: "Nettoyage façade",
    ogTitle: "Nettoyage Façade Bruxelles - Expert Démoussage",
    ogDescription: "Expert nettoyage façade et démoussage à Bruxelles. Service haute pression, traitement hydrofuge."
  },
  terrasse: {
    title: "Nettoyage Terrasse Bruxelles | Démoussage Terrasse | Escalier Extérieur | aqua-toiture-facade",
    description: "Nettoyage terrasse Bruxelles ✓ Démoussage terrasse Anderlecht, Uccle ✓ Nettoyage escalier extérieur ✓ Nettoyage entrée maison ✓ Nettoyage allée piétonne ✓ Devis gratuit",
    keywords: "nettoyage terrasse Bruxelles, démoussage terrasse Anderlecht, nettoyage terrasse Uccle, nettoyage escalier extérieur, nettoyage entrée maison, nettoyage allée piétonne, nettoyage abords maison, démoussage terrasse Ixelles",
    service: "Nettoyage terrasse",
    ogTitle: "Nettoyage Terrasse Bruxelles - Démoussage Escalier",
    ogDescription: "Spécialiste nettoyage terrasse et escalier extérieur à Bruxelles. Démoussage professionnel."
  },
  contact: {
    title: "Contact Nettoyage Toiture Bruxelles | Devis Gratuit | aqua-toiture-facade",
    description: "Contact pour nettoyage toiture Bruxelles ✓ Devis gratuit démoussage ✓ Prix nettoyage façade ✓ Intervention Anderlecht, Uccle, Wavre, Waterloo ✓ Service rapide",
    keywords: "contact nettoyage toiture, devis gratuit Bruxelles, prix nettoyage toiture Uccle, devis démoussage Waterloo, contact aqua-toiture-facade, intervention rapide, service Brabant Wallon",
    service: "Contact et devis",
    ogTitle: "Contact Nettoyage Toiture - Devis Gratuit Bruxelles",
    ogDescription: "Contactez-nous pour un devis gratuit de nettoyage toiture, façade et terrasse à Bruxelles."
  },
  b2b: {
    title: "Nettoyage Façade Magasin | Grande Surface | Entrepôt | aqua-toiture-facade",
    description: "Nettoyage façade magasin haute pression ✓ Nettoyage extérieur supermarché ✓ Nettoyage façade Lidl Carrefour ✓ Nettoyage entrepôt ✓ Station essence ✓ Intervention rapide ✓ Devis gratuit",
    keywords: "nettoyage façade magasin haute pression, nettoyage extérieur supermarché, nettoyage façade Lidl, nettoyage façade Carrefour, nettoyage entrepôt haute pression, nettoyage station essence, nettoyage parking supermarché, nettoyage vitrine magasin professionnel, devis nettoyage façade supermarché, intervention rapide nettoyage grande surface",
    service: "Services B2B commerciaux",
    ogTitle: "Nettoyage Façade Magasin - Grande Surface - Entrepôt", 
    ogDescription: "Spécialiste nettoyage façade magasin, supermarché, entrepôt. Service B2B haute pression pour Lidl, Carrefour, stations essence."
  }
};

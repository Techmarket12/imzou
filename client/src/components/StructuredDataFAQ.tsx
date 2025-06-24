import { useEffect } from 'react';

// Données FAQ structurées pour le SEO
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le prix du nettoyage toiture à Bruxelles ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le prix nettoyage toiture Bruxelles varie entre 8€ et 25€/m² selon le type de toiture et la surface. Le tarif inclut le démoussage toiture, le nettoyage haute pression et le traitement hydrofuge. Nous proposons un devis nettoyage toiture gratuit avec inspection complète à Anderlecht, Uccle, Ixelles et toute la région."
      }
    },
    {
      "@type": "Question", 
      "name": "Intervenez-vous pour le nettoyage façade magasin et grande surface ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, nous sommes spécialisés dans le nettoyage façade magasin haute pression et nettoyage extérieur supermarché. Nos services B2B incluent nettoyage façade Lidl, nettoyage façade Carrefour, nettoyage station essence et nettoyage entrepôt. Intervention rapide nettoyage grande surface garantie."
      }
    },
    {
      "@type": "Question",
      "name": "Proposez-vous des interventions d'urgence ?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Absolument ! Nous proposons nettoyage toiture urgence, intervention rapide nettoyage façade et nettoyage terrasse express 24h/7j. Nos services d'urgence incluent nettoyage toiture après tempête, nettoyage façade après graffiti et urgence nettoyage extérieur commerce avec réponse sous 2h maximum."
      }
    },
    {
      "@type": "Question",
      "name": "Dans quelles communes intervenez-vous ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous intervenons dans toute la région de Bruxelles-Capitale (Anderlecht, Uccle, Ixelles, Etterbeek, Saint-Gilles, Schaerbeek), Brabant Wallon (Wavre, Waterloo, Braine-l'Alleud, Nivelles) et Brabant Flamand (Zaventem, Dilbeek, Tervuren, Vilvoorde) pour tous nos services de nettoyage."
      }
    },
    {
      "@type": "Question",
      "name": "Comment se déroule le démoussage toiture ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le démoussage toiture commence par une inspection gratuite. Nous utilisons ensuite un nettoyage toiture karcher haute pression pour éliminer mousses et lichens, suivi d'un traitement hydrofuge toiture pour protection durable. Service professionnel avec garantie résultat."
      }
    },
    {
      "@type": "Question",
      "name": "Nettoyez-vous les terrasses et escaliers extérieurs ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, nous proposons nettoyage terrasse Bruxelles, démoussage terrasse et nettoyage escalier extérieur. Nos services incluent également nettoyage entrée maison, nettoyage allée piétonne et nettoyage abords maison. Traitement anti-glisse disponible pour sécuriser vos surfaces."
      }
    }
  ]
};

export default function StructuredDataFAQ() {
  useEffect(() => {
    // Ajouter les données structurées FAQ au head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqStructuredData);
    script.id = 'faq-structured-data';
    
    // Supprimer l'ancien script s'il existe
    const existingScript = document.getElementById('faq-structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);

    // Cleanup
    return () => {
      const scriptToRemove = document.getElementById('faq-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null; // Ce composant n'affiche rien
}
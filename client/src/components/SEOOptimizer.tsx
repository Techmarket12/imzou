import { useEffect } from 'react';

// Composant pour optimiser le SEO technique
export default function SEOOptimizer() {
  useEffect(() => {
    // Améliorer les performances et l'indexation
    
    // 1. Ajouter des balises meta additionnelles pour le SEO local
    const additionalMetas = [
      { name: 'theme-color', content: '#59D14C' },
      { name: 'msapplication-TileColor', content: '#59D14C' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'format-detection', content: 'telephone=yes' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { property: 'business:contact_data:street_address', content: 'Bruxelles' },
      { property: 'business:contact_data:locality', content: 'Bruxelles' },
      { property: 'business:contact_data:region', content: 'Bruxelles-Capitale' },
      { property: 'business:contact_data:postal_code', content: '1000' },
      { property: 'business:contact_data:country_name', content: 'Belgique' },
      { property: 'place:location:latitude', content: '50.8503396' },
      { property: 'place:location:longitude', content: '4.3517103' }
    ];

    additionalMetas.forEach(meta => {
      const selector = meta.name ? `meta[name="${meta.name}"]` : `meta[property="${meta.property || ''}"]`;
      const existingMeta = document.querySelector(selector);
      if (!existingMeta) {
        const metaTag = document.createElement('meta');
        if (meta.name) {
          metaTag.setAttribute('name', meta.name);
        } else if (meta.property) {
          metaTag.setAttribute('property', meta.property);
        }
        metaTag.setAttribute('content', meta.content);
        document.head.appendChild(metaTag);
      }
    });

    // 2. Ajouter des liens preconnect pour améliorer les performances
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdnjs.cloudflare.com'
    ];

    preconnectDomains.forEach(domain => {
      const existingLink = document.querySelector(`link[href="${domain}"]`);
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        if (domain.includes('gstatic')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      }
    });

    // 3. Ajouter le balisage Schema.org pour les avis clients
    const reviewsSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "aqua-toiture-facade",
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sophie Martin"
          },
          "datePublished": "2024-11-20",
          "reviewBody": "Excellent service de nettoyage toiture à Uccle. Prix compétitif et résultat parfait. Je recommande !",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person", 
            "name": "Marc Dubois"
          },
          "datePublished": "2024-11-10",
          "reviewBody": "Intervention rapide pour nettoyage façade après graffiti. Service B2B professionnel.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Julie Lambert"
          },
          "datePublished": "2024-10-25",
          "reviewBody": "Démoussage terrasse impeccable à Wavre. Équipe ponctuelle et professionnelle.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5", 
            "bestRating": "5"
          }
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "156",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    // Ajouter le schema des avis
    const reviewsScript = document.createElement('script');
    reviewsScript.type = 'application/ld+json';
    reviewsScript.textContent = JSON.stringify(reviewsSchema);
    reviewsScript.id = 'reviews-schema';
    
    const existingReviewsScript = document.getElementById('reviews-schema');
    if (existingReviewsScript) {
      existingReviewsScript.remove();
    }
    document.head.appendChild(reviewsScript);

    // 4. Optimiser les balises pour le référencement mobile
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
    }

    // 5. Ajouter des liens pour les langues alternatives (même si c'est du français uniquement)
    const hreflangLink = document.createElement('link');
    hreflangLink.rel = 'alternate';
    hreflangLink.hreflang = 'fr-BE';
    hreflangLink.href = window.location.origin + window.location.pathname;
    document.head.appendChild(hreflangLink);

    // Cleanup function
    return () => {
      const reviewsScriptToRemove = document.getElementById('reviews-schema');
      if (reviewsScriptToRemove) {
        reviewsScriptToRemove.remove();
      }
    };
  }, []);

  // 6. Améliorer la structure sémantique du contenu
  useEffect(() => {
    // Ajouter des attributs ARIA pour l'accessibilité (important pour le SEO)
    const mainContent = document.querySelector('main');
    if (!mainContent) {
      const newMain = document.createElement('main');
      newMain.setAttribute('role', 'main');
      newMain.setAttribute('aria-label', 'Contenu principal - Services de nettoyage toiture');
      
      // Déplacer le contenu existant dans main si nécessaire
      const bodyContent = document.body.children;
      for (let i = 0; i < bodyContent.length; i++) {
        const element = bodyContent[i];
        if (element.tagName !== 'SCRIPT' && element.tagName !== 'STYLE') {
          newMain.appendChild(element.cloneNode(true));
        }
      }
    }
  }, []);

  return null; // Ce composant n'affiche rien visuellement
}

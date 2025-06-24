import { useEffect } from 'react';

// Optimise l'indexation Google pour toutes les pages
export default function GoogleIndexingOptimizer() {
  useEffect(() => {
    // 1. Ajouter les balises Open Graph pour un meilleur partage social
    const openGraphTags = [
      { property: 'og:site_name', content: 'aqua-toiture-facade' },
      { property: 'og:locale', content: 'fr_BE' },
      { property: 'og:type', content: 'website' },
      { property: 'fb:app_id', content: '1234567890' }, // Remplacer par votre vraie app ID Facebook
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Nettoyage toiture façade professionnel' }
    ];

    openGraphTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!existingTag) {
        const metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        metaTag.setAttribute('content', tag.content);
        document.head.appendChild(metaTag);
      }
    });

    // 2. Ajouter Twitter Card pour un meilleur référencement social
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@aquatoiturefacade' },
      { name: 'twitter:creator', content: '@aquatoiturefacade' },
      { name: 'twitter:domain', content: 'aqua-toiture-facade.be' }
    ];

    twitterTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!existingTag) {
        const metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        metaTag.setAttribute('content', tag.content);
        document.head.appendChild(metaTag);
      }
    });

    // 3. Ajouter des balises de géolocalisation précises pour le SEO local
    const geoTags = [
      { name: 'geo.region', content: 'BE-BRU' },
      { name: 'geo.placename', content: 'Bruxelles' },
      { name: 'geo.position', content: '50.8503396;4.3517103' },
      { name: 'ICBM', content: '50.8503396, 4.3517103' },
      { name: 'DC.title', content: 'Nettoyage toiture façade Bruxelles' }
    ];

    geoTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!existingTag) {
        const metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        metaTag.setAttribute('content', tag.content);
        document.head.appendChild(metaTag);
      }
    });

    // 4. Ajouter un lien canonique pour éviter le contenu dupliqué
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = window.location.href;
      document.head.appendChild(canonical);
    }

    // 5. Ajouter des liens vers le sitemap pour faciliter l'indexation
    const sitemapLink = document.querySelector('link[rel="sitemap"]');
    if (!sitemapLink) {
      const sitemap = document.createElement('link');
      sitemap.rel = 'sitemap';
      sitemap.type = 'application/xml';
      sitemap.title = 'Sitemap';
      sitemap.href = '/sitemap.xml';
      document.head.appendChild(sitemap);
    }

    // 6. Optimiser les balises pour Core Web Vitals
    const performanceTags = [
      { name: 'referrer', content: 'strict-origin-when-cross-origin' },
      { name: 'color-scheme', content: 'light dark' },
      { name: 'supported-color-schemes', content: 'light dark' }
    ];

    performanceTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!existingTag) {
        const metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        metaTag.setAttribute('content', tag.content);
        document.head.appendChild(metaTag);
      }
    });

    // 7. Ajouter schema Organization pour renforcer l'identité business
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "aqua-toiture-facade",
      "legalName": "Aqua Toiture Façade SPRL",
      "url": "https://aqua-toiture-facade.be",
      "logo": "https://aqua-toiture-facade.be/logo.png",
      "foundingDate": "2020",
      "founders": [
        {
          "@type": "Person",
          "name": "Expert Nettoyage"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rue de Bruxelles",
        "addressLocality": "Bruxelles", 
        "addressRegion": "Bruxelles-Capitale",
        "postalCode": "1000",
        "addressCountry": "BE"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+32497175556",
        "contactType": "customer service",
        "availableLanguage": ["French", "Dutch"],
        "areaServed": "BE"
      },
      "sameAs": [
        "https://www.facebook.com/aqua-toiture-facade",
        "https://www.instagram.com/aqua_toiture_facade"
      ],
      "knowsAbout": [
        "nettoyage toiture",
        "démoussage",
        "nettoyage façade",
        "services B2B",
        "intervention urgence"
      ]
    };

    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.textContent = JSON.stringify(organizationSchema);
    orgScript.id = 'organization-schema';
    
    const existingOrgScript = document.getElementById('organization-schema');
    if (existingOrgScript) {
      existingOrgScript.remove();
    }
    document.head.appendChild(orgScript);

    // 8. Assurer que la page soit marquée comme indexable
    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      const robots = document.createElement('meta');
      robots.name = 'robots';
      robots.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
      document.head.appendChild(robots);
    } else {
      robotsMeta.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // Cleanup function
    return () => {
      const orgScriptToRemove = document.getElementById('organization-schema');
      if (orgScriptToRemove) {
        orgScriptToRemove.remove();
      }
    };
  }, []);

  return null;
}
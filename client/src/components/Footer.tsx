export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerSections = {
    services: [
      { label: "Nettoyage Toiture", href: "toiture" },
      { label: "Nettoyage Terrasse", href: "terrasse" },
      { label: "Nettoyage Façade", href: "facade" },
      { label: "Nos Réalisations", href: "realisations" }
    ],
    about: [
      { label: "Qui Sommes-Nous", href: "about" },
      { label: "Nos Valeurs", href: "#" },
      { label: "Certifications", href: "#" },
      { label: "Garanties", href: "#" }
    ],
    contact: [
      "+32 xx xxx xx xx",
      "contact@aqua-bob-eponge.be",
      "Wallonie & Bruxelles"
    ]
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[hsl(160,84%,39%)] to-[hsl(199,89%,48%)] rounded-full flex items-center justify-center">
                <i className="fas fa-water text-white"></i>
              </div>
              <span className="text-lg font-bold">Aqua-BOB-L'éponge</span>
            </div>
            <p className="text-gray-400 mb-4">
              Votre partenaire de confiance pour le nettoyage professionnel en Wallonie et à Bruxelles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-[hsl(160,84%,39%)] rounded-full flex items-center justify-center hover:bg-[hsl(160,84%,35%)] transition-colors">
                <i className="fab fa-facebook-f text-white text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-[hsl(199,89%,48%)] rounded-full flex items-center justify-center hover:bg-[hsl(199,89%,44%)] transition-colors">
                <i className="fab fa-instagram text-white text-sm"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              {footerSections.services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(service.href)}
                    className="hover:text-[hsl(160,84%,39%)] transition-colors text-left"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">À Propos</h3>
            <ul className="space-y-2 text-gray-400">
              {footerSections.about.map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => item.href !== "#" && scrollToSection(item.href)}
                    className="hover:text-[hsl(160,84%,39%)] transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              {footerSections.contact.map((contact, index) => (
                <li key={index}>{contact}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Aqua-BOB-L'éponge. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

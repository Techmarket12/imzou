export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-slate-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#59D14C] mb-4">
                aqua-toiture-facade
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Spécialiste du nettoyage écologique de toitures, terrasses et
                façades à Bruxelles centre, Brabant Wallon et Brabant Flamand.
                Solutions professionnelles sans produits chimiques.
              </p>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#59D14C] rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#59D14C] rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#59D14C] rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#59D14C] rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              Nos Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-[#59D14C] transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-home mr-2 text-sm"></i>
                  Nettoyage de toitures
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-[#59D14C] transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-building mr-2 text-sm"></i>
                  Nettoyage de façades
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-[#59D14C] transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-square mr-2 text-sm"></i>
                  Nettoyage de terrasses
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-[#59D14C] transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-tint mr-2 text-sm"></i>
                  Traitement hydrofuge
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-[#59D14C] transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-leaf mr-2 text-sm"></i>
                  Démoussage écologique
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-[#59D14C] transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-spray-can mr-2 text-sm"></i>
                  Nettoyage haute pression
                </a>
              </li>
            </ul>
          </div>

          {/* Zones d'intervention */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              Zones d'Intervention
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#zones"
                  className="text-gray-300 hover:text-[#59D14C] transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-map-marker-alt mr-2 text-sm"></i>
                  Bruxelles-Capitale
                </a>
              </li>
              <li>
                <a
                  href="#zones"
                  className="text-gray-300 hover:text-[#59D14C] transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-map-marker-alt mr-2 text-sm"></i>
                  Brabant Wallon
                </a>
              </li>
              <li>
                <a
                  href="#zones"
                  className="text-gray-300 hover:text-[#59D14C] transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-map-marker-alt mr-2 text-sm"></i>
                  Brabant Flamand
                </a>
              </li>
              <li>
                <a
                  href="#zones"
                  className="text-gray-300 hover:text-[#59D14C] transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-map-marker-alt mr-2 text-sm"></i>
                  Wavre et environs
                </a>
              </li>
              <li>
                <a
                  href="#zones"
                  className="text-gray-300 hover:text-[#59D14C] transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-map-marker-alt mr-2 text-sm"></i>
                  Louvain-la-Neuve
                </a>
              </li>
              <li>
                <a
                  href="#zones"
                  className="text-gray-300 hover:text-[#59D14C] transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-map-marker-alt mr-2 text-sm"></i>
                  Nivelles et région
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-phone text-[#59D14C] mr-3 mt-1"></i>
                <div>
                  <p className="text-gray-300">Téléphone</p>
                  <a
                    href="tel:+32123456789"
                    className="text-white font-semibold hover:text-[#59D14C] transition-colors"
                  >
                    +32 123 456 789
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-envelope text-[#59D14C] mr-3 mt-1"></i>
                <div>
                  <p className="text-gray-300">Email</p>
                  <a
                    href="mailto:contact@aqua-toiture-facade.be"
                    className="text-white font-semibold hover:text-[#59D14C] transition-colors"
                  >
                    contact@aqua-toiture-facade.be
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-[#59D14C] mr-3 mt-1"></i>
                <div>
                  <p className="text-gray-300">Adresse</p>
                  <p className="text-white">
                    123 Rue de l'Exemple
                    <br />
                    1000 Bruxelles, Belgique
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-clock text-[#59D14C] mr-3 mt-1"></i>
                <div>
                  <p className="text-gray-300">Horaires</p>
                  <p className="text-white">
                    Lun - Ven: 8h00 - 18h00
                    <br />
                    Sam: 9h00 - 16h00
                    <br />
                    Dim: Urgences uniquement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 aqua-toiture-facade. Tous droits réservés.
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-[#59D14C] transition-colors"
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#59D14C] transition-colors"
              >
                Politique de confidentialité
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#59D14C] transition-colors"
              >
                Conditions générales
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#59D14C] transition-colors"
              >
                Plan du site
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating contact button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="tel:+32123456789"
          className="bg-[#27851E] hover:bg-[#59D14C] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        >
          <i className="fas fa-phone text-lg"></i>
        </a>
      </div>
    </footer>
  );
}

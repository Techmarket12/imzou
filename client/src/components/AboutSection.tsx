export default function AboutSection() {
  const stats = [
    {
      number: "15+",
      label: "Années d'expérience",
      icon: "fas fa-calendar-alt",
    },
    {
      number: "500+",
      label: "Clients satisfaits",
      icon: "fas fa-users",
    },
    {
      number: "100%",
      label: "Produits écologiques",
      icon: "fas fa-leaf",
    },
    {
      number: "24h",
      label: "Délai de réponse",
      icon: "fas fa-clock",
    },
  ];

  const values = [
    {
      title: "Expertise Professionnelle",
      description:
        "Notre équipe maîtrise toutes les techniques de nettoyage adaptées à chaque type de surface et de revêtement.",
      icon: "fas fa-award",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Respect de l'Environnement",
      description:
        "Nous utilisons exclusivement des méthodes écologiques sans produits chimiques, préservant votre santé et la nature.",
      icon: "fas fa-leaf",
      color: "from-green-500 to-green-700",
    },
    {
      title: "Équipements de Pointe",
      description:
        "Nos machines haute pression et équipements spécialisés garantissent des résultats optimaux en toute sécurité.",
      icon: "fas fa-tools",
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "Service Client Excellence",
      description:
        "De la prise de contact au suivi post-intervention, nous vous accompagnons avec professionnalisme et transparence.",
      icon: "fas fa-handshake",
      color: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-bl from-gray-800 to-slate-900">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            À propos de <span className="text-[#59D14C]">nous</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <strong>aqua-toiture-facade</strong> est votre partenaire de
            confiance pour tous vos travaux de nettoyage professionnel à
            Bruxelles centre, Brabant Wallon et Braband Flamand. Depuis plus de
            15 ans, nous mettons notre expertise au service de la beauté et de
            la durabilité de votre habitat.
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-[#59D14C] to-[#27851E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${stat.icon} text-white text-lg`}></i>
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Notre mission */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Notre Mission
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Redonner vie à vos extérieurs tout en préservant
                l'environnement. Nous croyons qu'un nettoyage efficace ne doit
                pas compromettre la santé de votre famille ni celle de la
                planète.
              </p>
              <p className="text-gray-300 leading-relaxed">
                C'est pourquoi nous avons développé une approche 100%
                écologique, utilisant la puissance de la vapeur et de l'eau
                haute pression pour éliminer mousses, lichens et salissures sans
                aucun produit chimique.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#59D14C]/20 to-[#27851E]/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#59D14C] rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-seedling text-white text-2xl"></i>
                  </div>
                  <h4 className="text-white font-semibold text-xl">
                    100% Écologique
                  </h4>
                  <p className="text-gray-300 mt-2">Zéro produit chimique</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nos valeurs */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Nos Valeurs
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full hover:bg-gray-700/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <i className={`${value.icon} text-white`}></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">
                        {value.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#27851E] to-[#59D14C] rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-white mb-4">
              Prêt à redonner vie à vos extérieurs ?
            </h4>
            <p className="text-white/90 mb-6">
              Contactez-nous dès aujourd'hui pour un devis gratuit et
              personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-[#27851E] px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                <i className="fas fa-phone mr-2"></i>
                Appeler maintenant
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-[#27851E] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                <i className="fas fa-envelope mr-2"></i>
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

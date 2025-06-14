export default function WhyChooseSection() {
  const reasons = [
    {
      icon: "fas fa-certificate",
      title: "Expertise reconnue",
      description: "Nous sommes spécialisés dans le nettoyage à la vapeur, sans utilisation de produits chimiques.",
      color: "from-green-500 to-green-700"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Qualité garantie",
      description: "Nous nous engageons formellement sur la qualité de notre travail, à chaque étape de nos interventions.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: "fas fa-clock",
      title: "Réactivité exemplaire",
      description: "Notre équipe est réputée pour sa rapidité et son efficacité. Obtenez votre devis gratuit en moins de 24 heures.",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: "fas fa-tag",
      title: "Offres avantageuses",
      description: "Bénéficiez de tarifs très compétitifs, sans jamais compromettre l'excellence de nos services.",
      color: "from-orange-500 to-orange-700"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            4 raisons de choisir nos services{" "}
            <span className="text-[#59D14C]">en toute confiance</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Nous avons à cœur de toujours satisfaire notre clientèle par la qualité irréprochable de nos prestations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-[#59D14C]/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${reason.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <i className={`${reason.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
              </div>
              
              <p className="text-gray-300 text-center leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#59D14C]/10 to-[#27851E]/10 rounded-xl p-8 border border-[#59D14C]/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prêt à découvrir nos services ?
            </h3>
            <p className="text-gray-300 mb-6">
              Contactez-nous dès maintenant pour un devis gratuit et personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-[#27851E] hover:bg-[#1F6B15] text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer">
                <i className="fas fa-phone mr-2"></i>
                09 70 35 76 70
              </div>
              <div className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 transition-colors cursor-pointer">
                <i className="fas fa-envelope mr-2"></i>
                Demander un devis
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
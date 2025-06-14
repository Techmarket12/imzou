import aboutImagePath from "@assets/image_1749796477890.png";

export default function AboutSection() {
  const companyFeatures = [
    {
      icon: "fas fa-users",
      title: "Équipe Experte",
      description: "Techniciens formés et certifiés",
      color: "bg-[#59D14C]"
    },
    {
      icon: "fas fa-leaf",
      title: "Eco-Responsable",
      description: "Produits respectueux de l'environnement",
      color: "bg-[hsl(199,89%,48%)]"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={aboutImagePath} 
              alt="aqua-toiture-facade - Nettoyage professionnel de toiture"
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Qui Sommes-Nous ?</h2>
            <p className="text-xl text-gray-300 mb-6">
              aqua-toiture-facade est une entreprise familiale belge spécialisée dans le nettoyage professionnel depuis plus de 15 ans.
            </p>
            <p className="text-gray-300 mb-6">
              Basés en Wallonie, nous intervenons dans toute la région wallonne et à Bruxelles pour offrir des services de nettoyage et de protection de qualité supérieure pour vos toitures, terrasses et façades.
            </p>
            <p className="text-gray-300 mb-8">
              Notre équipe expérimentée utilise des techniques et des équipements de dernière génération pour garantir des résultats durables tout en respectant l'environnement.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {companyFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${feature.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

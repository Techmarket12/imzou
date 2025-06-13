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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Portrait de l'équipe professionnelle de nettoyage" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-[hsl(220,26%,14%)] mb-6">Qui Sommes-Nous ?</h2>
            <p className="text-xl text-[hsl(215,16%,47%)] mb-6">
              Aqua-BOB-L'éponge est une entreprise familiale belge spécialisée dans le nettoyage professionnel depuis plus de 15 ans.
            </p>
            <p className="text-[hsl(215,16%,47%)] mb-6">
              Basés en Wallonie, nous intervenons dans toute la région wallonne et à Bruxelles pour offrir des services de nettoyage et de protection de qualité supérieure pour vos toitures, terrasses et façades.
            </p>
            <p className="text-[hsl(215,16%,47%)] mb-8">
              Notre équipe expérimentée utilise des techniques et des équipements de dernière génération pour garantir des résultats durables tout en respectant l'environnement.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {companyFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${feature.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="font-semibold text-[hsl(220,26%,14%)] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[hsl(215,16%,47%)]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

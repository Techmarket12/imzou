export default function WhyChooseUsSection() {
  const advantages = [
    {
      icon: "fas fa-certificate",
      title: "Expertise Certifiée",
      description: "Équipe formée aux dernières techniques de nettoyage et protection.",
      color: "bg-[#27851E]"
    },
    {
      icon: "fas fa-tools",
      title: "Équipement Professionnel",
      description: "Matériel haute performance pour des résultats durables.",
      color: "bg-[hsl(199,89%,48%)]"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Garantie Qualité",
      description: "Satisfaction garantie avec suivi post-intervention.",
      color: "bg-[hsl(220,26%,14%)]"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[hsl(220,26%,14%)] mb-6">Pourquoi Choisir Aqua-BOB-L'éponge ?</h2>
            <p className="text-xl text-[hsl(215,16%,47%)] mb-8">
              Plus de 15 ans d'expérience dans le nettoyage professionnel en Wallonie et à Bruxelles.
            </p>
            
            <div className="space-y-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${advantage.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <i className={`${advantage.icon} text-white`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[hsl(220,26%,14%)] mb-2">{advantage.title}</h3>
                    <p className="text-[hsl(215,16%,47%)]">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Équipe professionnelle de nettoyage en action" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
            <div className="absolute -bottom-6 -left-6 bg-[#27851E] text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Années d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

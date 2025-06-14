import { Card, CardContent } from "@/components/ui/card";

export default function ServiceAreasSection() {
  const serviceAreas = [
    {
      title: "Bruxelles",
      description: "Région de Bruxelles-Capitale",
      icon: "fas fa-city",
      communes: [
        "Anderlecht", "Auderghem", "Berchem-Sainte-Agathe", "Bruxelles",
        "Etterbeek", "Evere", "Forest", "Ganshoren", "Ixelles",
        "Jette", "Koekelberg", "Molenbeek-Saint-Jean", "Saint-Gilles",
        "Saint-Josse-ten-Noode", "Schaerbeek", "Uccle", "Watermael-Boitsfort",
        "Woluwe-Saint-Lambert", "Woluwe-Saint-Pierre"
      ],
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Brabant Flamand",
      description: "Province du Brabant Flamand",
      icon: "fas fa-map",
      communes: [
        "Aarschot", "Affligem", "Asse", "Beersel", "Begijnendijk",
        "Bertem", "Bever", "Boortmeerbeek", "Dilbeek", "Drogenbos",
        "Galmaarden", "Gooik", "Grimbergen", "Halle", "Haaltert",
        "Herent", "Herne", "Hoeilaart", "Kampenhout", "Kapelle-op-den-Bos",
        "Kraainem", "Lennik", "Liedekerke", "Linkebeek", "Londerzeel",
        "Machelen", "Meise", "Merchtem", "Opwijk", "Overijse",
        "Pepingen", "Rhode-Saint-Genèse", "Roosdaal", "Rotselaar",
        "Sint-Pieters-Leeuw", "Steenokkerzeel", "Ternat", "Tervuren",
        "Vilvoorde", "Wemmel", "Wezembeek-Oppem", "Zemst", "Zaventem"
      ],
      color: "from-green-600 to-green-800"
    },
    {
      title: "Brabant Wallon",
      description: "Province du Brabant Wallon",
      icon: "fas fa-home",
      communes: [
        "Beauvechain", "Braine-l'Alleud", "Braine-le-Château", "Chastre",
        "Chaumont-Gistoux", "Court-Saint-Étienne", "Genappe", "Grez-Doiceau",
        "Hélécine", "Incourt", "Ittre", "Jodoigne", "La Hulpe",
        "Lasne", "Mont-Saint-Guibert", "Nivelles", "Orp-Jauche",
        "Ottignies-Louvain-la-Neuve", "Perwez", "Ramillies", "Rebecq",
        "Rixensart", "Tubize", "Villers-la-Ville", "Walhain", "Waterloo",
        "Wavre"
      ],
      color: "from-emerald-600 to-emerald-800"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Nos Zones d'<span className="text-[#59D14C]">Intervention</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            aqua-toiture-facade intervient dans toute la région de Bruxelles et les deux provinces du Brabant pour vos travaux de nettoyage professionnel.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {serviceAreas.map((area, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${area.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{area.title}</h3>
                  <p className="text-gray-300 text-sm">{area.description}</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[#59D14C] mb-3">Communes desservies :</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {area.communes.slice(0, 12).map((commune, idx) => (
                      <div key={idx} className="text-gray-300 flex items-center">
                        <i className="fas fa-check text-[#59D14C] text-xs mr-2"></i>
                        {commune}
                      </div>
                    ))}
                    {area.communes.length > 12 && (
                      <div className="col-span-2 text-center mt-2">
                        <span className="text-[#59D14C] text-sm font-medium">
                          + {area.communes.length - 12} autres communes
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <i className="fas fa-phone text-[#59D14C]"></i>
                    <span className="text-gray-300 text-sm">Intervention sous 48h</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold text-white mb-3">
              <i className="fas fa-info-circle text-[#59D14C] mr-2"></i>
              Information importante
            </h4>
            <p className="text-gray-300">
              Nous couvrons l'ensemble de ces zones avec une équipe mobile professionnelle. 
              Pour toute demande d'intervention, contactez-nous pour un devis gratuit et personnalisé.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
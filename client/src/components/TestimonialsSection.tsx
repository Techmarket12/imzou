import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marie-Claire D.",
      location: "Wavre",
      initials: "MC",
      rating: 5,
      review: "Travail impeccable sur notre toiture. L'équipe d'Aqua-BOB est professionnelle et le résultat dépasse nos attentes. Notre toit ressemble à neuf !",
      color: "bg-[#27851E]"
    },
    {
      name: "Pierre L.",
      location: "Bruxelles",
      initials: "PL",
      rating: 5,
      review: "Service rapide et efficace pour le nettoyage de notre terrasse. Prix correct et équipe sympathique. Je recommande vivement !",
      color: "bg-[hsl(199,89%,48%)]"
    },
    {
      name: "Sophie D.",
      location: "Namur",
      initials: "SD",
      rating: 5,
      review: "Excellent nettoyage de façade. Très bons conseils pour l'entretien futur. Une entreprise de confiance que nous utiliserons à nouveau.",
      color: "bg-[hsl(220,26%,14%)]"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[hsl(220,26%,14%)] mb-4">Ce Que Disent Nos Clients</h2>
          <p className="text-xl text-[hsl(215,16%,47%)]">La satisfaction de nos clients est notre priorité absolue</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
                <p className="text-[hsl(215,16%,47%)] mb-6 italic">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold`}>
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-[hsl(220,26%,14%)]">{testimonial.name}</h4>
                    <p className="text-sm text-[hsl(215,16%,47%)]">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

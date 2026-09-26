import { Star } from "lucide-react";

const testimonials = [
  { name: "Rahul Sharma", role: "Cricket Enthusiast", text: "Best turf in Vidisha! The night lighting is amazing and the surface quality is top-notch. We play here every weekend.", rating: 5 },
  { name: "Priya Patel", role: "Pickleball Player", text: "Finally a proper pickleball court in our city. The facility is clean, well-maintained, and the staff is super friendly.", rating: 5 },
  { name: "Amit Verma", role: "Corporate Team", text: "We booked T20 Arena for our office tournament. Everything was perfectly organized. Highly recommend for team events!", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Testimonials</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          What Players <span className="gradient-text">Say</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="glass-card rounded-2xl p-8 hover-neon group">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
            <div>
              <p className="font-display font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

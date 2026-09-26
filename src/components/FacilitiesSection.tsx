import { Volleyball, Lightbulb, ParkingSquare, Armchair, ShieldCheck, Dumbbell } from "lucide-react";

const facilities = [
  { icon: Volleyball, title: "Cricket Turf", desc: "Premium artificial turf with international-standard pitch dimensions." },
  { icon: ShieldCheck, title: "Pickleball Court", desc: "Regulation-size pickleball courts with professional-grade surfaces." },
  { icon: Lightbulb, title: "Night Lighting", desc: "High-powered LED floodlights for crisp visibility during night games." },
  { icon: Armchair, title: "Seating Area", desc: "Comfortable spectator seating with covered viewing gallery." },
  { icon: ParkingSquare, title: "Free Parking", desc: "Spacious parking area for cars and two-wheelers." },
  { icon: Dumbbell, title: "Equipment", desc: "Quality cricket bats, balls, pads, and pickleball gear available on-site." },
];

const FacilitiesSection = () => (
  <section id="facilities" className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">What We Offer</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          World-Class <span className="gradient-text">Facilities</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((f, i) => (
          <div
            key={f.title}
            className="glass-card rounded-2xl p-8 hover-neon group cursor-default"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <f.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{f.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FacilitiesSection;

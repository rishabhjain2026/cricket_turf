import { Shield, Zap, Target, Users } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Premium Surface", desc: "Tournament-grade artificial turf that mimics natural grass feel." },
  { icon: Zap, title: "Pro Environment", desc: "Professional-standard setup with nets, boundary markings, and more." },
  { icon: Target, title: "Multi-Sport", desc: "Cricket and pickleball under one roof — variety at its best." },
  { icon: Users, title: "Community", desc: "Join a thriving community of athletes and sports enthusiasts." },
];

const WhyChooseUs = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">The T20 Advantage</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Why Choose <span className="gradient-text">T20 Arena</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reasons.map((r, i) => (
          <div key={r.title} className="glass-card rounded-2xl p-8 flex gap-6 hover-neon group">
            <div className="w-14 h-14 min-w-[3.5rem] rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <r.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{r.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;

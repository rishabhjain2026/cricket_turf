import { Trophy, Users, Star } from "lucide-react";

const stats = [
  { icon: Trophy, value: "500+", label: "Matches Played" },
  { icon: Users, value: "2000+", label: "Happy Players" },
  { icon: Star, value: "4.9", label: "Average Rating" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">About Us</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Vidisha's <span className="gradient-text">Premier Sports</span> Arena
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          T20 Arena is a state-of-the-art sports facility in the heart of Vidisha, offering professional-grade cricket turf and pickleball courts. Whether you're a weekend warrior or a serious athlete, our world-class surfaces and facilities provide the perfect environment to train, compete, and have fun.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card rounded-2xl p-8 text-center hover-neon transition-all group">
            <stat.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <p className="font-display text-4xl font-bold gradient-text mb-2">{stat.value}</p>
            <p className="text-muted-foreground font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;

import heroImg from "@/assets/hero-turf.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BG Image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="T20 Arena turf" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-primary mb-4 animate-fade-in-up">
          Vidisha's Premium Sports Destination
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Play Like a Pro at{" "}
          <span className="gradient-text">T20 Arena</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          World-class cricket turf & pickleball court with professional-grade facilities, night lighting, and an electrifying atmosphere.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#booking"
            className="gradient-primary px-8 py-4 rounded-xl font-display text-lg font-semibold text-primary-foreground hover:opacity-90 transition-all animate-pulse-glow"
          >
            Book Your Slot
          </a>
          <a
            href="#facilities"
            className="glass-card px-8 py-4 rounded-xl font-display text-lg font-semibold text-foreground hover-neon"
          >
            Explore Facilities
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

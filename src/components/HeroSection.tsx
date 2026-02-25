import heroImage from "@/assets/hero-rice-field.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Lush green rice paddy field" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(142,44%,15%,0.7)] via-[hsl(142,44%,15%,0.5)] to-[hsl(142,44%,15%,0.8)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-gold-light font-heading text-lg md:text-xl mb-4 animate-fade-in tracking-widest uppercase">
          Welcome to
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground font-heading mb-6 animate-fade-in-up leading-tight">
          ALOK HARSH RICE MILL<br />PVT. LTD.
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 font-body mb-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Premium Quality Rice Manufacturer
        </p>
        <p className="text-gold-light font-heading text-2xl md:text-3xl italic mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          — Richness in Rice —
        </p>
        <a
          href="#contact"
          className="inline-block green-gradient text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Contact Us
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

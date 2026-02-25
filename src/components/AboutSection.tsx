import { Wheat, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import riceVarieties from "@/assets/rice-varieties.jpg";

const highlights = [
  "Premium quality rice with strict quality control",
  "Modern machinery for efficient processing",
  "Located in Gidha, Ara, Bihar",
  "Trusted by customers across the region",
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background overflow-hidden">
      <div ref={ref} className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <div className={`animate-reveal-left ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.1s" }}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden premium-shadow img-zoom aspect-[4/5]">
                <img src={riceVarieties} alt="Various rice varieties" className="w-full h-full object-cover" />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 md:right-8 bg-card rounded-2xl p-6 premium-shadow border border-border/50 max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <Wheat className="h-5 w-5 text-accent" />
                  <span className="font-heading text-lg font-semibold text-foreground">SONASHAKTI</span>
                </div>
                <p className="text-xs text-muted-foreground font-body">Our premium brand of quality rice</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className={`animate-reveal-right ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.3s" }}>
            <span className="section-label text-left">About Our Company</span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-8 leading-[1.1] text-left">
              Crafting Quality Rice<br />
              <span className="text-primary">Since Generations</span>
            </h2>

            <p className="text-muted-foreground leading-[1.8] mb-6 text-base">
              <strong className="text-foreground font-semibold">ALOK HARSH RICE MILL PVT. LTD.</strong> is a trusted rice manufacturing company located in Gidha, Ara, Bihar. Our brand <strong className="text-primary font-semibold">SONASHAKTI</strong> represents premium quality rice processed with modern machinery and strict quality control.
            </p>
            <p className="text-muted-foreground leading-[1.8] mb-10 text-base">
              We focus on delivering high quality rice with purity and nutrition. Our commitment to excellence has made us a preferred choice for customers seeking the finest rice products.
            </p>

            <ul className="space-y-4 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/80 font-body text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <div className="divider-line w-12 mx-0" />
              <span className="font-heading text-lg italic text-accent">Richness in Rice</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

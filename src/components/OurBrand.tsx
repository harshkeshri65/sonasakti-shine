import { Wheat } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import premiumRice from "@/assets/premium-rice.jpg";
import basmatiRice from "@/assets/basmati-rice.jpg";

const OurBrand = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div ref={ref} className="container mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">Our Brand</span>
          <h2 className="section-title text-foreground">
            Discover <span className="text-primary">SONASAKTI</span>
          </h2>
          <div className="divider-line mt-6 mb-6" />
          <p className="section-subtitle mb-0">
            SONASAKTI is our premium rice brand known for superior taste, purity and high nutritional value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {[
            { img: premiumRice, alt: "Premium rice grains", title: "Premium White Rice", desc: "Selected with care for everyday excellence and purity." },
            { img: basmatiRice, alt: "Basmati rice", title: "Aromatic Basmati", desc: "Long grain fragrance that elevates every meal." },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`animate-reveal ${isVisible ? "visible" : ""} group rounded-2xl overflow-hidden premium-shadow border border-border/40`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="img-zoom aspect-[16/10]">
                <img src={item.img} alt={item.alt} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 bg-card">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-14">
          <Wheat className="h-5 w-5 text-accent" />
          <span className="font-heading italic text-xl text-accent tracking-wide">Richness in Rice</span>
          <Wheat className="h-5 w-5 text-accent" />
        </div>
      </div>
    </section>
  );
};

export default OurBrand;

import { Wheat } from "lucide-react";
import premiumRice from "@/assets/premium-rice.jpg";
import basmatiRice from "@/assets/basmati-rice.jpg";

const OurBrand = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <p className="text-accent font-heading text-center text-sm tracking-widest uppercase mb-2">Our Brand</p>
        <h2 className="section-title text-foreground">
          Our Brand – <span className="text-primary">SONASAKTI</span>
        </h2>
        <p className="section-subtitle">
          SONASAKTI is our premium rice brand known for superior taste, purity and high nutritional value.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="rounded-xl overflow-hidden shadow-lg group">
            <img src={premiumRice} alt="Premium rice grains" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="p-6 bg-card border-t border-border">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Premium White Rice</h3>
              <p className="text-muted-foreground text-sm">Selected with care for everyday excellence.</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg group">
            <img src={basmatiRice} alt="Basmati rice in bowl" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="p-6 bg-card border-t border-border">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Aromatic Basmati</h3>
              <p className="text-muted-foreground text-sm">Long grain fragrance that elevates every meal.</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-10 text-accent">
          <Wheat className="h-5 w-5" />
          <span className="font-heading italic text-lg">Richness in Rice</span>
          <Wheat className="h-5 w-5" />
        </div>
      </div>
    </section>
  );
};

export default OurBrand;

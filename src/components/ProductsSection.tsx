import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import premiumRice from "@/assets/premium-rice.jpg";
import basmatiRice from "@/assets/basmati-rice.jpg";
import nonBasmatiRice from "@/assets/non-basmati-rice.jpg";
import brokenRice from "@/assets/broken-rice.jpg";
import riceBran from "@/assets/rice-bran.jpg";
import riceHusk from "@/assets/rice-husk.jpg";

const products = [
  { name: "Premium Rice", desc: "High quality selected rice grains with exceptional taste.", image: premiumRice },
  { name: "Basmati Rice", desc: "Long grain aromatic rice for special occasions.", image: basmatiRice },
  { name: "Non-Basmati Rice", desc: "Everyday quality rice for daily consumption.", image: nonBasmatiRice },
  { name: "Broken Rice", desc: "Used widely for commercial and industrial purposes.", image: brokenRice },
  { name: "Rice Bran", desc: "Healthy and nutritious rice byproduct.", image: riceBran },
  { name: "Rice Husk", desc: "Used for fuel, farming and industrial applications.", image: riceHusk },
];

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="products" className="section-padding bg-green-light overflow-hidden">
      <div ref={ref} className="container mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title text-foreground">
            Our <span className="text-primary">Products</span>
          </h2>
          <div className="divider-line mt-6 mb-6" />
          <p className="section-subtitle mb-0">Explore our range of premium rice products crafted with quality and care.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div
              key={p.name}
              className={`animate-reveal ${isVisible ? "visible" : ""} group bg-card rounded-2xl overflow-hidden premium-shadow border border-border/40 hover:border-primary/20 transition-all duration-500`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="img-zoom aspect-[4/3]">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-7">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{p.name}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

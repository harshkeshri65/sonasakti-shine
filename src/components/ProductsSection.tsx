import premiumRice from "@/assets/premium-rice.jpg";
import basmatiRice from "@/assets/basmati-rice.jpg";
import nonBasmatiRice from "@/assets/non-basmati-rice.jpg";
import brokenRice from "@/assets/broken-rice.jpg";
import riceBran from "@/assets/rice-bran.jpg";
import riceHusk from "@/assets/rice-husk.jpg";

const products = [
  { name: "Premium Rice", desc: "High quality selected rice grains.", image: premiumRice },
  { name: "Basmati Rice", desc: "Long grain aromatic rice.", image: basmatiRice },
  { name: "Non-Basmati Rice", desc: "Daily use quality rice.", image: nonBasmatiRice },
  { name: "Broken Rice", desc: "Used for commercial purposes.", image: brokenRice },
  { name: "Rice Bran", desc: "Healthy rice byproduct.", image: riceBran },
  { name: "Rice Husk", desc: "Used for fuel and farming.", image: riceHusk },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-green-light">
      <div className="container mx-auto">
        <p className="text-accent font-heading text-center text-sm tracking-widest uppercase mb-2">What We Offer</p>
        <h2 className="section-title text-foreground">
          Our <span className="text-primary">Products</span>
        </h2>
        <p className="section-subtitle">Explore our range of premium rice products crafted with quality and care.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.name}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border group"
            >
              <div className="overflow-hidden h-52">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{p.name}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

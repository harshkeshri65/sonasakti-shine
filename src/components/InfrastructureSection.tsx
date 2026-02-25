import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import millMachinery from "@/assets/mill-machinery.jpg";
import storageFacility from "@/assets/storage-facility.jpg";
import cleaningProcess from "@/assets/cleaning-process.jpg";
import packagingUnit from "@/assets/packaging-unit.jpg";

const infra = [
  { title: "Modern Mill Machinery", desc: "State-of-the-art equipment for efficient rice processing and milling.", image: millMachinery },
  { title: "Storage Facility", desc: "Large-scale, climate-controlled storage warehouses for freshness.", image: storageFacility },
  { title: "Cleaning & Sorting", desc: "Advanced grain cleaning and sorting systems ensuring purity.", image: cleaningProcess },
  { title: "Packaging Unit", desc: "Automated packaging lines ensuring freshness and hygiene.", image: packagingUnit },
];

const InfrastructureSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="infrastructure" className="section-padding bg-background overflow-hidden">
      <div ref={ref} className="container mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">Our Facility</span>
          <h2 className="section-title text-foreground">
            World-Class <span className="text-primary">Infrastructure</span>
          </h2>
          <div className="divider-line mt-6 mb-6" />
          <p className="section-subtitle mb-0">Modern facilities equipped with the latest technology for premium rice production.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
          {infra.map((item, i) => (
            <div
              key={item.title}
              className={`animate-reveal ${isVisible ? "visible" : ""} group rounded-2xl overflow-hidden premium-shadow border border-border/40 hover:border-primary/20 transition-all duration-500`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="img-zoom aspect-[16/10]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-7 bg-card">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;

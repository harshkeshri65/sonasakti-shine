import millMachinery from "@/assets/mill-machinery.jpg";
import storageFacility from "@/assets/storage-facility.jpg";
import cleaningProcess from "@/assets/cleaning-process.jpg";
import packagingUnit from "@/assets/packaging-unit.jpg";

const infra = [
  { title: "Modern Rice Mill Machinery", desc: "State-of-the-art equipment for efficient rice processing.", image: millMachinery },
  { title: "Storage Facility", desc: "Large-scale, climate-controlled storage warehouses.", image: storageFacility },
  { title: "Cleaning Process", desc: "Advanced grain cleaning and sorting systems.", image: cleaningProcess },
  { title: "Packaging Unit", desc: "Automated packaging lines ensuring freshness.", image: packagingUnit },
];

const InfrastructureSection = () => {
  return (
    <section id="infrastructure" className="section-padding bg-background">
      <div className="container mx-auto">
        <p className="text-accent font-heading text-center text-sm tracking-widest uppercase mb-2">Our Facility</p>
        <h2 className="section-title text-foreground">
          Our <span className="text-primary">Infrastructure</span>
        </h2>
        <p className="section-subtitle">Modern facilities equipped with the latest technology for premium rice production.</p>

        <div className="grid sm:grid-cols-2 gap-8">
          {infra.map((item) => (
            <div key={item.title} className="rounded-xl overflow-hidden shadow-lg group border border-border">
              <div className="overflow-hidden h-60">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 bg-card">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;

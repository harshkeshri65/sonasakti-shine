import { Wheat } from "lucide-react";
import riceVarieties from "@/assets/rice-varieties.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <p className="text-accent font-heading text-center text-sm tracking-widest uppercase mb-2">About Us</p>
        <h2 className="section-title text-foreground">
          Know Our <span className="text-primary">Company</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src={riceVarieties} alt="Various rice varieties" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
              ALOK HARSH RICE MILL PVT. LTD.
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ALOK HARSH RICE MILL PVT. LTD. is a trusted rice manufacturing company located in Gidha, Ara, Bihar. Our brand <strong className="text-primary">SONASAKTI</strong> represents premium quality rice processed with modern machinery and strict quality control.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We focus on delivering high quality rice with purity and nutrition. Our commitment to excellence has made us a preferred choice for customers seeking the finest rice products.
            </p>
            <div className="flex items-center gap-3 text-primary">
              <Wheat className="h-6 w-6 text-accent" />
              <span className="font-heading text-lg italic text-accent">Richness in Rice</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

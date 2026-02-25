import { useState } from "react";
import { X } from "lucide-react";
import premiumRice from "@/assets/premium-rice.jpg";
import basmatiRice from "@/assets/basmati-rice.jpg";
import riceBags from "@/assets/rice-bags.jpg";
import millMachinery from "@/assets/mill-machinery.jpg";
import storageFacility from "@/assets/storage-facility.jpg";
import riceVarieties from "@/assets/rice-varieties.jpg";
import cleaningProcess from "@/assets/cleaning-process.jpg";
import packagingUnit from "@/assets/packaging-unit.jpg";

const images = [
  { src: premiumRice, alt: "Premium rice grains" },
  { src: basmatiRice, alt: "Basmati rice" },
  { src: riceBags, alt: "Rice bags" },
  { src: millMachinery, alt: "Mill machinery" },
  { src: storageFacility, alt: "Storage facility" },
  { src: riceVarieties, alt: "Rice varieties" },
  { src: cleaningProcess, alt: "Cleaning process" },
  { src: packagingUnit, alt: "Packaging unit" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-green-light">
      <div className="container mx-auto">
        <p className="text-accent font-heading text-center text-sm tracking-widest uppercase mb-2">Photo Gallery</p>
        <h2 className="section-title text-foreground">
          Our <span className="text-primary">Gallery</span>
        </h2>
        <p className="section-subtitle">A visual journey through our rice mill and products.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <div
              key={img.alt}
              className="rounded-lg overflow-hidden shadow-md cursor-pointer group aspect-square"
              onClick={() => setLightbox(img.src)}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-primary-foreground" onClick={() => setLightbox(null)}>
            <X className="h-8 w-8" />
          </button>
          <img src={lightbox} alt="Gallery full view" className="max-w-full max-h-[85vh] rounded-xl shadow-2xl" />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
